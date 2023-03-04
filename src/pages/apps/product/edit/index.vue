<script setup>
import axios from '@/plugins/service'
import { POST_PRODUCT_IMAGE, UPDATE_PRODUCT, UPDATE_PRODUCT_IMAGES, UPDATE_PRODUCT_MARKDOWNINFO } from '@/plugins/service/requestURL'
import { useProductStore } from '@/store/prodStore'
import { useRouter } from 'vue-router'

const baseURL =
  import.meta.env.VITE_API_BASE

const form = ref()
const prodStore = useProductStore()


const productType = [
  '一般', '冷鏈',
]

const initialInput = {
  skuId: "",
  categoryName: "",
  name: "",
  price: 0,
  memberPrice: 0,
  vipPrice: 0,
  svipPrice: 0,
  attribute: '一般',

  // coverImagePath: '',
}

const prodImage = ref()
const prodImages = ref()

const loading = ref(true)
const isConfirmDialogOpen = ref(false)
const imagePreviewURL = ref('')
const imagesPreviewURL = ref({})
const inputField = ref(initialInput)
const rawCategories = ref({})
const categories = ref([])
const products = ref()
const curProd = ref()
const curProdDetailName = ref('')
const curEditedName = ref('')
const markdownItems = ref()
const isRenaming = ref(false)

const route = useRoute()
const router = useRouter()


onMounted(async() => {
  await fetchData()
})

async function fetchData() {
  try {
    const res = await prodStore.fetchProductCategory()
    const prodRes = await prodStore.fetchProducts()
    const prodDetailRes = await prodStore.fetchProductDetail(route.query?.id)
    const arr = []

    res.data?.data?.forEach(e => {
      arr.push(e.name)
    })
    categories.value = arr
    rawCategories.value = res.data.data
    products.value = prodRes.data.data
    markdownItems.value = prodDetailRes.data.data?.markdownInfos
    if (markdownItems.value.length) {
      curProdDetailName.value = markdownItems.value[0].title
    } else {
      curProdDetailName.value = '目前標籤頁資料為空'
    }
    setInitValue()
  } catch(error) {
    console.log(error)
  }
}

