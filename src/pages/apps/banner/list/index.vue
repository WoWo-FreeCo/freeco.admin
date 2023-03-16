<script setup>
import axios from '@/plugins/service'
import { DELETE_HOME_BANNER } from '@/plugins/service/requestURL'
import { useBannerStore } from '@/store/bannerStore'
import { useRouter } from 'vue-router'

const bannerStore = useBannerStore()
const searchQuery = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalBanners = ref(0)
const banners = ref([])
const selectedRows = ref([])


const isConfirmDialogOpen = ref(false)
const selectedItem = ref()
const isCreditDialogVisible = ref(false)
const presetRewardCredit = ref(0)

const router = useRouter()

// 👉 Fetch Invoices
onMounted(async() => {
  await fetchData()
})


const _banners = computed(() =>
  searchQuery.value ? banners.value?.filter(
    e=> e?.nickname?.toLowerCase().includes(searchQuery.value.toLowerCase()),
  ) : banners.value)

// 👉 Fetch Invoices
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

async function fetchData() {
  bannerStore.fetchBanners({
  }).then(response => {
    banners.value = response.data.data
  }).catch(error => {
    console.log(error)
  })
}

// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = banners.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = banners.value.length + (currentPage.value - 1) * rowPerPage.value
  
  return `Showing ${ firstIndex } to ${ lastIndex } of ${ totalBanners.value } entries`
})

function deleteItem(item) {
  selectedItem.value = item
  isConfirmDialogOpen.value = true
}
function editItem(item) {
  router.push({
    path: `/apps/banner/edit`,
    query: {
      id: item.id,
    },
  })
}
async function confirm(bool) {
  if(bool) {
    try {
      console.log(selectedItem.value)
      await axios.delete(`/${DELETE_HOME_BANNER(selectedItem.value.id)}`)
      fetchData()
    } catch(e) {
      console.log(e)
    }
  }
}
</script>

<template>
  <VCard
    v-if="_banners"
    id="banner-list"
  >
    <VCardText class="d-flex align-center flex-wrap gap-4">
      <div class="me-3">
        <!-- 👉 Create -->
        
        <VBtn
          prepend-icon="tabler-plus"
          :to="{ name: 'apps-banner-add' }"
        >
          新建橫幅
        </VBtn>
      </div>

      <VSpacer />

      <div class="d-flex align-center flex-wrap gap-4">
        <!-- 👉 Search  -->
        <!--
          <div class="banner-list-filter">
          <VTextField
          v-model="searchQuery"
          style="width: 140px;"
          placeholder="搜尋橫幅名稱"
          density="compact"
          />
          </div> 
        -->

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
          <th
            scope="col"
            class="text-center"
          >
            橫幅縮圖
          </th>

          <th
            scope="col"
            class="text-center"
          >
            橫幅圖片網址
          </th>

          <th
            scope="col"
            class="text-center"
          >
            子頁面
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
          v-for="banner in _banners"
          :key="banner.id"
          style="height: 3.75rem;"
        >
          <td class="text-center">
            <VImg :src="banner.img" />
          </td>
          
          <td class="text-center">
            {{ banner?.img }}
          </td>

          <td class="text-center">
            {{ banner?.href }}
          </td>

          <td
            v-if="true"
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
                    @click="editItem(banner)"
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
                    @click="deleteItem(banner)"
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
      <tfoot v-show="!banners?.length">
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
      confirmation-msg="確定要刪除選擇的橫幅？"
      @confirm="confirm"
    />
    <!--  -->
    <VDialog
      v-model="isCreditDialogVisible"
      scrollable
      max-width="320"
    >
      <!-- Dialog close btn -->
      <DialogCloseBtn @click="isCreditDialogVisible = !isCreditDialogVisible" />

      <!-- Dialog Content -->
      <VCard>
        <VCardItem class="pb-5">
          <VCardTitle>修改會員紅利點數</VCardTitle>
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
