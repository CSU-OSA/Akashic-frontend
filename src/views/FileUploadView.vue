<template>
    <div>
        <n-upload multiple directory-dnd action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f" :max="5">
        <n-upload-dragger>
            <div style="margin-bottom: 12px">
                <n-icon size="48" :depth="3">
                    <archive-icon />
                </n-icon>
            </div>
            <n-text style="font-size: 16px">
                点击或者拖动文件到该区域来上传
            </n-text>
        </n-upload-dragger>
    </n-upload>
    </div>
    

</template>

<script lang="ts" setup>

import { ArchiveOutline as ArchiveIcon } from '@vicons/ionicons5'



</script>