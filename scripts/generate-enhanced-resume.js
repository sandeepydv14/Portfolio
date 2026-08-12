import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// 1. Read profile image and convert to Base64
const imagePath = path.resolve('src/assets/profile/sandeep.jpeg');
let imageBase64 = '';

if (fs.existsSync(imagePath)) {
  const imageBuffer = fs.readFileSync(imagePath);
  imageBase64 = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;
}

// 2. Define HTML resume content
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sandeep — Resume</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

    @page {
      size: A4 portrait;
      margin: 0;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background-color: #ffffff;
      color: #1e293b;
      line-height: 1.45;
      font-size: 9.5pt;
      width: 210mm;
      height: 297mm;
      padding: 12mm 14mm;
      margin: 0 auto;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    /* Header Section */
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px solid #2563eb;
      padding-bottom: 12px;
      margin-bottom: 14px;
    }

    .header-info {
      flex: 1;
    }

    .name {
      font-size: 20pt;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.5px;
      line-height: 1.1;
    }

    .title-subtitle {
      font-size: 10.5pt;
      font-weight: 600;
      color: #2563eb;
      margin-top: 3px;
    }

    .contact-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 6px 14px;
      margin-top: 8px;
      font-size: 8.5pt;
      color: #475569;
    }

    .contact-item {
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    .contact-item a {
      color: #0f172a;
      text-decoration: none;
      font-weight: 500;
    }

    .contact-item a:hover {
      color: #2563eb;
      text-decoration: underline;
    }

    .profile-photo {
      width: 72px;
      height: 72px;
      border-radius: 12px;
      object-fit: cover;
      border: 2px solid #cbd5e1;
      margin-left: 16px;
      flex-shrink: 0;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    }

    /* Section Styles */
    .section {
      margin-bottom: 12px;
    }

    .section-title {
      font-size: 10.5pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #0f172a;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 3px;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .summary-text {
      color: #334155;
      font-size: 9pt;
      text-align: justify;
      line-height: 1.4;
    }

    /* Skills Grid */
    .skills-table {
      width: 100%;
      border-collapse: collapse;
    }

    .skills-row {
      display: flex;
      margin-bottom: 4px;
      font-size: 8.8pt;
    }

    .skills-cat {
      width: 165px;
      font-weight: 700;
      color: #0f172a;
      flex-shrink: 0;
    }

    .skills-list {
      color: #334155;
      flex: 1;
    }

    /* Education Item */
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 2px;
    }

    .item-title {
      font-size: 9.5pt;
      font-weight: 700;
      color: #0f172a;
    }

    .item-date {
      font-size: 8.5pt;
      font-weight: 600;
      color: #2563eb;
    }

    .item-sub {
      font-size: 8.8pt;
      font-weight: 500;
      color: #475569;
      margin-bottom: 4px;
    }

    .edu-badge {
      display: inline-block;
      background-color: #f1f5f9;
      color: #0f172a;
      font-size: 8pt;
      font-weight: 600;
      padding: 1px 6px;
      border-radius: 4px;
      border: 1px solid #cbd5e1;
      margin-left: 6px;
    }

    /* Bullet Lists */
    .bullet-list {
      list-style-type: disc;
      padding-left: 14px;
      margin-top: 3px;
    }

    .bullet-list li {
      margin-bottom: 3px;
      color: #334155;
      font-size: 8.8pt;
      line-height: 1.35;
    }

    .bullet-list li strong {
      color: #0f172a;
    }

    .project-tech {
      font-size: 8pt;
      font-weight: 600;
      color: #0284c7;
      background-color: #f0f9ff;
      padding: 1px 6px;
      border-radius: 4px;
      border: 1px solid #bae6fd;
      display: inline-block;
      margin-left: 6px;
    }
  </style>
