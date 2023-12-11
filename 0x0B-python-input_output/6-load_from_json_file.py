#!/usr/bin/python3
import json
"""
@author: Ricardo Sass
"""

"""Module containing the function load_from_json_file
"""

def load_from_json_file(filename):
    """Creates an Object from a “JSON file”.

    Args:
        filename (str): name of the file.

    Returns:
        object: object.
    """
    with open(filename, 'r', encoding="utf-8") as f:
        return json.load(f)
    