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
      <n-list>
        <n-list-item>xxxxxxxxxxxxxxxxxxxxxx</n-list-item>
        <n-list-item>aaaaaaaaaaaaaaaaaa</n-list-item>
        <n-list-item>bbbbbbbbbbbbbbbbbb</n-list-item>
      </n-list>
    </n-space>
    <n-divider />

    <n-space vertical>
      <n-h4>Your Tags</n-h4>
      <n-space>
        <n-tag type="success">SE</n-tag>
        <n-tag type="info">Golang</n-tag>
        <n-tag type="warning">Java</n-tag>
      </n-space>
    </n-space>
  </n-space>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>