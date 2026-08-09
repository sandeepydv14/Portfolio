# 📘 CUSTOMIZATION & MAINTENANCE GUIDE

Welcome to your **Data Analyst Portfolio Website**! This website is built using a **centralized data architecture**. All personal information, skills, projects, education timeline entries, achievements, and social links are managed from clean data files in `src/data/`. 

> **Important**: You do **NOT** need to edit any React UI components (`.jsx`) to update your resume, profile bio, project details, or school addresses. Simply edit the data files in `src/data/`!

---

## 📁 1. Centralized Data Architecture (`src/data/`)

| File Name | Description / Purpose |
| :--- | :--- |
| `src/data/profile.js` | Name, title, university, degree, semester, hero description, bio, & stat metrics. |
| `src/data/skills.js` | Skill categories, skill list, descriptions, and icon mappings (no fake percentages). |
| `src/data/education.js` | Academic timeline items, full verified addresses, images, map links, & highlights. |
| `src/data/projects.js` | Detailed Data Analyst project objects, KPIs, SQL queries, charts data, & case studies. |
| `src/data/achievements.js` | Campus activities, IEEE club membership, and hackathon participation details. |
| `src/data/socialLinks.js` | Email, phone number, LinkedIn, GitHub, and Instagram URLs. |

---

## 🧑💻 2. How to Update Personal Information (`src/data/profile.js`)

Open `src/data/profile.js` in your editor. You will see:

```javascript
export const profileData = {
  name: "Sandeep",
  title: "Aspiring Data Analyst",
  subTitle: "B.Tech IT Student",
  university: "J.C. Bose University of Science and Technology, YMCA",
  degree: "B.Tech — Information Technology",
  semester: "Final Year — 7th Semester",
  phone: "8708801922",
  email: "sandeepyadav141101@gmail.com",
  // ...
};
```

- To change your title, change the `title` field.
- To update your bio text, edit `aboutBio`.
- To edit hero secondary cycling phrases, update the `secondaryPhrases` array.

---

## 🛠️ 3. How to Add, Edit, or Remove Skills (`src/data/skills.js`)

To add a new skill (e.g., *Power Query* under Visualization):
1. Open `src/data/skills.js`.
2. Add an object to the `skills` array:

```javascript
{
  name: "Power Query",
  category: "visualization",
  icon: "Table",
  description: "ETL transformations and data cleansing in Excel and Power BI"
}
```

Available categories: `programming`, `analysis`, `database`, `visualization`, `tools`.

---

## 🎓 4. How to Update Education & Addresses (`src/data/education.js`)

Each institution entry in `src/data/education.js` contains:

```javascript
{
  id: "btech-it",
  institution: "J.C. Bose University of Science and Technology, YMCA",
  classOrDegree: "B.Tech — Information Technology",
  status: "Final Year — 7th Semester",
  fullAddress: "J.C. Bose University of Science and Technology, YMCA...",
  mapLink: "https://www.google.com/maps/search/?api=1&query=...",
  image: ymcaImg,
  highlights: [ ... ]
}
```

- **To update an address**: Edit `fullAddress`.
- **To update Google Maps button**: Paste a new Google Maps URL in `mapLink`.

---

## 📊 5. How to Add or Edit Projects & Case Studies (`src/data/projects.js`)

To add a 3rd analytics project (e.g. *Customer Churn Analysis*):
1. Open `src/data/projects.js`.
2. Append a new project object to `projectsData`:

```javascript
{
  id: "customer-churn-analysis",
  title: "Customer Churn & Retention Analysis",
  type: "Advanced EDA Project",
  shortDescription: "Analyzing customer attrition predictors using Python & SQL.",
  tools: ["Python", "Pandas", "SQL", "Power BI"],
  image: churnImg,
  github: "https://github.com/sandeepydv14/churn-analysis",
  problem: "...",
  sqlAnalysis: [ ... ],
  kpis: [ ... ],
  chartData: { ... },
  insights: [ ... ],
  recommendations: [ ... ]
}
```
The website UI will automatically render the new project card and build its dedicated interactive Case Study view!

---

## 🖼️ 6. How to Replace Profile Picture & Resume

- **Profile Photo**: Replace `src/assets/profile/sandeep.jpg` with your updated photo.
- **Resume PDF**: Replace `public/resume/Sandeep_Yadav_Resume.pdf` with your updated resume PDF file.

---

## 🚀 7. How to Preview and Deploy Changes

1. Open your terminal in the project directory.
2. Test your changes locally:
   ```bash
   npm run dev
   ```
3. Verify production build:
   ```bash
   npm run build
   ```
4. Commit and push your changes to your **PRIVATE GitHub repository**:
   ```bash
   git add .
   git commit -m "Update project case study and profile bio"
   git push origin main
   ```
5. Vercel or Netlify will automatically build and deploy your updated public portfolio website!
