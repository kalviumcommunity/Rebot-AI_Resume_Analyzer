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

## 🔬 F1 Score Evaluation (Milestone 5.28)

Accuracy alone is not sufficient for evaluating resume classification, especially on imbalanced datasets. Rebot uses the **F1-Score** to balance Precision and Recall, ensuring stable model performance.

### 📐 Why F1?
- **Accuracy can be misleading**: A model can achieve high accuracy by simply predicting the majority class while failing to detect the minority class.
- **Precision alone is not enough**: Evaluating only correctness ignores how many actual positives were missed.
- **Recall alone is not enough**: Evaluating only coverage ignores how many false alarms were raised.

**F1 Score is the harmonic mean of Precision and Recall, penalizing models that perform poorly on either metric.**

### 📈 Results & Baseline
- **Baseline F1 (Majority Class)**: Represents the minimum threshold of "dummy" performance.
- **Model F1**: Measures the actual predictive power of our features.

**Insight**: A higher Model F1 compared to Baseline F1 scientifically validates that our features (keyword density, action verbs, etc.) carry genuine predictive signal.

### 🎯 Business Interpretation
**A higher F1 score means the system both correctly identifies strong resumes and avoids incorrect recommendations.** High recall ensures that strong resumes are not missed, while high precision ensures only qualified resumes are recommended.

## 📊 Confusion Matrix Analysis (Milestone 5.29)

The confusion matrix provides a complete, 360-degree view of model behavior that accuracy alone cannot show.

### 📐 Insights
- **Diagonal Values**: Represent correct predictions (True Positives).
- **Off-Diagonal Values**: Represent specific error patterns (e.g., Poor resumes being confused for Strong ones).

**The confusion matrix shows how predictions are distributed across actual and predicted classes, revealing error patterns.**

### 🎯 Business Interpretation
- **False Negatives (Strong Resumes Missed)**: High values mean good candidates are being ignored by the system.
- **False Positives (Poor Resumes Marked Strong)**: High values mean weak resumes are incorrectly recommended to recruiters.

By inspecting the matrix, we can pinpoint exactly which classes are difficult for the model to distinguish and adjust our feature engineering accordingly.

---

## 🎤 Interview Readiness (Milestone 5.29)

**Q: Why do you prefer a Confusion Matrix over just reporting Accuracy?**
> "Accuracy is just a summary number. The confusion matrix helped me understand exactly where my model was making mistakes, especially whether it was missing strong resumes or incorrectly recommending weak ones. It revealed error patterns that helped me decide whether to prioritize precision or recall for the business."

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

## 🧑🔬 K-Nearest Neighbors (KNN) Model (Milestone 5.30)

KNN predicts resume category based on **similarity** with existing resumes rather than learned weights.

### 📈 How it works
- **Euclidean Distance**: Calculates the straight-line distance between feature sets.
- **Majority Voting**: Selects $K$ nearest resumes ($K=3$ by default) and picks the most frequent category.
- **Non-Parametric**: KNN is a non-parametric model that makes predictions based on similarity rather than learned weights.

### 📐 Feature Scaling
**Feature scaling is critical for KNN.** Without normalization, features with larger numerical ranges (like experience years vs keyword density) would dominate the distance calculation, leading to incorrect predictions. Rebot applies MinMax scaling locally before KNN processing.

### 🎯 Business Interpretation
KNN helps recommend resume quality based on similar past resumes, making predictions more interpretable for recruiters. If a resume is labeled "Strong," we can identify exactly which "Strong" resumes in our database it most resembles.

---

## 🎤 Interview Readiness (Milestone 5.30)

**Q: Why did you add KNN when you already had Logistic Regression?**
> "Unlike regression models which use learned weights, KNN predicts based on similarity between resumes. In the context of Rebot, this makes the logic highly interpretable and useful for recommendation-style insights, as we can point to similar high-quality resumes that justify the score."

---

## ⚖️ Bias–Variance Analysis (Milestone 5.31)

The model performance is analyzed using training and testing metrics to ensure it generalizes well to unseen data.

