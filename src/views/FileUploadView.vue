<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <n-card class="shrink-0 max-w-xl" embedded>
      <n-form
        ref="formRef"
        :model="model"
        :rules="rules"
        label-placement="top"
        label-width="auto"
        require-mark-placement="right-hanging"
        :size="size"
      >
        <n-divider> 上传资源 </n-divider>

        <n-form-item label="Title" path="title">
          <n-input v-model:value="model.title" placeholder="Input" />
        </n-form-item>

        <n-form-item label="Description" path="description">
          <n-input
            v-model:value="model.description"
            placeholder="Textarea"
            type="textarea"
            :autosize="{
              minRows: 2,
              maxRows: 5,
            }"
          />
        </n-form-item>

        <n-form-item label="Tag" path="tag">
          <n-select
            v-model:value="model.tag"
            placeholder="Select"
            :options="model.generalOptions"
            multiple
          />
        </n-form-item>

        <n-form-item>
          <n-upload
            multiple
            directory-dnd
            :max="10"
            @update:file-list="onUpdateFileListHandler"
          >
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

        <div style="display: flex; justify-content: space-between">
          <n-button round @click="submit" style="margin-left: 0px">
            submit
          </n-button>
          <n-button round @click="cancel"> cancel </n-button>
        </div>
      </n-form>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
import { ArchiveOutline as ArchiveIcon } from "@vicons/ionicons5";
import { useMessage, type FormInst, type UploadFileInfo } from "naive-ui";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useUpload } from "@/api/file";

const upload = useUpload();

const message = useMessage();

const router = useRouter();

const formRef = ref<FormInst | null>(null);

const size = ref("medium");

let model = reactive({
  title: "",
  description: "",
  tag: "",
  generalOptions: ["软件工程", "数学建模", "笔记", "竞赛"].map((item) => ({
    label: item,
    value: item,
  })),
});

const rules = reactive({
  title: {
    required: true,
    trigger: ["blur", "input"],
    message: "请输入标题",
  },
  description: {
    required: true,
    trigger: ["blur", "input"],
    message: "请输入资源描述",
  },
  tag: {
    type: "array",
    required: true,
    trigger: ["blur", "change"],
    message: "请选择标签",
  },
});

const onUpdateFileListHandler = async (fileList: UploadFileInfo[]) => {
  upload(fileList[0].file as File);
};

// 点击提交
const submit = async (e: MouseEvent) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      console.log("success");
      message.success("上传成功");
    } else {
      console.log("errors");
      message.info("请填写必要字段");
    }
  });
};

// 点击取消
const cancel = () => {
  router.back();
};
</script>
