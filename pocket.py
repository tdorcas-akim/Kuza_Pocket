from flask import Flask, request, jsonify, render_template
import hashlib
import time

app = Flask(__name__)

# Settings
SECRET_KEY = "kuza_secret_777" 
VENDOR_ID = "VND_001"

def make_secure_code(amount):
    # 240 seconds = 4 minutes. The code stays the same for 4 mins.
    time_block = int(time.time() // 240)
    # Mixing everything to create a unique digital signature
    raw_str = f"{amount}{VENDOR_ID}{SECRET_KEY}{time_block}"
    hash_hex = hashlib.sha256(raw_str.encode()).hexdigest()
    # Getting a simple 4-digit number from the hash
    return str(int(hash_hex[-4:], 16))[-4:].zfill(4)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/get-code', methods=['POST'])
def get_code():
    data = request.json
    amount = data.get('amount')
    code = make_secure_code(amount)
    return jsonify({"code": code})

@app.route('/api/check-code', methods=['POST'])
def check_code():
    data = request.json
    amount = data.get('amount')
    typed_code = data.get('code')
    
    correct_code = make_secure_code(amount)
    
    if typed_code == correct_code:
        return jsonify({"success": True, "message": "Verified!"})
    else:
        return jsonify({"success": False, "message": "Wrong code!"})

if __name__ == '__main__':
    app.run(debug=True)