
const LocationItem = ({nameLocation, typeLocation, dimensionLocation, residentsLocation}) => {
    return (
      <div className="container">
        <div className="row">
            <div className=" col-7 location">
              <h2>Location: {nameLocation}</h2>
              <h5>Type Location:{typeLocation}</h5>
              <h5>Dimension: {dimensionLocation}</h5>
              <h5>Total Residents:{residentsLocation.length}</h5>
            </div>
        </div>    
      </div> 
    );
};
export default LocationItem;