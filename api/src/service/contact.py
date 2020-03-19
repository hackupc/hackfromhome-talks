from src.db.sqlalchemy import db_session
from src.model.contact import Contact


def get_all():
    return db_session().query(Contact).all()


def get_contact(contact_id):
    return db_session().query(Contact).filter_by(contact_id=contact_id).first()


def add(name, last_name, image_url, address, phone_number, email):
    contact = Contact(name, last_name, image_url, address, phone_number, email)
    db_session().add(contact)
    db_session().commit()
    contact_id = contact.id
    return contact_id


def edit(contact_id, name=None, last_name=None, image_url=None, address=None, phone_number=None, email=None):
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
    contact = db_session().query(Contact).filter_by(contact_id=contact_id).first()
    if contact:
        contact.delete()
        return True
    else:
        return False
