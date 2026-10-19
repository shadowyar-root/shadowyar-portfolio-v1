# ShadowYar — Personal Portfolio

A responsive, multi-page personal portfolio built with **HTML, CSS, and JavaScript**. The site introduces ShadowYar, highlights current learning areas, lists selected projects, and provides contact links. Its visual style uses a dark cyber/HUD-inspired interface with cyan and green accents.

## Pages

- **Home (`index.html`)** — introduction, profile photo, and quick links.
- **About (`about.html`)** — profile summary and personal focus areas.
- **Skills (`skills.html`)** — current learning areas and self-assessed progress indicators.
- **Projects (`projects.html`)** — selected project concepts and technologies.
- **Contact (`contact.html`)** — GitHub and email links.

## Built With

- HTML5 for page structure and semantic content.
- CSS3 for layout, responsive design, visual effects, and shared styling.
- Vanilla JavaScript for the mobile navigation menu.

## Run Locally

No build tools or package installation are required.

1. Download or clone this repository.
2. Keep `index.html`, the other HTML pages, `style.css`, `app.js`, and `profile.jpg` in the same project directory.
3. Open `index.html` in a browser, or use the **Live Server** extension in Visual Studio Code.

## Project Structure

```text
shadowyar-portfolio/
├── index.html       # Home page
├── about.html       # About page
├── skills.html      # Skills and learning progress
├── projects.html    # Selected projects
├── contact.html     # Contact links
├── style.css        # Shared styles for all pages
├── app.js           # Mobile navigation behavior
├── profile.jpg      # Profile image used on the home page
└── README.md        # Project documentation
```

## Customization

- Update text and links in the relevant HTML page.
- Change colors and common layout values in the `:root` section at the top of `style.css`.
- Replace `profile.jpg` with your own image, keeping the same filename or updating the image path in `index.html`.
- Adjust the skill progress values in `skills.html` to reflect your current level.

## Deployment with GitHub Pages

1. Push this project to a GitHub repository.
2. Open the repository on GitHub and go to **Settings → Pages**.
3. Under the build and deployment section, choose **Deploy from a branch**.
4. Select the branch you want to publish (commonly `main`) and the root folder (`/`).
5. Save the settings and wait for GitHub Pages to publish the site. GitHub will show the published URL on the Pages settings screen.

## Notes

- The skills progress bars are personal estimates, not formal assessment results.
- The projects page describes selected work and concepts; add links to source repositories or live demos when they are ready.
- This is a static website and does not require a backend server.

## Author

**Muhammadyar (ShadowYar)**  
GitHub: [@shadowyar-root](https://github.com/shadowyar-root)

## License

No license has been specified yet. If you want others to reuse or modify this project, choose and add an appropriate open-source license file.