</head>
<body>

  <!-- HEADER SECTION -->
  <div class="header">
    <div class="header-info">
      <div class="name">SANDEEP</div>
      <div class="title-subtitle">Aspiring Data Analyst | B.Tech Information Technology</div>
      
      <div class="contact-grid">
        <span class="contact-item">📧 <a href="mailto:sandeepyadav141101@gmail.com">sandeepyadav141101@gmail.com</a></span>
        <span class="contact-item">📞 <a href="tel:+918708801922">+91 8708801922</a></span>
        <span class="contact-item">📍 Faridabad / Delhi NCR</span>
        <span class="contact-item">🔗 <a href="https://linkedin.com/in/sandeep-yadav-136b0b276" target="_blank">linkedin.com/in/sandeep-yadav-136b0b276</a></span>
        <span class="contact-item">💻 <a href="https://github.com/sandeepydv14" target="_blank">github.com/sandeepydv14</a></span>
      </div>
    </div>

    ${imageBase64 ? `<img src="${imageBase64}" alt="Sandeep" class="profile-photo" />` : ''}
  </div>

  <!-- PROFESSIONAL SUMMARY -->
  <div class="section">
    <div class="section-title">Professional Summary</div>
    <p class="summary-text">
      Final-year B.Tech Information Technology student (Session: <strong>2023 – 2027</strong>) at <strong>J.C. Bose University of Science and Technology, YMCA</strong> (Cumulative CGPA: 6.34 till 6th semester). Motivated aspiring Data Analyst with expertise in data cleaning, exploratory data analysis (EDA), relational database querying (SQL), and business intelligence visualization. Experienced in translating raw datasets into actionable business insights using Python (Pandas, NumPy, Matplotlib), SQL, Power BI, Tableau, and Microsoft Excel.
    </p>
  </div>

  <!-- TECHNICAL SKILLS -->
  <div class="section">
    <div class="section-title">Technical Skills</div>
    <div class="skills-table">
      <div class="skills-row">
        <div class="skills-cat">Programming & Analysis:</div>
        <div class="skills-list">Python (Pandas, NumPy, Matplotlib), SQL (MySQL), Data Cleaning, EDA</div>
      </div>
      <div class="skills-row">
        <div class="skills-cat">BI & Data Visualization:</div>
        <div class="skills-list">Power BI, Tableau, Microsoft Excel (Pivot Tables, VLOOKUP, Formulas), Data Storytelling</div>
      </div>
      <div class="skills-row">
        <div class="skills-cat">Databases & Tools:</div>
        <div class="skills-list">MySQL, Relational Schema Design, Git, GitHub, Jupyter Notebook, VS Code</div>
      </div>
    </div>
  </div>

  <!-- FEATURED DATA ANALYTICS PROJECTS -->
  <div class="section">
    <div class="section-title">Key Analytics Case Studies</div>

    <!-- Project 1 -->
    <div style="margin-bottom: 10px;">
      <div class="item-header">
        <div class="item-title">
          Sales Performance & Profitability Analysis
          <span class="project-tech">Python • SQL • Power BI • Excel</span>
        </div>
        <div class="item-date">2026</div>
      </div>
      <ul class="bullet-list">
        <li><strong>Processed & Audited Data:</strong> Cleaned and evaluated 9,990+ retail transaction records using Python (Pandas) and SQL to identify key profit margin drivers and revenue channels.</li>
        <li><strong>Uncovered Strategic Insights:</strong> Executed SQL queries discovering that the Technology category achieved 17.4% net margin ($145.4K profit), whereas the Furniture Tables sub-category suffered -$17.7K net loss due to excessive discounting (>30%).</li>
        <li><strong>Formulated Actionable Strategy:</strong> Proposed discount capping policies (<15% threshold) for Central Region sales and built an executive interactive Power BI dashboard for real-time performance tracking.</li>
      </ul>
    </div>

    <!-- Project 2 -->
    <div>
      <div class="item-header">
        <div class="item-title">
          Netflix Content & Trend Analysis
          <span class="project-tech">Python • Pandas • Matplotlib • Tableau</span>
        </div>
        <div class="item-date">2026</div>
      </div>
      <ul class="bullet-list">
        <li><strong>Exploratory Data Analysis:</strong> Analyzed 8,800+ global streaming catalog titles to investigate library shifts, maturity ratings, and country-of-origin distributions.</li>
        <li><strong>Quantified Catalog Trends:</strong> Identified catalog composition (69.6% Movies vs 30.4% TV Shows) and catalog expansion spikes peaking in 2019 with 2,016 annual additions.</li>
        <li><strong>Visualized Growth Metrics:</strong> Designed interactive charts highlighting international Drama expansion and adult rating trends (TV-MA & R representing >45% of total catalog).</li>
      </ul>
    </div>
  </div>

  <!-- EDUCATION -->
  <div class="section">
    <div class="section-title">Education</div>

    <div style="margin-bottom: 6px;">
      <div class="item-header">
        <div class="item-title">
          B.Tech — Information Technology
          <span class="edu-badge">CGPA: 6.34 / 10.0</span>
        </div>
        <div class="item-date">2023 – 2027 (Final Year)</div>
      </div>
      <div class="item-sub">J.C. Bose University of Science and Technology, YMCA, Faridabad, Haryana</div>
    </div>

    <div style="margin-bottom: 4px;">
      <div class="item-header">
        <div class="item-title">Class 12th — Senior Secondary Education (CBSE)</div>
        <div class="item-date">Completed</div>
      </div>
      <div class="item-sub">White Leaf Public School, Bawana, Delhi • Science Stream with Computer Science</div>
    </div>

    <div>
      <div class="item-header">
        <div class="item-title">Class 10th — Secondary Education (CBSE)</div>
        <div class="item-date">Completed</div>
      </div>
      <div class="item-sub">Holy Child Senior Secondary School, Hisar, Haryana • Science & Mathematics Foundation</div>
    </div>
  </div>

  <!-- CAMPUS ACTIVITIES & ACHIEVEMENTS -->
  <div class="section">
    <div class="section-title">Activities & Leadership</div>
    <ul class="bullet-list">
      <li><strong>IEEE Student Chapter Member:</strong> Active participant in technical workshops and campus events at J.C. Bose University YMCA.</li>
      <li><strong>University Hackathon Participant:</strong> Collaborated on data processing, exploratory analysis, and visual insight presentation pipelines.</li>
    </ul>
  </div>

</body>
</html>
`;

// Write HTML file
const tempHtmlPath = path.resolve('scripts/resume_template.html');
fs.writeFileSync(tempHtmlPath, htmlContent);

// 3. Render HTML to PDF via Edge/Chrome Headless
const outputPdfPath = path.resolve('public/resume/Sandeep_Yadav_Resume.pdf');
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

let browserPath = '';
if (fs.existsSync(edgePath)) {
  browserPath = edgePath;
} else if (fs.existsSync(chromePath)) {
  browserPath = chromePath;
}

if (browserPath) {
  const fileUrl = `file:///${tempHtmlPath.replace(/\\/g, '/')}`;
  const cmd = `"${browserPath}" --headless --disable-gpu --print-to-pdf="${outputPdfPath}" --no-pdf-header-footer "${fileUrl}"`;
  
  console.log('Rendering PDF via Headless Browser...');
  execSync(cmd);
  console.log(`✅ High-Quality ATS-Friendly PDF generated successfully at: ${outputPdfPath}`);
} else {
  console.error('Browser executable not found for PDF rendering.');
}
