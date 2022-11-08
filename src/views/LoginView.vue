<template>
    <n-form ref="formRef" :model="model" :rules="rules" label-placement="left" label-width="auto"
        require-mark-placement="right-hanging" :style="{
            maxWidth: '800px',
        }">
        <n-form-item label="username" path="username">
            <n-input v-model:value="model.username" placeholder="username">
                <template #prefix>
                    <n-icon size="18" color="808695">
                        <PersonOutline />
                    </n-icon>
                </template>
            </n-input>
        </n-form-item>

        <n-form-item label="password" path="password">
            <n-input v-model:value="model.password" placeholder="请输入密码" type="password" show-password-on="click">
                <template #prefix>
                    <n-icon size="18" color="808695">
                        <LockClosedOutline />
                    </n-icon>
                </template>
            </n-input>
        </n-form-item>
    </n-form>
</template>

<script lang="ts" setup>
import {
    type FormInst,
    //   type FormItemRule,
    //   useMessage,
    NForm,
    NFormItem,
    NIcon,
    NInput,
} from "naive-ui";
import { LockClosedOutline, PersonOutline } from "@vicons/ionicons5";
import { ref, reactive } from "vue";

const formRef = ref<FormInst | null>(null);
// const message = useMessage();

const model = reactive({
    username: null,
    password: null,
});

const rules = reactive({
    username: {
        required: true,
        trigger: ["blur", "input"],
        message: "请输入用户名",
    },
    password: {
        required: true,
        trigger: ["blur", "input"],
        message: "请输入密码",
    },
});
</script>
