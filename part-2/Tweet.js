// const Tweet = (props) => {
//   return (
//     <ul>
//       <li>Username: {props.username}</li>
//       <li>Name: {props.name}</li>
//       <li>Date: {props.date}</li>
//       <li>Message: {props.message}</li>
//     </ul>
//   );
// };

const Tweet = (props) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "10px" }}>
      <div className="card-body">
        <h5 className="card-title">{props.username}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.name}</h6>
        <p className="card-text">{props.message}</p>
        <p className="card-text">
          <small className="text-muted">{props.date}</small>
        </p>
      </div>
    </div>
  );
};
