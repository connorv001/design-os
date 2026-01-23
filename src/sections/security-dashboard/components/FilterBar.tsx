import { Search, Filter } from 'lucide-react'
import type { Repository, VulnerabilityFilters } from '@/../product/sections/security-dashboard/types'

interface FilterBarProps {
  repositories: Repository[]
  filters: VulnerabilityFilters
  onFilterChange: (filters: VulnerabilityFilters) => void
  resultCount: number
}

export function FilterBar({ repositories, filters, onFilterChange, resultCount }: FilterBarProps) {
  return (
    <div className="mb-8">
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                placeholder="Search vulnerabilities..."
                value={filters.searchQuery || ''}
                onChange={(e) => onFilterChange({ ...filters, searchQuery: e.target.value })}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
            </div>
          </div>

          {/* Severity Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-500" />
            <select
              value={filters.severity || 'all'}
              onChange={(e) => onFilterChange({ ...filters, severity: e.target.value as any })}
              className="bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all cursor-pointer"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <option value="all">All Severities</option>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <select
              value={filters.status || 'all'}
              onChange={(e) => onFilterChange({ ...filters, status: e.target.value as any })}
              className="bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all cursor-pointer"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <option value="all">All Status</option>
              <option value="fix_pending">Fix Pending</option>
              <option value="pr_created">PR Created</option>
              <option value="pr_merged">Merged</option>
              <option value="ignored">Ignored</option>
            </select>
          </div>

          {/* Repository Filter */}
          <div>
            <select
              value={filters.repositoryId || 'all'}
              onChange={(e) => onFilterChange({ ...filters, repositoryId: e.target.value })}
              className="bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all cursor-pointer"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <option value="all">All Repositories</option>
              {repositories.map(repo => (
                <option key={repo.id} value={repo.id}>
                  {repo.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 pt-4 border-t border-slate-800">
          <p className="text-sm text-slate-400" style={{ fontFamily: 'Inter, sans-serif' }}>
            Showing <span className="font-bold text-cyan-400">{resultCount}</span> vulnerabilit{resultCount === 1 ? 'y' : 'ies'}
          </p>
        </div>
      </div>
    </div>
  )
}
