<template>
    <div class="form">
        <n-card title="上传资源" embedded>

            <n-form ref="formRef" :model="model" :rules="rules" label-placement="top" label-width="auto"
                require-mark-placement="right-hanging" :size="size" :style="{
                    minWidth: '640px',
                    maxWidth: '640px'
                }">

                <n-form-item label="Title" path="title">
                    <n-input v-model:value="model.title" placeholder="Input" />
                </n-form-item>

                <n-form-item label="Description" path="description">
                    <n-input v-model:value="model.description" placeholder="Textarea" type="textarea" :autosize="{
                        minRows: 2,
                        maxRows: 5
                    }" />
                </n-form-item>

                <n-form-item label="Tag" path="tag">
                    <n-select v-model:value="model.tag" placeholder="Select" :options="model.generalOptions" multiple />
                </n-form-item>

                <n-form-item>
                    <n-upload multiple directory-dnd action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
                        :max="10">
                        <n-upload-dragger>
                            <div style="margin-bottom: 12px">
                                <n-icon size="50" :depth="3">
                                    <archive-icon />
                                </n-icon>
                            </div>
                            <n-text style="font-size: 16px">
                                点击或者拖动文件到该区域来上传
                            </n-text>
                        </n-upload-dragger>
                    </n-upload>
                </n-form-item>

                <div style="display: flex; justify-content: flex-end">
                    <n-button round type="primary" @click="submit">
                        submit
                    </n-button>
                </div>
            </n-form>


        </n-card>
    </div>
</template>

<script lang="ts" setup>

import { ArchiveOutline as ArchiveIcon } from '@vicons/ionicons5'
import type { FormInst } from 'naive-ui';
import { reactive, ref } from 'vue';


const formRef = ref<FormInst | null>(null)


const size = ref("medium")

let model = reactive({
    title: "",
    description: "",
    tag: "",
    generalOptions: ['软件工程', '数学建模', '笔记', '竞赛'].map(
        (item) => ({
            label: item,
            value: item
        })
    )
})

const rules = reactive({

    title: {
        required: true,
        trigger: ['blur', 'input'],
        message: '请输入标题'
    },
    description: {
        required: true,
        trigger: ['blur', 'input'],
        message: '请输入资源描述'
    },
    tag: {
        type: 'array',
        required: true,
        trigger: ['blur', 'change'],
        message: '请选择标签'
    }

})



// 点击提交
const submit = (e: MouseEvent) => {
    e.preventDefault();
    formRef.value?.validate((errors) => {
        if (!errors) {
            console.log("success")
        } else {
            console.log(errors)

        }
    })
}

</script>

<style scoped>
.form {
    top: 50%;
    left: 50%;
}
</style>