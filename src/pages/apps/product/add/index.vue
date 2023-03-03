<script setup>
import axios from '@/plugins/service'
import { POST_PRODUCT, POST_PRODUCT_IMAGE } from '@/plugins/service/requestURL'
import { useProductStore } from '@/store/prodStore'

const form = ref()
const prodStore = useProductStore()

const prodImage = ref()
const loading = ref(true)

watch(prodImage, async() => {
  loading.value = !prodImage.value[0]
  try {
    const headers = {
      'Content-Type': 'multipart/form-data',
    }

    const formData = new FormData()

    formData.append('image', prodImage.value[0])
 
    const res = await axios.post(`/${POST_PRODUCT_IMAGE}`, {
      formData,
    }, {
      headers,
    })

    console.log('圖片 response: ', res)
  } catch (e) {
    console.log(e)
  }
})

const inputField = ref({
  skuId: "",
  categoryName: "",
  name: "",
  price: 0,
  memberPrice: 0,
  vipPrice: 0,
  svipPrice: 0,
  attribute: '一般',

  // coverImagePath: '',
})

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

async function createProd() {
  try {
    if (!inputField.value.attribute) {
      return alert('請選擇產品運送類型')
    }
    if (!inputField.value.skuId) {
      return alert('請輸入產品標籤')
    }
    if (!inputField.value.categoryName) {
      return alert('請選擇產品分類')
    }

    const body = {
      ...inputField.value,
      attribute: inputField.value.attribute === '冷鏈' ? 'COLD_CHAIN' : 'GENERAL',
      categoryId: rawCategories.value.find(e => e.name === inputField.value.categoryName).id,
    }

    delete body.categoryName

    const res = await axios.post(`/${POST_PRODUCT}`, body)

    alert('已建立新產品')

    // useRouter().push({
    //   path: '/apps/product/list',
    // })
  } catch(e) {
    console.log(e)
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
          label="產品名稱"
          required
          placeholder="產品名稱"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="inputField.skuId"
          label="產品標籤"
          required
          placeholder="產品標籤"
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
          label="產品分類"
          name="select-1"
          require
        />
      </VCol>

      <VCol cols="12">
        <VSelect
          v-model="inputField.attribute"
          :items="productType"
          label="產品運送類型"
          name="select-2"
          require
        />
      </VCol>

      <VFileInput
        v-model="prodImage"
        accept="image/*"
        show-size
        counter
        color="primary"
        label="上傳產品圖"
      />


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
          type="reset"
          variant="tonal"
        >
          清除
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>