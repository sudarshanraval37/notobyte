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




  // Diploma 




  // CSE 1st year

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
    title: "C Programming Notes",
    program: "Diploma",
    branch: "CSE",
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

  // CSE 2nd Year

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
    title: "C Programming Notes",
    program: "Diploma",
    branch: "CSE",
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
    id: 40,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "CSE",
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
    id: 40,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "CSE",
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
    id: 40,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "CSE",
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


  // Electronics 1st year

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

  // Electronics 2nd Year

  {
    id: 41,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "Electronics",
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
    id: 41,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "Electronics",
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

  // Electronics 3rd Year

  {
    id: 41,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "Electronics",
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
    id: 41,
    title: "C Programming Notes",
    program: "Diploma",
    branch: "Electronics",
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

  // Electrical 3rd Year

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

  // Mechanical 3rd Year

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

  // Civil 3rd Year

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
    "title": "World History",
    "sem": "Sem 2 | B.A",
    "desc": "Detailed notes on modern world history from the Renaissance period to the 21st century global events.",
    "size": "3.3 MB",
    "contributor": "Arjun Mehta",
    "initials": "AM",
    "category": "Important Downloads",
    "icon": "fas fa-globe",
    "pdfUrl": "assets/pdfs/world-history.pdf",
    "reason": "Not a B.Tech/Diploma engineering resource (B.A course) — needs its own category."
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

