from Challenge.app.services.map import generate_map
from Challenge.app.services.map import destiny_chose
from Challenge.app.services.user import find_user

def get_data(data):
    data_user = find_user(data)
    print(data_user)
    if not data_user:
        return 'User not found'

    return {
        'destiny': destiny_chose(data_user['consulta']),
        'imagem': generate_map(data_user['consulta'])
    }
