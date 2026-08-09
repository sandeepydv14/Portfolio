import ymcaImg from '../assets/education/ymca.jpg';
import whiteLeafImg from '../assets/education/white_leaf.jpg';
import holyChildImg from '../assets/education/holy_child.jpg';

export const educationData = [
  {
    id: "class-10",
    institution: "Holy Child Senior Secondary School",
    classOrDegree: "Class 10th",
    status: "Completed",
    fullAddress: "Holy Child Senior Secondary School, Surya Nagar, Hisar, Haryana 125005",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Holy+Child+Senior+Secondary+School+Surya+Nagar+Hisar+Haryana+125005",
    website: "https://holychildschoolhisar.com",
    image: holyChildImg,
    highlights: [
      "Foundational Secondary Education",
      "Focus on Science, Mathematics & Information Technology",
      "Active participation in school science forums"
    ]
  },
  {
    id: "class-12",
    institution: "White Leaf Public School",
    classOrDegree: "Class 12th",
    status: "Completed",
    fullAddress: "White Leaf Public School, Narela Rd, Vijay Colony, Vijay Nagar, Bawana, Delhi, 110039",
    mapLink: "https://www.google.com/maps/search/?api=1&query=White+Leaf+Public+School+Narela+Rd+Vijay+Colony+Bawana+Delhi+110039",
    website: "https://whiteleafpublicschool.com",
    image: whiteLeafImg,
    highlights: [
      "Senior Secondary Education",
      "Science Stream with Computer Science",
      "Developed logical reasoning and programming fundamentals"
    ]
  },
  {
    id: "btech-it",
    institution: "J.C. Bose University of Science and Technology, YMCA",
    formerly: "YMCA UST",
    classOrDegree: "B.Tech — Information Technology",
    status: "Final Year — 7th Semester",
    fullAddress: "J.C. Bose University of Science and Technology, YMCA (Formerly YMCA UST), NH-2, Mathura Rd, Sector 6, Faridabad, Haryana 121006",
    mapLink: "https://www.google.com/maps/search/?api=1&query=JC+Bose+University+of+Science+and+Technology+YMCA+Sector+6+Faridabad+Haryana+121006",
    website: "https://jcboseust.ac.in",
    image: ymcaImg,
    highlights: [
      "Information Technology Core Curriculum",
      "Data Analytics, Database Management Systems (DBMS), SQL, Python",
      "IEEE Club Member & University Hackathon Participant",
      "Final Year — Currently in 7th Semester"
    ]
  }
];

export default educationData;
