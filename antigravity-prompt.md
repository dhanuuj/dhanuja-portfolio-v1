# Portfolio Build Prompt — Dhanuja Senarathna
> Paste this entire document into Antigravity AI as your build prompt.
> All content is pre-filled. Do not change names, tech stacks, or project details.

---

## What You Are Building

A single-page personal portfolio website for **Dhanuja Senarathna**, a frontend developer and BSc Software Engineering student from Sri Lanka. This is not a generic portfolio — it has a distinct personality and a few interaction patterns that make it memorable.

The portfolio must feel: **dark, editorial, warm, and alive**. Not cold and corporate. Not a template. Something that feels like it was made by someone with both technical skill and a creative eye.

---

## Tech Stack

```
Framework:       React 18 + Vite
Language:        TypeScript
Styling:         Tailwind CSS v3
Animations:      Framer Motion
Icons:           Lucide React
Fonts:           Google Fonts (specified below)
Deployment:      Vercel
```

Do not use Next.js. Do not use any UI component libraries (no shadcn, no MUI). Build everything custom.

---

## Design System

### Color Palette

```css
:root {
  --bg:              #080808;   /* near-black background */
  --surface:         #111111;   /* card / section backgrounds */
  --surface-2:       #1a1a1a;   /* elevated cards */
  --border:          #222222;   /* subtle borders */
  --text:            #f2f2f2;   /* primary text */
  --text-muted:      #888888;   /* secondary text, labels */
  --text-faint:      #444444;   /* very subtle, decorative */
  --accent:          #f0a500;   /* warm amber — the ONLY accent color */
  --accent-dim:      #7a5300;   /* muted amber for borders/tags */
  --accent-glow:     rgba(240, 165, 0, 0.12); /* glow for hover states */
}
```

### Typography

```
Display / Hero:    "Syne" — Google Fonts (weight 700, 800)
Body / UI:         "DM Sans" — Google Fonts (weight 400, 500)
Mono / Labels:     "JetBrains Mono" — Google Fonts (weight 400)
```

