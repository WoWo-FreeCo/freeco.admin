<script setup>
import axios from '@/plugins/service'
import { DELETE_PRODUCT } from '@/plugins/service/requestURL'
import { useUserStore } from '@/store/userStore'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const searchQuery = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalUsers = ref(0)
const users = ref([])
const selectedRows = ref([])


const isConfirmDialogOpen = ref(false)
const selectedItem = ref()

const router = useRouter()

// 👉 Fetch Invoices
onMounted(async() => {
  await fetchData()
})


const _users = computed(() =>
  searchQuery.value ? users.value?.filter(
    e=> e?.nickname?.toLowerCase().includes(searchQuery.value.toLowerCase()),
  ) : users.value)

// 👉 Fetch Invoices
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

async function fetchData() {
  userStore.fetchUsers({
  }).then(response => {
    users.value = response.data.data
  }).catch(error => {
    console.log(error)
  })
}

// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = users.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = users.value.length + (currentPage.value - 1) * rowPerPage.value
  
  return `Showing ${ firstIndex } to ${ lastIndex } of ${ totalUsers.value } entries`
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
function getUserLevel(level) {
  switch (level) {
  case 'SVIP':
    return 'SVIP'
  case 'VIP':
    return 'VIP'
  default:
    return '一般會員'
  }
}
</script>

<template>
  <VCard
    v-if="_users"
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
            placeholder="搜尋用戶名稱"
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
          <th
            scope="col"
            class="text-center"
          >
            名稱
          </th>

          <th
            scope="col"
            class="text-center"
          >
            用戶等級
          </th>

          <th
            scope="col"
            class="text-center"
          >
            Email
          </th>

          <th
            scope="col"
            class="text-center"
          >
            紅利點數
          </th>
          <th
            scope="col"
            class="text-center"
          >
            FB綁定
          </th>

          <th
            scope="col"
            class="text-center"
          >
            IG綁定
          </th>
          
          <th
            scope="col"
            class="text-center"
          >
            YT綁定
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
          v-for="user in _users"
          :key="user.id"
          style="height: 3.75rem;"
        >
          <!-- 👉 Id -->
          <!--
            <td class="prod-id">
            <span>#{{ user?.id }}</span>
            </td> 
          -->

          <!-- 👉 暱稱 -->
          <td class="text-center">
            {{ user?.nickname }}
          </td>

          <td class="text-center">
            {{ getUserLevel(user?.memberLevel) }}
          </td>
          
          <td class="text-center">
            {{ user.email }}
          </td>

          <td class="text-center">
            {{ user?.rewardCredit }}
          </td>

          <td class="text-center">
            <VIcon
              v-if="user?.FacebookGroupActivated"
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

          <td class="text-center">
            <VIcon
              v-if="user?.IGFollowActivated"
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

          <td class="text-center">
            <VIcon
              v-if="user?.YouTubeChannelActivated"
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
      <tfoot v-show="!users?.length">
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
