from flask import jsonify
from time import gmtime, strftime


def person():
    fname = 'John'
    sname = 'Doe'
    id = 1
    time = strftime("%a, %d %b %Y %H:%M:%S +0000", gmtime())
    return jsonify({'firstName': fname, 'surName': sname, 'id': id,
                    'time': time})
   