<template>
  <div class="w-full flex flex-col tagItem">
    <div class="w-full flex flex-row">
      <TagCheckBox :tag="tag" :tagStatus="tagStatus" />
      <ExpandIcon />
    </div>
    <SubTagList />
  </div>
</template>

<script setup lang="tsx">
import type { ISearchTag } from "@/domain/searchResult.interface";
import type { Ref } from "vue";
import SearchResultPageTagItem from "@/components/SearchResult/SearchResultPageTagItem.vue";

import { ArrowBackIosNewRound } from "@vicons/material";

interface TagStatus {
  display: string;
  label: string;
  selected: boolean;
  partlySelected: boolean;
  parentTag: string;
  subTags: string[];
}

const props = defineProps<{
  tag: ISearchTag;
  tagStatus: Map<string, Ref<TagStatus>>;
}>();

function ExpandIcon() {
  const thisStatus = props.tagStatus.get(props.tag.label);
  if (!thisStatus) throw Error("UnexpectedError-TagStatusNotFound!");
  if (thisStatus.value.subTags.length != 0) {
    //如果有子项，则渲染SVG展开图标
    return (
      <ArrowBackIosNewRound
        class={
          "w-5 h-5 ml-auto transition-all duration-300 ease-in-out transform-gpu svgLabel"
        }
      />
    );
  } else return null;
}

function SubTagList() {
  if (props.tag.subTags.length === 0) return null;
  const elementList = [];
  for (const i of props.tag.subTags) {
    elementList.push(
      <SearchResultPageTagItem tag={i} tagStatus={props.tagStatus} />
    );
  }

  return (
    <div
      class={
        "grid gap-2 transition-all duration-500 ease-in-out transform-gpu subTagList"
      }
      style={"width: 200px"}
    >
      {elementList}
    </div>
  );
}

function TagCheckBox({
  tag,
  tagStatus,
}: {
  tag: ISearchTag;
  tagStatus: Map<string, Ref<TagStatus>>;
}) {
  const thisStatus = tagStatus.get(tag.label);
  if (!thisStatus) throw Error("UnexpectedError-TagStatusNotFound!");

  //Func:向下递归更新SubTags选择状态
  const itemCheckedHandler_RecurseDown = (
    checked: boolean,
    subTags: string[]
  ) => {
    for (const i of subTags) {
      const refSubTags = tagStatus.get(i);
      if (!refSubTags) throw Error("UnexpectedError-TagStatusNotFound!");
      refSubTags.value.selected = checked;
      refSubTags.value.partlySelected = false;
      if (refSubTags.value.subTags.length != 0)
        itemCheckedHandler_RecurseDown(checked, refSubTags.value.subTags);
    }
  };

  //Func:向上递归更新ParentTag选择状态
  const itemCheckedHandler_RecurseUp = (parentTag: string) => {
    if (parentTag === "") return;
    const refParentTag = tagStatus.get(parentTag);
    if (!refParentTag) throw Error("UnexpectedError-TagStatusNotFound!");

    //检查选择情况
    let tmpSelectCount = 0;
    for (const i of refParentTag.value.subTags) {
      const refSubTags = tagStatus.get(i);
      if (!refSubTags) throw Error("UnexpectedError-TagStatusNotFound!");
      if (refSubTags.value.selected) tmpSelectCount += 1;
      if (refSubTags.value.partlySelected) tmpSelectCount += 0.5;
    }

    refParentTag.value.selected =
      tmpSelectCount === refParentTag.value.subTags.length;
    refParentTag.value.partlySelected =
      tmpSelectCount != 0 &&
      tmpSelectCount != refParentTag.value.subTags.length;

    itemCheckedHandler_RecurseUp(refParentTag.value.parentTag);
  };

  const itemCheckedHandler = (checked: boolean) => {
    thisStatus.value.selected = checked;
    thisStatus.value.partlySelected = false;
    //将SubTags递归的全选or取消选择
    itemCheckedHandler_RecurseDown(checked, thisStatus.value.subTags);
    itemCheckedHandler_RecurseUp(thisStatus.value.parentTag);
  };

  return (
    <n-checkbox
      value={thisStatus.value.label}
      v-model:checked={thisStatus.value.selected}
      v-model:indeterminate={thisStatus.value.partlySelected}
      onUpdateChecked={(isChecked: boolean) => {
        itemCheckedHandler(isChecked);
      }}
    >
      {thisStatus.value.display}
    </n-checkbox>
  );
}
</script>
