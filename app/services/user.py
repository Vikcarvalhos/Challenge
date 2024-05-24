import json
import os
import re
from Challenge.app.services.util.generate_hash import generate_md5_hash
caminho_path = os.path.join(os.path.dirname(__file__))


def buscar_por_id(id_procurado, lista):
    for item in lista:
        if item['id'] == id_procurado:
            return item
    return None

def find_user(data):
    try:
        with open(caminho_path + "/../usuarios.json", "r") as arquivo:
            lista = json.load(arquivo)
    except FileNotFoundError:
        print("Arquivo não encontrado.")
        return False
    except json.JSONDecodeError:
        print("Erro ao decodificar o JSON.")
        return False
    resultado = buscar_por_id(data.id, lista)
    if resultado:
        return resultado
    return False
def create_user(request):
        arquivo = caminho_path+"/../usuarios.json"
        try:
            if os.path.exists(arquivo):
                with open(arquivo, 'r') as file:
                    usuarios = json.load(file)
            else:
                usuarios = []
        except json.JSONDecodeError:
            usuarios = []

        for u in usuarios:
            if u['email'] == request.email or u['telefone'] == request.telefone:
                return {
                    "status": "added"
                }

        if not validar_nome(request.nome):
            return "Nome inválido."
        if not validar_email(request.email):
            return "Email inválido."
        if not validar_telefone(request.telefone):
            return "Telefone inválido."

        usuario_dict = {
            "id": generate_md5_hash(request.nome+request.email+request.telefone+request.consulta),
            "nome": request.nome,
            "email": request.email,
            "telefone": request.telefone,
            "consulta": request.consulta
        }
        usuarios.append(usuario_dict)

        with open(arquivo, 'w') as file:
            json.dump(usuarios, file, indent=4)

        return {
            "status": "success",
            "message": "Usuário cadastrado com sucesso.",
            "id": usuario_dict["id"]
        }

def validar_nome(nome):
    if len(nome.split()) < 2:
        return False
    return True

def validar_email(email):
    padrao = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    return re.match(padrao, email) is not None

def validar_telefone(telefone):
    padrao = r'^\d{7,15}$'
    return re.match(padrao, telefone) is not None

