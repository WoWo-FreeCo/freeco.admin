<script setup>
import axios from '@/plugins/service'
import { UPDATE_DAILY_CHECK } from '@/plugins/service/requestURL'
import { useDailyCheckStore } from '@/store/dailyCheckStore'

const baseURL =
  import.meta.env.VITE_API_BASE

const isMissionItem = [
  {
    title: '是',
    value: true,
  },
  {
    title: '否',
    value: false,
  },
]

const form = ref()
const dailyCheckStore = useDailyCheckStore()

const initialInput = {
  credit: 1,
  video: '',
  isMission: false,
}

const inputField = ref(initialInput)
const dailyChecks = ref([])
const curDailyCheck = ref()

const route = useRoute()
const router = useRouter()


onMounted(async() => {
  await fetchData()
})

async function fetchData() {
  try {
    const res = await dailyCheckStore.fetchDailyChecks()

    dailyChecks.value = res.data.data
    setInitValue()
  } catch(error) {
    console.log(error)
  }
}

async function updateDailyCheck() {
  try {
    if (parseInt(inputField.value?.credit) < 0) {
      return alert('請勿輸入小於0的數字')
    }
    if (inputField.value.isMission && !inputField.value.video) {
      return alert('請輸入影片連結')
    }

    const body = {
      ...inputField.value,
      credit: parseInt(inputField.value.credit),
    }

    if (!inputField.value.video) {
      delete body.video
    }

    await axios.put(`/${UPDATE_DAILY_CHECK(curDailyCheck.value.index)}`, body)

    alert('已更新連續登入資料')

    router.push({
      path: '/apps/daily-check/list',
    })
  } catch(e) {
    console.log(e)
  }
}

function setInitValue() {
  const _id = route.query?.id
  if (!_id) {
    return router.push({
      path: '/apps/daily-check/list',
    })
  }

  const dailyCheck = dailyChecks.value?.find(e => e.index == _id)

  if (!dailyCheck) {
    return router.push({
      path: '/apps/daily-check/list',
    })
  }

  curDailyCheck.value = dailyCheck

  inputField.value = {
    ...inputField.value,
    video: dailyCheck?.video,
    isMission: dailyCheck?.isMission,
    credit: dailyCheck?.credit,
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
          v-model="inputField.credit"
          label="獎勵紅利"
          type="number"
          required
          min="0"
        />
      </VCol>

      <VCol cols="12">
        <VSelect
          v-model="inputField.isMission"
          :items="isMissionItem"
          label="是否需要觀看影片"
          name="select-isMission"
          require
        />
      </VCol>

      <VCol
        v-show="inputField.isMission"
        cols="12"
      >
        <VTextField
          v-model="inputField.video"
          label="影片連結"
          type="text"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn
          type="submit"
          @click="updateDailyCheck"
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
    <!--  -->
  </VForm>
</template>

<style lang="scss" scoped>
.editor {
  inline-size: 100%;
  margin-block-start: 20px;
}

.images-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-block-start: 20px;

  > .v-img {
    flex-basis: 200px;
    max-inline-size: 200px;
  }
}
</style>