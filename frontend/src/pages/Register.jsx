import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../config";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.name || !user.phone || !user.email || !user.password) {
      toast.error("Enter all details");
      return;
    }
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(res);
      const { message } = await res.json();
      if (!res.ok) {
        throw new Error(message);
      }
      toast.success(message);
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <section className="flex flex-col items-center">
      <h4>Register</h4>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center gap-1">
          <label htmlFor="name">Name</label>
          <input
            className="border border-black mb-2"
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div className="flex flex-col items-center gap-1">
          <label htmlFor="phone">Phone Number</label>
          <input
            className="border border-black mb-2"
            type="text"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
        </div>
        <div className="flex flex-col items-center gap-1">
          <label htmlFor="email">Email</label>
          <input
            className="border border-black mb-2"
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="flex flex-col items-center gap-1">
          <label htmlFor="password">Password</label>
          <input
            className="border border-black mb-2"
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="text-center w-full normal cursor-pointer"
          style={{ border: "1px solid" }}
        >
          Register
        </button>
      </form>
      <p>
        Already an User?{" "}
        <Link to="/login" className="text-primary font-semibold cursor-pointer">
          Login
        </Link>
      </p>
    </section>
  );
};

export default Register;
