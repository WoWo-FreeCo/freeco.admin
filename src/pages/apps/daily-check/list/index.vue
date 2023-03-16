<script setup>
import { useDailyCheckStore } from '@/store/dailyCheckStore'
import { useRouter } from 'vue-router'

const dailyCheckStore = useDailyCheckStore()
const searchQuery = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalDailyChecks = ref(0)
const dailyChecks = ref([])
const selectedRows = ref([])

// const isConfirmDialogOpen = ref(false)
// const selectedItem = ref()

const router = useRouter()

onMounted(async() => {
  await fetchData()
})

const _dailyChecks = computed(() =>
  searchQuery.value ? dailyChecks.value?.filter(
    e=> e?.nickname?.toLowerCase().includes(searchQuery.value.toLowerCase()),
  ) : dailyChecks.value)

// 👉 Fetch Invoices
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

async function fetchData() {
  dailyCheckStore.fetchDailyChecks({
  }).then(response => {
    console.log(response)
    dailyChecks.value = response.data.data
    console.log(dailyChecks.value)
  }).catch(error => {
    console.log(error)
  })
}

const paginationData = computed(() => {
  const firstIndex = dailyChecks.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = dailyChecks.value.length + (currentPage.value - 1) * rowPerPage.value
  
  return `Showing ${ firstIndex } to ${ lastIndex } of ${ totalDailyChecks.value } entries`
})

function editItem(item) {
  router.push({
    path: `/apps/daily-check/edit`,
    query: {
      id: item.index,
    },
  })
}
</script>

<template>
  <VCard
    v-if="_dailyChecks"
    id="daily-check-list"
  >
    <VCardText class="d-flex align-center flex-wrap gap-4">
      <div class="me-3">
        <!-- 👉 Create -->
        
        <!--
          <VBtn
          prepend-icon="tabler-plus"
          :to="{ name: 'apps-dailyCheck-add' }"
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
            連續登入天數
          </th>
          
          <th
            scope="col"
            class="text-center"
          >
            獎勵紅利
          </th>

          <th
            scope="col"
            class="text-center"
          >
            是否觀看影片
          </th>

          <th
            scope="col"
            class="text-center"
          >
            影片連結
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
          v-for="dailyCheck in _dailyChecks"
          :key="dailyCheck?.index"
          style="height: 3.75rem;"
        >
          <td
            class="text-center"
          >
            {{ (dailyCheck?.index + 1) }}
          </td>
          
          <td
            class="text-center"
          >
            {{ dailyCheck?.credit }}
          </td>

          <td
            class="text-center row-content"
          >
            <!-- {{ dailyCheck?.isMission }} -->
            <VIcon
              v-if="dailyCheck.isMission"
              color="success"
              :size="22"
              icon="tabler-circle-check"
            />
            <VIcon
              v-else
              color="error"
              :size="22"
              icon="tabler-circle-x"
            />
          </td>

          <td
            class="text-center row-content"
          >
            {{ dailyCheck?.video }}
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
                    @click="editItem(dailyCheck)"
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
      <tfoot v-show="!dailyChecks?.length">
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
