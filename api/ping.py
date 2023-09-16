from flask import Flask

app = Flask('ping')

@app.route('/ping', methods=['GET'])
def ping():
    return "GET AWAY!

if __name__ == "__main__":
        app.run(host="0.0.0.0")