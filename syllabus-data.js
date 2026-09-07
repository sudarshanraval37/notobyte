/* ================================================================
   syllabus-data.js — NotoByte Syllabus Hub
   ----------------------------------------------------------------
   Feeds the new "Syllabus Hub" screen (Program -> Branch -> Semester
   -> Theory/Lab subject list -> tap a subject to expand its Units).

   HOW TO ADD DATA
   -----------------
   Semesters are stored as simple keys: sem1, sem2, ... sem8.

   Example:
     semesters.sem1.theory = [ ... ];
     semesters.sem1.lab = [ ... ];

   To add a subject, just add another object inside `theory` or `lab`.
   A subject can optionally include a `units` array to make it
   expandable (tap-to-reveal).

   Leave a semester's theory/lab arrays empty ([]) if you haven't
   added that semester's syllabus yet — the UI will show
   "Nothing here yet" instead of breaking.

   This structure avoids `sems[0]`, `sems[1]`, etc. and makes
   future syllabus updates much easier.
================================================================ */

function syllabusEmptySemesters(count) {
  const semesters = {};

  for (let i = 1; i <= count; i++) {
    semesters[`sem${i}`] = {
      id: `sem${i}`,
      title: `SEM ${i}`,
      theory: [],
      lab: []
    };
  }

  return semesters;
}

