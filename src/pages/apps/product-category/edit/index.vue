<script setup>
import axios from '@/plugins/service'
import { UPDATE_PRODUCT_CATEGORY } from '@/plugins/service/requestURL'
import { useProductStore } from '@/store/prodStore'

const baseURL =
  import.meta.env.VITE_API_BASE

const form = ref()
const prodStore = useProductStore()

const initialInput = {
  name: "",
}

const isConfirmDialogOpen = ref(false)
const imagePreviewURL = ref('')
const imagesPreviewURL = ref({})
const inputField = ref(initialInput)
const categories = ref([])
const curCategory = ref()

const route = useRoute()
const router = useRouter()


onMounted(async() => {
  await fetchData()
})

async function fetchData() {
  try {
    const res = await prodStore.fetchProductCategory()

    categories.value = res.data.data
    setInitValue()
  } catch(error) {
    console.log(error)
  }
}


async function updateProdCategory() {
  try {
    if (!inputField.value.name) {
      return alert('請輸入商品分類名稱')
    }

    const body = {
      ...inputField.value,
    }

    await axios.put(`/${UPDATE_PRODUCT_CATEGORY(curCategory.value.id)}`, body)

    alert('已更新商品分類')

    router.push({
      path: '/apps/product-category/list',
    })
  } catch(e) {
    console.log(e)
  }
}

function setInitValue() {
  const _id = route.query?.id
  if (!_id) {
    return router.push({
      path: '/apps/product-category/list',
    })
  }

  const category = categories.value?.find(e => e.id == _id)

  if (!category) {
    return router.push({
      path: '/apps/product-category/list',
    })
  }

  curCategory.value = category

  inputField.value = {
    ...inputField.value,
    name: category.name,
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
          label="商品分類名稱"
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
          @click="updateProdCategory"
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