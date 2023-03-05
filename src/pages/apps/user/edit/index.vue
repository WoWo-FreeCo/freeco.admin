<script setup>
import axios from '@/plugins/service';
import { UPDATE_PRODUCT } from '@/plugins/service/requestURL';
import { useUserStore } from '@/store/userStore';
import { useRouter } from 'vue-router';

const baseURL =
  import.meta.env.VITE_API_BASE

const form = ref()
const userStore = useUserStore()


const initialInput = {
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
          v-model="inputField.name"
          label="商品名稱"
          required
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="inputField.skuId"
          label="商品標號"
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
          color="success"
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
          <div
            v-for="img, index in imagesPreviewURL"
            :key="img?.id || img?.url || img?.img"
            class="image-element"
          >
            <VImg
              width="200"
              :src="img.url"
            />
            <VIcon
              class="icon"
              :size="22"
              color="error"
              icon="tabler-circle-x"
              @click="removeFromImages(img)"
            />
            <VIcon
              v-show="index !== 0"
              class="icon to-prev"
              :size="22"
              color="info"
              icon="tabler-arrow-narrow-left"
              @click="swapImages(index, 'prev')"
            />
            <VIcon
              v-show="index !== (imagesPreviewURL.length - 1)"
              class="icon to-next"
              :size="22"
              color="info"
              icon="tabler-arrow-narrow-right"
              @click="swapImages(index, 'next')"
            />
          </div>
          <div class="plus-image d-flex">
            <VIcon
              :size="100"
              color="success"
              icon="tabler-circle-plus"
            />
            <input
              id="plus-new-image"
              class="upload-image"
              type="file"
              accept="image/*"
              name="upload-image"
              @change="onLastImageUpload"
            >
          </div>
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
              color="success"
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