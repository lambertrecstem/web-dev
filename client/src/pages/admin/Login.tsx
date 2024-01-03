import { useRef, useState, useEffect } from "react";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { NavLink, useNavigate } from "react-router-dom";
import {  motion } from "framer-motion";
import logo from "../../assets/logo.png";


const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const to = "/dashboard";
  const userRef = useRef<any>();
  const errRef = useRef<any>();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const roles = response?.data?.roles;
      
      setAuth({ user, pwd, roles });
      setUser("");
      setPwd("");
    setLoading(false);

      navigate(to, { replace: true });
    } catch (err: any) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current?.focus();
    setLoading(false);

    }
  };

  return (
    <>
      {loading ? <div className="absolute grid place-items-center overflow-hidden w-full h-full bg-primary z-10">
        <motion.div className="" initial={{ rotate: 0 }} animate={{rotate: 360}} transition={{repeat: Infinity, duration: 0.5, ease: "linear"}} > <img
              src={logo}
              alt=""
              className="aspect-square w-[300px] "
            /></motion.div>
      </div>: (<div className="grid place-items-center w-full h-full">
        <section className="bg-redAccent rounded-lg h-[50%] w-[50%]">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="reg-log-header">Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label className="user-pwd-needacct-header" htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              className="text-primary"
            />
            <label className="user-pwd-needacct-header" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              className="text-primary"
            />
            <button className="reg-log-button">Sign In</button>
          </form>
          <p className="user-pwd-needacct-header">
            Need an Account?
            <br />
            <span className="line">
              {/*put router link here*/}
              <NavLink className={"reg-log-redirect"} to="/register">
                Sign Up
              </NavLink>
            </span>
          </p>
        </section>
      </div>)}
    </>
  );
};

export default Login;
