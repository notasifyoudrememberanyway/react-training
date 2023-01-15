import { useState } from "react";

import { Banner } from "./components/Banner";
import { CalculatorForm } from "./components/CalculatorForm";
import { Results } from "./components/Results";
import { getTaxPercentage } from "./utils/getTaxPercentage";

export const App = () => {
  const [results, setResults] = useState();
  const [error, setError] = useState(false);

  const calculate = ({ taxYear, annualSalary }) => {
    const taxableIncome = annualSalary - 12500;
    const taxPercentage = getTaxPercentage({ taxYear, annualSalary });
    const taxAmount = (taxableIncome * taxPercentage) / 100;
    const takeHomeSalary = annualSalary - taxAmount;

    setResults({
      annualSalary,
      taxableIncome,
      taxPercentage,
      taxAmount,
      takeHomeSalary,
    });
  };

  return (
    <div className="container">
      <Banner />
      <CalculatorForm calculate={calculate} setError={setError} />
      {error && (
        <div className="alert alert-danger mt-4" role="alert">
          Please complete the form!!
        </div>
      )}
      {results && !error && <Results results={results} />}
    </div>
  );
};