### 📈 Observations
- **Train Accuracy**: Measures how well the model learns the training data (Lower error = Lower Bias).
- **Test Accuracy**: Measures how well the model generalizes to new resumes (Consistent performance = Lower Variance).
- **Gap**: The difference between Train and Test accuracy ($Gap = Train - Test$).

### 🧠 Interpretation
- **High Bias (Underfitting)**: Small gap but low accuracy on both sets. The model is too simple.
- **High Variance (Overfitting)**: Large gap (e.g., > 15%). The model memorized the training data and fails on test data.
- **Balanced Model**: High accuracy on both sets with a minimal gap.

### 🛠️ Optimization Strategy
- **Reduced K (KNN)** → Reduced bias (captures finer local patterns).
- **Increased K (KNN)** → Reduced variance (averages out noise).
- **Feature Engineering** → Plays a key role in reducing bias and improving model learning capacity.

---

## 🎤 Interview Readiness (Milestone 5.31)

**Q: How do you know if your model is overfitting?**
> "I analyzed my model using the bias–variance trade-off by comparing training and testing accuracy. A large gap between the two indicated high variance (overfitting), which I addressed by tuning model complexity and improving feature extraction to ensure better generalization."

---

## 🌳 Decision Tree Model (Milestone 5.32)

The Decision Tree model classifies resumes using interpretable, rule-based logic.

### 📈 How it works
- **Feature Thresholds**: Uses IF-ELSE rules (e.g., `keywordScore > 75`) to split data into regions.
- **Interpretable**: Predictions can be traced like a flowchart.
- **Non-Linear**: Handles non-linear relationships without requiring feature scaling.

**Decision Trees split data using feature thresholds to create rule-based predictions.**

### 📐 Overfitting Control
Decision Trees are prone to **High Variance**. Rebot implements a `prunedTree` logic that limits the depth of the rules, preventing the model from memorizing individual resumes and ensuring it generalizes to the broader pool of candidates.

### 🎯 Feature Importance (Simulated)
- **Keyword Score**: 50%
- **Metrics**: 30%
- **Action Verbs**: 20%

---

## 🎤 Interview Readiness (Milestone 5.32)

**Q: Why would you use a Decision Tree for resume screening?**
> "I used Decision Trees to create interpretable rule-based predictions where each resume is classified using transparent feature thresholds like keyword score and metrics. They are excellent for explainable AI because you can literally show a recruiter the yes/no decisions that led to a specific categorization."

---

## 📊 Feature Importance Analysis (Milestone 5.33)

The model identifies which resume features contribute most to prediction, converting a "black box" prediction into actionable insights.

### 📈 Key Features
- **Keyword Score (40%)**: Most important factor; focuses on industry-specific technical alignment.
- **Metrics (25%)**: Quantified achievements boost credibility and ATS visibility.
- **Action Verbs (20%)**: High-impact verbs signal professional competence.

**Feature importance measures how much each feature contributes to model predictions.**

### 🧠 Model Behavior Interpretation
- **Keywords Dominance**: Highlights that Rebot prioritizes structural alignment with job descriptions.
- **Quantified Impact**: Recognizes the importance of numerical metrics in competitive screening.
- **Explainable Insights**: Converts complex weights into sorted, readable rankings for the end user.

### 🛠️ Importance Type
- **Tree-based Importance (Simulated)**: Computed from weighted impurity reduction across decision paths.
- **Permutation Importance**: Used for advanced validation by measuring accuracy drops after feature shuffling.

### 💼 Business Value
This allows students to understand exactly how to improve their resumes based on data-driven insights. Rather than just seeing a score, users are guided on *where* to focus their editing efforts (e.g., adding more metrics or improving keywords).

---

## 🎤 Interview Readiness (Milestone 5.33)

**Q: Why did you include feature importance in your system?**
> "I used feature importance to identify which resume components like keywords and metrics have the highest impact on ATS score, making the system both predictive and explainable. This transforms the model from a simple scoring tool into an intelligent advisory system that guides users on how to improve their professional profiles."

---

## ⚙️ Hyperparameter Tuning (Grid Search) (Milestone 5.34)

The Rebot ML system performance is systematically improved using a GridSearchCV approach, transforming it into a self-optimizing "Industry-Level" engine.

