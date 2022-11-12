<template>
  <div id="home" class="justify-between h-full md:flex">
    <div id="left" class="bg-surface p-5 block md:block shrink-0">
      <UserComponent />
    </div>
    <div id="middle" class="bg-surfaceVariant p-10 block md:block">
      <MiddleContent />
    </div>
    <div id="right" class="bg-surface p-5 hidden lg:block md:w-2/5">
      <RightComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
import UserComponent from "./UserComponent.vue";
import RightComponent from "./RightComponent.vue";
import MiddleContent from "./MiddleContent.vue";
</script>
