from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
import os

app = Flask(__name__)
CORS(app)  # allow requests from frontend

FACES_DIR = 'faces'  # stored known faces
os.makedirs(FACES_DIR, exist_ok=True)

def read_image(file):
    file_bytes = np.frombuffer(file.read(), np.uint8)
    img = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)
    return img

def detect_and_crop_face(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    faces = face_cascade.detectMultiScale(gray, 1.3, 5)
    
    if len(faces) == 0:
        return None
    
    (x, y, w, h) = faces[0]
    return image[y:y+h, x:x+w]

def compare_faces(img1, img2):
    # Convert to grayscale
    img1 = cv2.resize(img1, (100, 100))
    img2 = cv2.resize(img2, (100, 100))
    
    diff = cv2.absdiff(img1, img2)
    score = np.mean(diff)
    return score < 50  # threshold can be adjusted

@app.route('/login', methods=['POST'])
def login():
    if 'image' not in request.files or 'username' not in request.form:
        return jsonify({'error': 'Missing image or username'}), 400

    uploaded_img = read_image(request.files['image'])
    username = request.form['username']
    
    cropped = detect_and_crop_face(uploaded_img)
    if cropped is None:
        return jsonify({'error': 'No face detected'}), 400

    reference_path = os.path.join(FACES_DIR, f"{username}.jpg")
    if not os.path.exists(reference_path):
        return jsonify({'error': 'User not registered'}), 404

    ref_img = cv2.imread(reference_path)
    if ref_img is None:
        return jsonify({'error': 'Corrupt reference image'}), 500

    if compare_faces(cropped, ref_img):
        return jsonify({'message': 'Login successful!'}), 200
    else:
        return jsonify({'message': 'Face does not match'}), 401

@app.route('/register', methods=['POST'])
def register():
    if 'image' not in request.files or 'username' not in request.form:
        return jsonify({'error': 'Missing image or username'}), 400

    uploaded_img = read_image(request.files['image'])
    username = request.form['username']
    
    cropped = detect_and_crop_face(uploaded_img)
    if cropped is None:
        return jsonify({'error': 'No face detected'}), 400

    save_path = os.path.join(FACES_DIR, f"{username}.jpg")
    cv2.imwrite(save_path, cropped)

    return jsonify({'message': f'User {username} registered successfully!'}), 201

if __name__ == '__main__':
    app.run(debug=True, port=5000)
