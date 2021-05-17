import React, { useEffect, useState } from "react";
import GetResident from "../services/GetResident";
import ResidentItem from "./ResidentItem";

const Resident = ({ url }) => {
  const [resident, setResident] = useState(null);

  useEffect(() => {
    const promise = GetResident(url);

    promise.then((response) => {
      setResident(response.data);
    });
  }, [url]);

  return (
    <div className="col-4">
      {resident && <ResidentItem data={resident} />}
    </div>
  );
};

export default Resident;
