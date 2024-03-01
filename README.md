# Circle

This repository contains the codebase for the Circle website and its associated functionality. The website is the result of the mid-term project for the Ironhack Front-End course, cohort of May '24. The website is built using HTML, CSS, and Javascript.

## Table of Contents

- [Description](#description)
- [File Structure](#file-structure)
- [Usage](#usage)
- [See it live](#see-it-live)
- [Main features](#main-features)  
- [Contributing](#contributing)
- [License](#license)

## Description

The Circle Digital Design and Development Studio is a fictional digital design and development studio. This project showcases the studio's website, featuring information about its services, recent projects, client testimonials, and a contact form for users to get in touch.

### See it live

You can see this website live at https://ironhack-midproject-sr.netlify.app/. The website is deployed on [Netlify](https://www.netlify.com/).

### Main features

- Responsive (Desktop, Tablet, Mobile)
  - Animated mobile navigation
- Dynamic content display for the 3 projects of index.html
  - Retrieved from [Ironhack's repo](https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects)
- Client-side Javascript form validation
  - Required fields (all)
  - Name (Ironhack)
  - Email address format
  - Phone number (Only digits)
- Javascript browsing for header and home page buttons
- Custom favicon

## File Structure

The project file structure is organized as follows:

```
├── assets (Contains visual assets like logos and images)
├── js (Contains JavaScript files for different functionalities)
│   ├── fetching.js (Retrieves and displays project details dynamically)
│   ├── form-validation.js (Provides client-side validation for the contact form)
│   ├── utils.js (Utility functions for common operations)
├── pages (Contains additional HTML pages)
│   ├── 404.html (Custom 404 page)
│   ├── contact.html (Contact form page)
│   ├── project.html (Skeleton page for project details, retrieved dynamically)
├── styles (Contains styles for additional HTML pages)
│   ├── contact.css (Contains styles for 404.html)
│   ├── contact.css (Contains styles for contact.html)
│   ├── project.css (Contains styles for project.html)
├── .gitignore
├── index.html (Main HTML file for the Circle website's home page)
├── index.js (Handles interactions and functionality on the home page)
├── LICENSE (MIT license)
├── netlify.toml (Contains Netlify configuration)
├── README.md
└── styles.css (Contains global styles, including home page)
```

## Usage

To use and run the Circle Digital Design and Development Studio website locally, follow these steps:

1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser to view the home page.
3. Browse other pages such such as `contact.html` as needed.

## Contributing

Contributions from the community to improve and enhance the Circle website. If you have suggestions, bug reports, or feature requests, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).