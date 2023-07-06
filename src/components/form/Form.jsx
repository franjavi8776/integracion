import { useState } from "react";
import style from "./form.module.css";
import validation from "./validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setErrors(validation({ ...userData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <div className={style.divForm}>
      <form onSubmit={handleSubmit} className={style.form}>
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

        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
