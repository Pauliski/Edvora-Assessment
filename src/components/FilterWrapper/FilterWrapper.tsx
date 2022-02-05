import CompanyName from "components/CompanyName/CompanyName";
import CustomOption from "components/CustomOption/CustomOption";
import CustomSelect from "components/Dropdown/CustomSelect";
import FilterText from "components/FilterText/FilterText";
import React from "react";
import { FilterWrapperCompanyName, FilterWrapperStyle } from "./style";

type FilterWrapperProps = {
  states: string[];
  products: string[];
  city: string[];
};
const FilterWrapper = ({
  states,
  products,
  city,
}: FilterWrapperProps): JSX.Element => {
  return (
    <>
      <FilterWrapperCompanyName>
        <CompanyName />
      </FilterWrapperCompanyName>
      <FilterWrapperStyle>
        <FilterText />
        <CustomSelect name="Products">
          <CustomOption optionData={products} />
        </CustomSelect>
        <CustomSelect name="State">
          <CustomOption optionData={states} />
        </CustomSelect>
        <CustomSelect name="City">
          <CustomOption optionData={city} />
        </CustomSelect>
      </FilterWrapperStyle>
    </>
  );
};

export default FilterWrapper;
