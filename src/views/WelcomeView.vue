<template>
  <div class="w-full h-full welcome-view-background">
    <article
      class="typewriter w-full h-full flex flex-col justify-center items-center p-2 welcome-view-layout"
    >
      <h1 class="welcome-view-title text-center font-bold text-7xl md:text-9xl">
        Akashic
      </h1>
      <div class="flex gap-5 m-10">
        <button
          @click="signup"
          :class="`${t(
            'bg-primary',
            'text-onPrimary'
          )} font-bold text-2xl pt-3 pb-3 pr-10 pl-10 rounded-full`"
        >
          注册
        </button>
        <button
          @click="signin"
          :class="`${t(
            'bg-surfaceVariant',
            'text-onSurface'
          )} font-bold text-2xl pt-3 pb-3 pr-10 pl-10 rounded-full`"
        >
          登入
        </button>
      </div>
    </article>
  </div>
</template>
<script lang="ts" setup>
import { useCasdoor } from "casdoor-vue-sdk";
import { useTheme as t } from "@/utils/themeSelector";

const { getSigninUrl, getSignupUrl } = useCasdoor();

const signin = () => (window.location.href = getSigninUrl());
const signup = () => (window.location.href = getSignupUrl());
</script>
<style scoped>
.typewriter h1 {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid transparent; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 50vw;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}
.welcome-view-background {
  background: url("earth.gif") center no-repeat;
  background-color: black;
  color: transparent;
  font-family: "anton";
}

.welcome-view-layout {
  backdrop-filter: brightness(10%);
}

.welcome-view-title {
  padding: 1rem;
  background: url("earth.gif") center no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-family: "anton";
  -webkit-text-stroke: 2px white;
}
</style>
