<script setup>
import axios from '@/plugins/service'
import { POST_PRODUCT_CATEGORY } from '@/plugins/service/requestURL'
import router from '@/router'
import { useProductStore } from '@/store/prodStore'

const form = ref()
const prodStore = useProductStore()

const initialInput = {
  name: '',
}

const inputField = ref(initialInput)

async function createProdCategory() {
  try {
    if (!inputField.value.name) {
      return alert('請輸入商品分類名稱')
    }

    const body = {
      ...inputField.value,
    }

    await axios.post(`/${POST_PRODUCT_CATEGORY}`, body)

    alert('已建立商品分類')
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
    @submit.prevent="createProdCategory"
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