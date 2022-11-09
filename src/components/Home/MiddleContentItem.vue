<template>
  <n-card :hoverable="true"
          header-style="font-weight:bold"
          @click="clickEvent"
          :size="cardType"
  >
    <template #header>
      <n-avatar round size="small">
        <n-icon :component="iconType">
        </n-icon>
      </n-avatar>
      {{ props.title }}
    </template>
    <template #default>
      {{ props.description }}
    </template>
  </n-card>
</template>

<script setup lang="ts">
import type { Url } from "@/domain/base.type";
import { computed } from "vue";
import { CodeSlash, EarthSharp, DocumentTextOutline } from "@vicons/ionicons5"

interface ICardContent {
  id: number,
  title: string,
  description: string,
  type: string | number | null,
  url: Url
}

const props = defineProps<ICardContent>()

const cardType = computed(() => {
  if(props.type === 'code') {
    return 'large'
  }
  else if(props.type === 'wiki') {
    return 'huge'
  }
  else {
    return 'medium'
  }
})

const iconType = computed(() => {
  if(props.type === 'code') {
    return CodeSlash
  }
  else if(props.type === 'wiki') {
    return EarthSharp
  }
  else {
    return DocumentTextOutline
  }
})

const clickEvent = (e: MouseEvent) => {
  // router TODO code here
  e.preventDefault()
  alert("Now our project is a dev version, The Resource cant read.")
}
</script>

<style scoped>

</style>