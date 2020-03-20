from flask import request

from src.helper import response
from src.service import contact as contact_service


def get(contact_id=None):
    """
    Retrieves all the contacts or a certain one given its identifier.
    :param contact_id: Contact identifier.
    :return: List of contacts.
    """
    try:
        if contact_id is None:
            contact_list = contact_service.get_all()
            return response.make(error=False, response=contact_list), 200
        else:
            contact = contact_service.get_contact(contact_id)
            if contact:
                return response.make(error=False, response=contact), 200
            else:
                return response.make(error=True, message='Contact not found.'), 200
    except Exception as e:
        return response.make(error=True, message=f'Unexpected error: [{e}]'), 200


def post():
    """
    Adds a new contact given its information.
    :return: Contact added.
    """
    try:
        request_json = request.json
        name = response.get('name', request_json)
        last_name = response.get('last_name', request_json)
        image_url = response.get('image_url', request_json)
        address = response.get('address', request_json)
        phone_number = response.get('phone_number', request_json)
        email = response.get('email', request_json)
        if not all([name, last_name, image_url, address, phone_number, email]):
            return response.make(error=True, message='There are some required parameters missing.'), 200

        contact_id = contact_service.add(name, last_name, image_url, address, phone_number, email)
        if contact_id:
            return response.make(error=False, response=dict(id=contact_id)), 201
        else:
            return response.make(error=True, message='Contact could not be created.'), 200
    except Exception as e:
        return response.make(error=True, message=f'Unexpected error: [{e}]'), 200


def put(contact_id):
    """
    Modifies a existing contact given its new information.
    :param contact_id: Contact identifier.
    :return: Contact modified.
    """
    try:
        request_json = request.json
        name = response.get('name', request_json)
        last_name = response.get('last_name', request_json)
        image_url = response.get('image_url', request_json)
        address = response.get('address', request_json)
        phone_number = response.get('phone_number', request_json)
        email = response.get('email', request_json)
        contact_edited = contact_service.edit(contact_id, name, last_name, image_url, address, phone_number, email)
        if contact_edited:
            return response.make(error=False, response=dict(modified=True)), 201
        else:
            return response.make(error=False, response=dict(modified=False)), 204
    except Exception as e:
        return response.make(error=True, message=f'Unexpected error: [{e}]'), 200


def delete(contact_id):
    """
    Deletes a certain contact given its identifier.
    :param contact_id: Contact identifier.
    :return: Contact deleted.
    """
    try:
        contact_deleted = contact_service.delete(contact_id)
        if contact_deleted:
            return response.make(error=False, response=dict(deleted=True)), 201
        else:
            return response.make(error=False, response=dict(deleted=False)), 204
    except Exception as e:
        return response.make(error=True, message=f'Unexpected error: [{e}]'), 200
