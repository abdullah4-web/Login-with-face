import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'react-feather';
import ProcedureofTool from '../components/ui/ProcedureofTool';

const CreatePost = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const generatedContent = {
    title: 'Unleashing the Power of Python in Computer Vision: Tools, Libraries, and Real-World Projects',
    description:
      'Python stands as the most dominant language in Computer Vision, offering robust libraries, active communities, and cross-platform compatibility.',
    fullContent: `### Why Python for Computer Vision?

Python’s simple syntax and extensive library ecosystem make it the go-to language for Computer Vision. From object detection and face recognition to image segmentation and real-time tracking, Python makes it all approachable—even for beginners.

---

### 🧠 Core Libraries You Should Know:

1. **OpenCV**  
   - The most widely-used library for computer vision tasks.  
   - Capabilities: Image filtering, face detection, object tracking, edge detection.

2. **NumPy**  
   - Essential for manipulating image arrays and pixel data.

3. **Pillow (PIL)**  
   - Used for basic image processing such as resizing, cropping, and filtering.

4. **Scikit-Image**  
   - Great for educational and scientific image processing applications.

5. **MediaPipe**  
   - Developed by Google for real-time face mesh, pose, and hand tracking.

6. **TensorFlow/Keras & PyTorch**  
   - Deep learning libraries for building and training neural networks for advanced tasks like facial expression recognition or object classification.

---

### 💡 Project Ideas for All Levels

#### 🟢 Beginner:
- **Face Detection App using OpenCV**  
  Detect faces from webcam input using Haar cascades.

- **Image Filter Tool**  
  Apply grayscale, blur, edge detection filters using OpenCV.

- **Barcode and QR Code Scanner**  
  Scan and decode QR codes from images or live camera feed.

#### 🟡 Intermediate:
- **Facial Recognition System**  
  Register and verify users using \`face_recognition\` + OpenCV.

- **Image Caption Generator**  
  Use pre-trained CNNs + NLP models to describe images.

- **Color Detection App**  
  Detect specific colors in an image and highlight them.

#### 🔴 Advanced:
- **Real-time Object Detection**  
  Use YOLOv8 or SSD models for live object tracking.

- **Emotion Detection from Video**  
  Combine OpenCV and a CNN model to predict emotions based on facial expressions.

- **Gesture Controlled Interface**  
  Use hand landmarks from MediaPipe to control UI with gestures.

---

### 🚀 Final Thoughts

Computer Vision is revolutionizing industries from healthcare to retail. With Python, not only can you experiment and learn faster, but you can also build powerful AI-driven applications using just your webcam and a few hundred lines of code.

So pick a project, install the libraries, and start building the future—pixel by pixel!`,
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-6 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          {/* Toggle Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            </h1>
            <p className="mt-3 text-xl text-gray-600 dark:text-gray-400">
            </p>
          </div>

          {/* Article Content */}
          <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              {generatedContent.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{generatedContent.description}</p>
            <div className="prose dark:prose-invert max-w-none whitespace-pre-wrap text-gray-800 dark:text-gray-100">
              {generatedContent.fullContent}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default CreatePost;
