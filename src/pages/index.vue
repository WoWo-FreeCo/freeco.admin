<template>
  <div>
    <VCard
      class="mb-6"
      title="歡迎進入 WOWO 的後台管理介面 🚀"
    >
      <!-- <VCardText>All the best for your new project.</VCardText> -->
      <VCardText>
        您可以前往 <a
          href="https://wo.wowo.tw/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-decoration-none"
        >
          WOWO 線上購物網站
        </a> 來與此管理系統進行對照。
      </VCardText>
      <VCardText>
        或者進入以下頁面
        <ul>
          <li>
            <RouterLink to="/apps/product/list">
              商品列表
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/apps/user/list">
              會員列表
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/apps/order/list">
              訂單列表
            </RouterLink>
          </li>
        </ul>
      </VCardText>
    </VCard>

    <!--
      <VCard title="Want to integrate JWT? 🔒">
      <VCardText>We carefully crafted JWT flow so you can implement JWT with ease and with minimum efforts.</VCardText>
      <VCardText>Please read our  JWT Documentation to get more out of JWT authentication.</VCardText>
      </VCard> 
    -->
  </div>
</template>
