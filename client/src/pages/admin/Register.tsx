import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../api/axios";
import "../../styles/RegisterStyles.css";
import { NavLink } from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const KEY_REGEX = /^[a-f0-9]{128}$/;
const REGISTER_URL = "/register";

const Register = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [key, setKey] = useState("");
  const [validKey, setvalidKey] = useState(false);
  const [keyFocus, setKeyFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  useEffect(() => {
    setvalidKey(KEY_REGEX.test(key));
  }, [key]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      await axios.post(REGISTER_URL, JSON.stringify({ user, pwd, key }), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUser("");
      setPwd("");
      setMatchPwd("");
    } catch (err: any) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else if (err.response?.status === 400) {
        setErrMsg("You are not authorized to be on this page...");
      } else {
        setErrMsg("Registration Failed");
        console.log(err);
      }

      errRef.current?.focus();
    }
  };

  return (
    <div className="grid place-items-center w-full h-full">
      {success ? (
        <section className="bg-redAccent rounded-lg ">
          <h1 className="user-pwd-needacct-header">Success!</h1>
          <p>
            <NavLink className={"reg-log-redirect"} to={"/login"}>
              Sign In
            </NavLink>
          </p>
        </section>
      ) : (
        <section className="bg-redAccent rounded-lg ">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="reg-log-header">Register</h1>
          <form onSubmit={handleSubmit}>
            <label className="user-pwd-needacct-header" htmlFor="username">
              Username:
              <FontAwesomeIcon
                icon={faCheck}
                className={validName ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validName || !user ? "hide" : "invalid"}
              />
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              className="text-primary"
            />
            <p
              id="uidnote"
              className={
                userFocus && user && !validName ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>

            <label className="user-pwd-needacct-header" htmlFor="password">
              Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPwd || !pwd ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
              className="text-primary"
            />
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>

            <label className="user-pwd-needacct-header" htmlFor="confirm_pwd">
              Confirm Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validMatch && matchPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validMatch || !matchPwd ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
              className="text-primary"
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>

            <label className="user-pwd-needacct-header" htmlFor="key">
              Key:
              <FontAwesomeIcon
                icon={faCheck}
                className={validKey && keyFocus ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validKey || !keyFocus ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="key"
              onChange={(e) => setKey(e.target.value)}
              value={key}
              required
              aria-invalid={validKey ? "false" : "true"}
              aria-describedby="keynote"
              onFocus={() => setKeyFocus(true)}
              onBlur={() => setKeyFocus(false)}
              className="text-primary"
            />
            <p
              id="keynote"
              className={keyFocus && !validKey ? "instructions" : "offscreen"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              If you were not given a key... you are NOT supposed to be visiting
              this site...
            </p>

            <button
              disabled={
                !validName || !validPwd || !validMatch || !validKey
                  ? true
                  : false
              }
              className={
                !validName || !validPwd || !validMatch
                  ? "mt-[5%] p-[3%] bg-greyAccent text-secondary"
                  : "reg-log-button"
              }
            >
              Sign Up
            </button>
          </form>
          <p className="user-pwd-needacct-header">
            Already registered?
            <br />
            <span className="line">
              {/*put router link here*/}
              <NavLink className={"reg-log-redirect"} to="/login">
                Sign In
              </NavLink>
            </span>
          </p>
        </section>
      )}
    </div>
  );
};

export default Register;
