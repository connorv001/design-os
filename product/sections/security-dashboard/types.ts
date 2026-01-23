// =============================================================================
// Data Types
// =============================================================================

export interface Repository {
  id: string
  name: string
  fullName: string
  platform: 'github' | 'gitlab'
  url: string
  language: string
  branch: string
  lastScanned: string
}

export interface Scan {
  id: string
  repositoryId: string
  status: 'running' | 'completed' | 'failed'
  startedAt: string
  completedAt: string | null
  vulnerabilitiesFound: number
  criticalCount: number
  highCount: number
  mediumCount: number
  lowCount: number
}

export interface AffectedFile {
  path: string
  lineStart: number
  lineEnd: number
  code: string
}

export interface Vulnerability {
  id: string
  scanId: string
  repositoryId: string
  severity: 'critical' | 'high' | 'medium' | 'low'
  status: 'fix_pending' | 'pr_created' | 'pr_merged' | 'ignored'
  title: string
  description: string
  cveId: string | null
  affectedFiles: AffectedFile[]
  detectedAt: string
  fixId: string | null
}

export interface Fix {
  id: string
  vulnerabilityId: string
  status: 'pending_review' | 'pr_created' | 'merged' | 'rejected'
  generatedAt: string
  code: string
  description: string
  confidence: number
  pullRequestId: string | null
}

export interface PullRequestChecks {
  ci: 'pending' | 'running' | 'passed' | 'failed'
  tests: 'pending' | 'running' | 'passed' | 'failed'
  security: 'pending' | 'running' | 'passed' | 'failed'
}

export interface PullRequest {
  id: string
  repositoryId: string
  number: number
  title: string
  url: string
  status: 'open' | 'merged' | 'closed'
  createdAt: string
  updatedAt: string
  mergedAt?: string
  fixIds: string[]
  author: string
  reviewers: string[]
  checks: PullRequestChecks
}

export interface DashboardMetrics {
  totalVulnerabilities: number
  criticalCount: number
  highCount: number
  mediumCount: number
  lowCount: number
  fixedCount: number
  pendingCount: number
  activePRs: number
}

// =============================================================================
// Component Props
// =============================================================================

export interface SecurityDashboardProps {
  /** List of connected repositories */
  repositories: Repository[]
  /** Recent security scans */
  scans: Scan[]
  /** Active vulnerabilities across all repositories */
  vulnerabilities: Vulnerability[]
  /** AI-generated fixes for vulnerabilities */
  fixes: Fix[]
  /** Automated pull requests containing fixes */
  pullRequests: PullRequest[]
  /** Called when user wants to view vulnerability details */
  onViewVulnerability?: (vulnerabilityId: string) => void
  /** Called when user wants to trigger a new scan on a repository */
  onTriggerScan?: (repositoryId: string) => void
  /** Called when user wants to review/approve a fix */
  onReviewFix?: (fixId: string) => void
  /** Called when user wants to view a pull request */
  onViewPullRequest?: (pullRequestId: string) => void
  /** Called when user filters vulnerabilities */
  onFilterChange?: (filters: VulnerabilityFilters) => void
}

export interface VulnerabilityFilters {
  severity?: 'critical' | 'high' | 'medium' | 'low' | 'all'
  status?: 'fix_pending' | 'pr_created' | 'pr_merged' | 'ignored' | 'all'
  repositoryId?: string | 'all'
  searchQuery?: string
}
