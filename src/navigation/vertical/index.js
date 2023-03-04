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
        title: '商品清單',
        to: 'apps-product-list',
      },
      {
        title: '商品分類清單',
        to: 'apps-product-category-list',
      },
      {
        title: '新建商品',
        to: 'apps-product-add',
      },
      {
        title: '新建商品分類',
        to: 'apps-product-category-add',
      },
    ],
  },
]
