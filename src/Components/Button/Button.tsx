import React, { FC } from "react";

import { IButtonProps, cnButton } from "./index";

const Button: FC<IButtonProps> = ({ children, onClick, className }) => (
  <button onClick={onClick} className={cnButton({}, [className])}>
    {children}
  </button>
);

export default Button;
