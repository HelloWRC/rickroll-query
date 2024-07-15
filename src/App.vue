<template>
  <VThemeProvider >
    <VLayout class="app-root">
      <VMain >
        <RouterView/>
      </VMain>
    </VLayout>
  </VThemeProvider>
</template>

<script setup lang="ts">

</script>

<style scoped>
.app-root {
  height: 100vh;
}
</style>
