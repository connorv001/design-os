import { useState } from 'react'
import type { SecurityDashboardProps, VulnerabilityFilters } from '@/../product/sections/security-dashboard/types'
import { MetricsOverview } from './MetricsOverview'
import { VulnerabilityGrid } from './VulnerabilityGrid'
import { VulnerabilityDetail } from './VulnerabilityDetail'
import { FilterBar } from './FilterBar'

// Typography: Space Grotesk (headings), Inter (body), JetBrains Mono (code)
// Colors: violet (primary), cyan (secondary), slate (neutral)

export function SecurityDashboard({
  repositories,
  scans,
  vulnerabilities,
  fixes,
  pullRequests,
  onViewVulnerability,
  onTriggerScan,
  onReviewFix,
  onViewPullRequest,
  onFilterChange,
}: SecurityDashboardProps) {
  const [selectedVulnerabilityId, setSelectedVulnerabilityId] = useState<string | null>(null)
  const [filters, setFilters] = useState<VulnerabilityFilters>({
    severity: 'all',
    status: 'all',
    repositoryId: 'all',
    searchQuery: '',
  })

  // Calculate metrics from data
  const metrics = {
    totalVulnerabilities: vulnerabilities.length,
    criticalCount: vulnerabilities.filter(v => v.severity === 'critical').length,
    highCount: vulnerabilities.filter(v => v.severity === 'high').length,
    mediumCount: vulnerabilities.filter(v => v.severity === 'medium').length,
    lowCount: vulnerabilities.filter(v => v.severity === 'low').length,
    fixedCount: vulnerabilities.filter(v => v.status === 'pr_merged').length,
    pendingCount: vulnerabilities.filter(v => v.status === 'fix_pending').length,
    activePRs: pullRequests.filter(pr => pr.status === 'open').length,
  }

  // Filter vulnerabilities
  const filteredVulnerabilities = vulnerabilities.filter(vuln => {
    if (filters.severity && filters.severity !== 'all' && vuln.severity !== filters.severity) {
      return false
    }
    if (filters.status && filters.status !== 'all' && vuln.status !== filters.status) {
      return false
    }
    if (filters.repositoryId && filters.repositoryId !== 'all' && vuln.repositoryId !== filters.repositoryId) {
      return false
    }
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase()
      return vuln.title.toLowerCase().includes(query) || vuln.description.toLowerCase().includes(query)
    }
    return true
  })

  const handleFilterChange = (newFilters: VulnerabilityFilters) => {
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  const handleViewVulnerability = (id: string) => {
    setSelectedVulnerabilityId(id)
    onViewVulnerability?.(id)
  }

  const handleCloseDetail = () => {
    setSelectedVulnerabilityId(null)
  }

  const selectedVulnerability = vulnerabilities.find(v => v.id === selectedVulnerabilityId)
  const selectedFix = selectedVulnerability?.fixId
    ? fixes.find(f => f.id === selectedVulnerability.fixId)
    : undefined
  const selectedPR = selectedFix?.pullRequestId
    ? pullRequests.find(pr => pr.id === selectedFix.pullRequestId)
    : undefined

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Main Content */}
      <div className="px-6 py-8 lg:px-12 lg:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-500 bg-clip-text text-transparent" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Security Dashboard
          </h1>
          <p className="text-slate-400 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            Real-time vulnerability monitoring and automated fix tracking
          </p>
        </div>

        {/* Metrics Overview */}
        <MetricsOverview
          metrics={metrics}
          repositories={repositories}
          onTriggerScan={onTriggerScan}
        />

        {/* Filter Bar */}
        <FilterBar
          repositories={repositories}
          filters={filters}
          onFilterChange={handleFilterChange}
          resultCount={filteredVulnerabilities.length}
        />

        {/* Vulnerability Grid */}
        <VulnerabilityGrid
          vulnerabilities={filteredVulnerabilities}
          repositories={repositories}
          onViewVulnerability={handleViewVulnerability}
        />
      </div>

      {/* Vulnerability Detail Modal */}
      {selectedVulnerability && (
        <VulnerabilityDetail
          vulnerability={selectedVulnerability}
          fix={selectedFix}
          pullRequest={selectedPR}
          repository={repositories.find(r => r.id === selectedVulnerability.repositoryId)}
          onClose={handleCloseDetail}
          onReviewFix={onReviewFix}
          onViewPullRequest={onViewPullRequest}
        />
      )}
    </div>
  )
}
