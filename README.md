# Rebot AI & ML Resume Intelligence System (v1.0)

Rebot is a professional AI-powered resume analyzer and builder that integrates a structured **Production-Grade Machine Learning Pipeline** to provide real-time ATS scoring and technical feedback.

---

## 🏗️ Hybrid ML System (Milestone 5.12 & 5.13)

Rebot operates as a **Hybrid Supervised Learning System**, combining Regression and Classification to maximize both precision and interpretability.

---

### 📈 Problem Type: Regression
- **Definition**: The core of the system is a regression problem because it predicts a continuous numerical value (ATS Score 0-100).
- **Metric**: Measured via **Mean Absolute Error (MAE)**.

### 🏷️ Problem Type: Classification
- **Definition**: To improve user interpretability, we add a classification layer that categorizes the output into discrete quality bins:
    - **Good** (Score ≥ 80)
    - **Average** (50–79)
    - **Poor** (< 50)
- **Metric**: Measured via **Multi-Class Accuracy**.

---

## 🛡️ Data Leakage Prevention 
- **Fit vs. Transform Separation**: Preprocessing parameters are only learned during the Training phase (`fit`). The Prediction phase uses these parameters exactly as-is (`transform`).
- **Inference Purity**: The `predict.ts` module is architecturally forbidden from retraining or modifying model weights.
- **Artifact Immutability**: Production inference strictly consumes persisted JSON artifacts, preventing "drift" between experiments and serving.

---

## 🧑💼 Selection-Level Interview Answer (CRITICAL)
> "My Rebot implementation is primarily a **regression problem** since its main goal is to predict a continuous ATS score. However, I’ve incorporated a **classification layer** to categorize resumes into Good, Average, and Poor segments. This hybrid approach ensures both high-resolution precision for the backend audit and clear interpretability for the end user."

---

## 🧠 ML Engineering Pipeline

Every prediction follows a professional, traceable path:
`Raw Data` → `Preprocessing` → `Feature Engineering` → `Model Training` → `Evaluation` → `Prediction`

### 🛡️ Core Principles
- **Separation of Concerns**: No training logic exists within the inference API.
- **Data Leakage Protected**: Models are persisted as static artifacts to ensure deterministic scoring.
- **Experiment Tracking**: All training cycles are logged to `logs/experiment_log.csv` for auditing.

---

## 🛠️ Setup Instructions

1. **Create Virtual Environment**:
   ```bash
   python -m venv venv
   ```

2. **Activate Environment**:
   - **Windows**: `venv\Scripts\activate`
   - **Mac/Linux**: `source venv/bin/activate`

3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Initialize Pipeline**:
   ```bash
   npm run ml:main
   ```

5. **Run Application**:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to access the **Resume Studio**.
