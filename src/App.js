import React, { useState } from "react";
import "./app.css"
function App() {
  const [details, setDetails] = useState({
    fname: "",
    phone: "",
    message: ""
  })
  const handleChange = (event) => {
    const {name, value} = event.target
    setDetails((prevState) => {
      return (
        {
          ...prevState,
          [name] : value
        }
      )
    })
  }
  const handleButton = (event) => {
    event.preventDefault()
  }
  return (
    <>
      <h1>Survey Form</h1>
      <form action="">
        <label htmlFor="fname">Name:</label>
        <input type="text" name="fname" id = "fname" value={details.fname} onChange = {handleChange} required />
        <label htmlFor="phone-num">Phone number:</label>
        <input type= "tel" name="phone" id="phone-num" value = {details.phone} onChange = {handleChange} required />
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" value={details.message} onChange = {handleChange}></textarea>
        <button type="submit" onClick={handleButton}>Submit</button>
      </form>
    </>
  );
}
export default App;
