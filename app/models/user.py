from Challenge.app.services.user import create_user

def create(request):
    response = create_user(request)
    if(response == False):
        return 'fail', 400
    return response
