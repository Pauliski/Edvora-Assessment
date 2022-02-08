import React from "react";

type CustomOptionProps = {
  optionData: string[];
};

const CustomOption = ({ optionData }: CustomOptionProps): JSX.Element => {
  return (
    <>
      {optionData.map((item, i) => (
        <option key={i}>{item}</option>
      ))}
    </>
  );
};

export default CustomOption;
