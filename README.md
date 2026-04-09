# Rebot AI & ML Resume Intelligence System (v1.0)

Rebot is a professional AI-powered resume analyzer and builder that integrates a structured **Production-Grade Machine Learning Pipeline** to provide real-time ATS scoring and technical feedback.

---

## 🏗️ Hybrid ML System (Milestone 5.12, 5.13 & 5.14)

Rebot operates as a **Hybrid Supervised Learning System**, combining Regression and Classification.

---

### 📈 Target Variable (y)
- **Column**: `ats_score`
- **Type**: Regression (Continuous 0-100)
- **Description**: Represents the overall "ATS-Friendliness" and technical quality of the resume.
- **Business Meaning**: Allows the system to provide high-resolution ranking and specific feedback on improvement areas.

---

### 🏷️ Feature Columns (X)
All features are derived from raw resume text and are **guaranteed to be available at prediction time**.

| Feature | Description | Business Meaning |
| :--- | :--- | :--- |
| `keywordDensity` | % presence of TECH_KEYWORDS | Measures alignment with core technical stack. |
| `actionVerbCount` | Count of strong leadership verbs | Detects individual ownership and impact. |
| `metricCount` | Frequency of numbers and % | Measures quantifiable achievements. |
| `skillsCount` | Breadth of skills identified | Evaluates technical versatility. |
| `experienceYears` | Depth of seniority | Maps candidate to appropriate job levels. |

---

### 🚫 Excluded Features
The following columns are formally excluded to prevent overfitting or logical circularity:
- **`rawText`**: Not directly predictable; converted into structured numerical features.
- **`userId` / `id`**: Unique identifiers with zero predictive signal.

---

### 🛡️ Data Leakage Prevention 
- **Zero Target Leakage**: The `ats_score` (Target) is strictly separated from the input Feature matrix (`X`). Programmatic checks in `train.ts` prevent accidental overlap.
- **Fit vs. Transform Isolation**: Preprocessing parameters are learned once during training and reused identically during inference.
- **Inference Purity**: The `predict.ts` module is architecturally read-only.

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
