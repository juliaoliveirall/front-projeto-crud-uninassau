import React, { useState } from 'react';
import { Button } from '@/app/components/button';

export function EditarAluno() {
    const alunoStorage = localStorage.getItem('aluno');
    const aluno = alunoStorage ? JSON.parse(alunoStorage) : { nome: '', email: '', cpf: '' };
    const [nome, setNome] = useState(aluno.nome);
    const [email, setEmail] = useState(aluno.email);
    const [cpf, setCpf] = useState(aluno.cpf);

    function handleSave() {
        const updatedAluno = { nome, email, cpf };
        localStorage.setItem('aluno', JSON.stringify(updatedAluno));
        alert('Dados atualizados com sucesso!');
    }

    return (
        <div className="mt-10 text-center">
            <h2 className="text-2xl font-bold">Editar Dados</h2>
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
            <form onSubmit={handleSave} action="dados">
            <Button buttonText="Salvar" type="submit" />
            </form>
        </div>
    );
}
