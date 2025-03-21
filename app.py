from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    user_input = request.json.get("message")
    # Dummy logic for now
    if "headache" in user_input.lower():
        response = "Try drinking water and resting. If it persists, see a doctor."
    else:
        response = "I'm a basic bot for now. Try asking about headaches!"
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)
