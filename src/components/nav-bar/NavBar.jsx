import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../AuthContext";
import styles from "./NavBar.module.css";
import { faUserCircle, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const MainHeader = () => {
  const { signInState, signout } = useAuth();
  const { dropdown, setDropdown } = useState(false);
  return (
    <div className={styles.container}>
      <NavLink to="/auth/sign-in" onClick={signout}>
        <h2>和基營造股份有限公司</h2>
      </NavLink>
      {signInState ? (
        <div className={styles.icon}>
          <FontAwesomeIcon className={styles.user} icon={faUserCircle} />
          {/* <FontAwesomeIcon className={styles.arrow} icon={faCaretDown} /> */}
        </div>
      ) : null}
      {/* {dropdown ? (
        <div className={styles.dropDown}>
          <span className={styles.item}>帳戶信息</span>
          <span className={styles.item}>切換帳號</span>
          <span className={styles.item}>設定</span>
          <span className={styles.item}>登出</span>
        </div>
      ) : null} */}
    </div>
  );
};

export default MainHeader;
