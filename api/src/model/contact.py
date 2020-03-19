import sqlalchemy as db

from src.db.sqlalchemy import Base


class Contact(Base):

    __tablename__ = 'agenda_contact'

    id = db.Column(db.Integer, db.Sequence('agenda_contact_id_seq', start=1, increment=1), primary_key=True)
    name = db.Column(db.String(128), nullable=False)
    last_name = db.Column(db.String(128), nullable=False)
    image_url = db.Column(db.String(128), nullable=False)
    address = db.Column(db.String(128), nullable=False)
    phone_number = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(128), nullable=False)

    def serialize(self):
        return dict(
            id=self.id,
            name=self.name,
            last_name=self.last_name,
            image_url=self.image_url,
            address=self.address,
            phone_number=self.phone_number,
            email=self.email
        )
