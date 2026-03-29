# Francisco Honorat — Portfolio Landing Page

A modern, professional, and responsive portfolio landing page for a backend engineer.

## Tech Stack

- **React** + **Vite** + **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/vite` plugin)

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx       # Sticky navigation with mobile menu
│   ├── Hero.tsx         # Above-the-fold section with CTA buttons
│   ├── About.tsx        # Professional summary and stats
│   ├── Projects.tsx     # Featured projects grid
│   ├── ProjectCard.tsx  # Individual project card component
│   ├── Skills.tsx       # Categorised skill list
│   ├── Experience.tsx   # Timeline of professional trajectory
│   ├── Contact.tsx      # Contact section with CTA
│   └── Footer.tsx       # Minimal footer
├── data/
│   └── index.ts         # Central mock data (edit this to personalise)
├── types/
│   └── index.ts         # Shared TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Personalising

All personal data is centralised in **`src/data/index.ts`**. Edit the following exports to make the portfolio your own:

| Export | Description |
|--------|-------------|
| `personalInfo` | Name, title, tagline, email, GitHub/LinkedIn URLs |
| `projects` | Array of featured projects with stack and technical decisions |
| `skills` | Categorised skill list (backend / database / devops / tools) |
| `experience` | Timeline entries for the Experience section |

## Sections

1. **Hero** — name, title, tagline, GitHub / LinkedIn / Contact buttons
2. **About** — professional summary and stats
3. **Projects** — featured project cards with stack badges and technical decisions
4. **Skills** — categorised technical skills
5. **Experience** — professional timeline
6. **Contact** — CTA for recruiters with email, GitHub and LinkedIn links
