import { RouterView } from "vue-router";
import { NavigationBar } from "./components/NavigationBar";

export default function App() {
  return (
    <n-config-provider class="w-full min-h-full flex justify-center items-center">
      <NavigationBar />
      <RouterView />
    </n-config-provider>
  );
}
