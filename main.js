import './components/blog-post.js';

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
    },
    {
        title: '가계부채 1,800조 원 돌파, 소비 위축 우려',
        content: '대한민국의 가계부채 규모가 사상 최고치를 경신하며 경제의 뇌관으로 떠올랐습니다. 금리 인상 기조와 맞물려 이자 부담이 가중되면서, 가계의 소비 여력이 크게 위축될 수 있다는 경고가 나오고 있습니다.'
    },
    {
        title: '기후 변화, 더 이상 외면할 수 없는 현실',
        content: '폭염, 홍수 등 이상 기후 현상이 빈번해지면서 기후 변화 대응이 국가적 과제로 부상했습니다. 탄소 중립을 위한 산업 구조 개편과 에너지 전환은 더 이상 미룰 수 없는 시급한 과제입니다.'
    },
    {
        title: '인구 절벽, 지방 소멸 위기 가속화',
        content: '수도권 인구 집중 현상과 저출산이 맞물리면서 지방 중소도시는 소멸 위기에 직면했습니다. 지역 경제를 활성화하고 청년층을 유인할 수 있는 혁신적인 균형 발전 정책이 필요합니다.'
    }
];

posts.forEach(post => {
    const blogPost = document.createElement('blog-post');
    blogPost.setAttribute('title', post.title);
    
    const contentParagraph = document.createElement('p');
    contentParagraph.textContent = post.content;
    blogPost.appendChild(contentParagraph);
    
    app.appendChild(blogPost);
});
