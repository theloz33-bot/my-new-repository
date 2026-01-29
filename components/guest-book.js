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
        this.entries.push(newEntry);
        localStorage.setItem('guestbook-entries', JSON.stringify(this.entries));
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin-top: 2rem;
                    padding: 1.5rem;
                    background-color: #fff;
                    border-radius: 0.5rem;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                }
                h3 {
                    margin-top: 0;
                }
                form {
                    margin-bottom: 1rem;
                }
                input, textarea {
                    width: 100%;
                    padding: 0.5rem;
                    margin-bottom: 0.5rem;
                    border: 1px solid #ccc;
                    border-radius: 0.25rem;
                    box-sizing: border-box;
                }
                button {
                    padding: 0.5rem 1rem;
                    background-color: var(--primary-color);
                    color: var(--background-color);
                    border: none;
                    border-radius: 0.25rem;
                    cursor: pointer;
                }
                ul {
                    list-style: none;
                    padding: 0;
                }
                li {
                    border-top: 1px solid #eee;
                    padding: 1rem 0;
                }
                .entry-name {
                    font-weight: bold;
                }
                 .entry-timestamp {
                    font-size: 0.8rem;
                    color: #777;
                    margin-left: 0.5rem;
                }
            </style>
            <h3>방명록</h3>
            <form>
                <input type="text" id="name" placeholder="이름" required>
                <textarea id="message" placeholder="메시지를 남겨주세요." required></textarea>
                <button type="submit">작성</button>
            </form>
            <ul>
                ${this.entries.map(entry => `
                    <li>
                        <div>
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
