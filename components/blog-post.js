class BlogPost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: var(--card-background-color, #fff);
                    border-radius: 0.5rem;
                    box-shadow: var(--card-shadow, 0 4px 8px rgba(0,0,0,0.1));
                    margin-bottom: calc(var(--spacing-unit, 1rem) * 2);
                    padding: calc(var(--spacing-unit, 1rem) * 1.5);
                    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
                }
                :host(:hover) {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 25px rgba(0,0,0,0.12), 0 5px 10px rgba(0,0,0,0.1);
                }
                h2 {
                    font-size: var(--font-size-h2, 1.75rem);
                    font-weight: var(--font-weight-bold, 700);
                    color: var(--primary-color, #007bff);
                    margin: 0 0 var(--spacing-unit, 1rem) 0;
                }
                ::slotted(p) {
                    font-size: var(--font-size-p, 1rem);
                    line-height: 1.7;
                }
            </style>
            <h2>${this.getAttribute('title')}</h2>
            <slot></slot>
        `;
    }
}

customElements.define('blog-post', BlogPost);
