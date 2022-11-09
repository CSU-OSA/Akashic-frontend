export type TagStatus = {
  display: string;
  label: string;
  selected: boolean;
  partlySelected: boolean;
  parentTag: string;
  subTags: string[];
};
