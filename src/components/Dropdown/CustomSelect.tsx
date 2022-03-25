import React, {useEffect} from "react";
import "./style";
import { Select, SelectOption, SelectWrapper } from "./style";

type CustomSelectProps = {
  name: string;
  children: JSX.Element;
};

const CustomSelect = ({ name, displayName, handleFilter, children }: CustomSelectProps): JSX.Element => {

 const handleChange = (e)=>{
   const {name, value} = e.target
   const filterParams = {[name]: value}
  handleFilter(filterParams)
 }
  return (
    <SelectWrapper>
      <Select name={name} onChange={(e)=>handleChange(e)}>
        <SelectOption value={0} selected hidden disabled>
          {displayName}
        </SelectOption>
        {children}
      </Select>
    </SelectWrapper>
  );
};

export default CustomSelect;
