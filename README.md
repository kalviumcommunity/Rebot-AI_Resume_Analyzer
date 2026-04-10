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

## 🔬 Precision & Recall Evaluation (Milestone 5.27)

Accuracy alone is not sufficient for evaluating resume classification. Rebot uses a detailed per-class diagnostic suite to measure decision quality.

### 📉 Core Concepts
- **Precision**: Measures the quality of predictions. (How many resumes we labeled "Strong" are actually strong?)
- **Recall**: Measures the coverage of detection. (How many actual "Strong" resumes did we correctly identify?)
- **F1 Score**: The harmonic mean balancing both precision and recall.

### 📐 Statistical Integrity
- **Baseline Comparison**: We benchmark our per-class metrics against a majority-class baseline to prove the model's predictive superiority.
- **Mandatory Logic**: **Precision measures correctness of predictions, while Recall measures completeness of detection.**

### 🎯 Business Interpretation
**High recall ensures that strong resumes are not missed, while high precision ensures only qualified resumes are recommended.** This dual-layered validation ensures Rebot provides a reliable and comprehensive talent assessment tool for recruiters.

---

## 🎤 Interview Readiness (Milestone 5.27)

**Q: How did you evaluate your classification model?**
> "Accuracy alone was not sufficient, so I used Precision and Recall to evaluate how well my model identifies strong resumes and avoids incorrect classifications. High recall ensures that strong resumes are not missed, while high precision ensures only qualified resumes are recommended."

---

## ⚖️ Feature Normalization (Milestone 5.20)

Numerical features in Rebot are normalized using **MinMaxScaler**:
- **Transformation**: `x_scaled = (x - min) / (max - min)`.
- **Result**: All feature values are mapped strictly to the `[0, 1]` range.
- **Leakage Prevention**: **Normalization is applied only after train-test split to prevent data leakage.** The min/max boundaries are learned from the training set, saved to `models/minmax_scaler.json`, and reused during inference.

### 📐 Why Normalization is Optional
The current Rebot engine is rule-based and not sensitive to feature magnitude. Normalization is implemented to demonstrate **proper ML preprocessing practices**, specifically for models sensitive to absolute scale (like Neural Networks or KNN).

### ⚠️ Outlier Handling
MinMaxScaler is sensitive to outliers. In Rebot, feature ranges (like word counts) are naturally bounded, so no extreme distortion occurs.

---

## 🏗️ Feature Engineering Taxonomy (Milestone 5.18)

### Numerical Features
- **keywordDensity**: Ratio of tech keywords matched in resume (Continuous).
- **actionVerbCount**: Total count of impact verbs detected (Discrete).
- **metricCount**: Count of quantitative achievements/percentages (Discrete).
- **skillsCount**: Breadth of tech stack across categories (Discrete).
- **experienceYears**: Calculated seniority based on roles (Continuous).

### Categorical Features
- **seniorityLevel**: Maps years of experience to "Entry-Level", "Mid-Level", or "Senior".

### Excluded Features
- **rawText**: Source text, noisy and carries high cardinality (replaced by features).
- **userId / id**: Identifiers that carry zero predictive signal.

### 📐 Feature Type Justification
All features are treated as numerical (where applicable) because they represent **measurable quantities** where arithmetic operations carry physical meaning. Categorical labels (Seniority) are used solely for interpretability and high-level segmentation.

**All features are numerical and represent meaningful quantities suitable for arithmetic operations.**

---

## ⌛ Prediction Moment Test (Milestone 5.17)
To ensure the model is valid in the real world, it passes the "Prediction Moment Test." At the exact moment a user uploads a resume:

1. **Information Available**: Only the raw Resume Text (PDF/Docx content).
2. **Information NOT Available**: The final ATS score, recruiter feedback, or future hiring decisions.
3. **Verdict**: Every feature used in Rebot (Keyword Density, Action Verbs, etc.) is derived exclusively from the input text, proving zero future-based leakage.

---

## ✂️ Data Splitting Strategy (Milestone 5.16)
To ensure honest evaluation and measure generalization to unseen data, Rebot employs a strict train-test split:

- **Split Ratio**: 80% Training / 20% Testing.
- **Randomization**: A stable shuffle with `random_state = 42` ensures reproducible splits.
- **Evaluation Purity**: The test set is completely withheld during the training phase. Evaluation metrics (MAE, Accuracy) are calculated **only on reserved test data**.
- **Verification**: Pipeline logs output exact sample counts (e.g., `Training Set: 21 samples`, `Testing Set: 6 samples`) for auditing.

---

## 📊 Feature Distribution Analysis (Milestone 5.15)
All features were inspected before modeling to detect skewness, outliers, and distribution patterns.

- **`keywordDensity`**: Symmetric distribution (0-1 range). No scaling required.
- **`actionVerbCount`**: Long-tailed (Right Skewed). Capped at 10 to minimize outlier impact.
- **`metricCount`**: Sparse distribution; many resumes have 0 metrics.
- **`resumeLength`**: Wide variation across samples. No extreme anomalies detected.

### 📐 Transformation Decision
No log or scaling transformations were applied because:
1. All feature values (counts, densities) are within controlled, interpretable ranges.
2. The model uses a weighted scoring engine where feature scale is handled by the weights themselves.

### 📈 Feature vs Target Insights
- **Strong Correlation**: `keywordDensity` and `metricCount` show the highest positive impact on the `ats_score`.
- **Moderate Impact**: `actionVerbCount` provides a secondary signal for resume quality.

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
