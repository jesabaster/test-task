export interface IColourFilterItemProps
  extends React.ComponentPropsWithoutRef<"div"> {
  img: string;
  label: string;
  isChecked?: boolean;
}
