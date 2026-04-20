import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { api, MLAWithMetrics, PARTY_BG, STATUS_COLORS, formatCurrency } from "../lib/api";
import { useLanguage } from "../contexts/LanguageContext";
import {
  ArrowLeft, MapPin, Phone, Mail, GraduationCap, User,
  CheckCircle2, Clock, AlertCircle, TrendingUp, Newspaper,
  FolderKanban, Star, Target, Award
} from "lucide-react";
import {
  RadialBarChart, RadialBar, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip
} from "recharts";

function InfoRow({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 py-2.5 border-b border-slate-100 last:border-0">
      <Icon className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">{label}</p>
        <p className="text-sm text-slate-700 font-medium mt-0.5 break-words">{value}</p>
      </div>
    </div>
  );
}

function MetricCard({ value, label, color, bg }: { value: number | string; label: string; color: string; bg: string }) {
  return (
    <div className={`${bg} rounded-xl p-4 text-center`}>
      <div className={`text-3xl font-bold ${color}`}>{value}</div>
      <div className="text-xs text-slate-500 mt-1 font-medium">{label}</div>
    </div>
  );
}

export function MLADetail() {
  const { id } = useParams<{ id: string }>();
  const [mla, setMla] = useState<MLAWithMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { t } = useLanguage();

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError("");
    api.getMlaById(parseInt(id))
      .then(setMla)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return (
    <div className="flex items-center justify-center h-64">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-slate-500">Loading MLA profile...</p>
      </div>
    </div>
  );

  if (error || !mla) return (
    <div className="p-6">
      <Link to="/mlas" className="flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-4 text-sm font-medium">
        <ArrowLeft className="w-4 h-4" /> Back to MLA List
      </Link>
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700">
        {error || "MLA not found"}
      </div>
    </div>
  );

  const initials = mla.name.split(" ").slice(0, 2).map(n => n[0]).join("").toUpperCase();
  const partyCls = PARTY_BG[mla.party] || "bg-gray-100 text-gray-700 border-gray-300";
  const totalPromises = (mla.completed || 0) + (mla.inProgress || 0) + (mla.notStarted || 0);

  const promiseData = [
    { name: "Completed", value: mla.completed || 0, fill: "#10B981" },
    { name: "In Progress", value: mla.inProgress || 0, fill: "#3B82F6" },
    { name: "Pending", value: mla.notStarted || 0, fill: "#94A3B8" },
  ].filter(d => d.value > 0);

  const projectsByStatus = mla.projects
    ? ["Completed", "In Progress", "Delayed", "Not Started"].map(s => ({
        status: s, count: mla.projects!.filter(p => p.status === s).length,
      })).filter(d => d.count > 0)
    : [];

  return (
    <div className="p-4 lg:p-6 space-y-5">
      {/* Back */}
      <Link to="/mlas" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 text-sm font-medium">
        <ArrowLeft className="w-4 h-4" /> Back to MLA Directory
      </Link>

      {/* Profile Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              {initials}
            </div>
            <div className="flex-1 text-white">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h1 className="text-2xl font-bold">{mla.name}</h1>
                <span className={`px-3 py-1 text-xs font-bold rounded-full border ${partyCls}`}>
                  {mla.party}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-slate-300 text-sm">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {mla.constituency}</span>
                <span className="flex items-center gap-1 text-slate-400">|</span>
                <span>{mla.district} District</span>
                <span className="flex items-center gap-1 text-slate-400">|</span>
                <span>{mla.state}</span>
              </div>
            </div>
            <div className="text-center hidden sm:block">
              <div className="text-4xl font-black text-amber-400">{mla.score}</div>
              <div className="text-slate-400 text-xs font-medium mt-1">Performance Score</div>
            </div>
          </div>
        </div>

        {/* Score bar */}
        <div className="h-2 bg-slate-100">
          <div
            className="h-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all"
            style={{ width: `${Math.min((mla.score / 200) * 100, 100)}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Left: Contact Info */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5">
            <h2 className="text-sm font-bold text-slate-600 uppercase tracking-wide mb-3">Contact Info</h2>
            <InfoRow icon={User} label="Age" value={`${mla.age} years`} />
            <InfoRow icon={GraduationCap} label="Education" value={mla.education} />
            <InfoRow icon={Phone} label="Phone" value={mla.phone} />
            <InfoRow icon={Mail} label="Email" value={mla.email} />
            <InfoRow icon={MapPin} label="District" value={mla.district} />
          </div>

          {/* Score breakdown */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5">
            <h2 className="text-sm font-bold text-slate-600 uppercase tracking-wide mb-4">Score Formula</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Completed × 5</span>
                <span className="font-bold text-green-600">+{(mla.completed || 0) * 5}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">In Progress × 2</span>
                <span className="font-bold text-blue-600">+{(mla.inProgress || 0) * 2}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Not Started × -3</span>
                <span className="font-bold text-red-500">-{(mla.notStarted || 0) * 3}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Budget Utilization</span>
                <span className="font-bold text-amber-600">+{mla.budgetUtil || 0}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Sentiment Score</span>
                <span className="font-bold text-purple-600">+{mla.sentiment || 0}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold">
                <span className="text-slate-700">Total Score</span>
                <span className="text-amber-600 text-lg">{mla.score}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle: Performance Metrics */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5">
            <h2 className="text-sm font-bold text-slate-600 uppercase tracking-wide mb-4">Promise Performance</h2>
            <div className="grid grid-cols-3 gap-3 mb-4">
              <MetricCard value={mla.completed || 0} label="Completed" color="text-green-600" bg="bg-green-50" />
              <MetricCard value={mla.inProgress || 0} label="In Progress" color="text-blue-600" bg="bg-blue-50" />
              <MetricCard value={mla.notStarted || 0} label="Pending" color="text-slate-600" bg="bg-slate-50" />
            </div>

            {promiseData.length > 0 && (
              <ResponsiveContainer width="100%" height={160}>
                <BarChart data={promiseData} layout="vertical" margin={{ left: 10, right: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" horizontal={false} />
                  <XAxis type="number" tick={{ fontSize: 11 }} />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: "#64748B" }} width={80} />
                  <Tooltip />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {promiseData.map((entry, i) => (
                      <rect key={i} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5">
            <h2 className="text-sm font-bold text-slate-600 uppercase tracking-wide mb-3">Budget & Sentiment</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-amber-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-amber-600">{mla.budgetUtil}%</div>
                <div className="text-xs text-slate-500 mt-1">Budget Utilized</div>
                <div className="mt-2 h-2 bg-amber-200 rounded-full">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: `${mla.budgetUtil}%` }} />
                </div>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-purple-600">{mla.sentiment}</div>
                <div className="text-xs text-slate-500 mt-1">Sentiment Score</div>
                <div className="mt-2 h-2 bg-purple-200 rounded-full">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: `${mla.sentiment}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Projects & News */}
        <div className="space-y-4">
          {mla.projects && mla.projects.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5">
              <h2 className="text-sm font-bold text-slate-600 uppercase tracking-wide mb-3 flex items-center gap-2">
                <FolderKanban className="w-4 h-4 text-blue-500" /> Projects ({mla.projects.length})
              </h2>
              <div className="space-y-2">
                {mla.projects.slice(0, 4).map(p => (
                  <div key={p.id} className="p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs font-medium text-slate-700 leading-snug">{p.name}</p>
                      <span className={`text-xs px-1.5 py-0.5 rounded font-medium flex-shrink-0 ${STATUS_COLORS[p.status] || ""}`}>
                        {p.status === "In Progress" ? "Active" : p.status}
                      </span>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>{p.scheme}</span>
                        <span>{p.progress_percent}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-200 rounded-full">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                          style={{ width: `${p.progress_percent}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {mla.news && mla.news.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5">
              <h2 className="text-sm font-bold text-slate-600 uppercase tracking-wide mb-3 flex items-center gap-2">
                <Newspaper className="w-4 h-4 text-amber-500" /> Recent News
              </h2>
              <div className="space-y-3">
                {mla.news.map(n => (
                  <div key={n.id} className="border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                    <p className="text-xs text-slate-700 leading-snug">{n.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs px-1.5 py-0.5 rounded ${
                        n.sentiment === "positive" ? "bg-green-100 text-green-700" :
                        n.sentiment === "negative" ? "bg-red-100 text-red-700" :
                        "bg-gray-100 text-gray-600"
                      }`}>{n.sentiment}</span>
                      <span className="text-xs text-slate-400">{new Date(n.created_at).toLocaleDateString("en-IN")}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Promises Table */}
      {mla.promises && mla.promises.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-5 border-b border-slate-100">
            <h2 className="text-sm font-bold text-slate-600 uppercase tracking-wide flex items-center gap-2">
              <Target className="w-4 h-4 text-green-500" /> Party Promises ({mla.promises.length})
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Promise</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Category</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Target</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Progress</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Deadline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mla.promises.map(p => (
                  <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 max-w-[280px]">
                      <p className="text-slate-700 font-medium text-xs leading-snug">{p.description}</p>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">{p.category}</span>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-500 whitespace-nowrap">{p.target_group}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded font-medium ${STATUS_COLORS[p.status || ""] || "bg-gray-100 text-gray-600"}`}>
                        {p.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-slate-200 rounded-full">
                          <div
                            className="h-full rounded-full bg-amber-500"
                            style={{ width: `${p.progress_percent || 0}%` }}
                          />
                        </div>
                        <span className="text-xs text-slate-500">{p.progress_percent || 0}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-400 whitespace-nowrap">{p.deadline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}