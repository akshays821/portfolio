# RDR2 Portfolio Redesign — Design Bible
> Branch: `rdr2-redesign` | Stack: React 19 + Vite + Tailwind v4

---

## OBJECTIVE

Redesign Akshay Shaji's portfolio to look and feel EXACTLY like Red Dead Redemption 2's in-game UI.
Not cowboy-inspired. Not Western-themed. DIRECT RDR2 UI recreation.

Anyone who has played RDR2 must immediately recognize it and think:
**"What the fuck — this guy built his portfolio like RDR2."**

Every design decision must serve this single goal.

---

## REFERENCE IMAGES

Five reference images is in the rdr2-refs folder in the assets folder . it will also be provided directly in chat by the user.

Each image maps to a specific section:

| Image | What it shows | Maps to |
|-------|--------------|---------|
| Character select screen | Black bg, red sky portrait, bold white name, vertical list right side, thin UI lines | Hero section |
| Satchel inventory (close) | Dark leather panel, grid slots, gold highlight, description panel bottom | Skills section |
| Satchel inventory (wide) | Worn parchment texture, category tab icons top, grainy background | Skills section |
| Weapon wheel | Radial circular UI, 8 slots, red arc highlight, stat bars in center | WeaponWheel section |
| Pause menu | Diagonal torn red panel left, bold uppercase links, grainy bg, pocket watch top-left | Navbar + Contact |

---

## DESIGN SYSTEM

### Color Tokens (use as CSS variables in App.css)

```css
--rdr-black: #0a0805;
--rdr-dark: #110e0a;
--rdr-leather: #1a1510;
--rdr-parchment: #e8d5a3;
--rdr-cream: #f5edd6;
--rdr-red: #8B1A1A;
--rdr-red-bright: #C0392B;
--rdr-gold: #B8860B;
--rdr-gold-bright: #D4A017;
--rdr-grey: #4a4540;
--rdr-line: #2a2420;
```

### Typography

Add this to index.html `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Cinzel:wght@400;600;700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Special+Elite&family=Crimson+Text:wght@400;600&display=swap" rel="stylesheet">
```

| Use | Font | Notes |
|-----|------|-------|
| Hero name, section titles | Cinzel Decorative | Bold, Roman, authoritative |
| Subheadings | Cinzel | Serif caps |
| Body text, descriptions | EB Garamond | Readable, period feel |
| UI labels, tags, nav links | Special Elite | Typewriter, worn |
| Skill names | Crimson Text | Clean serif |

### Global Styles (App.css)

```css
body {
  background-color: #0a0805;
  color: #e8d5a3;
  font-family: 'EB Garamond', serif;
  cursor: crosshair;
}

/* Grain overlay — the RDR2 worn film look */
body::after {
  content: '';
  position: fixed;
  inset: 0;
  opacity: 0.06;
  pointer-events: none;
  z-index: 9999;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
}

/* Section dividers */
section {
  border-bottom: 1px solid #2a2420;
}
```

---

## FILE STRUCTURE

```
src/
├── assets/
│   ├── akshay-hero.webp         ← hero photo (white shirt, bg removed)
│   ├── akshayshaji.pdf          ← resume (unchanged)
│   ├── shopAI.png               ← unchanged
│   ├── connecthub.png           ← unchanged
│   ├── pharmpal.png             ← unchanged
│   └── hacaLanding.jpeg         ← unchanged
├── components/
│   ├── navbar/Navbar.jsx        ← REDESIGN
│   ├── hero/Hero.jsx            ← REDESIGN
│   ├── about/WeaponWheel.jsx    ← NEW FILE (replaces about.jsx)
│   ├── skills/Skills.jsx        ← REDESIGN
│   ├── projects/Projects.jsx    ← REDESIGN
│   └── contact/Contact.jsx      ← REDESIGN
├── App.jsx                      ← update imports + section order
├── App.css                      ← global RDR2 styles
└── index.css                    ← keep tailwind import unchanged
```

### Section order in App.jsx
```jsx
<Navbar />        {/* fixed, always visible */}
<Hero />          {/* #home */}
<WeaponWheel />   {/* #about */}
<Skills />        {/* #skills */}
<Projects />      {/* #projects */}
<Contact />       {/* #contact */}
```

---

## NAVBAR

**Reference:** Pause menu image

- Fixed top bar, full width
- Background: semi-transparent `--rdr-black` with backdrop blur
- Bottom border: 1px `--rdr-gold`
- LEFT: Small pocket watch SVG icon + "AKSHAY SHAJI" in Cinzel Decorative, very wide letter-spacing
- RIGHT: Nav links in Special Elite, ALL CAPS — HOME · SKILLS · PROJECTS · CONTACT
- Link hover: `--rdr-red` underline bar slides in from left
- Active section: `--rdr-gold` underline
- Resume button: `--rdr-red` background, Cinzel font, uppercase
- On scroll: background becomes more opaque

**Mobile menu:**
- Hamburger icon
- On open: full screen overlay
- Diagonal torn red panel slides in from left (CSS clip-path)
- White uppercase links in Special Elite listed vertically
- Exactly mirrors the RDR2 pause menu left panel

