import fs from 'fs';
import path from 'path';

// Minimal valid PDF structure
const pdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 260 >>
stream
BT
/F1 24 Tf
100 700 Td
(SANDEEP - ASPIRING DATA ANALYST) Tj
/F1 12 Tf
0 -30 Td
(B.Tech Information Technology - J.C. Bose University YMCA) Tj
0 -20 Td
(Email: sandeepyadav141101@gmail.com | Phone: 8708801922) Tj
0 -20 Td
(GitHub: github.com/sandeepydv14 | LinkedIn: linkedin.com/in/sandeep-yadav-136b0b276) Tj
0 -40 Td
(Skills: Python, SQL, Excel, Power BI, Tableau, Data Cleaning, EDA) Tj
0 -20 Td
(Projects: Sales Performance & Profitability Analysis | Netflix Content Analysis) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000554 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
625
%%EOF`;

const resumeDir = path.resolve('public/resume');
if (!fs.existsSync(resumeDir)) {
  fs.mkdirSync(resumeDir, { recursive: true });
}

fs.writeFileSync(path.join(resumeDir, 'Sandeep_Yadav_Resume.pdf'), pdfContent);
console.log('Resume PDF generated successfully at public/resume/Sandeep_Yadav_Resume.pdf');
