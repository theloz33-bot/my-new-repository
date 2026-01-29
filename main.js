import './components/blog-post.js';
import { posts } from './data.js';

const app = document.getElementById('app');

posts.forEach(post => {
    const blogPost = document.createElement('blog-post');
    blogPost.setAttribute('title', post.title);
    blogPost.setAttribute('date', post.date);
    blogPost.setAttribute('article-id', post.id);
    
    // Display a snippet of the content
    const contentSnippet = document.createElement('p');
    contentSnippet.textContent = `${post.content.substring(0, 100)}...`; // Show first 100 characters
    blogPost.appendChild(contentSnippet);
    
    app.appendChild(blogPost);
});