watch(prodImage, async _new => {
  loading.value = !prodImage.value[0]
  try {
    const formData = new FormData()

    formData.append('image', prodImage.value[0])

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

watch(prodImages, async _new => {
  loading.value = true
  try {
    const formData = new FormData()

    prodImages.value.forEach(img => {
      formData.append('image', img)
    })

    console.log(prodImages.value)

    const res = await fetch(`${baseURL}/${POST_PRODUCT_IMAGE}`, {
      method: 'POST',
      body: formData,
    })

    const data = await res.json()

    console.log('圖片 response: ', data)

    imagesPreviewURL.value = data.filenames.map(e => {
      return {
        url: `${baseURL}/${e}`,
      }
    })

    console.log(imagesPreviewURL.value)

    // imagePreviewURL.value = `${baseURL}/${data.filenames[0]}`
  } catch (e) {
    console.log(e)
  }
  loading.value = false
})

async function updateProd() {
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

    await axios.put(`/${UPDATE_PRODUCT(curProd.value.id)}`, body)
    console.log(markdownItems.value)
    
    await axios.put(`/${UPDATE_PRODUCT_MARKDOWNINFO(curProd.value.id)}`, {
      markdownInfos: [...markdownItems.value],
    })

    await axios.put(`/${UPDATE_PRODUCT_IMAGES(curProd.value.id)}`, {
      images: [...imagesPreviewURL.value.map(e => {
        return {
          img: e?.url || '',
        }
      })],
    })

    alert('已更新商品資訊')

    router.push({
      path: '/apps/product/list',
    })
  } catch(e) {
    console.log(e)
  }
}

function setInitValue() {
  const _id = route.query?.id
  if (!_id) {
    return router.push({
      path: '/apps/product/list',
    })
  }

  const prod = products.value?.find(e => e.id == _id)

  if (!prod) {
    return router.push({
      path: '/apps/product/list',
    })
  }

  curProd.value = prod
  imagePreviewURL.value = prod?.coverImg
  imagesPreviewURL.value = prod?.images?.map(e=> {
    return {
      url: e.img,
      id: e.index,
    }
  })
  console.log(prod)

  inputField.value = {
    ...inputField.value,
    skuId: prod.skuId,

    // categoryName: "",
    name: prod.name,
    price: prod.price,
    memberPrice: prod.memberPrice,
    vipPrice: prod.vipPrice,
    svipPrice: prod.svipPrice,
    categoryName: rawCategories.value.find(e => e.id === prod.categoryId)?.name,

    attribute: prod.attribute === 'COLD_CHAIN' ? '冷鏈' : '一般',
  }
}
function clearImage() {
  imagePreviewURL.value = ''
  console.log(122, imagePreviewURL.value)
}
function clearImages() {
  imagesPreviewURL.value = []
}
function resetInput() {
  fetchData()
}
function confirmDeleteMarkdown(bool) {
  if (!bool) return
  markdownItems.value = markdownItems.value.filter(e => e.title !== curProdDetailName.value)
  curProdDetailName.value = markdownItems.value.length ? markdownItems.value[0].title : '目前標籤頁為空'
}
function addMarkdownItem() {
  const newTabName = '商品資訊頁籤'

  curProdDetailName.value = newTabName
  markdownItems.value.push({
    title: newTabName,
    text: "請填入商品資訊",
  })
}
function renameMarkdown() {
  isRenaming.value = true
  curEditedName.value = curProdDetailName.value
}
function confirmRenameMarkdown() {
  markdownItems.value.find(
    e => e.title === curProdDetailName.value,
  ).title = curEditedName.value
  isRenaming.value = false
  curProdDetailName.value = curEditedName.value
}
function closeRenaming() {
  console.log(222)
  isRenaming.value = false
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
          label="商品名稱"
          required
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="inputField.skuId"
          label="商品標籤"
          required
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="inputField.price"
          label="定價"
          required
          min="0"
          type="number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="inputField.memberPrice"
          label="會員價"
          required
          type="number"
          min="0"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="inputField.vipPrice"
          label="VIP價"
          required
          type="number"
          min="0"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="inputField.svipPrice"
          label="SVIP價"
          required
          type="number"
          min="0"
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
        class="gap-4"
      >
        <VFileInput
          v-model="prodImage"
          accept="image/*"
          show-size
          counter
          color="primary"
          label="上傳商品縮圖"
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
        class="gap-4"
      >
        <VFileInput
          v-model="prodImages"
          accept="image/*"
          multiple
          show-size
          counter
          color="primary"
          label="上傳商品輪播圖"
          @click:clear="clearImages"
        />
        
        <div
          v-if="imagesPreviewURL"
          class="images-flex"
        >
          <VImg
            v-for="img in imagesPreviewURL"
            :key="img?.id || img?.url || img?.img"
            width="200"
            :src="img.url"
          />
        </div>
      </VCol>

      <VCol
        cols="12"
      >
        <div
          class="d-flex"
          cols="0"
        >
          <VSelect
            v-if="!isRenaming"
            v-model="curProdDetailName"
            :items="markdownItems"
            label="當前頁籤"
            class="prod-tabs"
          />
          <VTextField
            v-else
            v-model="curEditedName"
            label="請輸入新的頁籤名稱"
          />
          <div v-show="!isRenaming">
            <VBtn
              icon
              variant="text"
              color="default"
              size="x-small"
              @click="renameMarkdown"
            >
              <VIcon
                :size="22"
                icon="tabler-edit-circle"
              />
            </VBtn>
            <VBtn
              icon
              variant="text"
              color="default"
              size="x-small"
              @click="isConfirmDialogOpen = true"
            >
              <VIcon
                :size="22"
                icon="tabler-circle-minus"
              />
            </VBtn>
            <VBtn
              icon
              variant="text"
              color="default"
              size="x-small"
              @click="addMarkdownItem"
            >
              <VIcon
                :size="22"
                icon="tabler-circle-plus"
              />
            </VBtn>
          </div>
          <div v-show="isRenaming">
            <VBtn
              icon
              variant="text"
              color="primary"
              size="x-small"
              @click="confirmRenameMarkdown"
            >
              <VIcon
                :size="22"
                icon="tabler-circle-check"
              />
            </VBtn>
            <VBtn
              icon
              variant="text"
              color="error"
              size="x-small"
              @click="closeRenaming"
            >
              <VIcon
                :size="22"
                icon="tabler-circle-x"
              />
            </VBtn>
          </div>
        </div>
        <RichTextEditor
          v-for="item in markdownItems"
          v-show="curProdDetailName === item.title"
          :key="item?.title"
          v-model="item.text"
          class="editor"
          :max-limit="999999"
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
    <!--  -->
    <ConfirmDialog
      v-model:isDialogVisible="isConfirmDialogOpen"
      confirmation-msg="確定要刪除當前的商品頁籤？文字資料將無法復原"
      @confirm="confirmDeleteMarkdown"
    />
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