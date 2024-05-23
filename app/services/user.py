import json
import os
import re

caminho_path = os.path.join(os.path.dirname(__file__))
def create_user(request):
    try:
        arquivo = caminho_path+"/../usuarios.json"
        if os.path.exists(arquivo):
            with open(arquivo, 'r') as file:
                usuarios = json.load(file)
        else:
            usuarios = []

        for u in usuarios:
            if u['email'] == request.email:
                return f"Email {request.email} já cadastrado com o ID {u['id']}."

        if not validar_nome(request.nome):
            return "Nome inválido."
        if not validar_email(request.email):
            return "Email inválido."
        if not validar_telefone(request.telefone):
            return "Telefone inválido."

        usuario_dict = {
            "id": len(usuarios) + 1,
            "nome": request.nome,
            "email": request.email,
            "telefone": request.telefone,
            "consulta": request.consulta
        }
        usuarios.append(usuario_dict)

        with open(arquivo, 'w') as file:
            json.dump(usuarios, file, indent=4)

        return 200
    except Exception as e:
        print(e)
        return False

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

