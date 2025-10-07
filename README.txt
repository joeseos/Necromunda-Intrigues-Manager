NECROMUNDA INTRIGUES MANAGER
============================

A web application for managing Necromunda Intrigues cards during tabletop gameplay.

FEATURES
--------
- Draw random intrigue cards (1-10 at a time)
- Filter cards by category (Outlaw / Law Abiding)
- View detailed card information
- Shuffle and reset deck
- Authentic Necromunda card design with background textures and frames
- Responsive design for desktop and mobile

TECH STACK
----------
- SvelteKit
- Tailwind CSS
- Vite
- Netlify adapter for deployment

INSTALLATION
------------
1. Clone the repository
2. Install dependencies:
   npm install

3. Add card images to static/ folder:
   - necromunda-bg.png (background texture)
   - necromunda-frame.png (header/footer frame)

4. Start development server:
   npm run dev

DEPLOYMENT
----------
Build for production:
   npm run build

Preview production build:
   npm run preview

Deploy to Netlify:
- Push to GitHub
- Connect repository to Netlify
- Netlify will auto-detect SvelteKit and deploy

PROJECT STRUCTURE
-----------------
src/
├── lib/
│   ├── components/
│   │   ├── IntrigueCard.svelte    (Individual card component)
│   │   ├── CardModal.svelte       (Card detail modal)
│   │   └── FilterBar.svelte       (Category filter buttons)
│   └── data/
│       └── intrigues.js           (All 26 intrigue cards data)
├── routes/
│   ├── +layout.svelte             (Root layout)
│   └── +page.svelte               (Main application page)
└── app.css                        (Global styles)

static/
├── necromunda-bg.png              (Card background texture)
└── necromunda-frame.png           (Card header/footer frame)

USAGE
-----
1. Set number of cards to draw (default: 3)
2. Click "Draw Cards" to draw random cards
3. View drawn cards in "Just Drawn" section
4. Click "Acknowledge and Continue" to dismiss drawn cards
5. Click any card to view full details
6. Use filter buttons to show only Outlaw or Law Abiding cards
7. Click "Shuffle Deck" to randomize available cards
8. Click "Reset All" to return all cards to deck
This is a fan-made tool for Necromunda tabletop gaming.
