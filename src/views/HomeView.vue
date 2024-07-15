<script setup lang="ts">
import {ref} from "vue";
import QueryInfo from "../models/QueryInfo.ts";
import {EncodeQuery} from "../helpers/QueryInfoEncoder.ts";

const queryName = ref("XX学校期末测试");
const introduction = ref("欢迎使用XX学校查询系统。")
const systemTitle = ref("XX查询系统")
const queryUrl = ref("")
const isQueryCreated = ref(false)

function createQuery() {
  console.log("正在创建查询……")
  const query: QueryInfo = {
    name: queryName.value,
    introduction: introduction.value,
    systemTitle: systemTitle.value
  }
  const base64 = EncodeQuery(query)
  console.log(base64)
  queryUrl.value = window.location + 'query/' + base64;
  isQueryCreated.value = true
}

function preview() {
  window.open(queryUrl.value)
}

function copyLink() {

}

</script>

<template>
  <VAppBar>
    <VAppBarTitle>
      RickRollQuery
    </VAppBarTitle>
  </VAppBar>
  <VSheet class="form-sheet">
    <VAlert type="warning" icon="mdi-alert" title="警告" class="mb-4">
      本项目仅供娱乐，使用时请遵守相关法律法规，用户使用本项目造成的任何后果均由用户承担。继续使用本项目即代表您同意本项目的 <a href="https://www.gnu.org/licenses/agpl-3.0.en.html">开源许可（AGPL-v3 License）</a>。
      我们不会存储您使用本项目过程中产生的任何数据。如果您对上述文本存在异议，请立刻关闭本页面。
    </VAlert>
    <div class="gc-4 d-flex flex-column">
      <VForm>
        <VTextField label="查询名称"
                    v-model="queryName"/>
        <VTextField label="系统名"
                    v-model="systemTitle"/>
        <VTextarea label="导语"
                   v-model="introduction"/>
        <VBtn variant="elevated" @click="createQuery"
              color="primary">
          创建假查询
        </VBtn>

      </VForm>
      <div v-show="isQueryCreated" class="mt-4 mb-4">
        <div class="ga-4 d-flex flex-column gc-4">
          <VAlert type="success">创建成功！快复制下面的链接去整蛊你的朋友吧！</VAlert>
          <VTextField v-model="queryUrl"
                      label="假查询链接"/>
          <div class="d-flex gc-2">
            <VBtn color="primary" @click="copyLink">复制</VBtn>
            <VBtn @click="preview">预览</VBtn>
          </div>
        </div>
      </div>
    </div>
  </VSheet>
</template>

<style scoped>

</style>