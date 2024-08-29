'use client'
import { useState } from 'react';

const Teste = () => {
    const [activeSection, setActiveSection] = useState<string>('perfil');
    const [selectedUser, setSelectedUser] = useState<string>('');

    const renderContent = () => {
        switch (activeSection) {
            case 'perfil':
                return <div>Informações do Usuário</div>;
            case 'definicoes':
                return <div>Configurações da Conta</div>;
            case 'chat':
                return (
                    <div>
                        <h3>Lista de Utilizadores</h3>
                        <ul>
                            <li onClick={() => setSelectedUser('Usuário 1')}>Usuário 1</li>
                            <li onClick={() => setSelectedUser('Usuário 2')}>Usuário 2</li>
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };

    const renderChat = () => {
        if (selectedUser) {
            return <div>Chat com {selectedUser}</div>;
        }
        return <div>Selecione um usuário para iniciar o chat.</div>;
    };

    return (
        <>
            <div className="grid grid-cols-12 h-screen">
                {/* Sidebar Menu */}
                <div className="hidden lg:block lg:col-span-1 bg-gray-800 text-white p-4">
                    <ul>
                        <li className="py-2 cursor-pointer" onClick={() => setActiveSection('perfil')}>Perfil</li>
                        <li className="py-2 cursor-pointer" onClick={() => setActiveSection('definicoes')}>Definições</li>
                        <li className="py-2 cursor-pointer" onClick={() => setActiveSection('chat')}>Chat</li>
                        <li className="py-2 cursor-pointer">Outros</li>
                    </ul>
                </div>

                {/* Conteúdo selecionado */}
                <div className="hidden lg:block lg:col-span-4 p-4 bg-gray-100">
                    {renderContent()}
                </div>

                {/* Chat de Conversa */}
                <div className="col-span-12 lg:col-span-7 p-4 bg-white">
                    {renderChat()}
                </div>
            </div>

            {/* Versão Mobile */}
            <div className="block lg:hidden fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4">
                <button className="px-4 py-2">Menu</button>
            </div>
        </>
    );
};

export default Teste;
