<template>
  <div class="loader">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.loader {
  padding: 0;
  margin: 0;
  display: flex;
  width: 100vw;
  height: calc(100vh - 80px);
  justify-content: center;
  align-items: center;
  .spinner {
    width: 4em;
    height: 4em;
    border: 0.5em solid rgba(0, 0, 0, 0.1);
    border-left-color: #020180;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
