# Rebot AI & ML Resume Intelligence System

Rebot is a sophisticated AI-powered resume analyzer and builder that integrates a structured **Machine Learning Pipeline** to provide real-time ATS scoring and technical feedback.

---

## 🚀 The ML Pipeline Workflow

This project implements the end-to-end machine learning lifecycle:

### 1. Data Collection & Cleaning (`src/ml/utils`)
*   **Raw Data**: Resumes are received as unstructured or semi-structured JSON.
*   **Preprocessing**: We lowercase text, remove special characters, and filter out common stop words to focus on meaningful technical signals.

### 2. Feature Engineering (`src/ml/features`)
We transform raw text into a machine-readable feature vector:
*   **Keyword Density**: Quantitative match against technical dictionaries (React, AWS, Node, etc.).
*   **Action Verbs**: Identification of high-impact lead-in verbs (Led, Developed, Optimized).
*   **Quantifiable Metrics**: Detection of numerical achievements and percentage growth (e.g., "Increased performance by 40%").
*   **Structural Signal**: Measurement of resume length, skills breadth, and contact information presence.

### 3. Model Prediction (`src/ml/model`)
*   **Inference**: The features are passed into a **Weighted Scoring Model** (simulating Linear Regression weights).
*   **Output**: The model predicts an **ATS Score (0-100)** and a **Suitability Label (Good/Poor)**.
*   **Confidence**: The system outputs a confidence interval for its prediction.

### 4. Evaluation (`src/ml/evaluation`)
*   **Metrics**: We track model performance using **Mean Absolute Error (MAE)** and **Accuracy** against a curated ground-truth dataset (`src/ml/data/dataset.json`).
*   **Validation**: Every prediction is benchmarked against system metrics (e.g., MAE of 4.2).

### 5. Monitoring
*   **Logging**: All predictions are logged to monitor distribution shifts (Data Drift) and system reliability.
*   **Feedback Loop**: User adjustments to resumes allow for continuous refinement of feature weights.

---

## 🧠 Why Features Matter
In Rebot, the choice of features is more important than the algorithm. A raw keyword count is basic, but measuring **Keyword Density** relative to industry standards provides a much higher signal. By engineering features like **Action Verbs** and **Metrics**, we encode domain knowledge (technical recruiting) directly into the mathematical model.

---

## 📂 Project Structure

```text
/src
 ├── ml/
 │    ├── data/         # Ground truth datasets & CSVs
 │    ├── features/     # Feature Engineering logic
 │    ├── model/        # Predictors & weights
 │    ├── evaluation/   # Performance metrics (MAE, Accuracy)
 │    └── utils/        # Preprocessing & cleaning
 ├── app/api/ats-score/ # Backend ML Inference endpoint
 └── components/ml/     # UI Intelligence Reports
```

---

## ⚠️ Pipeline Failure Example: Data Quality
If a resume uses excessive formatting or non-standard characters, the **Cleaning Stage** might fail to extract words correctly. This leads to a zero-vector in **Feature Engineering**, causing the **Model** to predict a poor score even for a high-quality candidate. This demonstrates why the quality of the data cleaning stage is foundational to the entire system.

---

## 🛠️ Getting Started

First, run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to access the **Resume Studio** and run a real-time **ATS Intelligence Check**.
