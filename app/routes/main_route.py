from flask import Blueprint, jsonify, request
from app.controllers.map_render_controller import map_generator
from app.services.util.log import save_data_to_json as log

main = Blueprint('main', __name__)

@main.before_request
def log_request():
    log(request)

@main.route('/', methods=['POST'])
def map_generate():
    return jsonify(map_generator(request))