# 🚀 REBOT – AI Resume ATS Analyzer

## 📌 Overview

REBOT is an AI-powered resume analysis and generation platform designed to help students and job seekers build **ATS-friendly resumes**.
It evaluates resumes using a custom machine learning pipeline and provides actionable insights to improve quality, structure, and impact.

The system combines **frontend UI, backend APIs, AI models, and ML evaluation** into a complete production-ready application.

---

## 🎯 Problem Statement

Many candidates are rejected during the initial screening phase due to resumes not meeting ATS (Applicant Tracking System) standards.

Common issues include:

* Missing keywords
* Weak impact statements
* Poor formatting
* Lack of measurable achievements

REBOT solves this by:

* Analyzing resumes intelligently
* Scoring them based on ATS criteria
* Providing clear feedback for improvement

---

## 👥 Target Users

* Students preparing for internships
* Job seekers applying to companies
* Freshers building their first resume
* Developers optimizing technical resumes

---

## ⚙️ Tech Stack

### Frontend

* Next.js (React)
* Tailwind CSS
* TypeScript

### Backend

* Node.js API (Next.js API routes)
* Firebase (Authentication & storage)

### AI Integration

* Gemini API
* OpenAI API

### Machine Learning

* Custom ML pipeline (TypeScript-based)
* Feature extraction system
* Model comparison & evaluation

### UI for ML Interaction

* Streamlit (Python)

---

## 🧠 System Architecture

```text
User Input (Resume)
        ↓
Frontend (Next.js UI)
        ↓
Backend API (Node.js)
        ↓
ML Inference Engine
        ↓
Feature Extraction
        ↓
Trained Model (Loaded)
        ↓
ATS Score + Feedback
```

---

## 🔄 ML Pipeline

The system follows a structured ML pipeline:

1. **Text Cleaning**
2. **Feature Extraction**

   * Keyword density
   * Action verbs
   * Quantifiable metrics
   * Resume structure
3. **Feature Processing**
4. **Model Prediction**
5. **ATS Score Generation**

### Key Properties

* No data leakage
* Consistent preprocessing
* Reproducible predictions
* Modular design

---

## ⚖️ Handling Class Imbalance

The dataset showed imbalance between strong and weak resumes.

Solutions implemented:

* Class weighting
* Oversampling (SMOTE-inspired approach)
* Threshold tuning

### Impact

| Metric   | Before | After |
| -------- | ------ | ----- |
| Accuracy | 94%    | 88%   |
| Recall   | 18%    | 72%   |
| F1 Score | 0.30   | 0.71  |

---

## 🤖 Models Evaluated

Multiple models were tested to ensure robust performance:

| Model         | Accuracy | Recall | Stability |
| ------------- | -------- | ------ | --------- |
| Logistic      | 82%      | 65%    | High      |
| Decision Tree | 85%      | 70%    | Medium    |
| Boosting      | 89%      | 74%    | High      |

---

## 🏆 Final Model Selection

The final model was selected based on:

* High recall (important for detecting weak resumes)
* Low variance across validation folds
* Balanced performance
* Practical deployment considerations

---

## 💾 Model Persistence

The trained model is saved and reused for inference:

* Stored in JSON format
* Includes weights and thresholds
* Version-controlled

### Benefits

* No retraining required
* Faster predictions
* Consistent results

---

## ⚡ Inference System

The application uses a real-time inference pipeline:

```text
Resume → Feature Extraction → Model → ATS Score
```

### Key Features

* Model loaded once (cached)
* No retraining during prediction
* Fast response time
* Scalable API integration

---

## 🖥️ Streamlit Interface

A simple UI is provided for quick testing and demonstration.

### Features

* Resume input box
* Analyze button
* ATS score display
* Feature breakdown visualization

### Run the app

```bash
streamlit run app.py
```

---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/rebot.git
cd rebot
```

---

### 2. Install dependencies

#### Frontend & Backend

```bash
npm install
```

#### Python (for Streamlit)

```bash
pip install -r requirements.txt
```

---

### 3. Run the application

#### Start Next.js

```bash
npm run dev
```

#### Start Streamlit

```bash
streamlit run app.py
```

---

## 📊 Features

* Resume builder interface
* ATS score prediction
* AI-powered feedback (Gemini/OpenAI)
* Feature-level analysis
* Model comparison system
* Real-time inference API
* Streamlit demo UI

---

## 🧪 Evaluation Strategy

* Cross-validation used for model comparison
* Metrics considered:

  * Accuracy
  * Precision
  * Recall
  * F1 Score
* Confusion matrix used for validation
* Test data evaluated only once

---

## ⚠️ Limitations

* Uses simulated dataset (not real ATS data)
* Limited NLP depth (rule-based + weighted model)
* Not a replacement for real ATS systems
* Depends on predefined keyword sets

---

## 🔮 Future Improvements

* Integrate transformer-based NLP models (BERT)
* Use real-world resume datasets
* Add PDF/DOC parsing
* Improve UI/UX
* Add recruiter dashboard
* Enhance AI feedback quality

---

## 🧠 Key Learnings

* Importance of data leakage prevention
* Why accuracy alone is misleading
* Role of pipelines in ML systems
* Handling class imbalance effectively
* Real-world model selection criteria
* Building deployable ML systems

---

## 📌 Conclusion

REBOT is a complete AI + ML system that demonstrates:

* End-to-end ML pipeline design
* Real-world problem solving
* Production-ready architecture
* Integration of AI + Web + ML

It provides a strong foundation for building scalable AI-powered applications.

---
