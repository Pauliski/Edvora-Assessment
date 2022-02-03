import React from "react";
import './style'
import { Select, SelectOption, SelectWrapper } from "./style";

type CustomSelectProps = {
  name: string;
  children: JSX.Element
};

const CustomSelect = ({ name, children }: CustomSelectProps): JSX.Element => {
  return (
    <SelectWrapper>
      <Select name={name}>
      <SelectOption selected hidden disabled>
        {name}
      </SelectOption>
      {children}
    </Select>
    </SelectWrapper>
    
  );
};

export default CustomSelect;
