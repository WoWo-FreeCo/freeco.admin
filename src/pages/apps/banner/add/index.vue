<script setup>
import axios from '@/plugins/service'
import { POST_HOME_BANNER, POST_PRODUCT_IMAGE } from '@/plugins/service/requestURL'
import router from '@/router'

const baseURL =
  import.meta.env.VITE_API_BASE

const form = ref()

const bannerImage = ref()
const loading = ref(true)

const imagePreviewURL = ref('')

const initialInput = {
  img: '',
  href: '',
}

const inputField = ref(initialInput)

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

async function createProd() {
  try {
    if (!imagePreviewURL.value) {
      return alert('請上傳橫幅圖片')
    }
    if (!inputField.value.href) {
      return alert('請上傳橫幅子頁面路徑')
    }

    const body = {
      ...inputField.value,
      img: imagePreviewURL.value,
    }

    const res = await axios.post(`/${POST_HOME_BANNER}`, body)

    alert('已建立橫幅')
    router.push({
      path: '/apps/banner/list',
    })
  } catch(e) {
    console.log(e)
  }
}
function clearImage() {
  imagePreviewURL.value = ''
}
function resetInput() {
  inputField.value = {
    ...initialInput,
  }
}
</script>

<template>
  <VForm
    ref="form"
    lazy-validation=""
    @submit.prevent="createProd"
  >
    <VRow>
      <VCol
        cols="12"
        class="gap-4"
      >
        <VFileInput
          v-model="bannerImage"
          accept="image/*"
          show-size
          counter
          color="primary"
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
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn
          type="submit"
        >
          建立
        </VBtn>

        <VBtn
          color="secondary"
          variant="tonal"
          @click="resetInput"
        >
          清除
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>

<style lang="scss" scoped>
.images-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;

  > .v-img {
    flex-basis: 200px;
    max-inline-size: 200px;
  }
}
</style>