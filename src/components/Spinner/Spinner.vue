<template>
  <div class="spinner">
    <div class="spinner-inner"></div>
  </div>
</template>

<style lang="scss">
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid transparent;
  border-top-color: #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  & .spinner-inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
<script setup lang="ts">
</script>