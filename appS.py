from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/rain')
def rain():
    return render_template('rain.html')

if __name__ == "__main__":
    app.run(ssl_context=('certs/cert.crt','certs/key.key'), debug=True, host='0.0.0.0', port=443)