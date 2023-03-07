<script setup>
import dayjs from 'dayjs'

// Store
import { useOrderStore } from '@/store/orderStore'

const route = useRoute()
const router = useRouter()

const orderStore = useOrderStore()

const orderData = ref()
const paymentDetails = ref()
const purchasedProducts = ref([])

onMounted(async () => {
  await fetchData()
})

async function fetchData() {
  const _id = route.query?.id
  if (!_id) {
    return router.push({
      path: '/apps/order/list',
    })
  }

  orderStore.fetchOrderByIds(_id)
    .then(response => {
      orderData.value = response?.data?.data
      purchasedProducts.value = response?.data?.data?.items
      console.log(orderData.value)

    // paymentDetails.value = response.data.paymentDetails
    }).catch(error => {
      console.log(error)
      
      router.push({
        path: '/apps/order/list',
      })
    })
}

// ℹ️ Your real data will contain this information
// const purchasedProducts = [
//   {
//     name: 'Premium Branding Package',
//     description: 'Branding & Promotion',
//     qty: 1,
//     hours: 15,
//     price: 32,
//   },
// ]

function getFormattedData(date) {
  const _date = dayjs(date)
  
  return _date.format('YYYY/MM/DD A hh:mm')
}
function getStatus(status) {
  switch (status) {
  case 'WAIT_PAYMENT':
    return '待付款'
  case 'WAIT_DELIVER':
    return '待出貨'
  case 'WAIT_RECEIVE':
    return '已出貨'
  case 'COMPLETED':
    return '已完成'
  case 'CANCELLED':
    return '已取消'
  case 'REVOKED':
    return '已退貨'
  default:
    return status
  }
}
function getAttributeType(type) {
  return type === 'GENERAL' ? '一般' : '冷鏈'
}


// 👉 Print Invoice
const printInvoice = () => {
  window.print()
}
</script>

