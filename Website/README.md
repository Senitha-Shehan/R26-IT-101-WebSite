# CropGuard Research Project Website

**Project ID:** R26-IT-101  
**Project Title:** *CropGuard: An Offline-First Active Learning Framework for Region-Adaptive Paddy Disease Detection and Localized Advisory*  
**Institution:** Sri Lanka Institute of Information Technology (SLIIT), Faculty of Computing, Malabe, Sri Lanka.  
**Research Cluster:** AIMS — Autonomous Intelligent Machines and Systems  
**Specialization:** Information Technology (IT), Artificial Intelligence, Edge Computing, Smart Agriculture  

---

## 1. Overview

This repository contains the complete, responsive academic research website for **CropGuard**, with an original agricultural AI identity (deep forest green, soft cream, botanical green accents, and subtle rice-field imagery).

Key Highlights:
- **Visual Architecture:** Minimalist sticky navigation bar with active section indicator dot, large editorial hero section with floating AI badges, generous whitespace, modern sans-serif typography (Outfit & Inter), and subtle interactive card states.
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
├── README.md                    # Project documentation
├── css/
│   ├── styles.css               # Core design system, tokens, typography, components
│   └── responsive.css           # Tablet/mobile adaptations & accessibility overrides
├── js/
│   ├── navigation.js            # Sticky navbar, scroll spy, mobile drawer, smooth scroll
│   ├── interactions.js          # Architecture inspector, milestones dropdown, doc filter
│   └── main.js                  # Initialization entry point and year handler
└── assets/
    ├── images/                  # Project, field research, and team images
    ├── documents/               # Project documents
    ├── presentations/           # Presentation decks
    └── icons/                   # Lightweight SVG assets
```

---

## 3. Preview Locally

Start the local web server from the repository root, one level above the `Website` folder:

```powershell
python -m http.server 3000
```

Once the server is running, [open the CropGuard website](http://localhost:3000). It will open the site from `/Website/` automatically.

---

## 4. Academic Research Team

- **Supervisor:** Dr. Sanvitha Kasthuriarachchi
- **Co-Supervisor:** Ms. Aruni Premarathne
- **Group Members:**
  - Munasinghe M A M C (IT221130716) — *TinyML Edge Optimization*
  - Shehan H B S (IT22065094) — *Disease Detection & Active Learning*
  - Somasundara M M (IT22100320) — *Region-Adaptive AutoML*
  - Jayasinghe H P S G (IT22059840) — *RAG Advisory & Localization*
