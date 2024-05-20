from collections import deque
import numpy as np
from PIL import Image
import base64
import os
import io

caminho_path = os.path.join(os.path.dirname(__file__))

def generate_map(destino):
    caminho(destino)
    array_resultante = carregar_array_de_txt(caminho_path+'/../maps/map_com_caminho.txt')
    gerar_imagem_de_array(array_resultante,caminho_path+ '/../maps/imagem_gerada_a_partir_do_txt.jpg')
    return image_to_base64(caminho_path+'/../maps/imagem_gerada_a_partir_do_txt.jpg')

def carregar_array_de_txt_e_converter_para_lista(caminho_arquivo):
    with open(caminho_arquivo, 'r') as file:
        lista_de_listas = [list(linha.strip()) for linha in file.readlines()]
    return lista_de_listas

def salvar_mapa_em_txt(mapa, caminho_arquivo):
    with open(caminho_arquivo, 'w') as file:
        for linha in mapa:
            file.write(''.join(linha) + '\n')

def encontrar_inicio_e_destinos(mapa):
    destinos = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q']
    inicio = None
    posicoes_destinos = {}
    for i, linha in enumerate(mapa):
        for j, valor in enumerate(linha):
            if valor == 'P':
                inicio = (i, j)
            elif valor in destinos:
                posicoes_destinos[valor] = (i, j)
    return inicio, posicoes_destinos

def bfs_encontrar_caminho(mapa, inicio, destino):
    direcoes = [(0, 1), (0, -1) , (-1, 0), (1, 0)]
    filacaminho = deque([(inicio, [])])
    visitado = set([inicio])

    while filacaminho:
        (x, y), caminho = filacaminho.popleft()
        if mapa[x][y] == destino:
            return caminho + [(x, y)]
        for dx, dy in direcoes:
            nx, ny = x + dx, y + dy
            if 0 <= nx < len(mapa) and 0 <= ny < len(mapa[0]) and (mapa[nx][ny] == '1' or mapa[nx][ny] == destino) and (nx, ny) not in visitado:
                visitado.add((nx, ny))
                filacaminho.append(((nx, ny), caminho + [(nx, ny)]))
    return None

def marcar_caminho(mapa, caminho, letra):
    for k, (x, y) in enumerate(caminho):
        mapa[x][y] = letra
        if k > 0:
            x_prev, y_prev = caminho[k - 2]
            if x == x_prev:
                if x > 0:
                    mapa[x - 1][y] = letra
                if x < len(mapa) - 1:
                    mapa[x + 1][y] = letra
            elif y == y_prev:
                if y > 0:
                    mapa[x][y - 1] = letra
                if y < len(mapa[0]) - 1:
                    mapa[x][y + 1] = letra
    return mapa

def carregar_array_de_txt(caminho_txt):
    with open(caminho_txt, 'r') as file:
        linhas = file.readlines()

    array = [list(linha.strip()) for linha in linhas]
    return np.array(array)


def gerar_imagem_de_array(np_imagem_binaria, caminho_saida_imagem):
    altura, largura = np_imagem_binaria.shape
    imagem = Image.new('RGB', (largura, altura))

    for i in range(altura):
        for j in range(largura):
            valor = np_imagem_binaria[i, j]
            if valor == '2':
                imagem.putpixel((j, i), (255, 255, 255))
            elif valor == '0':
                imagem.putpixel((j, i), (0, 0, 0))
            elif valor == '1':
                imagem.putpixel((j, i), (255, 255, 255))
            elif valor == '3':
                imagem.putpixel((j, i), (0, 255, 0))
            elif valor == 'P':
                imagem.putpixel((j, i), (0, 0, 255))
            else:
                imagem.putpixel((j, i), (255, 0, 0))
    imagem.save(caminho_saida_imagem)

def caminho(destino):
    print(os.path.dirname(__file__))
    mapa = carregar_array_de_txt_e_converter_para_lista(caminho_path+'/../maps/map.txt')

    inicio, posicoes_destinos = encontrar_inicio_e_destinos(mapa)

    if destino in posicoes_destinos:
        caminho = bfs_encontrar_caminho(mapa, inicio, destino)
        if caminho:
            mapa = marcar_caminho(mapa, caminho, destino)
            mapa[inicio[0]][inicio[1]] = 'P'
            salvar_mapa_em_txt(mapa, caminho_path+'/../maps/map_com_caminho.txt')

def image_to_base64(image_path):
    try:
        with open(image_path, "rb") as image_file:
            image_data = image_file.read()
            encoded_string = base64.b64encode(image_data).decode('utf-8')
        return encoded_string
    except Exception as e:
        print(f"Erro ao processar a imagem: {e}")
        return None

def destiny_chose(destiny):
    match destiny:
        case 'A':
            return "Cardiologista"
        case 'B':
            return "Raio-X"
        case 'C':
            return "Oncologia"
        case 'D':
            return "Pediatria"
        case 'E':
            return "Ginecologia"
        case 'F':
            return "Dermatologia"
        case 'G':
            return "Oftalmologia"
        case 'H':
            return "Ortopedia"
        case 'I':
            return "Neurologia"
        case 'J':
            return "Psiquiatria"
        case 'K':
            return "Urologia"
        case 'L':
            return "Gastroenterologia"
        case 'M':
            return "Endocrinologia"
        case 'N':
            return "Nefrologia"
        case 'O':
            return "Otorrinolaringologia"
        case 'P':
            return "Entrada"
        case 'Q':
            return "Imunologia"
        case _:
            return "Sala desconhecida"
