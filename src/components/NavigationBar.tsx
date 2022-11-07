import type { DropdownOption } from "naive-ui";
import { useSystemStateStore } from "@/stores/systemStateStore";
import { useSearchStore } from "@/stores/searchStore";
import { SearchSharp } from "@vicons/ionicons5";

const getMenuOptions = (isLogin: boolean): (DropdownOption | null)[] =>
  [
    isLogin ? { label: "用户设置", key: "userConfig" } : null,
    isLogin
      ? { label: "登出", key: "logout" }
      : { label: "登入", key: "login" },
  ].filter((option) => option !== null);

export function NavigationBar() {
  const systemState = useSystemStateStore();
  const searchState = useSearchStore();

  return (
    <nav class="fixed top-0 w-full flex gap-3 p-5 bg-slate">
      <h1 class="first-letter:text-greenDark font-bold text-3xl ">Akashic</h1>
      <div class="w-96">
        <n-input-group>
          <n-auto-complete
            value={searchState.$state.searchString}
            on-update:value={(val: string) => searchState.search(val)}
            options={searchState.$state.autoCompleteOptions}
          />
          <n-button>
            <n-icon>
              <SearchSharp />
            </n-icon>
          </n-button>
        </n-input-group>
      </div>
      <n-button>高级搜索</n-button>
      <n-dropdown options={getMenuOptions(systemState.$state.isLogin)}>
        <n-avatar class="ml-auto shrink-0" />
      </n-dropdown>
    </nav>
  );
}