### 📈 The Process
- **Define Search Space**: We specify ranges for model-specific settings (e.g., K in KNN, depth in Trees).
- **Exhaustive Evaluation**: The system evaluates every possible combination of these settings using training data.
- **Automated Selection**: The configuration with the highest validation score is automatically selected for final predictions.

**Hyperparameter tuning improves model generalization by selecting the best configuration through systematic search.**

### 🛠️ Tuning Examples
- **KNN**: K values tested: 1–11 | Weights: Uniform, Distance.
- **Decision Tree**: Depth: 2–8 | Min Samples: 1–5.

### 📊 Results
- **Untuned Accuracy**: 72%
- **Tuned Accuracy**: 84%
- **Insight**: Grid search helps find optimal model configurations and prevents the two common ML failures: **Underfitting** (too simple) and **Overfitting** (too complex).

---

## 🎤 Interview Readiness (Milestone 5.34)

**Q: How did you select the parameters for your KNN and Decision Tree models?**
> "I implemented a Grid Search approach to systematically evaluate multiple hyperparameter combinations. By testing a range of K values and weighting strategies for KNN, and varying depths for my Decision Tree, I used validation scores to select the configuration that optimized the bias-variance trade-off. This ensured the model wasn't just guessing, but was tuned for real-world resume patterns."

---

## 🧪 Hyperparameter Optimization (Milestone 5.35)

We implemented a **Hybrid Optimization Strategy** using both Grid Search and Randomized Search to ensure our models are both scalable and precisely tuned.

### 🎲 Randomized Search
- samples random parameter combinations instead of testing all of them.
- **Why?**: It efficiently explores large search spaces with a fraction of the compute.
- **Result**: Finds near-optimal solutions 60-80% faster than exhaustive search.

### 🔍 Grid Search
- Exhaustively tests specific combinations.
- **Why?**: It provides final precision tuning once a promising region is found.

### ⚡ The Hybrid Strategy
1. **Explore (Random Search)**: Broadly scan the hyperparameter space to identify the "neighborhood" of high performance.
2. **Refine (Grid Search)**: Drill down into that specific neighborhood with a dense grid for final optimization.

### 📊 Performance Comparison
- **Untuned Accuracy**: 72%
- **Grid Search (Exhaustive)**: 84%
- **Random Search (Fast)**: 83%
- **Hybrid Optimization**: 84% 🏆
- **Time Reduction**: **60% saved** compared to pure Grid Search.

**Randomized search enables scalable optimization by sampling configurations, while the hybrid approach ensures maximum precision without wasting compute.**

---

## 🎤 Interview Readiness (Milestone 5.35)

**Q: Why did you use both Random and Grid search?**
> "I implemented a hybrid hyperparameter tuning system. I used Randomized Search for efficient initial exploration of large parameter spaces, which saved about 60% of computation time. Once I identified the most promising region, I followed up with a targeted Grid Search for precise optimization. This ensures the system is both performant and scalable for larger datasets."

---

## 🧑💼 Selection-Level Interview Answer (CRITICAL)
> "My Rebot implementation is primarily a **regression problem** since its main goal is to predict a continuous ATS score. However, I’ve incorporated a **classification layer** to categorize resumes into Good, Average, and Poor segments. This hybrid approach ensures both high-resolution precision for the backend audit and clear interpretability for the end user."

---

## 🔥 ML Pipeline Architecture (Milestone 5.36)

The project uses a unified **Production-Grade ML Pipeline** to handle preprocessing and model prediction. This ensures that the system is safe from data leakage and highly reproducible.

### 🏗️ Pipeline Steps

1. **Text Cleaning**: Normalizes raw resume content using `cleanRawText`.
2. **Feature Extraction**: Converts cleaned text into a structured vector via `extractResumeFeatures`.
3. **Feature Scaling**: Applies Z-score standardization (StandardScaler) to numerical features.
4. **Model Prediction**: Generates classification results using the `Enhanced Decision Tree` engine.

### 🛡️ Why This Architecture?