const syllabusData = {
  programs: [
    {
      id: "btech",
      title: "B.Tech",
      icon: "fas fa-user-graduate",
      branches: [
        {
          id: "cse",
          title: "Computer Science & Engineering",
          icon: "fas fa-laptop-code",
          semesters: (() => {
            const semesters = syllabusEmptySemesters(8);

            semesters.sem1.theory = [
              { name: "Digital Electronics", code: "2018009" },
              {
                name: "Data Structure and Alog.",
                code: "2018010",
                units: [
                  {
                    title: "Unit 1.0 : Introduction",
                    points: [
                      "Basic Terminologies : Elementary Data Organizations",
                      "Data Operations, Insertion, Deletion and traversal etc",
                      "Analysis of an algorithms",
                      "Asymptotic Notations"
                    ]
                  },
                  {
                    title: "Unit 2.0 : Stacks and Queues",
                    points: [
                      "Basic Terminologies : Elementary Data Organizations",
                      "Data Operations, Insertion, Deletion and traversal etc",
                      "Analysis of an algorithms",
                      "Asymptotic Notations"
                    ]
                  },
                  {
                    title: "Unit 3.0 : Stacks and Queues",
                    points: [
                      "Basic Terminologies : Elementary Data Organizations",
                      "Data Operations, Insertion, Deletion and traversal etc",
                      "Analysis of an algorithms",
                      "Asymptotic Notations"
                    ]
                  }
                ]
              },
              { name: "OOP using JAVA", code: "2018011" },
              { name: "Discrete Mathematics", code: "2018012" },
              { name: "Operating System", code: "2018013" }
            ];

            semesters.sem1.lab = [
              { name: "Digital Electronics Lab", code: "G-2018013" },
              { name: "OOP using JAVA Lab", code: "G-2018013" },
              { name: "Operating System Lab", code: "G-2018013" }
            ];

            return semesters;
          })()
        },
        {
          id: "electrical",
          title: "Electrical and Electronics Engineering",
          icon: "fas fa-bolt",
          semesters: syllabusEmptySemesters(8)
        },
        {
          id: "mechanical",
          title: "Mechanical Engineering",
          icon: "fas fa-cogs",
          semesters: syllabusEmptySemesters(8)
        },
        {
          id: "civil",
          title: "Civil Engineering",
          icon: "fas fa-drafting-compass",
          semesters: syllabusEmptySemesters(8)
        },
        {
          id: "ece",
          title: "Electronics and Communication Engineering",
          icon: "fas fa-microchip",
          semesters: syllabusEmptySemesters(8)
        }
      ]
    },
    {
      id: "diploma",
      title: "Diploma",
      icon: "fas fa-graduation-cap",
      branches: [
        {
          id: "cse",
          title: "Computer Science & Engineering",
          icon: "fas fa-laptop-code",
          semesters: (() => {
            const semesters = syllabusEmptySemesters(6);

            semesters.sem1.theory = [
              {
                name: "Basic Engg. Mathematics ", // T2600101[cite: 1]
                code: "2600101",
                units: [
                  {
                    title: "Unit-1.0 : Algebra",
                    points: [
                      "1.1 Concept and properties of determinant.",
                      "1.2 Solutions of simultaneous equations in three Unknowns by Cramer's rule.",
                      "1.3 Algebra of matrices (Addition, Subtraction, Multiplication by Scalar, and Multiplication of Two matrices).",
                      "1.4 Transpose, Adjoint and Inverse of Matrix.",
                      "1.5 Solutions of simultaneous equations of a Matrix of order 3 x 3 by Inversion method.",
                      "1.6 Position vector.",
                      "1.7 Algebra of Vectors (Addition, Subtraction, Scalar Multiplication with vector).",
                      "1.8 Scalar product.",
                      "1.9 Vector product.",
                      "1.10 Algebra in Indian Knowledge System: Solution of simultaneous equations (Indian Mathematics). (IKS)"
                    ]
                  },
                  {
                    title: "Unit-2.0 : Differential Calculus",
                    points: [
                      "2.1 Concept of function.",
                      "2.2 Different type of functions.",
                      "2.3 Domain and Range of Function.",
                      "2.4 Concept of Limits and its evaluation.",
                      "2.5 Concept of continuity with simple problems.",
                      "2.6 Differentiation by First Principle.",
                      "2.7 Differentiation of Algebraic, trigonometric, Exponential, and Logarithmic functions.",
                      "2.8 Differentiation of sum, product, and quotient of two functions.",
                      "2.9 Differentiation of composite functions by Chain Rule.",
                      "2.10 Logarithmic differentiation.",
                      "2.11 Implicit differentiation.",
                      "2.12 Differentiation of Parametric Functions.",
                      "2.13 Calculus in Indian Knowledge System: The Discovery of Calculus by Indian Astronomers. (Indian Mathematics). (IKS)"
                    ]
                  },
                  {
                    title: "Unit-3.0 : Application of Differential Calculus",
                    points: [
                      "3.1 Successive differentiation up to second order.",
                      "3.2 Rolle's Theorem and Mean Value Theorem (without proof) with examples.",
                      "3.3 Rate of change of quantities.",
                      "3.4 Equation of Tangent and Normal.",
                      "3.5 Maxima and Minima.",
                      "3.6 Radius of curvature."
                    ]
                  },
                  {
                    title: "Unit-4.0 : Co-ordinate Geometry",
                    points: [
                      "4.1 Introduction of Co-ordinate Systems.",
                      "4.2 Slope of a line, the angle between two lines.",
                      "4.3 Various forms of Straight Lines: Point-slope form, Two-point form, Slope intercept form, Intercept form, Normal form, General form.",
                      "4.4 Perpendicular distance of a line from a point, perpendicular distance between two parallel lines.",
                      "4.5 Geometry in Sulabasutras in Indian Knowledge System (construction of the square, circling the square). (Indian Mathematics).",
                      "4.6 Introduction of Conic-Section.",
                      "4.7 Equation of Circle in standard form.",
                      "4.8 Standard equation of parabola, ellipse, and hyperbola."
                    ]
                  },
                  {
                    title: "Unit-5.0 : Probability and Statistics",
                    points: [
                      "5.1 Concept of Probability.",
                      "5.2 Addition and multiplication theorems of Probability.",
                      "5.3 Mean, Median, Mode (The measure of Central Tendency).",
                      "5.4 Range, Variance, Standard Deviation (Measure of Dispersion).",
                      "5.5 Coefficient of Variation."
                    ]
                  }
                ]
              },
              {
                name: "Applied Physics",
                code: "T2600102B",
                units: [
                  {
                    title: "Unit-1.0 : Unit and Measurements",
                    points: [
                      "1.1 Physical quantities, fundamentals and derived units and system of units",
                      "1.2 Accuracy, precision and errors (systematic and random) in measurements, Method of estimation of errors (absolute and relative) in measurement, propagation of errors, significant figures",
                      "1.3 Dimensions and dimensional formulae of physical quantities, Principle of homogeneity of dimension in an equation",
                      "1.4 Applications of dimensions: conversion from one system of units to other, corrections of equations and derivation of simple equations.",
                      "1.5 Ancient astronomical instruments: Chakra, Dhanuryatra, Yasti and Phalaka yantra."
                    ]
                  },
                  {
                    title: "Unit-2.0 : Simple Harmonic and Wave Motion",
                    points: [
                      "2.1 Periodic and Oscillatory Motion",
                      "2.2 Simple Harmonic Motion (SHM): Displacement, velocity, acceleration, time period, frequency and their interrelation",
                      "2.3 Types of waves: Mechanical and Electromagnetic, Transverse and longitudinal waves, wave velocity, frequency and wave length and their relationship, wave equation, amplitude, phase, phase difference, Superposition of waves"
                    ]
                  },
                  {
                    title: "Unit-3.0 : Electrostatics, Electromagnetism and Electric Current",
                    points: [
                      "3.1 Electric Charge, Coulomb's law, Electric field, Electric lines of force and their properties, Electric flux, Electric potential and potential difference, Electric dipole",
                      "3.2 Gauss' law, electric field intensity due to straight charged conductor, charged plane sheet and charged sphere",
                      "3.3 Dielectric, Capacitance of capacitor (parallel plate), Factor affecting capacitance of capacitors",
                      "3.4 Magnetic field and its units, Biot Savart Law, Magnetic field due to current caring wire: straight and circular wire, Lorentz force (force on moving charge in magnetic field)",
                      "3.5 Magnetic flux, Faraday's law of electromagnetic induction, Lenz's law, Self and Mutual induction, eddy current, motional emf",
                      "3.6 DC and AC currents, Average, rms and Peak value of AC current"
                    ]
                  },
                  {
                    title: "Unit-4.0 : Semiconductor Physics",
                    points: [
                      "4.1 Energy band and band gap, insulator, semi-conductor, conductor",
                      "4.2 Intrinsic and Extrinsic semiconductors, Drift velocity, drift and diffusion current, Mobility, current density, law of mass action.",
                      "4.3 Depletion layer and barrier Potential, p-n junction and V-I characteristics, Half wave and full wave rectifier",
                      "4.4 Photocells, Solar cells; working principle and engineering applications."
                    ]
                  },
                  {
                    title: "Unit-5.0 : Modern Physics",
                    points: [
                      "5.1 Photoelectric effect; threshold frequency, work function, Stopping Potential, Einstein's photoelectric equation.",
                      "5.2 Lasers: Energy levels, ionization and excitation potentials; spontaneous and stimulated emission; population inversion, pumping methods, types of lasers: He-Ne Laser, p-n junction diode laser, engineering and medical applications of lasers.",
                      "5.3 Optical fibers: Total internal reflection, acceptance angle and numerical aperture, Optical fiber types, applications in telecommunication, medical and sensors.",
                      "5.4 Nanotechnology: Properties (optical, magnetic and dielectric properties) of Nanomaterials and its application, Bhasma (Ancient Ayurveda, IKS)"
                    ]
                  }
                ]
              },
              {
                name: "Fundamentals of Electrical and Electronic Engg.",
                code: "2620103",
                units: [
                  {
                    title: "Unit-1.0 : Basic Electrical Parameters and Concepts",
                    points: [
                      "1.1 Electric charge, flow of charges, Electric Current D.C and A.C, Concept of ideal and practical current sources",
                      "1.2 Analogy of charge, potential/Voltage difference D.C and A.C, Induced emf/voltage, Terminal voltage, Concept of Ideal & Practical voltage sources",
                      "1.3 Resistor Properties, Classification, Practical application of resistors, Effect of temperature on resistance, Series and parallel combination of resistors, Phase difference",
                      "1.4 Heating, magnetic and chemical effect of current, Electrical work, Power and energy, Open and short circuit condition of electric circuit",
                      "1.5 Capacitors Properties, Capacitance formation, Expression for capacitance, Capacitive reactance, Energy stored in capacitor, Series & parallel combination of capacitors, Types of capacitors including super capacitors and their applications",
                      "1.6 Inductors Properties, Self and mutual inductance, inductive reactance, Voltage and current equations of inductor, Energy stored in inductor, Inductance in A.C. and D.C. circuits, Types of Inductors including MEMS inductor and their applications"
                    ]
                  },
                  {
                    title: "Unit-2.0 : Fundamentals of D.C. and A.C. Circuits",
                    points: [
                      "2.1 DC Circuits: AC and DC current, voltage and Power",
                      "2.2 Ohm's law, Kirchhoff's Current Law, Kirchhoff's Voltage law",
                      "2.3 Active & Passive elements, Linear & Non-linear circuit, unilateral and Bilateral circuit element",
                      "2.4 Node, Branch, Loop, Mesh",
                      "2.5 A.C Circuits: Frequency, Time period, Amplitude, Angular Velocity, RMS Value, Average Value, Form factor, Peak factor, Power factor",
                      "2.6 Phasor representation and transformation from Polar to rectangular form and vice versa of alternating quantities"
                    ]
                  },
                  {
                    title: "Unit-3.0 : Magnetic Circuits and Electromagnetic Induction",
                    points: [
                      "3.1 Magnetic flux, Magnetomotive force, Magnetic field strength, Permeability, Reluctance.",
                      "3.2 Magnetic leakage, leakage coefficient",
                      "3.3 Magnetic Hysteresis, Hysteresis loop",
                      "3.4 Magnetization (B-H) Curve",
                      "3.5 Analogy between electric and magnetic circuits",
                      "3.6 Electromagnetism",
                      "3.7 Induced e.m.f-Statically (self and mutual) and dynamically induced emf",
                      "3.8 Faraday's Laws of electromagnetic Induction.",
                      "3.9 Lenz's Law, Fleming's R.H. rule; direction of induced E.M.F, Fleming's L.H. rule, Ampere's Law"
                    ]
                  },
                  {
                    title: "Unit-4.0 : Basic Electronic Components",
                    points: [
                      "4.1 Semiconductors: Definition, types of semiconductors and their materials. Energy band theory and effect of temperature.",
                      "4.2 Diodes: Basic Concept of Diodes, N-type & p-type PN Junction Diode Forward and Reverse Bias Characteristics i.e., PN junction Barrier voltage, depletion region, Junction Capacitance. Forward biased & reversed biased junction, Diode symbol",
                      "4.3 Bipolar Junction Transistor (BJT): NPN and PNP Transistor - Operation and characteristics. symbol",
                      "4.4 Field Effect Transistor (FET): FET Operation and characteristics, Classification FET and advantages, FET symbol"
                    ]
                  },
                  {
                    title: "Unit-5.0 : Overview of Digital Electronics",
                    points: [
                      "5.1 Introduction to different Number systems: Binary, Octal, Decimal & Hexadecimal & their Conversion from one another",
                      "5.2 Introduction to Boolean Algebra, rules and Laws of Boolean Algebra - DE Morgan's Law",
                      "5.3 Study of logic gates (NOT, OR, NOR, AND, NAND) Symbolic representation, Truth Table and Implementation of Boolean expressions"
                    ]
                  }
                ]
              },
              {
                name: "Introduction to Artificial Intelligence",
                code: "2600100",
                units: [
                  {
                    title: "Unit-1.0 : Introduction to IT Systems and Digital Technologies",
                    points: [
                      "1.1 Introduction to Digital Systems and Internet Technology: Introduction to Digital Systems, Data and Information, Role of Information Technology in Engineering, Fundamentals of the Internet, Web Browsers and Secure Web Navigation, Search Engines and Effective Information Retrieval.",
                      "1.2 Computer Hardware Components and Internet Technology: CPU, Memory, Storage Devices, Input and Output Devices",
                      "1.3 Operating Systems: Basic functions of operating systems (Windows, Linux, and Mobile OS). Working with local files, folders, and system directories.",
                      "1.4 Cloud Computing and Collaboration: Introduction to Cloud Ecosystems. Working with Cloud Storage (Google Drive, OneDrive), and collaborative digital environments (Real-time document editing, sharing links, and setting Viewer, Commenter, Editor access permissions).",
                      "1.5 Cybersecurity Fundamentals: Introduction to Computer Networks, Safe internet practices, password hygiene, and basic digital safety awareness."
                    ]
                  },
                  {
                    title: "Unit-2.0 : Fundamentals of Artificial Intelligence",
                    points: [
                      "2.1 Introduction to AI: Defining Intelligence (Human vs. Artificial), History, evolution, and major milestones of Artificial Intelligence.",
                      "2.2 Core Paradigms: 2.2.1-Brief overview of Machine Learning (ML)- Supervised, Unsupervised and Reinforcement Learning, 2.2.2- Overview of Artificial Neural Network (ANN), 2.2.3- Brief Overview of Deep Learning (DL)",
                      "2.3 Fundamentals of AI Learning Process: Introduction to AI Models, Input, Processing and Output Stages, Pattern Recognition and Learning, Training Data and Testing Data, Model Building Lifecycle",
                      "2.4 The Role of Data: Types of data (Structured vs. Unstructured), Importance of data quality, Concept of splitting data into Training and Testing sets.",
                      "2.5 Visual Pattern Recognition: Understanding Patterns in Data, Identifying Trends and Relationships, Introduction to basic mathematical ideas in AI (Euclidean Distance)",
                      "2.6 Capabilities and Limitations of AI: Core Capabilities of AI, Strengths of AI Systems, Industrial Applications and Scalability, Human-AI Collaboration"
                    ]
                  },
                  {
                    title: "Unit-3.0 : Core AI Applications - Computer Vision & NLP",
                    points: [
                      "3.1 Introduction to Computer Vision: Concept of machine sight; processing digital images and modern industrial use cases.",
                      "3.2 Image Processing Concepts: Basics of Image Segmentation, pixel analysis, object scaling, and structural similarity indices.",
                      "3.3 Object Detection and Identification: Concepts of identifying and tracking target boundaries within images.",
                      "3.4 Optical Character Recognition (OCR): Digitizing text logs from blueprints, machine maintenance logbooks, and engineering data sheets.",
                      "3.5 Natural Language Processing (NLP): Introduction to how machines process, tokenize, and interpret human language."
                    ]
                  },
                  {
                    title: "Unit-4.0 : Conversational AI and Generative Systems",
                    points: [
                      "4.1 Chatbot Architecture: Introduction to AI-based Chatbots, Large Language Models (LLMs), and their basic internal operational blocks.",
                      "4.2 Next-Word Prediction Concept: Next-Word Prediction Mechanism, Probability-Based Word Selection, Context and Meaning in Text Generation, Simple Examples of Next-Word Prediction.",
                      "4.3 Prompt Engineering Foundations: Introduction to Prompt Engineering, Components of an Effective Prompt, Writing Clear and Specific Instructions, Context and Constraints in Prompts, Zero-Shot Prompting.",
                      "4.4 Industrial Applications of Generative AI: Technical document summarization, automated code scaffolding generation, and cross-disciplinary engineering workflow ideation.",
                      "4.5 Zero-Code Generative Design Principles: Prompt-Based Design Generation, Zero-Code AI Design Tools (Examples of Zero-Code Generative Design Tools)",
                      "4.6 Limitations, Risks, and Responsible Use of AI: AI Hallucinations and Bias, Fact Verification and Source Validation, Data Privacy and Copyright Awareness, Responsible Use of Generative AI."
                    ]
                  },
                  {
                    title: "Unit-5.0 : Programming Logic & Computational Thinking using Python",
                    points: [
                      "5.1 Computational Logic Introduction: Step-wise problem solving, logical flowcharts, algorithmic layouts, and Python's role in modern automation ecosystems.",
                      "5.2 Variables and Data Types: Declaration of variables, Working with primary data types: Integers (int), Floats (float), Strings (string), and Booleans (boolean), Explicit Type Casting.",
                      "5.3 Expression Evaluation: Utilizing Arithmetic, Relational, Logical, and Assignment operators inside standard engineering formulas.",
                      "5.4 Interactive Input/Output: Capturing console input values via input() and rendering clean output streams via formatted string methods (f-strings).",
                      "5.5 Conditional Control Blocks: Implementing selective execution paths using if, if-else, and nested if statements (e.g., Automating threshold trigger safety alarms for critical structural pressure, engine temperature, or grid voltage levels).",
                      "5.6 Iterative Looping Structures: Automating repetitive calculation sequences using definite for loops, indefinite while loops, and the range() function (e.g., Generating engineering conversion metric tables or multi-interval sensor grids).",
                      "5.7 Sequential Data Storage (Lists): Introduction to Python Lists, basic list index tracking, appending data, and processing sequential engineering logs (e.g., finding minimum, maximum, and running mean values from a sensor array)."
                    ]
                  }
                ]
              },
              {
                name: "ICT Tools",
                code: "2618107",
                units: [
                  {
                    title: "Unit-1.0 : Word Processing",
                    points: [
                      "1.0 Word Processing: Overview of Word processor Basics of Font type, size, colour, Effects like Bold, italic, underline, Subscript and superscript, Case changing options, previewing a document, saving a document, closing a document and exiting application.",
                      "1.1 Editing a Document: Navigate through a document, Scroll through text, Insert and delete text, Select text, Undo and redo commands, Use drag and drop to move text, Copy, cut and paste, Use the clipboard, Clear formatting, Format and align text, Formatting Paragraphs, Line and paragraph spacing, using FIND and REPLACE, Setting line spacing, add bullet and numbers in lists, add borders and shading, document views, Page settings and margins, Spelling and Grammatical checks",
                      "1.2 Changing the Layout of a Document: Adjust page margins, change page orientation, Create headers and footers, Set and change indentations, Insert and clear tabs.",
                      "1.3 Inserting Elements to Word Documents: Insert and delete a page break, Insert page numbers, Insert the date and time, Insert special characters (symbols), Insert a picture from a file, Resize and reposition a picture",
                      "1.4 Working with Tables: Insert a table, Convert a table to text, Navigate and select text in a table, Resize table cells, Align text in a table, Format a table, Insert and delete columns and rows, Borders and shading, Repeat table headings on subsequent pages, Merge and split cells.",
                      "1.5 Working with Columned Layouts and Section Breaks: a Columns, Section breaks, Creating columns, Newsletter style columns, Changing part of a document layout or formatting, Remove section break, Add columns to remainder of a document, Column widths, Adjust column spacing, Insert manual column breaks."
                    ]
                  },
                  {
                    title: "Unit-2.0 : Spreadsheets",
                    points: [
                      "2.1 Working with Spreadsheets: Overview of workbook and worksheet, Create Worksheet Entering data, Save, Copy Worksheet, Delete Worksheet, Close and open Workbook.",
                      "2.2 Editing Worksheet: Insert data, adjust row height and column width, delete, move data, insert new rows and columns, Copy and Paste content, Find and Replace, Spell Check, sheet view Zoom In-Out, insert Special Symbols, Insert Comments, Add Text Box, Undo-redo Changes, Freeze Panes, hiding/unhiding rows and columns.",
                      "2.3 Formatting Cells and sheet: Setting Cell Type, Setting Fonts, Text options, Rotate Cells, Setting Colors, Text Alignments, Merge and Wrap, apply Borders and Shades, Sheet Options, Adjust Margins, Page Orientation, insert Header and Footer, Insert Page Breaks, Set Background.",
                      "2.4 Working with Formula: Creating Formula, absolute and relative cell references, Copying and pasting Formula, Common spreadsheet Functions such as sum, average, min, max, date, In, And, or, mathematical functions such as sqrt, power, statistical functions, applying conditions using IF.",
                      "2.5 Working with Charts: Introduction to charts, overview of different types of charts, Bar, Pie, Line charts, creating and editing charts. Using different chart options: chart title, axis title, legend, data labels, Axes, grid lines, moving chart in a separate sheet.",
                      "2.6 Advanced Operations: Applying Conditional Formatting, Data Filtering, Data Sorting, Using Ranges, Data Validation, Adding Graphics, Printing Worksheets, print area, margins, header, footer and other page setup options."
                    ]
                  },
                  {
                    title: "Unit-3.0 : Presentation Tool",
                    points: [
                      "3.1 Creating a Presentation: Outline of an effective presentation, Identify the elements of the User Interface, Starting a New Presentation Files, Creating a Basic Presentation, Working with textboxes, Apply Character Formats, Format Paragraphs, View a Presentation, Saving work, creating new Slides, Changing a slide Layout, Applying a theme, Changing Colours, fonts and effects, apply custom Colour and font theme, changing the background, Arrange Slide sequence,",
                      "3.2 Inserting Media elements: Adding and Modifying Graphical Objects to a Presentation Insert Images into a Presentation, insert audio clips, video/animation, Add Shapes, Add Visual Styles to Text in a Presentation, Edit Graphical Objects on a Slide, Format Graphical Objects on a Slide, Group Graphical Objects on a Slide, Apply an Animation Effect to a Graphical Object, Add Transitions, Add Speaker Notes, Print a Presentation.",
                      "3.3 Working with Tables: Insert a Table in a Slide, Format Tables, and Import Tables from Other Office Applications.",
                      "3.4 Working with Charts: Insert Charts in a Slide, modify a Chart, Import Charts from Other Office Applications."
                    ]
                  },
                  {
                    title: "Unit-4.0 : Basics of Internet",
                    points: [
                      "4.1 World Wide Web: Introduction, Internet, Intranet, URL, web servers, basic settings of web browsers- history, extension, default page, default search engine, privacy and security, creating and retrieving bookmarks, use search engines effectively for searching the content.",
                      "4.2 Web Services: Cloud- software as service (SAS), Google docs, slides, sheets, Form, Web Sites, web pages, e-Mail, Chat, Video Conferencing, e-learning, e-shopping, e-Reservation, e-Groups, Social Networking"
                    ]
                  }
                ]
              },
              {
                name: "Indian Constitution",
                code: "2600007",
                units: [
                  {
                    title: "Unit-1.0 : Constitution and Preamble",
                    points: [
                      "1.1 Meaning of the constitution of India.",
                      "1.2 Historical perspective of the Constitution of India.",
                      "1.3 Salient features and characteristics of the Constitution of India.",
                      "1.4 Preamble to the Constitution of India."
                    ]
                  },
                  {
                    title: "Unit-2.0 : Fundamental Rights and Directive Principles",
                    points: [
                      "2.1 Fundamental Rights under Part-III.",
                      "2.2 Fundamental duties and their significance.",
                      "2.3 Relevance of Directive Principles of State Policy under part-IV."
                    ]
                  },
                  {
                    title: "Unit-3.0 : Governance and Amendments",
                    points: [
                      "3.1 Amendment of the Constitutional Powers and Procedure",
                      "3.2 Major Constitutional Amendment procedure - 42nd, 44th, 74th, 76th, 86th and 91st"
                    ]
                  }
                ]
              },
              {
                name: "Open Educational Resources",
                code: "2600009",
                units: [
                  {
                    title: "Unit-1.0 : Open Educational Resources",
                    points: [
                      "1.1 OER-definition",
                      "1.2 What is NOT OER.",
                      "1.3 Benefits of using OER - Benefits to Students - Access to Quality Education",
                      "1.4 OER-Benefits to Faculty - Use, Improve and Share, Network and collaborate with peers, Lower Cost, Improve access to information",
                      "1.5 Challenges of Using OER - Subject Availability, Format and Material type availability, Time and Support availability",
                      "1.6 Evaluating OER - a) Clarity, Comprehensibility, and Readability, b) Content and Technical Accuracy, c) Adaptability and Modularity, d) Appropriateness and Fit, e) Accessibility",
                      "1.7 Finding Open Content - OER Search Scenario Filter by Usage Rights in Google, Repositories and Search Tools, Subject-specific Repositories"
                    ]
                  },
                  {
                    title: "Unit-2.0 : Copyright and Open Licensing",
                    points: [
                      "2.1 Copyright and what it does protect, benefits of copyright protection for creators, duration of copyright protection last, rights granted to copyright holders.",
                      "2.2 Exceptions and limitations to copyright law, fair use/fair dealing apply to copyright",
                      "2.3 Public domain and its relation to copyright.",
                      "2.4 Penalties for copyright infringement",
                      "2.5 Apply copyright to digital content and the internet",
                      "2.6 Use of copyrighted works in education.",
                      "2.7 Open Licenses - GNU - Free Documentation license, Free Art License",
                      "2.8 Why Free Licenses - Retain, Reuse, Revise, Remix, Redistribute"
                    ]
                  },
                  {
                    title: "Unit-3.0 : Creative Common Licenses",
                    points: [
                      "3.1 Alternatives to copyright as Creative Commons licenses.",
                      "3.2 Four components of creative common Licenses - Attribution, Share-Alike, Non - commercial, No Derivatives",
                      "3.3 Choosing a Creative common licenses Wiley's 5 Rs and Creative Common Licenses",
                      "3.4 Four Open CC Licenses and Their Strengths and Weaknesses - (a) CC BY (b) CC BY SA (c) CC BY NC (d) CC BY NC SA",
                      "3.5 Attribution Vs Citation - Creative Commons licensed work without giving attribution",
                      "3.6 Apply a CC License - choose the right Creative Commons license for work, apply a Creative Commons license to existing work, Creative Commons licenses be used for commercial purposes, modify a work licensed under Creative Commons, revoke a Creative Commons license, combine works with different Creative Commons licenses"
                    ]
                  }
                ]
              },

            ];

            semesters.sem1.lab = [
              {
                name: "Applied Physics",
                code: "P2600102B",
                units: [
                  {
                    title: "Practical/Lab Session Outcomes (LSOs)",
                    points: [
                      "LSO 1.1. Use Vernier caliper to measure the known and unknown dimensions of a given small object.",
                      "LSO 1.2. Estimate the mean absolute error up to two significant figures.",
                      "LSO 2.1. Use screw gauge to measure the diameter/thickness of a given object.",
                      "LSO 2.2. Estimate the mean absolute, relative and percentage errors up to three significant figures.",
                      "LSO 3.1. Use Spherometer to measure radius of curvature of given convex and concave mirror/surface.",
                      "LSO 3.2. Estimate errors in the measurement.",
                      "LSO 4.1. Measure the variation of Time period with Mass of a given spring Oscillator.",
                      "LSO 4.2. Determine the spring constant of a given spring.",
                      "LSO 5.1. Determine the time period of oscillation of given bar pendulum.",
                      "LSO 6.1. Determine the V-I characteristics of a given p-n junction device.",
                      "LSO 7.1. Determine the capacitance of a given parallel plate capacitor.",
                      "LSO 8.1. Determine the inverse square law relation between the distance of photocell and light source v/s intensity of light source.",
                      "LSO 9.1. Determine the Numerical Aperture (NA) of a given step index optical fiber.",
                      "LSO 10.1. Measure wavelength of a He-Ne/diode laser by using a plane diffraction grating.",
                      "LSO 11.1. Determine the V-I characteristics of given solar cell under various illumination condition.",
                      "LSO 12.1. Determine the V-I characteristics of a given p-n junction device under various temperature conditions.",
                      "LSO 13.1. Plot the graph between KE of Photo electron v/s frequency of incident light.",
                      "LSO 13.2. Determine the value of Plank's Constant (h) from the graph between KE v/s frequency of incident light.",
                      "LSO 13.3. Determine the variation of stopping potential w.r.t frequency of incident photon.",
                      "LSO 14.1. Determine the wavelength of different spectral lines of Hydrogen spectra.",
                      "LSO 15.1. Find the variation in magnitude and direction of emf induced in a coil due to change in magnetic flux."
                    ]
                  }
                ]
              },
              {
                name: "Fundamentals of Electrical and Electronic Engg.",
                code: "P2620103",
                units: [
                  {
                    title: "Practical/Lab Session Outcomes (LSOs)",
                    points: [
                      "LSO 1.1 Classify given electrical components in to Resistor, Inductor and Capacitor.",
                      "LSO 1.2 Plot the terminal voltage of a source starting from no load to different load (Current) conditions.",
                      "LSO 1.3 Measure current and voltage in a branch of the given electric circuit.",
                      "LSO 1.4 Verify the zero Phase difference between current and voltage waveform for a resistor connected to an AC source with respect to time (using CRO).",
                      "LSO 1.5 Calculate the value of color-coded resistor and verify it by measuring the value of resistor using digital multimeter.",
                      "LSO 1.6 Measure resistance inan series and parallel combination of resistors using digital multimeter.",
                      "LSO 1.7 Calculate the value of equivalent capacitance in series and parallel combination and verify by measuring the value of capacitance using digital multimeter.",
                      "LSO 2.1 Apply ohm's law to calculate voltage across each element in a given circuit.",
                      "LSO 2.2 Determine currents using KCL in a given electric circuit and verify it by conducting experiment.",
                      "LSO 2.3 Determine voltages using KVL in a given electric circuit and verify it by conducting experiment.",
                      "LSO 2.4 Verify the Phase difference (Lag)between current and voltage waveform for an inductor connected to an AC source with respect to time using CRO.",
                      "LSO 2.5 Verify the Phase difference (lead) between current and voltage waveform for a capacitor connected to an AC source with respect to time using CRO.",
                      "LSO 2.6 Perform experiment to plot BH curve in a magnetic material.",
                      "LSO 3.1. Perform experiment to demonstrate statically and dynamically induced emf.",
                      "LSO 3.2. Perform experiment to demonstrate self and mutual inductance.",
                      "LSO 3.3. Perform experiment to demonstrate Faraday's laws of electromagnetism.",
                      "LSO 3.4. Perform experiment to demonstrate Flemings right hand and left-hand rules.",
                      "LSO 3.5. Perform experiment to demonstrate Lenz's law.",
                      "LSO 4.1 Test the working of a given diode, and plot the labelled V-I characteristics.",
                      "LSO 4.2 Test the working of a given BJT and plot the labelled V-I characteristics.",
                      "LSO 4.3 Test the working of a given FET and plot the labelled V-I characteristics.",
                      "LSO 5.1 Build and verify the truth tables for all logic gates - NOT, OR, NOR, AND, NAND."
                    ]
                  }
                ]
              },
              {
                name: "Introduction to Artificial Intelligence",
                code: "P2600100",
                units: [
                  {
                    title: "Practical/Lab Session Outcomes (LSOs)",
                    points: [
                      "LSO 1.1 Use basic computer hardware and operating system utilities.",
                      "LSO 1.2 Use internet services and cloud-based applications safely.",
                      "LSO 2.1 Train visual machine learning concepts and map linear data patterns using zero-code tools.",
                      "LSO 3.1 Apply object detection bounding boxes and analyze errors in engineering image data.",
                      "LSO 4.1 Construct structured prompts and deploy zero-code generative design applications.",
                      "LSO 5.1 Use variables, data types, arithmetic operators, input/output statements, and type casting in Python programs.",
                      "LSO 5.2 Apply conditional statements and looping constructs to develop simple Python programs.",
                      "LSO 5.3 Develop menu-driven programs and use Python lists for storing and processing data."
                    ]
                  }
                ]
              },
              {
                name: "Engineering Workshop Practice",
                code: "P2620105",
                units: [
                  {
                    title: "Practical/Lab Session Outcomes (LSOs)",
                    points: [
                      "LSO 1.1. List various measuring tools and instruments.",
                      "LSO 1.2. Use suitable measuring unit and its conversion.",
                      "LSO 1.3. Select suitable measuring devices in a given situation.",
                      "LSO 1.4. Measure the given job using suitable instruments.",
                      "LSO 2.1 List various wood working tools with major specifications.",
                      "LSO 2.2 Select wood working tools as per given job.",
                      "LSO 2.3 Perform various wood working operations as per given drawing/sketch.",
                      "LSO 2.4 Follow the right procedure to prepare given type of joint.",
                      "LSO 3.1 Choose appropriate joining method in a given situation.",
                      "LSO 3.2 Select suitable welding method as per job requirement.",
                      "LSO 3.3 Carryout suitable welding procedure as per given sketch / drawing.",
                      "LSO 3.4 Perform brazing operation in a given situation.",
                      "LSO 4.1 Select various electrical and electronic components.",
                      "LSO 4.2 Identify various given electrical tools and measuring instruments.",
                      "LSO 4.3 Describe the steps to use the given type of meters.",
                      "LSO 4.4 Test the given components using Multimeter.",
                      "LSO 4.5 Use the suitable procedure of mounting electrical and electronic components on given PCB.",
                      "LSO 4.6 Identify terminals of a given transistor using suitable measuring instrument.",
                      "LSO 4.7 Perform soldering operation in a given situation.",
                      "LSO 5.1 Select the fire extinguisher to extinguish the given type of fire.",
                      "LSO 5.2 Describe the procedure to use the given firefighting equipment.",
                      "LSO 5.3 List the materials used for first Aid.",
                      "LSO 5.4 Describe the ways to maintain good housekeeping in the given situation."
                    ]
                  }
                ]
              },
              {
                name: "ICT Tools",
                code: "P2618107",
                units: [
                  {
                    title: "Practical/Lab Session Outcomes (LSOs)",
                    points: [
                      "LSO 1.1. Perform fundamental word processing operations to create a document.",
                      "LSO 2.1. Work with images/shapes in a document.",
                      "LSO 3.1. Organize data in tabular form in a document.",
                      "LSO 4.1. Perform Document proofing operations in a document.",
                      "LSO 5.1. Organize and print Document.",
                      "LSO 6.1. Create batch of documents with tailored variable information using mail merge.",
                      "LSO 7.1. Create a worksheet.",
                      "LSO 7.2. Format sheet/cell.",
                      "LSO 8.1. Perform fundamental calculation operations in a worksheet.",
                      "LSO 9.1. Filter the given data set.",
                      "LSO 9.2. Validate data based on criteria.",
                      "LSO 9.3. Sort the data in given order.",
                      "LSO 10.1. Create various types of charts to represent data in graphical form.",
                      "LSO 11.1. Print worksheet as per given layout.",
                      "LSO 12.1. Create electronic slide show containing text, image, shape, table, charts objects.",
                      "LSO 13.1. Run slide presentation in different modes.",
                      "LSO 13.2. Print slide presentation.",
                      "LSO 14.1. Apply given animation effects to the text and slides.",
                      "LSO 15.1. Add audio and video files in the presentation.",
                      "LSO 16.1. Configure internet and browser setting.",
                      "LSO 17.1. Use different internet services.",
                      "LSO 18.1. Work with Google Doc.",
                      "LSO 19.1. Work with google sheet.",
                      "LSO 20.1. Work with google slides.",
                      "LSO 21.1. Create google form."
                    ]
                  }
                ]
              }
            ];
            semesters.sem3.theory = [
              {
                name: "Data Structures and Algorithms",
                code: "T2418301",
                units: [
                  {
                    title: "Unit-1.0 Fundamentals of Algorithms and its Analysis",
                    points: [
                      "1.1. Data Types: System defines data types, User defined data types",
                      "1.2. Basic concept of data structure: Linear data structure, Non-linear data structure, Abstract data types",
                      "1.3. Algorithm and its analysis: Introduction of algorithm, Time Complexity of algorithm, Space Complexity of algorithm, Worst case analysis, Best case analysis, Average case analysis",
                      "1.4. Asymptotic Notation: Big-O Notation, Omega- Ω Notation, Theta Notation",
                      "1.5 Time complexity of recursive algorithm: Basic concept of recursion, Time complexity analysis using Master theorem"
                    ]
                  },
                  {
                    title: "Unit 2.0 Linear Data Structures",
                    points: [
                      "2.1 Array and String: Concept of arrays, Single and Multidimensional-arrays, Dynamic arrays, Array operations, Time and space complexity of array operations, Introduction to string, String manipulation",
                      "2.2 Linked List: Introduction to linked list, Singly Linked List, circular Linked List, Basic operation on Linked List: Traversing List, Insertion, deletion, and modification in Linked List",
                      "2.3 Stacks and Queue: Introduction to Stack, Stack operations, Implementation of Stack using simple array, dynamic array, and Linked List, Application of stack for evaluating Infix or Postfix Expression, balancing the symbols, function calls, Introduction to Queue, Queue operations, Implementation of Queue using simple array, dynamic array, and Linked List, Application of Queue"
                    ]
                  },
                  {
                    title: "Unit 3.0 Non-linear Data Structure",
                    points: [
                      "3.1 Tree: Basic terminologies: tree, Degree of a node, Degree of tree, level of node, Depth/height of tree, In-degree, Out-degree, Path, Ancestor & Descendent node; Types of trees: Binary Tree, Binary Search tree (BST), Balance tree, B-tree; Traversal of Binary tree: In order, pred order, post order traversal",
                      "3.2 Priority Queue and Heaps: Introduction to priority queue, Different operations in priority queue, Implementation of priority queue using BST; Basics of Min heap, Max heap, and Binary heap, Basic operation on Binary heap, Heapifying the elements of binary heap",
                      "3.3 Graphs: Basics terminologies: Vertex and edge of graph, weighted and unweighted Graph, directed and undirected graph, Degree, in-degree and out-degree of a node (vertex), Articulation point; Graph representation: Adjacency Matrix, Adjacency List, Adjacency Set; Graph Traversal: BFS, DFS; Shortest Path in unweighted, weighted, and negative edge graph, Shortest Path algorithm in weighted graph [Dijkstra's], Shortest Path algorithm in negative edge graph [Bellman-Ford Algorithm], Shortest Path algorithm in weighted directed graph [Floyd-Warshall algorithm]; Spanning tree in graph, Minimum Spanning tree algorithm: Prim's algorithm, Kruskal's algorithm"
                    ]
                  },
                  {
                    title: "Unit 4.0 Sorting and Searching Techniques",
                    points: [
                      "4.1 Sorting techniques: bubble sort, selection sort, insertion sort, quicksort, merge sort",
                      "4.2 Searching techniques: Linear search, Binary search",
                      "4.3 Hash Table: Introduction to Hash Table, Hash Function, Hash Collision resolution Techniques: Direct chaining, Open addressing"
                    ]
                  },
                  {
                    title: "Unit 5.0 Algorithm Design Techniques",
                    points: [
                      "5.1 Element of Greedy algorithm: Greedy choice property, Optimal substructure, Huffman coding algorithm",
                      "5.2 Divide and Conquer Techniques: Divide and Conquer Visualization",
                      "5.3 Dynamic Programming Approaches: Top-down and button-up Dynamic programming, Basics of Overlapping subproblem and Memorization techniques",
                      "5.4 Dynamic Programming Problem: Longest common subsequence, Knapsack problem, Matrix chain multiplication"
                    ]
                  }
                ]
              },
              {
                name: "Operating Systems",
                code: "T2418302",
                units: [
                  {
                    title: "Unit-1.0: Operating System Concepts",
                    points: [
                      "1.1 Operating System - Concept, Components of OS, System Software",
                      "1.2 Functions of O.S: Program Management, Resource management, File Management, Device Management, Security and protection.",
                      "1.3 Views of OS: User view, System View",
                      "1.4 Types of Operating Systems and their characteristics: Batch operating system, Multi Programming, Time Shared OS, Multiprocessing OS, Distributed OS, Real-time systems, Mobile OS.",
                      "1.5 Services of Operating System.",
                      "1.6 System Calls- Concept, types of system calls"
                    ]
                  },
                  {
                    title: "Unit-2.0: Process Management",
                    points: [
                      "2.1 Process-: process states, Process Control Block (PCB).",
                      "2.2 Process Scheduling- Scheduling Queues, Schedulers, Context switch.",
                      "2.3 Inter-process communication (IPC): Introduction, shared memory system & message passing system.",
                      "2.4 Threads - Benefits, users and kernel threads, Multithreading Models - Many to One, One to One, Many to Many."
                    ]
                  },
                  {
                    title: "Unit-3.0: CPU Scheduling and Algorithm",
                    points: [
                      "3.1 Scheduling types - scheduling Objectives, CPU and I/O burst cycles, Pre-emptive, Non- Pre-emptive Scheduling, Scheduling criteria.",
                      "3.2 Types of Scheduling algorithms - First come first served (FCFS), Shortest Job First (SJF), Shortest Remaining Time First (SRTF), Round Robin (RR), Priority scheduling, multilevel queue scheduling.",
                      "3.3 Deadlock - System Models, Necessary Conditions leading to Deadlocks, Deadlock Handling - Preventions, avoidance."
                    ]
                  },
                  {
                    title: "Unit- 4.0: Memory Management",
                    points: [
                      "4.1 Basic Memory Management - Partitioning, Fixed and Variable, Free Space management Techniques - Bitmap, Linked List.",
                      "4.2 Virtual Memory - Introduction to Paging, Segmentation, Fragmentation, and Page fault.",
                      "4.3 Page Replacement Algorithms: FIFO, LRU, Optimal."
                    ]
                  },
                  {
                    title: "Unit-5.0: File Management",
                    points: [
                      "5.1 File Concepts, Attributes, Operations, types and File System Structure.",
                      "5.2 Access Methods - Sequential, Direct, Swapping, File Allocation Methods- Contiguous, Linked, Indexed.",
                      "5.3 Directory structure- Single level, two levels, tree-structured directory, Disk Organization and disk Structure- Physical structure, Logical structure."
                    ]
                  }
                ]
              },
              {
                name: "Discrete Mathematics",
                code: "T2418303",
                units: [
                  {
                    title: "Unit-1.0 Logic and Proof Techniques",
                    points: [
                      "1.1 Propositional logic: Connectives and Truth Tables, Tautologies and Contradictions, Logical Equivalences.",
                      "1.2 Predicate logic: Quantifiers, Nested Quantifiers, Inference rules for predicate logic.",
                      "1.3 Mathematical proofs: Basic proof techniques: Direct proofs, Proof by contrapositive, proof by contradiction and Proof by mathematical induction"
                    ]
                  },
                  {
                    title: "Unit-2.0 Set Theory and Relation",
                    points: [
                      "2.1 Set and subsets.",
                      "2.2 Operations on sets.",
                      "2.3 Venn diagrams and De Morgan's law.",
                      "2.4 Relations and their properties.",
                      "2.5 Equivalence relation."
                    ]
                  },
                  {
                    title: "Unit-3.0 Combinatorics",
                    points: [
                      "3.1 Basics counting principles.",
                      "3.2 Permutations and Combinations.",
                      "3.3 Pigeonhole principle (without proof and its application).",
                      "3.4 Binomial theorem.",
                      "3.5 Generating functions."
                    ]
                  },
                  {
                    title: "Unit- 4.0 Graph Theory",
                    points: [
                      "4.1 Basic concepts and definition.",
                      "4.2 Types of Graph and degree of vertex.",
                      "4.3 Sub graph and Isomorphic Graphs.",
                      "4.4 Walks, Paths, Cycle.",
                      "4.5 Eulerian Graph (without proof) and its application.",
                      "4.6 Connectivity and Components"
                    ]
                  },
                  {
                    title: "Unit-5.0 Introduction to Fuzzy Set Theory",
                    points: [
                      "5.1 Basics of Fuzzy set theory.",
                      "5.2 Membership functions and degrees of membership.",
                      "5.3 Fuzzy set theoretic operations.",
                      "5.4 Fuzzy propositions and truth values."
                    ]
                  }
                ]
              },
              {
                name: "Digital Electronics and Microprocessors",
                code: "T2418304",
                units: [
                  {
                    title: "Unit-1.0 Number Systems, Boolean Algebra and Logic Gates",
                    points: [
                      "1.1 Different number systems: Binary, Octal, Decimal, Hexadecimal; Conversion from one number system to another number systems.",
                      "1.2 Arithmetic operation of Binary, Octal, Hexadecimal number systems.",
                      "1.3 Complements: 1's and 2's complement.",
                      "1.4 Data Representation: Representation of negative number in 1's and 2's complement, Subtraction using 1's and 2's complement",
                      "1.5 Boolean Algebra: Rules and laws of Boolean Algebra, De-Morgan's Theorem",
                      "1.6 Standard Boolean Representation: Sum of Product (SOP), Product of Sum (POS)",
                      "1.7 Minimization: Karnaugh's Map (K-map) up to three variables, Simplification of Boolean expressions using Boolean laws and K-map.",
                      "1.8 Logic Gates and applications: AND, OR, NOT, Buffer, NAND, NOR, XOR, XNOR (Symbol, Truth table, Logic expression and its applications)",
                      "1.9 Implementation of Boolean expressions using basic gates"
                    ]
                  },
                  {
                    title: "Unit-2.0 Combinational and Sequential Logic Circuits",
                    points: [
                      "2.1 Arithmetic Circuits: Half Adder and Full Adder, Half Subtractor and Full Subtractor",
                      "2.2 Multiplexer: 2 to 1 MUX, 4 to 1 MUX, Applications",
                      "2.3 De-multiplexer: 1 to 2 DEMUX, 1 to 4 DEMUX, Applications",
                      "2.4 Encoder and Decoder",
                      "2.5 Flip-Flops: SR, JK, T, D, and JK, Master Slave JK flip-flop",
                      "2.6 Shift Registers: Serial In Serial Out, Serial In Parallel Out, Parallel In Serial Out, Parallel In Parallel Out",
                      "2.7 Counters: Modulus of counter, Asynchronous Counter: Ripple up/down counter, Synchronous Counter: Ring Counter"
                    ]
                  },
                  {
                    title: "Unit-3.0 Converters and Memory Devices",
                    points: [
                      "3.1 Data Converters: Op-Amp: Introduction (Inverting and Non inverting), Digital to analog and Analog to digital converter: Uses",
                      "3.2 Random Access Memory: Introduction and its types",
                      "3.3 Read Only Memory: Introduction and its types"
                    ]
                  },
                  {
                    title: "Unit-4.0 Basics, Instruction Set and Programming of 8085 Microprocessor",
                    points: [
                      "4.1 Basics of Microprocessor: Evolution of Microprocessors, Architecture and Pin diagram of 8085, Timing Diagram and Memory Organization, Interrupts",
                      "4.2 Instruction Set: Data Transfer Instructions, Control instructions, Arithmetic instructions",
                      "4.3 Logical instructions, Branching instructions",
                      "4.4 Different types of Addressing Modes: Immediate Addressing Mode, Register Addressing Mode, Direct Addressing Mode, Indirect Addressing Mode, Indexed Addressing Mode; Assembly Language Programming"
                    ]
                  },
                  {
                    title: "Unit-5.0 Interfacing with 8085 Microprocessor",
                    points: [
                      "5.1 Programmable Peripheral Interface (PPI)- Intel 8255 (Generation of I/O Ports)",
                      "5.2 Programmable Interval timers (Intel 8253/8254)",
                      "5.3 Overview of Memory chips and their interfaces",
                      "5.4 Overview of other interfacing chips (Name and Application(s) only)"
                    ]
                  }
                ]
              },
              {
                name: "Programming in Python",
                code: "T2418305",
                units: [
                  {
                    title: "Unit 1: Fundamentals of Python Programming Syntax",
                    points: [
                      "1.1 Introduction to Python Character Set, Python Tokens, Variables, Lvalue and Rvalue Concepts, and the Use of Comments.",
                      "1.2 Overview of Data Types: Number Types: Integer, Floating Point, Complex; Boolean Type; Sequence Types: String, List, Tuple; None Type; Mapping Type: Dictionary; Distinction between Mutable and Immutable Data Types",
                      "1.3 Understanding Operators: Arithmetic Operators, Relational Operators, Logical Operators, Assignment Operator, Augmented Assignment Operators, Expressions and Statements, Type Conversion and Input/Output Mechanisms, Precedence of Operators, Expression Evaluation"
                    ]
                  },
                  {
                    title: "Unit-2.0 Conditional and Iterative statements",
                    points: [
                      "2.1 Conditional statements: simple if statement, if- else statement, if-elif-else statement",
                      "2.2 Iterative statements: while loop, for loop, range function, break and continue statements, nested loops"
                    ]
                  },
                  {
                    title: "Unit-3.0 String, List, Tuples, set and Dictionary",
                    points: [
                      "3.1 String: Indexing, string operations (concatenation, repetition, membership & slicing), traversing a string using loops, built-in functions.",
                      "3.2 Lists: Introduction, Indexing in list, list operations: concatenation, repetition, membership & slicing, traversing a list, built-in list functions, linear search on list of numbers and counting the frequency of elements in a list",
                      "3.3 Tuples: Creating, initializing, accessing elements, tuple assignment, performing operations on tuples, tuple methods and built-in functions, nested tuples",
                      "3.4 Set: Creating set, traversing, adding, removing data in set, performing set operations like join, Union intersection, difference",
                      "3.5 Dictionary: accessing items in a dictionary using keys, mutability of dictionary: adding a new item, modifying an existing item, built-in dictionary functions."
                    ]
                  },
                  {
                    title: "Unit-4.0 Python Functions, Modules and packages",
                    points: [
                      "4.1 Functions: types of function (built-in functions, functions defined in module, user defined functions), creating user defined function, arguments and parameters, default parameters, positional parameters, Lambda functions, returning value, scope of a variable: global scope, local scope",
                      "4.2 Modules and Packages: Importing module using 'import', Regular Expressions, Exception Handling, PyPI Python Package Index, Pip Python package manager, Importing Libraries and Functions"
                    ]
                  },
                  {
                    title: "Unit-5.0 Numpy",
                    points: [
                      "5.1 Introduction to NumPy",
                      "5.2 Installation of NumPy",
                      "5.3 NumPy Arrays: Understanding the NumPy array, The fundamental data structure in NumPy, Creation of arrays using different methods: np.array(), np.zeros(), np.ones(), etc., Exploring array attributes like shape, size, and dimensions.",
                      "5.4 Array Indexing and Slicing: Accessing elements and subarrays in NumPy arrays using indexing and slicing, Demonstration of the difference between one-dimensional and multi-dimensional array indexing.",
                      "5.5 Array Operations: Performing element-wise operations on NumPy arrays, Exploring universal functions (ufuncs) for mathematical operations.",
                      "5.6 Linear Algebra with NumPy: Introduction to linear algebra operations using NumPy, Matrix multiplication, determinant, inverse, and solving linear equations.",
                      "5.7 File input and output with Numpy",
                      "5.8 Broadcasting in Numpy"
                    ]
                  },
                  {
                    title: "Unit 6: Exception and File Handling in Python",
                    points: [
                      "6.1 Exception Handling: syntax errors, exceptions, need of exception handling, user-defined exceptions, raising exceptions, handling exceptions, catching exceptions, Try - except - else clause, Try finally clause, recovering and continuing with finally, built-in exception classes.",
                      "6.2 File Handling: text file and binary file, file types, open and close files, reading and writing text files, reading and writing binary files, file access modes"
                    ]
                  }
                ]
              }
            ];

            return semesters;
          })()
        },


        {
          id: "electrical",
          title: "Electrical Engineering",
          icon: "fas fa-bolt",
          semesters: syllabusEmptySemesters(8)
        },
        {
          id: "mechanical",
          title: "Mechanical Engineering",
          icon: "fas fa-cogs",
          semesters: syllabusEmptySemesters(8)
        },
        {
          id: "civil",
          title: "Civil Engineering",
          icon: "fas fa-drafting-compass",
          semesters: syllabusEmptySemesters(8)
        },
        {
          id: "ece",
          title: "Electronics Engineering",
          icon: "fas fa-microchip",
          semesters: syllabusEmptySemesters(8)
        }
      ]
    },
    {
      id: "competitive",
      title: "Competitive Exams",
      icon: "fas fa-trophy",
      branches: []
    }
  ]
};
