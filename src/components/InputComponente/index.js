"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import { Icon } from "@iconify/react";

function InputComponente() {
    const [userLoginEmail, setLoginUserEmail] = useState("");

  return (
    <div className={style.caixaiput}>
      <Icon icon="ic:round-email" width="30px" />
      <input
        className={style.username}
        placeholder="Digite seu e-mail..."
        onChange={(e) => setLoginUserEmail(e.target.value)}
        value={userLoginEmail}
      ></input>
    </div>
  );
  
}

export default InputComponente;
