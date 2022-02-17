import {PlaceProps} from "../models/place-props.model";
import PropTypes from "prop-types";
function Place({name, address, rating, icon, ratingNumber}: PlaceProps) {
  return (
    <div className="card p-4 rounded shadow my-2">
      <div className="d-flex justify-content-between">
        <div className="d-flex ">
          <img src={icon} alt="icon" width="20" height="20" className="mr-2" style={{marginTop: '3px'}}/>
          <h5 className="font-weight-bold text-uppercase mb-0">{name}</h5>
        </div>
        <div className="text-right">
          {ratingNumber > 0 && <small className="d-block">{rating}/5</small>}
          <small className="d-block">{ratingNumber} ratings</small>
        </div>
      </div>
      <span>📍 {address}</span>
    </div>
  )
}

Place.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  ratingNumber: PropTypes.number.isRequired
};

export default Place;