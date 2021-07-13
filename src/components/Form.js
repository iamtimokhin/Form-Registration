import React, { useState } from "react";

const Form = () => {
  // reverseForm
  const [isSignin, setIsSignin] = useState(false);
  // value for inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [username1, setUsername1] = useState("");
  const [password1, setPassword1] = useState("");
  const [email, setEmail] = useState("");
  // value for errors
  const [usernameDirty, setUsernameDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [usernameDirty1, setUsernameDirty1] = useState(false);
  const [passwordDirty1, setPasswordDirty1] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  // text of errors
  const [usernameError, setUsernameError] = useState("Введите валидное имя");
  const [passwordError, setPasswordError] = useState("Введите валидный пароль");
  const [usernameError1, setUsernameError1] = useState("Введите валидное имя");
  const [passwordError1, setPasswordError1] = useState(
    "Введите валидный пароль"
  );
  const [emailError, setEmailError] = useState("Введите валидный адрес почты");
  // function for reverse form
  const reverseForm = () => {
    setIsSignin(!isSignin);
    setUsername("");
    setPassword("");
    setUsername1("");
    setPassword1("");
    setEmail("");
  };
  // bluк effetcs
  const blueHandler = (e) => {
    switch (e.target.name) {
      case "username":
        setUsernameDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "username1":
        setUsernameDirty1(true);
        break;
      case "password1":
        setPasswordDirty1(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
    }
  };
  // function of usernameHandler
  const usernameHandler = (e) => {
    setUsername(e.target.value);
    if (e.target.value.length < 1 || e.target.value.length > 20)
      setUsernameError("Введите валидное имя");
    if (!e.target.value) setUsernameError("Введите валидное имя");
    else {
      setUsernameError("");
    }
  };
  // function of usernameHandler1
  const usernameHandler1 = (e) => {
    setUsername1(e.target.value);
    if (e.target.value.length < 1 || e.target.value.length > 20)
      setUsernameError1("Введите валидное имя");
    if (!e.target.value) setUsernameError("Введите валидное имя");
    else {
      setUsernameError1("");
    }
  };
  // function of emailHandler
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase()))
      setEmailError("Введите валидный адрес почты");
    else {
      setEmailError("");
    }
  };

  // function of passwordHandler
  const passwordHandler = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length < 3 || event.target.value.length > 20)
      setPasswordError("Введите валидныйй пароль");
    if (!event.target.value) setPasswordError("");
    else {
      setPasswordError("");
    }
  };
  // function of passwordHandler
  const passwordHandler1 = (event) => {
    setPassword1(event.target.value);
    if (event.target.value.length < 3 || event.target.value.length > 20)
      setPasswordError1("Введите валидныйй пароль");
    if (!event.target.value) setPasswordError1("");
    else {
      setPasswordError1("");
    }
  };

  return (
    <>
      <form className="form form--wrapper">
        {isSignin ? (
          <>
            <div className="name form__name">
              <p className="name__text">Sign up</p>
            </div>
            <div className="input form__input">
              <input
                value={username}
                name="username"
                className="input__username"
                required="required"
                placeholder="Username"
                onBlur={(e) => blueHandler(e)}
                onChange={(e) => usernameHandler(e)}
              />
              {usernameDirty && usernameError && (
                <span className="input__error">{usernameError}</span>
              )}
              <input
                value={email}
                type="email"
                name="email"
                className="input__email"
                required="required"
                placeholder="Email"
                onBlur={(e) => blueHandler(e)}
                onChange={(e) => emailHandler(e)}
              />
              {emailDirty && emailError && (
                <span className="input__error">{usernameError}</span>
              )}
              <input
                value={password}
                name="password"
                className="input__password"
                type="password"
                placeholder="Password"
                required="required"
                onBlur={(e) => blueHandler(e)}
                onChange={(e) => passwordHandler(e)}
              />
              {passwordDirty && passwordError && (
                <span className="input__error">{passwordError}</span>
              )}
            </div>
            <div className="prompt form__prompt">
              <p className="prompt__text" onClick={reverseForm}>
                Do you have an account? Sign in?
              </p>
            </div>
            <div className="button form__button">
              <button href="#" className="button__signin">
                <span className="button__span"></span>
                <span className="button__span"></span>
                <span className="button__span"></span>
                <span className="button__span"></span>
                Sign UP
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="name form__name">
              <p className="name__text">Sign in</p>
            </div>
            <div className="input form__input">
              <input
                value={username1}
                name="username1"
                className="input__username"
                required="required"
                placeholder="Username"
                onBlur={(e) => blueHandler(e)}
                onChange={(e) => usernameHandler1(e)}
              />
              {usernameDirty1 && usernameError1 && (
                <span className="input__error">{usernameError1}</span>
              )}
              <input
                value={password1}
                name="password1"
                className="input__password"
                type="password"
                placeholder="Password"
                required="required"
                onBlur={(e) => blueHandler(e)}
                onChange={(e) => passwordHandler1(e)}
              />
              {passwordDirty1 && passwordError1 && (
                <span className="input__error">{passwordError1}</span>
              )}
            </div>
            <div className="prompt form__prompt">
              <p className="prompt__text" onClick={reverseForm}>
                Do you haven't an account? Sign up?
              </p>
            </div>
            <div className="button form__button">
              <button href="#" className="button__signin">
                <span className="button__span"></span>
                <span className="button__span"></span>
                <span className="button__span"></span>
                <span className="button__span"></span>
                Sign IN
              </button>
            </div>
          </>
        )}
      </form>
    </>
  );
};

export default Form;
