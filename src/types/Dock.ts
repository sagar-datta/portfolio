export interface IDockItem {
  icon: string | React.ReactNode;
  label: string;
  desktopLabel?: string;
  onClick?: () => void;
}
