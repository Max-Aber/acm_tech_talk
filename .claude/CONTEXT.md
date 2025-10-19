# Project Context for LLMs

## Project Overview

**Project Name:** ACM Tech Talk - Breaking Into AI Industry Event Website

**Purpose:** This is a single-page application (SPA) designed to promote and manage registrations for an ACM (Association for Computing Machinery) student chapter event focused on breaking into the AI industry.

**Tech Stack:**
- **Framework:** Vite + React 18 + TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Backend/Database:** Supabase integration (configured but not yet implemented)
- **Build Tool:** Vite 5.4.2

---

## Project Structure

```
acm_tech_talk/
├── .bolt/
│   ├── config.json          # Bolt configuration
│   └── prompt               # Design guidelines for UI/UX
├── .claude/
│   └── CONTEXT.md          # This file - project context for LLMs
├── public/
│   └── favicon.png         # ACM USD logo used as favicon
├── src/
│   ├── App.tsx             # Main app component with routing logic
│   ├── main.tsx            # React entry point
│   ├── index.css           # Global styles with Tailwind directives
│   ├── vite-env.d.ts       # Vite type definitions
│   ├── images/
│   │   └── ACM_USD_logo_transparent.png  # ACM USD chapter logo
│   └── pages/
│       ├── Schedule.tsx    # Event schedule/timeline page
│       ├── Hackathon.tsx   # Create-A-Thon hackathon information page
│       └── RSVP.tsx        # Registration page
├── index.html              # HTML entry point
├── package.json            # Project dependencies
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── tsconfig.json           # TypeScript configuration (root)
├── tsconfig.app.json       # TypeScript configuration (app)
├── tsconfig.node.json      # TypeScript configuration (node)
└── eslint.config.js        # ESLint configuration
```

---

## What This Application Does

The website is a **four-page SPA** with client-side routing that provides information about an ACM event:

### 1. **Home Page** (`App.tsx` - HomePage component)
- Hero section with animated gradient text
- Event overview with date, time, and location cards
- "About This Event" section explaining the event purpose
- "What You'll Learn" grid showing 4 key learning outcomes
- "Event Highlights" featuring expert panel, Q&A, and networking
- **Two call-to-action buttons at bottom:**
  - "Reserve Your Spot" (cyan/blue) - navigates to RSVP page
  - "Learn About the Hackathon" (pink/purple) - navigates to Hackathon page

**Event Details:**
- **Title:** ACM Tech Talk: Breaking Into AI Industry
- **Date:** Saturday, November 22, 2025
- **Time:** 10:00 AM - 7:30 PM
- **Location:** University of San Diego, UC Forum ABC
- **Capacity:** 200 attendees (185 spots remaining - hardcoded)

### 2. **Schedule Page** (`src/pages/Schedule.tsx`)
- Visual timeline with 14 scheduled segments from 9:45 AM to 7:30 PM:
  - Morning: Doors open, check-in, welcome, tech talk panel #1
  - Afternoon: Lunch/networking, tech talk #2, workshops (Vibe Coding, Daisy)
  - Evening: Hackathon (3:30-5:30 PM), presentations, dinner, awards ceremony
- Color-coded time blocks for different activity types (arrival, panel, interactive, workshop, hackathon, presentations, awards, networking)
- Location details for each segment (UC Forum A, B, C, UC Foyer)
- Important notes section with event tips

### 3. **Hackathon Page** (`src/pages/Hackathon.tsx`)
- Dedicated page for the Create-A-Thon hackathon
- Duration, location, and team size information (4-5 members per team)
- "About the Create-A-Thon" section explaining the collaborative hackathon format
- **Prizes & Recognition section** with yellow/gold theme:
  - 1st Place: $100 per team member + Winner Diplomas + Recognition
  - 2nd Place: $50 per team member + Winner Diplomas + Recognition
