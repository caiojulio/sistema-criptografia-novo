from django.shortcuts import render
from django.http import HttpResponse

import subprocess
from cryptography.fernet import Fernet
import os

def my_view(request):
    
    def encrypt_file(path_file):

        """
        Criptografa um arquivo usando o algoritmo AES (Advanced Encryption Standard) em modo CBC (Cipher-Block Chaining).

        Args:
                path_file (str): O nome(caminho) do arquivo a ser criptografado.
                key (bytes): A chave de criptografia no formato Fernet (32 bytes).

        """
        
        dirname = os.path.dirname(path_file) #diretorio sem o nome do arquivo
        filename = os.path.splitext(os.path.basename(path_file))[0] #captura o nome do arquivo sem extensão

        #gera a chave de criptografia Fernet
        key = Fernet.generate_key()

        # Ler o conteúdo do arquivo
        with open(path_file, 'rb') as file:
                file_data = file.read()

        # Criar uma instância do objeto Fernet com a chave fornecida
        fernet = Fernet(key)

        # Criptografar os dados do arquivo
        encrypted_data = fernet.encrypt(file_data)

        # Escrever os dados criptografados em um novo arquivo
        encrypted_filename = path_file + '.encrypted'
        with open(encrypted_filename, 'wb') as encrypted_file:
                encrypted_file.write(encrypted_data)

        #cria arquivo com o conteudo sendo a chave fernet usada para criptografar o arquivo
        with open(f'{dirname}/{filename}_key.txt', "wb") as fileKey: 
            fileKey.write(key)

        # retorna o caminho pai do arquivo
        return dirname
    

    # seção para iniciar escolha de documento
    output = subprocess.run(['zenity', '--file-selection', '--title=Selecione um arquivo'], capture_output=True, text=True)
    file_path = output.stdout.strip()
    dirname = encrypt_file(file_path)
    
    return HttpResponse(f"{dirname}")