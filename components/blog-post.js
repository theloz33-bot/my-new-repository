class BlogPost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const title = this.getAttribute('title');
        const date = this.getAttribute('date');
        const articleId = this.getAttribute('article-id');
        
        const articleUrl = `article.html?id=${articleId}`;

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #fff;
                    padding: 25px;
                    margin-bottom: 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                :host(:hover) {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
                }
                h2 {
                    margin-top: 0;
                    font-size: 1.8em;
                    font-weight: 700;
                }
                h2 a {
                    text-decoration: none;
                    color: #2c3e50;
                }
                h2 a:hover {
                    text-decoration: underline;
                }
                .date {
                    font-size: 0.9em;
                    color: #7f8c8d;
                    margin-bottom: 15px;
                }
                ::slotted(p) {
                    color: #555;
                    font-size: 1.1em;
                    line-height: 1.7;
                }
            </style>
            
            <h2><a href="${articleUrl}">${title}</a></h2>
            <div class="date">${date}</div>
            <slot></slot>
        `;
    }
}

customElements.define('blog-post', BlogPost);
