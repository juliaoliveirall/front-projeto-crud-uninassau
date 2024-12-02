import React from 'react';
import { Button } from '@/app/components/button';

export function DadosAluno() {
    const alunoStorage = localStorage.getItem('aluno');
    const aluno = alunoStorage ? JSON.parse(alunoStorage) : { nome: '', email: '', cpf: '' };

    function handleEdit() {
        
    }

    return (
        <div className="mt-10 text-center">
            <h2 className="text-2xl font-bold">Dados Cadastrados</h2>
            <p><strong>Nome:</strong> {aluno.nome}</p>
            <p><strong>Email:</strong> {aluno.email}</p>
            <p><strong>CPF:</strong> {aluno.cpf}</p>
            <form onSubmit={handleEdit} action="atualizar">
            <Button buttonText="Editar" type="submit" />
            </form>
        </div>
    );
}
