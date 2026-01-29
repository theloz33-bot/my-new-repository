class GuestBook extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.entries = JSON.parse(localStorage.getItem('guestbook-entries')) || [];
    }

    connectedCallback() {
        this.render();
        this.shadowRoot.querySelector('form').addEventListener('submit', this.addEntry.bind(this));
    }

    addEntry(e) {
        e.preventDefault();
        const nameInput = this.shadowRoot.querySelector('#name');
        const messageInput = this.shadowRoot.querySelector('#message');
        const newEntry = {
            name: nameInput.value,
            message: messageInput.value,
            timestamp: new Date().toLocaleString(),
        };
        this.entries.unshift(newEntry); // Add to the beginning
        localStorage.setItem('guestbook-entries', JSON.stringify(this.entries));
        this.render();
        this.shadowRoot.querySelector('form').reset();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: var(--card-background-color, #fff);
                    border-radius: 0.5rem;
                    box-shadow: var(--card-shadow, 0 4px 8px rgba(0,0,0,0.1));
                    padding: calc(var(--spacing-unit, 1rem) * 2);
                    margin-top: calc(var(--spacing-unit, 1rem) * 2);
                }
                h3 {
                    font-size: var(--font-size-h3, 1.25rem);
                    font-weight: var(--font-weight-bold, 700);
                    color: var(--primary-color, #007bff);
                    margin: 0 0 calc(var(--spacing-unit, 1rem) * 1.5) 0;
                }
                form {
                    margin-bottom: calc(var(--spacing-unit, 1rem) * 2);
                }
                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                li {
                    border-top: 1px solid #eee;
                    padding: calc(var(--spacing-unit, 1rem) * 1.5) 0;
                }
                li:first-child {
                    border-top: none;
                    padding-top: 0;
                }
                .entry-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: calc(var(--spacing-unit, 1rem) * 0.5);
                }
                .entry-name {
                    font-weight: var(--font-weight-medium, 500);
                    color: var(--text-color, #333);
                }
                .entry-timestamp {
                    font-size: 0.8rem;
                    color: #777;
                }
                p {
                    margin: 0;
                }
            </style>
            <h3>방명록</h3>
            <form>
                <input type="text" id="name" placeholder="이름" required>
                <textarea id="message" placeholder="메시지를 남겨주세요." rows="4" required></textarea>
                <button type="submit">작성</button>
            </form>
            <ul>
                ${this.entries.map(entry => `
                    <li>
                        <div class="entry-header">
                            <span class="entry-name">${entry.name}</span>
                            <span class="entry-timestamp">${entry.timestamp}</span>
                        </div>
                        <p>${entry.message}</p>
                    </li>
                `).join('')}
            </ul>
        `;
    }
}

customElements.define('guest-book', GuestBook);
