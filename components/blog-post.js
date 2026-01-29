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
                    margin-bottom: 1rem;
                    padding: 1rem;
                    background-color: #fff;
                    border-radius: 0.5rem;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                }
                h2 {
                    margin: 0 0 0.5rem 0;
                }
            </style>
            <h2>${this.getAttribute('title')}</h2>
            <slot></slot>
        `;
    }
}

customElements.define('blog-post', BlogPost);
