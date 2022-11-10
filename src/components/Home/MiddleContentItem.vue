<template>
  <n-card
    :hoverable="true"
    header-style="font-weight:bold"
    @click="clickEvent"
    :size="cardType"
  >
    <template #header>
      <n-avatar round size="small">
        <n-icon :component="iconType"> </n-icon>
      </n-avatar>
      {{ props.prop.title }}
    </template>
    <template #default>
      {{ props.prop.description }}
    </template>
  </n-card>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { CodeSlash, EarthSharp, DocumentTextOutline } from "@vicons/ionicons5"
import type { IResource } from "@/domain/resource.interface"

const props = defineProps<{prop: IResource}>()

const cardType = computed(() => {
  if(props.prop.type === 'code') {
    return 'large'
  }
  else if(props.prop.type === 'wiki') {
    return 'huge'
  }
  else {
    return 'medium'
  }
})

const iconType = computed(() => {
  if(props.prop.type === 'code') {
    return CodeSlash
  }
  else if(props.prop.type === 'wiki') {
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

<style scoped></style>
