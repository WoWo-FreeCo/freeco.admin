export default [
  {
    title: 'Home',
    to: { name: 'index' },
    icon: { icon: 'tabler-smart-home' },
  },
  {
    title: '產品',
    icon: { icon: 'tabler-file' },
    children: [
      {
        title: '產品一覽',
        to: 'apps-product-list',
      },
      {
        title: '新建產品資料',
        to: 'apps-product-add',
      },
    ],
  },
]
