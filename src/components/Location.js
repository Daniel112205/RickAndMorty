import { useEffect, useState } from "react"
import LocationItem from "./LocationItem";
import GetData from '../services/GetRickAndMorty';
import Resident from "./Resident";

const Location = ({url}) => {
    const [nameLocation, setNameLocation] = useState('');
    const [typeLocation, setTypeLocation] = useState('');
    const [dimensionLocation, setDimensionLocation] = useState('');
    const [residentsLocation, setResidentsLocation] = useState([]);

    useEffect(() => {
        if(url){
            GetData(url).then(response => {
                setNameLocation(response.data.name);
                setTypeLocation(response.data.type);
                setDimensionLocation(response.data.dimension);
                setResidentsLocation(response.data.residents);
                console.log(response.data);
                console.log(response.data.residents);
            })
        }
      },[url]);
    return (
        <>
            <LocationItem nameLocation={nameLocation} typeLocation={typeLocation}
            dimensionLocation={dimensionLocation}  residentsLocation={residentsLocation} />
            <section>
                <div className="container">
                    <div className="row">
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