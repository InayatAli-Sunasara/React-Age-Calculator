import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { validateDate } from "@mui/x-date-pickers/internals";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import React, { useState } from "react";

const AgeCalculator = () => {
  const [noOfDays, setNoOfDays] = useState(null);
  const [noOfMonths, setNoOfMonths] = useState(null);
  const [noOfWeeks, setNoOfWeeks] = useState(null);
  const [nextBirthdayMonths, setNextBirthdayMonths] = useState(null);
  const [nextBirthdayDays, setNextBirthdayDays] = useState(null);
  const [nextBirthdayDay, setNextBirthdayDay] = useState(null);
  const [resultMonth, setResultMonth] = useState(null);
  const [resultDay, setResultDay] = useState(null);
  const [resultYear, setResultYear] = useState(null);
  const [age, setAge] = useState(null);
  const [DOB, setDOB] = useState("");
  const [current, setCurrent] = useState();
  const maxDate = new Date("2023-12-31");
  const mInDate = new Date("2023-12-31");
  const calculationHandler = () => {
    const currentDate = new Date(current);
    const today = new Date();
    const birthDate = new Date(DOB);

    // Year calculation
    const currentYear = currentDate.getFullYear();
    const birthYear = birthDate.getFullYear();
    const year = currentYear - birthYear;

    // Month calculation
    const currentMonth = currentDate.getMonth();
    const birthMonth = birthDate.getMonth();
    const month = currentMonth - birthMonth;

    // Days calculation
    const currentDay = currentDate.getDate();
    const birthDay = birthDate.getDate();
    const day = currentDay - birthDay;

    // Birthday Calculation

    const nextBirthday = new Date(currentYear + 1, birthMonth, birthDay);
    console.log(`Birth Day Calculation ${nextBirthday}`);

    // if (today > nextBirthday) {
    //   nextBirthday.setFullYear(currentYear + 1);

    // }

    const timeDifference = nextBirthday - today;
    const monthsUntilNextBirthday = Math.floor(
      timeDifference / (1000 * 60 * 60 * 24 * 30.44)
    );
    setNextBirthdayMonths(monthsUntilNextBirthday);
    const daysUntilNextBirthday = Math.ceil(
      (timeDifference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
    );
    setNextBirthdayDays(daysUntilNextBirthday);
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const nextBirthdayDay = daysOfWeek[nextBirthday.getDay()];
    setNextBirthdayDay(nextBirthdayDay);
    console.log(`Months For Next Birthday ${monthsUntilNextBirthday}`);
    console.log(`Days For Next Birthday ${daysUntilNextBirthday}`);
    const NoOfDays = year * 365 + day + year / 4;
    setNoOfDays(Math.floor(year * 365 + day + year / 4));
    setNoOfWeeks(Math.floor(NoOfDays / 7));
    setNoOfMonths(Math.floor(year * 12 + month));
    console.log(NoOfDays / 7);
    console.log(year * 365 + day + year / 4);
    console.log(year * 12 + month);
    console.log(year);

    if (day < 0) {
      if (month < 0) {
        setAge(`Days ${day + 31}  Month ${month + 12} Year ${year - 1}`);
        setResultDay(day + 31);
        setResultMonth(month + 12);
        setResultYear(year - 1);
      }
      if (month <= 0) {
        setAge(`Days ${day + 31}  Month ${month} Year ${year - 1}`);
        setResultDay(day + 31);
        setResultMonth(month);
        setResultYear(year - 1);
      } else {
        setAge(`Days ${day + 31}  Month ${month - 1} Year ${year}`);
        setResultDay(day + 31);
        setResultMonth(month - 1);
        setResultYear(year);
      }
    } else {
      if (month < 0) {
        setAge(`Days ${day}  Month ${month + 12} Year ${year - 1}`);
        setResultDay(day);
        setResultMonth(month + 12);
        setResultYear(year - 1);
      } else {
        setAge(`Days ${day} Month ${month} Year ${year}`);
        setResultDay(day);
        setResultMonth(month);
        setResultYear(year);
      }
    }

    // setAge(
    //   day < 0
    //     ? `Days ${day + 31}` day < 0 ? `  Month ${month - 1} Year ${year}`
    //     : `Days ${day} Month ${month} Year ${year}`
    // );
  };

  return (
    <>
      <div className="outerDiv">
        <div className="mainDiv">
          <div className="birthDateSelector">
            <label className="lblname">Date Of Birth</label>
            {/* <input type="date" name="" min={"6-10-2023"} id="" /> */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  disableFuture={true}
                  // disablePast={true}
                  format="DD/MM/YYYY"
                  // maxDate={maxDate}
                  // minDate={mInDate}
                  label="Date Of Birth"
                  onChange={setDOB}
                  slotProps={{ textField: { size: "small" } }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="birthDateSelector">
            <label className="lblname">Current Date</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  format="DD/MM/YYYY"
                  label="Current Date"
                  onChange={setCurrent}
                  slotProps={{ textField: { size: "small" } }}
                />
              </DemoContainer>
            </LocalizationProvider>
            {/* <input
              type="date"
              onChange={(e) => {
                setCurrent(e.target.value);
              }}
            /> */}
          </div>
          <div className="mainDiv2">
            <button className="calculate-button" onClick={calculationHandler}>
              Calculate
            </button>
            <div className="resultdiv">
              <div className="result1">
                <h1>Age</h1>
                <div className="years">
                  <p>
                    {DOB != null && current != null && age != null
                      ? ` ${resultYear}`
                      : ` ${0}`}
                  </p>
                  <h4>Years</h4>
                </div>
                <div className="monthday">
                  <h3>
                    {DOB != null && current != null && age != null
                      ? `Months ${resultMonth}`
                      : `Months ${0}`}
                  </h3>
                  <h3>
                    {DOB != null && current != null && age != null
                      ? `Days ${resultDay}`
                      : `Days ${0}`}
                  </h3>
                </div>
              </div>
              <div className="betweenline"></div>
              <div className="result1">
                <h1>Next Birthday</h1>
                <div className="years">
                  <p className="day">
                    {DOB != null && current != null && age != null
                      ? ` ${nextBirthdayDay}`
                      : ` ${"Sunday"}`}
                  </p>
                  <h4></h4>
                </div>
                <div className="monthday">
                  <h3>
                    {DOB != null && current != null && age != null
                      ? `Months ${nextBirthdayMonths}`
                      : `Months ${0}`}
                  </h3>
                  <h3>
                    {DOB != null && current != null && age != null
                      ? `Days ${nextBirthdayDays}`
                      : `Days ${0}`}
                  </h3>
                </div>
              </div>
            </div>
            <div className="resultdiv2">
              <div>
                <h3>Days</h3>
                <h3>
                  {DOB != null && current != null && age != null
                    ? `${noOfDays}`
                    : `${0}`}
                </h3>
              </div>
              <div>
                <h3>Months</h3>
                <h3>
                  {DOB != null && current != null && age != null
                    ? `${noOfMonths}`
                    : `${0}`}
                </h3>
              </div>
              <div>
                <h3>Weeks</h3>
                <h3>
                  {DOB != null && current != null && age != null
                    ? `${noOfWeeks}`
                    : `${0}`}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgeCalculator;
