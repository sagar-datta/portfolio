export interface IDockItem {
  icon: string;
  label: string;
  desktopLabel?: string;
  onClick?: () => void;
}
