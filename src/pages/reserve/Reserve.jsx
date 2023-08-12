import React, { useState } from "react";
import "../../pages/reserve/reserve.css";
import backmg from "../../assets/Logo.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import en from "date-fns/locale/en-US"; // Import the English locale file

registerLocale("en", en);

const Reserve = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: null,
    phone: "",
    type: "",
    attend: "",
  });

  const [ageError, setAgeError] = useState("");
  const [attendeesError, setAttendeesError] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function calculateAge(birthDate) {
    const today = new Date();
    const dob = new Date(birthDate);
    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      return age - 1;
    }

    return age;
  }

  const handleDateChange = (date) => {
    setFormData({ ...formData, dob: date });

    // Check age and update error message
    const age = calculateAge(date);
    if (age < 18) {
      setAgeError("You must be 18 or older to make a reservation.");
    } else {
      setAgeError("");
    }
  };

  const handleAttendeesChange = (event) => {
    const value = event.target.value;
    setFormData({ ...formData, attend: value });

    if (parseInt(value, 10) > 75) {
      setAttendeesError("Number of attendees cannot exceed 75.");
    } else {
      setAttendeesError("");
    }
  };

  const CustomDatePickerInput = ({ value, onClick }) => (
    <input
      type="text"
      value={value}
      onClick={onClick}
      placeholder="Day Month Year"
      className="custom-date-input"
    />
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ageError || attendeesError) {
      setSubmitError("Please fix the validation errors before submitting.");
      return; // Don't submit if there are errors
    }

    setFormData({
      name: "",
      email: "",
      dob: null,
      phone: "",
      type: "",
      attend: "",
    });

    setSubmitError(""); // Clear submit error when submitting successfully
    alert("Reservation submitted successfully!");
  };

  return (
    <div className="reserve-cont">
      <div className="outta-container">
        <div className="inner-container">
          <div className="first-inner-cont">
            <div className="form-table">
              <div className="inputs">
                <div className="inputs-title">Full Name</div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  name="name"
                />
              </div>
              <div className="inputs">
                <div className="inputs-title">Date Of Birth</div>
                <DatePicker
                  selected={formData.dob}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  locale="en"
                  className="custom-date-input"
                  customInput={<CustomDatePickerInput />}
                  yearDropdownItemNumber={100}
                  yearDropdownMin={1900}
                  yearDropdownMax={new Date().getFullYear()}
                />
                {ageError && <div className="error-message">{ageError}</div>}
              </div>
              <div className="inputs">
                <div className="inputs-title" htmlFor="email">
                  Email Address
                </div>
                <input
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g @example.com"
                  name="email"
                />
              </div>
              <div className="inputs">
                <div className="inputs-title" htmlFor="phone">
                  Phone Number
                </div>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="phone number"
                  name="phone"
                />
              </div>
              <div className="inputs">
                <div className="inputs-title" htmlFor="type">
                  Type of Event
                </div>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  style={{
                    width: "250px",
                    height: "50px",
                    borderRadius: "7px",
                    backgroundColor: "rgb(225, 208, 182)",
                  }}
                >
                  <option value="">Select type of event...</option>
                  <option>Birthday</option>
                  <option>Buffet</option>
                  <option>Friends Hangout</option>
                  <option>Office Hangout</option>
                  <option>Couple Special</option>
                  <option>Proposal</option>
                  <option>Bridal Shower</option>
                </select>
              </div>
              <div className="inputs">
                <div className="inputs-title" htmlFor="attend">
                  Attendees
                </div>
                <input
                  type="number"
                  placeholder="Number of people Attending"
                  value={formData.attend}
                  onChange={handleAttendeesChange}
                  name="attend"
                />
                {attendeesError && (
                  <div className="error-message">{attendeesError}</div>
                )}
              </div>
              <div className="submit-contai">
                {submitError && (
                  <div className="error-message">{submitError}</div>
                )}
                <a className="submits-text" href="" onClick={handleSubmit}>
                  SUBMIT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-outta-cont">
        <div className="tomove"></div>
        <img src={backmg} alt="" />
      </div>
    </div>
  );
};

export default Reserve;
