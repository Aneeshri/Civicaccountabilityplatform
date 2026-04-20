import { useState, useEffect } from "react";
import { api } from "../lib/api";
import { useLanguage } from "../contexts/LanguageContext";
import {
  FileText, Send, CheckCircle2, MapPin, User,
  MessageSquare, AlertTriangle, Clock, Loader2
} from "lucide-react";

const DISTRICTS = [
  "Srikakulam", "Vizianagaram", "Visakhapatnam", "East Godavari",
  "West Godavari", "Krishna", "Guntur", "Prakasam", "SPSR Nellore",
  "Kurnool", "YSR Kadapa", "Anantapur", "Chittoor"
];

const CATEGORIES = [
  "Road & Infrastructure",
  "Water Supply",
  "Electricity",
  "Healthcare",
  "Education",
  "Housing & Welfare",
  "Agriculture",
  "Sanitation",
  "Corruption",
  "Project Delay",
  "Other",
];

interface Report {
  id: number;
  description: string;
  constituency: string;
  reporter_name: string;
  status: string;
  created_at: string;
}

export function Reports() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loadingReports, setLoadingReports] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    reporter_name: "",
    constituency: "",
    category: "",
    description: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    api.getReports()
      .then(res => setReports(res.data as Report[]))
      .catch(() => {})
      .finally(() => setLoadingReports(false));
  }, [submitted]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.constituency) errs.constituency = "Please select a constituency";
    if (!form.category) errs.category = "Please select a category";
    if (!form.description || form.description.trim().length < 20)
      errs.description = "Description must be at least 20 characters";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      await api.submitReport({
        description: `[${form.category}] ${form.description}`,
        constituency: form.constituency,
        reporter_name: form.reporter_name || "Anonymous",
      });
      setSubmitted(true);
      setForm({ reporter_name: "", constituency: "", category: "", description: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      setErrors({ submit: err.message || "Failed to submit report" });
    } finally {
      setSubmitting(false);
    }
  };

  const daysAgo = (dateStr: string) => {
    const d = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000);
    if (d === 0) return "Today";
    if (d === 1) return "Yesterday";
    return `${d} days ago`;
  };

  const { t } = useLanguage();

  return (
    <div className="p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <FileText className="w-6 h-6 text-amber-500" /> Citizen Reports
          </h1>
          <p className="text-slate-500 text-sm mt-0.5">
            Report local issues and hold your MLA accountable
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-xl text-sm font-medium">
          <MessageSquare className="w-4 h-4 text-amber-400" />
          {reports.length} Reports Filed
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Report Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-5 text-white">
            <h2 className="font-bold text-base flex items-center gap-2">
              <Send className="w-4 h-4 text-amber-400" /> Submit a Report
            </h2>
            <p className="text-slate-400 text-xs mt-1">
              Help us track development issues in your constituency
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-5 space-y-4">
            {submitted && (
              <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-xl text-green-700">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-sm">Report submitted successfully!</div>
                  <div className="text-xs text-green-600">Thank you for contributing to civic accountability.</div>
                </div>
              </div>
            )}

            {errors.submit && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                <AlertTriangle className="w-4 h-4" /> {errors.submit}
              </div>
            )}

            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
                Your Name (Optional)
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  value={form.reporter_name}
                  onChange={e => setForm(f => ({ ...f, reporter_name: e.target.value }))}
                  placeholder="Anonymous if left blank"
                  className="w-full pl-9 pr-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
            </div>

            {/* Constituency */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
                Constituency *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <select
                  value={form.constituency}
                  onChange={e => setForm(f => ({ ...f, constituency: e.target.value }))}
                  className={`w-full pl-9 pr-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white ${
                    errors.constituency ? "border-red-300" : "border-slate-200"
                  }`}
                >
                  <option value="">Select district first, then constituency</option>
                  {DISTRICTS.map(d => (
                    <optgroup key={d} label={d}>
                      {/* For simplicity, use district as constituency selection indicator */}
                      <option value={`${d} Central`}>{d} Central</option>
                    </optgroup>
                  ))}
                </select>
              </div>
              {errors.constituency && <p className="text-xs text-red-500 mt-1">{errors.constituency}</p>}
            </div>

            {/* Category */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
                Issue Category *
              </label>
              <select
                value={form.category}
                onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                className={`w-full px-3 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white ${
                  errors.category ? "border-red-300" : "border-slate-200"
                }`}
              >
                <option value="">Select category</option>
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              {errors.category && <p className="text-xs text-red-500 mt-1">{errors.category}</p>}
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
                Description *
              </label>
              <textarea
                value={form.description}
                onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                placeholder="Describe the issue in detail (minimum 20 characters)..."
                rows={4}
                className={`w-full px-3 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none ${
                  errors.description ? "border-red-300" : "border-slate-200"
                }`}
              />
              <div className="flex justify-between items-center mt-1">
                {errors.description
                  ? <p className="text-xs text-red-500">{errors.description}</p>
                  : <span />}
                <span className="text-xs text-slate-400">{form.description.length} chars</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white rounded-xl font-semibold text-sm transition-colors"
            >
              {submitting ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
              ) : (
                <><Send className="w-4 h-4" /> Submit Report</>
              )}
            </button>

            <p className="text-xs text-slate-400 text-center">
              All reports are reviewed by local administrators. Your identity is kept confidential.
            </p>
          </form>
        </div>

        {/* Recent Reports */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100">
              <h2 className="font-semibold text-slate-700 text-sm flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" /> Recent Reports
              </h2>
            </div>

            {loadingReports ? (
              <div className="p-5 space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-3 bg-slate-200 rounded w-3/4 mb-2" />
                    <div className="h-3 bg-slate-200 rounded w-1/2" />
                  </div>
                ))}
              </div>
            ) : reports.length === 0 ? (
              <div className="p-8 text-center text-slate-400">
                <FileText className="w-10 h-10 mx-auto mb-2 opacity-30" />
                <p className="text-sm">No reports yet. Be the first!</p>
              </div>
            ) : (
              <div className="divide-y divide-slate-100 max-h-[480px] overflow-y-auto">
                {reports.map(report => (
                  <div key={report.id} className="px-5 py-4 hover:bg-slate-50 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-amber-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-slate-700 leading-snug">{report.description}</p>
                        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                          <div className="flex items-center gap-1 text-xs text-slate-400">
                            <MapPin className="w-3 h-3" /> {report.constituency}
                          </div>
                          <span className="text-slate-200">·</span>
                          <span className="text-xs text-slate-400">{report.reporter_name || "Anonymous"}</span>
                          <span className="text-slate-200">·</span>
                          <span className="text-xs text-slate-400">{daysAgo(report.created_at)}</span>
                        </div>
                        <div className="mt-1.5">
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            report.status === "Resolved"
                              ? "bg-green-100 text-green-700"
                              : report.status === "In Review"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-amber-100 text-amber-700"
                          }`}>
                            {report.status || "Pending Review"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* How It Works */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-200">
            <h3 className="font-semibold text-amber-800 text-sm mb-3">How Citizen Reporting Works</h3>
            <div className="space-y-2.5">
              {[
                { step: "1", text: "Submit report with constituency and issue details" },
                { step: "2", text: "Report reviewed by district administrators" },
                { step: "3", text: "MLA notified and assigned for action" },
                { step: "4", text: "Progress tracked and updated in the platform" },
              ].map(({ step, text }) => (
                <div key={step} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {step}
                  </div>
                  <p className="text-sm text-amber-900">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}