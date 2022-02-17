import * as React from "react";
import {fetchConfig, radioContent} from "../models/constants";
import {Place} from "../models/place.model";

function Form() {
  const [state, setState] = React.useState(() => ({
    location: 'OR',
    keyword: '',
    places: [],
    fetching: false,
    error: null
  }));
  const {location, keyword, places, error} = state;

  const handleRadioChange = (event: any) => {
    setState({...state, location: event.target.id})
  }

  const handleKeywordChange = (event: any) => {
    setState({...state, keyword: event.target.value})
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setState({...state, fetching: true});
    const place = radioContent.find(r => r.id === location);
    const lat = place?.lat || '';
    const long = place?.long || '';
    const response = await fetch('/', {
      ...fetchConfig,
      body: JSON.stringify({lat, long, keyword})
    });
    const data = await response.json();
    const places = data?.results.map((r: any) => ({id: r.place_id, name: r.name, rating: r.rating, address: r.plus_code.compound_code}));
    setState({...state, places, fetching: false});
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="form-group">
              {radioContent.map(({id, content}) => (
                <label key={id} htmlFor={id} className="radio">
                  <input
                    type="radio"
                    placeholder="radio"
                    name="radio"
                    id={id}
                    checked={location === id}
                    onChange={handleRadioChange}
                  />
                  {content}
                </label>
              ))}
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-padding align-items-center">
            <input name="keyword" placeholder="keyword" id="keyword" type="text" className="form-control" value={keyword}
                   onChange={handleKeywordChange}/>
            <div className="btn-container">
              <button type="submit" className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </form>
      <div className="py-3 my-3 bg-light">
        <h5 className="text-uppercase font-weight-bold text-center">results</h5>
        {state.places && !state.fetching
          ? state.places.map((p: Place) => <p key={p.id}>{p.name}</p>)
          : <p className="text-center">Waiting...</p>
        }
      </div>
    </>
  );
}

Form.proptTypes = {}

export default Form;