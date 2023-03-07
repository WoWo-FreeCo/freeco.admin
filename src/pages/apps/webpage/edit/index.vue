<script setup>
import axios from '@/plugins/service'
import { UPDATE_WEB_PAGES } from '@/plugins/service/requestURL'
import { useWebpageStore } from '@/store/webpageStore'

const baseURL =
  import.meta.env.VITE_API_BASE

const form = ref()
const webpageStore = useWebpageStore()

const initialInput = {
  name: '',
  content: '',
}

const inputField = ref(initialInput)
const webpages = ref([])
const curWebpage = ref()

const route = useRoute()
const router = useRouter()


onMounted(async() => {
  await fetchData()
})

async function fetchData() {
  try {
    const res = await webpageStore.fetchWebpages()

    webpages.value = res.data.content
    setInitValue()
  } catch(error) {
    console.log(error)
  }
}


async function updateBanner() {
  try {
    if (!inputField.value.content) {
      return alert('請輸入文字內容')
    }

    const body = {
      ...inputField.value,
    }

    await axios.put(`/${UPDATE_WEB_PAGES(curWebpage.value.id)}`, body)

    alert('已更新頁尾內容')

    router.push({
      path: '/apps/webpage/list',
    })
  } catch(e) {
    console.log(e)
  }
}

function setInitValue() {
  const _id = route.query?.id
  if (!_id) {
    return router.push({
      path: '/apps/webpage/list',
    })
  }

  const webpage = webpages.value?.find(e => e.id == _id)

  if (!webpage) {
    return router.push({
      path: '/apps/webpage/list',
    })
  }

  curWebpage.value = webpage

  inputField.value = {
    ...inputField.value,
    name: webpage?.name,
    content: webpage?.content,
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
          v-model="inputField.name"
          label="頁尾名稱"
          required
          disabled=""
        />
      </VCol>

      <RichTextEditor
        v-model="inputField.content"
        class="editor"
        :max-limit="999999"
      />

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn
          type="submit"
          @click="updateBanner"
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