<script setup>
import axios from '@/plugins/service'
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


const isConfirmDialogOpen = ref(false)
const selectedItem = ref()

const router = useRouter()

onMounted(async() => {
  await fetchData()
})

const _orders = computed(() =>
  searchQuery.value ? orders.value?.filter(
    e=> e?.id?.toLowerCase().includes(searchQuery.value.toLowerCase()),
  ) : orders.value)

// 👉 Fetch Invoices
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

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
async function confirm(bool) {
  if(bool) {
    try {
      console.log(selectedItem.value)
      await axios.delete(`/${DELETE_PRODUCT(selectedItem.value.id)}`)
      fetchData()
    } catch(e) {
      console.log(e)
    }
  }
}
function getAttributeType(type) {
  return type === 'GENERAL' ? '一般' : '冷鏈'
}
function getStatus(status) {
  switch (status) {
  case 'WAIT_PAYMENT':
    return '待付款'
  case 'WAIT_DELIVER':
    return '運送中'
  case 'WAIT_RECEIVE':
    return '待取貨'
  case 'COMPLETED':
    return '已完成'
  case 'CANCELLED':
    return '已取消'
  case 'REVOKED':
    return '退貨'
  default:
    return status
  }
}
function getFormattedData(date) {
  const _date = dayjs(date)
  
  return _date.format('YYYY/MM/DD A hh:mm')
}
</script>

<template>
  <VCard
    v-if="_orders"
    id="user-list"
  >
    <VCardText class="d-flex align-center flex-wrap gap-4">
      <div class="me-3">
        <!-- 👉 Create -->
        <!--
          <VBtn
          prepend-icon="tabler-plus"
          :to="{ name: 'apps-product-add' }"
          >
          新建商品
          </VBtn> 
        -->
      </div>

      <VSpacer />

      <div class="d-flex align-center flex-wrap gap-4">
        <!-- 👉 Search  -->
        <div class="invoice-list-filter">
          <VTextField
            v-model="searchQuery"
            style="width: 140px;"
            placeholder="搜尋訂單 #ID"
            density="compact"
          />
        </div>
      </div>
    </VCardText>

    <VDivider />

    <!-- SECTION Table -->
    <VTable class="text-no-wrap invoice-list-table">
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
            {{ getAttributeType(order?.attribute) }}
          </td>
          
          <td class="text-center">
            ${{ order?.price }}
          </td>

          <td class="text-center">
            {{ getFormattedData(order?.createdAt) }}
          </td>

          <td class="text-center">
            {{ getStatus(order?.orderStatus) }}
          </td>

          <!-- 👉 Actions -->
          <td
            v-if="false"
            style="width: 4rem;"
          >
            <!--
              <VBtn
              icon
              variant="text"
              color="default"
              size="x-small"
              :to="{ name: 'apps-product-preview-id', params: { id: product.id } }"
              >
              <VIcon
              :size="22"
              icon="tabler-eye"
              />
              </VBtn> 
            -->

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
    <ConfirmDialog
      v-model:isDialogVisible="isConfirmDialogOpen"
      confirmation-msg="確定要刪除選擇的商品？"
      @confirm="confirm"
    />
  </VCard>
</template>

<style lang="scss">
#invoice-list {
  .invoice-list-actions {
    inline-size: 8rem;
  }

  .invoice-list-filter {
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
