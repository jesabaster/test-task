import { ICollection } from "../../models/ICollection";

export interface ISubMenuProps {
  label: string;
  items: ICollection[];
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
}
