import * as React from "react";
import {fetchConfig, radioContent} from "../models/constants";
import {Place as PlaceModel} from "../models/place.model";
import Place from './Place';

/**
 * This is the main component of the app; I'm purposefully colocating the state
 * in this component to make performance faster
 *
 */
function Form() {
  const [state, setState] = React.useState(() => ({
    location: '',
    keyword: '',
    places: [],
    fetching: false,
    error: null
  }));
  const {location, keyword, places, fetching, error} = state;

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
    const places = data?.results.map((r: any) => ({
      id: r.place_id,
      name: r.name,
      rating: r.rating,
      address: r.vicinity,
      icon: r.icon,
      ratingNumber: r.user_ratings_total
    }));
    setState({...state, places, fetching: false});
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="container py-5">
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
                    required={true}
                  />
                  {content}
                </label>
              ))}
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-padding align-items-center">
            <input name="keyword" placeholder="keyword" id="keyword" type="text" className="form-control"
                   required={true}
                   value={keyword}
                   onChange={handleKeywordChange}/>
            <div className="btn-container">
              <button type="submit" className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </form>
      <div className="py-5 my-3 bg-light">
        <div className="container">
          <h6 className="text-uppercase font-weight-bold text-center">results</h6>
          {/*The network call finished and we got data 🎉*/}
          {places && places.length > 0 && !fetching
            && places.map((p: PlaceModel) => <Place key={p.id} {...p} />)
          }

          {/*The network call finished but the request didn't return any results 🥲*/}
          {places && places.length === 0 && !fetching && <p className="text-center">No results found...</p>}

          {/*Network call in process 🧐*/}
          {fetching && <p className="text-center">Fetching...</p>}
        </div>
      </div>
    </>
  );
}

Form.proptTypes = {}

export default Form;