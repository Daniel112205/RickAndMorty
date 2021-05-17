import React, { useEffect, useState } from "react";
import GetResident from "../services/GetResident";
import ResidentItem from "./ResidentItem";
//Get url Resident
const Resident = ({ url }) => {
  //Get values Residents
  const [resident, setResident] = useState('');

  useEffect(() => {
    //Validate if content url
    if(url){
      //Ejecute function for Get Residents
      GetResident(url)
      .then((response) => {
        setResident(response.data);
      });
    }
  }, [url]);

  return (
    <div className="col-4">
      {/* Validate if is true show ResidentItem */}
      {resident && <ResidentItem data={resident} />}
    </div>
  );
};

export default Resident;
