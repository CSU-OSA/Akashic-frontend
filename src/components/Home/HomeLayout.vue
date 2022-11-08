<template>
  <div class="home">
    <div class="left">
      <UserComponent />
    </div>
    <div class="middle">
      Message
    </div>
    <div class="right">
      FootPoint
    </div>
  </div>
</template>

<script setup lang="ts">
import UserComponent from "./UserComponent.vue"
</script>

<style scoped>
.home {
  display: flex;
  justify-content: space-between;
}

.left,
.middle,
.right {
  height: 100%;
}

.left {
  width: 400px;
  background: azure;
}

.right {
  width: 200px;
  background: floralwhite;
}

.middle {
  background: floralwhite;
  width: 100%;
  margin: 0 20px;
}
</style>