Import in index.html:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&family=JetBrains+Mono&display=swap" rel="stylesheet">
```

### Spacing
- Section padding: `py-28 px-6 md:px-16 lg:px-24`
- Card padding: `p-6`
- Grid gaps: `gap-5`
- Max content width: `max-w-6xl mx-auto`

### Borders & Radius
- Cards: `rounded-2xl border border-[#222222]`
- Tags/Pills: `rounded-full`
- Buttons: `rounded-full`

### Shadows (Cinema warm glow)
```css
/* Default card */
box-shadow: 0 1px 3px rgba(0,0,0,0.4);

/* Hover card */
box-shadow: 0 0 0 1px #f0a500, 0 8px 32px rgba(240,165,0,0.08);
```

---

## Site Structure

Single page. Sections in this exact order:

```
1. Navbar          (sticky, minimal)
2. Hero            (full viewport)
3. About           (two-column)
4. Currently       (active projects — unique section)
5. Projects        (full project grid)
6. Skills          (visual tag cloud + bars)
7. Beyond Code     (personality section)
8. Contact         (split layout)
9. Footer          (minimal)
```

---

## Section 1 — Navbar

**Behavior:**
- Sticky at top, `position: fixed`, full width
- Background: `rgba(8,8,8,0.85)` with `backdrop-filter: blur(12px)`
- Becomes slightly more opaque on scroll (add class `scrolled` when `scrollY > 50`)
- Left: Logo — `<D.S>` in JetBrains Mono, amber color, 15px
- Right: Nav links — About · Work · Contact — in DM Sans, 14px, text-muted, hover to text-accent with underline slide-in transition
- No hamburger needed. On mobile, hide nav links.

**Code note:** Use `useEffect` + `window.addEventListener('scroll')` to handle scroll state.

---

## Section 2 — Hero

**Layout:** Full viewport height (`min-h-screen`), centered content, slight left offset on desktop.

**Content:**

```
Small label (top):   "UI/UX & Frontend Developer · Sri Lanka"
                     → JetBrains Mono, 12px, text-muted, letter-spacing 0.15em

Main heading:        "DHANUJA"
                     "SENARATHNA"
                     → Syne 800, 80px desktop / 48px mobile
                     → text-white, line-height 0.95
                     → Each word on its own line

Tagline:             "Code to live. Live to film."
                     → DM Sans 500, 18px, text-muted

Sub-line:            "I build frontend interfaces and shoot the world between commits."
                     → DM Sans 400, 15px, text-faint

CTA buttons (row):
  Primary:    "View My Work"   → amber fill, black text, rounded-full, px-6 py-3
  Secondary:  "Get In Touch"   → border border-[#333], text-muted, rounded-full, px-6 py-3
              → hover: border-accent, text-white

Bottom-left decoration:
  A thin vertical line (2px, amber, 60px tall) with a dot at top
  → Decorative, not functional
```

**Animations (Framer Motion):**
```tsx
// Stagger children on load
// Label: fade in, y: -10 → 0, delay: 0
// "DHANUJA": characters animate in left→right, delay: 0.1
// "SENARATHNA": characters animate in left→right, delay: 0.3
// Tagline: fade in, y: 20 → 0, delay: 0.6
// Sub-line: fade in, delay: 0.8
// CTAs: fade in, y: 10 → 0, delay: 1.0
```

**Background:**
- Solid `#080808`
- Very subtle radial gradient in top-left: `radial-gradient(ellipse 60% 50% at 10% 0%, rgba(240,165,0,0.04) 0%, transparent 70%)`
- Subtle grid pattern overlay: thin lines, `rgba(255,255,255,0.015)`, 40px grid

---

## Section 3 — About

(Use the uploaded avatar image as the visual identity/profile illustration in the right column or in any other suitable place, if needed. It is an AI generated image so it will look good).

Use the uploaded original photo in the right side of the about section or another suitable profile area for aesthetic purposes. 

These uploaded images override the placeholder-image rule in the prompt if a personal image is appropriate.)


**Section label:** `<AboutLabel />` — "// about me" in JetBrains Mono, amber, 12px

**Layout:** Two columns on desktop (60% text / 40% visual). Stack on mobile.

**Left column — Text:**
```
Heading:  "The person behind the code."
          → Syne 700, 36px

Body:
  I'm Dhanuja — a frontend developer and software engineering student at UCLan,
  building on the web and filming the world between deadlines.

  My background in videography gave me an eye for how things should look, not
  just how they should work. I bring that into every interface I build.

  I care about the details — the spacing, the transitions, the tiny moments
  that make something feel alive.
```

**Right column — Info card:**
```
A dark card (surface color, border, rounded-2xl) containing:

  📍  Chilaw, Sri Lanka
  🎓  BSc Software Engineering — UCLan (Expected 2028)
  🏅  Foundation Year — Distinction
  🎓  STEMLINK Software Engineering Professional Programme
  📧  dhanujasenarathne@gmail.com

Each row: icon + label in DM Sans 14px
Slight amber left-border accent on the card (4px solid amber, left side)
```

**Animation:** Card slides in from right on scroll, text fades up from bottom, using Framer Motion `whileInView`.

---

## Section 4 — Currently Building

**This section is unique.** It shows what Dhanuja is actively working on right now. It signals to employers that he is active and ambitious.

**Section label:** `"// currently building"` in JetBrains Mono, amber, 12px

**Heading:** "Active on the workbench." → Syne 700, 36px

**Layout:** Two cards side by side on desktop, stacked on mobile.

