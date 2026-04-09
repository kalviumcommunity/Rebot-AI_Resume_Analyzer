# Rebot AI & ML Resume Intelligence System (v1.0)

Rebot is a professional AI-powered resume analyzer and builder that integrates a structured **Production-Grade Machine Learning Pipeline** to provide real-time ATS scoring and technical feedback.

---

## 🏗️ Project Structure (Milestone 5.11)

This project follows the strict **Kalvium 5.11 Engineering Standards**, separating concerns into isolated, single-responsibility modules:

- **`data/`**: Managed datasets.
    - `raw/`: Immutable ground-truth records.
    - `processed/`: Replicable cleaned features.
    - `external/`: Third-party reference data.
- **`src/`**: Production ML logic (Modularized pipeline).
- **`models/`**: Persistent model artifacts (`ats_model.json`).
- **`reports/`**: Evaluation outputs and benchmarking history.
- **`logs/`**: Experiment tracking and calibration history.
- **`notebooks/`**: Exploratory Data Analysis & Visualization.
- **`app/`**: Next.js frontend and API infrastructure.
- **`main.ts`**: High-level E2E orchestration entry point.

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
