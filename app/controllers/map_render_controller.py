from Challenge.app.models.map_render import get_data
from types import SimpleNamespace
import json

def map_generator(request):
    data_object = json.loads(json.dumps(request.get_json()), object_hook=lambda d: SimpleNamespace(**d))
    return get_data(data_object)
