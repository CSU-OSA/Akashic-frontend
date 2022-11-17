import { useSystemStateStore } from "@/stores/systemStateStore";
import type theme_base from "$/themes/_.json";

type base = keyof typeof theme_base;
type prefix =
  | "accent"
  | "bg"
  | "border-x"
  | "border-y"
  | "border-t"
  | "border-b"
  | "border-l"
  | "border-r"
  | "caret"
  | "decoration"
  | "divide"
  | "fill"
  | "outline"
  | "placeholder"
  | "ring"
  | "shadow"
  | "text"
  | "to"
  | "via";
function t(className: `${prefix}-${base}` | base) {
  const systemState = useSystemStateStore();
  const modeType = systemState.isDarkMode ? "dark" : "light";

  //主题名称（后续添加新主题时在此添加新主题名称）
  const themes = ["default"];

  const themeName =
    themes[
      systemState.isDarkMode ? systemState.darkTheme : systemState.lightTheme
    ];

  if (className.split("-").length != 2)
    throw Error("UnexpectedError-UnexpectedClassName");

  return (
    className.split("-")[0] +
    "-" +
    themeName +
    "-" +
    modeType +
    "-" +
    className.split("-")[1]
  );
}

export function useTheme(...clazzs: Parameters<typeof t>[0][]) {
  return clazzs
    .map((clazz) => t(clazz))
    .reduce((prev, cur) => `${cur} ${prev}`, "");
}
