import React, { useState } from "react";

function NextBirthdayCalculator() {
  // Initialize state variables
  const [birthdate, setBirthdate] = useState("");
  const [daysUntilNextBirthday, setDaysUntilNextBirthday] = useState(null);

  // Function to calculate the days until the next birthday
  const calculateDaysUntilNextBirthday = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    console.log(currentYear);
    const nextBirthday = new Date(`${currentYear}-${birthdate}`);
    console.log(`year ${nextBirthday.getDay()}`);
    if (today > nextBirthday) {
      // If this year's birthday has already passed, calculate for the next year
      nextBirthday.setFullYear(currentYear + 1);
    }

    const timeDifference = nextBirthday - today;
    const daysUntilNextBirthday = Math.ceil(
      timeDifference / (1000 * 60 * 60 * 24)
    );

    setDaysUntilNextBirthday(daysUntilNextBirthday);
  };

  return (
    <div>
      <h1>Next Birthday Calculator</h1>
      <label htmlFor="birthdate">Enter your birthdate (MM-DD):</label>
      <input
        type="text"
        id="birthdate"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
        placeholder="MM-DD"
      />
      <button onClick={calculateDaysUntilNextBirthday}>Calculate</button>
      {daysUntilNextBirthday !== null && (
        <p>There are {daysUntilNextBirthday} days until your next birthday!</p>
      )}
    </div>
  );
}

export default NextBirthdayCalculator;
