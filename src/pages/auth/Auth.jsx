import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Auth.module.css";

import { useAuth } from "/Users/vicky/Documents/yes-mywork/nana-work/src/AuthContext";

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
          <p>{errors.email?.message}</p>
          <input
            {...register("password")}
            className={styles.input}
            type="password"
            placeholder="請輸入密碼"
          />
          <p>{errors.password?.message}</p>
          {/* 因為css太醜沒有顯示 <p>{errors.password?.message}</p> */}
          <btn className={styles.btn} type="submit" onClick={signin}>
            登入
          </btn>
          <div className={styles.separator}>
            <div className={styles.separatorItem}></div>
            <div className={styles.separatorItem}></div>
            <div className={styles.separatorItem}></div>
          </div>
          <div className={styles.signup}>
            <p>
              還沒有帳號？這裡<a>註冊</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
