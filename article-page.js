import { posts } from './data.js';

const articleContainer = document.getElementById('article-container');

const getArticleIdFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
};

const renderArticle = () => {
    const articleId = getArticleIdFromUrl();
    const article = posts.find(p => p.id === articleId);

    if (article) {
        document.title = `${article.title} - 정치 시사 블로그`; // Update the page title
        articleContainer.innerHTML = `
            <style>
                .article-header {
                    border-bottom: 2px solid #eee;
                    padding-bottom: 20px;
                    margin-bottom: 20px;
                }
                .article-header h1 {
                    font-size: 2.8em;
                    margin: 0;
                }
                .article-meta {
                    font-size: 1em;
                    color: #7f8c8d;
                    margin-top: 10px;
                }
                .article-content {
                    font-size: 1.2em;
                    line-height: 1.8;
                    white-space: pre-wrap; /* Preserve line breaks */
                }
            </style>
            <div class="article-header">
                <h1>${article.title}</h1>
                <div class="article-meta">게시일: ${article.date}</div>
            </div>
            <div class="article-content">${article.content}</div>
        `;
    } else {
        articleContainer.innerHTML = '<p>기사를 찾을 수 없습니다. 🧐</p>';
    }
};

renderArticle();
