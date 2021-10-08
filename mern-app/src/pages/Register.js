import React, { useState } from "react";
import axios from "../axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import { Link } from "react-router-dom";
import '../styles/Register.css' ;


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [secret, setSecret] = useState("");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post("/api/register", {
        name,
        email,
        password: pass,
        secret,
      });
      setOk(data.ok);
      setName("");
      setEmail("");
      setPass("");
      setSecret("");
      setLoading(false);
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  };
  return (
    <div className="register">
      <h1>Register Page</h1>
      <section>
        <div className='register-design'>
          <img 
            src='https://img.freepik.com/free-vector/register-website-by-using-qr-code-user-enters-web-page-working-with-interface-access-account-3d-isometric-purple-gradient_87791-284.jpg?size=626&ext=jpg'
            alt='design'
          />
        </div>
          <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">password:</label>
          <input
            type="password"
            id="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <select>
            <option>Favorite Color</option>
            <option>Favorite Job</option>
            <option>Favorite City</option>
          </select>

          <input
            type="text"
            placeholder="answer"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
          />
          <button disabled={!email || !name || !secret || !pass} type="submit">
            {loading ? "loading..." : "Submit"}
          </button>
        </form>
      </section>

      <Modal
        title="Congratulations"
        visible={ok}
        onCancel={() => setOk(false)}
        footer={null}
      >
        <p>You Have Successfully registered!</p>
        <Link to="/login">Login</Link>
      </Modal>
    </div>
  );
};

export default Register;
