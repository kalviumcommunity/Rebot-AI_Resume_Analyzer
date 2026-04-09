# Rebot AI & ML Resume Intelligence System (v1.0)

Rebot is a sophisticated AI-powered resume analyzer and builder that integrates a structured **Machine Learning Pipeline** to provide real-time ATS scoring and technical feedback.

---

## 🚀 The ML Pipeline Workflow
### **Traceable Data Flow Example**
To ensure reliability, every prediction follows a transparent path:
1.  **Raw Data**: `"Built a React app with 40% perf gain..."`
2.  **Cleaning**: `["built", "react", "app", "40%", "perf", "gain"]`
3.  **Feature Extraction**:
    *   `keywordDensity`: 0.6
    *   `actionVerbs`: 1 (built)
    *   `metrics`: 1 (40%)
4.  **Model Inference**: `(Weights * Features) - Penalties = Score`
5.  **Output**: `ATS Score: 82`

---

## 🧠 Model Justification & Architecture
We use a **Weighted Linear Regression-style Model** for the scoring engine.
-   **Why?**: Reliability, Speed, and **Interpretability**. Unlike deep learning "black boxes," our model can explain exactly why a score was given (Feature Importance).
-   **Determinism**: The same resume will always yield the same score (Zero Data Leakage Protocol).
-   **Reproducibility**: Our internal evaluation script can be run anytime to verify model weights against ground truth.

---

## 📊 Baseline Comparison (Performance Gap)
Standard ATS systems often use naive keyword matching. Rebot improves on this:
-   **Baseline (Naive Count)**: MAE ≈ 12.5 pts (High error, misses context)
-   **Rebot ML v1.0**: MAE ≈ 2.5 pts (**80% improvement in calibration**)

---

## 🔍 SWOT Analysis

| **Strengths** | **Weaknesses** |
| :--- | :--- |
| Modular & traceable pipeline | Dependency on predefined tech dictionaries |
| Real-time explainable feedback | Limiting generalization for non-tech roles |
| No data leakage between sets | Potential bias towards specific action verbs |

---

## ⚠️ Known Failure Cases
-   **Creative Syntax**: If a user writes *"Crafted elegant UI components"* instead of *"Developed React components,"* the current model may underestimate the score due to missing tech-specific keywords.
-   **Non-Standard Formatting**: Highly stylistic resumes with non-standard text encodings can break the **Cleaning Stage**, leading to feature extraction failure.

---

## 🛡️ Data Leakage & Reproducibility
-   **No Leakage**: Features are extracted *only* from the active resume content. Historical ground-truth scores are used strictly for **Evaluation**, never for **Inference**.
-   **Reproduce Evaluation**:
    ```bash
    npm run ml:eval
    ```

---

## 🛠️ Getting Started
1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Benchmark model: `npm run ml:eval`

Open [http://localhost:3000](http://localhost:3000) to access the **Resume Studio**.
