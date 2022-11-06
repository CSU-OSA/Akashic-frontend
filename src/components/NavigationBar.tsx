import type { DropdownOption, AutoCompleteOption } from "naive-ui";
import { useSystemStateStore } from "@/stores/systemStateStore";

const getAutoCompleteOptions = async (): Promise<AutoCompleteOption[]>  => ([{
    label: "eeee",
    value: "eeee"
}])

const getMenuOptions = (isLogin: boolean):(DropdownOption | null)[] => ([
   isLogin ? { label: "用户设置", key: "userConfig" } : null,
   isLogin ? { label: "登出", key: "logout"} : { label: "登入", key: "login"}
].filter( option => option !== null ));

export function NavigationBar() {

    const systemState = useSystemStateStore();

    return <nav class="fixed top-0 w-full flex gap-3 p-5 bg-slate-400">
        <h1 class="first-letter:text-red-500 font-bold text-3xl ">Akashic</h1>
        <div class="w-96">
            <n-auto-complete options={getAutoCompleteOptions()}/>
        </div>
        <n-button class="">高级搜索</n-button>
        <n-dropdown options={getMenuOptions(systemState.$state.isLogin)}>
            <n-avatar class="ml-auto shrink-0"/>
        </n-dropdown>
    </nav>
}