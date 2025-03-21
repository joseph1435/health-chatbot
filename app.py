from flask import Flask, render_template, request, jsonify
import os

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    user_input = request.json.get("message", "")
    response = get_bot_response(user_input)
    return jsonify({"reply": response})

def get_bot_response(message):
    message = message.lower()
    if "hello" in message or "hi" in message:
        return "Hello! How can I assist you with your health today?"
    elif "headache" in message:
        return "Sorry to hear that! Have you had enough rest and water? You might also take a mild pain reliever."
    elif "thank you" in message:
        return "You're welcome! Stay healthy 😊"
    else:
        return "I'm not sure how to respond to that. Could you please rephrase?"

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))  # Use Render’s PORT environment variable
    app.run(host="0.0.0.0", port=port, debug=True)
