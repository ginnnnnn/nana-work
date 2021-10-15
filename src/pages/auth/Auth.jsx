import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Auth.module.css";

import { useAuth } from "../../AuthContext";
import { NavLink } from "react-router-dom";

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const Auth = () => {
  const { signin } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSigninSubmit = (data) => console.log(data);

  return (
    <div className={styles.signinPage}>
      <div className={styles.form}>
        <form
          className={styles.signinForm}
          onSubmit={handleSubmit(onSigninSubmit)}
        >
          <h2 className={styles.title}>登入</h2>
          <input
            {...register("email")}
            className={styles.input}
            type="email"
            placeholder="請輸入郵箱"
          />
          {/* <p>{errors.email?.message}</p> */}
          <input
            {...register("password")}
            className={styles.input}
            type="password"
            placeholder="請輸入密碼"
          />
          {/* <p>{errors.password?.message}</p> */}
          {/* 因為css太醜沒有顯示 <p>{errors.password?.message}</p> */}
          <NavLink
            to="/project/create"
            className={styles.btn}
            type="submit"
            onClick={signin}
          >
            登入
          </NavLink>
          <div className={styles.separator}>
            <div className={styles.separatorItem}></div>
            <div className={styles.separatorItem}></div>
            <div className={styles.separatorItem}></div>
          </div>
          <div className={styles.signup}>
            <h4>
              還沒有帳號？這裡<a>註冊</a>
            </h4>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