<template>
  <section v-if="orderData">
    <VRow>
      <VCol
        cols="12"
        md="9"
      >
        <VCard>
          <!-- SECTION Header -->
          <VCardText class="d-flex flex-wrap justify-space-between flex-column flex-sm-row print-row">
            <!-- 👉 Left Content -->

            <!-- 👉 Right Content -->
            <div class="mt-4 ma-sm-4">
              <!-- 👉 Invoice ID -->
              <h6 class="font-weight-medium text-xl mb-6">
                訂單編號 #{{ orderData?.id }}
              </h6>
              <p class="mb-2">
                <span>商品運送類型：{{ getAttributeType(orderData?.attribute) }}</span>
              </p>
              <p class="mb-2">
                <span>成立日期：{{ getFormattedData(orderData?.createdAt) }}</span>
              </p>
              <p class="mb-2">
                <span>訂單狀態：{{ getStatus(orderData?.orderStatus) }}</span>
              </p>
            </div>
          </VCardText>
          <!-- !SECTION -->

          <VDivider />

          <!-- 👉 Payment Details -->
          <VCardText class="d-flex justify-space-between flex-wrap flex-column flex-sm-row print-row">
            <div class="ma-sm-4">
              <h6 class="font-weight-medium text-xl mb-6">
                付款人資訊：
              </h6>
              <p class="mb-1">
                姓名：{{ orderData?.consignee?.name }}
              </p>
              <p class="mb-1">
                Email：{{ orderData?.consignee?.email }}
              </p>

              <p class="mb-1">
                省份：{{ orderData?.consignee?.province }}
              </p>
              <p class="mb-1">
                縣市：{{ orderData?.consignee?.district }}
              </p>
              <p class="mb-1">
                城市：{{ orderData?.consignee?.city }}
              </p>
              <p class="mb-1">
                城鎮：{{ orderData?.consignee?.town }}
              </p>
              <p class="mb-1">
                郵遞區號：{{ orderData?.consignee?.zipCode }}
              </p>
              <p class="mb-1">
                行動電話：{{ orderData?.consignee?.cellphone }}
              </p>
              <p class="mb-1">
                電話{{ orderData?.consignee?.telephone }}
              </p>
              <p class="mb-1">
                地址一：{{ orderData?.consignee?.addressDetailOne }}
              </p>
              <p class="mb-1">
                地址二：{{ orderData?.consignee?.addressDetailTwo }}
              </p>
              <p class="mb-1">
                取貨店家名稱：{{ orderData?.consignee?.stationName }}
              </p>
              <p class="mb-1">
                取貨店家編號：{{ orderData?.consignee?.stationCode }}
              </p>

              <p class="mb-1">
                收件備註：{{ orderData?.consignee?.remark }}
              </p>
              <p class="mb-1">
                寄件備註：{{ orderData?.consignee?.senderRemark }}
              </p>
            </div>

            <div
              v-if="false"
              class="mt-4 ma-sm-4"
            >
              <h6 class="text-sm font-weight-semibold mb-3">
                Bill To:
              </h6>
              <table>
                <tr>
                  <td class="pe-6">
                    Total Due:
                  </td>
                  <td>
                    {{ paymentDetails?.totalDue }}
                  </td>
                </tr>
                <tr>
                  <td class="pe-6">
                    Bank Name:
                  </td>
                  <td>
                    {{ paymentDetails?.bankName }}
                  </td>
                </tr>
                <tr>
                  <td class="pe-6">
                    Country:
                  </td>
                  <td>
                    {{ paymentDetails?.country }}
                  </td>
                </tr>
                <tr>
                  <td class="pe-6">
                    IBAN:
                  </td>
                  <td>
                    {{ paymentDetails?.iban }}
                  </td>
                </tr>
                <tr>
                  <td class="pe-6">
                    SWIFT Code:
                  </td>
                  <td>
                    {{ paymentDetails?.swiftCode }}
                  </td>
                </tr>
              </table>
            </div>
          </VCardText>

          <!-- 👉 Table -->
          <VDivider />

          <VTable>
            <thead>
              <tr>
                <th
                  scope="col"
                  class="text-center"
                >
                  商品名稱
                </th>
                <th
                  scope="col"
                  class="text-center"
                >
                  商品縮圖
                </th>
                <th
                  scope="col"
                  class="text-center"
                >
                  商品編號
                </th>
                <th
                  scope="col"
                  class="text-center"
                >
                  單價
                </th>
                <th
                  scope="col"
                  class="text-center"
                >
                  購買數量
                </th>
                <th
                  scope="col"
                  class="text-center"
                >
                  總計
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="item in purchasedProducts"
                :key="item.name"
              >
                <td class="text-center">
                  {{ item.name }}
                </td>
                <td class="text-center">
                  <VImg :src="item?.coverImg" />
                </td>
                <td class="text-center">
                  {{ item?.skuId }}
                </td>
                <td class="text-center">
                  ${{ item?.price }}
                </td>
                <td class="text-center">
                  {{ item?.quantity }}
                </td>
                <td class="text-center">
                  ${{ item?.price * item?.quantity }}
                </td>
              </tr>
            </tbody>
          </VTable>

          <VDivider class="my-2" />

          <!-- Total -->
          <VCardText class="d-flex justify-end flex-column flex-sm-row print-row">
            <div class="my-2 mx-sm-4">
              <table>
                <tr>
                  <td class="text-end">
                    <div class="me-5">
                      <p class="mb-2">
                        總金額：
                      </p>
                    </div>
                  </td>

                  <td class="font-weight-semibold">
                    <p class="mb-2">
                      ${{ orderData?.price }}
                    </p>
                  </td>
                </tr>
              </table>
            </div>
          </VCardText>

          <VDivider />
        </VCard>
      </VCol>

      <VCol
        cols="12"
        md="3"
        class="d-print-none"
      >
        <VCard>
          <VCardText>
            <!-- 👉 Send Invoice Trigger button -->
            <VBtn
              block
              variant="tonal"
              color="secondary"
              class="mb-2"
            >
              <VIcon
                :size="22"
                icon="tabler-download"
              />
              下載明細
            </VBtn>

            <VBtn
              block
              variant="tonal"
              color="secondary"
              class="mb-2"
              @click="printInvoice"
            >
              <VIcon
                :size="22"
                icon="tabler-printer"
              />
              列印
            </VBtn>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <!-- 👉 Add Payment Sidebar -->

    <!-- 👉 Send Invoice Sidebar -->
  </section>
</template>

<style lang="scss">
@media print {
  .v-application {
    background: none !important;
  }

  @page { margin: 0; size: auto; }

  .layout-page-content,
  .v-row,
  .v-col-md-9 {
    padding: 0;
    margin: 0;
  }

  .product-buy-now {
    display: none;
  }

  .v-navigation-drawer,
  .layout-vertical-nav,
  .app-customizer-toggler,
  .layout-footer,
  .layout-navbar,
  .layout-navbar-and-nav-container {
    display: none;
  }

  .v-card {
    box-shadow: none !important;

    .print-row {
      flex-direction: row !important;
    }
  }

  .layout-content-wrapper {
    padding-inline-start: 0 !important;
  }
}
</style>
