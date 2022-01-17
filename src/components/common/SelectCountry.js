import React, { useState } from "react";
import { COUNTRIES } from "../../services/countries";

function SelectCountry({ setCountry }) {
  const options = COUNTRIES;
  const [selectedOption, setSelectedOption] = useState(
    options && options[0].value
  );

  const onChangeCountry = (value) => {
    setSelectedOption(value);
    setCountry(value);
  };

  return (
    <select
      className="form-select form-select-sm"
      value={selectedOption}
      onChange={(e) => onChangeCountry(e.target.value)}
    >
      {options &&
        options.map((option) => (
          <option key={option?.value} value={option?.value}>
            {option?.label}
          </option>
        ))}
    </select>
  );
}

export default SelectCountry;
