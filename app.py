from flask import Flask, render_template
app = Flask(__name__)



@app.route("/")
def index():
    return "Hello, world!"

@app.route('python here', methods=['GET', 'POST'])
def cputemp():
    mytemp1 = commands.getoutput('')
    return render_template("python here", temp=mytemp1)


@app.route('/test', methods=['GET', 'POST'])
def test():
    return render_template("test.html")

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)