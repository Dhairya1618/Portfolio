# Portfolio Website

A modern, responsive portfolio website built with React.js. This portfolio showcases your projects, skills, and provides a way for potential clients or employers to get in touch with you.

## Features

- **Responsive Design**: Looks great on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling navigation with mobile hamburger menu
- **Project Showcase**: Display your projects with descriptions, tech stacks, and links
- **Skills Section**: Organized display of your technical skills
- **Contact Form**: Functional contact form for inquiries
- **Social Links**: Easy access to your social media profiles

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization

### Personal Information
Update the following files with your personal information:

1. **Header.js**: Change "Your Name" in the logo
2. **About.js**: Update your name, title, description, and photo
3. **Contact.js**: Update your email, phone, location, and social links
4. **Footer.js**: Update copyright information and social links

### Projects
Edit the `projects` array in `Projects.js` to add your own projects:

```javascript
{
  id: 1,
  title: "Your Project Title",
  description: "Project description...",
  technologies: ["React", "Node.js", "MongoDB"],
  githubUrl: "https://github.com/yourusername/project",
  liveUrl: "https://yourproject.com",
  imageUrl: "path/to/your/project/image.jpg"
}
```

### Skills
Update the `skillCategories` array in `Skills.js` with your skills:

```javascript
{
  title: "Frontend",
  skills: ["React", "JavaScript", "CSS3", "HTML5"]
}
```

### Colors and Styling
The main color scheme uses a purple gradient (`#667eea` to `#764ba2`). You can customize colors by updating the CSS files in the `components` folder.

## Project Structure

```
portfolio-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.js & Header.css
│   │   ├── About.js & About.css
│   │   ├── Projects.js & Projects.css
│   │   ├── Skills.js & Skills.css
│   │   ├── Contact.js & Contact.css
│   │   └── Footer.js & Footer.css
│   ├── App.js
│   ├── App.css
│   └── index.js
└── README.md
```

## Building for Production

To create a production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## Deployment

You can deploy this portfolio to various platforms:

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `npm run build` and deploy the build folder
- **Heroku**: Add a server.js file for hosting

## Technologies Used

- React.js
- CSS3 with Flexbox and Grid
- Responsive Design
- Modern JavaScript (ES6+)

## License

This project is open source and available under the MIT License.
