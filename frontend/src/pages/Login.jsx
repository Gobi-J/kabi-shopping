import { useState } from "react";
import {Link} from 'react-router-dom'

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
      });
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
      };
      return (
        <section className="flex flex-col items-center my-10">
          <h4>Login</h4>
          <form onSubmit={handleSubmit}>
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
            <button type="submit" className="w-full text-center normal" style={{border:'1px solid'}}>Sign in</button>
          </form>
          <p className="text-center">New User? <Link to= "/register" className="text-primary font-semibold cursor-pointer">Register</Link></p>

        </section>
      );
}

export default Login