import { useState } from "react";
import style from "./form.module.css";
import validation from "./validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrors(validation({ ...userData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <div className={style.divForm}>
      <form className={style.form}>
        <div className={style.img}></div>
        <div className={style.input}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        {errors.email ? (
          <span style={{ color: "red" }}>{errors.email}</span>
        ) : null}

        <div className={style.input}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        {errors.password ? (
          <span style={{ color: "red" }}>{errors.password}</span>
        ) : null}

        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Form;
