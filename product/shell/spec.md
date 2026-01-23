# Application Shell Specification

## Overview
The Zelyo application shell uses a fixed left sidebar navigation pattern, providing clear access to all major sections while maximizing content area space. The design emphasizes security monitoring workflows with quick access to dashboard, scanning, and compliance features.

## Navigation Structure
- Security Dashboard → Main dashboard view
- Automated Scanning → Scan configuration and management
- AI Fix Engine → Fix customization and review
- Integration & Setup → Repository connections and webhooks
- Audit & Compliance → Compliance reporting and history
- Settings → App settings and preferences
- Help → Documentation and support

## User Menu
Located in the top right corner of the content area. Contains user avatar, name, and a dropdown menu with:
- Account settings
- Logout option

## Layout Pattern
Fixed left sidebar (240px width) with:
- Zelyo logo at the top
- Main navigation items (vertically stacked)
- Settings and Help at the bottom of the sidebar

Content area fills remaining space to the right of the sidebar.

## Responsive Behavior
- **Desktop:** Fixed left sidebar always visible, content area on the right
- **Tablet:** Sidebar collapsible, hamburger menu button appears in top left of content area
- **Mobile:** Sidebar hidden by default, accessible via hamburger menu icon, overlays content when opened

## Design Notes
- Use violet (primary) for active navigation items and key accents
- Use cyan (secondary) for hover states and secondary highlights
- Use slate (neutral) for backgrounds, borders, and text
- Apply Space Grotesk font for navigation items and headings
- Apply Inter font for body text and labels
- Dark mode support throughout with appropriate contrast levels
- Icons from lucide-react for consistent visual language
