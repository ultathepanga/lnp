# LaunchPad

A modern, responsive SaaS landing page built with HTML5, Tailwind CSS (CDN), custom CSS, and vanilla JavaScript.

## Project structure

```text
launchpad/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Run locally

No build process, package manager, or backend is required.

1. Download or clone this project.
2. Open `index.html` in a modern browser.

For a local development server, you can also use the VS Code Live Server extension or run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Features

- Responsive navigation with an accessible mobile menu.
- Hero section with a custom dashboard-style visual.
- Feature cards and an about section.
- Contact form with client-side name, email, and message validation.
- Success feedback, smooth scrolling, and automatically updated copyright year.
- Reduced-motion accessibility support.

## Contact form note

The contact form is frontend-only. It validates the entered fields and displays a confirmation message, but it does not send or store submissions. Connect it to a form service or your own API if message delivery is required.

## Deploy to Vercel

This is a static site and can be deployed directly without a build step.

1. Import the `launchpad` folder/repository into Vercel.
2. Select **Other** as the framework preset if Vercel asks.
3. Leave the build command empty.
4. Set the output directory to `.` (project root).
5. Deploy.

The `index.html` file is at the project root, so Vercel can serve it directly.

## Technologies

- HTML5
- Tailwind CSS via CDN
- Custom CSS
- Vanilla JavaScript
