export default [
  {
    title: '首頁',
    to: { name: 'index' },
    icon: { icon: 'tabler-smart-home' },
  },
  {
    title: '商品管理',
    icon: { icon: 'tabler-file' },
    children: [
      {
        title: '商品一覽',
        to: 'apps-product-list',
      },
      {
        title: '新建商品',
        to: 'apps-product-add',
      },
    ],
  },
]
