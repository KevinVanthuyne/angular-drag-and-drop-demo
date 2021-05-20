export interface ListItem {
  title: string;
  children: ListItem[];
  isExpanded?: boolean;
}
