"use client"
import React, { useState } from 'react';
import style from "./style.module.css"
import { Icon } from '@iconify/react';

const Login = () => {
  const [newpassword, setnewpassword] = useState(true);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userLoginEmail, setLoginUserEmail] = useState("");
  const [userSenha, setUserSenha] = useState("");
  const [userLoginSenha, setLoginUserSenha] = useState("");

  if (newpassword)
    return <div className={style.conteiner}>
      <h1 className={style.titulo}> Entrar no jogo </h1>
      <div className={style.caixaiput}><Icon icon="ic:round-email" width='30px' />
        <input className={style.username} placeholder='Digite seu e-mail...' onChange={(e) => setLoginUserEmail(e.target.value)} value={userLoginEmail}></input>
      </div>
      <div className={style.caixaiput}><Icon icon="mdi:password" width='30px' />
        <input className={style.username1} placeholder='Digite sua senha...' onChange={(e) => setLoginUserSenha(e.target.value)}></input>
      </div>
      <button className={style.botao} onClick={() => alert(userEmail == userLoginEmail)}>logar</button>
      <a className={style.novaconta} onClick={() => setnewpassword(false)}>criar nova conta</a>
    </div>;
 return <div className={style.conteiner}>
 <h1 className={style.titulo}> Criar uma conta</h1>
 <div className={style.caixaiput}><Icon icon="ic:round-email" width='30px' />
   <input className={style.username} placeholder='Digite seu nome de usuario...' onChange={(e) => setUserName(e.target.value)}></input>
 </div>
 <div className={style.caixaiput}><Icon icon="ic:round-email" width='30px' />
   <input className={style.username} placeholder='Digite seu e-mail...' onChange={(e) => setUserEmail(e.target.value)} value={userEmail}></input>
 </div>
 <div className={style.caixaiput}><Icon icon="ic:round-email" width='30px' />
   <input className={style.username} placeholder='Digite seu e-mail novamente...'  ></input>
 </div>
 <div className={style.caixaiput}><Icon icon="mdi:password" width='30px' />
   <input className={style.username1} placeholder='Digite sua senha...' onChange={(e) => setUserSenha(e.target.value)}></input>
 </div>
 <div className={style.caixaiput}><Icon icon="mdi:password" width='30px' />
   <input className={style.username1} placeholder='Digite sua senha...'></input>
 </div>
 <button className={style.botao} onClick={() => setnewpassword(true)}>Criar conta</button>
</div>;
 
}

export default Login;