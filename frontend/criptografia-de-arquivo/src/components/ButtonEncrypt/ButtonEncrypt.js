import Button from '../Button/Button';
import styles from './ButtonEncrypt.module.css'
import axios from 'axios';

export default function ButtonEncrypt(){

    function Criptografar(){

        axios.get('http://127.0.0.1:8000/encrypt/').then( responsePath => {
        alert(`Arquivo criptografado com sucesso! \nEncontre o arquivo criptografado, e a chave de criptografia em: \n ${responsePath.data}`);
        }).catch(error => {
        console.error(error);
        // Lidar com os erros de solicitação
        });
    }

    return(
        <div className={styles.container}> 
            {/* parte responsavel por renderizar a interface padrão de criptografia */}

            <h1>Esta sistema de criptografia, criptografa um arquivo com base no algoritmo de criptografia AES utilizando chave Fernet e o modo CBC</h1>
            <h2>Criptografe seu arquivo:</h2>
            <Button onClick={Criptografar} nameButton="Criptografar" />

        </div>
    )
};