- Detailed hackathon timeline from workshops through awards
- Important information section covering registration requirements, mandatory workshops, and prizes
- Call-to-action button redirecting to RSVP page

### 4. **RSVP Page** (`src/pages/RSVP.tsx`)
- Event details summary (date, time, location)
- **"What's Included" section** positioned at top (below "Join Us" header) showing event benefits
- Main event registration section with external link (`https://forms.gle/zSdMSTRqJQPd3SZXA`)
- **Separate hackathon registration section** with pink/purple theme to differentiate from main event
  - **Clickable "CREATE-A-THON HACKATHON" badge** that navigates to Hackathon page
  - Hackathon-specific information (team size 4-5, mandatory workshops, 2-hour hacking period)
  - Separate registration link for hackathon participants
- Help section with contact options

**Navigation:** Simple client-side state-based routing using React useState hook. No router library used.

---

## Design Philosophy

Per `.bolt/prompt`:
> "For all designs I ask you to make, have them be beautiful, not cookie cutter. Make webpages that are fully featured and worthy for production."

**Design Characteristics:**
- Dark theme with gradient backgrounds (gray-900, slate-900, gray-950)
- Cyan/blue accent colors throughout (cyan-400, cyan-500, blue-400, blue-500)
- Pink/purple accent colors for hackathon-specific sections (pink-400, pink-500, purple-400, purple-500)
- Yellow/gold accent colors for prizes section (yellow-400, amber-400, yellow-500, amber-500)
- Glass morphism effects (backdrop-blur, semi-transparent backgrounds)
- Animated gradients on text
- Hover effects with scale transformations and glow shadows
- Grid pattern overlay for texture
- Radial gradient overlays for depth
- Consistent navigation bar across all pages with ACM USD logo
- Lucide React icons for all iconography
- Responsive design (mobile-first with md: breakpoints)

---

## Technical Implementation Details

### Routing System
- No external routing library used
- State-based navigation using `useState<Page>('home')`
- Type-safe page navigation with TypeScript union type: `type Page = 'home' | 'schedule' | 'rsvp' | 'hackathon'`
- Navigation handled via `onNavigate` callback prop passed to child components

### Component Architecture
- **App.tsx**: Main container with routing logic
- **HomePage**: Inline component within App.tsx
- **Schedule**: Separate page component
- **Hackathon**: Separate page component for Create-A-Thon information
- **RSVP**: Separate page component with both event and hackathon registration
- All pages include consistent navigation header and footer

### Styling Approach
- Tailwind utility classes for all styling
- No custom CSS beyond Tailwind directives in index.css
- Gradient utility classes used extensively
- Custom animations defined in Tailwind config

### Icons
- All icons from `lucide-react` package
- Common icons used: Calendar, MapPin, Users, Clock, Sparkles, ChevronRight, ArrowLeft, ExternalLink, Code, Trophy, Lightbulb

---

## Current Development State

### Completed Features
- ✅ Full UI/UX design implementation
- ✅ Home page with comprehensive event information
- ✅ Schedule page with detailed full-day timeline (9:45 AM - 7:30 PM)
- ✅ Hackathon page with Create-A-Thon details and timeline
- ✅ RSVP page with separate registration sections for event and hackathon
- ✅ Responsive design for mobile and desktop
- ✅ Navigation system between all four pages
- ✅ Project setup with Vite + React + TypeScript
- ✅ Tailwind CSS configuration
- ✅ ESLint configuration
- ✅ Git repository initialized and pushed to GitHub

### Pending/Incomplete Features
- ⚠️ **Registration links use Google Forms** - currently pointing to `https://forms.gle/zSdMSTRqJQPd3SZXA`
- ⚠️ **Supabase integration not implemented** - package installed but not used
- ⚠️ **No backend/database connection** - all data is hardcoded
- ⚠️ **Capacity counter is static** - "185 spots remaining" is hardcoded, not dynamic
- ⚠️ **No form validation or submission logic**
- ⚠️ **No analytics or tracking**
- ⚠️ **Contact email** - acm.usdchapter@gmail.com

