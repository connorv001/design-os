# Data Model

## Entities

### Repository
A connected code repository (GitHub/GitLab) that gets scanned for vulnerabilities.

### Scan
A Kubescape security scan run on a repository, identifying vulnerabilities at a point in time.

### Vulnerability
A specific security issue found by Kubescape, with severity and details.

### Fix
An AI-generated code fix for a vulnerability, created by Claude.

### Pull Request
An automated PR containing one or more fixes, awaiting review.

### Audit Log
A record of actions taken (scan run, fix generated, PR reviewed) for compliance tracking.

## Relationships

- Repository has many Scans
- Scan discovers many Vulnerabilities
- Vulnerability has one Fix
- Pull Request contains many Fixes
- Pull Request belongs to Repository
- Audit Log records actions on Repository, Scan, Vulnerability, Fix, and Pull Request
