def make(error, message=None, response=None):
    """
    Make error or success API response.
    :param error: True if the response format has to be as an error, False otherwise.
    :param message: Error message.
    :param response: Success dictionary response.
    :return: API response.
    """
    response_dict = dict(error=error)
    if error:
        assert type(message) is str
        response_dict['message'] = message
    else:
        assert type(response) is dict
        response_dict['response'] = response
    return response_dict, 200


def get(attribute_name, json_response, default=None):
    """
    Retrieve attribute from a JSON response.
    :param attribute_name: Attribute name to get.
    :param json_response: JSON response.
    :param default: Value to return if the attribute is not found.
    :return: Attribute value.
    """
    return default if attribute_name not in json_response else json_response[attribute_name]