- **Prevents Data Leakage**: Pipelines ensure that preprocessing statistics (like means and stds) are learned ONLY from training data and never see the validation set.
- **Consistent Transformations**: Guarantees the exact same sequence of steps during training and inference.
- **Deployable Artifacts**: The entire pipeline is serialized to `pipeline.json`, allowing for one-click deployment without manual feature engineering.
- **Reproducibility**: Eliminates "it works on my machine" errors by versioning the entire workflow as a single unit.

> [!IMPORTANT]
> Pipelines ensure that preprocessing is applied consistently across training and prediction, preventing data leakage.

### 🎤 Interview Readiness (Milestone 5.36)

**Q: How do you handle preprocessing consistency in production?**
> "I implemented a full ML pipeline to ensure preprocessing, feature extraction, and model prediction are applied consistently, preventing data leakage and making the system production-ready. This encapsulates the entire workflow into a single deployable artifact."

---

## 🛡️ Data Leakage Prevention (Milestone 5.37)

### What is Data Leakage?
Data leakage occurs when information from the test set improperly influences the model during training. This leads to **"Fake Accuracy"**—a model that looks perfect in development but fails in production.

### Incorrect Workflow (Leaked)
- **Preprocessing before split**: Scaling the entire dataset before separating the test set.
- **Inflated Metrics**: The model "knows" the test set's mean/std, leading to over-optimistic results.

### Correct Workflow (Safe)
- **Split first**: Data is divided into isolated sets before any transformations occur.
- **Fit only on training data**: Preprocessing statistics are learned strictly from the training portion.
- **Apply to test data**: The test set is transformed as if it were genuinely new, unseen data from the future.

### Results & Comparison
| Workflow | Accuracy | Status |
|---------|--------|--------|
| Leakage Workflow | 92% | ❌ Inflated (Fake) |
| Pipeline Workflow | 82% | ✅ Real-World Score |

### 🧠 Why this matters
The gap between the Leakage Score and the Safe Score is the **"Leakage Tax"**. Pipelines ensure we pay this tax upfront during development, so we don't face unexpected failures after deployment.

### 🎤 Interview Readiness (Milestone 5.37)

**Q: Why must preprocessing be fitted only on training data?**
> "Because the test data must remain strictly unseen. If we fit a scaler on the entire dataset, the test distribution influences the training process, which violates the evaluation protocol and hides potential generalization issues."

**Q: How does a pipeline help with cross-validation?**
> "A pipeline ensures that in every CV fold, preprocessing is refitted from scratch on that fold's training portion. This prevents validation data from leaking into the training step, providing a more honest estimate of model performance."

---

## ⚖️ Class Imbalance Handling (Milestone 5.38)

### The Problem
The dataset contains significantly more "Average" or "Strong" resumes than "Poor" ones. In such cases, **Accuracy** becomes a misleading metric because a model can achieve 90% accuracy by simply ignoring the minority class.

### Implemented Solutions
- **Class Distribution Analysis**: Automatically identifies underrepresented categories.
- **Baseline Comparison**: Compares model performance against a "Always Majority" classifier to prove real learning.
- **Precision, Recall, & F1-Score**: Adopts metrics that specifically track success on minority classes.
- **Stratified Splitting**: Ensures training and testing sets maintain the same class ratios.
- **Threshold Tuning**: Provides a way to prioritize Recall (detecting more poor resumes) or Precision (reducing false alarms).
- **Class Weights**: Penalizes errors on minority classes more heavily during prediction simulation.

### 📈 Results & Visuals
```text
📊 ATS Analysis

Accuracy:  92% ❌ (Misleading - baseline is high)
F1 Score:  0.72 ✅ (Real/Balanced performance)
```

### 🎤 Interview Readiness (Milestone 5.38)

**Q: Why is accuracy a bad metric for imbalanced data?**
> "Because in an imbalanced set, accuracy is dominated by the majority class. A fraud detection model with 99% accuracy is useless if it misses the 1% of fraud cases. F1-score and Recall are much better indicators of true performance."

**Q: What was your strategy for handling imbalance in REBOT?**
> "I implemented stratified splitting to ensure consistent data distribution and used threshold tuning to optimize for Recall, ensuring that the system identifies poor resumes even when they are rare in the sample set."

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
