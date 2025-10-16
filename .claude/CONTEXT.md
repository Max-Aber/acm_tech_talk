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
├── src/
│   ├── App.tsx             # Main app component with routing logic
│   ├── main.tsx            # React entry point
│   ├── index.css           # Global styles with Tailwind directives
│   ├── vite-env.d.ts       # Vite type definitions
│   └── pages/
│       ├── Schedule.tsx    # Event schedule/timeline page
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

The website is a **three-page SPA** with client-side routing that provides information about an ACM event:

### 1. **Home Page** (`App.tsx` - HomePage component)
- Hero section with animated gradient text
- Event overview with date, time, and location cards
- "About This Event" section explaining the event purpose
- "What You'll Learn" grid showing 4 key learning outcomes
- "Event Highlights" featuring expert panel, Q&A, and networking
- Call-to-action button to RSVP

**Event Details:**
- **Title:** ACM Tech Talk: Breaking Into AI Industry
- **Date:** Friday, November 15, 2024
- **Time:** 6:00 PM - 8:30 PM EST
- **Location:** Engineering Building, Room 301, Main Campus
- **Capacity:** 150 attendees (85 spots remaining - hardcoded)

### 2. **Schedule Page** (`src/pages/Schedule.tsx`)
- Visual timeline with 6 scheduled segments:
  - 6:00-6:15 PM: Registration & Welcome
  - 6:15-6:30 PM: Opening Remarks
  - 6:30-7:15 PM: Panel Discussion
  - 7:15-7:45 PM: Interactive Q&A
  - 7:45-8:00 PM: Lightning Talks
  - 8:00-8:30 PM: Networking Reception
- Color-coded time blocks for different activity types
- Important notes section with event tips

### 3. **RSVP Page** (`src/pages/RSVP.tsx`)
- Event details summary (date, time, location)
- External registration link (currently placeholder: `https://forms.gle/example-rsvp-link`)
- "What's Included" list (5 items)
- Help section with contact options

**Navigation:** Simple client-side state-based routing using React useState hook. No router library used.

---

## Design Philosophy

Per `.bolt/prompt`:
> "For all designs I ask you to make, have them be beautiful, not cookie cutter. Make webpages that are fully featured and worthy for production."

**Design Characteristics:**
- Dark theme with gradient backgrounds (gray-900, slate-900, gray-950)
- Cyan/blue accent colors throughout (cyan-400, cyan-500, blue-400, blue-500)
- Glass morphism effects (backdrop-blur, semi-transparent backgrounds)
- Animated gradients on text
- Hover effects with scale transformations and glow shadows
- Grid pattern overlay for texture
- Radial gradient overlays for depth
- Consistent navigation bar across all pages
- Lucide React icons for all iconography
- Responsive design (mobile-first with md: breakpoints)

---

## Technical Implementation Details

### Routing System
- No external routing library used
- State-based navigation using `useState<Page>('home')`
- Type-safe page navigation with TypeScript union type: `type Page = 'home' | 'schedule' | 'rsvp'`
- Navigation handled via `onNavigate` callback prop passed to child components

### Component Architecture
- **App.tsx**: Main container with routing logic
- **HomePage**: Inline component within App.tsx
- **Schedule**: Separate page component
- **RSVP**: Separate page component
- All pages include consistent navigation header and footer

### Styling Approach
- Tailwind utility classes for all styling
- No custom CSS beyond Tailwind directives in index.css
- Gradient utility classes used extensively
- Custom animations defined in Tailwind config

### Icons
- All icons from `lucide-react` package
- Common icons used: Calendar, MapPin, Users, Clock, Sparkles, ChevronRight, ArrowLeft, ExternalLink

---

## Current Development State

### Completed Features
- ✅ Full UI/UX design implementation
- ✅ Home page with comprehensive event information
- ✅ Schedule page with detailed timeline
- ✅ RSVP page with registration flow
- ✅ Responsive design for mobile and desktop
- ✅ Navigation system between pages
- ✅ Project setup with Vite + React + TypeScript
- ✅ Tailwind CSS configuration
- ✅ ESLint configuration
- ✅ Git repository initialized with initial commit

### Pending/Incomplete Features
- ⚠️ **RSVP registration link is placeholder** - needs real Google Form or registration system
- ⚠️ **Supabase integration not implemented** - package installed but not used
- ⚠️ **No backend/database connection** - all data is hardcoded
- ⚠️ **Capacity counter is static** - "85 spots remaining" is hardcoded, not dynamic
- ⚠️ **No form validation or submission logic**
- ⚠️ **No analytics or tracking**
- ⚠️ **Email links are placeholder** - events@acm.org may not be real

### Known Issues/Limitations
- No actual data persistence
- No admin panel to manage event details
- No attendee management system
- Event date is hardcoded (November 15, 2024) - may need updating
- No authentication system
- No email notifications

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

2. **Maintain design consistency** - The cyan/blue gradient theme with dark backgrounds is intentional. Don't introduce new color schemes without explicit request.

3. **Windows environment quirks** - If encountering npm script issues, remember to use `./node_modules/.bin/vite` or `--ignore-scripts` flag.

4. **No routing library needed** - The simple state-based navigation works well for this three-page app. Don't add React Router unless the app grows significantly.

5. **Supabase is configured but unused** - The package is installed but not implemented. If implementing backend features, start with Supabase client configuration.

6. **Placeholder data** - Remember that event dates, capacity numbers, and registration links are all hardcoded placeholders.

7. **Production-ready design** - The UI is already polished and production-worthy. Focus development efforts on backend functionality and dynamic data management.

---

## Contact and Resources

**Mock Contact:** events@acm.org (placeholder)
**Event Organization:** ACM Student Chapter
**Repository:** Local only (not pushed to remote)

---

## Changelog

### 2024-10-16 (Session 1)
- Initial project setup and configuration
- Installed dependencies with `npm install --ignore-scripts`
- Successfully ran development server on `http://localhost:5173/`
- Initialized git repository
- Created initial commit (3eda5be)
- Created this CONTEXT.md file for future LLM sessions

---

**Last Updated:** October 16, 2025 (Session 1)
**Project Status:** UI Complete, Backend/Integration Pending
**Next Session Priority:** Implement real registration system and Supabase integration
