class BlogPost extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const title = this.getAttribute('title') || 'No Title';
    const author = this.getAttribute('author') || 'Anonymous';
    const date = this.getAttribute('date') || 'No Date';

    shadow.innerHTML = `
      <style>
        h2 {
          margin: 0 0 0.5rem;
          color: #003366;
        }
        .meta {
          font-size: 0.8rem;
          color: #666;
          margin-bottom: 1rem;
        }
      </style>
      <div>
        <h2>${title}</h2>
        <div class="meta">By ${author} on ${date}</div>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('blog-post', BlogPost);
