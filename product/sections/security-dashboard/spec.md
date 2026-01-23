# Security Dashboard Specification

## Overview
The Security Dashboard is the central monitoring hub that displays key security metrics and active vulnerabilities across all repositories. Users can view high-level statistics, browse vulnerabilities in a card grid layout, drill into detailed vulnerability information, and take actions like triggering scans or reviewing fixes.

## User Flows
- View overview metrics showing total vulnerabilities, critical issues, and fix progress
- Browse vulnerabilities displayed as cards with severity, repository, and status information
- Filter and search vulnerabilities by severity, repository, or status
- Click on a vulnerability card to view full details including description, severity, affected files/code, AI-generated fix preview, and PR status
- Trigger a new security scan on any repository from the dashboard
- Quick review or approval of generated fixes directly from vulnerability details

## UI Requirements
- Top section with overview metrics/statistics (total vulnerabilities, critical count, fix progress)
- Card grid layout for displaying vulnerabilities with key information visible at a glance
- Filter and search controls for narrowing down the vulnerability list
- Vulnerability detail view (modal or side panel) showing complete information
- Action buttons for triggering scans and reviewing/approving fixes
- Visual indicators for severity levels (critical, high, medium, low)
- Links to associated pull requests

## Configuration
- shell: true
