import defaultSandeepImg from '../assets/profile/sandeep.jpg';

// Base Profile Configuration
export const defaultProfileData = {
  name: "Sandeep",
  title: "Aspiring Data Analyst",
  subTitle: "B.Tech IT Student",
  university: "J.C. Bose University of Science and Technology, YMCA",
  degree: "B.Tech — Information Technology",
  semester: "Final Year — 7th Semester",
  careerGoal: "Aspiring Data Analyst",
  phone: "8708801922",
  email: "sandeepyadav141101@gmail.com",
  linkedin: "https://www.linkedin.com/in/sandeep-yadav-136b0b276",
  github: "https://github.com/sandeepydv14",
  instagram: "https://instagram.com/letcsndy",
  profileImage: defaultSandeepImg,
  resumePath: "/resume/Sandeep_Yadav_Resume.pdf",
  
  secondaryPhrases: [
    "Turning Data Into Insights",
    "Cleaning Data",
    "Finding Patterns",
    "Building Visualizations",
    "Creating Meaningful Dashboards"
  ],

  heroDescription: "I'm a final-year B.Tech IT student at J.C. Bose University of Science and Technology, passionate about transforming raw data into meaningful insights through analysis, visualization and business intelligence.",

  aboutBio: "I'm Sandeep, a final-year B.Tech Information Technology student at J.C. Bose University of Science and Technology, YMCA, and an aspiring Data Analyst. I enjoy working with data, cleaning datasets, discovering patterns, performing analysis and converting information into clear visual insights. My current focus is on Python, SQL, Excel, Power BI, Tableau and Data Visualization.",

  stats: [
    { label: "Current Semester", value: "7th Semester" },
    { label: "Degree Program", value: "B.Tech IT" },
    { label: "Analytics Projects", value: "2+" },
    { label: "Focus Area", value: "Data Analytics Enthusiast" }
  ]
};

// Function to load profile with local storage overrides
export const getProfileData = () => {
  try {
    const saved = localStorage.getItem('sandeep_portfolio_profile');
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        ...defaultProfileData,
        ...parsed,
        // Preserve image fallback if missing
        profileImage: parsed.profileImage || defaultSandeepImg,
        resumePath: parsed.resumePath || "/resume/Sandeep_Yadav_Resume.pdf"
      };
    }
  } catch (e) {
    console.warn("Could not load saved profile overrides:", e);
  }
  return defaultProfileData;
};

export const profileData = getProfileData();

export default profileData;
