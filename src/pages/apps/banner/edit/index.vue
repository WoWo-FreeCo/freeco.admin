<script setup>
import axios from '@/plugins/service'
import { POST_PRODUCT_IMAGE, UPDATE_HOME_BANNER } from '@/plugins/service/requestURL'
import { useBannerStore } from '@/store/bannerStore'

const baseURL =
  import.meta.env.VITE_API_BASE

const form = ref()
const bannerStore = useBannerStore()

const initialInput = {
  img: '',
  href: '',
}

const loading = ref(false)
const inputField = ref(initialInput)
const banners = ref([])
const curBanner = ref()
const bannerImage = ref()
const imagePreviewURL = ref()

const route = useRoute()
const router = useRouter()


onMounted(async() => {
  await fetchData()
})

watch(bannerImage, async _new => {
  loading.value = !bannerImage.value[0]
  try {
    const formData = new FormData()

    formData.append('image', bannerImage.value[0])

    const res = await fetch(`${baseURL}/${POST_PRODUCT_IMAGE}`, {
      method: 'POST',
      body: formData,
    })

    const data = await res.json()

    console.log('圖片 response: ', data)
    imagePreviewURL.value = `${baseURL}/${data.filenames[0]}`
  } catch (e) {
    console.log(e)
  }
})

async function fetchData() {
  try {
    const res = await bannerStore.fetchBanners()

    banners.value = res.data.data
    setInitValue()
  } catch(error) {
    console.log(error)
  }
}


async function updateBanner() {
  try {
    if (!inputField.value.href) {
      return alert('請輸入橫幅的子頁面路徑')
    }

    const body = {
      ...inputField.value,
      img: imagePreviewURL.value,
    }

    await axios.put(`/${UPDATE_HOME_BANNER(curBanner.value.id)}`, body)

    alert('已更新橫幅')

    router.push({
      path: '/apps/banner/list',
    })
  } catch(e) {
    console.log(e)
  }
}

function setInitValue() {
  const _id = route.query?.id
  if (!_id) {
    return router.push({
      path: '/apps/banner/list',
    })
  }

  const banner = banners.value?.find(e => e.id == _id)

  if (!banner) {
    return router.push({
      path: '/apps/banner/list',
    })
  }

  curBanner.value = banner
  imagePreviewURL.value = banner?.img

  inputField.value = {
    ...inputField.value,
    href: banner?.href,
  }
}

function resetInput() {
  fetchData()
}
function clearImage() {
  imagePreviewURL.value = ''
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
        <VFileInput
          v-model="bannerImage"
          accept="image/*"
          show-size
          counter
          color="success"
          label="上傳橫幅圖片"
          @click:clear="clearImage"
        />
        <VImg
          v-if="imagePreviewURL"
          width="200"
          :src="imagePreviewURL"
        />
      </VCol>
      <VCol cols="12">
        <VTextField
          v-model="inputField.href"
          label="橫幅子頁面路徑"
          required
          placeholder=""
        />
      </VCol>

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