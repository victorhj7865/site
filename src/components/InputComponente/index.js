"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import { Icon } from "@iconify/react";

function InputComponente({inputvalue, onchangeDefora}) {


  return (
    <div className={style.caixaiput}>
      <Icon icon="ic:round-email" width="30px" />
      <input
        className={style.username}
        placeholder="Digite seu e-mail..."
        onChange={onchangeDefora}
        value={inputvalue}
      ></input>
    </div>
  );
  
}
function SenhaComponente({inputvalue, onchangeDaSenha}) {
  

return (
  <div className={style.caixaiput}>
    <Icon icon="mdi:password" width="30px" />
    <input
      className={style.username1}
      placeholder="Digite sua senha"
      onChange={onchangeDaSenha}
      value={inputvalue}
    ></input>
  </div>
);

}
export {SenhaComponente,InputComponente}
