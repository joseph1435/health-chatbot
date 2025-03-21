from flask import Flask, render_template, request, jsonify
import random

app = Flask(__name__)

# Improved health-related responses
def get_response(user_input):
    user_input = user_input.lower()

    greetings = ["hello", "hi", "hey", "good day", "good morning", "good afternoon"]
    symptoms = ["headache", "fever", "cough", "cold", "tired", "pain"]
    advice_keywords = ["advice", "recommendation", "help", "what should i do"]

    if any(word in user_input for word in greetings):
        return random.choice([
            "👋 Hello! I'm your Health Assistant. How can I support your well-being today?",
            "Hi there! 😊 I'm here to assist you with health-related concerns.",
            "Welcome! 💬 Feel free to ask me about symptoms, wellness tips, or anything health-related."
        ])
    
    if any(symptom in user_input for symptom in symptoms):
        return "I'm sorry to hear you're not feeling well. 🩺 It's best to rest, stay hydrated, and consider seeing a healthcare provider if symptoms persist."

    if any(keyword in user_input for keyword in advice_keywords):
        return "Of course! 🌿 Maintaining a balanced diet, staying active, and getting enough sleep are great ways to support your health."

    if "thank" in user_input:
        return "You're welcome! 😊 Stay healthy and feel free to reach out anytime."

    return "Hmm, I'm not sure how to help with that just yet. 🤖 You can ask me about symptoms, tips for staying healthy, or general wellness advice."

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/get", methods=["GET"])
def get_bot_response():
    user_text = request.args.get("msg")
    response = get_response(user_text)
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
