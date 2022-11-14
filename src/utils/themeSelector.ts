import { useSystemStateStore } from "@/stores/systemStateStore";

export function theme(className: string) {
  const systemState = useSystemStateStore();
  const modeType = systemState.isDarkMode ? "dark" : "light";

  //主题名称
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
