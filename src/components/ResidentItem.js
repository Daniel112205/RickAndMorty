const ResidentItem = ({ data }) => {
  const { name, image, status, origin, episode, created } = data;
  return (
    <div className="card">
        <img src={image} alt={name} />
        <h3>Name: {name}</h3>
        <h5>Status: {status}</h5>
        <h5>Origin: {origin.name}</h5>
        <h5>Aparitions: {episode.length}</h5>
        <h5>Created: {created}</h5>
    </div>
  );
};

export default ResidentItem;
