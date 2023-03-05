<script setup>
import dayjs from 'dayjs'

// import { DELETE_PRODUCT } from '@/plugins/service/requestURL'
import { useOrderStore } from '@/store/orderStore'
import { useRouter } from 'vue-router'

const orderStore = useOrderStore()
const searchQuery = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalOrders = ref(0)
const orders = ref([])
const selectedRows = ref([])
const selectedStatus = ref()
const selectedAttribute = ref()


const isConfirmDialogOpen = ref(false)
const selectedItem = ref()

const router = useRouter()

onMounted(async() => {
  await fetchData()
})

const _orders = computed(() => {
  // 過濾 orders 的邏輯
  let _order = orders.value
  if(searchQuery.value) {
    _order = _order?.filter(
      e => e?.id?.toLowerCase().includes(searchQuery.value.toLowerCase()))
  }
  if(selectedStatus.value) {
    _order = _order?.filter(e => getStatus(e?.orderStatus) === selectedStatus.value)
  }
  if(selectedAttribute.value) {
    _order = _order?.filter(e => getAttributeType(e?.attribute) === selectedAttribute.value)
  }
  _order = _order.map(e => {
    return {
      ...e,
      createdAt: getFormattedData(e.createdAt),
      orderStatus: getStatus(e.orderStatus),
      attribute: getAttributeType(e.attribute),
    }
  })
  
  return _order
})

// watchEffect(() => {
//   if (currentPage.value > totalPage.value)
//     currentPage.value = totalPage.value
// })

async function fetchData() {
  orderStore.fetchOrders({
  }).then(response => {
    orders.value = response.data.data
  }).catch(error => {
    console.log(error)
  })
}

// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = orders.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = orders.value.length + (currentPage.value - 1) * rowPerPage.value
  
  return `Showing ${ firstIndex } to ${ lastIndex } of ${ totalOrders.value } entries`
})

function deleteItem(prod) {
  selectedItem.value = prod
  isConfirmDialogOpen.value = true
}
function editItem(prod) {
  router.push({
    path: `/apps/product/edit`,
    query: {
      id: prod.id,
    },
  })
}