---

## HERO

**Reference:** Character select screen image

**Layout:** Full viewport height, split left/right, no top padding waste

**LEFT SIDE — 55% width:**
- Photo: `akshay-hero.webp`, full height, object-fit cover
- CSS filter: `contrast(1.1) saturate(0.75)` — RDR2 character art feel
- Behind photo: deep crimson radial gradient (`#3d0000` to transparent) — the red sky
- Photo bottom: fades to black with gradient overlay

**RIGHT SIDE — 45% width:**
- "FULL STACK DEVELOPER" — Special Elite, `--rdr-gold`, wide letter-spacing, small
- "AKSHAY SHAJI" — Cinzel Decorative, massive (clamp 3rem–6rem), white
- Thin 1px `--rdr-gold` horizontal divider line (UI chrome detail)
- Quote line — italic EB Garamond, `--rdr-parchment` — *"I build things that work."* (placeholder)
- Bio — small EB Garamond — "Entry-Level Full Stack Developer with hands-on MERN experience, AI-assisted workflows, and a drive to build things that matter."
- Button 1: "VIEW BOUNTIES" — `--rdr-red` bg, Cinzel, uppercase → scrolls to #projects
- Button 2: "DOWNLOAD DOSSIER" — transparent, `--rdr-gold` border, Cinzel, uppercase → opens resume PDF

**FAR RIGHT EDGE — vertical anchor list:**
- Small circle markers + section names
- Clicking scrolls to that section
- Active = filled red circle
- Exactly like the character list on the right side of the character select screen

**Entrance animation:**
1. Entire page loads in grayscale (CSS filter: grayscale(1) on body)
2. Color bleeds in left to right over 1.5 seconds (CSS keyframes)
3. Hero name: opacity 0 + blur 4px → opacity 1 + blur 0 over 0.8s
4. Right side content: each element staggers in with 150ms delay

---

## WEAPON WHEEL

**Reference:** Weapon wheel image

**New component:** `src/components/about/WeaponWheel.jsx`

**Layout:** Full section, dark background (`--rdr-black`)

**Section title:** "CHARACTER" in Cinzel Decorative, `--rdr-gold`, centered above wheel

**The wheel:**
- Circular, centered on screen
- 8 slots positioned with CSS:
  ```
  transform: rotate(Ndeg) translateY(-160px) rotate(-Ndeg)
  ```
  45 degrees apart (360 ÷ 8)
- Each slot: small circle + SVG icon + label in Special Elite

**8 slots — TO BE DECIDED BY USER (update before Prompt 4)**
Placeholder slots for now:
1. Projects Built
2. MERN Stack
3. Freelancer
4. Kozhikode, KL
5. AI Workflows
6. Open to Work
7. Full Stack Dev
8. TBD

**Hover behavior:**
- Hovered slot: red SVG arc animates to that position (stroke-dashoffset)
- Center panel updates to show:
  - Slot title in Cinzel large
  - Description in EB Garamond
  - 3 decorative stat bars

**Mobile fallback:**
- Replace wheel with horizontal scrollable cards
- Same content, simpler layout

**Implementation:**
- Pure CSS + React useState — no external library needed
- SVG circle for the red arc
- Default selected slot = slot 1 on load

---

## SKILLS

**Reference:** Both satchel images

**Overall:** The entire section IS the RDR2 satchel. Dark leather inventory panel.

**Section title:** "SATCHEL" in Cinzel Decorative, centered, `--rdr-parchment`

**Category tabs:**
- Horizontal row of icon buttons
- Frontend | Backend | Database | Tools
- Active: `--rdr-gold` bottom border + brighter text
- Inactive: `--rdr-grey`

**Skills grid:**
- 5 cols desktop / 4 tablet / 3 mobile
- Each skill = one inventory slot:
  - Background: `--rdr-leather`
  - Border: 1px `--rdr-line`
  - Hover border: `--rdr-red`
  - Devicon image centered (keep all existing URLs from Skills.jsx exactly)
  - Skill name in Special Elite, `--rdr-parchment`
  - Badge bottom-right: ADV / INT / BEG

**Experience levels for badges:**
- React.js: ADV | Redux Toolkit: INT | JavaScript: ADV | HTML5: ADV | CSS3: ADV | TailwindCSS: ADV
- Node.js: ADV | Express.js: ADV | Socket.IO: INT | JWT: INT
- MongoDB: ADV | Mongoose: ADV | MongoDB Atlas: INT
- Git: ADV | GitHub: ADV | Postman: INT | Zapier: BEG | n8n: BEG

**Hover/selected state:**
- Slot lifts (translateY -2px)
- Bottom description panel slides up:
  - Background: `--rdr-dark`
  - Top border: 1px `--rdr-gold`
  - Skill name large in Cinzel
  - Category in Special Elite gold
  - One-line description
  - 3 stat bars: Proficiency | Experience | Usage

**Animation:**
- Slots stagger in on section enter (50ms per slot)
- Tab switch: fade out → fade in

**IMPORTANT: Keep all existing skill names, categories, and icon URLs from Skills.jsx exactly. Do not change any skill data.**

