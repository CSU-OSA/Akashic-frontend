<template>
  <div class="flex flex-col justify-center items-start mt-5">
    <div class="w-full">
      <span class="text-xl font-medium">自我介绍</span>
      <SelfIntroPanel :personal-intro="userGeneralViewData.personalIntro" />
    </div>
    <div class="w-full">
      <span class="text-xl font-medium">置顶</span>
      <PinnedPanel :pinned-items="userGeneralViewData.pinnedItems" />
    </div>
    <div class="w-full">
      <span class="text-xl font-medium">贡献</span>
      <ContributionPanel
        :contribution-list="userGeneralViewData.contributionList"
      />
    </div>
  </div>
</template>

<script setup lang="tsx">
import { useGeneralViewData } from "@/api/PersonalInfoPage/PersonalInfoData";
import PinnedPanel from "@/components/PersonalInfo/GeneralView/PinnedPanel.vue";
import SelfIntroPanel from "@/components/PersonalInfo/GeneralView/SelfIntroPanel.vue";
import ContributionPanel from "@/components/PersonalInfo/GeneralView/ContributionPanel/ContributionPanel.vue";

const userGeneralViewData = useGeneralViewData();
</script>

<style scoped>
.selfIntroPanel {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin: 0.5rem;
  border-radius: 10px;
  border-width: 2px;
  border-style: dashed;
}
</style>
