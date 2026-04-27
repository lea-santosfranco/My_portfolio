# Portfolio — Léa Santos Franco

Portfolio personnel de développeuse full-stack web et mobile, conçu pour présenter mon parcours, mes compétences et mes projets.

## Stack technique

- **React 19** — UI
- **Vite 8** — bundler et serveur de développement
- **Tailwind CSS 4** — styles
- **Lucide React** — icônes
- **React Icons** — icônes de technologies (GitHub, LinkedIn, stack technique)
- **FormSubmit** — gestion des envois du formulaire de contact sans back-end

## Structure du projet

```
src/
├── layout/
│   ├── Navbar.jsx
│   └── Footer.jsx
├── sections/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
├── components/
│   ├── Button.jsx
│   └── AnimatedBorderButton.jsx
├── App.jsx
└── index.css
```

## Lancer le projet

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Ajouter un projet

Les projets sont définis dans le tableau `projects` dans `src/sections/Projects.jsx`. Chaque entrée accepte les champs suivants :

```js
{
  title: "Nom du projet",
  description: "Description courte.",
  image: "/images/mon-projet.png", // ou null
  tags: ["React", "Node.js"],
  link: "https://...",
  github: "https://github.com/...",
}
```
