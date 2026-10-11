# CropGuard Research Project Website

**Project ID:** R26-IT-101  
**Project Title:** *CropGuard: An Offline-First Active Learning Framework for Region-Adaptive Paddy Disease Detection and Localized Advisory*  
**Institution:** Sri Lanka Institute of Information Technology (SLIIT), Faculty of Computing, Malabe, Sri Lanka.  
**Research Cluster:** AIMS — Autonomous Intelligent Machines and Systems  
**Specialization:** Information Technology (IT), Artificial Intelligence, Edge Computing, Smart Agriculture  

---

## 1. Overview

This repository contains the complete, responsive academic research website for **CropGuard**, inspired by the modern, high-end editorial aesthetic of the reference site while preserving an original agricultural AI identity (deep forest green, soft cream, botanical green accents, and subtle rice-field imagery).

Key Highlights:
- **LexiScan-Inspired Visual Architecture:** Minimalist sticky navigation bar with active section indicator dot, large editorial hero section with floating AI badges, generous whitespace, modern sans-serif typography (Outfit & Inter), and subtle interactive card states.
- **Streamlined 7 Core Navigation Destinations:**
  1. `Home` (`#home`) — High-impact hero, floating edge metrics, institutional metadata bar
  2. `Domain` (`#domain`) — Simplified, concise research presentation:
     - The agricultural crop disease problem in Sri Lanka
     - Core CropGuard concept and primary/sub-objectives
     - The four main research components (Modules 01–04)
     - A clean 3-stage system architecture overview
     - A 5-step methodology overview
  3. `Milestones` (`#milestones`) — Interactive assessment selector dropdown with real-time detail switching
  4. `Documents` (`#documents`) — Searchable and filterable archive (Charters, Proposals, Reports, Checklists)
  5. `Presentations` (`#presentations`) — Presentation slide decks
  6. `About Us` (`#about`) — 4 Member research cards & Academic Supervisors
  7. `Contact Us` (`#contact`) — Institutional contact details & validated enquiry form
- **Scientific Results Section:** Reported research metrics (80% model compression, ~3s latency, unseen field domain shift reduction, false-healthy case drop from 95 to 4).
- **Lightweight Static Build:** Fully static HTML5, CSS3, vanilla JavaScript under 2 MB (~10% of the 20 MB course limit). Runs locally with zero backend dependencies.

---

## 2. Directory Structure

```text
cropguard-research-website/
├── index.html                   # Master single-page academic portal
├── README.md                    # Project documentation & asset guide
├── css/
│   ├── styles.css               # Core design system, tokens, typography, components
│   └── responsive.css           # Tablet/mobile adaptations & accessibility overrides
├── js/
│   ├── navigation.js            # Sticky navbar, scroll spy, mobile drawer, smooth scroll
│   ├── interactions.js          # Architecture inspector, milestones dropdown, doc filter
│   └── main.js                  # Initialization entry point and year handler
└── assets/
    ├── images/
    │   ├── hero-paddy.jpg       # Optimized hero photography
    │   ├── field-research.jpg   # Field agronomy research photograph
    │   └── team/                # (Upload member profile photos here)
    ├── documents/               # Place project PDFs here (Charters, TAF, Reports)
    │   └── README.md            # Document naming reference
    ├── presentations/           # Place presentation decks here (Proposal, Progress 1, 2, Final)
    │   └── README.md            # Presentation naming reference
    └── icons/                   # Lightweight SVG assets
```

---

## 3. How to Preview & Run Locally

### Option A: Direct Browser Preview
Double-click `index.html` to open directly in any modern browser (Chrome, Edge, Firefox, Safari).

### Option B: Local Web Server (Recommended)
Using Python:
```powershell
# In the project directory:
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

Using Node.js:
```powershell
npx serve .
```

---

## 4. How to Add Your Future Assets

### A. Team Profile Photographs
Place individual portrait photographs in:
`assets/images/team/`

Recommended filenames:
- `assets/images/team/munasinghe.jpg` (Munasinghe M A M C)
- `assets/images/team/shehan.jpg` (Shehan H B S)
- `assets/images/team/somasundara.jpg` (Somasundara M M)
- `assets/images/team/jayasinghe.jpg` (Jayasinghe H P S G)

In `index.html`, replace the `.team-portrait-placeholder` in the respective member card with:
```html
<img src="assets/images/team/shehan.jpg" alt="Shehan H B S" style="width: 100%; height: 100%; object-fit: cover;">
```

### B. Project Documents
Place completed PDFs in:
`assets/documents/`
- `TAF-R26-IT-101.pdf` (Topic Assessment Form)
- `CropGuard-Project-Charter.pdf` (Project Charter)
- `CropGuard-Progress-1.pdf` (Progress Report 1)
- `CropGuard-Progress-2.pdf` (Progress Report 2)
- `CropGuard-Final-Report.pdf` (Final Thesis)

The Research Proposal is hosted in the project Google Drive folder and linked from the Documents and Presentations
sections because the original PowerPoint file exceeds the course upload limit.

In `index.html`, change the status badge to `available` and update the link href.

### C. Presentation Slides
Place PDF/PPTX slide files in:
`assets/presentations/`
- `CropGuard-Progress-Presentation-2.pdf`
- `CropGuard-Final-Presentation.pdf` (when available)

The large proposal presentation is hosted in the project Google Drive folder and is linked from the website:
[Project presentation archive](https://drive.google.com/drive/folders/1a2jL0pgvp6hBB4UEqDQ1yDNwt_mgo2DN?usp=drive_link).

---

## 5. Deployment Guidelines

The website contains zero server dependencies and can be uploaded directly to:
1. **SLIIT CDAP Server:** Compress project directory (ensure total size is &lt;20 MB), excluding development environments
   such as `.venv`, and upload to the course web portal.
2. **Vercel / Netlify:** Connect the Git repository or drag-and-drop the directory into the dashboard.
3. **GitHub Pages:** Push to repository and enable GitHub Pages under repository settings (`main` branch, root `/`).

---

## 6. Academic Research Team

- **Supervisor:** Dr. Sanvitha Kasthuriarachchi
- **Group Members:**
  - Munasinghe M A M C (IT221130716) — *TinyML Edge Optimization*
  - Shehan H B S (IT22065094) — *Disease Detection & Active Learning*
  - Somasundara M M (IT22100320) — *Region-Adaptive AutoML*
  - Jayasinghe H P S G (IT22059840) — *RAG Advisory & Localization*
