import { useEffect, useState } from "react"
import LocationItem from "./LocationItem";
import GetData from '../services/GetRickAndMorty';
import Resident from "./Resident";
//Get url
const Location = ({url}) => {
    //Get values
    const [nameLocation, setNameLocation] = useState('');
    const [typeLocation, setTypeLocation] = useState('');
    const [dimensionLocation, setDimensionLocation] = useState('');
    const [residentsLocation, setResidentsLocation] = useState([]);
    const [createdLocation, setCreatedLocation] = useState('');
    useEffect(() => {
        //Validate if content url
        if(url){
            //Ejecut function GetData for API
            GetData(url).then(response => {
                //Agregate value in useState
                setNameLocation(response.data.name);
                setTypeLocation(response.data.type);
                setDimensionLocation(response.data.dimension);
                setResidentsLocation(response.data.residents);
                setCreatedLocation(response.data.created);
            })
        }
      },[url]);
    return (
        <>
            {/* Show values in LocationItem */}
            <LocationItem nameLocation={nameLocation} typeLocation={typeLocation}
            dimensionLocation={dimensionLocation} residentsLocation={residentsLocation} 
            createdLocation={createdLocation}/>
            <section>
                <div className="container">
                    <div className="row">
                        {/* Recorriendo values in array Residents */}
                        {residentsLocation.map((value,index) => (
                            <Resident url={value} key={index}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
export default Location;