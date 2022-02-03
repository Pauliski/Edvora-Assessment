import CustomOption from "components/CustomOption/CustomOption";
import CustomSelect from "components/Dropdown/CustomSelect";
import FilterText from "components/FilterText/FilterText";
import React from "react";
import { FilterWrapperStyle } from "./style";

const arr = ["Adebola", "Peter"];
const FilterWrapper = (): JSX.Element => {
  return (
    <FilterWrapperStyle>
        <FilterText />
      <CustomSelect name="Product">
        <CustomOption optionData={arr} />
      </CustomSelect>
      <CustomSelect name="State">
        <CustomOption optionData={arr} />
      </CustomSelect>
      <CustomSelect name="City">
        <CustomOption optionData={arr} />
      </CustomSelect>
    </FilterWrapperStyle>
  );
};

export default FilterWrapper;
