from types import SimpleNamespace
import json

from Challenge.app.models.user import create

def create_user(request):
    data_object = json.loads(json.dumps(request.get_json()), object_hook=lambda d: SimpleNamespace(**d))
    return create(data_object)
