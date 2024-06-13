import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/cadastroAmostra.css";

import { FaRegUser, FaFlask } from "react-icons/fa";


function CadastroAmostra() {

  const nav = useNavigate();
  const [formData, setFormData] = useState({
    amostra: '',
    responsavel: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

    const handleCadastro = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/samples", {
                method: "post",
                body: JSON.stringify({
                    sample_name: formData.amostra,
                    name_responsible : formData.responsavel
                }),
                headers: { "Content-Type": "application/json" }
            });

            if (!response.ok) {
                toast.warning('Falha ao efetuar o cadastro!');
            }
            nav("/dashboard");
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    function handleVoltar() {
        nav('/dashboard')
    }

    return (
        <div>
        <Sidebar />
        <div className="container-cadastro" >
            <h1>Cadastro de Amostra</h1>            
            <div className="container-form">
                <form action="post">
                <div className="inputs">
                    <FaFlask size={25} />
                    <input
                    type="text"
                    name="amostra"
                    placeholder="Nome da amostra:"
                    value={formData.amostra}
                    onChange={handleInputChange}
                    />
                </div>
                <br />
                <br />

                <div className="inputs">
                    <FaRegUser size={25} />
                    <input
                    type="text"
                    name="responsavel"
                    placeholder="Nome do responsável:"
                    value={formData.responsavel}
                    onChange={handleInputChange}
                    />
                </div>
                <br />
                <br />
                <div className="buttons">
                <button onClick={handleCadastro}>Cadastrar</button>
                <button onClick={handleVoltar}>Voltar</button>
                </div>
                </form>
            </div>
            </div>
        </div>
    );
}

export default CadastroAmostra;
