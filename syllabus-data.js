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
              { name: "Digital Electronics Lab", code: "G-2018013" },
              { name: "OOP using JAVA Lab", code: "G-2018013" },
              { name: "Operating System Lab", code: "G-2018013" }
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
