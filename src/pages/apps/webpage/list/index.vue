<script setup>
import { useWebpageStore } from '@/store/webpageStore'
import { useRouter } from 'vue-router'

const webpageStore = useWebpageStore()
const searchQuery = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalWebpages = ref(0)
const webpages = ref([])
const selectedRows = ref([])

const isConfirmDialogOpen = ref(false)
const selectedItem = ref()

const router = useRouter()

// 👉 Fetch Invoices
onMounted(async() => {
  await fetchData()
})

const _webpages = computed(() =>
  searchQuery.value ? webpages.value?.filter(
    e=> e?.nickname?.toLowerCase().includes(searchQuery.value.toLowerCase()),
  ) : webpages.value)

// 👉 Fetch Invoices
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

async function fetchData() {
  webpageStore.fetchWebpages({
  }).then(response => {
    console.log(response)
    webpages.value = response.data.content
    console.log(webpages.value)
  }).catch(error => {
    console.log(error)
  })
}

// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = webpages.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = webpages.value.length + (currentPage.value - 1) * rowPerPage.value
  
  return `Showing ${ firstIndex } to ${ lastIndex } of ${ totalWebpages.value } entries`
})

function editItem(item) {
  router.push({
    path: `/apps/webpage/edit`,
    query: {
      id: item.id,
    },
  })
}
</script>

<template>
  <VCard
    v-if="_webpages"
    id="webpage-list"
  >
    <VCardText class="d-flex align-center flex-wrap gap-4">
      <div class="me-3">
        <!-- 👉 Create -->
        
        <!--
          <VBtn
          prepend-icon="tabler-plus"
          :to="{ name: 'apps-webpage-add' }"
          >
          新建橫幅
          </VBtn> 
        -->
      </div>

      <VSpacer />

      <div class="d-flex align-center flex-wrap gap-4" />
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
            頁尾名稱
          </th>

          <th
            scope="col"
            class="text-center"
          >
            內容
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
          v-for="webpage in _webpages"
          :key="webpage.id"
          style="height: 3.75rem;"
        >
          <td
            class="text-center"
          >
            {{ webpage?.id }}
          </td>
          
          <td
            class="text-center"
          >
            {{ webpage?.name }}
          </td>

          <td
            class="text-center row-content"
          >
            {{ webpage?.content }}
          </td>

          <td
            style="width: 3rem;"
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
                    @click="editItem(webpage)"
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
                </VList>
              </VMenu>
            </VBtn>
          </td>
        </tr>
      </tbody>

      <!-- 👉 table footer  -->
      <tfoot v-show="!webpages?.length">
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

.row-content {
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
