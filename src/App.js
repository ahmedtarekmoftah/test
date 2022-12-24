import "./App.css";
import Sectors from "./components/Sectors";
import React from "react";

function App() {
  const [form, SetForm] = React.useState({
    name: "",
    sector: "",
    terms: "",
  });

  function handlechange(event) {
    const { name, value } = event.target;
    SetForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function formSubmit(event) {
    event.preventDefault();
  }

  return (
    <div id="container">
      <div className="App">
        <h1>
          Please enter your name and pick the Sectors you are currently involved
          in.
        </h1>
        <form onSubmit={formSubmit}>
          <div id="nameDiv">
            <label>Name</label>
            <input
              type="text"
              onChange={handlechange}
              className="inputStyle"
              required
              value={form.name}
              name="name"
            />
          </div>
          <Sectors sector={form.sector} handle={handlechange} />
          <div id="agreeDiv">
            <input type="checkbox" />
            <label id="agreeLabel">Agree to terms</label>
          </div>
          <button type="submit" value="Save" id="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
