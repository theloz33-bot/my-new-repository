import './components/blog-post.js';
import './components/guest-book.js';

const app = document.getElementById('app');

const posts = [
    {
        title: '저출산 문제, 대한민국의 미래를 위협하다',
        content: '급격한 출산율 감소는 대한민국의 가장 심각한 사회 문제 중 하나입니다. 이는 경제 성장 둔화, 국방력 약화, 사회 복지 시스템 붕괴 등 다양한 문제로 이어질 수 있습니다. 정부는 출산 장려 정책을 내놓고 있지만, 실효성에 대한 의문이 계속 제기되고 있습니다.'
    },
    {
        title: '부동산 정책, 시장 안정화는 언제쯤?',
        content: '지난 몇 년간 부동산 가격이 급등하며 내 집 마련의 꿈이 멀어졌습니다. 정부는 각종 규제와 공급 대책을 발표했지만, 시장은 여전히 불안정한 모습을 보이고 있습니다. 근본적인 해결책 마련이 시급합니다.'
    },
    {
        title: '청년 실업, 미래 세대의 좌절',
        content: '높은 청년 실업률은 사회 전체의 활력을 떨어뜨리는 심각한 문제입니다. 좋은 일자리를 찾지 못해 좌절하는 청년들이 늘어나고 있으며, 이는 결혼 및 출산 기피 현상으로 이어져 저출산 문제를 더욱 심화시키고 있습니다.'
    }
];

posts.forEach(post => {
    const blogPost = document.createElement('blog-post');
    blogPost.setAttribute('title', post.title);
    blogPost.innerHTML = post.content;
    app.appendChild(blogPost);
});