### Known Issues/Limitations
- No actual data persistence
- No admin panel to manage event details
- No attendee management system
- Event details are hardcoded (date: November 22, 2025)
- No authentication system
- No email notifications
- Hackathon and main event use same registration link (may need separate forms)

---

## Development Setup and Challenges

### Environment
- **OS:** Windows (MINGW64_NT-10.0-26100)
- **Node Version:** v22.18.0
- **Package Manager:** npm

### Setup Process
1. Dependencies were installed using `npm install --ignore-scripts` due to Windows PATH issues
2. Development server runs via `./node_modules/.bin/vite` instead of `npm run dev`
3. Initial git repository created with commit: `3eda5be - Initial commit: Vite + React + TypeScript project setup`

### Challenges Encountered and Solutions

#### Challenge 1: npm postinstall scripts failing
**Problem:** When running `npm install`, postinstall scripts (like esbuild's install.js) failed with error:
```
'node' is not recognized as an internal or external command
```

**Root Cause:** npm scripts on Windows use cmd.exe, which didn't have Node.js in its PATH, even though Node was accessible from Git Bash.

**Solution:** Used `npm install --ignore-scripts` flag to bypass postinstall scripts. The application runs fine without them since the actual binaries are installed correctly.

#### Challenge 2: Running npm scripts from Git Bash
**Problem:** `npm run dev` failed with same PATH issue when npm tried to execute vite via cmd.exe.

**Solution:** Run Vite directly from node_modules: `./node_modules/.bin/vite`

### How to Run the Development Server

```bash
# Option 1: Direct execution (recommended for this environment)
./node_modules/.bin/vite

# Option 2: If npm scripts work in your environment
npm run dev

# The server will start on http://localhost:5173/
```

### How to Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

### Other Available Scripts

```bash
npm run lint          # Run ESLint
npm run typecheck     # TypeScript type checking without emitting files
```

---

## Future Development Suggestions

### High Priority
1. **Replace placeholder registration link** with actual Google Form or custom registration system
2. **Implement Supabase backend** for storing RSVPs and tracking capacity
3. **Add dynamic capacity counter** that updates based on real registration data
4. **Create admin dashboard** to manage event details, view registrations
5. **Add email notification system** for registration confirmations

### Medium Priority
1. **Add form validation** if implementing custom registration form
2. **Implement calendar integration** (Google Calendar, iCal download)
3. **Add social sharing features** (share on Twitter, LinkedIn, etc.)
4. **Create countdown timer** to event date
5. **Add speaker profiles** section with photos and bios
6. **Implement FAQ section**

### Low Priority
1. **Add animations** on scroll (AOS, Framer Motion)
2. **Implement dark/light mode toggle** (currently dark only)
3. **Add testimonials** from previous event attendees
4. **Create photo gallery** from past events
5. **Add accessibility improvements** (ARIA labels, keyboard navigation)
6. **Implement analytics** (Google Analytics, Plausible, etc.)

---

## Code Style and Conventions

### TypeScript
- Strict mode enabled
- Interface-based prop typing
- Union types for constrained values (e.g., `Page` type)
- Explicit return types not required (inferred)

### React
- Functional components only (no class components)
- Hooks-based state management
- Props passed via destructured interfaces
- Event handlers use arrow functions

### Naming Conventions
- Components: PascalCase (e.g., `HomePage`, `Schedule`)
- Functions: camelCase (e.g., `onNavigate`, `renderPage`)
- Types/Interfaces: PascalCase (e.g., `Page`, `RSVPProps`)
- CSS classes: Tailwind utilities (lowercase with hyphens)

### File Organization
- One component per file (except inline components like HomePage)
- Page components in `src/pages/`
- Main app logic in `src/App.tsx`
- Global styles in `src/index.css`

---

## Important Notes for Future LLM Sessions

1. **Don't install unnecessary packages** - The project uses minimal dependencies by design. Lucide React provides all needed icons. Tailwind handles all styling.

2. **Maintain design consistency** - The cyan/blue gradient theme with dark backgrounds is intentional. Pink/purple gradients are used specifically for hackathon sections. Don't introduce new color schemes without explicit request.

3. **Windows environment quirks** - If encountering npm script issues, remember to use `./node_modules/.bin/vite` or `--ignore-scripts` flag.

4. **No routing library needed** - The simple state-based navigation works well for this four-page app. Don't add React Router unless the app grows significantly.

5. **Supabase is configured but unused** - The package is installed but not implemented. If implementing backend features, start with Supabase client configuration.

6. **Hardcoded data** - Event dates, capacity numbers, and registration links are all hardcoded. Event is scheduled for November 22, 2025.

7. **Production-ready design** - The UI is already polished and production-worthy. Focus development efforts on backend functionality and dynamic data management.

8. **Hackathon integration** - The hackathon (Create-A-Thon) is a key component of the event, running from 3:30-5:30 PM with mandatory workshops beforehand.

---

## Contact and Resources

**Contact Email:** acm.usdchapter@gmail.com
**Event Organization:** ACM USD Student Chapter
**Repository:** GitHub (https://github.com/Max-Aber/acm_tech_talk)

---

## Changelog

### 2024-10-16 (Session 1)
- Initial project setup and configuration
- Installed dependencies with `npm install --ignore-scripts`
- Successfully ran development server on `http://localhost:5173/`
- Initialized git repository
- Created initial commit (3eda5be)
- Created this CONTEXT.md file for future LLM sessions

### 2025-10-16 (Session 2)
- Updated website favicon to ACM USD logo (created public/favicon.png)
- Replaced Sparkles icon with ACM USD logo in navigation headers across all pages
- Added ACM USD logo to src/images/ directory
- Updated all page components (App.tsx, Schedule.tsx, RSVP.tsx) to use logo image instead of icon
- Logo displays at 64x64px (w-16 h-16) in navigation bar
- Created public directory for static assets (favicon)

### 2025-10-18 (Session 3)
- Created new Hackathon page (Hackathon.tsx) with Create-A-Thon details
- Updated routing system to include 'hackathon' in Page type union
- Added Hackathon navigation link to all page headers (Home, Schedule, RSVP, Hackathon)
- Added separate hackathon registration section to RSVP page with pink/purple theme
- Included hackathon timeline, team formation details (4-5 members), and workshop requirements
- Updated event details across all pages (date: November 22, 2025, location: UC Forum ABC)
- Updated schedule with full-day timeline (9:45 AM - 7:30 PM) including workshops and hackathon
- Team size adjusted to 4-5 members per team
- Committed and pushed changes to GitHub (commit: e9638fc)
- Updated CONTEXT.md to reflect four-page structure and new features

### 2025-10-18 (Session 3 - UX Improvements)
- Made "CREATE-A-THON HACKATHON" badge clickable on RSVP page to navigate to Hackathon page
- Reorganized RSVP page: moved "What's Included" section to top (below "Join Us" header)
- Added "Learn About the Hackathon" button to home page bottom (pink/purple themed)
- Added comprehensive Prizes & Recognition section to Hackathon page:
  - 1st Place: $100 per team member + diplomas + recognition
  - 2nd Place: $50 per team member + diplomas + recognition
  - Yellow/gold color scheme for prizes section
- Removed "What You'll Experience" section from Hackathon page (streamlined content)
- Committed and pushed changes to GitHub (commit: 04496c4)
- Updated CONTEXT.md with latest UX improvements

---

**Last Updated:** October 18, 2025 (Session 3 - UX Improvements)
**Project Status:** Four-page UI complete with hackathon integration, prizes section, and improved navigation flow
**Next Session Priority:** Implement separate registration forms for event and hackathon, consider Supabase integration
