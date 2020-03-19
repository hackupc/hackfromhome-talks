from flask import jsonify

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
    return 'OK', 201


def put(contact_id):
    return 'OK', 200


def delete(contact_id):
    return 'OK', 204
