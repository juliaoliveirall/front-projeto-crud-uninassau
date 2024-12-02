import { Button } from '@/app/components/button';
import React, { useState } from 'react';

export function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');


    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        const aluno = {
            nome,
            email,
            cpf,
        };

        localStorage.setItem('aluno', JSON.stringify(aluno));


        alert('Cadastro realizado com sucesso!');

        setNome('');
        setEmail('');
        setCpf('');
    }

    return (
        <div className="bg-box dark:bg-boxd w-96 mt-20 mx-auto p-6 text-center rounded-2xl">
            <h1 className="text-3xl font-bold p-3">Cadastro de Aluno</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="nome" className="block text-left">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                        className="w-full p-2 mt-1 border rounded-3xl"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-left">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 mt-1 border rounded-3xl"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="cpf" className="block text-left">CPF:</label>
                    <input
                        type="text"
                        id="cpf"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        required
                        className="w-full p-2 mt-1 border rounded-3xl"
                    />
                </div>
                <Button buttonText="Cadastrar" type="submit"/>
            </form>
        </div>
    );
}

export function DadosAluno() {
    const aluno = JSON.parse(localStorage.getItem('aluno') || '{}');

    return (
        <div className="mt-10 text-center">
            <h2 className="text-2xl font-bold">Dados Cadastrados</h2>
            <p><strong>Nome:</strong> {aluno.nome}</p>
            <p><strong>Email:</strong> {aluno.email}</p>
            <p><strong>CPF:</strong> {aluno.cpf}</p>
        </div>
    );
}

