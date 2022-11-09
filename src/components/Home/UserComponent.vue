<template>
  <n-space vertical>
    <n-space>
      <n-avatar round size="small"/>
      <n-h4>User NickName</n-h4>
    </n-space>

    <n-hr class="mt-0.5"/>
    <n-space vertical>
      <n-space justify="space-between">
        <n-h4>Recent Resource</n-h4>
        <n-button type="success" text-color="black" class="lg:block" @click="AddBtnClickEvent">
          Add
        </n-button>
      </n-space>
      <n-input placeholder="Find a Resource" size="large" @input="searchInputChange"></n-input>

      <n-list hoverable clickable>
        <n-list-item v-for="item in resourceList()" :key="item.id" @click="clickEvent">
          <n-thing>
            <template #avatar>
              <n-avatar round size="small">
                <n-icon :component="iconType(item)" />
              </n-avatar>
            </template>
            <template #header>
              {{ item.title }}
            </template>
          </n-thing>
        </n-list-item>
      </n-list>
    </n-space>

    <n-hr class="mt-0.5"/>

    <n-space vertical>
      <n-h4>Recent Tags</n-h4>
      <n-space>
        <n-tag type="success">SE</n-tag>
        <n-tag type="info">Golang</n-tag>
        <n-tag type="warning">Java</n-tag>
      </n-space>
    </n-space>
  </n-space>
</template>

<script setup lang="ts">
import type { IResource } from "@/domain/resource.interface";
import { CodeSlash, DocumentTextOutline, EarthSharp } from "@vicons/ionicons5";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter()
const searchVal = ref('')

const NewUserResourceData = (
  args: IResource
) => {
  return args
}

const UserResourceDataDemos = [
  NewUserResourceData({id: 1, title: '软件工程专业wiki', description: '', type: 'wiki', url: '/wiki/xxxx'}),
  NewUserResourceData({id: 2, title: 'JPetStore-SpringBoot Code', description: '', type: 'code', url: '/code/xxx'}),
  NewUserResourceData({id: 3, title: 'Java语言设计课程资源', description: '', type: 'text', url: '/text/java'}),
  NewUserResourceData({id: 4, title: '软件创新大赛萌新攻略', description: '', type: 'text', url: '/text/sss'})
]

const iconType = (data: IResource) => {
  if(data.type === 'code') {
    return CodeSlash
  }
  else if(data.type === 'wiki') {
    return EarthSharp
  }
  else {
    return DocumentTextOutline
  }
}

const AddBtnClickEvent = (e: MouseEvent) => {
  e.preventDefault()
  router.push('/upload')
}

const clickEvent = (e: MouseEvent) => {
  e.preventDefault()
  alert("Now our project is a dev version, The Resource cant read.")
}

const searchInputChange = (v: string) => {
  searchVal.value = v
  //console.log(searchVal.value)
}

const resourceList = () => {
  if(searchVal.value === '') {
    return UserResourceDataDemos
  }
  return UserResourceDataDemos.filter(item => {
    if(item.title.search(searchVal.value) !== -1) {
      return item
    }
  })
}
</script>

<style scoped></style>
