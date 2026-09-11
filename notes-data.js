/* ================================================================
   notes-data.js — NotoByte Notes Data (Easy / Flat Structure)
   ----------------------------------------------------------------
   IMPORTANT: This file is now designed for EASY resource adding.

   You DO NOT need to manually create:
     Program → Branch → Year → Semester → Type → Subject → Resources

   Just add ONE resource object to `notesResources` at the bottom.
   The code below automatically builds the hierarchy used by notes.js.

   Example:

   {
     id: 26,
     title: "OOP PYQ 2025",
     program: "Diploma",
     branch: "CSE",
     year: "3rd Year",
     semester: "Semester 5",
     type: "PYQs",
     subject: "Object Oriented Programming",
     desc: "OOP previous year question paper",
     size: "1.2 MB",
     contributor: "Sudarshan Raval",
     initials: "SR",
     icon: "fas fa-file-signature",
     pdfUrl: "assets/pyq/oop-pyq-2025.pdf"
   }

   That's it. New categories/branches/semesters/subjects are created
   automatically when needed. Existing notes.js does NOT need changes.
================================================================ */

const notesResources = [


  // CSE 1st year

  {
    id: 33,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "CSE (All Specialization)",
    year: "1st Year",
    semester: "Semester 1",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 33,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "CSE (All Specialization)",
    year: "1st Year",
    semester: "Semester 2",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  // CSE 2nd Year

  {
    id: 33,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "CSE (All Specialization)",
    year: "2nd Year",
    semester: "Semester 3",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 33,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "CSE (All Specialization)",
    year: "2nd Year",
    semester: "Semester 4",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  // CSE 3rd Year

  {
    id: 33,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "CSE (All Specialization)",
    year: "3rd Year",
    semester: "Semester 5",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 33,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "CSE (All Specialization)",
    year: "3rd Year",
    semester: "Semester 6",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },
  // CSE 4th Year 

  {
    id: 33,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "CSE (All Specialization)",
    year: "4th Year",
    semester: "Semester 7",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 33,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "CSE (All Specialization)",
    year: "4th Year",
    semester: "Semester 8",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  // ECE 1st year

  {
    id: 36,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "ECE",
    year: "1st Year",
    semester: "Semester 1",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 36,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "ECE",
    year: "1st Year",
    semester: "Semester 2",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  // ECE 2nd Year


  {
    id: 36,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "ECE",
    year: "2nd Year",
    semester: "Semester 3",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 36,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "ECE",
    year: "2nd Year",
    semester: "Semester 4",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  // ECE 3rd Year

  {
    id: 36,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "ECE",
    year: "3rd Year",
    semester: "Semester 5",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 36,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "ECE",
    year: "3rd Year",
    semester: "Semester 6",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },
  // ECE 4th Year 

  {
    id: 36,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "ECE",
    year: "4th Year",
    semester: "Semester 7",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 36,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "ECE",
    year: "4th Year",
    semester: "Semester 8",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },



  // EEE 1st year

  {
    id: 35,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "EEE",
    year: "1st Year",
    semester: "Semester 1",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 35,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "EEE",
    year: "1st Year",
    semester: "Semester 2",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  // EEE 2nd Year

  {
    id: 35,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "EEE",
    year: "2nd Year",
    semester: "Semester 3",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 35,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "EEE",
    year: "2nd Year",
    semester: "Semester 4",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  // EEE 3rd Year

  {
    id: 35,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "EEE",
    year: "3rd Year",
    semester: "Semester 5",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 35,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "EEE",
    year: "3rd Year",
    semester: "Semester 6",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },
  // EEE 4th Year 

  {
    id: 35,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "EEE",
    year: "4th Year",
    semester: "Semester 7",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 35,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "EEE",
    year: "4th Year",
    semester: "Semester 8",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },


  // Mechanical 1st year

  {
    id: 37,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "Mechanical",
    year: "1st Year",
    semester: "Semester 1",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 37,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "Mechanical",
    year: "1st Year",
    semester: "Semester 2",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  // Mechanical 2nd Year

  {
    id: 37,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "Mechanical",
    year: "2nd Year",
    semester: "Semester 3",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 37,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "Mechanical",
    year: "2nd Year",
    semester: "Semester 4",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  // Mechanical 3rd Year

  {
    id: 37,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "Mechanical",
    year: "3rd Year",
    semester: "Semester 5",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 37,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "Mechanical",
    year: "3rd Year",
    semester: "Semester 6",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },
  // Mechanical 4th Year 

  {
    id: 37,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "Mechanical",
    year: "4th Year",
    semester: "Semester 7",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 37,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "Mechanical",
    year: "4th Year",
    semester: "Semester 8",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },


  // Civil 1st year

  {
    id: 34,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "Civil",
    year: "1st Year",
    semester: "Semester 1",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 34,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "Civil",
    year: "1st Year",
    semester: "Semester 2",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  // Civil 2nd Year

  {
    id: 34,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "Civil",
    year: "2nd Year",
    semester: "Semester 3",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 34,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "Civil",
    year: "2nd Year",
    semester: "Semester 4",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  // Civil 3rd Year

  {
    id: 34,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "Civil",
    year: "3rd Year",
    semester: "Semester 5",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 34,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "Civil",
    year: "3rd Year",
    semester: "Semester 6",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },
  // Civil 4th Year 

  {
    id: 34,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "Civil",
    year: "4th Year",
    semester: "Semester 7",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 34,
    title: "C Programming Notes",
    program: "B.Tech",
    branch: "Civil",
    year: "4th Year",
    semester: "Semester 8",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },




  // Diploma CSE




  // Diploma CSE 1st year

  {
    id: 40,
    title: "Syllabus 1st Semester",
    program: "Diploma",
    branch: "CSE",
    year: "1st Year",
    semester: "Semester 1",
    type: "Syllabus",
    subject: "Syllabus 1st Sem",
    desc: "Complete Syllabus of Diploma 1st sem for Batch (2026-2029)",
    size: "1.7 MB",
    contributor: "Sudarshan Raval",
    initials: "SR",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/cse/Sem1/1st-Sem-Syllabus-Diploma-in-Computer-Science-&-Engineering.pdf"
  },

  {
    id: 40,
    title: "Mathematics-I PYQ 2022",
    program: "Diploma",
    branch: "CSE",
    year: "1st Year",
    semester: "Semester 1",
    type: "PYQ",
    subject: "Basic Engg. Mathematics",
    desc: "Previous year questions of Mathematics-I year 2022",
    size: "0.8 MB",
    contributor: "Sudarshan Raval (Developer)",
    initials: "SR",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1LFQeC5pI1P5j1AW1O_SD5-Miao8ToyOs/view?usp=drive_link"
  },

  {
    id: 40,
    title: "Mathematics-I PYQ 2023",
    program: "Diploma",
    branch: "CSE",
    year: "1st Year",
    semester: "Semester 1",
    type: "PYQ",
    subject: "Basic Engg. Mathematics",
    desc: "Previous year questions of Mathematics-I year 2023",
    size: "0.8 MB",
    contributor: "Sudarshan Raval (Developer)",
    initials: "SR",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1ouwpB9HWQ7YRkPh1Os-O8gSnRZh6GcL_/view?usp=drive_link"
  },

  {
    id: 40,
    title: "Applied Physics-II PYQ 2023",
    program: "Diploma",
    branch: "CSE",
    year: "1st Year",
    semester: "Semester 1",
    type: "PYQ",
    subject: "Applied Physics-II",
    desc: "Previous year questions of Applied Physics-II year 2023",
    size: "0.6 MB",
    contributor: "Sudarshan Raval (Developer)",
    initials: "SR",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1arTjeEcvkq6apGgRlNnhpZhiVN0aUcFD/view?usp=drive_link"
  },


  {
    id: 40,
    title: "FOEEE PYQ 2023",
    program: "Diploma",
    branch: "CSE",
    year: "1st Year",
    semester: "Semester 1",
    type: "PYQ",
    subject: "Fundamentals of Electrical and Electronic Engg.",
    desc: "Previous year questions of Fundamentals of Electrical and Electronic Engg. year 2023",
    size: "0.8 MB",
    contributor: "Sudarshan Raval (Developer)",
    initials: "SR",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1S-CBavRwJyCkLE9vC1zGdsXU-Z5UJSHp/view?usp=drive_link"
  },

  {
    id: 40,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "CSE",
    year: "1st Year",
    semester: "Semester 2",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  // Diploma CSE 2nd Year

  {
    id: 40,
    title: "Syllabus 3rd Semester",
    program: "Diploma",
    branch: "CSE",
    year: "2nd Year",
    semester: "Semester 3",
    type: "Syllabus",
    subject: "Syllabus 3rd Sem",
    desc: "Complete Syllabus of Diploma 3rd sem for Batch (2025-2028)",
    size: "2.2 MB",
    contributor: "Sudarshan Raval",
    initials: "SR",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/cse/sem3/3rd-Sem-Syllabus-Diploma-in-Computer-Science-&-Engineering.pdf"
  },


  {
    id: 40,
    title: "DSA PYQ 2023",
    program: "Diploma",
    branch: "CSE",
    year: "2nd Year",
    semester: "Semester 3",
    type: "PYQs",
    subject: "DSA",
    desc: "Previous Year Question of year 2023 of Data Structure and Algorithms",
    size: "1.1 MB",
    contributor: "Sudarshan Raval (Developer)",
    initials: "SR",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1oMy7eSVS5lhzd0YtPxyJR7JYuPFXTTQ7/view?usp=drive_link"
  },


  {
    id: 40,
    title: "Python PYQ 2023",
    program: "Diploma",
    branch: "CSE",
    year: "2nd Year",
    semester: "Semester 3",
    type: "PYQs",
    subject: "Python Programming",
    desc: "Previous Year Question of year 2023 of Python",
    size: "0.7 MB",
    contributor: "Sudarshan Raval (Developer)",
    initials: "SR",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1w-oJ1a-UndpkC1hlqxBz1g--8PP8WrQ9/view?usp=drive_link"
  },


  {
    id: 40,
    title: "Operating System PYQ 2023",
    program: "Diploma",
    branch: "CSE",
    year: "2nd Year",
    semester: "Semester 3",
    type: "PYQs",
    subject: "Operating System",
    desc: "Previous Year Question of year 2023 of Operating System",
    size: "0.7 MB",
    contributor: "Sudarshan Raval (Developer)",
    initials: "SR",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1pBDd13P--PNWpeFCMGGpi8vjBADDPGzP/view?usp=drive_link"
  },

  {
    id: 40,
    title: "DE&MP PYQ 2019",
    program: "Diploma",
    branch: "CSE",
    year: "2nd Year",
    semester: "Semester 3",
    type: "PYQs",
    subject: "Digital Electronics and Microprocessor",
    desc: "Previous Year Question of year 2019 of Digital Electronics and Microprocessor",
    size: "0.8 MB",
    contributor: "Sudarshan Raval (Developer)",
    initials: "SR",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1BASGJP4AlK3cjH9LQxP_Bc4poqcmZLud/view?usp=drive_link"
  },

  {
    id: 40,
    title: "Discrete Mathematics PYQ 2022",
    program: "Diploma",
    branch: "CSE",
    year: "2nd Year",
    semester: "Semester 3",
    type: "PYQs",
    subject: "Discrete Structures or Discrete Mathematics",
    desc: "Previous Year Question of year 2022 of Discrete Structures or Discrete Mathematics",
    size: "0.4 MB",
    contributor: "Sudarshan Raval (Developer)",
    initials: "SR",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1IRgTNf_ppdd_Ig_i7T4p98C9Yd6aZCt5/view?usp=drive_link"
  },


  {
    id: 40,
    title: "Python Handbook",
    program: "Diploma",
    branch: "CSE",
    year: "2nd Year",
    semester: "Semester 3",
    type: "Notes",
    subject: "Python Programming",
    desc: "A Complete Python Handbook for programmers to learn programming as well by Code With Harry",
    size: "1.7 MB",
    contributor: "Sudarshan Raval (Developer)",
    initials: "SR",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/161BZoSh6f4Ag3jccFKeKVd8KH9Kql1Cm/view?usp=drive_link"
  },


  {
    id: 40,
    title: "Discrete Mathematics VVI Questions",
    program: "Diploma",
    branch: "CSE",
    year: "2nd Year",
    semester: "Semester 3",
    type: "Notes",
    subject: "Discrete Structures or Discrete Mathematics",
    desc: "Most important Question of Discrete Structures or Discrete Mathematics by CTH Education",
    size: "1.7 MB",
    contributor: "CTH Education",
    initials: "CE",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1ElUjagrLjAwbGjGUb9sOHMqr3a_MLFJQ/view?usp=drive_link"
  },


  {
    id: 40,
    title: "DSA Handwritten Notes",
    program: "Diploma",
    branch: "CSE",
    year: "2nd Year",
    semester: "Semester 3",
    type: "Notes",
    subject: "Data Structures and Algorithm",
    desc: "Handwritten Notes of DSA By Code with Harry, this notes helps you to understand DSA as well",
    size: "5 MB",
    contributor: "Code With Harry",
    initials: "CWH",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1Hs_Z54DQ_gl8Oo_i7LcNrPmPz8hFa0yo/view?usp=drive_link"
  },



  {
    id: 40,
    title: "Python Cheatsheet",
    program: "Diploma",
    branch: "CSE",
    year: "2nd Year",
    semester: "Semester 3",
    type: "Notes",
    subject: "Python Programming",
    desc: "This Python Cheatsheet helps you to code in Python",
    size: "500 KB",
    contributor: "Code With Harry",
    initials: "CWH",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1CsgLnL8cOceLa_XROViWd9Vm_h8F6R_X/view?usp=drive_link"
  },


  {
    id: 40,
    title: "Operating System MCQ",
    program: "Diploma",
    branch: "CSE",
    year: "2nd Year",
    semester: "Semester 3",
    type: "Notes",
    subject: "Operating System",
    desc: "Most important MCQ of Operating System",
    size: "250 KB",
    contributor: "Sudarshan Raval (Developer)",
    initials: "SR",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1tlpu8R7wsN_8eih9rM-KhsQIFkeNVk2I/view?usp=drive_link"
  },


  {
    id: 40,
    title: "JAVA Programming MCQ",
    program: "Diploma",
    branch: "CSE",
    year: "2nd Year",
    semester: "Semester 4",
    type: "Notes",
    subject: "JAVA Programming",
    desc: "Most important MCQ of JAVA Programming By CTH Education",
    size: "92 KB",
    contributor: "Sudarshan Raval (Developer)",
    initials: "SR",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1BrKill1v4f_VSWBxOTfqJAJ_Ic1pJ2u2/view?usp=drive_link"
  },



  // Diploma cse sem 5

  {
    id: 40,
    title: "Data Science PYQ 2024",
    program: "Diploma",
    branch: "CSE",
    year: "3rd Year",
    semester: "Semester 5",
    type: "PYQs",
    subject: "Data Science and Analytics",
    desc: "Previous Year Questions of Data Science and Analytics of year 2024",
    size: "346 KB",
    contributor: "Team NotoByte",
    initials: "NB",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1HWH7b2kavOSjaO_EqeTZGc-5J_s3CcLH/view?usp=drive_link"
  },


  {
    id: 40,
    title: "EV Basic PYQ 2022",
    program: "Diploma",
    branch: "CSE",
    year: "3rd Year",
    semester: "Semester 5",
    type: "PYQs",
    subject: "Electric Vehicle (Basic)",
    desc: "Previous Year Questions of Electric Vehicle (Basic) of year 2022",
    size: "575 KB",
    contributor: "Team NotoByte",
    initials: "NB",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1nUvCtHm2JECiSFBM3XF1X37f2DySSOsG/view?usp=drive_link"
  },

  {
    id: 40,
    title: "EV Basic PYQ 2023",
    program: "Diploma",
    branch: "CSE",
    year: "3rd Year",
    semester: "Semester 5",
    type: "PYQs",
    subject: "Electric Vehicle (Basic)",
    desc: "Previous Year Questions of Electric Vehicle (Basic) of year 2023",
    size: "941 KB",
    contributor: "Team NotoByte",
    initials: "NB",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1vjBtesNoc4MtmyXlfAAiULoqU2jJTGp5/view?usp=drive_link"
  },


  {
    id: 40,
    title: "Data Communication and Computer Network Notes",
    program: "Diploma",
    branch: "CSE",
    year: "3rd Year",
    semester: "Semester 5",
    type: "Notes",
    subject: "Data Communication and Computer Network",
    desc: "Complete Detailed notes of Data Communication and Computer Network by Top university",
    size: "1.9 MB",
    contributor: "Sudarshan Raval (Developer)",
    initials: "SR",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1Z_7_Bn0lpyHY_QjN0hM-LiUeppaS8iqS/view?usp=drive_link"
  },

  {
    id: 40,
    title: "Data Communication and Computer Network Notes-2",
    program: "Diploma",
    branch: "CSE",
    year: "3rd Year",
    semester: "Semester 5",
    type: "Notes",
    subject: "Data Communication and Computer Network",
    desc: "Complete Detailed 200+ pages notes of Data Communication and Computer Network",
    size: "3.5 MB",
    contributor: "Sudarshan Raval (Developer)",
    initials: "SR",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1AA5c80AwOKoZR7cr4QtP4uoiDUN4niX3/view?usp=drive_link"
  },



  {
    id: 40,
    title: "Software Engineering Notes",
    program: "Diploma",
    branch: "CSE",
    year: "3rd Year",
    semester: "Semester 5",
    type: "Notes",
    subject: "Software Engineering",
    desc: "Complete Detailed notes of Software Engineering for CSE 5th Sem Students",
    size: "686 KB",
    contributor: "Sudarshan Raval (Developer)",
    initials: "SR",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/16T8G4OFMiL5ZV7jYs80VG4vYb1KRI8WL/view?usp=drive_link"
  },


  {
    id: 40,
    title: "Java Programming Handwritten Notes",
    program: "Diploma",
    branch: "CSE",
    year: "3rd Year",
    semester: "Semester 5",
    type: "Notes",
    subject: "Advanced JAVA Programming",
    desc: "Handwritten notes of JAVA Programming that helps you in JAVA Coding and understanding JAVA as well",
    size: "13 MB",
    contributor: "Code With Harry",
    initials: "CWH",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/18mcy-yUPJ8VlMMlaCfNK3eJP0szO1Y7z/view?usp=drive_link"
  },


  {
    id: 40,
    title: "Data Science and Analytics overview",
    program: "Diploma",
    branch: "CSE",
    year: "3rd Year",
    semester: "Semester 5",
    type: "Notes",
    subject: "Data Science and Analytics",
    desc: "PPT to understand Data Science and Analytics overview",
    size: "709 KB",
    contributor: "Vinit Raj",
    initials: "VR",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1OYDY1tH_bwm46_VUtAL62K7VUKw1uwsD/view?usp=drive_link"
  },



  {
    id: 40,
    title: "Data Science and Analytics VVI Questions and Answer",
    program: "Diploma",
    branch: "CSE",
    year: "3rd Year",
    semester: "Semester 5",
    type: "Notes",
    subject: "Data Science and Analytics",
    desc: "Most asked and important Question and Answer of Data Science",
    size: "1.1 MB",
    contributor: "Vinit Raj",
    initials: "VR",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1KDYum-kelaCUYwP8UgJZ6vOyhxVbNB1E/view?usp=drive_link"
  },

  // diploma cse sem 6
  {
    id: 40,
    title: "",
    program: "Diploma",
    branch: "CSE",
    year: "3rd Year",
    semester: "Semester 6",
    type: "Notes",
    subject: "",
    desc: "",
    size: "1.8 MB",
    contributor: "",
    initials: "",
    icon: "fas fa-book",
    pdfUrl: ""
  },


  // Diploma Electronics 1st year

  {
    id: 41,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "Electronics",
    year: "1st Year",
    semester: "Semester 1",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 41,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "Electronics",
    year: "1st Year",
    semester: "Semester 2",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  // Diploma Electronics 2nd Year




  {
    id: 41,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "Electronics",
    year: "2nd Year",
    semester: "Semester 3",
    type: "Notes",
    subject: "none",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },



  {
    id: 41,
    title: "Python PYQ 2023",
    program: "Diploma",
    branch: "Electronics",
    year: "2nd Year",
    semester: "Semester 4",
    type: "PYQs",
    subject: "Python Programming",
    desc: "Previous Year Question of year 2023 of Python",
    size: "0.7 MB",
    contributor: "Sudarshan Raval (Developer)",
    initials: "SR",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1w-oJ1a-UndpkC1hlqxBz1g--8PP8WrQ9/view?usp=drive_link"
  },


  {
    id: 41,
    title: "Python Handbook",
    program: "Diploma",
    branch: "Electronics",
    year: "2nd Year",
    semester: "Semester 4",
    type: "Notes",
    subject: "Python Programming",
    desc: "A Complete Python Handbook for programmers to learn programming as well by Code With Harry",
    size: "1.7 MB",
    contributor: "Sudarshan Raval (Developer)",
    initials: "SR",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/161BZoSh6f4Ag3jccFKeKVd8KH9Kql1Cm/view?usp=drive_link"
  },

  // Diploma Electronics sem 5

  
  {
    id: 40,
    title: "EV Basic PYQ 2022",
    program: "Diploma",
    branch: "Electronics",
    year: "3rd Year",
    semester: "Semester 5",
    type: "PYQs",
    subject: "Electric Vehicle (Basic)",
    desc: "Previous Year Questions of Electric Vehicle (Basic) of year 2022",
    size: "575 KB",
    contributor: "Team NotoByte",
    initials: "NB",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1nUvCtHm2JECiSFBM3XF1X37f2DySSOsG/view?usp=drive_link"
  },

  {
    id: 40,
    title: "EV Basic PYQ 2023",
    program: "Diploma",
    branch: "Electronics",
    year: "3rd Year",
    semester: "Semester 5",
    type: "PYQs",
    subject: "Electric Vehicle (Basic)",
    desc: "Previous Year Questions of Electric Vehicle (Basic) of year 2023",
    size: "941 KB",
    contributor: "Team NotoByte",
    initials: "NB",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1vjBtesNoc4MtmyXlfAAiULoqU2jJTGp5/view?usp=drive_link"
  },


  {
    id: 41,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "Electronics",
    year: "3rd Year",
    semester: "Semester 5",
    type: "Notes",
    subject: "C language",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },


  {
    id: 40,
    title: "Python Handbook",
    program: "Diploma",
    branch: "Electronics",
    year: "3rd Year",
    semester: "Semester 6",
    type: "Notes",
    subject: "Python Programming",
    desc: "A Complete Python Handbook for programmers to learn programming as well by Code With Harry",
    size: "1.7 MB",
    contributor: "Sudarshan Raval (Developer)",
    initials: "SR",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/161BZoSh6f4Ag3jccFKeKVd8KH9Kql1Cm/view?usp=drive_link"
  },


  // Electrical 1st year

  {
    id: 42,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "Electrical",
    year: "1st Year",
    semester: "Semester 1",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 42,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "Electrical",
    year: "1st Year",
    semester: "Semester 2",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  // Electrical 2nd Year

  {
    id: 42,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "Electrical",
    year: "2nd Year",
    semester: "Semester 3",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 42,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "Electrical",
    year: "2nd Year",
    semester: "Semester 4",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  // Diploma Electrical sem 5 

  
  {
    id: 40,
    title: "EV Basic PYQ 2022",
    program: "Diploma",
    branch: "Electrical",
    year: "3rd Year",
    semester: "Semester 5",
    type: "PYQs",
    subject: "Electric Vehicle (Basic)",
    desc: "Previous Year Questions of Electric Vehicle (Basic) of year 2022",
    size: "575 KB",
    contributor: "Team NotoByte",
    initials: "NB",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1nUvCtHm2JECiSFBM3XF1X37f2DySSOsG/view?usp=drive_link"
  },

  {
    id: 40,
    title: "EV Basic PYQ 2023",
    program: "Diploma",
    branch: "Electrical",
    year: "3rd Year",
    semester: "Semester 5",
    type: "PYQs",
    subject: "Electric Vehicle (Basic)",
    desc: "Previous Year Questions of Electric Vehicle (Basic) of year 2023",
    size: "941 KB",
    contributor: "Team NotoByte",
    initials: "NB",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1vjBtesNoc4MtmyXlfAAiULoqU2jJTGp5/view?usp=drive_link"
  },


  {
    id: 42,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "Electrical",
    year: "3rd Year",
    semester: "Semester 5",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 42,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "Electrical",
    year: "3rd Year",
    semester: "Semester 6",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },



  // Mechanical 1st year

  {
    id: 43,
    title: "Syllabus of 1st Semester",
    program: "Diploma",
    branch: "Mechanical",
    year: "1st Year",
    semester: "Semester 1",
    type: "Syllabus",
    subject: "Syllabus",
    desc: "Mechanical Engineering Syllabus (2026-2029) Batch",
    size: "2.4 MB",
    contributor: "Roshan Kumar",
    initials: "RK",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/mech/sem1/Mech-syllabus-sem1.pdf"
  },

  {
    id: 43,
    title: "AI Unit 1 Lab",
    program: "Diploma",
    branch: "Mechanical",
    year: "1st Year",
    semester: "Semester 1",
    type: "Notes",
    subject: "Introduction to Artificial Intelligence",
    desc: "Lab Question of Unit 1 of AI & ML",
    size: "1.8 MB",
    contributor: "Roshan Kumar",
    initials: "RK",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/mech/sem1/AI-Unit-1-Lab.pdf"
  },

  {
    id: 43,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "Mechanical",
    year: "1st Year",
    semester: "Semester 2",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  // Mechanical 2nd Year

  {
    id: 43,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "Mechanical",
    year: "2nd Year",
    semester: "Semester 3",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 43,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "Mechanical",
    year: "2nd Year",
    semester: "Semester 4",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  // diploma Mechanical sem 5 

  
  {
    id: 40,
    title: "EV Basic PYQ 2022",
    program: "Diploma",
    branch: "Mechanical",
    year: "3rd Year",
    semester: "Semester 5",
    type: "PYQs",
    subject: "Electric Vehicle (Basic)",
    desc: "Previous Year Questions of Electric Vehicle (Basic) of year 2022",
    size: "575 KB",
    contributor: "Team NotoByte",
    initials: "NB",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1nUvCtHm2JECiSFBM3XF1X37f2DySSOsG/view?usp=drive_link"
  },

  {
    id: 40,
    title: "EV Basic PYQ 2023",
    program: "Diploma",
    branch: "Mechanical",
    year: "3rd Year",
    semester: "Semester 5",
    type: "PYQs",
    subject: "Electric Vehicle (Basic)",
    desc: "Previous Year Questions of Electric Vehicle (Basic) of year 2023",
    size: "941 KB",
    contributor: "Team NotoByte",
    initials: "NB",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1vjBtesNoc4MtmyXlfAAiULoqU2jJTGp5/view?usp=drive_link"
  },


  {
    id: 43,
    title: "AI Unit 1 Lab",
    program: "Diploma",
    branch: "Mechanical",
    year: "3rd Year",
    semester: "Semester 5",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 43,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "Mechanical",
    year: "3rd Year",
    semester: "Semester 6",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },


  // Civil 1st year

  {
    id: 44,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "Civil",
    year: "1st Year",
    semester: "Semester 1",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 44,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "Civil",
    year: "1st Year",
    semester: "Semester 2",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  // Civil 2nd Year

  {
    id: 44,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "Civil",
    year: "2nd Year",
    semester: "Semester 3",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 44,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "Civil",
    year: "2nd Year",
    semester: "Semester 4",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  // diploma civil sem 5
  
  
  {
    id: 40,
    title: "EV Basic PYQ 2022",
    program: "Diploma",
    branch: "Civil",
    year: "3rd Year",
    semester: "Semester 5",
    type: "PYQs",
    subject: "Electric Vehicle (Basic)",
    desc: "Previous Year Questions of Electric Vehicle (Basic) of year 2022",
    size: "575 KB",
    contributor: "Team NotoByte",
    initials: "NB",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1nUvCtHm2JECiSFBM3XF1X37f2DySSOsG/view?usp=drive_link"
  },

  {
    id: 40,
    title: "EV Basic PYQ 2023",
    program: "Diploma",
    branch: "Civil",
    year: "3rd Year",
    semester: "Semester 5",
    type: "PYQs",
    subject: "Electric Vehicle (Basic)",
    desc: "Previous Year Questions of Electric Vehicle (Basic) of year 2023",
    size: "941 KB",
    contributor: "Team NotoByte",
    initials: "NB",
    icon: "fas fa-book",
    pdfUrl: "https://drive.google.com/file/d/1vjBtesNoc4MtmyXlfAAiULoqU2jJTGp5/view?usp=drive_link"
  },


  {
    id: 44,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "Civil",
    year: "3rd Year",
    semester: "Semester 5",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },

  {
    id: 44,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "Civil",
    year: "3rd Year",
    semester: "Semester 6",
    type: "Notes",
    subject: "Hydraulics",
    desc: "Complete C programming notes",
    size: "1.8 MB",
    contributor: "Your Name",
    initials: "YN",
    icon: "fas fa-book",
    pdfUrl: "assets/notes/c-programming.pdf"
  },






];

const notesUncategorized = [
  {
    "id": 5,
    "title": "Academic Calendar 2026-2027",
    "sem": "Diploma | All Semester",
    "desc": "Important Dates, Holidays and occassion list of session 2026-2027 by SBTE Bihar",
    "size": "300 KB",
    "contributor": "Sudarshan Raval Developer",
    "initials": "SR",
    "category": "Important Downloads",
    "icon": "fas fa-calendar",
    "pdfUrl": "https://drive.google.com/file/d/1LDDLY7iNCMOxeHM86d2WVwhKItSk_uUi/view?usp=drive_link",
    "reason": "This is common calendar for all branches of Diploma"
  },
  {
    "id": 12,
    "title": "Electrical concept | BULLET Volume-2",
    "sem": "Competitive Book | SSC JE",
    "desc": "Electrical Engineering book for all competitive exam in English and Hindi",
    "size": "33 MB",
    "contributor": "Pankaj Kumar",
    "initials": "PK",
    "category": "Notes",
    "icon": "fas fa-book",
    "pdfUrl": "assets/pdfs/Electrical_book_volume-2.pdf",
    "reason": "Competitive-exam book, not tied to a branch/year/semester."
  }
];

/* ================================================================
   AUTOMATIC HIERARCHY BUILDER
   ----------------------------------------------------------------
   Keep this section unchanged. It converts the simple flat list above
   into the `notesTree` structure expected by notes.js.
================================================================ */

function notesSlug(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const NOTES_PROGRAM_META = {
  "b.tech": {
    id: "btech",
    title: "B.Tech",
    icon: "fas fa-user-graduate",
    desc: "Engineering degree resources"
  },
  "diploma": {
    id: "diploma",
    title: "Diploma",
    icon: "fas fa-graduation-cap",
    desc: "Polytechnic study resources"
  }
};

const NOTES_BRANCH_META = {
  "cse": { title: "Computer Science Engineering (CSE)", icon: "fas fa-laptop-code" },
  "civil": { title: "Civil Engineering", icon: "fas fa-drafting-compass" },
  "mechanical": { title: "Mechanical Engineering", icon: "fas fa-cogs" },
  "electrical": { title: "Electrical Engineering", icon: "fas fa-bolt" },
  "ece": { title: "Electronics & Communication Engineering (ECE)", icon: "fas fa-microchip" },
  "it": { title: "Information Technology (IT)", icon: "fas fa-laptop-code" },
  "general-all-branches": { title: "General / All Branches", icon: "fas fa-layer-group", desc: "Common papers applicable across every branch" }
};

const NOTES_TYPE_META = {
  "notes": { icon: "fas fa-book" },
  "pyqs": { icon: "fas fa-file-signature" },
  "assignments": { icon: "fas fa-pen" },
  "important-downloads": { icon: "fas fa-file-download" },
  "downloads": { icon: "fas fa-file-download" }
};

function notesFindOrCreate(list, id, factory) {
  let item = list.find(x => x.id === id);
  if (!item) {
    item = factory();
    list.push(item);
  }
  return item;
}

function notesBuildTree(resources, uncategorized) {
  const tree = { programs: [], uncategorized: uncategorized || [] };

  resources.forEach(resource => {
    const programKey = String(resource.program || "").trim().toLowerCase();
    const programMeta = NOTES_PROGRAM_META[programKey] || {
      id: notesSlug(resource.program),
      title: resource.program,
      icon: "fas fa-graduation-cap",
      desc: `${resource.program} study resources`
    };

    const program = notesFindOrCreate(tree.programs, programMeta.id, () => ({
      id: programMeta.id,
      title: programMeta.title,
      icon: programMeta.icon,
      desc: programMeta.desc,
      branches: []
    }));

    const branchId = notesSlug(resource.branch);
    const branchMeta = NOTES_BRANCH_META[branchId] || {
      title: resource.branch,
      icon: "fas fa-layer-group"
    };

    const branch = notesFindOrCreate(program.branches, branchId, () => ({
      id: branchId,
      title: branchMeta.title,
      icon: branchMeta.icon,
      ...(branchMeta.desc ? { desc: branchMeta.desc } : {}),
      years: []
    }));

    const yearId = notesSlug(resource.year);
    const year = notesFindOrCreate(branch.years, yearId, () => ({
      id: yearId,
      title: resource.year,
      semesters: []
    }));

    const semesterId = notesSlug(resource.semester);
    const semester = notesFindOrCreate(year.semesters, semesterId, () => ({
      id: semesterId,
      title: resource.semester,
      resourceTypes: []
    }));

    const typeId = notesSlug(resource.type);
    const typeMeta = NOTES_TYPE_META[typeId] || { icon: resource.icon || "fas fa-folder" };
    const type = notesFindOrCreate(semester.resourceTypes, typeId, () => ({
      id: typeId,
      title: resource.type,
      icon: typeMeta.icon,
      subjects: []
    }));

    const subjectId = notesSlug(resource.subject);
    const subject = notesFindOrCreate(type.subjects, subjectId, () => ({
      id: subjectId,
      title: resource.subject,
      resources: []
    }));

    // Keep the resource card format expected by notes.js.
    // `sem` can be supplied manually; otherwise it is generated automatically.
    subject.resources.push({
      id: resource.id,
      title: resource.title,
      sem: resource.sem || `${resource.year} • ${resource.program}`,
      desc: resource.desc || "",
      size: resource.size || "",
      contributor: resource.contributor || "NotoByte",
      initials: resource.initials || "NB",
      category: resource.category || resource.type,
      icon: resource.icon || typeMeta.icon,
      pdfUrl: resource.pdfUrl || ""
    });
  });

  return tree;
}

// IMPORTANT: notes.js already reads `notesTree`, so keep this variable name.
const notesTree = notesBuildTree(notesResources, notesUncategorized);

/* ================================================================
   HOW TO ADD A NEW RESOURCE
   ----------------------------------------------------------------
   Go to the `notesResources` array above and add ONE object:

   {
     id: 26,
     title: "OOP PYQ 2025",
     program: "Diploma",
     branch: "CSE",
     year: "3rd Year",
     semester: "Semester 5",
     type: "PYQs",
     subject: "Object Oriented Programming",
     desc: "OOP previous year question paper",
     size: "1.2 MB",
     contributor: "Sudarshan Raval",
     initials: "SR",
     icon: "fas fa-file-signature",
     pdfUrl: "assets/pyq/oop-pyq-2025.pdf"
   }

   You do NOT need to create the branch, year, semester, type or
   subject manually. The hierarchy will be generated automatically.

   Only `id`, `title`, `program`, `branch`, `year`, `semester`, `type`,
   `subject` and `pdfUrl` are essential. The other fields are optional.
================================================================ */

