"use client"
import React from "react";
import { InputText } from "./textInput";
import { Button } from "./button";

export function LoginRegister(){
    function handleClick(event: React.FormEvent){
        event.preventDefault();

        const user = document.getElementById("Usuario") as HTMLInputElement;
        const senha = document.getElementById("Senha")  as HTMLInputElement;


        if (user.value !== "secretaria") {
            alert("Digite um nome de usuário válido");
            return;
        }

        if (senha.value !== "1234") {
            alert("Digite uma senha válida");
            return;
        }
        
        alert("Login bem-sucedido");
    }
    return(
        <div className="bg-box w-96 mt-20 mx-auto p-3 text-center rounded-2xl">
            <h1 className="text-3xl font-bold p-3">Realizar login</h1>
            <form action="pages/cadastrar" id="register" method="post" onSubmit={handleClick} >
                <InputText inputId="Usuario" labelText="Digite o nome de usuário"/>
                <InputText inputId="Senha" labelText="Digite a senha"/>
                <Button buttonText="Entrar" type="submit"/>
            </form>
        </div>
    )
}