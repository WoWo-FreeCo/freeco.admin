export default [
  {
    title: '首頁',
    to: { name: 'index' },
    icon: { icon: 'tabler-smart-home' },
  },
  {
    title: '商品管理',
    icon: { icon: 'tabler-shopping-cart' },
    children: [
      {
        title: '商品列表',
        to: 'apps-product-list',
      },
      {
        title: '商品分類列表',
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
  {
    title: '會員管理',
    icon: { icon: 'tabler-user' },
    children: [
      {
        title: '會員列表',
        to: 'apps-user-list',
      },
    ],
  },
  {
    title: '訂單管理',
    icon: { icon: 'tabler-truck-delivery' },
    children: [
      {
        title: '訂單列表',
        to: 'apps-order-list',
      },
    ],
  },
]
