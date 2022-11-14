<template>
  <div
    ref="$thisDiv"
    class="w-full flex flex-col overflow-x-auto contributionWall"
  >
    <svg :width="770" height="110">
      <g transform="translate(28, 18)">
        <Boxes />
      </g>
      <g transform="translate(41, 0)">
        <MonthTags />
      </g>
      <g transform="translate(5, 18)">
        <text text-anchor="start" style="font-size: 12px" dx="5" dy="22">
          Mon
        </text>
        <text text-anchor="start" style="font-size: 12px" dx="5" dy="48">
          Wed
        </text>
        <text text-anchor="start" style="font-size: 12px" dx="5" dy="74">
          Fri
        </text>
      </g>
    </svg>
  </div>
</template>

<script setup lang="tsx">
import type { VNode } from "vue";
import { ref, onMounted } from "vue";
import type { IPersonalMonthContribution } from "@/api/PersonalInfoPage/PersonalInfoData";
import ContributionDayBox from "./ContributionDayBox.vue";

const $thisDiv = ref();
onMounted(() => {
  $thisDiv.value.scrollLeft = $thisDiv.value.scrollWidth;
});

const props = defineProps<{
  timeSlice: { start: number; end: number };
  contributionList: IPersonalMonthContribution[];
}>();

console.log(props.timeSlice);

let minContribution = 0;
let maxContribution = 0;

const contributionMap: Map<
  number,
  {
    contributionSum: number;
    detail: [number, number, number];
  }
> = new Map();

//筛选时间段内的贡献，统计区间，并组成map
for (const i of props.contributionList) {
  if (i.timeSlice < props.timeSlice.start || i.timeSlice > props.timeSlice.end)
    continue;

  let thisContributionSum =
    i.contribution[0] + i.contribution[1] + i.contribution[2];

  contributionMap.set(i.timeSlice, {
    contributionSum: thisContributionSum,
    detail: [i.contribution[0], i.contribution[1], i.contribution[2]],
  });

  minContribution = Math.min(minContribution, thisContributionSum);
  maxContribution = Math.max(maxContribution, thisContributionSum);
}

console.log(contributionMap);

const msPerDay = 24 * 60 * 60 * 1000;

const Boxes = () => {
  let weekDay = new Date(props.timeSlice.start).getDay();
  let cOffsetX = 0;
  let cOffsetY = weekDay * 13;

  const components_1: VNode[] = [];
  let components_2: VNode[] = [];

  const tsStart = ref(props.timeSlice.start);
  const tsEnd = ref(props.timeSlice.end);

  for (let i = tsStart.value; i < tsEnd.value; i += msPerDay) {
    const obj = contributionMap.get(Math.floor(i / msPerDay) * msPerDay);

    if (obj != undefined) {
      components_2.push(
        <ContributionDayBox
          key={i}
          xOffset={cOffsetX}
          yOffset={cOffsetY}
          fill={{
            r: Math.floor(
              57 +
                ((14 - 57) * obj.contributionSum) /
                  (maxContribution - minContribution)
            ),
            g: Math.floor(
              211 +
                ((68 - 211) * obj.contributionSum) /
                  (maxContribution - minContribution)
            ),
            b: Math.floor(
              83 +
                ((41 - 83) * obj.contributionSum) /
                  (maxContribution - minContribution)
            ),
            a: 0.8,
          }}
          date={new Date(i).toLocaleDateString()}
          contribution={obj.detail}
        />
      );
    } else
      components_2.push(
        <ContributionDayBox
          key={i}
          xOffset={cOffsetX}
          yOffset={cOffsetY}
          fill={{ r: 80, g: 80, b: 80, a: 0.5 }}
          date={new Date(i).toLocaleDateString()}
          contribution={[0, 0, 0]}
        />
      );
    cOffsetY = (cOffsetY + 13) % 79;
    if (weekDay === 6 || i + msPerDay >= props.timeSlice.end) {
      cOffsetX += 1;
      cOffsetY = 0;
      const trans = "translate(" + cOffsetX * 12 + ",0)";
      components_1.push(<g transform={trans}>{components_2}</g>);
      components_2 = [];
    }
    weekDay = (weekDay + 1) % 7;
  }

  return components_1;
};

const MonthTags = () => {
  const components: VNode[] = [];

  const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let thisMonth = 0;
  const tsStart = ref(props.timeSlice.start);
  const tsEnd = ref(props.timeSlice.end);
  let cOffsetX = 0;

  let i = tsStart.value;
  for (; i < tsEnd.value; i += msPerDay) {
    if (new Date(i).getDay() === 0) {
      thisMonth = new Date(i).getMonth() - 1;
      console.log(i);
      if (i != tsStart.value) cOffsetX = 13;
      break;
    }
  }

  for (; i < tsEnd.value; i += msPerDay * 7) {
    if (new Date(i).getDay() === 0) {
      if (thisMonth != new Date(i).getMonth()) {
        thisMonth = new Date(i).getMonth();
        components.push(
          <text
            text-anchor="start"
            style="font-size: 12px"
            dx={cOffsetX}
            dy="13"
          >
            {monthName[thisMonth]}
          </text>
        );
      }
    }
    cOffsetX += 13;
  }

  return components;
};
</script>

<style scoped>
.contributionWall {
}
</style>
