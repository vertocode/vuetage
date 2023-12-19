<template>
  <main class="error-component">
    <div class="content">
      <slot></slot>
    </div>
  </main>
</template>

<style scoped lang="scss">
.error-component {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: gray;
  border: solid 0.5px black;
  font-weight: bold;
  padding: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;

  :deep(.content) {
    border-radius: 5px;
    width: 500px;
    padding: 2em;
    background-color: white;

    h1 {
      margin: 0;
    }

    p {
      font-size: 1.5em;
      margin: 10px 0;
      color: red;
    }
  }

}
</style>