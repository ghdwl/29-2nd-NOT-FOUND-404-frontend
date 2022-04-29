const CREATOR_SIDEBAR_LIST = [
  {
    id: 1,
    icon: '/images/creator/product.svg',
    cate: '상품',
    subcate: [
      { subcateTitle: '전체상품', link: 'product' },
      { subcateTitle: '커뮤니티 관리', link: 'community' },
    ],
  },
  {
    id: 2,
    icon: '/images/creator/class.svg',
    cate: '클래스',
    subcate: [
      { subcateTitle: '클래스 댓글', link: 'comment' },
      { subcateTitle: '클래스 소식', link: 'notice' },
    ],
  },
];

export default CREATOR_SIDEBAR_LIST;