---

## PROJECTS

**Reference:** No direct RDR2 UI ref — use bounty board concept

**Theme:** Wanted poster / bounty board

**Section title:** "BOUNTY BOARD" in Cinzel Decorative
**Subtitle:** "WANTED — Dead or Alive" in Special Elite, `--rdr-gold`

**Each project card:**
- Background: aged parchment gradient (`#d4b896` → `#c9a87c`)
- Slight rotation per card: -1deg, +0.5deg, -0.5deg, +1deg, -0.3deg
- Torn bottom edge via CSS clip-path
- Drop shadow — pinned to board effect

**Card content (top to bottom):**
1. "WANTED" — Cinzel Decorative, `--rdr-red`, slightly rotated stamp look
2. Project screenshot — full width, fixed height, object-fit cover
3. Project title — Cinzel, dark brown `#2d1f0e`
4. Short description — EB Garamond, dark text
5. "CHARGES:" + tech tags as dark worn stamp badges
6. "REWARD: Live Demo Available" — italic EB Garamond, `--rdr-red`
7. Two buttons: "INSPECT" (live link, red) and "TRACK" (GitHub, dark)

**Projects — read all data directly from existing Projects.jsx. Do not retype.**
Also add 6th project:
- Title: Next.js Admin Dashboard
- Description: Full-stack e-commerce admin panel with product management, order tracking, image uploads via imgbb API, and Razorpay payment integration
- Tags: Next.js, Firebase, Razorpay, imgbb, Vercel
- GitHub + Live: placeholder for now

**Grid:** 3 cols desktop / 2 tablet / 1 mobile

**Modal:** Keep existing click-to-open modal behavior. Restyle to:
- Dark leather background (`--rdr-leather`)
- `--rdr-gold` borders
- Cinzel headings
- Overlay with grain + slight blur

**Animation:**
- Cards drop in with rotation settle on section enter
- Hover: card lifts, shadow deepens, slight de-rotation toward 0deg

---

## CONTACT

**Reference:** Pause menu image

**Layout:** Split panel — mirrors the pause menu

**LEFT PANEL — 40% width:**
- Background: solid `--rdr-red` (`#8B1A1A`)
- Right edge: diagonal CSS clip-path (torn effect)
- "SEND A WIRE" — Cinzel Decorative, white, large
- Subtitle: "Leave word at the post office." — Special Elite, `--rdr-parchment`
- Thin gold divider line
- Contact links vertical list with icons:
  - Email: akshayshaji821@gmail.com
  - Phone: +91 7909138117
  - WhatsApp: https://wa.me/917909138117
  - LinkedIn: https://www.linkedin.com/in/akshay-shaji-418385361/
  - GitHub: https://github.com/akshays821
- Link hover: gold highlight bar slides in from left

**RIGHT PANEL — 60% width:**
- Background: `--rdr-dark`
- Form title: "COMPOSE YOUR MESSAGE" — Cinzel, `--rdr-gold`
- Inputs: `--rdr-parchment` background, dark border, EB Garamond font, dark text
- Labels: Special Elite, uppercase, small, `--rdr-gold`
- Submit: "SEND THE WIRE" — full width, `--rdr-red` bg, Cinzel, uppercase

**IMPORTANT: Keep all existing EmailJS logic exactly:**
- sendEmail function
- form ref
- VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY env variables
- react-hot-toast success/error notifications
- All input name attributes (user_name, user_email, message)

**Animation:**
- Red panel slides in from left on scroll into view
- Contact links stagger in from left (100ms apart)
- Form slides in from right

---

## ANIMATIONS MASTER LIST

| Animation | Trigger | Method |
|-----------|---------|--------|
| Grayscale to color bleed | Page load | CSS filter keyframes on body |
| Name blur to sharp | Page load | blur + opacity CSS keyframes |
| Section content stagger | Scroll into view | IntersectionObserver + CSS classes |
| Weapon wheel entry rotation | Section enter | CSS transform transition |
| Red arc follow | Wheel slot hover | SVG stroke-dashoffset |
| Satchel slots stagger in | Section enter | CSS animation-delay per slot |
| Slot description slide up | Skill hover | CSS translateY + opacity |
| Bounty card pin drop | Section enter | translateY + rotate keyframes |
| Red panel slide in | Contact section enter | CSS translateX |
| Nav link underline | Hover | CSS scaleX |

---

## WHAT MUST NEVER CHANGE

- All project data (titles, descriptions, images, links) — read from Projects.jsx
- All skill names, categories, devicon icon URLs — read from Skills.jsx
- EmailJS config and all form logic — read from Contact.jsx
- Resume PDF path: `../../assets/akshayshaji.pdf`
- react-hot-toast import and usage
- All .env variable names

---

## SUCCESS CRITERIA

A person who has played RDR2 opens this portfolio and instantly recognizes:
1. Navbar = RDR2 pause menu
2. Hero = RDR2 character select screen
3. Weapon wheel = RDR2 weapon wheel
4. Skills = RDR2 satchel
5. Projects = RDR2 bounty board
6. Contact = RDR2 pause menu

All 6 match. Job done. 🤠