import * as React from "react";
import Input from "./Input";
import {radioContent} from "../models/constants";

function Form() {
  return (
    <form className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            {radioContent.map((radio) => (
              <Input
                key={radio.id}
                type="radio"
                name="radio"
                id={radio.id}
                content={radio.content}
              />
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <Input name="keyword" id="keyword" type="text" />
        </div>
      </div>
    </form>
  );
}

Form.proptTypes = {}

export default Form;