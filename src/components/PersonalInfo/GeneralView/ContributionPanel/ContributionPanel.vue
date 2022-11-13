<template>
  <div class="contributionPanel">
    <div
      style="
        width: 100%;
        border-radius: 10px;
        border-width: 2px;
        border-style: dashed;
        overflow-x: auto;
      "
    >
      <NavButtonBar />
      <ContributionWall
        :key="selectedTimeSlice"
        :timeSlice="{ start: timeSlice.start, end: timeSlice.end }"
        :contribution-list="contributionList"
      />
    </div>
  </div>
</template>

<script setup lang="tsx">
import type { VNode, Ref } from "vue";
import { ref, reactive } from "vue";
import type { IPersonalMonthContribution } from "@/api/PersonalInfoPage/PersonalInfoData";
import ContributionWall from "./ContributionWall.vue";

const props = defineProps<{
  contributionList: IPersonalMonthContribution[];
}>();

const timeSlice = reactive({
  start: 0,
  end: 0,
});
//默认时间段为“当天 至 365天前”
timeSlice.end = new Date().setUTCHours(0, 0, 0, 0);
timeSlice.start = timeSlice.end - 365 * 24 * 60 * 60 * 1000;

const selectedTimeSlice = ref(-1);

console.log(timeSlice.end);

const NavButtonBar = () => {
  const yearList = [];
  const buttonList = [];

  for (let i of props.contributionList) {
    let timeStampYear = new Date(i.timeSlice).getFullYear();
    if (yearList.indexOf(timeStampYear) === -1) {
      yearList.push(timeStampYear);
      buttonList.push(
        <n-button
          round
          onClick={function (this: any) {
            timeSlice.start = new Date(0).setFullYear(timeStampYear, 0, 1);
            timeSlice.end = new Date(0).setFullYear(timeStampYear + 1, 0, 1);
            selectedTimeSlice.value = timeStampYear;
          }}
        >
          {timeStampYear}
        </n-button>
      );
    }
  }

  buttonList.push(
    <n-button
      round
      onClick={function (this: any) {
        timeSlice.end = new Date().setUTCHours(0, 0, 0, 0);
        timeSlice.start = timeSlice.end - 365 * 24 * 60 * 60 * 1000;
        selectedTimeSlice.value = -1;
      }}
    >
      一年内
    </n-button>
  );

  return (
    <div class="flex flex-col m-2">
      <n-button-group size="small">{buttonList}</n-button-group>
    </div>
  );
};
</script>

<style scoped>
.contributionPanel {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.5rem;
}
</style>
