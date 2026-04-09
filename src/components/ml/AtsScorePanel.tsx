"use client";

import { CheckCircle2, AlertCircle, TrendingUp, Filter, Database, Play } from "lucide-react";

interface AtsScorePanelProps {
  prediction: {
    score: number;
    label: string;
    confidence: number;
    featureContributions: { name: string; contribution: number }[];
  };
  features: {
    keywordDensity: number;
    actionVerbCount: number;
    metricCount: number;
    resumeLength: number;
    skillsCount: number;
  };
  evaluation: {
    accuracy: number;
    meanAbsoluteError: number;
  };
}

export default function AtsScorePanel({ prediction, features, evaluation }: AtsScorePanelProps) {
  return (
    <div className="flex flex-col gap-6 p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-y-auto max-h-[80vh] custom-scrollbar">
      {/* Header & Pipeline Status */}
      <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-4">
        <div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white">ML Intelligence Report</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 bg-green-100 text-green-700 rounded-full uppercase tracking-wider">
              <Database className="w-3 h-3" /> Raw Data
            </span>
            <span className="text-zinc-300">→</span>
            <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full uppercase tracking-wider">
              <Filter className="w-3 h-3" /> Features
            </span>
            <span className="text-zinc-300">→</span>
            <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full uppercase tracking-wider">
              <Play className="w-3 h-3" /> Model
            </span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">System Accuracy</span>
          <span className="text-lg font-bold text-zinc-900 dark:text-white">{(evaluation.accuracy * 100).toFixed(0)}%</span>
        </div>
      </div>

      {/* Main Score Prediction */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="relative flex items-center justify-center">
          <svg className="w-32 h-32 transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="58"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-zinc-100 dark:text-zinc-800"
            />
            <circle
              cx="64"
              cy="64"
              r="58"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={364.4}
              strokeDashoffset={364.4 - (364.4 * prediction.score) / 100}
              className={`${prediction.score >= 70 ? 'text-green-500' : 'text-orange-500'} transition-all duration-1000`}
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-3xl font-black text-zinc-900 dark:text-white">{prediction.score}</span>
            <span className="text-[10px] font-bold text-zinc-400 uppercase">ATS SCORE</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className={`flex items-center gap-3 p-4 rounded-2xl ${prediction.label === 'Good' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'}`}>
            {prediction.label === 'Good' ? <CheckCircle2 className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
            <div>
              <p className="text-sm font-bold uppercase tracking-tight">Recommendation</p>
              <p className="text-lg font-black">{prediction.label === 'Good' ? 'Highly Suitable' : 'Needs Optimization'}</p>
            </div>
          </div>
          <div className="flex items-center justify-between px-4">
            <span className="text-[11px] font-medium text-zinc-500 uppercase">Model Confidence</span>
            <span className="text-[11px] font-black text-zinc-900 dark:text-white">{(prediction.confidence * 100).toFixed(0)}%</span>
          </div>
        </div>
      </div>

      {/* Feature Analysis */}
      <div className="flex flex-col gap-3">
        <h4 className="text-[12px] font-bold text-zinc-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-blue-500" /> Feature Engineering Breakdown
        </h4>
        <div className="space-y-2">
          {prediction.featureContributions.map((fc, i) => (
            <div key={i} className="flex flex-col gap-1">
              <div className="flex justify-between items-center text-[11px]">
                <span className="font-bold text-zinc-600 dark:text-zinc-400">{fc.name}</span>
                <span className="font-bold text-zinc-900 dark:text-white">+{fc.contribution} pts</span>
              </div>
              <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 rounded-full transition-all duration-1000"
                  style={{ width: `${(fc.contribution / 40) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Raw Data Signals */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-zinc-50 dark:bg-zinc-800/50 p-3 rounded-2xl border border-zinc-100 dark:border-zinc-800">
          <p className="text-[10px] font-bold text-zinc-400 uppercase">Input Length</p>
          <p className="text-sm font-black text-zinc-900 dark:text-white">{features.resumeLength} wds</p>
        </div>
        <div className="bg-zinc-50 dark:bg-zinc-800/50 p-3 rounded-2xl border border-zinc-100 dark:border-zinc-800">
          <p className="text-[10px] font-bold text-zinc-400 uppercase">Keyword Density</p>
          <p className="text-sm font-black text-zinc-900 dark:text-white">{(features.keywordDensity * 100).toFixed(0)}%</p>
        </div>
        <div className="bg-zinc-50 dark:bg-zinc-800/50 p-3 rounded-2xl border border-zinc-100 dark:border-zinc-800">
          <p className="text-[10px] font-bold text-zinc-400 uppercase">Verb Signal</p>
          <p className="text-sm font-black text-zinc-900 dark:text-white">{features.actionVerbCount}</p>
        </div>
      </div>

      <div className="text-[10px] text-zinc-400 text-center italic mt-2">
        Processed via ML Model v1.0 • MAE: {evaluation.meanAbsoluteError}
      </div>
    </div>
  );
}
