import React from "react";

export interface IButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children?: React.Node;
  additionalClasses?: string;
  primary?: boolean;
}
