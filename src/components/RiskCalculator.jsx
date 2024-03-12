import React, { useState } from "react";

function RiskCalculator() {
  const [riskPercentage, setRiskPercentage] = useState(3);
  const [principal, setPrincipal] = useState("");
  const [entryPrice, setEntryPrice] = useState("");
  const [stopLossPrice, setStopLossPrice] = useState("");
  const [orderValue, setOrderValue] = useState(null);

  const calculateOrderValue = () => {
    const stopLossPercentage =
      Math.abs(entryPrice - stopLossPrice) / entryPrice;
    const calculatedOrderValue =
      principal * (stopLossPercentage / (riskPercentage / 100));
    setOrderValue(calculatedOrderValue);
  };

  const isButtonDisabled =
    !riskPercentage || !principal || !entryPrice || !stopLossPrice;

  return (
    <div className="risk-calculator-container">
      <h2>Risk Calculator</h2>
      <div>
        <label>Stop Loss Percentage (%):</label>
        <input
          type="number"
          value={riskPercentage}
          onChange={(e) => setRiskPercentage(e.target.value)}
        />
      </div>
      <div>
        <label>Principal:</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div>
        <label>Entry Price:</label>
        <input
          type="number"
          value={entryPrice}
          onChange={(e) => setEntryPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Stop Loss Price:</label>
        <input
          type="number"
          value={stopLossPrice}
          onChange={(e) => setStopLossPrice(e.target.value)}
        />
      </div>
      <div>
        <button onClick={calculateOrderValue} disabled={isButtonDisabled}>
          Calculate Order Value
        </button>
      </div>
      {orderValue !== null && (
        <div>
          <h3>Order Value: {orderValue.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default RiskCalculator;
