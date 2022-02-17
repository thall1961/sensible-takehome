import React from "react";
import Form from "./components/Form";

/**
 * This app allows the user to pick a location (which uses latitude and longitude
 * behind the scenes) and enter a keyword to find nearby places Google can find.
 * Most of the logic and interaction happens in the Form component
 *
 */
function App() {
  return (
    <div className="App">
      <header className="py-2 mb-4 bg-dark text-white text-center text-uppercase font-weight-bold h4">Sensible
        Take-Home
      </header>
      {/*The form is where all the magic happens*/}
      <Form/>
    </div>
  );
}

export default App;
