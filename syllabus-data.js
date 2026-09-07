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
                name: "Applied Physics-B",
                code: "2600102B",
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
                name: "Data Structures and Algorithm",
                code: "2418301",
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
                name: "Operating System",
                code: "2418302",
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
                name: "Discrete Structures or Discrete Mathematics",
                code: "2418303",
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
                name: "Digital Electronics and Microprocessor",
                code: "2418304",
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
                name: "Python Programming ",
                code: "2418305",
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
              },


              {
                name: "Summer Internship - I",
                code: "2418306",
                units: [
                  {
                    title: "Internship after 2nd Semester for all branches",
                    points: [
                      "Diploma students are required to give exposure of their own diploma programme related industrialhardware, software and practices,",
                    ]
                  },
                ]
              },
            ];

            // Diploma CSE sem 5

            semesters.sem5.theory = [
              {
                name: "Data Communication and Computer Network",
                code: "2418501",
                units: [
                  {
                    title: "Unit-1.0 Data Communications and Transmission Media",
                    points: [
                      "1.1 Process of data communication and its components: Transmitter, Receiver, Medium, Message, Protocol.",
                      "1.2 Protocol, Standard, Standard organization.",
                      "1.3 Bandwidth, Data Transmission Rate, Baud Rate and Bits per second",
                      "1.4 Models of Communication (Simplex, Half Duplex, Full Duplex)",
                      "1.5 Analog Signal and Digital Signal Transmission: Analog to Digital, Digital to Analog Conversion",
                      "1.6 Fundamentals of Computer Network: Definition and Need of Computer Network, Application, Network Benefits.",
                      "1.7 Classification of Network: LAN and WAN, Network Architecture: Peer to peer, Client Server Network",
                      "1.8 Communication Media: Guided Transmission Media, Twisted-Pair Cable, Coaxial Cable, Fiber-optic Cable",
                      "1.9 Unguided Transmission Media: Radio Waves, Microwaves, Infrared, Satellite",
                      "1.10 Multiplexing: Frequency-Division Multiplexing, Time-Division Multiplexing."
                    ]
                  },
                  {
                    title: "Unit 2.0 Data Link Layer",
                    points: [
                      "2.1 Introduction: Types of Errors, Redundancy, Detection Versus Correction, Coding",
                      "2.2 Block coding: Error Detection, Error Correction, Hamming Distance, Minimum Hamming Distance",
                      "2.3 Cyclic codes: Cyclic Redundancy Check, Polynomials, Cyclic Code Analysis, CHECKSUM",
                      "2.4 Framing: Fixed-Size Framing, Variable-Size Framing",
                      "2.5 Flow and error control: Flow Control, Error Control",
                      "2.6 Noiseless channels: Simplest Protocol, Stop-and-Wait Protocol",
                      "2.7 Noisy channels: Stop-and-Wait Automatic Repeat Request, Go-Back-N Automatic Repeat Request, Selective Repeat Automatic Repeat Request, Piggybacking.",
                      "2.8 Point-to-point protocol",
                      "2.9 Random access: ALOHA, Carrier Sense Multiple Access (CSMA), Carrier Sense Multiple Access with Collision Detection (CSMACD), Carrier Sense Multiple Access with Collision Avoidance (CSMACA)",
                      "2.10 Channelization: Frequency-Division Multiple Access (FDMA), Time-Division Multiple Access (TDMA), Code-Division Multiple Access (CDMA)",
                      "2.11 Ethernet: Bridged Ethernet, Switched Ethernet, Fast Ethernet, Gigabit Ethernet",
                      "2.12 Connecting devices: HUBs, Two-Layer Switches, Routers, Three-Layer Switches, Gateway"
                    ]
                  },
                  {
                    title: "Unit 3.0 Network Layer",
                    points: [
                      "3.1 IPv4 addresses: Address Space, Notations, Classful Addressing, special case IP addresses, subnet, supernet, Classless Addressing, Network Address Translation (NAT), Datagram Fragmentation, Checksum, Options",
                      "3.2 Introduction to IPV6: Advantages, Tunneling",
                      "3.3 Address mapping: Logical to Physical Address: ARP, Mapping Physical to Logical Address: RARP.",
                      "3.4 Router Forwarding table, and Routing: Function of unicast and multicast routing protocols"
                    ]
                  },
                  {
                    title: "Unit 4.0 Transport Layer",
                    points: [
                      "4.1 Process to Process Delivery: Client/Server Paradigm, Multiplexing and Demultiplexing, Connectionless Versus Connection-Oriented Service, Reliable Versus Unreliable",
                      "4.2 User datagram protocol (UDP): Well-Known Ports for UDP, User Datagram, Checksum, UDP Operation, Use of UDP",
                      "4.3 TCP: TCP Services Features, Segment, A TCP Connection, Flow Control, Error Control",
                      "4.4 Congestion Control: Open-Loop Congestion Control, Closed-Loop Congestion Control"
                    ]
                  },
                  {
                    title: "Unit 5.0 Application Layer",
                    points: [
                      "5.1 Distribution of name space: Hierarchy of Name Servers, Root Server, Primary and Secondary Servers",
                      "5.2 DNS in the internet: Generic Domains, Country Domains, Inverse Domain",
                      "5.3 Resolution: Resolver, Mapping Names to Addresses, Mapping Address to Names, Recursive Resolution, Iterative Resolution, Caching",
                      "5.4 WWW: ARCHITECTURE, Client (Browser), Server, Uniform Resource Locator, Cookies",
                      "5.5 HTTP: HTTP Transaction, Persistent Versus Nonpersistent Connection, Proxy Server",
                      "5.6 Dynamic Host Configuration Protocol (DHCP)",
                      "5.7 Remote logging: TELNET",
                      "5.8 Electronic mail: ELECTRONIC MAIL, Architecture, User Agent, Message Transfer Agent: SMTP, Message Access Agent: POP and IMAP, Web-Based Mail",
                      "5.9 File transfer: File Transfer Protocol (FTP)"
                    ]
                  }
                ]
              },
              {
                name: "Software Engineering",
                code: "2418502",
                units: [
                  {
                    title: "Unit 1.0 - Software Development Process",
                    points: [
                      "1.1 Type of software, need for software engineering, software engineering as layered approach, its characteristics.",
                      "1.2 Software development framework.",
                      "1.3 Software process framework, process models: perspective process models, specialized process models.",
                      "1.4 Agile software development: agile process and its importance, extreme programming, adaptive software development, scrum, dynamics system development method (DSDM), crystal",
                      "1.5 Selection criteria for software process model."
                    ]
                  },
                  {
                    title: "Unit 2.0 Software Requirement Engineering",
                    points: [
                      "2.1 Software engineering practices and its importance, core Principles.",
                      "2.2 Communication practices, planning practices, modeling Practices. Construction practices, software deployment (Statement and meaning of each Principles for each practice).",
                      "2.3 Requirement Engineering: Requirement gathering and Analysis, type of requirement (functional, product, organizational, external requirements), Electing requirements models, developing use cases building requirements models, requirement negotiation, validation.",
                      "2.4 Software Requirements Specification (SRS): need of SRS, Format, and its characteristic"
                    ]
                  },
                  {
                    title: "Unit 3.0 Software Modeling and Design",
                    points: [
                      "3.1 Translating requirement model into design model: data Modelling.",
                      "3.2 Analysis Modelling: Elements of Analysis model.",
                      "3.3 Design modelling: Fundamental design concept (Abstraction, Information hiding, structure, modularity, concurrency, verification, Aesthetics)",
                      "3.4 Design notations: Data Flow Diagram (DFD), Structure Flowcharts, Decision Tables."
                    ]
                  },
                  {
                    title: "Unit-4.0 Software Project Estimation",
                    points: [
                      "4.1 The management spectrum-4P's",
                      "4.2 Metrics for size Estimation: Line of Code (LoC), Function Points (FP).",
                      "4.3 Project cost Estimation Approaches: Overview of Heuristic, Analytical, and Empirical Estimation.",
                      "4.4 COCOMO (Constructive Cost Model), COCOMO II.",
                      "4.5 Risk Management: Risk Identification, Risk Assessment, Risk Containment, RMMM Strategy."
                    ]
                  },
                  {
                    title: "Unit 5.0 Software Testing and Quality Assurance",
                    points: [
                      "5.1 Testing-Meaning and purpose, testing methods- Black-box and White box, level of testing-Unit testing.",
                      "5.2 Test Documentation- Test case Template, test plan, Introduction to defect Report, test summary report.",
                      "5.3 Test planning and management: Test Strategy, Test Plan, Test Estimation, Test Case Design, Test Data Preparation, Test Progress Monitoring and Reporting.",
                      "5.4 Software Quality Management vs. Software Quality Assurance. Phases of Software Quality Assurance: Planning, Activities Audit, and review.",
                      "5.5 Quality Evaluation standards: Six sigma, ISO for software, CMMI: Levels, process areas."
                    ]
                  },
                  {
                    title: "Unit 6.0 Software Project Management",
                    points: [
                      "6.1 Overview of project management activities, tasks, resources, Project Scheduling: Basic principle work breakdown structure, activity network and critical path method, scheduling Techniques (CPM, PERT).",
                      "6.2 Project Tracking: Timeline Charts, Earned value analysis, Gantt charts."
                    ]
                  }
                ]
              },
              {
                name: "Programme Electives | Data Science and Analytics",
                code: "2418503A",
                units: [
                  {
                    title: "Unit-1.0 Data Science: Concepts and Techniques",
                    points: [
                      "1.1 Concepts and Importance",
                      "1.2 Data Types and Data Structures in Data Science",
                      "1.3 Data Collection and Data Sources in Data Science",
                      "1.4 Exploratory Data Analysis (EDA)",
                      "1.5 Statistical Methods for Data Analysis in Data Science: Descriptive Analysis, Exploratory Analysis, Inferential Analysis, Predictive Analysis, Linear Regression, Logistic Regression",
                      "1.6 Probability and Probability Distributions in Data Science",
                      "1.7 Hypothesis Testing",
                      "1.8 Forecasting Techniques: Delphi, Input Output Analysis, Extrapolation, Time Series analysis",
                      "1.9 Data Ethics and Privacy in Data Science"
                    ]
                  },
                  {
                    title: "Unit-2.0 Data Warehousing and On-Line Analytical Processing",
                    points: [
                      "2.1 Definition of Data Warehouse",
                      "2.2 Need for separate data warehouse",
                      "2.3 Data Warehouse Models: Enterprise Warehouse, Data Mart, Virtual Warehouse",
                      "2.4 Difference between Operational Database System and Data Warehouse",
                      "2.5 Conceptual Modeling of Data Warehouse",
                      "2.6 Data warehouse architecture",
                      "2.7 Benefits of data warehousing",
                      "2.8 Introduction to Online Analytical Processing (OLAP): 2.8.1 OLAP applications, 2.8.2 Features of OLAP, 2.8.3 Benefits of OLAP, 2.8.4 Strengths of OLAP, 2.8.5 Comparison between OLTP and OLAP, 2.8.6 Differences between OLAP and data mining",
                      "2.9 OLAP Operations (Roll-up, Drill down, Slice and dice)",
                      "2.10 Data Cube Computation",
                      "2.11 Data warehouses versus OLTP: similarities and distinction"
                    ]
                  },
                  {
                    title: "Unit 3.0 Introduction to Data Mining",
                    points: [
                      "3.1 Introduction",
                      "3.2 Data Mining as Evolution of Information Technology",
                      "3.3 Types of data for mining: Database Data, Data Warehouses, Transactional Data, Other types of data",
                      "3.4 Need of Data Mining",
                      "3.5 Data Mining Application",
                      "3.6 Data Preprocessing: 3.6.1 Need for Data Preprocessing, 3.6.2 Major Tasks in Data Preprocessing, 3.6.3 Data Preprocessing Methods (Data cleaning, Data integration, Data transformation, Data reduction, Data Discretization)",
                      "3.7 Data Mining Techniques: Predictive modeling Database segmentation, Link analysis, Deviation detection",
                      "3.8 Integration of a Data Mining System with Database",
                      "3.9 Major Issues in Data Mining"
                    ]
                  },
                  {
                    title: "Unit 4.0 Classification Methods",
                    points: [
                      "4.1 Introduction to Classification",
                      "4.2 Approach to solve classification problems",
                      "4.3 Evaluation of Classifiers",
                      "4.4 Classification Metrics",
                      "4.5 Types of Classification: 4.5.1 Posteriori Classification, 4.5.2 Priori Classification, 4.5.3 Binary Classification, 4.5.4 Multi-class Classification",
                      "4.6 Classification Techniques: 4.6.1 Bayesian Classification, 4.6.2 Support Vector Machine, 4.6.3 Decision Tree, 4.6.4 Dimensionality Reduction",
                      "4.7 Pattern Based Classification",
                      "4.8 Over-fitting and Under-fitting",
                      "4.9 Lazy Learners",
                      "4.10 Applications of Classification"
                    ]
                  },
                  {
                    title: "Unit 5.0: Cluster Analysis and Web Mining",
                    points: [
                      "5.1 Introduction to Cluster Analysis",
                      "5.2 Requirements for cluster analysis",
                      "5.3 Applications of Cluster Analysis",
                      "5.4 Overview of basic clustering methods",
                      "5.5 Major Clustering Methods: 5.5.1 Partitioning Based (k-Means Clustering- A Centroid-Based Technique), 5.5.2 Hierarchical Based (Agglomerative, Divisive), 5.5.3 Density Based (DBSCAN: Density-Based Clustering Based on Connected)",
                      "5.6 Agglomerative versus Divisive Hierarchical Clustering",
                      "5.7 Distance Measures in Algorithmic Methods",
                      "5.8 Applications of Cluster Analysis",
                      "5.9 Identifying and handling of outliers",
                      "5.10 Outlier Detection Techniques",
                      "5.11 WEB MINING: Basic concepts",
                      "5.12 PAGE RANK Algorithm",
                      "5.13 HITS Algorithm"
                    ]
                  }
                ]
              },
              {
                name: "Programme Electives | Advanced JAVA Programming",
                code: "2418503B",
                units: [
                  {
                    title: "Unit-1.0 JAVA Applet",
                    points: [
                      "1.1 Applet: Local and remote applets, Difference between applet and application, Applet life cycle, Developing executing applet code",
                      "1.2 Web page design: Applet tag, Adding applet to HTML file, Passing parameter to applet, Various methods and component classes to develop basic applet, Running applet.",
                      "1.3 Applet graphics: Drawing shapes and text, Handling graphics in applets, Animation with applets."
                    ]
                  },
                  {
                    title: "Unit-2.0 Abstract Window Toolkit (AWT)",
                    points: [
                      "2.1 Abstract Window Toolkit: Class hierarchy, Window fundamentals",
                      "2.2 Frame Window: Creating a frame window in the applet, Canvas, Creating a window program",
                      "2.3 Graphics-AWT Controls: Labels, TextField, Pushbuttons",
                      "2.4 Layout Managers: Flow Layout, Border Layout, Grid Layout, Card Layout",
                      "2.5 Developing Graphical User Interface using Swing: JApplet, JLabel, JTextField, JButton, JCheckBox, JRadioButton, JComboBox, Menus",
                      "2.6 Event Classes: MouseEvent Class, ActionEvent Class, WindowEvent Class",
                      "2.7 Event Listener Interface: MouseListener, WindowListener and ActionListener, KeyListener"
                    ]
                  },
                  {
                    title: "Unit-3.0 Java Data Base Connectivity (JDBC)",
                    points: [
                      "3.1 JDBC Architecture: Two-Tier Database Design, Three-Tier Database Design",
                      "3.2 The JDBC API: The API components, Database operation: creating tables, CRUD (Create, Read, Update, and Delete) operations using SQL.",
                      "3.3 Establishing a JDBC Connection: JDBC Data Types, JDBC drivers, Connection management and resource cleanup, JDBC- Statements, PreparedStatement and CallableStatement, JDBC- ResultSet, JDBC- Transactions, JDBC- Exception Handling.",
                      "3.4 JDBC-Advantages and Disadvantages"
                    ]
                  },
                  {
                    title: "Unit-4.0 Servlets Programming",
                    points: [
                      "4.1 Servlet API: javax.servlet Package, The javax.servlet.HTTP Package",
                      "4.2 The life cycle of a servlet",
                      "4.3 The Java Servlet Development Kit",
                      "4.4 The Simple Servlet: Create and compile servlet source code, Start a web browser and request the servlet, Example of echo servlet, Deployment in Tomcat server, Handling HTTP Requests and Responses"
                    ]
                  },
                  {
                    title: "Unit-5.0 Java Server Pages (JSP)",
                    points: [
                      "5.1 Relation of Applets and Servlets with JSP",
                      "5.2 Lifecycle of JSP",
                      "5.3 JSP Scripting Elements",
                      "5.4 JSP Implicit Objects: Implicit objects- example of out and request, Response implicit object, PageContext, page and exception implicit object",
                      "5.5 JSP Expressions",
                      "5.6 JSP Action Tags",
                      "5.7 JSP Declarations",
                      "5.8 JSP-Standard Tag Library (JSTL)",
                      "5.9 Difference between JSP and Servlet",
                      "5.10 Simple JSP program to fetch database records"
                    ]
                  }
                ]
              },
              {
                name: "Open Elective | Introduction to Electric Vehicle",
                code: "2400504G",
                units: [
                  {
                    title: "Unit-1.0 Introduction to Electric Vehicle",
                    points: [
                      "1.1 Review of Conventional Vehicle Engine System, Electric Vehicle (EV), The necessity of Electric Vehicle",
                      "1.2 Types of Electric Vehicles: Plug-in hybrid, Battery electric vehicle, Hybrid electric vehicle, Fuel Cell Electric Vehicle",
                      "1.3 Advantages of Electric Vehicles",
                      "1.4 Electric Vehicle Components: Motor, Motor Controller, Battery, Battery Management System, and Charging System."
                    ]
                  },
                  {
                    title: "Unit-2.0 Electric Motors used in EVs",
                    points: [
                      "2.1 Electric Motors for EV applications: General Characteristics of motors",
                      "2.2 Types of Motors: DC, Brushless DC, Induction, Permanent Magnet Synchronous Motors, Switched Reluctance Motors",
                      "2.3 Rating of Motors, Selection Criteria, Physical Location",
                      "2.4 Connection of Motors: Mechanical Connections and Electrical Connections"
                    ]
                  },
                  {
                    title: "Unit-3.0 EV Batteries and Energy Storages",
                    points: [
                      "3.1 Types of Batteries: Lead Acid, Nickel Based, Lithium Based",
                      "3.2 Battery Parameters, Charging (AC) and Discharging (DC) Process",
                      "3.3 Lithium Ion Batteries, Fuel Cells, Fuel Cell Storage System",
                      "3.4 Battery Condition Monitoring, Battery Management System (BMS), Need of BMS",
                      "3.5 Block Diagram of BMS, Battery Disposal and Recycling"
                    ]
                  },
                  {
                    title: "Unit- 4.0 EV Charging Systems",
                    points: [
                      "4.1 Power electronics in EV, Power electronics components, Rectifiers",
                      "4.2 DC to DC Converter, DC to AC Converter",
                      "4.3 Charging System, Types of charging Systems",
                      "4.4 Components of Charging Systems, Single line Diagram of Charging System"
                    ]
                  },
                  {
                    title: "Unit- 5.0 Regulatory Requirements and Policies for EV Industry",
                    points: [
                      "5.1 Rules and Regulations set by the Indian government for the designer/manufacturer of EVs.",
                      "5.2 Policies in India, Global Policies for E- Vehicles.",
                      "5.3 Carbon Footprint Issues"
                    ]
                  }
                ]
              },
              {
                name: "Entrepreneurship Development & Start-ups ",
                code: "2400505",
                units: [
                  {
                    title: "Unit-1.0 Introduction to Electric Vehicle",
                    points: [
                      "1.1Demonstrate traits of a successful intrapreneur/ entrepreneur/ start-up co-founder.",
                      "1.2Innovate products and services using creativity and innovation techniques.",
                      "1.3 Manage critical resources from support institutions.",
                      "1.4 Prepare sustainable small business plans. "
                    ]
                  },
                ]
              },
              {
                name: "Summer Internship - II",
                code: "2418305",
                units: [
                  {
                    title: "(After 4th Sem) / Industrial Training / Common for all programmes)",
                    points: [
                      "Diploma students are required to give exposure of their own diploma programme related industrialhardware, software and practices,",
                    ]
                  },
                ]
              },
            ];

            return semesters;
          })()
        },

        // Diploma Electrical

        {
          id: "Electrical",
          title: "Electrical Engineering",
          icon: "fas fa-bolt",
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
                name: "Applied Physics-B",
                code: "2600102B",
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
                name: "Basic Electrical Engineering",
                code: "2620104",
                units: [
                  {
                    title: "Unit-1.0 Basic Concepts of Electrical Engineering",
                    points: [
                      "1.1 Electrical Charge and flow of Charges",
                      "1.2 Current (D.C/A.C): Concept of Ideal & Practical current sources",
                      "1.3 Voltage (D.C/A.C): Concept of E.M.F., Potential difference, Terminal voltage, Concept of Ideal & Practical voltage sources",
                      "1.4 Resistor: Properties, Classification of resistors, Practical application of resistors, Commonly used resistance material, Effect of temperature on resistance, Series and parallel combination of resistances",
                      "1.5 Heating Effect, Magnetic effect, Chemical effect of electric current.",
                      "1.6 Electrical work, power and Energy"
                    ]
                  },
                  {
                    title: "Unit-2.0 Energy Storing Elements",
                    points: [
                      "2.1 Capacitors: Capacitance formation, Expression for capacitance",
                      "2.2 Capacitive reactance.",
                      "2.3 Energy stored in a Capacitor.",
                      "2.4 Voltage and Current equation for capacitor.",
                      "2.5 Series & Parallel combination of capacitors.",
                      "2.6 Effect of dielectric media on capacitance, Electric field strength, Electric flux density, Permittivity.",
                      "2.7 Charging and discharging of capacitors.",
                      "2.8 Initial and Final Conditions in a capacitor - rise of current and voltage (No derivation, numerical only)",
                      "2.9 Leading power factor behavior of a capacitor",
                      "2.10 A.C./D.C. capacitors and Applications.",
                      "2.11 Inductors: Self and mutual inductance, Inductive Reactance",
                      "2.12 Behavior of inductor to AC and DC sources",
                      "2.13 Energy stored in an inductor.",
                      "2.14 Voltage and current equations of inductor.",
                      "2.15 Initial and final conditions in an Inductor - rise of current and voltage (No derivation, numerical only).",
                      "2.16 Inductor types and their applications."
                    ]
                  },
                  {
                    title: "Unit-3.0 Basics of D.C & A.C Circuits",
                    points: [
                      "3.1 D.C Circuits: Ohm's Law",
                      "3.2 Internal resistance of source",
                      "3.3 Internal voltage drops, Terminal voltage.",
                      "3.4 Active & Passive elements.",
                      "3.5 Linear & Non-linear circuit.",
                      "3.6 Unilateral and Bilateral circuit element.",
                      "3.7 Node, Branch, Loop, Mesh",
                      "3.8 Kirchhoff's Current Law (KCL).",
                      "3.9 Kirchhoff's Voltage law (KVL).",
                      "3.10 A.C Circuits: Frequency, Time period, Amplitude, Angular Velocity, RMS Value, Average Value, Form factor, Peak factor, power factor.",
                      "3.11 Representation of AC quantities in rectangular and polar form and conversion.",
                      "3.12 Phasor representation of alternating quantities.",
                      "3.13 Phasor representation of sinusoidal quantities.",
                      "3.14 Voltage and current response in R-L and R-C circuit."
                    ]
                  },
                  {
                    title: "Unit-4.0 Magnetic Circuits",
                    points: [
                      "4.1 Terms related to magnetic circuit: Magnetic flux, Magnetomotive force, Magnetic field strength, Permeability, Reluctance, Magnetic leakage, leakage coefficient (Simple numerical on above)",
                      "4.2 Magnetic circuits: Uniform magnetic circuits, Series & parallel circuits",
                      "4.3 Magnetic Hysteresis, Hysteresis loop.",
                      "4.4 Magnetization (B-H) Curve and its Applications.",
                      "4.5 Comparison of Electric and Magnetic circuits"
                    ]
                  },
                  {
                    title: "Unit-5.0 Electromagnetism",
                    points: [
                      "5.1 Electromagnetic induction, Induced e.m.f and current.",
                      "5.2 Statically and dynamically induced emf.",
                      "5.3 Faraday's Laws of Electromagnetic Induction.",
                      "5.4 Lenz's Law, Fleming's R.H. rule; direction of induced E.M.F, Fleming's L.H. rule, Ampere's Law.",
                      "5.5 Self and mutual inductances.",
                      "5.6 Coefficient of mutual inductance (M), Co-efficient of coupling.",
                      "5.7 Interaction between two or more magnetic field."
                    ]
                  }
                ]
              },
              {
                name: "Engineering Drawing & Graphics",
                code: "2615105",
                units: [
                  {
                    title: "Unit-1.0 Basic Elements of Drawing",
                    points: [
                      "1.1 Methods to use different Drawing Instruments and supporting materials.",
                      "1.2 Different lines and conventions in engineering drawing.",
                      "1.3 Engineering scales and applications: Reduced, enlarged & full size (only Plain scale)",
                      "1.4 Dimensioning techniques: types and applications of chain, parallel and coordinate dimensioning as per SP-46.",
                      "1.5 Regular Geometrical figures, Tangency constructions.",
                      "1.6 Engineering Curves: only Ellipse and Parabola using concentric circle method, rectangular method and Eccentricity method when focus and directrix are given."
                    ]
                  },
                  {
                    title: "Unit-2.0 Orthographic Projections",
                    points: [
                      "2.1 Concept and applications of Orthographic, Perspective, Isometric and Oblique Projections.",
                      "2.2 Orthographic Projection: First and Third angle",
                      "2.3 Draw orthographic views of simple 3D entities containing lines, circles and arcs with axis/orientation parallel and/or perpendicular to the projection planes only. Problems should be restricted up to three views Front view/Elevation, Top view/Plan and Side views only using First Angle Method only.",
                      "2.4 Conversion of simple pictorial views into orthographic views. (Domain specific illustrative problems to be given by the teacher)"
                    ]
                  },
                  {
                    title: "Unit-3.0 Isometric Projection",
                    points: [
                      "3.1 Introduction to isometric projection.",
                      "3.2 Isometric scale and Natural Scale.",
                      "3.3 Isometric view and isometric projection.",
                      "3.4 Illustrative problems limited to Isometric projection of objects containing rectangular, circular, cylindrical shapes and slots on sloping and plane surfaces.",
                      "3.5 Conversion of orthographic views into isometric View/projection."
                    ]
                  },
                  {
                    title: "Unit-4.0 Free Hand Sketches of Engineering Elements",
                    points: [
                      "4.1 Materials for Sketching.",
                      "4.2 General Guidelines for Freehand Sketching.",
                      "4.3 Freehand sketching of straight lines, square, rectangle, circles and arcs.",
                      "4.4 Free hand sketches of orthographic views.",
                      "4.5 Free hand sketches of isometric views.",
                      "4.6 Freehand sketching of domain specific engineering elements/components (e.g. Bolt, Nut, Washer, Stud, Screw, simple machine parts, etc. in case of mechanical, production, automobile, electrical engineering)."
                    ]
                  },
                  {
                    title: "Unit-5.0 Basic Computer aided Drafting",
                    points: [
                      "5.1 Basics of AutoCAD or any other drafting software-interface, screen layout, starting commands from menus, command line.",
                      "5.2 Coordinate system, Angular measurements, Point specification.",
                      "5.3 Drawing aids - Grid, Snap, Ortho, Osnap, Units, Limits, Layers, Linetype.",
                      "5.4 Opening and Saving drawing files.",
                      "5.5 Creating User Defined Templates.",
                      "5.6 Methods of Selecting and deleting Objects.",
                      "5.7 Undo and Redo.",
                      "5.8 Creating basic drawings objects - lines, arc, circles, ellipses, polyline and polygons."
                    ]
                  },
                  {
                    title: "Unit-6.0 Advanced Computer aided Drafting",
                    points: [
                      "6.1 Modify commands - erase, copy, move, rotate, scale, stretch,",
                      "6.2 Array: concept and applications.",
                      "6.3 Controlling Drawing display",
                      "6.4 Text and Dimensioning",
                      "6.5 Layers: concept and application",
                      "6.6 Drawing orthographic views using drafting software with principles mentioned in Unit 2.",
                      "6.7 Drawing isometric views using drafting software with principles mentioned in Unit 3.",
                      "6.8 Printing and plotting of drawings."
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

            // Diploma Electrical Sem 3 

            semesters.sem3.theory = [
              {
                name: "Electrical Circuit and Networks",
                code: "2420301",
                units: [
                  {
                    title: "Unit-1.0 Basics of Electrical Circuits",
                    points: [
                      "1.1 Definition of: Linear and non-linear, Active and passive components, Unilateral and bilateral, Lumped and distributed parameters, Independent and dependent source",
                      "1.2 Concept of open circuit, closed circuit and short circuit, node, branch, mesh and loop",
                      "1.3 Star/Delta transformation of passive network",
                      "1.4 Source transformation",
                      "1.5 Kirchoff's Current Law (KCL) and Kirchoff's Voltage Law (KVL), Applications",
                      "1.6 Mesh Analysis and Nodal analysis of networks",
                      "1.7 Transient & steady state",
                      "1.8 Concept of initial and final conditions in switching circuits, Meaning of t=0, t=0+, and t = infinite. R, L and C at initial and final conditions"
                    ]
                  },
                  {
                    title: "Unit-2.0 Network Theorems:",
                    points: [
                      "2.1 Superposition theorem and its applications",
                      "2.2 Thevenin's theorem and its applications",
                      "2.3 Norton'stheorem and its applications",
                      "2.4 Reciprocity theorem and its applications",
                      "2.5 Maximum power transfer theorem",
                      "2.6 Application of theorems to solve DC networks"
                    ]
                  },
                  {
                    title: "Unit-3.0 Single Phase AC Circuits:",
                    points: [
                      "3.1 Generation of an alternating EMF",
                      "3.2 AC circuit quantities: Peak value, RMS and Average value of a Sinusoidal voltage waveform",
                      "3.3 Vector representation of an alternating quantity, addition, subtraction, multiplication and division, Conversion from rectangular to polar and vice versa and exponential form",
                      "3.4 Waveforms, phasor diagram and expression of voltage, current and power in pure: Resistance, Inductance, Capacitance",
                      "3.5 AC Series and parallel circuits, Phasor diagrams and impedance triangle",
                      "3.6 Active, reactive, apparent power with examples, Power factor, lagging, leading and unity power factor, effects of poor power factor, power triangle"
                    ]
                  },
                  {
                    title: "Unit-4.0 Resonance and Two Port Network:",
                    points: [
                      "4.1 Resonance and its importance in electrical circuit",
                      "4.2 Series & Parallel resonance: Resonant frequency, Quality factor, bandwidth and selectivity in series & Parallel RLC circuit.",
                      "4.3 Magnification in series and parallel resonant circuit",
                      "4.4 Comparison of series and parallel resonance and its applications",
                      "4.5 Significance of two port network and its types",
                      "4.6 Open Circuit (Z) parameter, Short Circuit (Y) parameter & Transmission parameter",
                      "4.7 T and Pie representation of circuits, Symmetry and reciprocity of two port network"
                    ]
                  },
                  {
                    title: "Unit-5.0 Three phase AC circuits",
                    points: [
                      "5.1 Generation of threephase voltage",
                      "5.2 Three phase three wire source and three phase four wire source, Phase sequence and phasor diagram",
                      "5.3 Line and phase relationship: Star/Delta",
                      "5.4 Three phase load-balanced and unbalanced Load",
                      "5.5 Measurement of power in three phase circuits"
                    ]
                  }
                ]
              },
              {
                name: "Electrical Measurements and Instrumentation",
                code: "2420302",
                units: [
                  {
                    title: "Unit-1.0 Basics of Measurement and Instrumentation",
                    points: [
                      "1.1 Measuring systems and requirements: Block diagram",
                      "1.2 Deflecting, controlling and damping torque",
                      "1.3 Accuracy, precision, Resolution, tolerance, sensitivity and repeatability",
                      "1.4 Errors in measurement: Types of errors- Limiting error, Gross error, systematic Error, Random Error, Guaranteed accuracy error",
                      "1.5 Classification of basic instruments - Indicating, Recording and Integrating type"
                    ]
                  },
                  {
                    title: "Unit-2.0 Measurement of Voltage and Current",
                    points: [
                      "2.1 Current and voltage measurement: Principle Galvanometer, Ammeter, Voltmeter",
                      "2.2 Calibration of ammeter and voltmeter",
                      "2.3 Range Extension of ammeter and voltmeter using: Shunts and Multipliers, Current Transformer (CT) and Potential Transformer (PT)",
                      "2.4 Permanent Magnet Moving Coil (PMMC), Moving iron, Induction, Dynamometers type instruments: Working principle, construction, applications, merits and demerits",
                      "2.5 Essentials and advantages of electronic instruments",
                      "2.6 True RMS reading voltmeter.",
                      "2.7 Digital Voltmeters (DVM) and its types",
                      "2.8 Digital multimeters- Block diagram"
                    ]
                  },
                  {
                    title: "Unit-3.0-Measurement of Power and Energy",
                    points: [
                      "3.1 Power and energy Measurement: Principle",
                      "3.2 Measurement of single and three phase power using wattmeter - one wattmeter and two wattmeter method",
                      "3.3 Effect of power factor variation on wattmeter reading in two wattmeter method",
                      "3.4 Measurement of energy using single phase and three phase watt-hour/Energy meter",
                      "3.5 Errors and compensation in energy meter, Cripping and phantom loading in energy meter",
                      "3.6 Calibration of watt meters and energy meters",
                      "3.7 Digital energy meter: Block diagram, Working"
                    ]
                  },
                  {
                    title: "Unit 4.0-Measurement using Bridges/Meters",
                    points: [
                      "4.1 Classification of resistances - Low, Medium and High",
                      "4.2 Concept of bridge, balancing",
                      "4.3 Resistance measurement - Kelvins double bridge (Low), voltmeter - ammeter method, Wheatstone bridge, ohmmeter (Medium) and Megger (High).",
                      "4.4 Earth resistance",
                      "4.5 Inductance measurement - Anderson, Maxwell inductance capacitance bridge",
                      "4.6 Capacitance Measurement- Schering bridge.",
                      "4.7 Frequency Measurement - Wein Bridge, Weston Frequency meter."
                    ]
                  },
                  {
                    title: "Unit 5.0- Measurement of Other Electrical Parameters",
                    points: [
                      "5.1 Dynamometer, Power Factor meter",
                      "5.2 Phase sequence indicator: rotating type",
                      "5.3 Synchro scope",
                      "5.4 CRO-basic clock diagram, Cathode Ray Tube, Electrostatic and magnetic deflection, X & Y Amplifiers, Controls on CRO and their functions, Lissajous pattern",
                      "5.5 Measurement of voltage, amplitude, time period, frequency and phase angle",
                      "5.6 Digital Storage Oscilloscope- Basic block diagram and working",
                      "5.7 Q/LCR meter, Digital LCR meter-Block diagram, Working principle",
                      "5.8 Analog/Digital recorders, Graphic recorder, Strip Chart recorder, XY recorder (Only block diagram), Applications of Recorders."
                    ]
                  }
                ]
              },
              {
                name: "DC Machines and Transformers",
                code: "2420303",
                units: [
                  {
                    title: "Unit-1.0 DC Generators",
                    points: [
                      "1.1 DC Machine: Construction",
                      "1.2 DC Generator: Working Principle",
                      "1.3 Types of DC generators: Shunt, Series and Compound and their applications",
                      "1.4 EMF equation",
                      "1.5 Armature reaction and its effects.",
                      "1.6 Commutation.",
                      "1.7 Voltage build-up in DC Generators",
                      "1.8 Internal and External Characteristics.",
                      "1.9 Losses and Efficiency"
                    ]
                  },
                  {
                    title: "Unit-2.0 DC Motors",
                    points: [
                      "2.1 Working Principle.",
                      "2.2 EMF equation, significance of Back EMF",
                      "2.3 Torque and Speed",
                      "2.4 Characteristics of DC motors: Torque vs Speed, Flux vs Current, Torque vs current, Speed vs Current",
                      "2.5 Need of Starters - 3-point and 4-point starters.",
                      "2.6 Losses and Efficiency",
                      "2.7 Speed Control of DC motors: Armature Control Method, Field Flux Control Method",
                      "2.8 Selection of DC Motors.",
                      "2.9 Applications of different types of DC motors"
                    ]
                  },
                  {
                    title: "Unit 3.0 Single Phase Transformer",
                    points: [
                      "3.1 Construction.",
                      "3.2 Types - Shell type and core type.",
                      "3.3 Working Principle, Useful and leakage flux",
                      "3.4 EMF Equation, Transformation Ratio.",
                      "3.5 Losses - Core and copper",
                      "3.6 Ideal and Practical transformer.",
                      "3.7 Equivalent circuit and phasor diagram",
                      "3.8 Per Unit (pu) system in transformers",
                      "3.9 Voltage Regulation - Condition for maximum, zero and minimum regulation.",
                      "3.10 Efficiency - Condition for Maximum Efficiency, All day efficiency and its significance",
                      "3.11 Polarity test, Open circuit, Short Circuit Test",
                      "3.12 Parallel operation of two single transformers.",
                      "3.13 Autotransformers - Construction, application, Inductive and conductive power transfer, Copper saving.",
                      "3.14 Energy efficient Amorphous Metal Transformer (AMT)."
                    ]
                  },
                  {
                    title: "Unit 4.0 Three Phase Transformer",
                    points: [
                      "4.1 Bank of three single phase transformer and single unit of 3-phase transformer",
                      "4.2 Different parts of 3-phase transformers",
                      "4.3 Phasor groups of 3-phase transformers",
                      "4.4 Open Delta transformer",
                      "4.5 Parallel Operations of two 3-phase transformers",
                      "4.6 Magnetization phenomenon in Transformer."
                    ]
                  },
                  {
                    title: "Unit 5.0 Special Purpose Transformers",
                    points: [
                      "5.1 Isolation Transformer",
                      "5.2 Grounding Transformer",
                      "5.3 Instrument transformer",
                      "5.4 Current Transformer",
                      "5.5 Potential Transformer",
                      "5.6 Welding transformer"
                    ]
                  }
                ]
              },
              {
                name: "Electrical Power Generation Transmission and Distribution",
                code: "2420304",
                units: [
                  {
                    title: "Unit-1.0 Generation of Electrical Power",
                    points: [
                      "1.1 Thermal Power Plant: Lay out, working and Site selection, Major Auxiliaries: Functions, Properties of conventional fuels used in Thermal Power Plants",
                      "1.2 Hydro Power Plants: Elements of Hydro power plant, Energy conversion process, Layout, and Site selection, Classification",
                      "1.3 Nuclear power Plant: Lay out, working and site selection, Properties of conventional fuels used in nuclear power plants, safe practices in nuclear power plants, Types of nuclear reactors, Disposal of nuclear waste and nuclear shielding.",
                      "1.4 Gas power plant: Lay out, working and site selection",
                      "1.5 Other features of Power generation Plants: Connected load, firm power, cold reserve, hot reserve, spinning reserve.",
                      "1.6 Factors affecting cost of generation: Average demand, maximum demand, demand factor, plant capacity factor, plant use factor, diversity factor, load factor and plant load factor. Base load and peak load plants; Load curve, load duration curve, integrated duration curve."
                    ]
                  },
                  {
                    title: "Unit-2.0 Renewable Energy Sources",
                    points: [
                      "2.1 Types of Renewable Energy Sources.",
                      "2.2 Solar Energy: Potential of solar energy, Photovoltaic effect, Construction & materials used in solar photo-voltaic cells, working & applications of solar energy.",
                      "2.3 Wind Energy: Selection of site for wind mills, Working Principle, Block diagram, Applications",
                      "2.4 Bio-Mass & Bio-Gas Energy: Composition of Bio-Gas & its calorific value, Traditional and non-traditional Biogas plants, Bio-mass based power generation plants, their capacities and applications",
                      "2.5 Geo-thermal Energy: Working Principle, Block Diagram and applications.",
                      "2.6 Ocean Energy: Ocean Thermal Electric Conversion, Energy from Tides, Site requirements, Advantages and Limitations of Tidal power generation.",
                      "2.7 Fuel Cells: Construction, working types and applications"
                    ]
                  },
                  {
                    title: "Unit-3.0 Transmission of Electrical Power",
                    points: [
                      "3.1 Transmission Line Parameters: Resistances, Inductances and Capacitances",
                      "3.2 Classification of Transmission Lines: short, medium and long",
                      "3.3 Comparison of different types of transmission systems.",
                      "3.4 Types of Conductors - Copper, Aluminum: Solid, stranded and bundled conductors.",
                      "3.5 Line Insulators - requirements, types, Failure of insulator.",
                      "3.6 String Efficiency, string efficiency improvement method: By using longer cross arm, By grading the insulator and By using guard ring",
                      "3.7 Spacing between Conductors, span length and sag calculation.",
                      "3.8 Corona - corona formation, advantages & disadvantages, factors affecting corona",
                      "3.9 Skin effect, proximity effect, Ferranti effect and Transposition of conductors.",
                      "3.10 Losses, efficiency, regulation and Effect of load power factor",
                      "3.11 Load dispatch Centre",
                      "3.12 Issues of Distributed Generation Integrated to distribution Grid.",
                      "3.13 Requirement of EHV transmission: HVAC Transmission, HVDC Transmission"
                    ]
                  },
                  {
                    title: "Unit-4.0 Electrical Power Distribution System",
                    points: [
                      "4.1 Distribution system and its Requirements.",
                      "4.2 Connection schemes of distribution system.",
                      "4.3 A.C. distribution: Voltage drop, sending end voltage, receiving end voltage, point of minimum potential, minimum potential value and power loss",
                      "4.4 Power factor referred to receiving end voltage and power factor referred to respective load voltage.",
                      "4.5 Substation: Classification of substations based on; voltage level and Type of installation.",
                      "4.6 Selection and location of site for substation.",
                      "4.7 Installation of substation equipment.",
                      "4.8 Underground Cables: Requirements, classification, construction, comparison with overhead lines.",
                      "4.9 Laying of underground cable: Direct laying, Draw in system and Solid system"
                    ]
                  },
                  {
                    title: "Unit-5.0 Deregulated Power system",
                    points: [
                      "5.1 Introduction.",
                      "5.2 Reasons for restructuring/deregulation of power system.",
                      "5.3 Objectives of deregulation of various power system across the world.",
                      "5.4 Restructuring process",
                      "5.5 Ancillary services: Frequency support ancillary services, voltage control ancillary services and black start ancillary services",
                      "5.6 Issues involved in deregulation."
                    ]
                  }
                ]
              },
              {
                name: "Python Programming ",
                code: "2418305",
                units: [
                  {
                    title: "Unit 1.0 Fundamentals of Python Programming Syntax",
                    points: [
                      "1.1 Introduction to Python Character Set, Python Tokens, Variables, Lvalue and Rvalue Concepts, and the Use of Comments.",
                      "1.2 Overview of Data Types: Number Types: Integer, Floating Point, Complex; Boolean Type; Sequence Types: String, List, Tuple; None Type; Mapping Type: Dictionary; Distinction between Mutable and Immutable Data Types",
                      "1.3 Understanding Operators: Arithmetic Operators, Relational Operators, Logical Operators, Assignment Operator, Augmented Assignment Operators, Expressions and Statements, Type Conversion and Input/Output Mechanisms, Precedence of Operators, Expression Evaluation"
                    ]
                  },
                  {
                    title: "Unit-2.0 Conditional and Iterative statements",
                    points: [
                      "2.1 Conditional statements: simple if statement, if- else statemen, if-elif-else statement",
                      "2.2 Iterative statements: while loop, for loop, range function, break and continue statements, nested loops"
                    ]
                  },
                  {
                    title: "Unit-3.0 String, List, Tuples, set and Dictionary",
                    points: [
                      "3.1 String: Indexing, string operations (concatenation, repetition, membership & slicing), traversing a string using loops, Built-in functions.",
                      "3.2 Lists: Introduction, Indexing in list, list operations: concatenation, repetition, membership & slicing, traversing a list, built- in list functions, linear search on list of numbers and counting the frequency of elements in a list",
                      "3.3 Tuples: Creating, initializing, accessing elements, tuple assignment, performing operations on tuples, tuple methods and built-in functions, nested tuples",
                      "3.4 Set: Creating set, traversing, adding, removing data in set, performing set operations like join, Union intersection, difference",
                      "3.5 Dictionary: accessing items in a dictionary using keys, mutability of dictionary: adding a new item, modifying an existing item, built-in dictionary functions."
                    ]
                  },
                  {
                    title: "Unit-4.0 Python Functions, Modules and packages",
                    points: [
                      "4.1 Functions: types of function (built-in functions, functions defined in module, user defined functions), creating user defined function, arguments and parameters, default parameters, positional parameters, Lambda functions, returning value, scope of a variable: global scope, local scope",
                      "4.2 Modules and Packages: Importing module using 'import' Regular Expressions, Exception Handling, PyPI Python Package Index, Pip Python package manager, Importing Libraries and Functions"
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
                      "6.1 Exception Handling: syntax errors, exceptions, need of exception handling, userdefined-exceptions, raising exceptions, handling exceptions, catching exceptions, Try - except - else clause, Try - finally clause, recovering and continuing with finally, built-in exception classes.",
                      "6.2 File Handling: text file and binary file, file types, open and close files, reading and writing text files, reading and writing binary files, file access modes"
                    ]
                  }
                ]
              },

              {
                name: "Summer Internship - I",
                code: "2418306",
                units: [
                  {
                    title: "Internship after 2nd Semester for all branches",
                    points: [
                      "Diploma students are required to give exposure of their own diploma programme related industrialhardware, software and practices,",
                    ]
                  },
                ]
              },
            ];

            // Diploma Electrical Sem 5

            semesters.sem5.theory = [
              {
                name: "Switchgear and Protection",
                code: "2420501",
                units: [
                  {
                    title: "Unit1.0 -Fundamentals of Protection System",
                    points: [
                      "1.1 Necessity & the function of protection system",
                      "1.2 Normal & Abnormal conditions in a power system",
                      "1.3 Faults: Symmetrical and unsymmetrical",
                      "1.4 Protective zones: primary & backup Protection",
                      "1.5 Short circuit fault calculation for symmetrical fault",
                      "1.6 Current limiting reactors: need & their Arrangements.",
                      "1.7 Single-line representation of a simple power system",
                      "1.8 Per unit system: Introduction, simple numerical on PU system."
                    ]
                  },
                  {
                    title: "Unit-2.0 Protective Devices",
                    points: [
                      "2.1 Fuse: necessity of fuse, working principle, material used in fuse.",
                      "2.2 Types of fuses: Cartridge type, HRC fuse",
                      "2.3 Isolators: working principle, Vertical break, Horizontal break & Pantograph type.",
                      "2.4 Circuit Breaker: Arc formation process, methods of arc extinction (High resistance and low resistance), Restriking voltage, RRRV",
                      "2.5 Miniature Circuit breaker, Moulded case circuit breaker, Residual current circuit breaker and earth leakage circuit breaker (working and their application)",
                      "2.6 Classification of Circuit Breakers: Miniature circuit breaker (MCB), Moulded Case Circuit Breaker (MCCB), Air Circuit Breaker, Air Blast Circuit Breaker, Oil Circuit breaker- Minimum and bulk oil circuit breaker, vacuum circuit breaker, Sulphur hexafluoride: working, construction, specifications, and application",
                      "2.7 Ratings of circuit breakers",
                      "2.8 Selection of HT & LT circuit breakers"
                    ]
                  },
                  {
                    title: "Unit-3.0 Protective Relays",
                    points: [
                      "3.1 Introduction to protective relays",
                      "3.2 Fundamental quality requirements: selectivity, speed, sensitivity, reliability, simplicity, economy",
                      "3.3 Basic relay terminology: Protective relay, relaying time, pick up current, reset current, current setting, plug setting multiplier, Time setting multiplier.",
                      "3.4 Protective relays: Electromagnetic and Induction relay, thermal relay, overvoltage relay, static relay.",
                      "3.5 Microprocessor-based protection relay",
                      "3.6 Characteristics of various Overcurrent relay",
                      "3.7 Distance relay: Reactance relay, impedance relay and Mho relay.",
                      "3.8 Directional relay: need and operation",
                      "3.9 Differential protection"
                    ]
                  },
                  {
                    title: "Unit-4.0 Alternator, Motor and Transformer Protection",
                    points: [
                      "4.1 Alternator: Abnormalities and faults",
                      "4.2 Protection: Overcurrent, overvoltage-undervoltage, earth fault, overheating and field failure.",
                      "4.3 Reverse watt metric relay",
                      "4.4 Motor: Abnormalities & faults",
                      "4.5 Protection: Overcurrent, Overload, Overvoltage, Undervoltage, overheating.",
                      "4.6 Transformer: Abnormalities and faults",
                      "4.7 Overcurrent, earth fault and overheating protection",
                      "4.8 Buchholz relay- Construction, operation, merits and demerits",
                      "4.9 Differential protection: alternator and transformer"
                    ]
                  },
                  {
                    title: "Unit-5.0 Busbar & Transmission Line Protection",
                    points: [
                      "5.1 Bus bar & Transmission line- Abnormalities & Faults.",
                      "5.2 Bus bar protection- differential protection (low impedance and high impedance).",
                      "5.3 Transmission line- distance, three zone of protection and pilot wire protection."
                    ]
                  }
                ]
              },
              {
                name: "Solar & Wind Power Technology",
                code: "2420502",
                units: [
                  {
                    title: "Unit1.0 -Solar PV Systems",
                    points: [
                      "1.1 Solar radiation spectra, solar geometry, Earth Sun angles, observer Sun angles, solar day length, Estimation of solar energy availability.",
                      "1.2 Solar PV system, Block diagram and its components.",
                      "1.3 Solar Cell fundamentals, Technologies- Amorphous, monocrystalline, polycrystalline.",
                      "1.4 V-I characteristics of a PV cell, PV module, Panel, array.",
                      "1.5 Series and parallel connection PV Cell and panels.",
                      "1.6 Batteries: battery capacity, battery charging-rate, battery efficiency, energy and power density",
                      "1.7 PV sizing for a given application",
                      "1.8 Power Electronic Converters for Solar Systems.",
                      "1.9 Maximum Power Point Tracking (MPPT).",
                      "1.10 Off grid and ON Grid solar system."
                    ]
                  },
                  {
                    title: "Unit-2.0 Solar Thermal Systems",
                    points: [
                      "2.1 Solar thermal energy systems.",
                      "2.2 Solar absorption and radiation.",
                      "2.3 Solar heating systems: principle of conversion, operation of solar water heater, types of heating systems, components and specifications of solar water heating system, installation and maintenance.",
                      "2.4 Solar cooking system: principle of cooking, types of solar cooker (Box type, Dish type and heat transfer type).",
                      "2.5 Solar refrigeration and Air conditioning."
                    ]
                  },
                  {
                    title: "Unit-3.0 Wind Resource Assessment",
                    points: [
                      "3.1 History of wind power, Indian and Global statistics.",
                      "3.2 Energy and Power in Wind, Wind energy Dynamics.",
                      "3.3 Wind Resource assessment: Initial Site identification, Wind speed measurement (Cup anemometer, Ultrasonic anemometer, Propeller Aerometer).",
                      "3.4 Monitoring station instrumentation: sensors, Data loggers, Data storage Devices, Tower sensors support hardware, grounding and lighting protection.",
                      "3.5 Data collection and analysis",
                      "3.6 Installation of monitoring station."
                    ]
                  },
                  {
                    title: "Unit-4.0 Wind Power Systems",
                    points: [
                      "4.1 Block diagram of wind energy conversion systems (WECS).",
                      "4.2 Wind turbine terminologies: Cut-in, cut-out and survival wind speed, threshold wind speed, rated power, nominal power and wind power curve.",
                      "4.3 Types of wind power plant: small and large wind turbine, Horizontal and vertical axis, constant and variable speed, geared, direct drive and semi geared (hybrid)",
                      "4.4 Major parts and function of WPP: Rotor blades, hub, nacelle, tower, electric substation, nacelle layout of geared turbine, main shaft, electric generators, electronic control panel.",
                      "4.5 Rotation Principle: Lift and Drag principle, thrust and torque of wind turbine rotor."
                    ]
                  },
                  {
                    title: "Unit-5.0 Working of small wind turbines (SWT)",
                    points: [
                      "5.1 Working of SWTs.",
                      "5.2 Electric generators in SWTs: permanent magnet synchronous generators, induction generators.",
                      "5.3 SWT towers: lattice tubular type, hydraulic towers, ladders, cables.",
                      "5.4 Maintenance of small wind turbine: Installation of different types of small wind turbines (SWT), Preventive maintenance of SWT components, Common mechanical faults in SWTs, Common electrical faults in SWTs."
                    ]
                  }
                ]
              },
              {
                name: "Energy Conservation and Audit",
                code: "2420503",
                units: [
                  {
                    title: "Unit-1.0 Energy Conservation Basics",
                    points: [
                      "1.1 Energy Scenario: Primary and Secondary energy sources, Energy demand and supply, National scenario of energy generation of both conventional and non-conventional energy",
                      "1.2 Difference between Energy conservation and energy efficiency with examples.",
                      "1.3 Energy conservation Policy in India",
                      "1.4 Energy conservation initiatives by GoI: [i] Standards and Labelling, [ii] Energy Conservation Building Codes (ECBC), [iii] Promotion of Energy Efficient LED Bulbs, [iv] Promotion of Electric Vehicle",
                      "1.5 Energy conservation and Energy audit; concepts and difference.",
                      "1.6 Energy Conservation Act 2001; relevant clauses of energy conservation",
                      "1.7 BEE/BREDA, NPC, MNRE and its Roles",
                      "1.8 Star Labeling: Need and its benefits, Mandatory and voluntary appliances"
                    ]
                  },
                  {
                    title: "Unit-2.0 Energy Conservation in Electrical Machines",
                    points: [
                      "2.1 Energy conservation techniques in induction motor: a) Improving Power quality, b) Motor survey, c) Matching motor with loading, d) Minimizing the idle and redundant running of motor, e) Operating in star mode, f) Rewinding of motor, g) Replacement by energy efficient motor- significant features, advantages, applications and limitations, h) Periodic maintenance",
                      "2.2 Energy conservation techniques in Transformer: a) Load sharing, b) Parallel operation, c) Isolating techniques, d) Replacement by energy efficient transformers- Amorphous transformers; Epoxy Resin cast transformer and Dry type of transformer, e) Periodic maintenance",
                      "2.3 Energy Conservation Equipment: a) Soft starters, b) Automatic star delta convertor, c) Variable Frequency Drives, d) Automatic p. f. controller (APFC), e) Intelligent p. f. controller (IPFC), f) Active Harmonic filters (AHF)."
                    ]
                  },
                  {
                    title: "Unit-3.0 Energy Conservation in Electrical Installation Systems",
                    points: [
                      "3.1 Aggregated Technical and commercial losses (ATC); Power system at state, regional, national level.",
                      "3.2 Technical losses-Causes and measures to reduce by: a) Controlling I2R losses, b) Optimizing distribution voltage, c) Balancing phase currents, d) Compensating reactive power flow",
                      "3.3 Commercial losses: causes and remedies",
                      "3.4 Energy conservation instruments: a) Maximum Demand Controller, b) KVAR Controller, c) Automatic Power Factor controller (APFC), d) Intelligent p. f. controller (IPFC)",
                      "3.5 Energy Conservation in Lighting System: a) Relamping with energy efficient LED lamps, b) Using energy efficient luminaries, c) Improving lighting controls- infrared sensors, automatic timers, motion sensors (PIR and ultrasonic sensors), and dimmers, Smart control, d) Centralized street light control - GSM/GPRS based systems and SCADA system, e) Replacing energy inefficient accessories with new energy efficient fixtures and ballast, f) Installation of separate transformer servo stabilizer for lighting, g) Periodic survey and adequate maintenance programs."
                    ]
                  },
                  {
                    title: "Unit-4.0 Energy Conservation through Cogeneration and Tariff",
                    points: [
                      "4.1 Co-generation and its significance",
                      "4.2 Types of Cogeneration: a) On the basis of sequence of energy use - Topping cycle, Bottoming cycle; b) On the basis of technology - Steam turbine Cogeneration, Gas turbine cogeneration, Reciprocating engine Cogeneration",
                      "4.3 Factors governing the selection of cogeneration system.",
                      "4.4 Advantages of cogeneration.",
                      "4.5 Tariff and Types of tariff structure: LT and HT Tariff, Special tariffs, Time-of-day tariff, Peak-off-day tariff, Power factor tariff, Maximum Demand tariff, Load factor tariff and Availability Based Tariff (ABT).",
                      "4.6 Application of tariff system to reduce energy bill.",
                      "4.7 Recent BSPHCL tariffs for different consumers."
                    ]
                  },
                  {
                    title: "Unit-5.0 Energy Audit of Electrical Systems",
                    points: [
                      "5.1 Energy audit (definition as per Energy Conservation act), need and significance in energy consumption pattern",
                      "5.2 Types of energy audit",
                      "5.3 Energy audit instruments and their use",
                      "5.4 Questionnaire for energy audit projects",
                      "5.5 Energy flow diagram (Sankey diagram)",
                      "5.6 Simple payback period",
                      "5.7 Procedure of Energy Audit (walk through audit and detailed audit).",
                      "5.8 Energy Audit report format."
                    ]
                  }
                ]
              },
              {
                name: "Open Elective | Electric Vehicle (Basic)",
                code: "2400504G",
                units: [
                  {
                    title: "Unit-1.0 Introduction to Electric Vehicle",
                    points: [
                      "1.1 Review of Conventional Vehicle Engine System, Electric Vehicle (EV), The necessity of Electric Vehicle",
                      "1.2 Types of Electric Vehicles: Plug-in hybrid, Battery electric vehicle, Hybrid electric vehicle, Fuel Cell Electric Vehicle",
                      "1.3 Advantages of Electric Vehicles",
                      "1.4 Electric Vehicle Components: Motor, Motor Controller, Battery, Battery Management System, and Charging System."
                    ]
                  },
                  {
                    title: "Unit-2.0 Electric Motors used in EVs",
                    points: [
                      "2.1 Electric Motors for EV applications: General Characteristics of motors",
                      "2.2 Types of Motors: DC, Brushless DC, Induction, Permanent Magnet Synchronous Motors, Switched Reluctance Motors",
                      "2.3 Rating of Motors, Selection Criteria, Physical Location",
                      "2.4 Connection of Motors: Mechanical Connections and Electrical Connections"
                    ]
                  },
                  {
                    title: "Unit-3.0 EV Batteries and Energy Storages",
                    points: [
                      "3.1 Types of Batteries: Lead Acid, Nickel Based, Lithium Based",
                      "3.2 Battery Parameters, Charging (AC) and Discharging (DC) Process",
                      "3.3 Lithium Ion Batteries, Fuel Cells, Fuel Cell Storage System",
                      "3.4 Battery Condition Monitoring, Battery Management System (BMS), Need of BMS",
                      "3.5 Block Diagram of BMS, Battery Disposal and Recycling"
                    ]
                  },
                  {
                    title: "Unit- 4.0 EV Charging Systems",
                    points: [
                      "4.1 Power electronics in EV, Power electronics components, Rectifiers",
                      "4.2 DC to DC Converter, DC to AC Converter",
                      "4.3 Charging System, Types of charging Systems",
                      "4.4 Components of Charging Systems, Single line Diagram of Charging System"
                    ]
                  },
                  {
                    title: "Unit- 5.0 Regulatory Requirements and Policies for EV Industry",
                    points: [
                      "5.1 Rules and Regulations set by the Indian government for the designer/manufacturer of EVs.",
                      "5.2 Policies in India, Global Policies for E- Vehicles.",
                      "5.3 Carbon Footprint Issues"
                    ]
                  }
                ]
              },
              {
                name: "Entrepreneurship Development & Start-ups ",
                code: "2400505",
                units: [
                  {
                    title: "Unit-1.0 Introduction to Electric Vehicle",
                    points: [
                      "1.1Demonstrate traits of a successful intrapreneur/ entrepreneur/ start-up co-founder.",
                      "1.2Innovate products and services using creativity and innovation techniques.",
                      "1.3 Manage critical resources from support institutions.",
                      "1.4 Prepare sustainable small business plans. "
                    ]
                  },
                ]
              },
              {
                name: "Summer Internship - II",
                code: "2418305",
                units: [
                  {
                    title: "(After 4th Sem) / Industrial Training / Common for all programmes)",
                    points: [
                      "Diploma students are required to give exposure of their own diploma programme related industrialhardware, software and practices,",
                    ]
                  },
                ]
              },
            ];
            return semesters;
          })()
        },

        // Diploma Mechanical sem 1

        {
          id: "mechanical",
          title: "Mechanical Engineering",
          icon: "fas fa-cogs",
          semesters: (() => {
            const semesters = syllabusEmptySemesters(6);

            semesters.sem1.theory = [
              {
                name: "Basic Engineering Mathematics",
                code: "2600101",
                units: [
                  {
                    title: "Unit-1.0 Algebra Determinant",
                    points: [
                      "1.1 Concept and properties of determinant.",
                      "1.2 Solutions of simultaneous equations in three Unknowns by Cramer's rule.",
                      "1.3 Matrices: Algebra of matrices (Addition, Subtraction, Multiplication by Scalar, and Multiplication of Two matrices).",
                      "1.4 Transpose, Adjoint and Inverse of Matrix.",
                      "1.5 Solutions of simultaneous equations of a Matrix of order 3 x 3 by Inversion method.",
                      "1.6 Vectors: Position vector.",
                      "1.7 Algebra of Vectors (Addition, Subtraction, Scalar Multiplication with vector).",
                      "1.8 Scalar product.",
                      "1.9 Vector product.",
                      "1.10 Algebra in Indian Knowledge System: Solution of simultaneous equations (Indian Mathematics). (IKS)"
                    ]
                  },
                  {
                    title: "Unit-2.0 Differential Calculus",
                    points: [
                      "2.1 Function and Limit: Concept of function.",
                      "2.2 Different type of functions.",
                      "2.3 Domain and Range of Function.",
                      "2.4 Concept of Limits and its evaluation.",
                      "2.5 Continuity: Concept of continuity with simple problems.",
                      "2.6 Differentiation: Differentiation by First Principle.",
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
                    title: "Unit-3.0 Application of Differential Calculus",
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
                    title: "Unit-4.0 Co-ordinate Geometry",
                    points: [
                      "4.1 Co-ordinate systems: Introduction of Co-ordinate Systems.",
                      "4.2 Straight lines: Slope of a line, the angle between two lines.",
                      "4.3 Various forms of Straight Lines: Point-slope form, Two-point form, Slope intercept form, Intercept form, Normal form, General form.",
                      "4.4 Perpendicular distance of a line from a point, perpendicular distance between two parallel lines.",
                      "4.5 Geometry in Sulabasutras in Indian Knowledge System (construction of the square, circling the square). (Indian Mathematics).",
                      "4.6 Conic Section: Introduction of Conic-Section.",
                      "4.7 Equation of Circle in standard form.",
                      "4.8 Standard equation of parabola, ellipse, and hyperbola."
                    ]
                  },
                  {
                    title: "Unit-5.0 Probability and Statistics",
                    points: [
                      "5.1 Probability: Concept of Probability.",
                      "5.2 Addition and multiplication theorems of Probability.",
                      "5.3 The measure of Central Tendency: Mean, Median, Mode.",
                      "5.4 Measure of Dispersion: Range, Variance, Standard Deviation.",
                      "5.5 Coefficient of Variation."
                    ]
                  }
                ]
              },
              {
                name: "Applied Chemistry -A",
                code: "2600103A",
                units: [
                  {
                    title: "Unit-1.0 Atomic Structure and Chemical Bonding and Solutions",
                    points: [
                      "1.1 Atoms and its fundamental particles.",
                      "1.2 Rutherford Model of Atom.",
                      "1.3 Bohr's Theory, Hydrogen spectrum explanation based on Bohr's Model of Atom.",
                      "1.4 Wave Mechanical model of atom, de Broglie relationship, Heisenberg Uncertainty Principle",
                      "1.5 Quantum Numbers, Shapes of Atomic Orbitals.",
                      "1.6 Pauli's Exclusion Principle, Hund's Rule of Maximum Multiplicity, Aufbau Principle, Electronic Configuration (till atomic number 30).",
                      "1.7 Concept of Chemical bonding: Cause of chemical bonding, Types of Bonds: Ionic Bond (NaCl, CaCl2, MgO), Covalent Bond, Polar and Nonpolar Covalent Bonds (H2, F2, HF, HCl) & Co-ordinate Bond (CO, NH4+, O3, H2SO4).",
                      "1.8 Dipole Moment (NH3, NF3), Hydrogen bonding.",
                      "1.9 Solution- (solute, solvent) and their strength- Molarity, Normality, Molality.",
                      "1.10 Indian Chemistry: -Philosophy of atom by Acharya Kanad. (IKS)"
                    ]
                  },
                  {
                    title: "Unit-2.0 Water",
                    points: [
                      "2.1 Introduction, Sources of Water. Hardness of Water- Temporary & Permanent hardness.",
                      "2.2 Degree of Hardness (In terms of CaCO3 equivalent), Unit of Hardness, Quantitative Measurement of Water Hardness by EDTA method.",
                      "2.3 Municipal supply of Water, Treatment of water, Water Softening Technique-Soda Lime Process, Zeolites method and ion exchange method.",
                      "2.4 Water Quality Index: Biological Oxygen Demand, Chemical Oxygen Demand, Determination of Dissolved Oxygen",
                      "2.5 Indian standard specification of drinking water."
                    ]
                  },
                  {
                    title: "Unit-3.0 Engineering materials",
                    points: [
                      "3.1 Natural Occurrence of Metals- Minerals, ores.",
                      "3.2 Metallurgy: General principles of Metallurgy, Gangue, Flux and Slag, Steps involved in metallurgy.",
                      "3.3 Extraction of Aluminium, Iron and Copper from their important ores along with reactions, Properties and uses.",
                      "3.4 Alloys: Definition, Purpose of alloying, Ferrous and Non-Ferrous Alloy with suitable examples, Composition, Properties, and their applications.",
                      "3.5 Ancient Indian Metallurgy (IKS)",
                      "3.6 Polymers-Homopolymers and Copolymers, Natural polymers and synthetic polymers, Addition and Condensation polymerization, Thermoplastic and Thermosetting plastic.",
                      "3.7 Monomers, applications, and synthesis of Polythene, PVC, Orlon, Terylene, Nylon 66, Nylon 6, Bakelite.",
                      "3.8 Natural Rubber and its vulcanization, advantages of vulcanized rubber.",
                      "3.9 Cement, Average composition of Portland cement, Raw material for manufacture of cement, Setting of Cement."
                    ]
                  },
                  {
                    title: "Unit-4.0 Chemistry of Fuel and Lubricants",
                    points: [
                      "4.1 Fuels, Characteristics of an Ideal Fuel.",
                      "4.2 Classification of Fuel- Solid, liquid and gas fuel, Calorific Values (HCV and LCV), Petroleum and its fractional distillation.",
                      "4.3 Cracking, knocking, Fuel Rating (Octane Number, Cetane Number).",
                      "4.4 Composition, uses, advantages and disadvantages of LPG, CNG and Biogas.",
                      "4.5 Manures, NPK fertilizers (preparation and uses).",
                      "4.6 Fire Extinguishers and their types.",
                      "4.7 Lubricants- Classification of Lubricants with examples, Functions and Properties of Good Lubricant.",
                      "4.8 Viscosity & Viscosity Index.",
                      "4.9 Flash point, Fire point, Cloud & Pour point"
                    ]
                  },
                  {
                    title: "Unit-5.0 Electrochemistry",
                    points: [
                      "5.1. Introduction, Electrolyte and Nonelectrolyte, Electrolytic and Metallic Conduction, Factors affecting Electrolytic Conductance.",
                      "5.2. Molar Conductivity and Equivalent Conductivity. Variation of Molar Conductivity, Kohlrausch's law.",
                      "5.3. Faraday's Laws of Electrolysis.",
                      "5.4. Galvanic Cell, Electrode Potential, Measurement of Electrode Potential SHE (Standard Hydrogen electrode), EMF, Electrochemical Series, Nernst Equation for Electrode Potential.",
                      "5.5. Batteries, Primary Cells-Dry cell, Secondary cell -Lead storage battery, Fuel cells.",
                      "5.6. Corrosion, their types (Dry & Wet corrosion) and prevention."
                    ]
                  }
                ]
              },
              {
                name: "Introduction to Artificial Intelligence",
                code: "2600100",
                units: [
                  {
                    title: "Unit-1.0 Introduction to IT Systems and Digital Technologies",
                    points: [
                      "1.1 Introduction to Digital Systems and Internet Technology: Introduction to Digital Systems, Data and Information, Role of Information Technology in Engineering, Fundamentals of the Internet, Web Browsers and Secure Web Navigation, Search Engines and Effective Information Retrieval.",
                      "1.2 Computer Hardware Components and Internet Technology: CPU, Memory, Storage Devices, Input and Output Devices",
                      "1.3 Operating Systems: Basic functions of operating systems (Windows, Linux, and Mobile OS). Working with local files, folders, and system directories.",
                      "1.4 Cloud Computing and Collaboration: Introduction to Cloud Ecosystems. Working with Cloud Storage (Google Drive, OneDrive), and collaborative digital environments (Real-time document editing, sharing links, and setting Viewer, Commenter, Editor access permissions).",
                      "1.5 Cybersecurity Fundamentals: Introduction to Computer Networks, Safe internet practices, password hygiene, and basic digital safety awareness."
                    ]
                  },
                  {
                    title: "Unit-2.0 Fundamentals of Artificial Intelligence",
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
                    title: "Unit-3.0 Core AI Applications - Computer Vision & NLP",
                    points: [
                      "3.1 Introduction to Computer Vision: Concept of machine sight; processing digital images and modern industrial use cases.",
                      "3.2 Image Processing Concepts: Basics of Image Segmentation, pixel analysis, object scaling, and structural similarity indices.",
                      "3.3 Object Detection and Identification: Concepts of identifying and tracking target boundaries within images.",
                      "3.4 Optical Character Recognition (OCR): Digitizing text logs from blueprints, machine maintenance logbooks, and engineering data sheets.",
                      "3.5 Natural Language Processing (NLP): Introduction to how machines process, tokenize, and interpret human language."
                    ]
                  },
                  {
                    title: "Unit-4.0 Conversational AI and Generative Systems",
                    points: [
                      "4.1 Chatbot Architecture: Introduction to AI-based Chatbots, Large Language Models (LLMs), and their basic internal operational blocks.",
                      "4.2 Next-Word Prediction Concept: Next-Word Prediction Mechanism, Probability-Based Word Selection, Context and Meaning in Text Generation, Simple Examples of Next-Word Prediction",
                      "4.3 Prompt Engineering Foundations: Introduction to Prompt Engineering, Components of an Effective Prompt, Writing Clear and Specific Instructions, Context and Constraints in Prompts, Zero-Shot Prompting.",
                      "4.4 Industrial Applications of Generative AI: Technical document summarization, automated code scaffolding generation, and cross-disciplinary engineering workflow ideation.",
                      "4.5 Zero-Code Generative Design Principles: Prompt-Based Design Generation, Zero-Code AI Design Tools (Examples of Zero-Code Generative Design Tools)",
                      "4.6 Limitations, Risks, and Responsible Use of AI: AI Hallucinations and Bias, Fact Verification and Source Validation, Data Privacy and Copyright Awareness, Responsible Use of Generative AI."
                    ]
                  },
                  {
                    title: "Unit-5.0 Programming Logic & Computational Thinking using Python",
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
                name: "Communication Skills (English)",
                code: "2600104",
                units: [
                  {
                    title: "Unit-1.0 Communication",
                    points: [
                      "1.1 Communication: Role, Relevance, Elements (Context-Sender-Message-Channel-Receiver-Feedback)",
                      "1.2 Process/Stages: Ideation - Encoding, Selecting Proper Channel, Transmission, Receiving, Decoding, Giving Feedback",
                      "1.3 7 Cs/Principles of Effective Communication: Considerate, Correct, Concrete, Concise, Clear, Complete, Courteous",
                      "1.4 Barriers to Communication: Physiological, Physical, Psychological, Mechanical, Semantic/Language, Cultural. Overcome/minimize Barriers.",
                      "1.5 Case Studies from: Bhagwat Geeta's conversation between Krishna and Arjun before the war (IKS), Mahabharata the conversation between Kauravas and Pandavas in the war field (IKS)"
                    ]
                  },
                  {
                    title: "Unit- 2.0 Types of Communication",
                    points: [
                      "2.1 Based on organizational structure: Formal (Vertical, Horizontal, Diagonal), Informal (Grapevine)",
                      "2.2 Based on the method of expression: Verbal-Oral & Written communication. Non-verbal communication and its Codes- Kinesics, Chronemics, Proxemics, Haptics, Vocalics/Paralanguage, Artifacts, Graphic and Visual Communication",
                      "2.3 Based on the number of people involved: Interpersonal, and Group Communication.",
                      "2.4 Case Studies from Bhagwat Geeta's different conversations with Krishna and Arjun during the war (IKS)."
                    ]
                  },
                  {
                    title: "Unit-3.0 Reading Comprehension",
                    points: [
                      "3.0 Comprehension, vocabulary enhancement and grammar exercises based on the reading of the following texts.",
                      "3.1 Section-1 (Prose): An Astrologer's Day by R K Narayan",
                      "3.2 Indian Civilization and Culture by M K Gandhi",
                      "3.3 The Secret of Work by Swami Vivekanand",
                      "3.4 My Struggle for an Education by Booker T Washington",
                      "3.5 Section-2 (Poetry): Where the Mind is without Fear by R N Tagore",
                      "3.6 Ode on Solitude by Alexander Pope",
                      "3.7 Stopping by Woods on a Snowy Evening by Robert Frost",
                      "3.8 A Psalm of Life by H W Longfellow"
                    ]
                  },
                  {
                    title: "Unit-4.0 - Vocabulary and Grammar",
                    points: [
                      "4.1 Word Formation: Prefix, Suffix, Acronym",
                      "4.2 Synonyms, Antonyms, Homonyms, One Word Substitution, Idioms and Phrases",
                      "4.3 Technical Jargons - Related to the respective program",
                      "4.4 Parts of speech",
                      "4.5 Time and Tense",
                      "4.6 Transformation: Voice, Narration, Removal of Too, Question Tag",
                      "4.7 Punctuation"
                    ]
                  },
                  {
                    title: "Unit-5.0 Professional Writing",
                    points: [
                      "5.1 Precis Writing",
                      "5.2 Business Letters / Applications",
                      "5.3 Drafting E-mails, Notices, Memos, Circulars",
                      "5.4 Report Writing: Project and Event/ Incident Report Writing"
                    ]
                  },
                ]
              },
              {
                name: "Engineering Drawing ",
                code: "2625105",
                units: [
                  {
                    title: "Unit-1.0 Basic Elements of Drawing",
                    points: [
                      "1.1 Methods to use different Drawing Instruments and supporting materials.",
                      "1.2 Different lines and conventions in engineering drawing.",
                      "1.3 Engineering scales and applications: Reduced, enlarged & full size (Plain and Diagonal scale)",
                      "1.4 Dimensioning techniques: Types and applications of chain, parallel and coordinate dimensioning as per SP-46.",
                      "1.5 Geometric construction related with line.",
                      "1.6 Geometric construction related with angle.",
                      "1.7 Geometric construction related with circle & arc.",
                      "1.8 Construct polygons: Hexagon: Using drawing tools; Polygon (Triangle, square, pentagon, hexagon and heptagon) by general method; Polygon (Pentagon, hexagon and heptagon) by special method.",
                      "1.9 Engineering Curves: Ellipse, Parabola, Cycloids, Involutes (Circle and Polygon) and Spiral (Archimedean)."
                    ]
                  },
                  {
                    title: "Unit-2.0 Elements of Orthographic Projections",
                    points: [
                      "2.1 Concept and applications of Orthographic, Perspective, Isometric and Oblique Projections.",
                      "2.2 Projection Planes",
                      "2.3 Orthographic Projection: First and Third angle",
                      "2.4 Projection of point: Lies in any one of the quadrants, Lies any one of the planes, Lies on XY line.",
                      "2.5 Projection of lines: Parallel to both the planes, Perpendicular to any one of the planes, Inclined to any one of the planes.",
                      "2.6 Projection of Planes: i.e. Triangle, Square, Rectangle, Pentagon, Hexagon, Circle; Perpendicular to both the projection planes, Parallel to one and perpendicular to another projection plane, Projection of plane inclined to one and perpendicular to another projection plane."
                    ]
                  },
                  {
                    title: "Unit-3.0 Orthographic Projection of Un-Sectioned and Sectioned Solids",
                    points: [
                      "3.1 Orthographic Projection of regular solids with their base resting on H.P. (Prism: Triangular, Square (Cube/Cuboid), Rectangular (Cuboid) and Pentagonal; Pyramid: Triangular, Square, Rectangular and Pentagonal; Cylinder, Cone, Sphere)",
                      "3.2 Orthographic Projection of Cuboid, Pentagonal Prism and Cylinder with their base inclined to any one projection plane and parallel to another.",
                      "3.3 Orthographic Projection of Cube & Cone with their axis inclined to both the projection planes.",
                      "3.4 Section of Regular solids (i.e. Cube, Cuboid, Cylinder, Cone.) with their base resting on H.P. by a Section plane: Parallel to one reference plane and Perpendicular to another, Inclined to one reference plane and Perpendicular to other.",
                      "3.5 Conversion of simple pictorial views into orthographic views."
                    ]
                  },
                  {
                    title: "Unit-4.0 Isometric Projection",
                    points: [
                      "4.1 Introduction to isometric projection.",
                      "4.2 Isometric scale and Natural Scale.",
                      "4.3 Isometric view and isometric projection.",
                      "4.4 Illustrative problems limited to Isometric projection of objects containing rectangular, circular, cylindrical shapes and slots on sloping and plane surfaces.",
                      "4.5 Conversion of orthographic views into isometric View/projection."
                    ]
                  },
                  {
                    title: "Unit-5.0 Development of Surfaces",
                    points: [
                      "5.1 Development of lateral surfaces of Triangular Prisms and Square Prisms (Cube and Cuboid)",
                      "5.2 Development of lateral surfaces of Triangular Pyramids (Tetrahedron) and rectangular pyramids.",
                      "5.3 Development of lateral surfaces of Cylinders and Cones."
                    ]
                  },
                  {
                    title: "Unit-6.0 Free Hand Sketches of Engineering Elements",
                    points: [
                      "6.1 Materials for Sketching.",
                      "6.2 General Guidelines for Freehand Sketching.",
                      "6.3 Freehand sketching of straight lines, square, rectangle, circles and arcs.",
                      "6.4 Free hand sketches of orthographic views.",
                      "6.5 Free hand sketches of isometric views.",
                      "6.6 Freehand sketching of engineering elements/components (e.g. Bolt, Nut, Washer, Stud, Screw, Simple machine parts, etc.)"
                    ]
                  }
                ]
              },
              {
                name: "Environmental Education and Sustainable Development",
                code: "2600006",
                units: [
                  {
                    title: "Unit-1.0 Ecosystem",
                    points: [
                      "1.1 Aquatic & Terrestrial ecosystem",
                      "1.2 Structure of ecosystem",
                      "1.3 Food chain & Food web",
                      "1.4 Carbon, Nitrogen, Sulphur & Phosphorous Cycle",
                      "1.5 Global warming - Causes & Effects"
                    ]
                  },
                  {
                    title: "Unit-2.0 Air & Water Pollution",
                    points: [
                      "2.1 Traditional pollution issues- Air, Water, Noise",
                      "2.2 Water pollution: 2.2.1 Sources of water pollution, 2.2.2 Effects of water pollution, 2.2.3 Control of water pollution, 2.2.4 Physical & chemical standard of domestic water as per Indian Standard",
                      "2.3 Air pollution: 2.3.1 Sources of air pollution, 2.3.2 Air pollutants, 2.3.3 Effects of air pollution on human, plant & animal, 2.3.4 Air monitoring system, 2.3.5 Air pollution control"
                    ]
                  },
                  {
                    title: "Unit-3.0 Sustainability & Renewable Sources of Energy",
                    points: [
                      "3.1 Concept of sustainable development",
                      "3.2 Renewable sources of energy for sustainable development",
                      "3.3 Solar Energy: 3.3.1 Features of solar thermal & PV system, 3.3.2 Solar pond, Solar water heater, Solar dryer and Solar stills",
                      "3.4 Wind Energy: 3.4.1 Current status & future prospects of wind energy, 3.4.2 Wind energy in India- Advantages and challenges of harnessing wind energy, 3.4.3 Environmental benefits & limitations",
                      "3.5 Biomass: 3.5.1 Types of Biomass energy sources, 3.5.2 Energy content in Biomass of different types, 3.5.3 Biogas production",
                      "3.6 Concept and advantages of hydroponics or aquaponics system to demonstrate soil less cultivation and integration of fish and plant cultivation.",
                      "3.7 Water conservation and sustainable development",
                      "3.8 New Energy Sources: Hydrogen energy, Ocean energy & Tidal energy"
                    ]
                  },
                  {
                    title: "Unit-4.0 Climate Change and Sustainable Development",
                    points: [
                      "4.1 Impact of Climate change",
                      "4.2 Factor contributing to climate change",
                      "4.3 Sustainable development Goals (SDGs)",
                      "4.4 Action Plan on Climate Change- India"
                    ]
                  },
                  {
                    title: "Unit-5.0 Environmental legislation and Sustainable Building Practices",
                    points: [
                      "5.1 Environment management system and Planning",
                      "5.2 Green Building concept",
                      "5.3 Green and sustainable building materials -5R concept",
                      "5.4 Environment protection acts, legislation and Laws",
                      "5.5 Zero carbon foot-print building for sustainable constriction."
                    ]
                  }
                ]
              }
            ];

            // Diploma Mechanical sem 3

            semesters.sem3.theory = [
              {
                name: "Manufacturing Engineering",
                code: "2425301",
                units: [
                  {
                    title: "Unit-1.0 Introduction to Manufacturing Processes",
                    points: [
                      "1.1 Classification of basic manufacturing process based on Formative, Subtractive and Additive manufacturing processes; Chipless -and Chip-removal processes, Primary and Secondary manufacturing processes; Generating & Forming processes; Conventional and Non-Conventional Manufacturing Processes",
                      "1.2 Factors which influence selection of manufacturing process for a particular application.",
                      "1.3 Recall mechanical properties of metals."
                    ]
                  },
                  {
                    title: "Unit-2.0 Casting Processes",
                    points: [
                      "2.1 Introduction to casting, advantages, and disadvantages of casting.",
                      "2.2 Pattern, types of patterns, pattern materials, pattern allowance, colour code",
                      "2.3 Moulding sand constituents and its types, properties of moulding sand, moulding sand preparation, moulding tools and moulding boxes, types of moulds-green sand mould, dry sand mould, loam sand mould",
                      "2.4 Methods of moulding, Moulding machines; Jolting - Squeezing - Sand slinger, Construction and working principle.",
                      "2.5 Cores: Essential qualities of core materials, core sand preparation, core binder, core boxes, CO2 process of core making, types of cores",
                      "2.6 Melting furnace; Blast furnace, Cupola furnace, Crucible furnace, Pit Furnace, Induction Furnace.",
                      "2.7 Casting processes: Green sand Casting, Permanent mould casting, Shell mould casting, Investment casting, Centrifugal casting,",
                      "2.8 Gating system, types of gating system, design of riser",
                      "2.9 Defects in casting: causes and remedies.",
                      "2.10 Inspection of castings: Visual inspection, pressure test, magnetic particle inspection, dye penetration inspection, Radiographic inspection, ultrasonic inspection.",
                      "2.11 Safety precautions in metal casting.",
                      "2.12 Estimation and costing of casting components."
                    ]
                  },
                  {
                    title: "Unit-3.0 Metal Forming Processes",
                    points: [
                      "3.1 Introduction, nature of plastic deformation.",
                      "3.2 Bulk and Sheet metal forming processes.",
                      "3.3 Hot working, cold working - advantages and disadvantages of hot working and cold working.",
                      "3.4 Bulk metal forming processes: Rolling, Forging (Smith forging, Drop forging, Upset forging), Extrusion, Drawing.",
                      "3.5 Press Working: Types of presses - mechanical and hydraulic presses - press tools and accessories, press working operations.",
                      "3.6 Sheet metal forming processes (Press tools operations): Shearing, Blanking-Punching, Embossing-Coining, Piercing, Trimming, Shaving, Nibbling, Notching, Lancing, Deep drawing, Spinning, Bending, Stretch forming,",
                      "3.7 Estimation and costing of metal forming components."
                    ]
                  },
                  {
                    title: "Unit-4.0 Joining Processes",
                    points: [
                      "4.1 Introduction to Joining Processes: Permanent and Temporary; Welding, Soldering, Brazing, Adhesive bonding.",
                      "4.2 Classification of welding processes, types of welded joints.",
                      "4.3 Gas welding: Oxy-acetylene welding, types of flame, Oxy-acetylene welding equipment, filler rod, Gas cutting.",
                      "4.4 Arc welding: Principle of arc creation, Arc welding equipment, electrodes, arc blow, Types of Arc welding process. Working principle, equipment, process parameters, applications of: Manual metal arc welding (flux coated electrodes), Inert-gas shielded arc welding, Tungsten inert-gas welding (TIG), Metal inert-gas arc welding (MIG), Submerged arc-welding, Plasma arc welding.",
                      "4.5 Resistance welding - Butt, Seam, Spot, Projection and Percussion.",
                      "4.6 Other welding processes: Thermit welding, Friction welding, Explosion welding, Forged welding, Friction Welding.",
                      "4.7 Brazing, soldering and Adhesive bonding.",
                      "4.8 Effects of welding heat - Heat affected zone",
                      "4.9 Weld defects and their causes.",
                      "4.10 Safety precautions in welding.",
                      "4.11 Estimation and costing of welded components"
                    ]
                  },
                  {
                    title: "Unit-5.0 Machining and Machine Tools",
                    points: [
                      "5.1 Introduction to metal cutting.",
                      "5.2 Chip formation and types of chips.",
                      "5.3 Mechanics of orthogonal metal cutting",
                      "5.4 Cutting tool material and geometry",
                      "5.5 Tool wear and tool life.",
                      "5.6 Cutting fluids, types of cutting fluids, selection of cutting fluid, method of application of cutting fluids",
                      "5.7 Machine tools: Lathe machine: introduction to lathe machine, types of lathe machine, basic parts and function, basic operations and tools.",
                      "5.8 Milling machine: introduction to milling machine, types of milling machine, basic parts and function, basic operations and tools",
                      "5.9 Hole making operation: drilling, reaming, boring, tapping.",
                      "5.10 Introduction and application of shaper, planer, slotting machine.",
                      "5.11 Introduction and application of jigs and fixtures",
                      "5.12 Estimation and costing of machining components."
                    ]
                  }
                ]
              },
              {
                name: "Material Science & Engineering",
                code: "2425302",
                units: [
                  {
                    title: "Unit-1.0 Introduction to Engineering Material",
                    points: [
                      "1.1 Classification of materials: metals, ceramics, polymers and composites, Engineering requirements of materials, relevant properties (physical, mechanical, thermal, electrical, chemical), cost; Range of applications; Material designation and standards; Ashby diagrams; Selection criteria and process",
                      "1.2 Nature of bonding in materials: metallic, ionic, covalent and mixed bonding; structure of materials: fundamentals of crystallography, symmetry operations, crystal systems, Bravais lattices, unit cells, primitive cells, crystallographic planes and directions; structures of metals, ceramics, polymers, amorphous materials and glasses.",
                      "1.3 Defects in crystalline materials- 0-D, 1-D and 2-D defects; vacancies, interstitials, solid solutions in metals and ceramics, Frenkel and Schottky defects-dislocations, grain boundaries, twins, stacking faults; surfaces and interfaces."
                    ]
                  },
                  {
                    title: "Unit-2.0 Ferrous Metal & Phase Diagram",
                    points: [
                      "2.1 Ferrous metals and its Alloys, Iron ores - Pig iron: classification, composition and effects of impurities on iron; Cast Iron: classification, composition, properties and uses; Wrought Iron: properties, uses/applications of wrought Iron; comparison of cast iron, wrought iron and mild steel and high carbon steel",
                      "2.2 Alloy Steels: purpose of alloying; effects of alloying elements - Important alloy steels: Silicon steel, High Speed Steel (HSS), heat resisting steel, spring steel, Stainless Steel (SS): types of SS, applications of SS magnet steel composition, properties and uses",
                      "2.3 Standard commercial grades of steel as per BIS and AISI",
                      "2.4 Phase diagrams- Gibbs phase rule, Degrees of Freedom, Unary phase diagram, Introduction to Binary phase diagram- Isomorphous system, Eutectic system, Eutectoid system, Iron-Carbon binary diagram, flow sheet for production of iron and steel, Application of phase diagram"
                    ]
                  },
                  {
                    title: "Unit-3.0 Non-Ferrous metal & Anti Friction Alloy",
                    points: [
                      "3.1 Non-ferrous metals and its Alloys - Properties and uses of aluminum, copper, tin, lead, zinc, magnesium and nickel; Copper alloys: Brasses, bronzes composition, properties and uses; Aluminum alloys: Duralumin, hindalium, magnalium-composition, properties and uses; Nickel alloys: Inconel, monel, nichrome composition, properties and uses",
                      "3.2 Anti-friction/Bearing alloys: Various types of bearing bronzes - Standard commercial grades as per BIS/ASME."
                    ]
                  },
                  {
                    title: "Unit-4.0 Destructive Testing and Nondestructive Testing",
                    points: [
                      "4.1 Failure analysis & Testing of Materials: Introduction to failure analysis; Fracture: ductile fracture, brittle fracture; cleavage; notch sensitivity; fatigue; endurance limit; characteristics of fatigue fracture; variables affecting fatigue life; creep; creep curve; creep fracture;",
                      "4.2 Destructive testing: Tensile testing; compression testing; Hardness testing: Brinell, Rockwell; bend test; torsion test; fatigue test; creep test.",
                      "4.3 Non-destructive testing: Visual Inspection; magnetic particle inspection; liquid penetrant test; ultrasonic inspection; radiography.",
                      "4.4 Corrosion of Metal And Alloys- Mechanism of corrosion, types of corrosion, corrosion prevention technique",
                      "4.5 Surface engineering processes: Coatings and surface treatments; Cleaning and mechanical finishing of surfaces; Organic coatings; Electroplating and Special metallic plating"
                    ]
                  },
                  {
                    title: "Unit-5.0 Advanced Material",
                    points: [
                      "5.1 Polymers - Classification and applications; Polymerization techniques",
                      "5.2 Ceramics - Oxide ceramics, ceramic insulators, bio-ceramics and Glasses",
                      "5.3 Composites - Reinforcement, matrix, metal matrix composites, ceramic composites, polymer composites",
                      "5.4 Biomaterials, optical materials, high temperature materials, energy materials, and nanomaterials",
                      "5.5 Conducting and resisting materials - types, properties and applications;",
                      "5.6 Semiconducting materials - properties and applications;",
                      "5.7 Magnetic materials - Soft and hard magnetic materials and applications",
                      "5.8 Superconductors and dielectric materials - properties and applications",
                      "5.9 Smart materials-Piezoelectric, magnetostrictive and electrostrictive materials."
                    ]
                  }
                ]
              },
              {
                name: "Strength of Materials for Mechanical Engg.",
                code: "2425303",
                units: [
                  {
                    title: "Unit-1.0 Direct Stresses and Strains in Components",
                    points: [
                      "1.1 Different types of Loads.",
                      "1.2 Mechanical properties of materials like Strength, Stiffness, Hardness, Toughness, Ductility, Malleability, Elasticity, Plasticity.",
                      "1.3 Statically Determinate structures.",
                      "1.4 Direct Stress, Linear Strain, Hook's Law, Stress-Strain curve of ferrous and non-ferrous materials, Modulus of Elasticity, Yield, Proof, Breaking and Ultimate Stress and Factor of safety.",
                      "1.5 Lateral Strain and Poisson's ratio, Relations between different Moduli.",
                      "1.6 Temperature Stresses and Strain with and without yielding.",
                      "1.7 Shear Stress, Shear Strain and Shear Modulus.",
                      "1.8 Bulk Modulus and Volumetric Strain"
                    ]
                  },
                  {
                    title: "Unit-2.0 Shear Force, Bending Moment, Slope and Deflection in Beam type Components",
                    points: [
                      "2.1 Types of Beams like Cantilever, Simply Supported and Over Hang Beams.",
                      "2.2 Relation between Shear Force and Bending Moment.",
                      "2.3 Sagging and Hogging Bending Moment and its importance.",
                      "2.4 Point of Contra flexure and its importance.",
                      "2.5 S.F and B.M Diagram for Cantilever, Simply Supported and Over Hang Beams.",
                      "2.6 Slope and Deflection in Cantilever and Simply Supported beams."
                    ]
                  },
                  {
                    title: "Unit-3.0 Bending and Shear Stresses in Beam type Components",
                    points: [
                      "3.1 Bending Theory, Flexural equation, Bending stress, Bending strain, Sectional Modulus",
                      "3.2 Neutral Axis, application of Bending theory to Statically determinate beams.",
                      "3.3 Shear stress: Average and Maximum shear stress for rectangular and circular section beams.",
                      "3.4 Short members subjected to eccentric loading."
                    ]
                  },
                  {
                    title: "Unit-4.0 Torsion of Shaft",
                    points: [
                      "4.1 Torsion/Twisting Moment, Torsional Equation, Angle of Twist, Polar Moment of Inertia, Torsional Rigidity.",
                      "4.2 Torsional Stress and Strain in solid and hollow shafts. Comparison between Solid and Hollow Shafts subjected to pure torsion.",
                      "4.3 Power Transmitted/Consumed for shaft, spindle and axle of solid and hollow sections subjected to Twisting Moment."
                    ]
                  },
                  {
                    title: "Unit-5.0 Stresses and Deflection in Helical Springs",
                    points: [
                      "5.1 Definition, types and application of springs.",
                      "5.2 Spring classification based on size, shape and load-leaf spring, helical and spiral spring.",
                      "5.3 Stiffness, deflection and maximum stress in helical open and closed coil springs only."
                    ]
                  },
                  {
                    title: "Unit-6.0 Thin Cylindrical and Spherical Pressure Vessels",
                    points: [
                      "6.1 Pressure Vessels.",
                      "6.2 Thin cylinders and spheres subjected to internal pressure; Hoop stresses, longitudinal stress and change in volume.",
                      "6.3 Wire bound thin Cylindrical pressure vessels."
                    ]
                  },
                  {
                    title: "Unit-7.0 Principal Stresses",
                    points: [
                      "7.1 Multi load situations and need of estimating principal stresses.",
                      "7.2 Definition of principal plane and principal stresses.",
                      "7.3 Expression for normal and tangential stress, maximum shear stress.",
                      "7.4 Stresses on inclined planes.",
                      "7.5 Position of principal planes and planes of maximum shear.",
                      "7.6 Graphical solution using Mohr's circle of Stresses."
                    ]
                  }
                ]
              },
              {
                name: "Basic Thermodynamics",
                code: "2425304",
                units: [
                  {
                    title: "Unit-1.0 Fundamental Concepts of Thermodynamics",
                    points: [
                      "1.1 Thermodynamics: Terminology, definition and scope, microscopic and macroscopic approaches, Basic concepts of - State, state point, System, Boundary and Surroundings,",
                      "1.2 Identification of a state through properties: Thermodynamic properties, their units and classifications, intensive and extensive various property diagrams, Mechanics definition of work and its limitations, Heat and work, Work done, sign convention, change in internal energy, change in enthalpy and entropy, Specific heats at constant volume and at constant pressure.",
                      "1.3 Thermodynamic processes of ideal gases: Isobaric, Isochoric, Isothermal, Adiabatic and polytropic with representation on P-V and T-S diagram.",
                      "1.4 General gas equation, Characteristics of gas constant, Mol of gas, Universal gas constant, specific heats of ideal gases.",
                      "1.5 Thermodynamic equilibrium, Reversibility and irreversibility, Quasi-static process"
                    ]
                  },
                  {
                    title: "Unit-2.0 Law of Thermodynamics",
                    points: [
                      "2.1 Zeroth and first law of thermodynamics, Statement of the First law of thermodynamics for a cycle, Steady flow energy equation and their application.",
                      "2.2 Derivation of the First law of processes, energy, internal energy as a property",
                      "2.3 Concept of heat source and heat sink, heat reservoir, heat engine, heat pump and refrigerator",
                      "2.4 Statement of the second law of thermodynamics: Kelvin Planck Statement, Clausius Statement and their equivalence, heat engine, heat pump, refrigerator and simple numerical on thermal efficiency and COP.",
                      "2.5 Statement of the third law of thermodynamic"
                    ]
                  },
                  {
                    title: "Unit-3.0 Thermodynamic Cycles",
                    points: [
                      "3.1 Classifications of thermodynamic cycle.",
                      "3.2 Carnot cycle and its representation on P-V and T-S diagram.",
                      "3.3 Derivation of thermal efficiency of Carnot cycle and simple numerical based on it.",
                      "3.4 Concept of air standard efficiency of Otto, Diesel, and Brayton cycle (Without derivation), representation on P-V & T-S diagram."
                    ]
                  },
                  {
                    title: "Unit-4.0 Properties of Steam and Steam Power",
                    points: [
                      "4.1 Formation of steam, various phases like wet steam, dry saturated Steam, superheated steam.",
                      "4.2 Dryness fraction, degree of superheat, sensible heat, Latent heat, calculation of enthalpy of wet, dry saturated & superheated steam using steam table.",
                      "4.3 Steam boilers: Classification, Construction and working of Cochran, Babcock and Wilcox, Lamont and Loeffler boiler. Mountings - Bourdon Pressure Gauge, Safety valves, Water level Indicator and fusible Plug. Accessories - Economizer, super heater and air pre-heater."
                    ]
                  },
                  {
                    title: "Unit-5.0 Pure Substances, Ideal & Real Gases",
                    points: [
                      "5.1 Ideal and perfect gases: Differences between perfect, ideal and real gases, equation of state, evaluation of properties of perfect and ideal gases.",
                      "5.2 Real Gases: Introduction. Vander Waal's Equation of state, Van der Waal's constants in terms of critical properties, law of corresponding states, compressibility factor, compressibility chart",
                      "5.3 Pure Substances: Definition of a pure substance, phase of a substance, triple point and critical points, sub-cooled liquid, saturated liquid, vapor pressure, two-phase mixture of liquid and vapor, saturated vapor and superheated vapor states of a pure substance",
                      "5.4 Representation of pure substance properties on p-T and p-V diagrams, detailed treatment of properties of steam for industrial and scientific use"
                    ]
                  }
                ]
              },
              {
                name: "Computer Aided Drafting and Modeling",
                code: "2425305",
                units: [
                  {
                    title: "Unit-1.0 Basic Computer Aided Drafting",
                    points: [
                      "1.1 Various Software for Computer Aided Drafting and Computer Aided Design.",
                      "1.2 Basics of AutoCAD or any other drafting software-interface, screen layout, starting commands from menus, command line.",
                      "1.3 Coordinate system, Angular measurements, Point specification.",
                      "1.4 Drawing aids - Grid, Snap, Ortho, Osnap, Units, Limits, Layers, Linetype.",
                      "1.5 Opening and Saving drawing files.",
                      "1.6 Creating User Defined Templates.",
                      "1.7 Methods of Selecting and deleting Objects.",
                      "1.8 Undo and Redo.",
                      "1.9 Creating basic drawings objects - lines, arc, circles, ellipses, polyline and polygons."
                    ]
                  },
                  {
                    title: "Unit-2.0 Advanced Computer Aided Drafting",
                    points: [
                      "2.1 Modify 2D entities: Erase, Trim, Extend, Copy, Move, Mirror, Offset, Fillet, Chamfer, Array, Rotate, Scale, Lengthen, Stretch, Break, Divide, Exploded and Block, Hatch etc.",
                      "2.2 Text and Dimensioning, Dimensional tolerances and Geometrical tolerances.",
                      "2.3 Formatting commands - Line weight, Color, Line type, Dimension style.",
                      "2.4 Controlling Drawing display.",
                      "2.5 Layers: concept and application.",
                      "2.6 Printing and plotting of drawings - Paper space, Model space, creating table, Plot commands."
                    ]
                  },
                  {
                    title: "Unit-3.0 Application of Computer Aided Drafting",
                    points: [
                      "3.1 Drawing orthographic views using drafting software with principles mentioned in 'Engineering Drawing' Course.",
                      "3.2 Drawing isometric views using drafting software with principles mentioned in 'Engineering Drawing' Course."
                    ]
                  },
                  {
                    title: "Unit-4.0 Computer Aided Design Software - Working in 2D Environment",
                    points: [
                      "4.1 Introduction, features, and applications of different software packages used for solid modeling. System requirement & compatibility with other software.",
                      "4.2 Working in Sketcher mode - Line, Profile, Circle, Arc, curves, Rectangle, and their sub options.",
                      "4.3 Constraints - Dimensioning constraint, Geometrical constraint."
                    ]
                  },
                  {
                    title: "Unit-5.0 Computer Aided Design Software - Solid Modeling and Assembly",
                    points: [
                      "5.1 Introduction to Computer Aided Design Software and different modules.",
                      "5.2 Working in 3D environment",
                      "5.3 Creating 3D Solid Models of simple and complex machine parts using Extrude, Revolve, Sweep, variable section sweep, Draft, loft, Blend, creating reference planes, points and lines, and similar 3D commands.",
                      "5.4 Part editing tool: Trim, Extend, Erase, Mirror, Chamfer, Round, Copy, Move, Draft, Boolean operations, Patterns, etc.",
                      "5.5 Parametric and non parametric modeling - concept, differences and illustration.",
                      "5.6 Preparation of assemblies using assembly commands. Introduction to Top down and Bottom-up approach of assembly",
                      "5.7 Exploded view: Explode the assembly."
                    ]
                  },
                  {
                    title: "Unit-6.0 Drafting and Plotting using Computer Aided Design Software",
                    points: [
                      "6.1 Generate orthographic projections from already available Part Models and Assemblies. All types of views - front view, top view, side view, sectional views, isometric views, auxiliary views.",
                      "6.2 Dimensioning Commands - Apply dimensions, dimensional and geometrical tolerances.",
                      "6.3 Preparation of Assembly drawing using assembly features.",
                      "6.4 Working in Drafting Mode.",
                      "6.5 Bill of material - Prepare part list table and name plate.",
                      "6.6 Page set up, Plot command."
                    ]
                  }
                ]
              },
              {
                name: "Indian Constitution",
                code: "2400207",
                units: [
                  {
                    title: "Unit-1.0 Constitution and Preamble",
                    points: [
                      "1.1 Meaning of the constitution of India.",
                      "1.2 Historical perspective of the Constitution of India.",
                      "1.3 Salient features and characteristics of the Constitution of India.",
                      "1.4 Preamble to the Constitution of India."
                    ]
                  },
                  {
                    title: "Unit-2.0 Fundamental Rights and Directive Principles",
                    points: [
                      "2.1 Fundamental Rights under Part-III.",
                      "2.2 Fundamental duties and their significance.",
                      "2.3 Relevance of Directive Principles of State Policy under part-IV."
                    ]
                  },
                  {
                    title: "Unit-3.0 Governance and Amendments",
                    points: [
                      "3.1 Amendment of the Constitutional Powers and Procedure",
                      "3.2 Major Constitutional Amendment procedure - 42nd, 44th, 74th, 76th, 86th and 91st"
                    ]
                  }
                ]
              },
              {
                name: "Essence of Indian Knowledge System and Tradition",
                code: "2400108",
                units: [
                  {
                    title: "Unit-1.0 Introduction to Indian Knowledge Systems",
                    points: [
                      "1.1 Overview of IKS",
                      "1.2 Organization of IKS - चतुर्दश-विद्यास्थानं",
                      "1.3 Conception and Constitution of Knowledge in Indian Tradition",
                      "1.4 The Oral Tradition",
                      "1.5 Models and Strategies of IKS"
                    ]
                  },
                  {
                    title: "Unit-2.0 Overview of IKS Domains and Relevance in Current Technical Education System",
                    points: [
                      "2.1 The Vedas as the basis of IKS",
                      "2.2 Overview of all the six Vedāngas",
                      "2.3 Relevance of following IKS domains in present Technical Education System: Arthashastra (Indian economics and political systems), Ganita and Jyamiti (Indian Mathematics, Astronomy and Geometry), Rasayana (Indian Chemical Sciences), Ayurveda (Indian Biological Sciences / Diet & Nutrition), Jyotish Vidya (Observational astronomy and calendar systems), Prakriti Vidya (Indian system of Terrestrial/ Material Sciences/ Ecology and Atmospheric Sciences), Vastu Vidya (Indian system of Aesthetics- Iconography and built-environment /Architecture), Nyaya Shastra (Indian systems of Social Ethics, Logic and Law), Shilpa and Natya Shastra (Indian Classical Arts: Performing and Fine Arts), Sankhya and Yoga Darshna (Indian psychology, Yoga and consciousness studies), Vrikshayurveda (Plant Science / Sustainable agriculture/food preservation methods)"
                    ]
                  }
                ]
              },
              {
                name: "Community/Society Development",
                code: "2400110",
                units: [
                  {
                    title: "Unit-1.0 Community and Society Development Framework",
                    points: [
                      "1.1 Concept of Community/Society Development",
                      "1.2 Difference between Rural and Urban Societies",
                      "1.3 Characteristics of Underdevelopment and development",
                      "1.4 Components of Community Development"
                    ]
                  },
                  {
                    title: "Unit-2 Community Development Initiatives",
                    points: [
                      "2.1 Community Development Programmes in India-Historical perspective",
                      "2.2 Institutions Engaged in Community Development Programmes",
                      "2.3 Contemporary Community Development Initiatives.",
                      "2.4 Sustainable Community Development"
                    ]
                  },
                  {
                    title: "Unit-3.0 Community Development Schemes",
                    points: [
                      "3.1 Role of polytechnics in Community development.",
                      "3.2 Scheme of Community Development through Polytechnics",
                      "3.3 Unnat Bharat Abhiyan"
                    ]
                  }
                ]
              },

              {
                name: "Summer Internship - I",
                code: "2418306",
                units: [
                  {
                    title: "Internship after 2nd Semester for all branches",
                    points: [
                      "Diploma students are required to give exposure of their own diploma programme related industrialhardware, software and practices,",
                    ]
                  },
                ]
              },
            ];

            // Diploma Mechanical sem 5

            semesters.sem5.theory = [
              {
                name: "Industrial Engineering & Management",
                code: "2425501",
                units: [
                  {
                    title: "Unit1.0 -Industrial Engineering",
                    points: [
                      "1.1 Need, role and benefits of Industrial Engineering",
                      "1.2 Principles of Industrial Engineering and its Historical developments",
                      "1.3 Industrial Functions-Design, Procurement, production, operation, installation, inspection, maintenance, marketing, etc.",
                      "1.4 Types of Industries/Business units",
                      "1.5 Plant layout and its types, Site selection",
                      "1.6 Industrial Acts & Taxes: Salient features of various acts pertaining to industry- The Factories Act 1948. Industrial Disputes Act 1947. The Workmen's Compensation Act 1923/1956."
                    ]
                  },
                  {
                    title: "Unit-2.0 Work and Method Study",
                    points: [
                      "2.1 Productivity; Standard of living; Method of improving Productivity: Objectives",
                      "2.2 Method Study: Definition; Objectives; Selection of a job for Method study; Basic procedure and tools to conduct Method study",
                      "2.3 Operation process chart; Flow process chart; Two handed process chart; Man Machine chart",
                      "2.4 String diagram and flow diagram.",
                      "2.5 Work Measurement: Definition: Basic procedure in making a time study",
                      "2.6 Calculation of standard time; Basic concept of Production study; Techniques of Work Measurement"
                    ]
                  },
                  {
                    title: "Unit-3.0 Production Planning and Control",
                    points: [
                      "3.1 Introduction; Major functions of Production Planning and Control",
                      "3.2 Forecasting and Methods of forecasting: Qualitative Methods and Quantitative Methods- moving average and exponential smoothing only (Related simple numerical);",
                      "3.3 Routing and Scheduling; Dispatching and Controlling",
                      "3.4 Concept of Critical Path Method (CPM) and PERT; Simple related numericals",
                      "3.5 Types of Production: Mass Production, Batch Production and Job Order Production: Characteristics",
                      "3.6 Principles of Product Planning and Process Planning;",
                      "3.7 Quality Control: Definition; Objectives; Types of Inspection: First piece, Floor and Centralized Inspection; Advantages and Disadvantages; Statistical Quality Control; Concept of ISO 9001:2008, Quality Management System, Registration/Certification procedure; Benefits of ISO to the organization"
                    ]
                  },
                  {
                    title: "Unit-4.0 Industrial Management",
                    points: [
                      "4.1 Concept of Management and its functions, Organization and Organizational Structure (organization chart of Govt. deptt., Industrial undertakings, private industries, etc.)",
                      "4.2 F.W. Taylor's and Henry Fayol's Principles of Management; Functions of Supervisor/Manager",
                      "4.3 Team Working and Leadership: Styles of Leadership; Qualities of a good leader; Motivation; Positive and Negative Motivation",
                      "4.4 Modern Management Techniques; Just in Time; Total Quality Management (TQM); Quality circle; Zero defect concept; 5S Concept",
                      "4.5 Human Resource Management (HRM): Objectives and Responsibility of HRMS; Selection Procedure; Training of Workers- Apprentice Training; On the Job training;",
                      "4.6 Wages and Salary; Component of Wages, Types of wages, Payment of Wages",
                      "4.7 Depreciation: Meaning of depreciation, Methods of calculating depreciation charges, obsolescence - definition and reasons.",
                      "4.8 Replacement economy: Reasons for replacement, installation and removal costs."
                    ]
                  },
                  {
                    title: "Unit-5.0 Material Management and Industrial Safety",
                    points: [
                      "5.1 Material Management Introduction: Purpose. Functions of material Management, Cost Accounting- Introduction & necessity, elements of cost - direct and indirect, variable and fixed, prime cost, overhead cost, total cost, marginal costing, break-even analysis.",
                      "5.2 Purchase: Purchase Procedures, reordering cycle system, base stock and lead-time, inventory valuation, Economic order quantity (EOQ)",
                      "5.3 Store Management: stores procedures, layouts, safety provisions, inventory control techniques- ABC, VED, FIFO, and LIFO systems. Introduction to Material handling and material handling equipment",
                      "5.4 Industrial Hygiene: Methods of achieving industrial hygiene.",
                      "5.5 Industrial safety: Safety awareness of employees, use of various safety devices, responsibilities of employees and employer towards safety.",
                      "5.6 Accident: Causes and Cost of an Accident, Accident Proneness, Prevention of Accidents",
                      "5.7 Industrial waste control: Types of industrial waste, problem of disposal, waste control programme, recycling and power of waste."
                    ]
                  }
                ]
              },
              {
                name: "Industrial Automation & Mechatronics",
                code: "2425502",
                units: [
                  {
                    title: "Unit-1.0 Introduction to Industrial Automation",
                    points: [
                      "1.1 Introduction to Industry 4.0 and its components, Issues and challenges in automation, Advantage & Disadvantage",
                      "1.2 Need of automation in industries, Principles and strategies of automation, factory automation, process automation",
                      "1.3 Basic elements of an automated system, Structure of Industrial Automation Advanced automation functions, Levels of automations",
                      "1.4 Industrial control Systems- Process and Discrete system",
                      "1.5 Types of automation system: Fixed, Programmable, Flexible Integrated Automation and its application",
                      "1.6 Different systems used for Industrial automation: PLC, HMI, SCADA, DCS, Drives.",
                      "1.7 Introduction to Internet of Things (IoT) and Industrial Internet of Things (IIOT) and its application in Automation.",
                      "1.8 Role of robots in automation and its components"
                    ]
                  },
                  {
                    title: "Unit-2.0 Introduction to Mechatronics Systems",
                    points: [
                      "2.1 Definition and concepts of Mechatronics, Need and Role of Mechatronics in Design, manufacturing and Factory Automation.",
                      "2.2 Mechatronics Systems, classification and history of mechatronics system, Mechatronics system architecture and components",
                      "2.3 Basic system models - mechanical system building blocks - translational and rotational system, electrical system building blocks, electro mechanical systems - system components and functions",
                      "2.4 Introduction to real time mechatronics system-block diagram and functions, real time mechatronics system, Mechatronic Control in Automated Manufacturing, flexible manufacturing systems, Integrated Product Design",
                      "2.5 Application of Mechatronics"
                    ]
                  },
                  {
                    title: "Unit-3.0 Hardware Components- Sensors, Actuators and Input Device",
                    points: [
                      "3.1 Sensors concept, classification, Development in Transducer technology, General Characteristics of Sensor",
                      "3.2 Types: Principle/working, ratings/specifications, cost, and applications of: Temperature- Thermistor, Thermocouple and Resistance temperature Detector (RTD); Pressure sensors- Linear Variable Differential Transformer (LVDT); Liquid level sensor - Capacitive and Ultrasonic; Force-Strain/Weight sensors; Flow sensors - turbine flow sensor; Acceleration sensor- Accelerometer; Angular and linear position sensor; Proximity sensors- Inductive, Capacitive, Optical and ultrasonic; Smoke Sensors, IR, Opto-Electronics-Shaft encoders, CD Sensors, Vision System",
                      "3.3 Sensors for conditioning Monitoring, Micro sensors in Mechatronics",
                      "3.4 Drives and Actuators: Introduction to actuators, Actuator Concept, Relay as an actuator Classification of actuators",
                      "3.5 Mechanical actuators - Translational and rotational motion, kinematic chains, cams, gears, belt and chain drives, bearings",
                      "3.6 Hydraulic and Pneumatic actuators- linear and rotary actuators, single and double acting cylinder, directional, process and pressure control valves",
                      "3.7 Electrical actuators: Electromechanical actuators construction, working and application of Stepper motors, AC/DC Servo motors, BLDC Motor (Very brief); Electrohydraulic actuators- Construction, working and application of Electro-hydrostatic actuator (EHA), ON/OFF Electro-hydraulic Rotary Actuator, Control Valve Rotary Actuator, Solenoid valve",
                      "3.8 Input device: Analog input devices-Electromagnetic relays, Contactors, Motor starters",
                      "3.9 Manually operated Switches: Toggle switch, pushbutton switch, knife switch and selector switches",
                      "3.10 Mechanically operated switches: Limit switch, Temperature switch (Thermostat), Pressure switch, Level switch and their symbols",
                      "3.11 Discrete/Digital Input device"
                    ]
                  },
                  {
                    title: "Unit-4.0 Industrial Control System",
                    points: [
                      "4.1 Block diagram of a basic control system",
                      "4.2 Types of control-On-off, Feed forward, Open loop and closed loop control and Transfer function",
                      "4.3 Types of Industrial Control Systems: Industrial automation and controls (IACS), Distributed control systems (DCS), Data collection system (DCS), Human machine interface (HMI), Intelligent electronic devices (IED), Programmable automation systems (PAS), Programmable automation controllers (PAC), Programmable logic controllers (PLC), Remote terminal units (RTU), Supervisory control and data acquisition (SCADA)",
                      "4.4 Control Requirements.",
                      "4.5 PLC Working Principle with Block Diagram",
                      "4.6 SCADA Working Principle with Block Diagram",
                      "4.7 Different types of inputs-step and ramp",
                      "4.8 Controllers in closed loop control: Proportional Controller (P Controller), Integral Controller (I Controller), Derivative controller (D- Controller), P-I Controller, P-D Controller, PID Controller"
                    ]
                  },
                  {
                    title: "Unit-5.0 PLC and Communication System",
                    points: [
                      "5.1 Introduction to PLC, evolution of PLC, Types of PLC - Fixed, Modular and their types",
                      "5.2 Building blocks of PLC - CPU, Memory organization, Input-Output modules (Discrete and Analog) Specialty I/O Modules, Power supply",
                      "5.3 PLC programming languages with simple examples: Functional Block Diagram (FBD), Instruction List, Structured text, Sequential Function Chart (SFC), Ladder Programming",
                      "5.4 PLC I/O addressing in ladder logic",
                      "5.5 Simple programming example using ladder logic: Traffic light control, Elevator control, Motor sequencing control, Tank level control, temperature control, Conveyor system control",
                      "5.6 Industrial communication System: Analog and Digital Communications on Plant Floors",
                      "5.7 Industrial Networking",
                      "5.8 RS232-422-485 standards for data communication",
                      "5.9 Industrial Ethernet, Concept of Fieldbus, MODBUS protocol",
                      "5.10 Highway Addressable Remote Transducer (HART) Protocol"
                    ]
                  }
                ]
              },
              {
                name: "Hybrid Automobile Engineering",
                code: "2425503",
                units: [
                  {
                    title: "Unit-1.0 Introduction to Hybrid Vehicle & Electric Vehicle",
                    points: [
                      "1.1 A brief history of Electric and Hybrid vehicles",
                      "1.2 Basic architecture of hybrid drive train and analysis of series drive train vehicle motion and the dynamic equations for the vehicle",
                      "1.3 Types of Electric vehicle and hybrid vehicle, advantages over conventional vehicles limitations of Electric vehicle and hybrid vehicle",
                      "1.4 Economic and environmental impact of Electric vehicle and hybrid vehicle",
                      "1.5 Disposal of battery, cell and hazardous material and their impact on environment.",
                      "1.6 Conventional Vehicles: Basics of vehicle performance, vehicle power source characterization, transmission characteristics, and mathematical models to describe vehicle performance."
                    ]
                  },
                  {
                    title: "Unit-2.0 DC and AC Machines & Drives in EV & HV",
                    points: [
                      "2.1 Types of Motors, selection and sizing of Motor",
                      "2.2 RPM and Torque calculation of motor",
                      "2.3 Motor Controllers and Component sizing, Physical locations",
                      "2.4 Mechanical and electrical connection of motor",
                      "2.5 Induction motor drives and control characteristics",
                      "2.6 Permanent magnet motor drives and characteristics",
                      "2.7 Brushed & Brushless DC motor drive and characteristics",
                      "2.8 Switched reluctance motors and Characteristics",
                      "2.9 IPM motor drives and characteristics"
                    ]
                  },
                  {
                    title: "Unit-3.0 Hybrid Vehicle Architecture Design and Control unit",
                    points: [
                      "3.1 Types of Electric Vehicle and components",
                      "3.2 Electrical protection and system requirement",
                      "3.3 Photovoltaic solar based EV design",
                      "3.4 Battery Electric vehicle (BEV)",
                      "3.5 Hybrid electric vehicle (HEV)",
                      "3.6 Plug-in hybrid vehicle (PHEV)",
                      "3.7 Fuel cell electric vehicle (FCEV)",
                      "3.8 Electrification Level of EV",
                      "3.9 Comparison of fuel vs Electric and solar power",
                      "3.10 Solar Power operated Electric vehicles",
                      "3.11 Control unit - Function of CU, Development Process, Software, Hardware, Data Management"
                    ]
                  },
                  {
                    title: "Unit-4.0 Grid Interconnection and Charging Station",
                    points: [
                      "4.1 Introduction to smart charging: Grid to vehicle and vehicle to grid",
                      "4.2 Smart metering and ancillary services, vehicle to vehicle and vehicle to personal communication systems",
                      "4.3 Introduction to battery charging stations and its installation and commissioning,",
                      "4.4 Type of charging station, components of charging station",
                      "4.5 Selection and Sizing of charging station",
                      "4.6 Estimation on station capacity and associated technical issues,",
                      "4.7 Different connectors, policy regulations and standards for EV and HV, BEE standards, Indian and Global scenario, case studies"
                    ]
                  },
                  {
                    title: "Unit-5.0 Energy Storage and Battery Management System (BMS)",
                    points: [
                      "5.1 Power and Energy management strategies and its general architecture of EV and HV",
                      "5.2 Cell Types (Lead Acid/Li/NiMH)",
                      "5.3 Battery charging and discharging calculation",
                      "5.4 Cell Selection and sizing, Battery lay outing design",
                      "5.5 Battery Pack configuration and construction",
                      "5.6 Need of BMS, Rule based control and optimization-based control",
                      "5.7 Software-based high-level supervisory control",
                      "5.8 Mode of power, behaviour of motor, advance Features",
                      "5.9 Hybridization of various energy storage devices, Selection of the energy storage technology."
                    ]
                  }
                ]
              },
              {
                name: "Open Elective | Electric Vehicle (Basic)",
                code: "2400504G",
                units: [
                  {
                    title: "Unit-1.0 Introduction to Electric Vehicle",
                    points: [
                      "1.1 Review of Conventional Vehicle Engine System, Electric Vehicle (EV), The necessity of Electric Vehicle",
                      "1.2 Types of Electric Vehicles: Plug-in hybrid, Battery electric vehicle, Hybrid electric vehicle, Fuel Cell Electric Vehicle",
                      "1.3 Advantages of Electric Vehicles",
                      "1.4 Electric Vehicle Components: Motor, Motor Controller, Battery, Battery Management System, and Charging System."
                    ]
                  },
                  {
                    title: "Unit-2.0 Electric Motors used in EVs",
                    points: [
                      "2.1 Electric Motors for EV applications: General Characteristics of motors",
                      "2.2 Types of Motors: DC, Brushless DC, Induction, Permanent Magnet Synchronous Motors, Switched Reluctance Motors",
                      "2.3 Rating of Motors, Selection Criteria, Physical Location",
                      "2.4 Connection of Motors: Mechanical Connections and Electrical Connections"
                    ]
                  },
                  {
                    title: "Unit-3.0 EV Batteries and Energy Storages",
                    points: [
                      "3.1 Types of Batteries: Lead Acid, Nickel Based, Lithium Based",
                      "3.2 Battery Parameters, Charging (AC) and Discharging (DC) Process",
                      "3.3 Lithium Ion Batteries, Fuel Cells, Fuel Cell Storage System",
                      "3.4 Battery Condition Monitoring, Battery Management System (BMS), Need of BMS, Block Diagram of BMS",
                      "3.5 Battery Disposal and Recycling"
                    ]
                  },
                  {
                    title: "Unit-4.0 EV Charging Systems",
                    points: [
                      "4.1 Power electronics in EV, Power electronics components, Rectifiers",
                      "4.2 DC to DC Converter, DC to AC Converter",
                      "4.3 Charging System, Types of charging Systems",
                      "4.4 Components of Charging Systems, Single line Diagram of Charging System"
                    ]
                  },
                  {
                    title: "Unit- 5.0 Regulatory Requirements and Policies for EV Industry",
                    points: [
                      "5.1 Rules and Regulations set by the Indian government for the designer/manufacturer of EVs.",
                      "5.2 Policies in India, Global Policies for E- Vehicles.",
                      "5.3 Carbon Footprint Issues"
                    ]
                  }
                ]
              },
              {
                name: "Entrepreneurship Development & Start-ups ",
                code: "2400505",
                units: [
                  {
                    title: "Unit-1.0 Introduction to Electric Vehicle",
                    points: [
                      "1.1Demonstrate traits of a successful intrapreneur/ entrepreneur/ start-up co-founder.",
                      "1.2Innovate products and services using creativity and innovation techniques.",
                      "1.3 Manage critical resources from support institutions.",
                      "1.4 Prepare sustainable small business plans. "
                    ]
                  },
                ]
              },
              {
                name: "Summer Internship - II",
                code: "2418305",
                units: [
                  {
                    title: "(After 4th Sem) / Industrial Training / Common for all programmes)",
                    points: [
                      "Diploma students are required to give exposure of their own diploma programme related industrialhardware, software and practices,",
                    ]
                  },
                ]
              },
            ];

            return semesters;
          })()
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
