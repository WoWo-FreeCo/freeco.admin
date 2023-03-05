<script setup>
import axios from '@/plugins/service'
import { DELETE_PRODUCT, POST_PRODUCT_INVENTORY } from '@/plugins/service/requestURL'
import { useProductStore } from '@/store/prodStore'
import { useRouter } from 'vue-router'

const prodStore = useProductStore()
const searchQuery = ref('')
const selectedStatus = ref()
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalProducts = ref(0)
const products = ref([])
const selectedRows = ref([])


const isConfirmDialogOpen = ref(false)
const selectedItem = ref()

const router = useRouter()

const addInventoryQuantity = ref(1)
const isInvDialogVisible = ref(false)

onMounted(async() => {
  await fetchData()
})


const _products = computed(() =>
  searchQuery.value ? products.value?.filter(
    e=> e?.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
    :products.value)

// 👉 Fetch Invoices
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

async function fetchData() {
  prodStore.fetchProducts({
  }).then(response => {
    products.value = response.data.data
  }).catch(error => {
    console.log(error)
  })
}

// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = products.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = products.value.length + (currentPage.value - 1) * rowPerPage.value
  
  return `Showing ${ firstIndex } to ${ lastIndex } of ${ totalProducts.value } entries`
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
function getProdType(type) {
  if (type === 'COLD_CHAIN') return '冷鏈'
  
  return '一般'
}
function addInventory(item) {
  isInvDialogVisible.value = true
  selectedItem.value = item
}
async function confirmAddInventory() {
  isInvDialogVisible.value = false

  const quantity = parseInt(addInventoryQuantity.value)

  try {
    await axios.post(`/${POST_PRODUCT_INVENTORY(selectedItem.value.id)}`, {
      quantity,
    })
  } catch(error) {
    console.log(error)
  }
  await fetchData()
  
  addInventoryQuantity.value = 1
}
</script>

<template>
  <VCard
    v-if="_products"
    id="product-list"
  >
    <VCardText class="d-flex align-center flex-wrap gap-4">
      <!-- 👉 Rows per page -->
      <!--
        <div
        class="d-flex align-center"
        style="width: 135px;"
        >
        <span class="text-no-wrap me-3">顯示</span>
        <VSelect
        v-model="rowPerPage"
        density="compact"
        :items="[10, 20, 30, 50]"
        />
        </div>
      -->

      <div class="me-3">
        <!-- 👉 Create prod -->
        <VBtn
          prepend-icon="tabler-plus"
          :to="{ name: 'apps-product-add' }"
        >
          新建商品
        </VBtn>
      </div>

      <VSpacer />

      <div class="d-flex align-center flex-wrap gap-4">
        <!-- 👉 Search  -->
        <div class="invoice-list-filter">
          <VTextField
            v-model="searchQuery"
            style="width: 140px;"
            placeholder="搜尋商品"
            density="compact"
          />
        </div>

        <!-- 👉 Select status -->
        <!--
          <div class="invoice-list-filter">
          <VSelect
          v-model="selectedStatus"
          label="Selected Status"
          style="width: 160px;"
          clearable
          clear-icon="tabler-x"
          single-line
          :items="['Downloaded', 'Draft', 'Sent', 'Paid', 'Partial Payment', 'Past Due']"
          />
          </div>
        -->
      </div>
    </VCardText>

    <VDivider />

    <!-- SECTION Table -->
    <VTable class="text-no-wrap invoice-list-table">
      <!-- 👉 Table head -->
      <thead class="text-uppercase">
        <tr>
          <th scope="col">
            #ID
          </th>

          <th
            scope="col"
            class="text-center"
          >
            商品圖
          </th>

          <th
            scope="col"
            class="text-center"
          >
            運送類型
          </th>
          
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
            定價
          </th>
          <th
            scope="col"
            class="text-center"
          >
            會員價
          </th>

          <th
            scope="col"
            class="text-center"
          >
            VIP價
          </th>
          
          <th
            scope="col"
            class="text-center"
          >
            SVIP價
          </th>
          
          <th
            scope="col"
            class="text-center"
          >
            庫存
          </th>

          <th
            scope="col"
            class="text-center"
          >
            操作
          </th>
        </tr>
      </thead>

      <!-- 👉 Table Body -->
      <tbody>
        <tr
          v-for="product in _products"
          :key="product.id"
          style="height: 3.75rem;"
        >
          <!-- 👉 Id -->
          <td class="prod-id">
            <span>#{{ product?.id }}</span>
            <!--
              <RouterLink :to="{ name: 'apps-product-preview-id', params: { id: product.id } }">
              #{{ product?.id }}
              </RouterLink> 
            -->
          </td>

          <td class="prod-img">
            <VAvatar>
              <VImg :src="product?.coverImg" />
            </VAvatar>
          </td>

          <!-- 👉 商品分類 -->
          <td
            class="text-center prod-name"
          >
            {{ getProdType(product?.attribute) }}
          </td>

          <!-- 👉 商品名稱 -->
          <td
            class="text-center prod-name"
          >
            {{ product.name }}
          </td>

          <!-- 👉 定價 -->
          <td class="text-center">
            ${{ product?.price }}
          </td>

          <!-- 👉 會員價 -->
          <td class="text-center">
            ${{ product?.memberPrice }}
          </td>

          <!-- 👉 vip 價 -->
          <td class="text-center">
            ${{ product?.vipPrice }}
          </td>

          <!-- 👉 svip 價 -->
          <td class="text-center">
            ${{ product?.svipPrice }}
          </td>

          <!-- 👉 庫存 -->
          <td class="text-center">
            {{ product?.inventory?.quantity || 0 }}
          </td>

          <!-- 👉 Actions -->
          <td style="width: 4rem;">
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
                  <VListItem
                    value="delete"
                    @click="addInventory(product)"
                  >
                    <template #prepend>
                      <VIcon
                        color="info"
                        size="24"
                        class="me-3"
                        icon="tabler-plus"
                      />
                    </template>

                    <VListItemTitle>新增庫存</VListItemTitle>
                  </VListItem>
                  <VListItem
                    value="delete"
                    @click=""
                  >
                    <template #prepend>
                      <VIcon
                        color="info"
                        size="24"
                        class="me-3"
                        icon="tabler-minus"
                      />
                    </template>

                    <VListItemTitle>減少庫存</VListItemTitle>
                  </VListItem>
                </VList>
              </VMenu>
            </VBtn>
          </td>
        </tr>
      </tbody>

      <!-- 👉 table footer  -->
      <tfoot v-show="!products?.length">
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
    <!--  -->
    <VDialog
      v-model="isInvDialogVisible"
      scrollable
      max-width="320"
    >
      <!-- Dialog close btn -->
      <DialogCloseBtn @click="isInvDialogVisible = !isInvDialogVisible" />

      <!-- Dialog Content -->
      <VCard>
        <VCardItem class="pb-5">
          <VCardTitle>新增庫存數量</VCardTitle>
        </VCardItem>

        <VDivider />
        <VCardText style="height: 200px;">
          <VCol>
            <VTextField
              v-model="addInventoryQuantity"
              label="數量"
              required
              min="1"
              type="number"
            />
          </VCol>
        </VCardText>

        <VDivider />

        <VCardText class="d-flex justify-end flex-wrap gap-3 pt-5">
          <VBtn
            color="secondary"
            variant="tonal"
            @click="isInvDialogVisible = false"
          >
            取消
          </VBtn>
          <VBtn @click="confirmAddInventory">
            確定
          </VBtn>
        </VCardText>
      </VCard>
    </VDialog>
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
