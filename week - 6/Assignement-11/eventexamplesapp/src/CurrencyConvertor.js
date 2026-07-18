import React, { useState } from "react";

function CurrencyConvertor() {

  const [rupees, setRupees] = useState("");
  const [euros, setEuros] = useState("");

  const handleSubmit = () => {

    const rate = 90; // 1 Euro = 90 INR

    if (rupees === "") {
      alert("Please enter amount in Rupees");
      return;
    }

    const result = (parseFloat(rupees) / rate).toFixed(2);

    setEuros(result);
  };

  return (
    <div>

      <h2>Currency Convertor</h2>

      <input
        type="number"
        placeholder="Enter Rupees"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        style={{ marginLeft: "10px" }}
      >
        Convert
      </button>

      <h3>Euro: € {euros}</h3>

    </div>
  );
}

export default CurrencyConvertor;