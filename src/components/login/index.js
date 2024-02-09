"use client"
import React, { useState } from 'react';
import style from "./style.module.css"
import { Icon } from '@iconify/react';

const Login = () => {
  const [newpassword, setnewpassword] = useState(true);
  if (newpassword)
    return <div className={style.conteiner}>
      <h1 className={style.titulo}> Entrar no jogo </h1>
      <div className={style.caixaiput}><Icon icon="ic:round-email" width='30px' />
        <input className={style.username} placeholder='Digite seu e-mail...'></input>
      </div>
      <div className={style.caixaiput}><Icon icon="mdi:password" width='30px' />
        <input className={style.username1} placeholder='Digite sua senha...'></input>
      </div>
      <button className={style.botao}>logar</button>
      <a className={style.novaconta} onClick={()=>setnewpassword(false)}>criar nova conta</a>
    </div>;
  return <div className={style.conteiner}><h1 className={style.titulo}>Criar nova conta</h1>
  <div className={style.caixaiput2}><Icon icon="ic:round-email" width='30px' />
  <input className={style.username}></input></div>
  
  
  
  
  </div>
  
}

export default Login;