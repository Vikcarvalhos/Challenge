from app.services.map import generate_map
from app.services.map import destiny_chose
from app.services.user import find_user
from datetime import datetime, timedelta

def get_data(data):
    data_user = find_user(data)
    if not data_user:
        return 'User not found'
    data_amanha = datetime.now() + timedelta(days=1)
    return {
        'destiny': destiny_chose(data_user['consulta']),
        'imagem': generate_map(data_user['consulta']),
        'nome': data_user['nome'],
        'date': data_amanha.strftime('%d/%m/%Y'),
    }
