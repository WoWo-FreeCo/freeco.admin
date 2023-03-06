<script setup>
import axios from '@/plugins/service'
import { UPDATE_PRODUCT } from '@/plugins/service/requestURL'
import { useUserStore } from '@/store/userStore'
import { useRouter } from 'vue-router'

const baseURL =
  import.meta.env.VITE_API_BASE

const form = ref()
const userStore = useUserStore()


const initialInput = {
  id: '',
  email: '',
  nickname: '',
  taxIDNumber: '',
  cellphone: '',
  telephone: '',
  addressOne: '',
  addressTwo: '',
  addressThree: '',
  rewardCredit: 0,
  recommendCode: '',
  YouTubeChannelActivated: false,
  FacebookGroupActivated: false,
  IGFollowActivated: false,
  VIPActivated: false,
  SVIPActivated: false,
  memberLevel: '',
}

const inputField = ref(initialInput)
const users = ref()
const curUser = ref()

const route = useRoute()
const router = useRouter()


onMounted(async() => {
  await fetchData()
})

async function fetchData() {
  try {
    const res = await userStore.fetchUsers()

    users.value = res.data.data
    setInitValue()
  } catch(error) {
    console.log(error)
  }
}

async function updateProd() {
  try {

    const body = {
      ...inputField.value,
    }

    await axios.put(`/${UPDATE_PRODUCT(curProd.value.id)}`, body)

    alert('已更新用戶資訊')
  } catch(e) {
    console.log(e)
  }
}

function setInitValue() {
  const _id = route.query?.id
  if (!_id) {
    return router.push({
      path: '/apps/user/list',
    })
  }
  const user = users.value?.find(e => e.id == _id)

  if (!user) {
    return router.push({
      path: '/apps/user/list',
    })
  }

  curUser.value = user

  inputField.value = {
    ...inputField.value,
    ...user,
  }
}
function resetInput() {
  fetchData()
}
</script>

<template>
  <VForm
    ref="form"
    lazy-validation
    @submit.prevent="()=>{}"
  >
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="inputField.nickname"
          label="用戶名稱"
          required
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="inputField.memberLevel"
          label="用戶等級"
          required
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="inputField.email"
          label="Email"
          required
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="inputField.taxIDNumber"
          label="統一編號"
          required
          min="0"
          type="number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="inputField.cellphone"
          label="手機號碼"
          required
          type="number"
          min="0"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="inputField.telephone"
          label="電話號碼"
          required
          type="number"
          min="0"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="inputField.addressOne"
          label="地址一"
          required
          type="text"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="inputField.addressTwo"
          label="地址二"
          required
          type="text"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="inputField.addressThree"
          label="地址三"
          required
          type="text"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="inputField.rewardCredit"
          label="紅利點數"
          required
          type="number"
          min="0"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="inputField.recommendCode"
          label="推薦碼"
          required
          type="text"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn
          type="submit"
          @click="updateProd"
        >
          更新
        </VBtn>

        <VBtn
          color="secondary"
          variant="tonal"
          @click="resetInput"
        >
          復原資料
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>

<style lang="scss" scoped>
.editor {
  margin-block-start: 20px;
}

.images-flex {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-block-start: 20px;

  > .v-img {
    flex-basis: 200px;
    max-inline-size: 200px;
  }
}

.image-element {
  position: relative;
}

.icon {
  position: absolute;
  cursor: pointer;
  inset-block-start: 0;
  inset-inline-end: 0;

  &.to-next {
    inset-inline-end: 24px;
  }

  &.to-prev {
    inset-inline-end: 48px;
  }
}

.plus-image {
  position: relative;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  inline-size: 200px;
  min-block-size: 160px;
}

#plus-new-image {
  position: absolute;
  appearance: none;
  block-size: 100%;
  cursor: pointer;
  inline-size: 100%;
  inset-block-start: 0;
  inset-inline-start: 0;
  opacity: 0;
}
</style>