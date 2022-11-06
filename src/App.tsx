import { RouterView } from "vue-router";
import { NavigationBar } from "./components/NavigationBar";

export default function App() {
    return <div class="w-full h-full flex justify-center items-center">
        <NavigationBar/>
        <RouterView/>
    </div>
}