**Card 1 — CareQ:**
```
Status badge:  "● LIVE BUILD" in JetBrains Mono, 11px, green dot (#22c55e), amber text
Title:         "CareQ"
Subtitle:      "Hospital OPD Smart Queue Management System"
Description:   "Co-building a real-time hospital queue management system.
                I own the full frontend — Firebase Auth, Socket.io for live
                queue updates, TanStack Query for server state, and Zustand
                for global state."
Tags:          React · TypeScript · Socket.io · Firebase · TanStack Query · Zustand · Tailwind CSS
Role badge:    "Frontend Lead"
```

**Card 2 — CodeCritic:**
```
Status badge:  "● IN PROGRESS" in JetBrains Mono, 11px, amber dot, amber text
Title:         "CodeCritic"
Subtitle:      "Developer Social Platform — UCLan Coursework"
Description:   "A community platform for sharing, reviewing, and discussing code.
                Built with Next.js App Router, Clerk for auth, and PostgreSQL
                with Prisma for the data layer."
Tags:          Next.js · TypeScript · Clerk · PostgreSQL · Prisma · Shadcn/UI · Zustand
Role badge:    "Full Stack"
```

**Card style:**
- Background: `--surface-2`
- Border: `1px solid #222`
- Hover: amber border glow (`box-shadow: 0 0 0 1px #f0a500`)
- Subtle animated pulse on the status dot (CSS animation, 2s infinite)
- Role badge: small amber pill, top-right corner of card

---

## Section 5 — Projects

**Section label:** `"// projects"` in JetBrains Mono, amber

**Heading:** "Things I've shipped." → Syne 700, 36px

**Layout:** 2-column grid on desktop, 1-column on mobile.

**Projects (all 4, in this order):**

---

**Project 1 — Health Matters CRM**
```
Number:       "01"  (Syne, large, faint amber, decorative)
Title:        "Health Matters CRM"
Type badge:   "Team Project · Agile"
Description:  "Built as Frontend Developer for a team Agile project (UCLan CO2007 module).
               Developed the UI architecture for a healthcare CRM using React and
               Redux Toolkit. Contributed to sprint planning and documentation."
Stack tags:   React · Vite · TypeScript · Tailwind CSS · Clerk · Redux Toolkit
```

---

**Project 2 — Sri Lankan Tax Calculator**
```
Number:       "02"
Title:        "Sri Lankan Tax Calculator"
Type badge:   "Python · CLI Tool"
Description:  "A command-line tool that calculates income tax based on Sri Lanka's
               April 2025 tax reform brackets. Used functional programming —
               map(), filter(), zip(), lambdas — to process multiple taxpayer records
               and generate detailed tax reports."
Stack tags:   Python · Functional Programming · CLI
GitHub:       "github.com/dhanuuj/tax-calculator"
```

---

**Project 3 — E-Commerce Landing Page**
```
Number:       "03"
Title:        "E-Commerce Landing Page"
Type badge:   "Frontend · HTML/CSS"
Description:  "A responsive e-commerce landing page applying modern UI principles.
               Built with a hero section, features grid, and testimonial components."
Stack tags:   HTML · CSS · Tailwind CSS
GitHub:       "github.com/dhanuuj/ecommerce-landing-page"
```

---

**Project 4 — Restaurant Website**
```
Number:       "04"
Title:        "Restaurant Website"
Type badge:   "Frontend · HTML/CSS"
Description:  "A responsive restaurant website with menu, navigation, and service
               sections. Focused on intuitive navigation and clean page layout."
Stack tags:   HTML · CSS · Tailwind CSS
GitHub:       "github.com/dhanuuj/restaurent-website"
```

---

**Card behavior:**
- Each card: dark surface, subtle border
- Project number overlaps top of card, large and faint (decorative)
- Stack tags: small rounded pills, `bg-[#1a1a1a] border border-[#333] text-muted`
- GitHub link: amber text, underline on hover
- Hover: amber border glow, card lifts 4px (`translateY(-4px)`)
- Framer Motion `whileInView` stagger as cards enter viewport

