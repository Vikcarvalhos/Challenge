from app.services.user import create_user

def create(request):
    response = create_user(request)
    if(response == False):
        return {
            "status": "error"
        }
    return response
