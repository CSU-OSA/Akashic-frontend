<template>
  <n-space vertical>
    <n-space>
      <n-avatar round size="small" />
      <n-h4>User NickName</n-h4>
    </n-space>

    <n-divider />

    <n-space>
      <n-space>
        <n-h4>Recent Resource</n-h4>
        <n-button type="success" text-color="black">Add</n-button>
      </n-space>
      <n-input placeholder="Find a Resource" size="large"></n-input>

      <n-list hoverable clickable>
        <n-list-item v-for="item in UserResourceDataDemos" :key="item.id">
          <n-thing>
            <template #avatar>
              <n-avatar round size="small">

              </n-avatar>
            </template>
            <template #header>
              {{ item.title }}
            </template>
          </n-thing>
        </n-list-item>
      </n-list>
    </n-space>
    <n-divider />

    <n-space vertical>
      <n-h4>Recent Activities</n-h4>
      <n-space>
        <n-tag type="success">SE</n-tag>
        <n-tag type="info">Golang</n-tag>
        <n-tag type="warning">Java</n-tag>
      </n-space>
    </n-space>
  </n-space>
</template>

<script setup lang="ts">
const NewUserResourceData = (
  id: number,
  title: string,
  url: string
) => {
  return {
    id,
    title,
    url
  }
}

const UserResourceDataDemos = [
  NewUserResourceData(1, 'xxxxxx', '/xxx/xxx'),
  NewUserResourceData(2, 'yyyyyy', '/yyyy/yy'),
  NewUserResourceData(3, 'gggggg', '/gggg/gg'),
  NewUserResourceData(4, 'aaaaa', '/aaa/aaaa')
]
</script>

<style scoped></style>
