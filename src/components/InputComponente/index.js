"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import { Icon } from "@iconify/react";

function InputComponente({inputvalue, onchangeDefora, inputtitle}) {


  return (
    <div className={style.caixaiput}>
      <Icon icon="ic:round-email" width="30px" />
      <input
        className={style.username}
        placeholder={inputtitle}
        onChange={onchangeDefora}
        value={inputvalue}
      ></input>
    </div>
  );
  
}
function SenhaComponente({inputvalue, onchangeDaSenha, inputtitle}) {
  

return (
  <div className={style.caixaiput}>
    <Icon icon="mdi:password" width="30px" />
    <input
      className={style.username1}
      placeholder={inputtitle}
      onChange={onchangeDaSenha}
      value={inputvalue}
    ></input>
  </div>
);

}
export {SenhaComponente,InputComponente}
