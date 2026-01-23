import data from '@/../product/sections/security-dashboard/data.json'
import { SecurityDashboard } from './components/SecurityDashboard'

export default function SecurityDashboardPreview() {
  return (
    <SecurityDashboard
      repositories={data.repositories}
      scans={data.scans}
      vulnerabilities={data.vulnerabilities}
      fixes={data.fixes}
      pullRequests={data.pullRequests}
      onViewVulnerability={(id) => console.log('View vulnerability:', id)}
      onTriggerScan={(repoId) => console.log('Trigger scan for repository:', repoId)}
      onReviewFix={(fixId) => console.log('Review fix:', fixId)}
      onViewPullRequest={(prId) => console.log('View pull request:', prId)}
      onFilterChange={(filters) => console.log('Filter changed:', filters)}
    />
  )
}
