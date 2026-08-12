import defaultSandeepImg from '../assets/profile/sandeep.jpeg';

// Base Profile Configuration
export const defaultProfileData = {
  name: "Sandeep",
  title: "Aspiring Data Analyst",
  subTitle: "B.Tech IT Student",
  university: "J.C. Bose University of Science and Technology, YMCA",
  universityYears: "2023 - 27",
  degree: "B.Tech — Information Technology",
  semester: "2023 - 27 (Final Year — 7th Sem)",
  cgpa: "6.34 (Till 6th Sem)",
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

  heroDescription: "I'm a final-year B.Tech IT student (2023 - 27) at J.C. Bose University of Science and Technology, YMCA (CGPA: 6.34 till 6th sem), passionate about transforming raw data into meaningful insights through analysis, visualization and business intelligence.",

  aboutBio: "I'm Sandeep, a final-year B.Tech Information Technology student (2023 - 27) at J.C. Bose University of Science and Technology, YMCA (Cumulative CGPA: 6.34 till 6th semester), and an aspiring Data Analyst. I enjoy working with data, cleaning datasets, discovering patterns, performing analysis and converting information into clear visual insights. My current focus is on Python, SQL, Excel, Power BI, Tableau and Data Visualization.",

  stats: [
    { label: "Current Standing", value: "7th Sem B.Tech (2023-27)" },
    { label: "Academic CGPA", value: "6.34 / 10.0" },
    { label: "Analytics Projects", value: "2+ BI Projects" },
    { label: "Focus Area", value: "Data Analytics" }
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
