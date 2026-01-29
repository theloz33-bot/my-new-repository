import './components/blog-post.js';

const app = document.getElementById('app');

const posts = [
    {
        title: '나의 첫 블로그 게시물',
        content: '이것은 나의 첫 블로그 게시물의 내용입니다.'
    },
    {
        title: '나의 두 번째 블로그 게시물',
        content: '이것은 나의 두 번째 블로그 게시물의 내용입니다.'
    }
];

posts.forEach(post => {
    const blogPost = document.createElement('blog-post');
    blogPost.setAttribute('title', post.title);
    blogPost.innerHTML = post.content;
    app.appendChild(blogPost);
});
