<script setup>
import axios from '@/plugins/service'
import { DELETE_PRODUCT_CATEGORY } from '@/plugins/service/requestURL'
import { useProductStore } from '@/store/prodStore'
import { useRouter } from 'vue-router'

const prodStore = useProductStore()
const searchQuery = ref('')
const selectedStatus = ref()
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalCategories = ref(0)
const categories = ref([])
const selectedRows = ref([])


const isConfirmDialogOpen = ref(false)
const selectedItem = ref()

const router = useRouter()

onMounted(async () => {
  await fetchData()
})

async function fetchData() {
  prodStore.fetchProductCategory({
  }).then(response => {
    categories.value = response.data.data
    console.log(categories.value)
  }).catch(error => {
    console.log(error)
  })
}

const _categories = computed(() =>
  searchQuery.value ? categories.value?.filter(
    e=> e?.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
  ) : categories.value)

// 👉 Fetch Invoices
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = categories.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = categories.value.length + (currentPage.value - 1) * rowPerPage.value
  
  return `Showing ${ firstIndex } to ${ lastIndex } of ${ totalCategories.value } entries`
})

function deleteItem(item) {
  selectedItem.value = item
  isConfirmDialogOpen.value = true
}
function editItem(item) {
  router.push({
    path: `/apps/product-category/edit`,
    query: {
      id: item.id,
    },
  })
}
async function confirm(bool) {
  if(bool) {
    try {
      console.log(selectedItem.value)
      await axios.delete(`/${DELETE_PRODUCT_CATEGORY(selectedItem.value.id)}`)
      fetchData()
    } catch(e) {
      console.log(e)
    }
  }
}
</script>

<template>
  <VCard
    v-if="_categories"
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
          :to="{ name: 'apps-product-category-add' }"
        >
          新建商品分類
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
            分類名稱
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
          v-for="item in _categories"
          :key="item.id"
          style="height: 3.75rem;"
        >
          <!-- 👉 Id -->
          <td class="prod-id">
            <span>#{{ item.id }}</span>
          </td>

          <!-- 👉 商品名稱 -->
          <td
            class="text-center prod-name"
          >
            {{ item.name }}
          </td>

          <!-- 👉 Actions -->
          <td style="width: 4rem;">
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
                    @click="editItem(item)"
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
                    @click="deleteItem(item)"
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
      <tfoot v-show="!categories?.length">
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
      confirmation-msg="確定要刪除選擇的商品分類？"
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
