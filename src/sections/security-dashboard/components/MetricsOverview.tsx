import { Shield, AlertTriangle, CheckCircle2, GitPullRequest, Scan } from 'lucide-react'
import type { DashboardMetrics, Repository } from '@/../product/sections/security-dashboard/types'

interface MetricsOverviewProps {
  metrics: DashboardMetrics
  repositories: Repository[]
  onTriggerScan?: (repositoryId: string) => void
}

export function MetricsOverview({ metrics, repositories, onTriggerScan }: MetricsOverviewProps) {
  return (
    <div className="mb-12">
      {/* Primary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Total Vulnerabilities */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
          <div className="relative bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-violet-500/50 transition-all">
            <div className="flex items-start justify-between mb-3">
              <div className="p-3 bg-violet-500/10 rounded-xl">
                <Shield className="w-6 h-6 text-violet-400" />
              </div>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                Total
              </span>
            </div>
            <div className="text-4xl font-bold text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {metrics.totalVulnerabilities}
            </div>
            <div className="text-sm text-slate-400" style={{ fontFamily: 'Inter, sans-serif' }}>
              Vulnerabilities
            </div>
          </div>
        </div>

        {/* Critical Count */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
          <div className="relative bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-red-500/50 transition-all">
            <div className="flex items-start justify-between mb-3">
              <div className="p-3 bg-red-500/10 rounded-xl">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                Critical
              </span>
            </div>
            <div className="text-4xl font-bold text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {metrics.criticalCount}
            </div>
            <div className="text-sm text-slate-400" style={{ fontFamily: 'Inter, sans-serif' }}>
              Require immediate action
            </div>
          </div>
        </div>

        {/* Fixed Count */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-green-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
          <div className="relative bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all">
            <div className="flex items-start justify-between mb-3">
              <div className="p-3 bg-emerald-500/10 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                Fixed
              </span>
            </div>
            <div className="text-4xl font-bold text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {metrics.fixedCount}
            </div>
            <div className="text-sm text-slate-400" style={{ fontFamily: 'Inter, sans-serif' }}>
              Successfully merged
            </div>
          </div>
        </div>

        {/* Active PRs */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
          <div className="relative bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
            <div className="flex items-start justify-between mb-3">
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <GitPullRequest className="w-6 h-6 text-cyan-400" />
              </div>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                Active
              </span>
            </div>
            <div className="text-4xl font-bold text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {metrics.activePRs}
            </div>
            <div className="text-sm text-slate-400" style={{ fontFamily: 'Inter, sans-serif' }}>
              Pull requests open
            </div>
          </div>
        </div>
      </div>

      {/* Severity Breakdown Bar */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Severity Distribution
          </h3>
          <div className="flex items-center gap-2">
            <Scan className="w-4 h-4 text-slate-400" />
            <button
              onClick={() => onTriggerScan?.(repositories[0]?.id)}
              className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Trigger Scan
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {/* Critical */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                Critical
              </span>
              <span className="text-sm font-bold text-red-400" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {metrics.criticalCount}
              </span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-500"
                style={{ width: `${(metrics.criticalCount / metrics.totalVulnerabilities) * 100}%` }}
              />
            </div>
          </div>

          {/* High */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                High
              </span>
              <span className="text-sm font-bold text-orange-400" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {metrics.highCount}
              </span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-500"
                style={{ width: `${(metrics.highCount / metrics.totalVulnerabilities) * 100}%` }}
              />
            </div>
          </div>

          {/* Medium */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                Medium
              </span>
              <span className="text-sm font-bold text-yellow-400" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {metrics.mediumCount}
              </span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full transition-all duration-500"
                style={{ width: `${(metrics.mediumCount / metrics.totalVulnerabilities) * 100}%` }}
              />
            </div>
          </div>

          {/* Low */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                Low
              </span>
              <span className="text-sm font-bold text-blue-400" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {metrics.lowCount}
              </span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${(metrics.lowCount / metrics.totalVulnerabilities) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
