from flask import Flask, render_template, url_for
from data import my_data

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html", name='Rapunzel')


@app.route("/api/person")
# returns the data from the file /data/my_data.py
def api_person():
    return my_data.person()


@app.route('/<string:page_name>/')
def static_page(page_name):
    return url_for('static', filename=page_name)


with app.test_request_context():
    print(url_for('index'))
    print(url_for('api_person'))

if __name__ == "__main__":
    app.run(host='localhost', port=5000, debug=True)
