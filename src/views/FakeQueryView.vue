<script setup lang="ts">
import {DecodeQuery} from "../helpers/QueryInfoEncoder.ts";
import QueryInfo from '../models/QueryInfo.ts';
import {ref} from "vue";
import {randomInt} from "node:crypto";

const isErrorDialogOpen = ref(false);
const isLoading = ref(false);
const isFirstError = ref(false);
const today = ref("")

const props = defineProps({
  params: String
})
let query:QueryInfo = {
  name: "",
  introduction: "",
  systemTitle: ""
}
if (props.params != undefined) {
  query = DecodeQuery(props.params)
}
console.log(query)
today.value = (new Date()).toDateString();

function onNavigated() {
  isLoading.value = true;
  if (isFirstError.value) {
    window.location.assign("https://www.bilibili.com/video/BV1z34y1C7Kc/?p=1")
  } else {
    setTimeout(postOnNavigated, 2000)
  }
  isFirstError.value = true;
  //
}

function postOnNavigated() {
  isLoading.value = false;
  isErrorDialogOpen.value = true;
}

</script>

<template>
  <VAppBar color="primary">
    <slot>
      <VAppBarTitle>{{ query.systemTitle }}</VAppBarTitle>
    </slot>
  </VAppBar>
  <VProgressLinear indeterminate color="primary"
                   :active="isLoading"/>
  <div style="background-color: #888888; height: 100vh"
       class="d-flex"
       disabled>
    <VSheet class="form-sheet" >
      <p >
        {{ query.introduction }}
      </p>
      <p>
        请选择您要查询的项目
      </p>
      <VList select-strategy="classic" selectable>
        <VListItem @click="onNavigated">
          <div>
            <span>{{ query.name }}</span><br/>
            <span style="font-size: 13px; opacity: 0.75">
              {{ today }}
            </span>
          </div>
          <template v-slot:append>
            <VIcon>
              mdi-arrow-right
            </VIcon>
          </template>
        </VListItem>
      </VList>
    </VSheet>
  </div>
  <VDialog v-model="isErrorDialogOpen"
           width="auto">
    <v-card
        max-width="400"
        prepend-icon="mdi-close"
        text="服务器繁忙，请稍后再试。"
        title="获取查询信息失败"
    >
      <template v-slot:actions>
        <v-btn
            class="ms-auto"
            text="确定"
            color="primary"
            @click="isErrorDialogOpen = false"
        ></v-btn>
      </template>
    </v-card>
  </VDialog >
</template>

<style scoped>

</style>