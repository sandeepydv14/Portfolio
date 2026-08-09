# 📘 CUSTOMIZATION & MAINTENANCE GUIDE

Welcome to your **Data Analyst Portfolio Website**! This website features **two easy ways** to update your profile photo, resume PDF, and personal information:

1. **Interactive In-Browser Customizer Modal (No coding required!)** ⚡
2. **Centralized Data Files in `src/data/` & `src/assets/`** 📁

---

## ⚡ 1. Interactive In-Browser Customizer (Fastest Method)

You can edit your profile picture, upload a new resume PDF, and update your bio directly from your browser!

### How to use:
1. Open your portfolio website locally (`npm run dev`) or on your live site.
2. Click the **"Edit Info ⚙️"** button in the top navigation bar (or in the mobile menu drawer).
3. **Upload New Profile Photo**: Click **"Choose New Image"** to pick any photo from your computer (JPG, PNG, WEBP). It updates live on your Hero section immediately!
4. **Upload New Resume PDF**: Click **"Upload New Resume PDF"** to attach your updated resume document. The "Download Resume" buttons across the site will automatically download your newly uploaded PDF!
5. **Edit Details**: Update your Name, Title, Email, Phone, or About bio text.
6. Click **"Save Portfolio Changes"**.

---

## 📁 2. Centralized File Updates (`src/data/` & `src/assets/`)

If you want to permanently store your updated photo and resume directly inside the source code repository:

| Content to Change | File Location | How to Update |
| :--- | :--- | :--- |
| **Profile Photo** | `src/assets/profile/sandeep.jpg` | Replace the file with your new picture (keep the filename `sandeep.jpg`). |
| **Resume PDF** | `public/resume/Sandeep_Yadav_Resume.pdf` | Replace the file with your new resume PDF (keep the filename `Sandeep_Yadav_Resume.pdf`). |
| **Profile Data** | `src/data/profile.js` | Edit text fields: `name`, `title`, `university`, `degree`, `phone`, `email`, `aboutBio`. |
| **Skills** | `src/data/skills.js` | Add/remove skill items under categories. |
| **Education** | `src/data/education.js` | Edit institution names, verified full addresses, or Google Maps links. |
| **Projects** | `src/data/projects.js` | Edit case study problem statements, SQL queries, chart metrics, insights, & recommendations. |

---

## 🚀 3. Preview & Deploy

1. Test locally:
   ```bash
   npm run dev
   ```
2. Verify production build:
   ```bash
   npm run build
   ```
3. Push to your PRIVATE GitHub repository:
   ```bash
   git add .
   git commit -m "Update profile picture and resume PDF"
   git push origin main
   ```
