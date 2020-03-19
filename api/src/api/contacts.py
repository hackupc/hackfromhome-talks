from flask import jsonify, request

from src.helper import response
from src.service import contact as contact_service


def get(contact_id=None):
    if contact_id is None:
        contact_list = contact_service.get_all()
        return jsonify(response.make(error=False, response=contact_list)), 200
    else:
        contact = contact_service.get_contact(contact_id)
        if contact:
            return jsonify(response.make(error=False, response=contact)), 200
        else:
            return jsonify(response.make(error=True, message='Contact not found.')), 200


def post():
    request_json = request.json
    name = response.get('name', request_json)
    last_name = response.get('last_name', request_json)
    image_url = response.get('image_url', request_json)
    address = response.get('address', request_json)
    phone_number = response.get('phone_number', request_json)
    email = response.get('email', request_json)
    if not all([name, last_name, image_url, address, phone_number, email]):
        return jsonify(response.make(error=True, message='There are some required parameters missing.')), 200

    contact_id = contact_service.add(name, last_name, image_url, address, phone_number, email)
    if contact_id:
        return jsonify(response.make(error=False, response=dict(id=contact_id))), 201
    else:
        return jsonify(response.make(error=True, message='Contact could not be created.')), 200


def put(contact_id):
    return 'OK', 200


def delete(contact_id):
    return 'OK', 204
