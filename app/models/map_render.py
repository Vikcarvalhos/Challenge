from app.services.map import generate_map
from app.services.map import destiny_chose

def get_data(data):
    return {
        'destiny': destiny_chose(data.caminho),
        'imagem': generate_map(data.caminho)
    }
