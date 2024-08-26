import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [form, setForm] = useState({ name: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let payload = { ...form, password: Number(form.password) };
    console.log(payload);
    if (payload.name === 'admin' && payload.password == 123) {
      navigate('/about');
    } else {
      alert('xatolik bor');
    }
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-6 offset-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Login</h1>
            </div>
            <div className="card-body">
              <form id="form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="name / admin"
                  name="name"
                  className="form-control my-2"
                  onChange={handleChange}
                />
                <input
                  type="number"
                  placeholder="password / 123"
                  name="password"
                  className="form-control my-2"
                  onChange={handleChange}
                />
              </form>
            </div>
            <div className="card-footer">
              <button form="form" type="submit" className="btn btn-success">
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
