# Rebot AI & ML Resume Intelligence System (v1.0)

Rebot is a professional AI-powered resume analyzer and builder that integrates a structured **Production-Grade Machine Learning Pipeline** to provide real-time ATS scoring and technical feedback.

---

## 🏗️ ML Lifecycle & Separation (Milestone 5.12)

Rebot enforces a strict architectural boundary between Training and Prediction to ensure model reproducibility and runtime stability.

### 🔄 Training Pipeline
`Raw Data (data_loader.ts)` → `Preprocessing` → `Features` → `Fitting (train.ts)` → `Artifact Persistence (persistence.ts)`

### 🚀 Prediction Pipeline (Inference)
`Input` → `Load Artifacts (persistence.ts)` → `Transform` → `Inference (predict.ts)`

---

## 🛡️ Data Leakage Prevention 
- **Fit vs. Transform Separation**: Preprocessing parameters are only learned during the Training phase (`fit`). The Prediction phase uses these parameters exactly as-is (`transform`).
- **Inference Purity**: The `predict.ts` module is architecturally forbidden from retraining or modifying model weights.
- **Artifact Immutability**: Production inference strictly consumes persisted JSON artifacts, preventing "drift" between experiments and serving.

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