---

## Section 6 — Skills

**Section label:** `"// skills & tools"` in JetBrains Mono, amber

**Heading:** "What I work with." → Syne 700, 36px

**Layout:** Three groups side by side on desktop. Each group is a column.

**Group 1 — Frontend**
```
React · Next.js · TypeScript · JavaScript
Vite · Tailwind CSS · HTML · CSS
Framer Motion
```

**Group 2 — Backend & Tools**
```
Express.js · PostgreSQL · Prisma
Zustand · Clerk · Firebase
Git · GitHub · VS Code · Vercel
```

**Group 3 — Creative**
```
Videography · Video Editing
Color Grading
Nature Photography
```

**Skill tag style:**
- Pill shape, `rounded-full`
- Background: `#111`, border: `1px solid #222`
- Text: DM Sans 13px, text-muted
- Hover: border-amber, text-white, transition 0.2s
- Animate in on scroll with stagger (each tag fades in 0.04s apart)

**Bottom note (DM Sans 13px, text-faint, italic):**
```
"Always learning. Currently deepening: PostgreSQL · System Design · DSA"
```

---

## Section 7 — Beyond Code

**This section makes Dhanuja human.** It shows he is more than a developer.

**Section label:** `"// beyond code"` in JetBrains Mono, amber

**Heading:** "There's more to me than commits." → Syne 700, 36px

**Layout:** 2x2 grid of personality cards on desktop, 1-column on mobile.

**Card 1 — Music**
```
Icon:    🥁 (or a Lucide Music icon)
Title:   "Drummer & Percussionist"
Detail:  "Performed with Swarabhawani Music Institution in Chilaw from
          2019 to 2023. Ensemble work. Rhythm. Discipline."
```

**Card 2 — Videography**
```
Icon:    🎬 (or a Lucide Video icon)
Title:   "Filmmaker & Video Editor"
Detail:  "Cinematography and video editing are how I see the world.
          My visual eye directly shapes how I approach UI and design."
```

**Card 3 — Community**
```
Icon:    🎖️ (or a Lucide Shield icon)
Title:   "Cadet Trainer · St. John Medical Service"
Detail:  "Served as Commando Sergeant Major. Trained cadets in first aid
          and field discipline. Led community medical service camps across
          Puttalam district (2022–2023)."
```

**Card 4 — Nature**
```
Icon:    🌿 (or a Lucide Mountain icon)
Title:   "Hiker · Nature Photographer"
Detail:  "Trails, green spaces, the outdoors. Nature photography.
          The place I go to think clearly."
```

**Card style:**
- Minimal, surface background
- Left border: 2px solid amber
- Icon large (32px)
- Hover: background lightens very slightly
- Framer Motion stagger on scroll

---

## Section 8 — Contact

**Section label:** `"// let's connect"` in JetBrains Mono, amber

**Heading:** "Let's build something." → Syne 700, 48px

**Sub-heading:** "Open to internships, freelance work, and interesting problems." → DM Sans, text-muted

**Layout:** Two columns. Left: message + social links. Right: contact form.

**Left column:**
```
Message:
  "Whether you have a project in mind, a position to fill,
   or just want to talk frontend — my inbox is always open."
   → DM Sans 15px, text-muted

Social links (icon + label, vertical list):
  → GitHub:    github.com/dhanuuj
  → LinkedIn:  linkedin.com/in/dhanuja-senarathne-801659395
  → Email:     dhanujasenarathne@gmail.com

Each link: amber on hover, with Lucide icon (Github, Linkedin, Mail)
```

**Right column — Contact Form:**
```
Fields:
  Name:     text input, placeholder "Your name"
  Email:    email input, placeholder "your@email.com"
  Message:  textarea (4 rows), placeholder "What's on your mind?"
  
Submit:   "Send Message" button, amber fill, black text, rounded-full
          → loading state: spinner + "Sending..."
          → success state: "Sent! I'll get back to you soon." (green check)
          → error state: "Something went wrong. Email me directly."
```

