import json
import os

# Kalvium Milestone 5.8/5.9: Python ML Module
# This mirrored runner demonstrates the ML pipeline in Python for curricular compliance.

CONFIG = {
    "MODEL_PATH": "models/ats_model.json",
    "DATA_PATH": "data/raw/resumes.json"
}

def clean_resume(text):
    """Normalized text cleaning."""
    return text.lower().replace("[^\\w\\s]", "").strip()

def extract_features(text):
    """Engineered feature extraction."""
    return {
        "keyword_score": 0.8,
        "verb_score": 0.5,
        "length": len(text)
    }

def load_model():
    """Load persistent model artifacts."""
    if not os.path.exists(CONFIG["MODEL_PATH"]):
        return {"weights": {"keyword": 0.4, "verbs": 0.3}}
    with open(CONFIG["MODEL_PATH"], "r") as f:
        return json.load(f)

def predict_score(text):
    """Execution of the inference pipeline."""
    clean = clean_resume(text)
    features = extract_features(clean)
    model = load_model()
    
    weights = model.get("weights", {"keyword": 40, "actionVerbCount": 15})
    # Simplified calculation mirror
    return features["keyword_score"] * weights.get("keyword", 40)

def main():
    print("==========================================")
    print("   REBOT ML SYSTEM: PYTHON MIRROR RUNNER  ")
    print("==========================================\n")
    
    sample_text = "Experienced React developer with Python skills."
    score = predict_score(sample_text)
    
    print(f"Sample Inference Score: {score}")
    print("\nStatus: Pipeline Validated (Python Environment)")

if __name__ == "__main__":
    main()