// async function confirm(bool) {
//   if(bool) {
//     try {
//       console.log(selectedItem.value)
//       await axios.delete(`/${DELETE_PRODUCT(selectedItem.value.id)}`)
//       fetchData()
//     } catch(e) {
//       console.log(e)
//     }
//   }
// }
function getAttributeType(type) {
  return type === 'GENERAL' ? '一般' : '冷鏈'
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
    return '退貨/退款'
  default:
    return status
  }
}
function getFormattedData(date) {
  const _date = dayjs(date)
  
  return _date.format('YYYY/MM/DD A hh:mm')
}
function exportData() {
  downloadCSV(_orders.value)
}
function downloadCSV(data) {
  const headerRow = Object.keys(data[0]).join(",") + "\n"
  const dataRows = data.map(row => Object.values(row).join(",")).join("\n")
  const csvContent = "data:text/csv;charset=utf-8," + headerRow + dataRows
  const encodedUri = encodeURI(csvContent)
  const link = document.createElement("a")

  link.setAttribute("href", encodedUri)
  link.setAttribute("download", "data.csv")
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  <VCard
    v-if="_orders"
    id="user-list"
  >
    <VCardText class="d-flex flex-end flex-wrap gap-4 justify-end">
      <div
        class="d-flex gap-4"
        style="margin-right: auto;"
      >
        <a
          href="https://vendor.ecpay.com.tw/User/LogOn_Step1#"
          target="_blank"
        >
          <VBtn
            color="success"
            prepend-icon="tabler-external-link"
          >
            綠界訂單管理
          </VBtn>
        </a>
        <a
          href="https://admin.onewarehouse.net/order/list"
          target="_blank"
        >
          <VBtn
            color="success"
            prepend-icon="tabler-external-link"
          >
            物流管理
          </VBtn>
        </a>
      </div>
      <VBtn
        prepend-icon="tabler-file-export"
        @click="exportData"
      >
        輸出報表
      </VBtn>
    </VCardText>
    <VCardText class="d-flex align-center flex-wrap gap-4">
      <div class="me-3" />

      <VSpacer />

      <div class="d-flex align-center flex-wrap gap-4">
        <!-- 👉 Search  -->
        <div class="order-list-filter">
          <VTextField
            v-model="searchQuery"
            style="width: 160px;"
            placeholder="搜尋訂單 #ID"
            density="compact"
          />
        </div>
        <div class="order-attr-filter">
          <VSelect
            v-model="selectedAttribute"
            style="width: 160px;"
            label="運送類型"
            clearable
            clear-icon="tabler-x"
            single-line
            :items="['一般', '冷鏈']"
          />
        </div>
        <div class="order-list-filter">
          <VSelect
            v-model="selectedStatus"
            style="width: 160px;"
            label="訂單狀態"
            clearable
            clear-icon="tabler-x"
            single-line
            :items="['待付款', '待出貨', '待取貨', '已完成', '已取消', '退貨/退款']"
          />
        </div>
      </div>
    </VCardText>

    <VDivider />

    <!-- SECTION Table -->
    <VTable class="text-no-wrap order-list-table">
      <!-- 👉 Table head -->
      <thead class="text-uppercase">
        <tr>
          <th
            scope="col"
            class="text-center"
          >
            #ID
          </th>

          <th
            scope="col"
            class="text-center"
          >
            商品運送類型
          </th>

          <th
            scope="col"
            class="text-center"
          >
            總金額
          </th>

          <th
            scope="col"
            class="text-center"
          >
            成立日期
          </th>

          <th
            scope="col"
            class="text-center"
          >
            訂單狀態
          </th>

          <!-- 
            <th
            scope="col"
            class="text-center"
            >
            操作
            </th> 
          -->
        </tr>
      </thead>

      <!-- 👉 Table Body -->
      <tbody>
        <tr
          v-for="order in _orders"
          :key="order.id"
          style="height: 3.75rem;"
        >
          <td class="text-center">
            {{ order?.id }}
          </td>

          <td class="text-center">
            {{ order?.attribute }}
          </td>
          
          <td class="text-center">
            ${{ order?.price }}
          </td>

          <td class="text-center">
            {{ order?.createdAt }}
          </td>

          <td
            class="text-center"
          >
            {{ order?.orderStatus }}
          </td>

          <!-- 👉 Actions -->
          <td
            v-if="false"
            style="width: 4rem;"
          >
            <VBtn
              icon
              variant="text"
              color="primary"
              size="x-small"
            >
              <VIcon
                :size="22"
                icon="tabler-dots-vertical"
              />

              <VMenu activator="parent">
                <VList>
                  <VListItem
                    value="edit"
                    @click="editItem(product)"
                  >
                    <template #prepend>
                      <VIcon
                        color="success"
                        size="24"
                        class="me-3"
                        icon="tabler-pencil"
                      />
                    </template>

                    <VListItemTitle>編輯</VListItemTitle>
                  </VListItem>
                  <VListItem
                    value="delete"
                    @click="deleteItem(product)"
                  >
                    <template #prepend>
                      <VIcon
                        color="error"
                        size="24"
                        class="me-3"
                        icon="tabler-trash"
                      />
                    </template>

                    <VListItemTitle>刪除</VListItemTitle>
                  </VListItem>
                </VList>
              </VMenu>
            </VBtn>
          </td>
        </tr>
      </tbody>

      <!-- 👉 table footer  -->
      <tfoot v-show="!orders?.length">
        <tr>
          <td
            colspan="8"
            class="text-center text-body-1"
          >
            No data available
          </td>
        </tr>
      </tfoot>
    </VTable>
    <!-- !SECTION -->

    <VDivider />

    <!-- SECTION Pagination -->
    <VCardText class="d-flex align-center flex-wrap gap-4 py-3">
      <!-- 👉 Pagination meta -->
      <span class="text-sm text-disabled">
        {{ paginationData }}
      </span>

      <VSpacer />

      <!-- 👉 Pagination -->
      <VPagination
        v-model="currentPage"
        size="small"
        :total-visible="5"
        :length="totalPage"
        @next="selectedRows = []"
        @prev="selectedRows = []"
      />
    </VCardText>
    <!-- !SECTION -->
    <!--
      <ConfirmDialog
      v-model:isDialogVisible="isConfirmDialogOpen"
      confirmation-msg="確定要刪除選擇的商品？"
      @confirm="confirm"
      /> 
    -->
  </VCard>
</template>

<style lang="scss">
#order-list {
  .order-list-actions {
    inline-size: 8rem;
  }

  .order-list-filter {
    inline-size: 12rem;
  }
}

.prod-name {
  overflow: hidden;
  max-inline-size: 0;
  text-overflow: ellipsis;
}

.prod-id {
  inline-size: 1rem;
  max-inline-size: 80px;
}

.prod-img {
  inline-size: 1rem;
  max-inline-size: 80px;
}
</style>
