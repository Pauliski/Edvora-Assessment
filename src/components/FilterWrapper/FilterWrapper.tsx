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
  handleFilter
}: FilterWrapperProps): JSX.Element => {
  return (
    <>
      <FilterWrapperCompanyName>
        <CompanyName />
      </FilterWrapperCompanyName>
      <FilterWrapperStyle>
        <FilterText />
        <CustomSelect name="product_name" displayName="Products" handleFilter={handleFilter}>
          <CustomOption optionData={products} />
        </CustomSelect>
        <CustomSelect name="state" displayName="State" handleFilter={handleFilter}>
          <CustomOption optionData={states} />
        </CustomSelect>
        <CustomSelect name="city" displayName="City" handleFilter={handleFilter}>
          <CustomOption optionData={city} />
        </CustomSelect>
      </FilterWrapperStyle>
    </>
  );
};

export default FilterWrapper;
