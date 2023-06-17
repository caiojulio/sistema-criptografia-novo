import styles from './button.module.css'
import axios from 'axios';

export default function ButtonUpload(){

    function Criptografar(){

        axios.get('http://127.0.0.1:8000/').then( responsePath => {
        alert(`Arquivo criptografado com sucesso! \nEncontre o arquivo criptografado, e a chave de criptografia em: \n ${responsePath['data']}`);
        
        }).catch(error => {
        console.error(error);
        // Lide com os erros de solicitação
        });
    }

    return(
        <div className={styles.container}>
            <h1>Esta sistema de criptografia, criptografa um arquivo com base no algoritmo de criptografia AES utilizando chave Fernet e o modo CBC</h1>
            <h2>Criptografe seu arquivo:</h2>
            <button onClick={Criptografar}>Criptografar</button>
        </div>
    )
};