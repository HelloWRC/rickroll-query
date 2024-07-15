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
      <div v-show="isQueryCreated">
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