**Form field style:**
```
Background: #111
Border: 1px solid #222
Text: #f2f2f2
Placeholder: #444
Padding: px-4 py-3
Border-radius: rounded-xl
Focus: border-amber, outline: none, ring: 0
Transition: border-color 0.2s
```

**Form handling:**
Use `useState` to manage `name`, `email`, `message`, `status` (idle / loading / success / error).
Use EmailJS (`@emailjs/browser`) for sending.
Environment variables:
```
VITE_EMAILJS_SERVICE_ID - service_zrx407l
VITE_EMAILJS_TEMPLATE_ID - template_mst5pcn
VITE_EMAILJS_PUBLIC_KEY - wcCGAiXgtFx5GctXC
```
If not configured, `console.log` the form data and show success state for now.

---

## Section 9 — Footer

```
Left:   "Dhanuja Senarathna" · DM Sans, text-faint, 13px
Center: "Built with React + Framer Motion · Deployed on Vercel"
        → DM Sans, text-faint, 13px
Right:  "2025" · text-faint, 13px
```

Thin top border: `border-t border-[#1a1a1a]`
Padding: `py-8`

---

## Global Animations

### Entrance Pattern (use on every section and card)
```tsx
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }
}

// On every section heading + content:
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-60px' }}
  variants={fadeUp}
>
```

### Stagger Pattern (for cards + skill tags)
```tsx
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } }
}
```

### Card Hover
```tsx
whileHover={{ y: -4, transition: { duration: 0.2 } }}
```

---

## Section Labels (Reusable Component)

Create a `<SectionLabel text="// about me" />` component:
```tsx
function SectionLabel({ text }: { text: string }) {
  return (
    <p className="font-mono text-xs text-[#f0a500] tracking-widest uppercase mb-4">
      {text}
    </p>
  )
}
```
Use this at the top of every section.

---

## Scrollspy — Active Nav Highlighting

Use `IntersectionObserver` to track which section is in view.
Add an `id` to each section: `hero`, `about`, `currently`, `projects`, `skills`, `beyond`, `contact`.
When a section enters viewport, highlight the corresponding nav link (amber color, underline).

---

## Page Meta (index.html)

```html
<title>Dhanuja Senarathna — Frontend Developer</title>
<meta name="description" content="Frontend developer and software engineering student from Sri Lanka. I build interfaces and film the world between commits.">
<meta property="og:title" content="Dhanuja Senarathna — Frontend Developer">
<meta property="og:description" content="Code to live. Live to film.">
```

---

## File Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Currently.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── BeyondCode.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── SectionLabel.tsx
├── App.tsx
├── main.tsx
└── index.css
```

Keep it flat. No unnecessary nesting. One component per section.

---

## Rules

1. Every component uses TypeScript. No `.jsx` files.
2. All styling via Tailwind classes + CSS variables in `index.css`. No inline `style={{}}` except for dynamic values.
3. All animations via Framer Motion. No CSS keyframes for entrance animations.
4. Every section must work and look good on mobile (375px width minimum).
5. No external image dependencies. Use CSS backgrounds or SVG placeholders for any image slots.
6. The amber accent (`#f0a500`) is the ONLY accent color. Do not introduce purple, blue, green, or any other accent.
7. The form submits with EmailJS. If keys are missing, log to console and show success.
8. Smooth scroll behavior: `html { scroll-behavior: smooth; }` in `index.css`.
9. Custom scrollbar in `index.css`:
   ```css
   ::-webkit-scrollbar { width: 4px; }
   ::-webkit-scrollbar-track { background: #080808; }
   ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
   ::-webkit-scrollbar-thumb:hover { background: #f0a500; }
   ```
10. Build the complete working site. Not a skeleton. Not a wireframe. A finished, polished product.
