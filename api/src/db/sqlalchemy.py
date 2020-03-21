from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker

from src.config import DB_USER, DB_PASSWORD, DB_DB, DB_HOST, DB_PORT


def connect(user, password, database, host, port):
    """
    Connect to the PostgresSQL database.
    :param user: Database user.
    :param password: User password.
    :param database: Database name.
    :param host: Host name.
    :param port: Port number.
    :return: Database engine and meta.
    """
    url_string = 'postgresql://{}:{}@{}:{}/{}'
    url = url_string.format(user, password, host, port, database)
    _engine = create_engine(url, client_encoding='utf8')
    _meta = MetaData(bind=_engine, reflect=True)
    return _engine, _meta


# Connect to the database.
engine, meta = connect(DB_USER, DB_PASSWORD, DB_DB, DB_HOST, DB_PORT)
db_session = scoped_session(sessionmaker(bind=engine))

# Declare base.
Base = declarative_base()
Base.query = db_session.query_property()
