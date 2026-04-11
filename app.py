import streamlit as st
import requests
import json

# ── Page Configuration ─────────────────────────────────────────────────────
st.set_page_config(
    page_title="REBOT AI Resume Analyzer",
    page_icon="📄",
    layout="centered"
)

# ── Custom Styling ─────────────────────────────────────────────────────────
st.markdown("""
    <style>
    .main {
        background-color: #f8f9fa;
    }
    .stButton>button {
        width: 100%;
        border-radius: 5px;
        height: 3em;
        background-color: #007bff;
        color: white;
    }
    </style>
    """, unsafe_allow_html=True)

# ── Header Section ─────────────────────────────────────────────────────────
st.title("📄 REBOT AI Resume Analyzer")
st.write("Professional ATS scoring using constrained Ensemble Boosting.")
st.divider()

# ── Input Section ──────────────────────────────────────────────────────────
st.subheader("1. Resume Text Input")
resume_text = st.text_area(
    "Paste your resume content here for deep analysis:",
    placeholder="Experienced Software Engineer with 5+ years in React...",
    height=250
)

# ── Action Section ──────────────────────────────────────────────────────────
if st.button("🚀 UNLEASH AI ANALYSIS"):
    if not resume_text.strip():
        st.warning("⚠️ Please provide resume text before analyzing.")
    else:
        with st.spinner("Executing frozen inference pipeline..."):
            try:
                # 🎯 Integration: Connecting Streamlit to Next.js API
                response = requests.post(
                    "http://localhost:3000/api/ats-score",
                    json={"resumeText": resume_text},
                    timeout=10
                )
                
                if response.status_code == 200:
                    data = response.json()
                    
                    st.divider()
                    st.header("📊 Analysis Report")
                    
                    # Score Dashboard
                    col1, col2 = st.columns([1, 2])
                    with col1:
                        st.metric("ATS Score", data["score"])
                    with col2:
                        if data["label"] == "ATS Friendly":
                            st.success(f"Determination: {data['label']} ✅")
                        else:
                            st.error(f"Determination: {data['label']} ❌")
                    
                    # Signal Breakdown
                    st.subheader("📌 Feature Signals")
                    feat_col1, feat_col2, feat_col3 = st.columns(3)
                    with feat_col1:
                        st.write("**Keywords**")
                        st.info(data["features"]["keywords"])
                    with feat_col2:
                        st.write("**Action Verbs**")
                        st.info(data["features"]["verbs"])
                    with feat_col3:
                        st.write("**Metrics**")
                        st.info(data["features"]["metrics"])
                    
                    # Technical Breakdown
                    with st.expander("🔍 View Technical Signals (JSON)"):
                        st.json(data)
                        
                else:
                    st.error(f"❌ API Error: Received status code {response.status_code}")
                    st.write("Ensure the Next.js development server is running on port 3000.")
                    
            except requests.exceptions.ConnectionError:
                st.error("❌ Connection Failed: Could not reach the API.")
                st.write("Please run `npm run dev` in the terminal to start the backend.")
            except Exception as e:
                st.error(f"❌ Fatal Error: {str(e)}")

# ── Footer ────────────────────────────────────────────────────────────────
st.divider()
st.caption("REBOT ATS Engine v1.5 | Production Ready | Zero-Leakage Guaranteed")
