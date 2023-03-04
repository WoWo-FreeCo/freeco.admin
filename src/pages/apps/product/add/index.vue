<script setup>
import axios from '@/plugins/service'
import { POST_PRODUCT } from '@/plugins/service/requestURL'
import router from '@/router'
import { useProductStore } from '@/store/prodStore'

const baseURL =
  import.meta.env.VITE_API_BASE

const form = ref()
const prodStore = useProductStore()

const prodImage = ref()
const loading = ref(true)

const imagePreviewURL = ref('')

const initialInput = {
  skuId: "",
  categoryName: "",
  name: "",
  price: 0,
  memberPrice: 0,
  vipPrice: 0,
  svipPrice: 0,
  attribute: '一般',
}

const inputField = ref(initialInput)

const productType = [
  '一般', '冷鏈',
]

const rawCategories = ref({})
const categories = ref([])

watchEffect(async() => {
  try {
    const res = await prodStore.fetchProductCategory()
    const arr = []

    res.data?.data?.forEach(e => {
      arr.push(e.name)
    })
    categories.value = arr
    rawCategories.value = res.data.data
  } catch(error) {
    console.log('error')
  }
})

watch(prodImage, async _new => {
  loading.value = !prodImage.value[0]
  try {
    const formData = new FormData()

    formData.append('image', prodImage.value[0])

    const res = await fetch(`https://api.wowo.tw/api/v1/image`, {
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
    if (!inputField.value.attribute) {
      return alert('請選擇商品運送類型')
    }
    if (!inputField.value.skuId) {
      return alert('請輸入商品標籤')
    }
    if (!inputField.value.categoryName) {
      return alert('請選擇商品分類')
    }

    const body = {
      ...inputField.value,
      attribute: inputField.value.attribute === '冷鏈' ? 'COLD_CHAIN' : 'GENERAL',
      categoryId: rawCategories.value.find(e => e.name === inputField.value.categoryName).id,
      coverImagePath: imagePreviewURL.value,
    }

    delete body.categoryName

    if (!imagePreviewURL.value) {
      delete body.coverImagePath
    }

    const res = await axios.post(`/${POST_PRODUCT}`, body)

    alert('已建立商品')
    router.push({
      path: '/apps/product/list',
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
      <VCol cols="12">
        <VTextField
          v-model="inputField.name"
          label="商品名稱"
          required
          placeholder="商品名稱"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="inputField.skuId"
          label="商品標籤"
          required
          placeholder="商品標籤"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="inputField.price"
          label="定價"
          required
          min="0"
          type="number"
          placeholder="定價"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="inputField.memberPrice"
          label="會員價"
          required
          type="number"
          min="0"
          placeholder="會員價"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="inputField.vipPrice"
          label="VIP價"
          required
          type="number"
          min="0"
          placeholder="VIP價"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="inputField.svipPrice"
          label="SVIP價"
          required
          type="number"
          min="0"
          placeholder="SVIP價"
        />
      </VCol>

      <VCol cols="12">
        <VSelect
          v-model="inputField.categoryName"
          :items="categories"
          label="商品分類"
          name="select-1"
          require
        />
      </VCol>

      <VCol cols="12">
        <VSelect
          v-model="inputField.attribute"
          :items="productType"
          label="商品運送類型"
          name="select-2"
          require
        />
      </VCol>

      <VCol
        cols="12"
        class=" gap-4"
      >
        <VFileInput
          v-model="prodImage"
          accept="image/*"
          show-size
          counter
          color="primary"
          label="上傳商品圖"
          @click:clear="clearImage"
        />
        <VImg
          v-if="imagePreviewURL"
          width="200"
          :src="imagePreviewURL"
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