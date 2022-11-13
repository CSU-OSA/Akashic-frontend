<template>
  <rect
    rx="2"
    ry="2"
    :x="$props.xOffset"
    :y="$props.yOffset"
    class="contribution-dayBox"
    :onclick="() => clickHandler()"
    :style="fillColor"
  ></rect>
</template>

<script setup lang="tsx">
const props = defineProps<{
  xOffset: number;
  yOffset: number;
  fill: { r: number; g: number; b: number; a: number };
  date: string;
  contribution: [number, number, number];
}>();

const clickHandler = () => {
  alert(props.date + "\n" + props.contribution);
};

const fillColor =
  "fill: rgba(" +
  props.fill.r +
  "," +
  props.fill.g +
  "," +
  props.fill.b +
  "," +
  props.fill.a +
  ");";
</script>

<style scoped>
.contribution-dayBox {
  width: 10px;
  height: 10px;
  outline: #fdfdfda0 solid 1px;
  outline-offset: -1px;
  transition: all 300ms ease-in-out;
}

.contribution-dayBox:hover {
  outline: rgba(101, 143, 76, 0.9) solid 1px;
  outline-offset: -1px;
  transition: all 300ms ease-in-out;
}
</style>
