import { useParams } from "react-router-dom";

const Single = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-6 offset-3">
          <div className="card">
            <div className="card-header">
            <h1 className="text-center">Single Page</h1>
            </div>
            <div className="card-body">
            <h2>ID: {id}</h2>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single;
