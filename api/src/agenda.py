import connexion

from flask import Response
from flask_cors import CORS

from src.config import DOCS_HTML_FILE_PATH
from src.db import sqlalchemy


connexion_app = connexion.FlaskApp(__name__, specification_dir='./openapi/')
flask_app = connexion_app.app
flask_app.config['JSON_AS_ASCII'] = False
connexion_app.add_api('openapi.yaml', arguments={'title': 'Agenda API'})
CORS(flask_app)


@flask_app.teardown_appcontext
def shutdown_session(exception=None):
    print(f'Session removed: {exception}')
    sqlalchemy.db_session.remove()


@flask_app.route('/')
def alive_check():
    return 'Welcome to Agenda API!', 200


@flask_app.route('/docs')
def docs():
    with open(DOCS_HTML_FILE_PATH, 'r') as html_file:
        html_content = str(html_file.read())
    response = Response(html_content)
    response.headers['Content-Type'] = 'text/html'
    return response, 200
