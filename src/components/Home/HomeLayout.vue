<template>
  <div id="home" class="md:flex">
    <div id="left" class="block md:block md:w-2/5">
      <UserComponent />
    </div>
    <div id="middle" class="block md:block">
      <MiddleContent />
    </div>
    <div id="right" class="hidden md:block md:w-2/5">
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
#home {
  justify-content: space-between;
  height: 100%;
}

#left,
#middle,
#right {
  height: auto;
}

#left {
  background: rgb(253, 254, 254);
  padding: 30px;
}

#right {
  background: rgb(242, 243, 244);
  padding: 20px;
}

#middle {
  background: rgb(242, 243, 244);
  width: 100%;
  margin: 0 0;
  padding: 20px;
}
</style>
