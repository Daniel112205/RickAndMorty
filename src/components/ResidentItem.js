//Get object data of Resident
const ResidentItem = ({ data }) => {
  // Get values data
  const { name, image, status, origin, episode, created, gender } = data;
  return (
    <div className="card">
      {/* Show data in page */}
        <img src={image} alt={name} />
        <h3>Name: {name}</h3>
        <h5>Gender: {gender}</h5>
        <h5>Status: {status}</h5>
        <h5>Origin: {origin.name}</h5>
        <h5>Aparitions: {episode.length}</h5>
        <h5>Created: {created}</h5>
    </div>
  );
};

export default ResidentItem;
