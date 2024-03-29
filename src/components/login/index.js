"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import { Icon } from "@iconify/react";
import { InputComponente, SenhaComponente } from "../InputComponente";

const Login = () => {
  const [newpassword, setnewpassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userLoginEmail, setLoginUserEmail] = useState("");
  const [userSenha, setUserSenha] = useState("");
  const [userLoginSenha, setLoginUserSenha] = useState("");
  const [userList, setUserList] = useState([
    { nome: "Victor", email: "Victor@Email", senha: "VictorSenha" },
    { nome: "João", email: "João@Email", senha: "JoãoSenha" },
  ]);

  let user = {
    nome: "João",
    email: "João@Email",
    senha: "senhaJoão",
  };

   /* if (userList[0].nome != user.nome && userList[0].email != user.email)
    userList.push(user);  */
  // usuario tem que ter nome e-mail e senha
  // e-mail1 e e-mail2 tem que ser igual
  // senha 1 e senha2 tem que ser igual
  // quando adiciona um usuario ir para a tela de login
  // ver se usuario ja existe
  function cadastrarUsuario() {
    if (userSenha != userLoginSenha || userSenha === "") {
      return alert("voce n tem senha cadastrado");
    }
    if (userEmail != userLoginEmail || userEmail === "") {
      return alert("voce n tem e-mail cadastrado");
    }
    if (userName === "") {
      return alert("nome de usuario n foi invormado");
    }
    let user = {
      nome: userName,
      email: userEmail,
      senha: userSenha,
    };
    const novaLista = userList;
    novaLista.push(user);
    setUserList(novaLista);
    console.log(novaLista);
    setnewpassword(true);
  }
  if (newpassword)
    return (
      <div className={style.conteiner}>
        <h1 className={style.titulo}> Entrar no jogo </h1>
        <InputComponente
          inputvalue={userEmail}
          onchangeDefora={(e) => setUserEmail(e.target.value)}
        ></InputComponente>
        <SenhaComponente
          inputvalue={userLoginSenha}
          onchangeDaSenha={(e) => setLoginUserSenha(e.target.value)}
        ></SenhaComponente>
        <button
          className={style.botao}
          onClick={() => alert(userEmail == userLoginEmail)}
        >
          logar
        </button>
        <a className={style.novaconta} onClick={() => setnewpassword(false)}>
          criar nova conta
        </a>
      </div>
    );
  // isso é um comentario
  return (
    <div className={style.conteiner}>
      <h1 className={style.titulo}> Criar uma conta</h1>
      <InputComponente
        inputvalue={userName}
        inputtitle={"digite seu nome"}
        onchangeDefora={(e) => setUserName(e.target.value)}
      ></InputComponente>
      <InputComponente
        inputvalue={userEmail}
        inputtitle={"digite seu E-mail"}
        onchangeDefora={(e) => setUserEmail(e.target.value)}
      ></InputComponente>
      <InputComponente
        inputvalue={userLoginEmail}
        inputtitle={"digite novamente seu E-mail"}
        onchangeDefora={(e) => setLoginUserEmail(e.target.value)}
      ></InputComponente>
      <SenhaComponente
        inputvalue={userSenha}
        inputtitle={"digite sua senha"}
        onchangeDaSenha={(e) => setUserSenha(e.target.value)}
      ></SenhaComponente>
      <SenhaComponente
        inputvalue={userLoginSenha}
        inputtitle={"digite novamente sua senha"}
        onchangeDaSenha={(e) => setLoginUserSenha(e.target.value)}
      ></SenhaComponente>
      <button className={style.botao} onClick={cadastrarUsuario}>
        Criar conta
      </button>
    </div>
  );
};

export default Login;
