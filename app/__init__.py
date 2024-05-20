from flask import Flask
def create_app():
    app = Flask(__name__)
    from app.routes import register_routes
    register_routes(app)

    return app
