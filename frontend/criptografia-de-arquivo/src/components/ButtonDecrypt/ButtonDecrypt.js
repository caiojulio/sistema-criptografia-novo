import Button from "../Button/Button";
import axios from "axios";
import ButtonDecryptStyle from './ButtonDecrypt.module.css'
import Input from "../Input/Input";

export default function ButtonDecrypt(){

    function Descriptografar(){

        axios.get('http://127.0.0.1:8000/decrypt/').then( responsePath => {
        alert(`Arquivo descriptografado com sucesso! \nEncontre o arquivo descriptografado em:\n ${responsePath.data}`);
        }).catch(error => {
        console.error(error);
        // Lide com os erros de solicitação
        });
    }

    return (
        <div className={ButtonDecryptStyle.container}>
            <h1>Descriptografe seu arquivo aqui, forneça a chave de criptografia, e adicione o arquivo criptografado desejado:</h1>
            <Input/>
            <Input/>
            <Button onClick={Descriptografar} nameButton="Descriptografar" />    
        </div>
    )
}