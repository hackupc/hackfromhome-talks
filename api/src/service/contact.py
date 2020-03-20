from src.db.sqlalchemy import db_session
from src.model.contact import Contact


def get_all():
    """
    Get all contacts.
    :return: List of contacts serialized.
    """
    return [contact.serialize() for contact in db_session().query(Contact).all()]


def get_contact(contact_id):
    """
    Get contact given its identifier.
    :param contact_id: Contact identifier.
    :return: Contact serialized.
    """
    contact = db_session().query(Contact).filter_by(contact_id=contact_id).first()
    if contact:
        return contact.serialize()
    else:
        return None


def add(name, last_name, image_url, address, phone_number, email):
    """
    Add a contact given all its information.
    :param name: Contact name.
    :param last_name: Contact last name.
    :param image_url: Image URL.
    :param address: Postal address.
    :param phone_number: Phone number.
    :param email: Email address.
    :return: Identifier of the contact added.
    """
    contact = Contact(name, last_name, image_url, address, phone_number, email)
    db_session().add(contact)
    db_session().commit()
    contact_id = contact.id
    return contact_id


def edit(contact_id, name=None, last_name=None, image_url=None, address=None, phone_number=None, email=None):
    """
    Edit a contact given its identifier and the new information.
    :param contact_id: Contact identifier.
    :param name: New contact name, if needed.
    :param last_name: Mew contact last name, if needed.
    :param image_url: New Image URL, if needed.
    :param address: New postal address, if needed.
    :param phone_number: New phone number, if needed.
    :param email: New email address, if needed.
    :return: True if the contact was edited successfully, False otherwise.
    """
    contact = db_session().query(Contact).filter_by(contact_id=contact_id).first()
    if contact:
        contact.name = contact.name if name is None else name
        contact.last_name = contact.last_name if last_name is None else last_name
        contact.image_url = contact.image_url if image_url is None else image_url
        contact.address = contact.address if address is None else address
        contact.phone_number = contact.phone_number if phone_number is None else phone_number
        contact.email = contact.email if email is None else email
        db_session().commit()
        return True
    else:
        return False


def delete(contact_id):
    """
    Delete a contact given its identifier.
    :param contact_id: Contact identifier.
    :return: True if the contact was deleted successfully, False otherwise.
    """
    contact = db_session().query(Contact).filter_by(contact_id=contact_id).first()
    if contact:
        contact.delete()
        return True
    else:
        return False
