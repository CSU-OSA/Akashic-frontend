<template>
  <div class="home">
    <div class="left">
      <UserComponent />
    </div>
    <div class="middle">
      <MiddleContent />
    </div>
    <div class="right">
      <RightComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
import UserComponent from "./UserComponent.vue";
import RightComponent from "./RightComponent.vue";
import MiddleContent from "./MiddleContent.vue";
</script>

<style scoped>
.home {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.left,
.middle,
.right {
  height: 100%;
}

.left {
  width: 550px;
  background: rgb(253, 254, 254);
  padding: 35px;
}

.right {
  width: 600px;
  background: rgb(242, 243, 244);
  padding: 20px;
}

.middle {
  background: rgb(242, 243, 244);
  width: 100%;
  margin: 0 0;
  padding: 20px;
}
</style>
