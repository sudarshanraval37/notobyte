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



    // Diploma Syllabus


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

            // Diploma cse sem 1

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
                    title: "After completion of the course, the students will be able to",
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

            // Diploma CSE sem 6

            semesters.sem6.theory = [
              {
                name: "Cloud Computing",
                code: "2418601",
                units: [
                  {
                    title: "Unit1.0 -Introduction to Cloud Computing",
                    points: [
                      "1.1 Definition and evolution of Cloud Computing and Cloud -Enabling Technologies,",
                      "1.2 Service and Deployment Models",
                      "1.3 Popular Cloud Stacks (commercial/paid and open sourced) and Use Cases",
                      "1.4 Benefits, Risks, and Challenges of Cloud Computing",
                      "1.5 Economic Models and SLA"
                    ]
                  },
                  {
                    title: "Unit-2.0 Cloud Infrastructure",
                    points: [
                      "2.1 Historical Perspective of Data Centers",
                      "2.2 Datacenter Components: IT Equipment and Facilities",
                      "2.3 Design Considerations: Networking, Requirements, Power, Efficiency, & Redundancy",
                      "2.4 Power Calculations, PUE and Challenges in Cloud Data Centers",
                      "2.5 Cloud Management and Cloud Software Deployment Considerations"
                    ]
                  },
                  {
                    title: "Unit-3.0 Introduction to Virtualization",
                    points: [
                      "3.1 Definition and basic concepts of virtualization.",
                      "3.2 Understanding the need for virtualization in IT environments.",
                      "3.3 Types of Virtualizations: Full virtualization vs. para-virtualization, Hardware virtualization vs. software virtualization.",
                      "3.4 Hypervisors: Types of hypervisors: Type 1 (bare-metal) and Type 2 (hosted), Role of Hypervisor, Popular hypervisors: VMware, Xen.",
                      "3.5 Virtual Machines (VMs): Creating, configuring, and managing virtual machines, Understanding VM snapshots and cloning.",
                      "3.6 Storage Virtualization: Virtualized storage concepts, Understanding storage virtualization technologies and methods."
                    ]
                  },
                  {
                    title: "Unit-4.0 Cloud Storage",
                    points: [
                      "4.1 Introduction to Storage Systems",
                      "4.2 Cloud Storage Concepts",
                      "4.3 Cloud Databases (MongoDB)",
                      "4.4 Cloud Object Storage (Amazon S3, OpenStack Swift, Google Cloud Storage object: cold line)"
                    ]
                  },
                  {
                    title: "Unit-5.0 Security in Cloud Computing",
                    points: [
                      "5.1 Cloud Security Fundamentals",
                      "5.2 Cloud Risk, Cloud Risk division: Policy and Organizational Risks, Technical Risks, Legal Risks",
                      "5.3 Technologies for Data Security risk.",
                      "5.4 Digital identity and access management,",
                      "5.5 Content level security",
                      "5.6 Security-AS-A-Cloud Service"
                    ]
                  }
                ]
              },
              {
                name: "Computer Network with Linux and Windows",
                code: "2418602",
                units: [
                  {
                    title: "Unit-1.0 Introduction to Computer Networks",
                    points: [
                      "1.1 Introduction to Computer Networks, Advantages of Computer Networks, Types of Computer Networks",
                      "1.2 Basic Network services: File sharing, device sharing, Internet Connection Sharing",
                      "1.3 Network Communication Models: OSI Reference Model and function of each layer, TCP/IP Model, and mapping of OSI layers with TC/IP model",
                      "1.4 Network Topologies: Bus Topology, Ring Topology, Star Topology, Mesh Topology, Tree Topology"
                    ]
                  },
                  {
                    title: "Unit-2.0 Transmission media, mode, and Network Device:",
                    points: [
                      "2.1 Wired Media - Coaxial, UTP, STP, Fiber Optic Cables",
                      "2.2 Wireless Media- Electromagnetic spectrum, Radio Transmission, Microwave Transmission, Infrared Transmission, Satellite Communication",
                      "2.3 Mode of Communication: Simplex, Half Duplex, Full Duplex",
                      "2.4 Network connecting Devices: Network Interface Cards (NICs), Modem, Switches- Layer2 and Layer3, Routers, Gateways, RJ45 & RJ11 connectors",
                      "2.5 Concept of Firewall and its use in Networking"
                    ]
                  },
                  {
                    title: "Unit-3.0 Network Computing Models and Network Layer",
                    points: [
                      "3.1 Network Computing Models: Architecture and functionality of Client-server, peer-to-peer, distributed computing",
                      "3.2 Internet Protocol: Logical Addressing, IPv4 Address, Address Space, Notations, Classful Addressing: Net-id, Host-id, Subnet Mask, Subnetting, Classless Addressing: Super netting, Network Address Translation (NAT), Introduction to IPv6 Address, Role and functions of network gateways",
                      "3.3 Address Mapping, Error Reporting"
                    ]
                  },
                  {
                    title: "Unit-4.0 Networking with Linux",
                    points: [
                      "4.1 Configuring IP addresses manually and through DHCP on a Linux system.",
                      "4.2 Configure network interfaces/devices/links, Configuration of different network services/protocols: Domain Name System (DNS), Dynamic Host Configuration Protocol (DHCP), File Transfer Protocol (FTP), web server for hosting websites, Hypertext Transfer Protocol (HTTP)",
                      "4.3 Network Interface Bonding",
                      "4.4 Internetworking on Linux Systems: Bridging",
                      "4.5 Remote Access",
                      "4.6 Network troubleshooting tool"
                    ]
                  },
                  {
                    title: "Unit-5.0 Networking with Windows",
                    points: [
                      "5.1 Network Configuration",
                      "5.2 Configuration of different network services: Domain Name System (DNS), Dynamic Host Configuration Protocol (DHCP), File Transfer Protocol (FTP), web server for hosting websites, Hypertext Transfer Protocol (HTTP)",
                      "5.3 Network Security",
                      "5.4 Remote Access",
                      "5.5 Network Troubleshooting"
                    ]
                  }
                ]
              },
              {
                name: "Programme Electives | Introduction to Machine Learning",
                code: "2418603A",
                units: [
                  {
                    title: "Unit-1.0 Introduction to Machine Learning (ML)",
                    points: [
                      "1.1 Overview of Artificial Intelligence (AI): Introduction to ML, Relationship between AI & ML, Difference between AI & ML",
                      "1.2 Datasets: Type of datasets, Text Datasets, Image Datasets, Time Series Datasets, Spatial Datasets, Graph Datasets",
                      "1.3 Preprocessing and normalization: Data Cleaning, Data Transformation, Feature Encoding, Dimensionality Reduction, Feature Selection, Data Normalization",
                      "1.4 Dataset division: test, train, and validation sets, Cross-validation."
                    ]
                  },
                  {
                    title: "Unit-2.0 Fundamental Elements of Machine Learning",
                    points: [
                      "2.1 Applications of Machine Learning, processes involved in Machine Learning.",
                      "2.2 Machine Learning Techniques: Supervised Learning, Unsupervised Learning, Reinforcement Learning",
                      "2.3 Real life examples of Machine Learning."
                    ]
                  },
                  {
                    title: "Unit-3.0 Supervised Learning",
                    points: [
                      "3.1 Classification and Regression, K-Nearest Neighbor, Linear Regression, Logistic Regression",
                      "3.2 Evaluation Measures: Sum of squares error (SSE), Mean squares error (MME), R-square, confusion matrix, precision, recall, F-Score, ROC-Curve"
                    ]
                  },
                  {
                    title: "Unit 4.0 Unsupervised Learning",
                    points: [
                      "4.1 Introduction to Clustering: Types of Clustering, Hierarchical, Agglomerative Clustering, Divisive clustering",
                      "4.2 Evaluation measures for clustering: Extrinsic Measures, Intrinsic Measures"
                    ]
                  },
                  {
                    title: "Unit-5.0 Dimensionality Reduction Techniques",
                    points: [
                      "5.1 Principal component Analysis (PCA), Linear discriminant Analysis (LDA),",
                      "5.2 Independent component Analysis (ICA)"
                    ]
                  }
                ]
              },
              {
                name: "Programme Electives | Mobile Application Development",
                code: "2418603B",
                units: [
                  {
                    title: "Unit-1.0 Basics of Mobile Application Architecture",
                    points: [
                      "1.1 Overview of mobile applications and ecosystems (iOS, Android, etc.)",
                      "1.2 Introduction to mobile phone generations - 1G to 5G",
                      "1.3 Mobile OS Architectures",
                      "1.4 Smart phone architecture - ARM (Advance RISC Machine): 1.4.1 Kernel structure, 1.4.2 Intel architectures, 1.4.3 iOS and Windows",
                      "1.5 Mobile Application Architectures: Client-Server: 1.5.1 Connection Types",
                      "1.6 The Mobile Application Development Lifecycle",
                      "1.7 Android Stack",
                      "1.8 Android Applications Structure"
                    ]
                  },
                  {
                    title: "Unit-2.0 Content Providers and Data Sharing",
                    points: [
                      "2.1 Using preferences: 2.1.1. Working with Shared Preferences, 2.1.2. Preference access permissions",
                      "2.2 Using the filesystem: 2.2.1. Creating files, 2.2.2. Accessing files, 2.2.3. Files as raw resources, 2.2.4. XML file resources, 2.2.5. External storage via an SD card",
                      "2.3 Persisting data to a database: 2.3.1. Building and accessing a database, 2.3.2. Using the sqlite3 tool",
                      "2.4 Working with Content Provider classes: 2.4.1. Using an existing Content Provider, 2.4.2. Creating a Content Provider",
                      "2.5 Overview of Android Layouts: 2.5.1 Introduction to Layouts, 2.5.2 Understanding the purpose of layouts Android apps.",
                      "2.6 Types of Layouts: Linear Layout, Relative Layout, Constraint Layout, Frame Layout",
                      "2.7 Adaptive Layouts with Fragments"
                    ]
                  },
                  {
                    title: "Unit-3.0 Interface and Layout in Android",
                    points: [
                      "3.1 Creating the Activity: 3.1.1 Creating an Activity class, 3.1.2 Exploring the Activity lifecycle",
                      "3.2 Working with views: 3.2.1 Exploring common views, 3.2.2 Using a List View, 3.2.3 Multitasking with Handler and Message, 3.2.4 Creating custom views, 3.2.5 Understanding layout, 3.2.6 Handling focus, 3.2.7 Grasping events",
                      "3.3 Using Resources: 3.3.1 Supported resource types, 3.3.2 Referencing resources in Java, 3.3.3 Defining views and layouts through XML resources, 3.3.4 Externalizing values, 3.3.5 Providing animations",
                      "3.4 Exploring the Android Manifest File"
                    ]
                  },
                  {
                    title: "Unit-4.0 Android User Interface Components",
                    points: [
                      "4.1 Basics of Android UI Components: 4.1.1 Introduction to Android UI Components: Overview of Views and View Groups, 4.1.2 Understanding Android XML Layout Files: Structure and usage of XML for defining UIs.",
                      "4.2 Commonly Used UI Components: 4.2.1 Text Views and Edit Texts: Displaying and editing text, 4.2.2 Buttons and Image Buttons: Handling clicks and actions, 4.2.3 Image Views: Displaying images.",
                      "4.3 Advanced UI Components: 4.3.1 Recycler View: Displaying lists and grids efficiently, 4.3.2 Card View: Presenting information in a card format, 4.3.3 Navigation View: Implementing navigation drawers.",
                      "4.4 Menu and Dialogs: 4.4.1 Menus and Context Menus: Adding options and context menus, 4.4.2 Dialogs and Toasts: Displaying alerts, confirmations, and quick messages."
                    ]
                  },
                  {
                    title: "Unit-5.0 Design and Implementation of Database-Driven Applications",
                    points: [
                      "5.1 Introduction to SQLite Database: 5.1.1 Creating and opening a database, 5.1.2 Creating tables, 5.1.3 Inserting retrieving and deleting data, 5.1.4 Choosing the Right Database, 5.1.5 Comparison of SQLite, Room, Firebase Realtime Database, and other NoSQL databases, 5.1.6 SQLite Database Integration",
                      "5.2 Registering Content Providers: 5.2.1 Using content Providers (Insert, delete, retrieve and update).",
                      "5.3 Understanding SQLite: 5.3.1 Basics of SQLite database, 5.3.2 Role and integration in Android applications.",
                      "5.4 Implementing a Database-Driven Application: 5.4.1 Designing the Database Schema, 5.4.2 Integrating the Database with UI, 5.4.3 Database Testing"
                    ]
                  }
                ]
              },
              {
                name: "Open Elective | Electric Vehicle (Advanced)",
                code: "2400604G",
                units: [
                  {
                    title: "Unit-1.0 Vehicle Dynamics",
                    points: [
                      "1.1 Vehicle Movement",
                      "1.2 Rolling Resistance: Equation, Coefficient, factor affecting rolling resistance, typical values of rolling resistance",
                      "1.3 Grading resistance",
                      "1.4 Road resistance",
                      "1.5 Acceleration resistance",
                      "1.6 Total driving resistance",
                      "1.7 Aerodynamic drag: Equation, typical values of the drag coefficient.",
                      "1.8 Vehicle dynamics: Hybrid and Electric Vehicles, DC Motor Dynamics and Control, AC Motor Dynamics and Control"
                    ]
                  },
                  {
                    title: "Unit-2.0 Elements of Automobile",
                    points: [
                      "2.1 Suspension and Damping systems",
                      "2.2 Brake system: Half-step braking, Full step Braking",
                      "2.3 Transaxle",
                      "2.4 Elements of Noise Vibration and Harshness Control",
                      "2.5 Body balancing",
                      "2.6 Tyre Technology",
                      "2.7 AC/DC motor",
                      "2.8 Air-conditioning and Heating System",
                      "2.9 Lighting System",
                      "2.10 Automotive wiring system",
                      "2.11 Earthing and Insulation",
                      "2.12 Charging stations - Installation and Commissioning",
                      "2.13 Vehicle control unit"
                    ]
                  },
                  {
                    title: "Unit-3.0 EV Power Transmission System",
                    points: [
                      "3.1 Transmission System: Single and Multi-transmission system",
                      "3.2 EV Power Train",
                      "3.3 EV Power Train Components: Battery Pack, DC-AC Converter, Electric Motor, On-Board Charger.",
                      "3.4 Battery Parameters: Voltage, Current, Charging rate, efficiency, energy density, power density, State of Charge (SoC), Depth of Discharge (DoD), State of Health (SoH), Operating Temperature, specific energy, specific power, life cycle and cost.",
                      "3.5 Battery Assembly and Dismantling.",
                      "3.6 Gear and Differential Assembly",
                      "3.7 Safe disposal of used battery"
                    ]
                  },
                  {
                    title: "Unit-4.0 Vehicle Control Unit (VCU)",
                    points: [
                      "4.1 Electronic Control Unit: Battery Management System, DC-DC Converter, Thermal Management System and Body Control Module.",
                      "4.2 Predefined functions",
                      "4.3 Connections with EV subsystem",
                      "4.4 Controller Area Network (CAN) communication",
                      "4.5 Interaction of CAN Communication with VCU.",
                      "4.6 Troubleshooting and Assessment",
                      "4.7 Dynamometers: Introduction",
                      "4.8 Environmental Chambers"
                    ]
                  },
                  {
                    title: "Unit-5.0 EV Charging Technologies",
                    points: [
                      "5.1 Charging Technology: Classification",
                      "5.2 Grid-to-Vehicle (G2V)",
                      "5.3 Vehicle to Grid (V2G) or Vehicle to Buildings (V2B) or Vehicle to Home (V2H).",
                      "5.4 Bi-directional EV Charging Systems.",
                      "5.5 Energy Management Strategies.",
                      "5.6 Wireless Power Transfer (WPT) technique for EV Charging."
                    ]
                  }
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
                    title: "After completion of the course, the students will be able to",
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

            // Diploma Electrical sem 6

            semesters.sem6.theory = [
              {
                name: "Utilization of Electrical Energy",
                code: "2420601",
                units: [
                  {
                    title: "Unit 1.0 Illumination",
                    points: [
                      "1.1 Definition of Illumination",
                      "1.2 Light, Luminous flux, Luminous intensity, Lumen, Candle power, Lux or Meter candle, mean horizontal candle power (MHCP), Mean spherical candle power (MSCP), Mean hemispherical candle Power (MHSCP), Reduction factor, Lamp efficiency, Utilization factor, Depreciation factor, Space height ratio, Solid angle, Absorption factor, Reflection factor.",
                      "1.3 Laws of Illumination - Inverse square law, Lamberts Cosine law.",
                      "1.4 LED light; Working Principle.",
                      "1.5 Types of LED lights, features and its applications: Gallium Phosphide (GaP), Aluminum Gallium Phosphide (AlGaP), Gallium Nitride (GaN), Gallium Arsenide (GaAs), Gallium Arsenide Phosphide (GaAsP), Aluminum Gallium Arsenide Phosphide (AlGaAsP), Gallium Indium Nitride (GaInN), Silicon Carbide (SiC), Zinc Selenide (ZnSe)"
                    ]
                  },
                  {
                    title: "Unit-2.0 Electrical Heating and Welding",
                    points: [
                      "2.1 Need and significance of Electrical heating; Essential requirements of a good heating element,",
                      "2.2 Materials of heating element - Nickel chromium alloy, Iron chromium aluminum alloy, Molybdenum disilicide and silicon carbide",
                      "2.3 Causes of failure of heating element.",
                      "2.4 Methods of Electric heating: Resistance heating, Arc heating, High frequency heating: Induction heating, Dielectric heating.",
                      "2.5 Electric arc furnace, types, working and applications of: Direct, Indirect",
                      "2.6 Welding, types, working and applications of: Resistance welding, Electric arc welding",
                      "2.7 Welding transformers and rectifiers.",
                      "2.8 Safety precautions followed during heating and welding."
                    ]
                  },
                  {
                    title: "Unit-3.0 Electrical Drives",
                    points: [
                      "3.1 Block diagram: Source, Power modulator, Electric motor, Control unit, sensing unit and load.",
                      "3.2 Motors used for Electrical drives; DC series, Shunt and Separately excited motors, three phase Induction motor.",
                      "3.3 Torque/speed, Torque/Current and Speed/Current characteristics of DC series, Shunt and Separately excited motors, Induction motor.",
                      "3.4 Comparison of AC, DC drives and Individual, group drive."
                    ]
                  },
                  {
                    title: "Unit-4.0 Electric Traction Drives",
                    points: [
                      "4.1 Requirement of Ideal traction system",
                      "4.2 Type of traction system used in India: Electric Traction, Diesel Traction",
                      "4.3 System of track electrification: DC system, Single phase 25KV A.C., Composite system.",
                      "4.4 Electrical Power supply in Traction system: Sub Sectioning and Parallel Post (SSP), Sectioning Post (SP), Traction sub station",
                      "4.5 Block diagram of AC Electric locomotive and function of each part.",
                      "4.6 Current collecting system: Overhead wire and conductor rail system, Current collector (Pantograph types).",
                      "4.7 Traction services: Urban, Suburban, Main line services, Metro rail and Monorail."
                    ]
                  },
                  {
                    title: "Unit-5.0 Economics of Utilizing Electrical Energy",
                    points: [
                      "5.1 Economic Aspects of Utilizing Electrical Energy.",
                      "5.2 Pricing of Electrical Energy: Fixed Charges, Semi Fixed Charges, Running Charges.",
                      "5.3 Tariff, Formulation of Electrical Tariffs and Types - Domestic, Commercial and Industrial Consumers.",
                      "5.4 Power Factor, Causes and disadvantages of Low Power Factor, Power Factor Improvement - using Static Capacitors, its locations, Most Economical Power Factor, Automatic Power Factor Controller",
                      "5.5 Energy efficiency and Energy efficient equipment (Star labelling)",
                      "5.6 Energy Conservation: Importance and need of Energy Conservation",
                      "5.7 Measures for Energy Conservation in: (i) Electric Heating, (ii) Refrigeration and Air Conditioning, (iii) Illumination"
                    ]
                  }
                ]
              },
              {
                name: "Electrical Installation, Testing and Commissioning",
                code: "2420602",
                units: [
                  {
                    title: "Unit1.0 -Installation of Electrical Equipment",
                    points: [
                      "1.1 Unloading of electrical equipment at site.",
                      "1.2 Inspection of electrical equipment at site.",
                      "1.3 Storage of electrical equipment at site.",
                      "1.4 Foundation of electrical equipment at site.",
                      "1.5 Alignment of electrical machines.",
                      "1.6 Technical report, Inspection, storage and handling of transformer, switchgear and motors.",
                      "1.7 Tools/Instruments necessary for installation.",
                      "1.8 Installation of electrical equipment."
                    ]
                  },
                  {
                    title: "Unit-2.0 Testing of Electrical Equipment",
                    points: [
                      "2.1 Testing: Need and standards, tolerances.",
                      "2.2 Testing Types: Routine, Type and Special Tests, Methods of testing: Direct, indirect and regenerative with advantages and applications.",
                      "2.3 Tests before commissioning of electrical equipment - Electrical and Mechanical test.",
                      "2.4 Preparations before commissioning of power transformer.",
                      "2.5 Testing (Routine, Type and Special Tests) of Transformer, Induction motor, alternator, synchronous motor and electrical power installation."
                    ]
                  },
                  {
                    title: "Unit-3.0 Commissioning of Electrical Equipment",
                    points: [
                      "3.1 Commissioning of power transformer, three phase induction motor and switchgears.",
                      "3.2 Transformer oil: Properties, testing and filtering/purifying, standard tests as per IS code.",
                      "3.3 Measurement of insulation resistance and Polarization Index, Factors affecting the insulation resistance of insulating materials.",
                      "3.4 Drying the winding of electrical equipment.",
                      "3.5 Test report on commissioning and test certificate.",
                      "3.6 Gradually loading of electrical equipment.",
                      "3.7 Final inspection after commissioning."
                    ]
                  },
                  {
                    title: "Unit-4.0 Maintenance and Troubleshooting of Electrical Equipment",
                    points: [
                      "4.1 Importance of maintenance, Reasons of failure of electrical equipment.",
                      "4.2 Maintenance: routine, breakdown, preventive and predictive maintenance",
                      "4.3 Recommended Maintenance Schedules: transformer, induction motor (single phase and three phase), three phase alternator, synchronous motor, circuit Breaker, overhead line, storage Battery.",
                      "4.4 Probable faults due to poor maintenance in transformer, induction motor, circuit breaker, overhead lines and battery",
                      "4.5 Causes of faults in electrical equipment (Internal and external).",
                      "4.6 Instruments and tools for trouble shooting.",
                      "4.7 Common troubles in electrical equipment - DC Machines, AC Machines, Transformers, Circuit-breaker, under-ground cable, electrical Installation.",
                      "4.8 Need of trouble shooting chart, troubleshooting chart for DC Motor, DC Generator, Transformer, Synchronous Motor, Induction Motor, Circuit-breaker.",
                      "4.9 Trouble shooting chart for Domestic appliances - electrical iron, ceiling fan, washing machine, Air cooler, Vacuum cleaner, fluorescent tube light: Construction, working and troubleshooting chart"
                    ]
                  },
                  {
                    title: "Unit-5.0 Electrical Accidents and Safety",
                    points: [
                      "5.1 Safe Practices: Safety, hazard, accident, major accident hazard, responsibility, authority, accountability, monitoring, I.E. Act & statutory regulations for safety of persons and equipment working with electrical installation, Dos & Don'ts for substation operators as listed in IS",
                      "5.2 Electric Shocks: Meaning & causes of electrical accidents, factors on which severity of shock depends, Procedure for rescuing the person who has received an electric shock, methods of providing artificial respiration.",
                      "5.3 Precautions to be taken to avoid fire due to electrical reasons, operation of fire extinguishers. Fire extinguishers - Fixed installation and portable devices.",
                      "5.4 Earthing of electrical equipment (refer IS code IS 3043-1987): Objectives, classification of electrical equipment with regard to protection against electric shock: class 0 to III."
                    ]
                  }
                ]
              },
              {
                name: "Elective | Data Communication",
                code: "2420603A",
                units: [
                  {
                    title: "Unit-1.0 Fundamentals of Data Communication and Network Topology",
                    points: [
                      "1.1 Data communication and its characteristics, Basic block diagram of data communication system, Components of data communication: Transmitter, Receiver, Medium, Message, error, noise, Protocol. Standards, Standard organizations",
                      "1.2 Data Transmission: Serial, Parallel, Synchronous, Asynchronous, Isochronous transmission",
                      "1.3 Transmission characteristics: Signaling rate, data rate, bit rate, baud rate",
                      "1.4 Need of computer networks, Network criteria, advantages of networking, Schematic diagram, working",
                      "1.5 Network topologies: Mesh, Star, Bus, Tree, Ring and Hybrid topologies: working, disadvantages and applications.",
                      "1.6 Network Classification: Based on Transmission Technologies: Point to-point, Multipoint; Physical size (scale): PAN, BAN, LAN, MAN, WAN, VPN; Based on Architecture: Peer to Peer, Client Server, advantages of Client Sever over Peer-to-Peer Model"
                    ]
                  },
                  {
                    title: "Unit-2.0 Network Models",
                    points: [
                      "2.1 TCP/IP protocol suite with define protocols in respective Layers: Physical layer, Data Link Layer, Network Layer, Transport Layer, and Application Layer",
                      "2.2 Addressing in TCP/IP: Physical, logical, Port and specific",
                      "2.3 The ISO-OSI model: Physical layer, Data Link Layer, Network Layer, Transport Layer, Session Layer, Presentation Layer, Application Layer"
                    ]
                  },
                  {
                    title: "Unit-3.0 Physical Layer",
                    points: [
                      "3.1 Multiplexing: Basic concept, Frequency- Division Multiplexing, Wavelength- Division Multiplexing, Synchronous Time-Division Multiplexing",
                      "3.2 Transmission medium: classification based on electromagnetic wave spectrum",
                      "3.3 Guided Media - Performance and applications: Twisted pair (UTP, STP) cable-connector, Coaxial cable-connector, Fiber-optic cable-connector",
                      "3.4 Introduction of Unguided Media - Radio waves, microwaves, Infrared and their applications",
                      "3.5 Modems classification: Broadband modem, DSL - ADSL, HDSL, VDSL",
                      "3.6 Switching: Circuit-switched networks, Packet switched networks - Datagram approach, virtual circuit approach"
                    ]
                  },
                  {
                    title: "Unit-4.0 Data Link Layer",
                    points: [
                      "4.1 Framing",
                      "4.2 Flow control",
                      "4.3 Error control: Types of errors: Single bit and Burst errors, Error detection and correction",
                      "4.4 Protocol: Sliding window protocol: One-bit sliding window protocol",
                      "4.5 Point to Point Protocol: service provided by PPP, Frame format PPP and Transition phases of PPP",
                      "4.6 Ethernet and IEEE 802.3",
                      "4.7 MAC Addresses and Switching"
                    ]
                  },
                  {
                    title: "Unit-5.0 Network, Transport and Application Layer",
                    points: [
                      "5.1 Network devices: Repeater, Hub, Bridge, Switches, Router, Gateway",
                      "5.2 Network layer Logical addressing: IPv4 Addresses: address space notations, class-full addressing, and class-less addressing",
                      "5.3 Network Address Translation (NAT), IPv6 addresses, Need for IPv6, Structure and address space",
                      "5.4 Network layer - Multicast Routing Protocols: Unicast, Multicast and Broadcast routing and applications of Transport Layer",
                      "5.5 Internet Control Message Protocol (ICMP), Address Resolution Protocol (ARP), Reverse Address Resolution Protocol (RARP)",
                      "5.6 Process to process delivery: UDP, TCP, RTP, SCTP, ports format and uses.",
                      "5.7 Application Layer services: Concept of DNS, FTP, HTTP/HTTPS, FTP and SMTP, DNS and DHCP.",
                      "5.8 Network Security Protocols (SSL/TLS)",
                      "5.9 Security services: concepts of message and entity security service, Firewall"
                    ]
                  }
                ]
              },
              {
                name: "Elective | Industrial Drives",
                code: "2420603B",
                units: [
                  {
                    title: "Unit-1.0 Fundamentals of Electric Drives",
                    points: [
                      "1.1 Need and significance of Electric Drives",
                      "1.2 Functional Block diagrams of an electric drives",
                      "1.3 Fundamental torque Equation",
                      "1.4 Multi-quadrant operation",
                      "1.5 Components of Load torque",
                      "1.6 Nature and classification of Load torque",
                      "1.7 Steady State Stability (derivation not required)"
                    ]
                  },
                  {
                    title: "Unit-2.0 Basics of DC and AC Motors",
                    points: [
                      "2.1 DC Motors: Characteristics and speed control of Series, Shunt and Separately Excited DC Motors",
                      "2.2 DC motor: Braking - Plugging, Rheostatic, and Regenerative",
                      "2.3 3-phase induction Motor: Characteristics and speed control of Squirrel cage IM and Slip ring IM",
                      "2.4 3-phase induction Motor: Braking - Plugging, Rheostatic, and Regenerative.",
                      "2.5 Classes of motor duty",
                      "2.6 Determination of Motor Rating"
                    ]
                  },
                  {
                    title: "Unit-3.0 DC Drives",
                    points: [
                      "3.1 Single phase SCR Drives of DC separately excited motor: Half wave converter, Full wave converter, Semi-converter, Dual converter",
                      "3.2 Three Phase SCR Drives of DC separately excited motor: Half wave converter, Full wave converter, Semi-converter",
                      "3.3 Rectifier control of DC Series motor.",
                      "3.4 Chopper Control of separately excited DC motor.",
                      "3.5 Chopper Control of DC series motor",
                      "3.6 Use of a chopper control drive in Solar and battery powered vehicles."
                    ]
                  },
                  {
                    title: "Unit-4.0 AC Drives",
                    points: [
                      "4.1 Need, significance and working of soft starters",
                      "4.2 Stator voltage control using AC voltage controller",
                      "4.3 Cycloconverter",
                      "4.4 Variable Frequency Control (VFD)",
                      "4.5 Voltage Source Inverter Control",
                      "4.6 AC drives using PWM technique",
                      "4.7 Current Source Inverter Control",
                      "4.8 Basics of Slip power recovery",
                      "4.9 Rotor Resistance Control"
                    ]
                  },
                  {
                    title: "Unit-5.0 Advanced Techniques of Motor Control",
                    points: [
                      "5.1 AC/DC drive using microprocessor control",
                      "5.2 AC/DC drive using microcontroller control.",
                      "5.3 Stepper motor drives employing microcontroller"
                    ]
                  }
                ]
              },
              {
                name: "Elective | Electrification of Building Complexes",
                code: "2420603C",
                units: [
                  {
                    title: "Unit-1.0 Elements of Electrification",
                    points: [
                      "1.1 Elements of Electrical installation and fittings",
                      "1.2 Electrical Engineering Drawings: Symbols, Plans and wiring Diagrams.",
                      "1.3 Electrical Accessories: Wires, Switch Board, Cable, Mains and Sub mains, circuit breakers (MCB, MCCB, ELCB, RCCB etc.).",
                      "1.4 Earthing System (Pipe earthing, Plate earthing, Chemical earthing)",
                      "1.5 Testing of wiring and installation",
                      "1.6 Illumination requirements in residential, Commercial and public Building",
                      "1.7 Economical illumination design"
                    ]
                  },
                  {
                    title: "Unit-2.0 Electrification of Residential Buildings",
                    points: [
                      "2.1 Type of wiring - Concealed, Surface.",
                      "2.2 Norms and guidelines for wiring and fittings.",
                      "2.3 Wiring layout of a residential building.",
                      "2.4 Calculation of total Electrical Loads.",
                      "2.5 Calculation of number of circuits.",
                      "2.6 Schedule of rates (SOR), Point Wiring System.",
                      "2.7 Estimation of material requirements.",
                      "2.8 Requirements of approval from electrical inspection department.",
                      "2.9 Testing of wiring installation and preparation of test report."
                    ]
                  },
                  {
                    title: "Unit-3.0 Electrification of Commercial Complexes and Public Buildings",
                    points: [
                      "3.1 Commercial and Public Building.",
                      "3.2 Residential, commercial and public building electrical Installations: Comparison",
                      "3.3 Norms and guidelines for wiring and installations.",
                      "3.4 Fundamental considerations for planning of an electrical installation system",
                      "3.5 Wiring layout of a Commercial Complexes and Public Buildings",
                      "3.6 Special requirements of hotels, theaters, library and cultural halls etc. from electrification points of view",
                      "3.7 Illumination scheme for Interior Applications.",
                      "3.8 Design considerations of illumination for Commercial and Public buildings.",
                      "3.9 Different types of lighting arrangements",
                      "3.10 Requirements of approval from electrical inspection department.",
                      "3.11 Testing of wiring installation and preparation of test report."
                    ]
                  },
                  {
                    title: "Unit 4.0 Distribution System for Multistoried Buildings",
                    points: [
                      "4.1 Multistoried Buildings",
                      "4.2 Different Methods of service connection",
                      "4.3 Underground service connection of multistoried buildings.",
                      "4.4 Distribution panels and Bus bar system, Rising Mains: Design",
                      "4.5 Cables and Wiring system: Estimating and Costing",
                      "4.6 Switchboards, Distribution boards, main switch: Mounting arrangements and Positioning",
                      "4.7 Meter connection - bifurcation of metering - meters as per consumers demand, use of digital-meters for prevention of theft of power."
                    ]
                  },
                  {
                    title: "Unit-5.0 Electrical Safety and IE Rules",
                    points: [
                      "5.1 Importance of safety rules.",
                      "5.2 Safety precaution in electrical installation of multistoried building.",
                      "5.3 Safety devices in multistoried buildings: Fire Alarm System, Smoke Detection System, Safety for Lifts and Escalators, Earthing System, Lightning Arrestors arrangements, Use of ELCB and MCBs/MCCBs in an installation, Electronic safety locks at the entrance, DG system",
                      "5.4 National Building Code",
                      "5.5 Indian Electricity Act.",
                      "5.6 IE rules"
                    ]
                  }
                ]
              },
              {
                name: "Open Elective | Electric Vehicle (Advanced)",
                code: "2400604G",
                units: [
                  {
                    title: "Unit-1.0 Vehicle Dynamics",
                    points: [
                      "1.1 Vehicle Movement",
                      "1.2 Rolling Resistance: Equation, Coefficient, factor affecting rolling resistance, typical values of rolling resistance",
                      "1.3 Grading resistance",
                      "1.4 Road resistance",
                      "1.5 Acceleration resistance",
                      "1.6 Total driving resistance",
                      "1.7 Aerodynamic drag: Equation, typical values of the drag coefficient.",
                      "1.8 Vehicle dynamics: Hybrid and Electric Vehicles, DC Motor Dynamics and Control, AC Motor Dynamics and Control"
                    ]
                  },
                  {
                    title: "Unit-2.0 Elements of Automobile",
                    points: [
                      "2.1 Suspension and Damping systems",
                      "2.2 Brake system: Half-step braking, Full step Braking",
                      "2.3 Transaxle",
                      "2.4 Elements of Noise Vibration and Harshness Control",
                      "2.5 Body balancing",
                      "2.6 Tyre Technology",
                      "2.7 AC/DC motor",
                      "2.8 Air-conditioning and Heating System",
                      "2.9 Lighting System",
                      "2.10 Automotive wiring system",
                      "2.11 Earthing and Insulation",
                      "2.12 Charging stations – Installation and Commissioning",
                      "2.13 Vehicle control unit"
                    ]
                  },
                  {
                    title: "Unit-3.0 EV Power Transmission System",
                    points: [
                      "3.1 Transmission System: Single and Multi-transmission system",
                      "3.2 EV Power Train",
                      "3.3 EV Power Train Components: Battery Pack, DC-AC Converter, Electric Motor, On-Board Charger.",
                      "3.4 Battery Parameters: Voltage, Current, Charging rate, efficiency, energy density, power density, State of Charge (SoC), Depth of Discharge (DoD), State of Health (SoH), Operating Temperature, specific energy, specific power, life cycle and cost.",
                      "3.5 Battery Assembly and Dismantling.",
                      "3.6 Gear and Differential Assembly",
                      "3.7 Safe disposal of used battery"
                    ]
                  },
                  {
                    title: "Unit- 4.0 Vehicle Control Unit (VCU)",
                    points: [
                      "4.1 Electronic Control Unit: Battery Management System, DC-DC Converter, Thermal Management System and Body Control Module.",
                      "4.2 Predefined functions",
                      "4.3 Connections with EV subsystem",
                      "4.4 Controller Area Network (CAN) communication",
                      "4.5 Interaction of CAN Communication with VCU.",
                      "4.6 Troubleshooting and Assessment",
                      "4.7 Dynamometers: Introduction",
                      "4.8 Environmental Chambers"
                    ]
                  },
                  {
                    title: "Unit- 5.0 EV Charging Technologies",
                    points: [
                      "5.1 Charging Technology: Classification",
                      "5.2 Grid-to-Vehicle (G2V)",
                      "5.3 Vehicle to Grid (V2G) or Vehicle to Buildings (V2B) or Vehicle to Home(V2H).",
                      "5.4 Bi-directional EV Charging Systems.",
                      "5.5 Energy Management Strategies.",
                      "5.6 Wireless Power Transfer (WPT) technique for EV Charging."
                    ]
                  }
                ]
              },
              {
                name: "Employability Skills Development",
                code: "2400408",
                units: [
                  {
                    title: "Unit-1.0 Goal Setting",
                    points: [
                      "1.1 Career planning, SWOT",
                      "1.2 Resume using Internet formats.",
                      "1.3 Showcase portfolios.",
                      "1.4 Personal grooming.",
                      "1.5 Self-Introduction.",
                      "1.6 Website Development."
                    ]
                  },
                  {
                    title: "Unit-2.0 Capacity Development",
                    points: [
                      "2.1 Interview Skills",
                      "2.2 Group Discussion – Do’s & don’ts, leadership, Teamwork, how to interrupt, synthesis, and analysis of topics.",
                      "2.3 Social Media for Personal Enrichment",
                      "2.4 Body language",
                      "2.5 Self-Management.",
                      "2.6 Emotional Intelligence"
                    ]
                  },
                  {
                    title: "Unit-3.0 Utilizing Potential",
                    points: [
                      "3.1 Social Networking",
                      "3.2 Social Engagements, Volunteering",
                      "3.3 Collaboration& Team-work.",
                      "3.4 QC-Tools – Check sheets, Fishbone Diagram, Histogram, Pareto chart, Control-chart, Scatter Diagram, Stratification,",
                      "3.5 Lean Manufacturing, Kanban, Kaizen, Five S, Poka-yoke, Quality Circle"
                    ]
                  }
                ]
              },
              {
                name: "Community/ Society Development",
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
                    title: "Unit-2.0 Community Development Initiatives",
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
              }
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
                    title: "After completion of the course, the students will be able to",
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

            // Diploma Mechanical sem 6

            semesters.sem6.theory = [
              {
                name: "Design of Machine Elements",
                code: "2425601",
                units: [
                  {
                    title: "Unit1.0 -Fundamentals of Machine Design",
                    points: [
                      "1.1 Introduction to design, Machine Design philosophy and steps.",
                      "1.2 Types of loads, concepts of Strength, Stress and Strain; Stress - Strain Diagram for Ductile and Brittle Materials.",
                      "1.3 Recall of direct and principal stresses and strains. (Simple numerical)",
                      "1.4 Creep, Creep strain and Creep Curve; (Introduction only)",
                      "1.5 Cyclic loading, Fatigue; S-N curve; Endurance Limit; (Introduction only)",
                      "1.6 Factor of Safety and factors governing selection of Factor of Safety;",
                      "1.7 Stress Concentration: Causes & Remedies; Converting actual load or torque into design load or torque using design factors Like velocity factor, factor of safety & service factor",
                      "1.8 Introduction to International standards; Advantages of standardization; Use of design data book; Use of standards in design and preferred numbers series",
                      "1.9 Theories of Elastic Failures; Principal normal stress theory; Maximum shear stress theory & Maximum distortion energy theory."
                    ]
                  },
                  {
                    title: "Unit-2.0 Design of Simple Machine Part & Antifriction Bearing",
                    points: [
                      "2.1 Properties of Engineering materials; Designation of materials as per IS; Important mechanical properties of materials: Elasticity, Plasticity, Hardness, Ductility, Malleability, Brittleness, Resilience, Toughness,",
                      "2.2 Design of simple machine parts: Cotter Joint; Knuckle Joint; Turnbuckle; Design of Levers: Hand/Foot Lever & Bell Crank Lever; Design of C- Clamp; Off-set links; Overhang Crank; Arm of Pulley.",
                      "2.3 Antifriction Bearings: Classification of Bearings; Sliding contact & Rolling contact; Terminology of Ball bearings: Life Load relationship, Basic static load rating and Basic dynamic load rating, limiting speed; Selection of ball bearings using manufacturer's catalogue."
                    ]
                  },
                  {
                    title: "Unit-3.0 Design of Shaft, Key, Coupling & Spur Gear",
                    points: [
                      "3.1 Design of Shafts: Types of Shafts; Shaft materials; Standard Sizes; Design of Shafts (Hollow and Solid) using strength and rigidity criteria; ASME code of design for line shafts supported between bearings with one or two pulleys in between or one over-hung pulley;",
                      "3.2 Design of Sunk Keys; Effect of Keyways on strength of shaft;",
                      "3.3 Design of Couplings - Muff Coupling, Protected type Flange Coupling, Bush-pin type flexible coupling",
                      "3.4 Spur gear design considerations; Lewis equation for static beam strength of spur gear teeth; Power transmission capacity of spur gears in bending."
                    ]
                  },
                  {
                    title: "Unit-4.0 Design of Power Screw, Spring & Leaf Spring",
                    points: [
                      "4.1 Design of Power Screws: Thread Profiles used for power Screws -Relative merits and de-merits of each; Torque required to overcome thread friction; Self-Locking and overhauling property; Efficiency of power screws; Types of stresses induced; Design of Screw Jack; Toggle Jack.",
                      "4.2 Design of springs: Classification and Applications of Springs; Spring terminology; Materials and Specifications; Stresses in springs; Wahl's correction factor; Deflection of springs; Energy stored in springs; Design of Helical, Tension and Compression springs subjected to uniform applied loads like I.C. engine valves, Weighing balance, Railway buffers and Governor Springs",
                      "4.3 Leaf springs: Construction and Application."
                    ]
                  },
                  {
                    title: "Unit-5.0 Design of Fasteners & Ergonomics",
                    points: [
                      "5.1 Design of Fasteners: Stresses in Screwed fasteners; Bolts of Uniform Strength; Design of Bolted Joints subjected to eccentric loading; Design of Parallel and Transverse fillet welds; Axially loaded symmetrical section; Merits and demerits of screwed and welded joints.",
                      "5.2 Ergonomics & Aesthetic consideration in design: Ergonomics of Design: Man-Machine relationship; Design of Equipment for control, environment & safety; Aesthetic considerations regarding shape, size, color & surface finish."
                    ]
                  }
                ]
              },
              {
                name: "Maintenance & Safety of Mechanical & Solar Appliances",
                code: "2425602",
                units: [
                  {
                    title: "Unit-1.0 Industrial Safety Equipment's",
                    points: [
                      "1.1 Introduction to Industrial Safety and Management, safety principal safe working condition and practices, Safety and productivity,",
                      "1.2 Role of management and role of Govt. in Industrial safety, motivation for safety.",
                      "1.3 Education and training in safety, Survey the plant for locations, Part of body to be protected, cause of accident& prevention, Housekeeping, Accident Preventions, Protective Equipment's and the Acts",
                      "1.4 Personal protective equipment (PPE), PPE for solar industry-hard hats, safety glasses, respiration, gloves, fall protection equipment, hearing protection",
                      "1.5 Medical emergency, introduction to first aid, first aid box, incident management, CPR, bleeding, shock, burns & Scaldes",
                      "1.6 Fire, classification of fire, Firefighting equipment-Fire Extinguishers, types of fire extinguishers-Powder foam, CO2, wet chemical, water, uses of different types of fire extinguishers, symbols of fire extinguisher, fire safety sign, fire triangle and tetrahedral, Smoke detectors, Fire Alarm system.",
                      "1.7 Accident, Measures in industry, Accident reporting, Investigations, Industrial psychology in accident prevention, accident record keeping. Occupational safety and health assessment (OSHA)",
                      "1.8 Introduction to solar appliances, construction, working & function- Solar Water Heater, Photovoltaic Cell, Solar Distillation, solar drying, solar cooker, solar lighting"
                    ]
                  },
                  {
                    title: "Unit-2.0 Industrial Safety Acts",
                    points: [
                      "2.1 Features of Factory Act (1948), implementation of factory act(1948), Introduction of Explosive Act, Boiler Act(1923), Employee's state insurance Act(1948), Workman's compensation Act(1923),",
                      "2.2 Industrial hygiene, Diseases prevention, Ergonomics& health, Occupational diseases, stress, fatigue, health, safety and the physical environment,",
                      "2.3 Methods of controlling chemical hazards, safety and the physical environment, Control of industrial noise and protection against it",
                      "2.4 Code and regulation for solar panel installation-Building codes, fire codes and Electrical Codes, Code and regulations for worker safety.",
                      "2.5 Major solar policies in India."
                    ]
                  },
                  {
                    title: "Unit-3.0 Principles and Practices of Maintenance",
                    points: [
                      "3.1 Basic Principles of maintenance - Objectives, Benefit of Maintenance systems - Reliability and machine availability, Equipment Life cycle",
                      "3.2 Need and type of Maintenance- Breakdown maintenance, Preventive Maintenance,",
                      "3.3 Condition Based monitoring - on line -off line monitoring, visual, temperature, leakage & lubricant monitoring",
                      "3.4 Introduction of Condition based Maintenance (CBM), Benefits, Principle and its Application (Temperature Readings, Pressure States and Oil Viscosity).",
                      "3.5 Maintenance budget and its components",
                      "3.6 Solar panel Maintenance- Preventive maintenance on major components of a solar system (Battery, Solar Panels, Charge Controller, Inverter and Wiring and connections), Maintenance contracts and agreements."
                    ]
                  },
                  {
                    title: "Unit-4.0 Maintenance Planning and Management",
                    points: [
                      "4.1 Role of maintenance planning and scheduling, planning and scheduling techniques, gantt chart and bar chart, types of maintenance strategies,",
                      "4.2 Computerized maintenance Management Systems (CMMS)- Introduction to CMMS and its functions, Implementation and utilization of CMMS for efficient maintenance management, E-maintenance solution for industrial equipment, Introduction of Software maintenance (SM) (Software-Hippo CMMS, open MAINT), Need for SM, Type of SM, its Process& Advantages.",
                      "4.3 Measures for Maintenance Performance: Equipment's breakdowns, Mean Time Between Failures and Repair, Factors of availability, Maintenance organization,",
                      "4.4 Repair cycle, Principles and methods of lubrication, Fault Tree Analysis and trouble shooting",
                      "4.5 Solar System Maintenance schedule, Solar Panel maintenance log sheet."
                    ]
                  },
                  {
                    title: "Unit-5.0 Application of Maintenance of Mechanical Equipment's & Solar Appliances",
                    points: [
                      "5.1 Maintenance checklist of Photovoltaic Cell, Solar Water Heater and Solar lighting.",
                      "5.2 Preventive maintenance chart of Lathe machine, drill, refrigerator and four stroke IC Engine.",
                      "5.3 Managing equipment warranties, guarantees and service agreements",
                      "5.4 Policy and objective for maintenance, Decision levels for equipment maintenance.",
                      "5.5 Calibration, need for calibration, standards and requirements, standard operating procedures for calibration.",
                      "5.6 Record keeping need of record keeping, advantages of record keeping, types of record keeping- manual, automatic & computerized record keeping maintenance record format."
                    ]
                  }
                ]
              },
              {
                name: "Elective | Heat and Mass Transfer",
                code: "2425603A",
                units: [
                  {
                    title: "Unit-1.0 Introduction to Heat Transfer",
                    points: [
                      "1.1 Modes of heat transfer: conduction, convection and radiation",
                      "1.2 Combined mode of heat transfer, Overall heat transfer coefficient, thermal conductivity of solid, liquid and gasses, effects of temperature on thermal conductivity of materials.",
                      "1.3 Fourier law of heat conduction, Differential equation of heat conduction",
                      "1.4 Steady state one dimensional Heat conduction plane wall, sphere, cylinder, composite slab.",
                      "1.5 Thermal contact resistance, Thermal diffusivity, critical radius of insulation."
                    ]
                  },
                  {
                    title: "Unit-2.0 Fins",
                    points: [
                      "2.1 Types of fins, Heat flow through a rectangular fin, infinitely long fin, fin insulated at the tip and fin losing heat at tip.",
                      "2.2 Effectiveness and efficiency of fin.",
                      "2.3 Transient heat conduction, Lumped system analysis, Time constant, Unsteady state heat conduction in one dimension only, Biot number Heisler's chart"
                    ]
                  },
                  {
                    title: "Unit-3.0 Convection",
                    points: [
                      "3.1 Newton's law of cooling, Natural and forced convection",
                      "3.2 Continuity, momentum and energy equation, Thermal and hydrodynamic boundary layer",
                      "3.3 Free and Forced Convection during external flow over Plates and Cylinders and Internal flow through tubes.",
                      "3.4 Heat transfer co-efficient and its interpretations",
                      "3.5 Dimensional analysis applied to forced and natural convection",
                      "3.6 Dimensionless number and their physical significance"
                    ]
                  },
                  {
                    title: "Unit-4.0 Heat Exchanger",
                    points: [
                      "4.1 Different Types of Heat exchangers, Parallel flow, counter flow, cross flow heat exchanger evaporator and condenser.",
                      "4.2 Overall Heat transfer coefficient, Log mean temperature difference (LMTD), effectiveness of heat exchanger Number of transfer unit (NTU).",
                      "4.3 fouling factor",
                      "4.4 Design of heat-exchange equipment",
                      "4.5 Mean temperature difference, calculating the outlet temperature of working fluids"
                    ]
                  },
                  {
                    title: "Unit-5.0 Thermal Radiation",
                    points: [
                      "5.1 Basic radiation concepts, Black body radiation, Grey body, emissive power, emissivity, reflectivity, transmissivity",
                      "5.2 Law of radiation-Plank's, Wein's displacement, Stefan Boltzmann, Kirchoff's.",
                      "5.3 Irradiation, Radiosity, Concept of shape factor, Radiation shield.",
                      "5.4 Electrical Analogy,",
                      "5.5 Radiation through gases."
                    ]
                  }
                ]
              },
              {
                name: "Elective | Power Plant Engineering",
                code: "2425603B",
                units: [
                  {
                    title: "Unit-1.0 Coal Thermal Power Plant",
                    points: [
                      "1.1 General layout of modern coal thermal power plant and present scope of power generation in India.",
                      "1.2 Working of Rankine cycle.",
                      "1.3 Operation and Maintenance of Water treatment unit, Coal and ash handling unit and Natural Draught system.",
                      "1.4 High Pressure Boilers - Classification; Construction and principle of working of Lamont boiler, Benson boiler, Loeffler boiler, Velox boiler, Schmidt Hartman boiler, Ramsin boiler;",
                      "1.5 Fluidized bed combustion boilers (FBC): principle, need, types, various arrangement, control system and advantages over other boiler systems.",
                      "1.6 Indian Boiler Regulation Act",
                      "1.7 Maintenance procedure of major components of high pressure and FBC boilers.",
                      "1.8 Operation and Maintenance of Steam turbine, Steam nozzle, Steam condenser, Cooling tower, Economizer, Heat exchanger."
                    ]
                  },
                  {
                    title: "Unit-2.0 Gas Turbine Power Plant",
                    points: [
                      "2.1 Classification, open and closed cycle gas turbine",
                      "2.2 Gas turbine fuel",
                      "2.3 Brayton cycle: Optimum pressure ratio for maximum efficiency, work ratio, air rate, specific fuel consumption rate",
                      "2.4 Effect of operating variable on thermal efficiency and work.",
                      "2.5 Operation and Maintenance of main components of Gas turbine power plant."
                    ]
                  },
                  {
                    title: "Unit-3.0 Nuclear Power Plant",
                    points: [
                      "3.1 Introduction to nuclear fission and fusion,",
                      "3.2 Types of nuclear fuels, nuclear power plant fuels in India",
                      "3.3 Components of nuclear reactor, pressurized water reactor and boiling water reactor",
                      "3.4 Nuclear waste and its disposal"
                    ]
                  },
                  {
                    title: "Unit-4.0 Hydroelectric power plant and Solar power plant",
                    points: [
                      "4.1 Introduction of Hydro power plant and Solar power plant, and its location in India.",
                      "4.2 Operation and Maintenance of Micro and Pico Hydro power plant components.",
                      "4.3 Operation and Maintenance of Solar power plant components."
                    ]
                  },
                  {
                    title: "Unit-5.0 Safety, Maintenance cost, Economic and Environmental Aspects",
                    points: [
                      "5.1 Safety (protective) Equipment, safety training",
                      "5.2 Types, schedule, and cost of maintenance for different power plant",
                      "5.3 Load distribution parameter, load curve, comparison of site selection criteria",
                      "5.4 Capital and operating cost of different power plant",
                      "5.5 Pollution control technique and waste disposal option of different power plant"
                    ]
                  }
                ]
              },
              {
                name: "Elective | Press Tool, Jigs and Fixtures.",
                code: "2425603C",
                units: [
                  {
                    title: "Unit-1.0 Press Tools",
                    points: [
                      "1.1 Introduction to press tools.",
                      "1.2 Recent development in press tools.",
                      "1.3 press tools and accessories",
                      "1.4 Types of presses and Specifications",
                      "1.5 Cutting tools, bending tools, drawing tools, punching tools, blanking tools, notching tools, lancing tools, Embossing and Coining tools.",
                      "1.6 Effect of clearances and Stages of cutting operation.",
                      "1.7 Methods of mounting punches and dies."
                    ]
                  },
                  {
                    title: "Unit-2.0 Press Working",
                    points: [
                      "2.1 Press working operations - Cutting, bending drawing, punching, blanking, notching, lancing, Embossing and Coining.",
                      "2.2 Punch and die clearances for blanking and piercing, effect of clearance.",
                      "2.3 blanking and piercing tools, load variation during blanking-Calculation of press tonnage for blanking and piercing.",
                      "2.4 Bending allowances, bending methods.",
                      "2.5 Bending pressure-calculation of blank size and press tonnage for drawing metal flow during drawing operations.",
                      "2.6 Die set components- punch and die shoe, guide pin, bolster plate, stripper, stock guide, feed stock, pilot.",
                      "2.7 Types of dies, simple, compound, combination and progressive dies."
                    ]
                  },
                  {
                    title: "Unit-3.0 Jigs and fixtures:",
                    points: [
                      "3.1 Necessity for jigs and fixtures.",
                      "3.2 Definitions and concept of Jig and fixture.",
                      "3.3 Advantages of jigs and fixtures.",
                      "3.4 Elements of jigs and fixtures",
                      "3.5 Types of jigs: leaf jig, box & handle jig template jig, plate jig, indexing jig universal jig, vice jig- constructional details, working and application of above jigs.",
                      "3.6 Types of fixtures: vice fixtures, milling fixtures, boring fixtures, grinding fixtures- constructional details, working and application of above fixtures.",
                      "3.7 Basic principles of location: locating methods and devices,",
                      "3.8 Types of locators - pins and studs, V block, cup and cone location points, adjustable locating points, special adjustable stops, location from finished holes in the work, Diamond pin locator, Cam operated 'V' locator, Quick action 'V' locator, Six point location of a three legged object, Location of a cylinder on a v-block",
                      "3.9 Basic principles of the clamping: types of clamps-lever clamp, hinged clamp, two-way clamp, swinging clamp, wedge clamp, eccentric clamping arrangement, quick action clamp, Cam operated clamp, strap clamps quarter turn screw, Toggle clamp, Pneumatic and hydraulic clamps, Washers - 'C' washer, spherical and flat washer"
                    ]
                  },
                  {
                    title: "Unit-4.0 Jig Boring:",
                    points: [
                      "4.1 Introduction to jig boring.",
                      "4.2 Jig boring on vertical milling machine",
                      "4.3 Types jig boring machines: Open front machine, Cross rail type machine - constructional details & their working.",
                      "4.4 System of location of holes."
                    ]
                  },
                  {
                    title: "Unit-5.0 Design of Press tool, jigs and fixtures.",
                    points: [
                      "5.1 Design considerations and procedure for Die and punch.",
                      "5.2 Design of simple, compound and progressive dies.",
                      "5.3 Design considerations and procedure for following jigs- Template jig, plate jig, universal jig, leaf jig.",
                      "5.4 Design considerations and procedure for following fixtures-turning fixture, milling fixture, grinding fixture, boring fixture, welding fixture."
                    ]
                  }
                ]
              },
              {
                name: "Elective | Hydraulic & Pneumatic Controls",
                code: "2425603D",
                units: [
                  {
                    title: "Unit-1.0 Introduction to Hydraulic and Pneumatic Systems",
                    points: [
                      "1.1 Fluid power- history, concept and Definition, Fluid transport systems, Fluid power systems, merits and limitations",
                      "1.2 Classification of Fluid Power Systems- Based on the control system and its type",
                      "1.3 Concept of Hydrostatic and hydrodynamic",
                      "1.4 Laws governing fluid flow- Pascal's law, Continuity equation, Bernoulli's theorem",
                      "1.5 Flow through pipes-types, pressure drop in pipes.",
                      "1.6 Hydraulic fluid - types ISO and SAE grades of oil and designations, properties, oil contamination and their advantages and limitations.",
                      "1.7 General layout and ISO Symbols of hydraulic and pneumatic systems",
                      "1.8 Hazard and safety in industrial hydraulics and pneumatics."
                    ]
                  },
                  {
                    title: "Unit-2.0 Pumps and Actuators",
                    points: [
                      "2.1 Classification of pumps.",
                      "2.2 Construction and working of gear, vane, screw, lobe and piston pumps (axial and radial)",
                      "2.3 Performance characteristics, specifications and selection criteria of pumps.",
                      "2.4 Classification of hydraulic and pneumatic actuators.",
                      "2.5 Construction and working of linear actuators - single acting and double acting cylinders, Cylinder-cushioning, stop tube",
                      "2.6 Construction and working of rotary actuators (rotary Motors)-. Gear motors, Vane motors, Axial - in-line - swash plate piston motors",
                      "2.7 Specifications and selection criteria of actuators",
                      "2.8 Maintenance procedure for pumps and actuators"
                    ]
                  },
                  {
                    title: "Unit-3.0 Control Valves and Sensors",
                    points: [
                      "3.1 Classification of control valves",
                      "3.2 Construction and working of: i. pressure control valves-relief, unloading, sequence, counter balance, pressure reducing valves; ii. Direction control valves- check valves, 2/2, 3/2, 4/2, 4/3, 5/2, 5/3 D.C. Valves used in hydraulics and pneumatics; iii. Servo valves and Flow control valves - Non-compensated, Pressure and temperature compensated.",
                      "3.3 Standard centre positions, methods of actuation, Types of valve element",
                      "3.4 Hydraulic and pneumatic sensors - Introduction, Unique features",
                      "3.5 Types-Pressure and temperature monitoring sensors, hydraulic flow rate sensor, level sensor, Pneumatic Proximity Sensors, Back Pressure Sensor (Pilot tube), Reflex Sensor (Screen Nozzle) Air Barrier Sensor,"
                    ]
                  },
                  {
                    title: "Unit-4.0 Compressor, Components and Accessories",
                    points: [
                      "4.1 Pneumatic Control System-Introduction, Air Preparation-Primary and Secondary Air Treatment",
                      "4.2 Pneumatic Power Source- Compressor, Classification, Air Receiver and Control Methods",
                      "4.3 Compressors-Types, construction, working principle of Reciprocating Type Air Compressor-Single and Multi-stage Piston Pump, Rotary compressors, PV Diagram and Work Done",
                      "4.4 Construction, working principle of FRL unit, Dual (twin) pressure valve, shuttle valve, Quick exhaust valve, Time delay valve.",
                      "4.5 Accessories: Oil reservoir, pipes, hoses, fittings, oil filters, air filters, seals and gaskets, intensifiers, accumulators, heat exchanger, muffler, Air Dryer",
                      "4.6 Hydraulic pipes and pneumatics pipes -Types, standards, designation methods and specifications, pressure ratings, applications and selection criteria"
                    ]
                  },
                  {
                    title: "Unit-5.0 Hydraulic and Pneumatic Circuits",
                    points: [
                      "5.1 Working and applications of basic Hydraulic Circuits, types - intensifier, regenerative, synchronizing, sequencing, speed components",
                      "5.2 Design hydraulic circuits -single and double acting hydraulic cylinders, motors, circuit for speed control Meter-in, Meter-out, Bleed Off circuit",
                      "5.3 Design hydraulic circuit for Regenerative, synchronizing counterbalance, Sequencing circuits, two pumps unloading",
                      "5.4 Design hydraulic circuits for Milling, Grinding and Shaper machine",
                      "5.5 Pneumatic circuits: Circuit diagram, components, working and applications. Analysis of Multiple Actuators",
                      "5.6 Design pneumatic circuit by classic, cascade, step counter, karnaugh and combinational circuit design",
                      "5.7 Design pneumatic circuits for- direct/indirect control of single and double acting air cylinders, motors, two step feed control, automatic cylinder reciprocation, time delay, sequencing circuits, Logic AND/OR circuits",
                      "5.8 Design pneumatic circuits for Speed control of cylinders and motors.",
                      "5.9 Analysis of Hydraulic and Pneumatic Circuits",
                      "5.10 Use of simulation software for hydraulic and pneumatic circuits",
                      "5.11 Selection of relevant components, fault detection, Remedies and Maintenance of hydraulic and pneumatic systems."
                    ]
                  },
                  {
                    title: "Unit-6.0 Electro Pneumatic System and Electro Hydraulic Systems",
                    points: [
                      "6.1 Introduction to Pneumatic servo system, Hydro-Pneumatics, Electro-Pneumatics, Electro-hydraulic",
                      "6.2 Applications, Advantages and Disadvantages of above systems.",
                      "6.3 Electro-pneumatic controls, operation of electric actuated valves, Pneumatic electrical transducers, Electric converters, signal processors. Relays and protection relays. Connections of direct and indirect management.",
                      "6.4 Logic circuits- Time Tracking Control, Checking workflows, Proportional pneumatics, Proportional switching",
                      "6.5 Electrohydraulic control, electro Hydraulic cylinders, Control of pneumatic and hydraulic processes using a PLC controller",
                      "6.6 Design of basic electro-pneumatic and electrohydraulic circuits.",
                      "6.7 Application of hydraulic and Electro Hydraulic System working principle, major elements of - Automotive hydraulic brake and power steering, Industrial Fork lift, Hydraulic jack, Hydraulic press, Rotary machining station",
                      "6.8 Application of pneumatic and Electro pneumatic System- working principle, major elements of -Allocating device, sorting device, edge folding device, Foil welding, Feed rail separator, Input station for laser cuter, Drilling machine"
                    ]
                  }
                ]
              },
              {
                name: "Elective | Renewable and Alternate Energy Sources",
                code: "2425603E",
                units: [
                  {
                    title: "Unit-1.0 Introduction to Energy Sources",
                    points: [
                      "1.1 Major sources of energy: Renewable and Non-renewable and comparison.",
                      "1.2 Primary and secondary energy sources.",
                      "1.3 Energy Scenario: - Prospects an Need of renewable and alternate energy sources.",
                      "1.4 Hybrid energy systems, Distributed energy systems and dispersed generation (DG).",
                      "1.5 Prospects and Achievements of renewable energy sources in India in general and Bihar state in particular.",
                      "1.6 Issues related to power generation through renewable energy sources."
                    ]
                  },
                  {
                    title: "Unit-2.0 Solar Energy",
                    points: [
                      "2.1 Solar radiation: Beam and diffuse radiation, Solar constant, Solar Radiations at earth's surface Solar Radiation Geometry: Declination, hour angle, altitude angle, incident angle, zenith angle, solar azimuth angle attenuation and measurement of Solar radiation, local Solar time, derived Solar angles.",
                      "2.2 Flat plate collectors, concentrating collectors, elements and working",
                      "2.3 Solar air heaters-types, Solar driers, elements and working.",
                      "2.4 Storage of Solar energy-thermal storage, Electrical storage, Chemical storage.",
                      "2.5 Solar water heaters, Solar distillation, Solar still, Solar cooker, elements and working.",
                      "2.6 Photovoltaic - Solar cells & its applications, Solar panels, Solar PV pump, Solar Home lighting systems, Solar street lights, elements and working. (no derivations and numerical)"
                    ]
                  },
                  {
                    title: "Unit-3.0 Wind Energy",
                    points: [
                      "3.1 Basic Principle of wind energy conversion.",
                      "3.2 Power in wind, Available wind power formulation, Power coefficient, Maximum power",
                      "3.3 Main considerations in selecting a site for wind mills.",
                      "3.4 Advantages and limitations of wind energy conversion.",
                      "3.5 Classification of wind mills",
                      "3.6 Construction and working of horizontal and vertical axis wind mills, their comparison",
                      "3.7 Main applications of wind energy for power generation and pumping."
                    ]
                  },
                  {
                    title: "Unit-4.0 Energy from Biomass",
                    points: [
                      "4.1 Energy from Biomass: Common species recommended for biomass.",
                      "4.2 Methods for obtaining energy from biomass",
                      "4.3 Thermal classification of biomass a) Gasified, b) Fixed bed and fluidized",
                      "4.4 Comparison of Biomass with conventional fuels",
                      "4.5 Constructional details, site selection, filling a digester for starting, maintaining Biogas production, Fuel properties of Bio gas, and applications of Biogas.",
                      "4.6 Maintenance of Biogas plants.",
                      "4.7 Application of gasifier",
                      "4.8 Biodiesel production and application",
                      "4.9 Agriculture waste as a biomass",
                      "4.10 Biomass digester",
                      "4.11 Energy from wastes: Recycling of plastic and Tire/Rubber waste to produce fuel.",
                      "4.12 Recycling of Mixed Solid Municipal waste to produce energy/Synthetic gases.",
                      "4.13 Recycling of used Vegetable oil.",
                      "4.14 Energy from flowing drain water, Energy from mass mobility of human and vehicles at Railway stations, Malls, Highways by modifying speed breakers, steps, stairs etc."
                    ]
                  },
                  {
                    title: "Unit-5.0 Geothermal Energy, Energy from Oceans",
                    points: [
                      "5.1 Introduction, geothermal sources, classification, compressed resources, exploration, environmental implications, applications, advantages and disadvantages.",
                      "5.2 Geothermal plant.",
                      "5.3 Ocean Thermal Electric Conversion (OTEC) systems like open cycle, closed cycle.",
                      "5.4 Energy from tides, basic principle of tidal power, single basin and double basin tidal power plants, advantages, limitation."
                    ]
                  },
                  {
                    title: "Unit-6.0 Fuel Cells and Hydrogen Energy",
                    points: [
                      "6.1 Fuel Cells- Introduction, Classification :-proton exchange membrane fuel cells (PEMFCs), solid oxide fuel cells (SOFCs), and alkaline fuel cells, Principles, performance, application, advantages and limitations.",
                      "6.2 Hydrogen Energy Introduction, production, storage, transportation, safety, utilization of hydrogen gas, comparison with other automobile fuels."
                    ]
                  }
                ]
              },

              {
                name: "Open Elective | Electric Vehicle (Advanced)",
                code: "2400604G",
                units: [
                  {
                    title: "Unit-1.0 Vehicle Dynamics",
                    points: [
                      "1.1 Vehicle Movement",
                      "1.2 Rolling Resistance: Equation, Coefficient, factor affecting rolling resistance, typical values of rolling resistance",
                      "1.3 Grading resistance",
                      "1.4 Road resistance",
                      "1.5 Acceleration resistance",
                      "1.6 Total driving resistance",
                      "1.7 Aerodynamic drag: Equation, typical values of the drag coefficient.",
                      "1.8 Vehicle dynamics: Hybrid and Electric Vehicles, DC Motor Dynamics and Control, AC Motor Dynamics and Control"
                    ]
                  },
                  {
                    title: "Unit-2.0 Elements of Automobile",
                    points: [
                      "2.1 Suspension and Damping systems",
                      "2.2 Brake system: Half-step braking, Full step Braking",
                      "2.3 Transaxle",
                      "2.4 Elements of Noise Vibration and Harshness Control",
                      "2.5 Body balancing",
                      "2.6 Tyre Technology",
                      "2.7 AC/DC motor",
                      "2.8 Air-conditioning and Heating System",
                      "2.9 Lighting System",
                      "2.10 Automotive wiring system",
                      "2.11 Earthing and Insulation",
                      "2.12 Charging stations – Installation and Commissioning",
                      "2.13 Vehicle control unit"
                    ]
                  },
                  {
                    title: "Unit-3.0 EV Power Transmission System",
                    points: [
                      "3.1 Transmission System: Single and Multi-transmission system",
                      "3.2 EV Power Train",
                      "3.3 EV Power Train Components: Battery Pack, DC-AC Converter, Electric Motor, On-Board Charger.",
                      "3.4 Battery Parameters: Voltage, Current, Charging rate, efficiency, energy density, power density, State of Charge (SoC), Depth of Discharge (DoD), State of Health (SoH), Operating Temperature, specific energy, specific power, life cycle and cost.",
                      "3.5 Battery Assembly and Dismantling.",
                      "3.6 Gear and Differential Assembly",
                      "3.7 Safe disposal of used battery"
                    ]
                  },
                  {
                    title: "Unit- 4.0 Vehicle Control Unit (VCU)",
                    points: [
                      "4.1 Electronic Control Unit: Battery Management System, DC-DC Converter, Thermal Management System and Body Control Module.",
                      "4.2 Predefined functions",
                      "4.3 Connections with EV subsystem",
                      "4.4 Controller Area Network (CAN) communication",
                      "4.5 Interaction of CAN Communication with VCU.",
                      "4.6 Troubleshooting and Assessment",
                      "4.7 Dynamometers: Introduction",
                      "4.8 Environmental Chambers"
                    ]
                  },
                  {
                    title: "Unit- 5.0 EV Charging Technologies",
                    points: [
                      "5.1 Charging Technology: Classification",
                      "5.2 Grid-to-Vehicle (G2V)",
                      "5.3 Vehicle to Grid (V2G) or Vehicle to Buildings (V2B) or Vehicle to Home(V2H).",
                      "5.4 Bi-directional EV Charging Systems.",
                      "5.5 Energy Management Strategies.",
                      "5.6 Wireless Power Transfer (WPT) technique for EV Charging."
                    ]
                  }
                ]
              },
              {
                name: "Professional Ethics",
                code: "2400107",
                units: [
                  {
                    title: "Unit-1.0 Introduction to Professional Ethics",
                    points: [
                      "1.1 Basic concepts: Ethics, Morals, Values and Integrity.",
                      "1.2 Professional Ethics: Meaning, Need and Scope.",
                      "1.3 Ethical Dilemmas: Concept and Resolution.",
                      "1.4 Code of Conduct and Professional Responsibilities."
                    ]
                  },
                  {
                    title: "Unit-2.0 Engineering Ethics and Responsibilities",
                    points: [
                      "2.1 Engineering as Social Experimentation.",
                      "2.2 Engineers' Responsibility for Safety, Risk, and Liability.",
                      "2.3 Environmental Ethics and Sustainable Development.",
                      "2.4 Global Issues in Engineering Ethics."
                    ]
                  }
                ]
              },
              {
                name: "Employability Skills Development",
                code: "2400408",
                units: [
                  {
                    title: "Unit-1.0 Goal Setting",
                    points: [
                      "1.1 Career planning, SWOT",
                      "1.2 Resume using Internet formats.",
                      "1.3 Showcase portfolios.",
                      "1.4 Personal grooming.",
                      "1.5 Self-Introduction.",
                      "1.6 Website Development."
                    ]
                  },
                  {
                    title: "Unit-2.0 Capacity Development",
                    points: [
                      "2.1 Interview Skills",
                      "2.2 Group Discussion – Do’s & don’ts, leadership, Teamwork, how to interrupt, synthesis, and analysis of topics.",
                      "2.3 Social Media for Personal Enrichment",
                      "2.4 Body language",
                      "2.5 Self-Management.",
                      "2.6 Emotional Intelligence"
                    ]
                  },
                  {
                    title: "Unit-3.0 Utilizing Potential",
                    points: [
                      "3.1 Social Networking",
                      "3.2 Social Engagements, Volunteering",
                      "3.3 Collaboration& Team-work.",
                      "3.4 QC-Tools – Check sheets, Fishbone Diagram, Histogram, Pareto chart, Control-chart, Scatter Diagram, Stratification,",
                      "3.5 Lean Manufacturing, Kanban, Kaizen, Five S, Poka-yoke, Quality Circle"
                    ]
                  }
                ]
              }
            ];
            return semesters;
          })()
        },



        {
          id: "civil",
          title: "Civil Engineering",
          icon: "fas fa-drafting-compass",
          semesters: (() => {
            const semesters = syllabusEmptySemesters(6);

            // Diploma civil sem 1

            semesters.sem1.theory = [
              {
                name: "Basic Engg. Mathematics",
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
                name: "Applied Chemistry - A",
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
                      "1.7 Concept of Chemical bonding - Cause of chemical bonding, Types of Bonds: Ionic Bond (NaCl, CaCl2, MgO), Covalent Bond, Polar and Nonpolar Covalent Bonds (H2, F2, HF, HCl) & Co-ordinate Bond (CO, NH4+, O3, H2SO4).",
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
                      "2.4 Water Quality Index - Biological Oxygen Demand, Chemical Oxygen Demand, Determination of Dissolved Oxygen",
                      "2.5 Indian standard specification of drinking water."
                    ]
                  },
                  {
                    title: "Unit-3.0 Engineering materials",
                    points: [
                      "3.1 Natural Occurrence of Metals- Minerals, ores.",
                      "3.2 Metallurgy - General principles of Metallurgy, Gangue, Flux and Slag, Steps involved in metallurgy.",
                      "3.3 Extraction of Aluminium, Iron and Copper from their important ores along with reactions, Properties and uses.",
                      "3.4 Alloys - Definition, Purpose of alloying, Ferrous and Non-Ferrous Alloy with suitable examples, Composition, Properties, and their applications.",
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
                      "4.8 Viscosity & Viscosity Index. Flash point. Fire point, Cloud & Pour point"
                    ]
                  },
                  {
                    title: "Unit-5.0 Electrochemistry",
                    points: [
                      "5.1. Introduction, Electrolyte and Nonelectrolyte, Electrolytic and Metallic Conduction, Factors affecting Electrolytic Conductance.",
                      "5.2. Molar Conductivity and Equivalent Conductivity. Variation of Molar Conductivity, Kohlrausch's law.",
                      "5.3. Faraday's Laws of Electrolysis.",
                      "5.4. Galvanic Cell, Electrode Potential, Measurement of Electrode Potential SHE (Standard Hydrogen electrode), EMF, Electrochemical Series, Nernst Equation for Electrode Potential.",
                      "5.5. Batteries, Primary Cells - Dry cell, Secondary cell - Lead storage battery, Fuel cells.",
                      "5.6. Corrosion, their types (Dry & Wet corrosion) and prevention."
                    ]
                  }
                ]
              },
              {
                name: "Fundamentals of Mechanical Engineering",
                code: "2625103",
                units: [
                  {
                    title: "Unit-1.0 Introduction to Thermodynamics",
                    points: [
                      "1.1 Role of thermodynamics in engineering and science,",
                      "1.2 Types of thermodynamics systems",
                      "1.3 Specific volume, enthalpy, pressure, temperature, thermodynamic work, thermodynamic equilibrium",
                      "1.4 First law, second law and zeroth of thermodynamics",
                      "1.5 Enthalpy of wet steam, superheated steam, dryness fraction, degree of superheat",
                      "1.6 Modes of heat transfer: conduction- composite walls, combined conduction, convection, radiation, application of heat transfer modes"
                    ]
                  },
                  {
                    title: "Unit-2.0 Internal Combustion Engine and Refrigeration",
                    points: [
                      "2.1 Types of internal combustion engines- S.I. and C.I. Engines,",
                      "2.2 Construction and working two stroke and four stroke petrol engines and two stroke and four stroke diesel engines",
                      "2.3 BP, heat supplied and brake thermal efficiency of IC engines.",
                      "2.4 Common faults in IC engines, remedial measures to rectify the faults",
                      "2.5 Air pollution due to IC engines.",
                      "2.6 Heat engine, concept of refrigeration, ton of refrigeration, unit of refrigeration, COP",
                      "2.7 Major components of vapor compression systems, heat pump, Carnot cycle, Carnot efficiency,",
                      "2.8 Types of refrigerants",
                      "2.9 Types of air conditioning systems - window, package, central air-conditioning systems",
                      "2.10 Domestic refrigerator.",
                      "2.11 Basic fault finding in refrigerator and window air-conditioner.",
                      "2.12 Methods of energy saving in refrigeration and air-conditioning systems."
                    ]
                  },
                  {
                    title: "Unit-3.0 Engineering Materials",
                    points: [
                      "3.1 Metallic materials: Introduction to engineering materials, classification of materials; Ferrous alloys- carbon steel, low-alloy steel, tool steel, stainless steel, cast iron; Aluminum alloys, nickel alloys, copper alloys, titanium alloys; Magnetic, dielectric and superconducting materials",
                      "3.2 Non-metallic materials: Ceramics - types and applications; Polymers- thermoplastic polymers, thermosetting polymers, elastomers; Metallic glasses: types, glass forming ability of alloys, melt spinning process; Composites- particulate composites, fibrous composites, laminated composites",
                      "3.3 Mechanical properties: Tensile strength, elasticity, plasticity, hardness, toughness, brittleness, stiffness, ductility, malleability, cohesion, impact strength, fatigue, creep, Hooke's law, Poisson's ratio",
                      "3.4 Magnetic properties of materials: Intensity of magnetization, magnetic field (h) or magnetic intensity, magnetic susceptibility, retentivity, coercivity",
                      "3.5 Optical properties of materials - elastic properties of materials, dielectric properties of materials",
                      "3.6 Physical properties of materials: Electrical conductivity, melting temperature of material, semiconductors, thermal conductivity, fusibility, reluctance (as magnetic properties), density, melting point and boiling point."
                    ]
                  },
                  {
                    title: "Unit-4.0 Manufacturing Processes and Machine Tools",
                    points: [
                      "4.1 Basic machine tools: Introduction to lathe, drill, milling and grinding machines; Types of operations / jobs which can be performed on machine tools listed above.",
                      "4.2 Metal joining processes: Welding- types, working set up of arc and gas welding, precautions and safety during arc and gas welding; Brazing and soldering- general set up, applications.",
                      "4.3 Foundry- concept, process of casting a component, applications.",
                      "4.4 Basic metal forming processes- bending, rolling, forging and extrusion- concept and its application",
                      "4.5 Additive manufacturing techniques- introduction to various additive manufacturing processes- stereo-lithography, LOM, FDM, SLS, SLM, Binder Jet technology, Direct Energy Deposition",
                      "4.6 FDM based 3D printer, its working and construction, Process parameters"
                    ]
                  },
                  {
                    title: "Unit-5 Power Transmission",
                    points: [
                      "5.1 Belt drives flat belt and v-belt drive, ropes and chain, velocity ratio slip, length of the belt, open belt and cross belt drives. Ratio of friction tensions, centrifugal tension in a belt, Power transmitted by belts and ropes, Initial tensions in the belt",
                      "5.2 Gear drives- classification, simple, compound - reverted and epicyclic gear trains, their selection for different applications, gear trains velocity ratio, gear ratio",
                      "5.3 Couplings- muff coupling and flange coupling joints- cotter joint and knuckle joint",
                      "5.4 Helical springs (closed and open coil)",
                      "5.5 Friction clutches: single plate, multi plate, cone clutch, variable speed clutch, positive drive clutches: claw and jaw clutch. (construction and working)",
                      "5.6 Brakes: shoe brake, internal expanding and disc brakes. (construction and working)",
                      "5.7 Fasteners: keys, nut-bolt connections, screws, rivets"
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
                      "3.0 Comprehension, vocabulary enhancement and grammar exercises based on the reading of the following texts:",
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
                    title: "Unit-4.0 Vocabulary and Grammar",
                    points: [
                      "4.1 Word Formation: Prefix, Suffix, Acronym",
                      "4.2 Synonyms, Antonyms, Homonyms, One Word Substitution, Idioms and Phrases",
                      "4.3 Technical Jargons - Related to the respective program",
                      "4.4 Parts of speech",
                      "4.5 Time and Tense",
                      "4.6 Transformation: Voice, Narration, Removal of 'Too', Question Tag",
                      "4.7 Punctuation"
                    ]
                  },
                  {
                    title: "Unit-5.0 Professional Writing",
                    points: [
                      "5.1 Precis Writing",
                      "5.2 Business Letters / Applications",
                      "5.3 Drafting E-mails, Notices, Memos, Circulars",
                      "5.4 Report Writing: Project and Event/Incident Report Writing"
                    ]
                  },
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
                      "1.4 Dimensioning techniques: types and applications of chain, parallel and coordinate dimensioning as per IS SP-46.",
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
                name: "Professional Ethics",
                code: "2600107",
                units: [
                  {
                    title: "Unit-1.0 Values and Ethics in Day to Day Life",
                    points: [
                      "1.1 Values- Definition and examples, Ethics- definition and examples, Concept of attitude and development of attitude",
                      "1.2 Importance of values and ethics in day to day activities and at workplace- Ethical ways of communication, environmental considerations in engineering processes, Basic concept of Carbon footprint, ethics at workplace",
                      "1.3 Examples of situations depicting values-based decisions and ethical behavior in day to Day life"
                    ]
                  },
                  {
                    title: "Unit-2.0 Values and Ethics in Profession",
                    points: [
                      "2.1 Relevance of profession to society",
                      "2.2 Ethical principles such as respecting others and ourselves, respecting the rights of others, keeping promises, avoiding unnecessary problems to others, avoiding cheating and dishonesty, showing gratitude towards others and encouraging them to work",
                      "2.3 Identification of activities and related ethical and unethical behavior for professional activities in their area of work",
                      "2.4 Examples of situations depicting values- based decisions and ethical behavior"
                    ]
                  }
                ]
              },
              {
                name: "Sports, Yoga and Meditation",
                code: "T2600008",
                units: [
                  {
                    title: "Unit-1.0 Sports and Exercises",
                    points: [
                      "1.1 Historical development of physical activities and sports in India, Indian ancient games- Kho-Kho and Kabaddi, Chariot races, riding elephants and horse, swordsmanship, wrestling, boxing, atyapatya, archery, dancing, dands baithak, malkhamb, lezim, lathi etc",
                      "1.2 Origin of traditional sports, 3rd century BCE- martial arts and archery, indoor games like Chess and Snakes & Ladders have origins in ancient India, in the form of games of Chaturanga and Gyan Chauper, Dholavira, the world's oldest terraced arena 3000 BC",
                      "1.3 Definition of play, game, sports, exercise, psychology, sports psychology and exercise psychology, psychology and common sense.",
                      "1.4 Mental toughness- mind, Imagery, use of imagery and imagery in sports, types of imagery (visual, kinesthetic, auditory and olfactory)",
                      "1.5 Motivation in sport and goal setting in sports",
                      "1.6 Arousal regulation - self-awareness of regulation, anxiety reduction techniques- somatic anxiety reduction techniques, cognitive Anxiety reduction, multimodal anxiety reduction, coping with stress. Arousal -inducing techniques. Arousal and anxiety measurement factors, Arousal and anxiety signs recognition",
                      "1.7 Nutrition and rehabilitation, Importance of concentration and attentional focus in sports and training, Impact of health on healing from physical athletic injuries. Impact of exercise to increase mental wellness, Role of coach in sports, parents' involvement in their children's sports activities.",
                      "1.8 Adaptation of sports and exercises for physically challenged students in all levels."
                    ]
                  },
                  {
                    title: "Unit-2.0 Yoga and Meditation",
                    points: [
                      "2.1 Origin of yoga, History and development of yoga, Adi yogi, evidences of yoga in pre-Vedic period (2700 B.C.), Vedic Period, Pre-Classical Period, Classical Period- Patanjali's period, Modern Period.",
                      "2.2 Yoga practices and the related literature- Vedas (4), Upanishads (108), Smritis, teachings of Buddhism, Jainism, Panini, Epics (2), Puranas (18)",
                      "2.3 Importance of Yoga & Mediation, meaning of the term Yoga and Meditation, Fundamentals Principles of Yoga & Fitness training, Eight Limbs of Yoga",
                      "2.4 Difference between yoga asana and physical exercises, Difference between yoga and meditation",
                      "2.5 Role of Yoga and Meditation in Purificatory Process, in character building, developing concentration, will power and discipline",
                      "2.6 Types of Yoga Practices: Asanas, Pranayama, Meditation",
                      "2.7 Mindfulness: knowing the mind, training the mind, feeling the mind",
                      "2.8 Different Methods of meditation, Physiology of meditation, Mental, physical and emotional benefits of Asanas, Pranayama, Concentration and Meditation",
                      "2.9 Bandha, Mudra and Chakra",
                      "2.10 Effects of Asanas and pranayama on physiology of human body",
                      "2.11 Importance of Suryanamaskar",
                      "2.12 Adaptation of Yoga and meditations for physically challenged students in all levels.",
                      "2.13 Yoga Asanas Do's and Don'ts for Beginners"
                    ]
                  },
                  {
                    title: "Unit 3.0 Fitness and Wellness",
                    points: [
                      "3.1 Evolution of wellness, 3,000-1,500 BC: Ayurveda -holistic system, Tailored Ayurvedic regimens as per unique constitution of each person (their nutritional, exercise, social interaction and hygiene needs) - with the goal of maintaining balance that prevents illness.",
                      "3.2 Meaning, Importance, Definition and dimensions of Health and Wellness (WHO/Yoga)",
                      "3.3 Factors affecting Fitness and Wellness",
                      "3.4 Role of Physical Activities and Recreational Games in maintaining physiological and psychological wellbeing.",
                      "3.5 Different Methods to Maintain Health, Wellness and to enhance mood",
                      "3.6 Nutrition for Health & Wellness, Relationship between Diet and Fitness. Components of Balance Diet and its importance - Carbohydrates, Protein, Fat, Vitamins & Minerals, Water, Healthy Lifestyle through Diet and Fitness",
                      "3.7 Anxiety, Stress and Aging- Meaning of Anxiety, Stress and Aging, Types and Causes of Stress, Stress, anxiety and depression reduction with exercise, yoga and meditation",
                      "3.8 Energy Continuum and Recovery Process, Metabolism and exercise, Recovery from exercise, Replenishment of energy stores during recovery process, Removal of excess lactic acid produced during exercise"
                    ]
                  }
                ]
              }
            ];

            // Diploma civil sem 3

            semesters.sem3.theory = [
              {
                name: "Basic Surveying",
                code: "2415301",
                units: [
                  {
                    title: "Unit1.0 -Overview and Classification of Survey",
                    points: [
                      "1.1 Survey-Purpose and Use: Types of surveying- Primary and Secondary, Classification: Plane, Geodetic. Cadastral, Hydrographic, and Aerial.",
                      "1.2 Principles of Surveying",
                      "1.3 Scales: Engineer's scale, Representative Fraction (RF), diagonal scale, and Vernier Scale."
                    ]
                  },
                  {
                    title: "Unit-2.0 Chain Survey",
                    points: [
                      "2.1 Instruments used in chain survey: Metric Chain, Tapes, Arrow, ranging rod, Line ranger, Offset rod, Open cross-staff, Optical square.",
                      "2.2 Chain survey Station, Baseline, Check line, Tie line, Offset, Tie Station.",
                      "2.3 Ranging Direct and Indirect Ranging, Method of chaining, obstacles in chaining.",
                      "2.4 Errors in length: Instrumental error, personal error, error due to natural cause, random error, Principles of triangulation.",
                      "2.5 Types of offsets: Perpendicular and Oblique, Conventional Signs, Recording of measurements in a field book."
                    ]
                  },
                  {
                    title: "Unit-3.0 Compass Survey",
                    points: [
                      "3.1 Compass Traversing-open, closed Traverse.",
                      "3.2 Technical Terms: Geographic/True Meridians, Magnetic Meridians, and Bearings, Whole Circle Bearing system and Reduced Bearing system and examples on the conversion of given bearing to another bearing (from one form to another), Fore Bearing and Back Bearing, Calculation of internal and external angles from bearings at a station, Dip of Magnetic needle, Magnetic Declination.",
                      "3.3 Components of Prismatic Compass and their functions, Methods of using Prismatic Compass- Temporary adjustments and observing bearings.",
                      "3.4 Local attraction, Methods of correction of observed bearings - Correction at station and correction to included angles.",
                      "3.5 Methods of plotting a traverse and closing error, Graphical adjustment of closing error"
                    ]
                  },
                  {
                    title: "Unit-4.0 Levelling and Contouring",
                    points: [
                      "4.1 Basic Terms: Level surface, Horizontal and vertical surface, Datum, Bench Mark - Permanent, Temporary, Arbitrary. Reduced Level, Rise, Fall, Back sight, Fore sight, Intermediate sight, Change point, Height of instrument, Line of collimation.",
                      "4.2 Types of levels: Dumpy, Tilting, and Auto level, Temporary adjustments of Level.",
                      "4.3 Types of Levelling Staff: Self-reading staff and Target staff, Reduction of level by Height of Instrument Method, and Rise and Fall Method.",
                      "4.4 Levelling Types: Simple, Differential, Fly, Profile, and Reciprocal Levelling.",
                      "4.5 Contour, contour intervals, horizontal equivalent, Uses of contour maps, Characteristics of contours, Methods of Contouring-Direct and indirect"
                    ]
                  },
                  {
                    title: "Unit-5.0 3D Measurement of Area and Volume",
                    points: [
                      "5.1 Components and use of Digital planimeter.",
                      "5.2 Measurement of the area using a digital planimeter.",
                      "5.3 Measurement of the volume of the reservoir from the contour map."
                    ]
                  }
                ]
              },
              {
                name: "Concrete Technology",
                code: "2415302",
                units: [
                  {
                    title: "Unit-1.0 Cement",
                    points: [
                      "1.1 Introduction of cement, manufacturing process of cement (Wet & Dry process).",
                      "1.2 Composition of cement, effects of various constituent of cement on its properties, Bouge's compound and their significance, Hydration of cement.",
                      "1.3 Physical properties of cement: fineness, standard consistency, setting time, compressive strength and soundness.",
                      "1.4 Testing of cement: Field and Laboratory tests- fineness test, standard consistency test, setting time test, compressive strength test and soundness test.",
                      "1.5 Types of cement with I.S. Specifications and field applications: Ordinary Portland cement (33 grades, 43 grades or 43-5 grade and 53 grades OPC), Portland pozzolana cement, Portland slag cement, Rapid hardening cement, Sulphate resisting cement, Low heat cement, High alumina cement, White cement.",
                      "1.6 Storage of cement and its effect on the properties of cement."
                    ]
                  },
                  {
                    title: "Unit-2.0 Aggregates",
                    points: [
                      "2.1 Aggregates: Sources of aggregate, Classification according to source, size and shape.",
                      "2.2 Properties of fine and coarse aggregates: size, shape, surface texture, specific gravity, bulk density, moisture content, surface moisture, water absorption, strength, soundness.",
                      "2.3 Bulking of fine aggregate, Parameters for good aggregate.",
                      "2.4 Grading and Zoning of fine and coarse aggregates as per IS code. Fineness Modulus of fine and coarse aggregate.",
                      "2.5 Crushing value, impact value and abrasion value of coarse aggregates with Indian standard specification."
                    ]
                  },
                  {
                    title: "Unit-3.0 Concrete",
                    points: [
                      "3.1 Introduction to Concrete, Concreting Operations (Batching, mixing, transportation, placing, compaction, curing and finishing of concrete), Necessity of supervision for concreting operations.",
                      "3.2 Grades of concrete (ordinary, standard and high strength concrete) as per IS 456, Water cement ratio and its significance.",
                      "3.3 Properties & testing of fresh concrete: Workability, Cohesiveness, Segregation, Bleeding and Harshness; Determination of Workability by Slump test, Compaction factor test and Vee-Bee Consistometer test; Range values of workability requirements for different types of concrete works.",
                      "3.4 Properties & testing of hardened concrete: Compressive strength, Flexural strength, Durability, Shrinkage, Impermeability and Fire resistance; Determination of compressive strength of concrete cubes at different ages, interpretation and co-relation of test results.",
                      "3.5 Non-Destructive Testing (NDT) of hardened concrete: Purpose of NDT, methods of NDT- Rebound hammer test and Ultra pulse velocity test only."
                    ]
                  },
                  {
                    title: "Unit-4.0 Mix Design, Formwork and Joint",
                    points: [
                      "4.1 Concrete Mix Design: objective, methods of mix design, the study of procedural steps of mix design as per IS 10262:2019. (With example of M20/M25/M30 Grade)",
                      "4.2 Formworks of concreting: Different types of formworks for columns, beams and slabs, Materials used for formworks, Requirement of good formwork, stripping time for removal of formworks as per the provision of IS 456:2000.",
                      "4.3 Construction joints: Types of Joints, Materials used for filling joints, Method of joining."
                    ]
                  },
                  {
                    title: "Unit-5.0 Admixture in Concrete, Special Concrete and Extreme Weather Concreting",
                    points: [
                      "5.1 Admixture in Concrete: Purpose, Types of chemical and mineral admixtures such as accelerating admixtures, retarding admixtures, water reducing admixtures, super plasticizers, air entraining admixtures, fly ash, silica fume, and slag.",
                      "5.2 Special Concrete: Properties, advantages and limitations of the following types of special concrete- Ready mix concrete, Fiber reinforced concrete, Self-compacting concrete, High-performance concrete, Lightweight concrete, Geopolymer concrete.",
                      "5.3 Extreme weather concreting: Effects of cold and hot weather on concrete, Precautions to be taken while concreting in cold and hot weather conditions."
                    ]
                  }
                ]
              },
              {
                name: "Strength of Material for Civil Engg.",
                code: "2415303",
                units: [
                  {
                    title: "Unit-1.0: Moment of Inertia (MOI)",
                    points: [
                      "1.1 Definition of Moment of Inertia of plane lamina, Radius of gyration, Section modulus, Parallel and Perpendicular axes theorems, Moment of Inertia of Rectangle, square, circle, semi-circle, quarter circle and triangle section.",
                      "1.2 M.I. of symmetrical and unsymmetrical I-section, Channel section, T-section, Angle section, Hollow section and built-up section about centroidal axes and any other reference axis."
                    ]
                  },
                  {
                    title: "Unit-2.0: Simple Stresses and Strains",
                    points: [
                      "2.1 Definition of Rigid, Elastic and Plastic bodies. Definition of stress, strain, elasticity, Hooke's law, Elastic limit, Modulus of elasticity.",
                      "2.2 Type of Stress-Normal, Direct, Bending and Shear and nature of stresses i.e., Tensile and Compressive stresses.",
                      "2.3 Standard stress strain curve for Mild steel bar under tension, Yield stress, Proof stress, Ultimate stress, Strain at various critical points.",
                      "2.4 Definition of various Mechanical Properties- Elasticity, Plasticity, Ductility, Brittleness, Hardness, Stiffness, Toughness, Malleability, Creep, Fatigue.",
                      "2.5 Deformation of body due to axial force and self-weight (of uniform and tapered sections), forces applied at intermediate sections, maximum and minimum stress induced composite section under axial loading.",
                      "2.6 Concept of temperature stresses and strain. Longitudinal, lateral and shear strain, Modulus of Rigidity, Poisson's ratio, uniaxial, Biaxial and tri-axial stresses, volumetric strain, change in volume, Bulk modulus (Introduction only). Relation between modulus of elasticity, modulus of rigidity and bulk modulus."
                    ]
                  },
                  {
                    title: "Unit-3.0: Principal Stresses and Principal Planes",
                    points: [
                      "3.1 Concept of stress transformation.",
                      "3.2 Definition of Principal Plane & Principal stress.",
                      "3.3 Principal Plane & Stress due to uniaxial and bi-axial stress system & due to state of simple shear (Analytical method).",
                      "3.4 Introduction to Mohr's Circle with simple numerical problems."
                    ]
                  },
                  {
                    title: "Unit-4.0: Shear Force (SF) and Bending Moment (BM)",
                    points: [
                      "4.1 Types of Supports, Beams and Loads.",
                      "4.2 Concept and definition of shear force and bending moment, Relation between loads, shear force and bending moment.",
                      "4.3 Shear force and bending moment diagram for determinate beam subjected to point loads, uniformly distributed loads (UDL) and couple, point of contra flexure."
                    ]
                  },
                  {
                    title: "Unit-5.0: Bending and Shear Stresses in Beams",
                    points: [
                      "5.1 Concept of pure bending, assumptions, flexural equation, bending stresses and their nature, bending stress distribution diagram.",
                      "5.2 Concept of Moment of resistance (MOR) and simple numerical problems using flexural equation.",
                      "5.3 Shear stress equation, relation between maximum and average shear stress for rectangular and circular section.",
                      "5.4 Shear stress distribution diagram for angle sections, channel section, I-section, T section. Simple numerical problems based on shear equation."
                    ]
                  },
                  {
                    title: "Unit -6.0: Analysis of Trusses",
                    points: [
                      "6.1 Definition of frames and trusses, Classification of truss, perfect, imperfect, redundant and deficient truss, relation between members and joints, assumption in analysis.",
                      "6.2 Method of joint, method of section to find nature of forces."
                    ]
                  }
                ]
              },
              {
                name: "Building Construction & Material",
                code: "2415304",
                units: [
                  {
                    title: "Unit 1.0- Stones, Aggregate and Bricks",
                    points: [
                      "1.1 Stones: Stone as building material - Classification of Stones, Deterioration and Preservation of stone work",
                      "1.2 Aggregates: Aggregates- Classification, Characteristics, Grading of Aggregates,",
                      "1.3 Bricks: Classification - Manufacturing of clay bricks, Tests on bricks - (Dimension- Compressive Strength - Water Absorption - Efflorescence)"
                    ]
                  },
                  {
                    title: "Unit 2.0- Lime, Cement and Mortar",
                    points: [
                      "2.1 Lime: Lime - Properties and Classification",
                      "2.2 Cement: Cement, Ingredients, Manufacturing of Cement, Types of Cement, Test on Cement (Consistency test, Initial and Final Setting Time, Soundness, Compressive Strength)",
                      "2.3 Mortar: Mortar, Classification and properties of Mortar"
                    ]
                  },
                  {
                    title: "Unit 3.0- Timber and Modern Materials",
                    points: [
                      "3.1 Timber: Timber, Classification, Structure of Timber, Properties of Timber, Characteristics of Good Timber, Defects in Timber, Advantage and Disadvantage of Timber as an engineering material",
                      "3.2 Modern Materials: Glass, Ferrous and Non-Ferrous Metals, Ceramics, Geotextile and Geomembrane, Fiber glass reinforced plastic"
                    ]
                  },
                  {
                    title: "Unit 4.0- Building Components",
                    points: [
                      "4.1 Classification of Buildings as per National Building Code Group A to I, as per Types of Constructions- Load Bearing Structure, Framed Structure, Composite Structure.",
                      "4.2 Building Components - Building Components and their Function, Substructure - Foundation, Plinth, and Plinth Filling; Superstructure- Walls, Partition wall, Cavity Wall, Sill, Lintel, Doors and windows, Floor, roof, Column Beams and Parapet"
                    ]
                  },
                  {
                    title: "Unit 5.0- Sub-Structure and Super Structure",
                    points: [
                      "5.1 Job Layout and Excavation: Site clearance, Preparing job Layout, Layout for Load Bearing Structure and Framed Structure by Center Line and Face Line Method, Precautions, Excavation for Foundation, Earthwork for Embankment, Material for Plinth Filling. Tools and Plants Used for Earthwork",
                      "5.2 Sub-Structure: Foundation-Function of Foundation, Types of Foundation- Shallow Foundation, Stepped Footing, Wall Footing, Column Footing, Isolated and Combined Column Footing, Raft Foundation, Grillage Foundation. Deep Foundation-Pile Foundation, classification based on materials and functions, Well foundation and Caissons.",
                      "5.3 Super-Structure: Brick masonry: Terms used in brick masonry-header, stretcher, closer, quoins, course, face, back, hearting, bat bond, joints, lap, frog line, level and plumb Bonds in brick masonry- header bond, stretcher bond, English bond and Flemish bond. Requirements of good brick masonry, Junctions in brick masonry and their purpose and procedure. Precautions to be observed in Brick Masonry Construction, Comparison between stone masonry and Brick Masonry."
                    ]
                  },
                  {
                    title: "Unit 6.0: Building Communication and Ventilation",
                    points: [
                      "6.1 Horizontal Communication: Doors- Components of Doors, Fully Paneled situation with sketches, Doors, Partly Paneled and Glazed Doors, Flush Doors, Collapsible Doors, Rolling Shutters, Revolving Doors, Glazed Doors. Sizes of Door recommended by BIS.",
                      "6.2 Windows: Component of windows, Types of Windows-Fully Paneled, Partly Paneled and Glazed, wooden, Steel, Aluminum windows, Sliding Windows, Louvered Window, Bay window, Corner Dormer window, Skylight. Sizes of Windows recommended by BIS. Ventilators, Cement Grills",
                      "6.3 Vertical Communication: Stair Case, Ramps, Lift, Elevators and Escalators."
                    ]
                  }
                ]
              },
              {
                name: "Water Resource Engg.",
                code: "2415305",
                units: [
                  {
                    title: "Unit-1.0 Introduction to Hydrology",
                    points: [
                      "1.1 Hydrology: Definition and Hydrological cycle.",
                      "1.2 Rain Gauge: Symon's rain gauge, automatic rain gauge.",
                      "1.3 Methods of calculating average rainfall: Arithmetic mean, Isohyet, and Theissen polygon method.",
                      "1.4 Runoff, Factors affecting Run off, Computation of run off.",
                      "1.5 Maximum Flood Discharge measurement: Rational and empirical methods, Simple numerical problems."
                    ]
                  },
                  {
                    title: "Unit-2.0 Crop Water Requirement",
                    points: [
                      "2.1 Irrigation and its classification: Surface irrigation, Subsurface irrigation",
                      "2.2 Crop Water requirement: Cropping seasons, Crop period, base period, Duty, Delta, CCA, GCA, intensity of irrigation, factors affecting duty, Problems on water requirement and capacity of canal.",
                      "2.3 Methods of application of irrigation water and its assessment: Sprinkler irrigation, Drip irrigation",
                      "2.4 Area capacity curve."
                    ]
                  },
                  {
                    title: "Unit-3.0 Dam and Spillway",
                    points: [
                      "3.1 Dams and its classification: Earthen dams and Gravity dams (masonry and concrete).",
                      "3.2 Earthen Dams - Components with function, typical cross section, seepage through embankment and foundation and its control.",
                      "3.3 Methods of construction of earthen dam, types of failure of earthen dam and preventive measures.",
                      "3.4 Gravity Dams - Forces acting on dam, Theoretical and practical profile, typical cross section, drainage gallery, joints in gravity dam, concept of high dam and low dam.",
                      "3.5 Spillways-Definition, function, location, types and components, Energy dissipator"
                    ]
                  },
                  {
                    title: "Unit-4.0 Minor and Micro Irrigation",
                    points: [
                      "4.1 Bandhara irrigation: Layout, components, construction and working, solid and open bandhara.",
                      "4.2 Percolation Tanks - Need, selection of site.",
                      "4.3 Lift irrigation Scheme-Components and their functions, Lay out.",
                      "4.4 Drip and Sprinkler Irrigation- Need, components and Layout.",
                      "4.5 Well irrigation: types and yield of wells, advantages and disadvantages of well irrigation"
                    ]
                  },
                  {
                    title: "Unit-5.0 Diversion Head Work and Canal",
                    points: [
                      "5.1 Weirs-components, parts, types",
                      "5.2 Diversion head works - Layout, components and their function.",
                      "5.3 Barrages-components and their functions, Difference between weir and Barrage.",
                      "5.4 Canals - Classification according to alignment and position in the canal network, Cross section of canal in embankment and cutting, partial embankment and cutting, balancing depth, Design of most economical canal section.",
                      "5.5 Canal lining - Purpose, material used and its properties, advantages. Cross Drainage works- Aqueduct, siphon aqueduct, super passage, level crossing.",
                      "5.6 Canal regulators- Head regulator, Cross regulator, Escape, Falls and Outlets."
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

            // Diploma civil sem 5

            semesters.sem5.theory = [
              {
                name: "Hydraulics",
                code: "T2415501",
                units: [
                  {
                    title: "Unit-1.0 Introduction, Hydrostatic Pressure and Pressure Measurement",
                    points: [
                      "1.1 Introduction, need and importance of hydraulics in civil engineering. Technical terms used in Hydraulics - Fluid Mechanics, Hydrostatics, Hydro-kinematics, Hydro-Dynamics, Ideal and Real Fluid.",
                      "1.2 Properties of liquid - Viscosity-Density-Specific Gravity-Surface Tension-Capillarity-Vapour Pressure-Elasticity.",
                      "1.3 Various types of pressure - Atmospheric Pressure, Gauge Pressure, Absolute Pressure, Vacuum Pressure and Separation Pressure.",
                      "1.4 Measurement of pressure by different methods.",
                      "1.5 Measurement of difference of pressure using 'U' tube Manometer and inverted 'U' tube Manometer.",
                      "1.6 Relationship between pressure and depth of liquid.",
                      "1.7 Pressure diagram for different conditions.",
                      "1.8 Total pressure and center of pressure.",
                      "1.9 Computation of Total Pressure and depth of centre of pressure."
                    ]
                  },
                  {
                    title: "Unit-2.0 Fluid Flow Parameters",
                    points: [
                      "2.1 Types of flow: Laminar, Turbulent, Uniform, Non-uniform, Steady, Un-steady, Rotational, irrotational, One, Two and Three Dimensional flow.",
                      "2.2 Determine types of flow using Reynold's number.",
                      "2.3 Continuity Equation of flow.",
                      "2.4 Types of Energy of flowing liquid: Potential energy and kinetic energy.",
                      "2.5 Bernoulli's Equation, assumptions and its applications.",
                      "2.6 Momentum Equation based simple numerical."
                    ]
                  },
                  {
                    title: "Unit-3.0 Flow through Pipes",
                    points: [
                      "3.1 Characteristics of flow through pipes.",
                      "3.2 Major head loss in pipe: Frictional loss and its computation by Darcy Weisbach equation.",
                      "3.3 Practical examples of head loss for residential building. Major and Minor Energy (Head) losses in pipe Flow-frictional loss, loss of head at entry, exit, Sudden enlargement and contraction and at bend.",
                      "3.4 Computation of major head by Darcy Weisbach Equation.",
                      "3.5 Hydraulic Gradient Line (HGL) and Total Energy Line (TEL).",
                      "3.6 Design of Pipeline-using formula & Nomogram.",
                      "3.7 Water hammer in pipes: causes and Remedial measures.",
                      "3.8 Use of Moody's Diagram and Nomograms for calculating diameter of pipe from the given data.",
                      "3.9 Discharge measuring device for pipe flow: Venturimeter-construction and working.",
                      "3.10 Definition and types of orifice. Various Hydraulic Coefficient and its relation Coefficient of Contraction, Velocity, Discharge.",
                      "3.11 Discharge measuring for a tank: using Orifice, Hydraulic Coefficients of Orifice."
                    ]
                  },
                  {
                    title: "Unit-4.0 Flow through Open Channel",
                    points: [
                      "4.1 Characteristics of open channel flow.",
                      "4.2 Comparison of pipe flow and channel flow.",
                      "4.3 Field examples of open channel, Analyse uniform flow.",
                      "4.4 Froud's number, Hydraulic mean depth- concept & computation.",
                      "4.5 Use of Chezy's and Manning's formulae.",
                      "4.6 Most economical sections of channel Rectangular, Trapezoidal and circular shapes.",
                      "4.7 Specific Energy Diagram River Gauging, Measurement of mean velocity using surface float, velocity rod and current meter"
                    ]
                  },
                  {
                    title: "Unit-5.0 Notches and Weirs",
                    points: [
                      "5.1 Types of notches and weirs.",
                      "5.2 Computation of discharge through Rectangular Notch and V-Notch.",
                      "5.3 Computation of discharge through weirs.",
                      "5.4 Discharge through narrow crested and broad Crested weir and Discharge through Cipolletti weir."
                    ]
                  }
                ]
              },
              {
                name: "RCC Structure",
                code: "T2415502",
                units: [
                  {
                    title: "Unit-1.0: Introduction to Reinforced Cement Concrete (R.C.C.) & Methods of Design",
                    points: [
                      "1.1 Introduction to Reinforced Cement Concrete, use of steel as Reinforcing material, grades of steel and concrete, stress strain curve for concrete and mild steel.",
                      "1.2 Working Stress Method (WSM) of design: Assumptions, Stress block diagram, Permissible stresses, Concept of Equivalent sections.",
                      "1.3 Analysis of singly reinforced beam using WSM, Concept of under reinforced, over reinforced and balanced section.",
                      "1.4 Limit state and its types, Limit State Method (LSM) of design: Assumptions, Stress block diagram.",
                      "1.5 Analysis of singly reinforced beam using LSM, Concept of under reinforced, over reinforced and balanced section.",
                      "1.6 Simple numerical problems on ultimate moment of resistance and design of beam section (LSM & WSM)"
                    ]
                  },
                  {
                    title: "Unit-2.0: Doubly Reinforced Beam and Flanged Sections (LSM)",
                    points: [
                      "2.1 Introduction to doubly reinforced beam. It's necessity & importance.",
                      "2.2 Analysis of doubly reinforced section.",
                      "2.3 Simple numerical problems on finding moment of resistance and design of doubly reinforced sections.",
                      "2.4 Introduction to T & L section beams, advantages & uses, effective width as per IS 456-2000.",
                      "2.5 Analysis of singly reinforced T-Beam, strain diagram & stress diagram, depth of neutral axis, moment of resistance of T-beam section with neutral axis lying within the flange only.",
                      "2.6 Simple numerical problems on finding out effective width of flange & moment of resistance of T-beam section with N. A. lying within or upto the bottom of flange."
                    ]
                  },
                  {
                    title: "Unit-3.0: Shear, Bond and Development length in Design of RCC member",
                    points: [
                      "3.1 Nominal shear stress in RCC section, Design shear strength of concrete, Design of shear reinforcement, Minimum Shear Reinforcement, Provisions of IS 456, forms of shear reinforcement.",
                      "3.2 Types of bonds, Bond stress, check for bond stress, Determination of Development length in tension and compression members and check as per codal provisions, Anchorage value of 90-degree hook, Lapping of bars.",
                      "3.3 Simple numerical problems on Shear reinforcement, Adequacy of section for resisting shear."
                    ]
                  },
                  {
                    title: "Unit-4.0: Design of Slab (LSM)",
                    points: [
                      "4.1 Design of simply supported one-way slab for flexure, shear and deflection. Also check the slab as per the provisions of IS 456-2000.",
                      "4.2 Design of one-way cantilever slab, for Flexure including checks for Development length and Shear stress.",
                      "4.3 Design of two-way simply supported slab (IS Code method)."
                    ]
                  },
                  {
                    title: "Unit-5.0: Design of Axially Loaded Column and Footing (LSM)",
                    points: [
                      "5.1 Assumptions in limit state of collapse compression",
                      "5.2 Definition and classification of columns, effective length of column. IS Code provisions for minimum reinforcement; cover, maximum reinforcement, number of bars in rectangular, square and circular sections, diameter and spacing of lateral ties.",
                      "5.3 Analysis and design of axially loaded short, square, rectangular and circular columns with lateral ties only; check for short column and check for minimum eccentricity.",
                      "5.4 Types of footing, Design of isolated square footing for flexure and shear.",
                      "5.5 Simple numerical problems on the design of axially loaded short columns and isolated square footing."
                    ]
                  }
                ]
              },
              {
                name: "Estimating, Costing & Contracts",
                code: "T2415503",
                units: [
                  {
                    title: "Unit-1.0 Fundamentals of Estimating and Costing",
                    points: [
                      "1.1 Introduction: Need and importance of estimating and costing, Definitions of estimating and costing, Plinth area, Carpet area, administrative approval, technical sanction, Budget sanction.",
                      "1.2 Units of measurement: Different type of estimates: Preliminary, Approximate, Abstract, Rough Cost Estimate, Plinth Area Estimate, Cube Rate Estimate, Quantity Method Estimate, Detailed Estimate or Item Rate Estimate, Supplementary Estimate, Revised Estimate, Annual Repair or Maintenance Estimate (A. R. or A. M. Estimate)",
                      "1.3 Estimation methods: Long wall short wall method, Centre line method, partly centerline and short wall method, Rules for deductions.",
                      "1.4 Duties of quantity surveyor, measurement of items, entry in the measurement book, calculation of various quantities, preparation of bill."
                    ]
                  },
                  {
                    title: "Unit-2.0 Rate Analysis",
                    points: [
                      "2.1 Definition and purpose of rate analysis Rate analysis procedure, task work and factors affecting it, labour required for different works and labour rates, market rate of construction materials.",
                      "2.2 Schedule of rates (SOR), State PWD schedule of rates, CPWD DSR, CPWD Works manual, rate analysis for earthwork in excavation, cement concrete work, brick masonry work, RCC work, plastering and flooring work.",
                      "2.3 Material requirement for different works, bricks, cement, sand, aggregate, water, steel reinforcement, flooring material and painting material.",
                      "2.4 Costing, benefits of cost estimation and Cost control."
                    ]
                  },
                  {
                    title: "Unit-3.0 Contracts",
                    points: [
                      "3.1 Definition of contract, role of contractor.",
                      "3.2 Types of contracts: Lump Sum contract, Schedule rate contract, Labor contract, Target contract, Material supply contract, Piece work agreement; advantage and Disadvantage of various types of contracts. Elements of contract and contract documents.",
                      "3.3 Measurement book (MB) and nominal muster roll, Arbitration and Legislation and its importance, penalty clause of contract."
                    ]
                  },
                  {
                    title: "Unit-4.0 Specifications and Tenders",
                    points: [
                      "4.1 Specification and need of specification. Factors governing specification. Classification of specification. General specification of different type of residential buildings. Detailed Specification for earthwork excavation for foundation.",
                      "4.2 Tender, Procedure for inviting tender. Types of Tenders. Details to be mentioned in notice inviting tenders. Technical terms related to tender: Earnest money deposit, Security money deposit, receiving and opening of tender. E-tender procedure and its limitations."
                    ]
                  },
                  {
                    title: "Unit-5.0 Valuation",
                    points: [
                      "5.1 Purpose of valuation, factors consideration for valuation; cost, price, and value. Important terms: Municipal tax, capital cost, capitalized value, year of purchase, gross income, outgoings taxes and repair, scrap value, salvage value, market value, and book value.",
                      "5.2 Method of valuation: depreciation method of valuation, valuation based on cost, valuation based on profit, fixation of rent; method of calculation of depreciation."
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
                    title: "After completion of the course, the students will be able to",
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

            // Diploma civil sem 6 

            semesters.sem6.theory = [
              {
                name: "Environmental Engg.",
                code: "2415601",
                units: [
                  {
                    title: "Unit 1.0: Sources, Demand and Water Quality Assessment:",
                    points: [
                      "1.1 Sources of water: Surface and subsurface sources of water, Intake structures: Types, Purposes and its Location.",
                      "1.2 Water demand: Importance and necessity for planned water supplies, Various types of Water demand, Per capita demand, factors affecting per capita demand, Water supply scheme and its flow diagram, Variations in demand.",
                      "1.3 Population forecasting: Design period, Methods of population forecasting, (Simple problems on population forecasting).",
                      "1.4 Characteristics and Testing of water: Necessity of water analysis, Characteristics of water: Physical, Chemical and Biological; Physical Testing of water - Turbidity &color, Chemical Testing of water - Total Solids (TS), Hardness, Chlorides, Dissolved oxygen (DO), pH, Fluoride, Nitrogen (N) and its compounds.",
                      "1.5 Bacteriological/Biological tests: E-coli, B- coli index, MPN (Most probable number); Sampling of water, Guidelines, Specification of drinking water quality as per IS-10500:2012."
                    ]
                  },
                  {
                    title: "Unit 2.0: Purification of Water",
                    points: [
                      "2.1 Water Treatment: Water Treatment-Concept, Screening, settling operation, Sedimentation and its types, Sedimentation tank, Coagulation and its Mechanism, Coagulants, Flocculation, Mechanism of Flocculation, Sedimentation aided with coagulation.",
                      "2.2 Filtration: Theory, Purposes and Types of Filters, Construction, Mechanism and Operation of Slow Sand, Rapid Sand and Pressure Filter.",
                      "2.3 Disinfection: Methods of Disinfection, Kinetics of disinfection, Chlorination and Practices of Chlorination, Calculation of Doses of chlorine.",
                      "2.4 Water treatment Plant: Purpose, Construction and its flow diagram."
                    ]
                  },
                  {
                    title: "Unit-3.0: Distribution and Conveyance of Water",
                    points: [
                      "3.1 Conveyance system: Need, Purposes and advantages, Pipes Material used for conveyance of water, Plumbing system, House Water Connection, Different Cocks and valves, pipe fixtures and fittings, Types of joints.",
                      "3.2 Distribution System: Need, Purposes and Advantages, Methods of Distribution-Gravity, Pumping (Pressure) and Combined System.",
                      "3.3 Layout of distribution networks-Need of distribution layout, Types- Dead end system, Grid iron system, Radial system and Circular System; Detection of leakage in the distribution pipes.",
                      "3.4 Pipe network Analysis: Hardy-Cross method, equivalent pipe method, Appurtenances in the distribution system."
                    ]
                  },
                  {
                    title: "Unit-4.0: Domestic Sewages and Sewerage System:",
                    points: [
                      "4.1 Building Sanitation: Need and importance of sanitation, Definitions-Sewage, Sullage, Types of sewage, Definition of the terms related to building sanitation.",
                      "4.2 Pipes for sewerage system: Soil pipe, Sullage pipe, Vent pipe.",
                      "4.3 Building Sanitary Fittings: Water closets - Indian and European type, flushing cistern, washbasin, sinks, Urinals; Traps- types, qualities of good trap; Systems of plumbing one pipe, two pipe, single stack; Drainage systems: Principle, Need and Layout of drainage system.",
                      "4.4 System of Sewerage and Sewer appurtenances: Types of Sewers, System and Layout of sewerage, self-cleansing velocity and non-scouring velocity, Laying.",
                      "4.5 Testing and Maintenance of sewers: Inspection chambers and Manholes-component parts, location and spacing; Sewer Inlets, Street Inlets."
                    ]
                  },
                  {
                    title: "Unit-5.0: Sewage Treatment and Waste Management-",
                    points: [
                      "5.1 Analysis of sewage: Characteristics of Sewage- B.O.D., C.O.D, and its Significance; Aerobic and Anaerobic Processes; Bihar state pollution control board norms for disposal of treated sewage, Objective of sewage treatment and flow diagram of conventional sewage treatment plant.",
                      "5.2 Treatment of Sewage: Screening, Types of Screens, Grit removal, Skimming, Sedimentation of sewage, Aerobic and Anaerobic process, Sludge digestion, Trickling filters.",
                      "5.3 Sludge and its treatment: Activated sludge process, Disposal of sewage, Oxidation-Pond, Oxidation ditch, Septic tank, Recycling and Reuse of domestic waste, Sludge characteristics, Sludge treatment process, disposal of sludge, Design of Septic tank.",
                      "5.4 Solid waste disposal: composting, incineration, Introduction to sanitary landfill."
                    ]
                  }
                ]
              },
              {
                name: "Steel Structure",
                code: "2415602",
                units: [
                  {
                    title: "Unit-1.0 Basics of Steel Structure",
                    points: [
                      "1.1 Need and importance of steel structures with examples, Types of steel structures, Advantages and disadvantages of steel structure.",
                      "1.2 Steel Sections and its types, Grades of steel sections, Mechanical properties of steel sections.",
                      "1.3 Use of steel table and relevant standards IS: 808-1989 and IS Handbook No. 1/SP 6(1)-1964.",
                      "1.4 Types of Loads acting on steel structures as per IS 875-1987 Part I to V.",
                      "1.5 Methods of Design of Steel Structure: Working stress method and Limit state method, Advantages of limit state method over working stress method, Types of limit states- limit state of strength and limit state of serviceability, Partial factor of safety for loads and for materials as per IS: 800-2007."
                    ]
                  },
                  {
                    title: "Unit-2.0 Design of Connections (Limit State Method)",
                    points: [
                      "2.1 Types of Connections: Riveted, Bolted and Welded Connections.",
                      "2.2 Bolted Connection: Types of bolts, Types of bolted joints, Failure of bolted joints, Assumptions in the analysis of bolted joint.",
                      "2.3 Specification for bolted joint, Strength and efficiency of bolted joint, Design of bolted joints for axially loaded plates, single and double angle members as per IS: 800-2007.",
                      "2.4 Welded Connection: Types of welds-Butt weld and fillet weld, Assumptions in the analysis of welded connections.",
                      "2.5 Analysis and design of butt weld: Specifications for butt weld, Strength of butt weld, Design of butt weld for axially loaded plates as per IS: 800-2007.",
                      "2.6 Analysis and design of fillet weld: Specifications for fillet weld, Strength of fillet weld, Design of fillet weld for axially loaded plates, single and double angle members as per IS: 800-2007."
                    ]
                  },
                  {
                    title: "Unit-3.0 Design of Tension Member (Limit State Method)",
                    points: [
                      "3.1 Types of sections used for tension members, Net sectional area for flats and plates, Effective net area for angles.",
                      "3.2 Type of failure, Design strength of tension member governed by yielding of gross section, rupture of net section and block shear as per IS: 800-2007.",
                      "3.3 Analysis and Design of axially loaded single and double angle tension members with bolted and welded connection as per IS: 800-2007.",
                      "3.4 Introduction to gusset plate, lug angle and tension splice (meaning and purpose only)."
                    ]
                  },
                  {
                    title: "Unit-4.0 Design of Compression Member (Limit State Method)",
                    points: [
                      "4.1 Types of sections used for compression members, Effective length, radius of gyration and slenderness ratio. Permissible value of slenderness ratio, Calculation of Design compressive stress as per IS 800:2007.",
                      "4.2 Analysis and Design of axially loaded compression members (single and double angles, single and double channel, I-section, I-section with cover plate on flanges) with bolted and welded connection as per IS: 800-2007.",
                      "4.3 Introduction to built-up sections, column splice, lacing and battening (Meaning and purpose), Diagrams of single & double lacing and battening system. (No Numerical on lacing and battening)"
                    ]
                  },
                  {
                    title: "Unit-5.0 Design of Steel Beams (Limit State Method)",
                    points: [
                      "5.1 Types of sections used for steel beams, Classification of cross sections (plastic, compact, semi-compact and slender), Meanings of Laterally supported beams and laterally unsupported beams.",
                      "5.2 Bending strength of laterally supported beam and laterally unsupported beam, Shear strength of beam as per IS: 800-2007.",
                      "5.3 Analysis and design of laterally supported and unsupported beams (rolled I-sections only) with relevant checks as per IS: 800-2007.",
                      "5.4 Introduction to element of the steel roof truss, built-up beam, plate girder and gantry girder (meaning and purpose only)."
                    ]
                  }
                ]
              },
              {
                name: "Elective | Pre-Stress and Precast Concrete",
                code: "2415603A",
                units: [
                  {
                    title: "Unit-1.0: Introduction to Pre-stressed Concrete (PSC)",
                    points: [
                      "1.1 Principles of pre-stressed concrete and basic terminology.",
                      "1.2 Applications, advantages and disadvantages of pre-stressed concrete.",
                      "1.3 Materials used and their properties, Necessity of high-grade materials, Admixtures for concrete.",
                      "1.4 Types of Pre-stressing steel - Wire, Cable, tendon, Merits-demerits and application."
                    ]
                  },
                  {
                    title: "Unit-2.0: Methods and Systems of Pre-Stressing",
                    points: [
                      "2.1 Methods of Pre-stressing - Internal and External pre-stressing, Pre and Post tensioning-applications.",
                      "2.2 Systems for pre-tensioning process, applications, merits and demerits.",
                      "2.3 Systems for post-tensioning process, applications, merits and demerits",
                      "2.4 Losses of Pre-stress: loss due to elastic shortening of concrete, loss due to creep of concrete, loss due to shrinkage of concrete, loss due to relaxation of stress, loss due to friction and loss due to slip (simple numerical problems on determination of losses of Pre-stress).",
                      "2.5 BIS recommendation for percentage loss in case of pre and post tensioning."
                    ]
                  },
                  {
                    title: "Unit-3.0: Design and Analysis of Pre-Stressed Rectangular Beam Section",
                    points: [
                      "3.1 Basic assumptions in analysis of pre-stressed concrete beams.",
                      "3.2 Cable Profile in simply supported rectangular beam section concentric, eccentric, straight and parabolic. Effect of cable profile on maximum stresses at mid span and at support.",
                      "3.3 Numerical problems on determination of maximum stresses at mid span with linear (concentric and eccentric) cable profiles only."
                    ]
                  },
                  {
                    title: "Unit-4.0: Precast Concrete Elements",
                    points: [
                      "4.1 Advantages and disadvantages of precast concrete members.",
                      "4.2 Non-structural Precast elements: Paver blocks, Fencing Poles, Transmission Poles, Manhole Covers, Hollow and Solid Blocks, kerb stones as per relevant BIS specifications.",
                      "4.3 Structural Precast elements: Canal lining, Box culvert, bridge panels, foundation",
                      "4.4 Testing of Precast components as per BIS standards."
                    ]
                  },
                  {
                    title: "Unit-5.0: Prefabricated Building Structure",
                    points: [
                      "5.1 Precast Structural Building components such as slab panels, beams, columns, footings, walls, lintels and chajjas, staircase elements.",
                      "5.2 Prefabricated building using precast wall panels, floor systems: Material characteristics, Plans & Standard specifications.",
                      "5.3 Prefab systems and structural schemes and their classification including design considerations."
                    ]
                  }
                ]
              },
              {
                name: "Elective | Traffic Engineering and Pavement Design",
                code: "2415603B",
                units: [
                  {
                    title: "Unit-1.0 Fundamentals of Traffic Engineering:",
                    points: [
                      "1.1 Traffic engineering- Definition, objectives and scope.",
                      "1.2 Relationship between speed, volume and density of traffic.",
                      "1.3 Road users' characteristics- Physical, mental, emotional factors.",
                      "1.4 Vehicular characteristics- Width, height, weight, speed, efficiency of brakes.",
                      "1.5 Reaction time based on PIEV theory (Perception, Intellection, Emotion and Volition)."
                    ]
                  },
                  {
                    title: "Unit-2.0 Traffic Studies:",
                    points: [
                      "2.1 Traffic Studies- Types, purpose, information required for traffic studies.",
                      "2.2 Methods of collection of traffic volume count data and analysis of data.",
                      "2.3 Necessity of Origin and Destination study and its methods.",
                      "2.4 Speed studies - Spot speed studies and its presentation.",
                      "2.5 Types and Sources of Data (Road Side Interviews, Home Interview Surveys, Commercial Vehicle Surveys)"
                    ]
                  },
                  {
                    title: "Unit-3.0 Traffic Signs and Pavement Markings:",
                    points: [
                      "3.1 Traffic control devices-definition, necessity, types.",
                      "3.2 Importance, Necessity and objects of traffic signs.",
                      "3.3 Classification of traffic signs as per Indian Road Congress (IRC) guidelines.",
                      "3.4 Traffic markings- definition, Types of traffic markings- Carriage way, Kerb, object marking and reflector marking."
                    ]
                  },
                  {
                    title: "Unit-4.0 Pavement and its Components:",
                    points: [
                      "4.1 Objects and requirements of pavements.",
                      "4.2 Types of Pavements: Flexible Pavement and Rigid Pavement.",
                      "4.3 Pavement components: Sub-grade, Sub-base, Base Course and wearing course.",
                      "4.4 Construction and maintenance of flexible and rigid pavements.",
                      "4.5 Structural evaluation of flexible and rigid pavements."
                    ]
                  },
                  {
                    title: "Unit-5.0 Introduction to Pavement Design:",
                    points: [
                      "5.1 Factors affecting design of pavements.",
                      "5.2 Flexible Pavement- Tyre pressure, Equivalent Single Wheel Load (ESWL), Terminologies used in flexible pavement design.",
                      "5.3 Rigid Pavement- Wheel load stresses, temperature stresses and critical combination of stresses.",
                      "5.4 Types of Joints of rigid pavement."
                    ]
                  }
                ]
              },
              {
                name: "Elective | Green Building and Sustainability",
                code: "2415603C",
                units: [
                  {
                    title: "Unit 1.0: Introduction to Green Building and Sustainability.",
                    points: [
                      "1.1 Definition-Green Building, Benefits of Green Buildings, Concept of Green building and sustainable development.",
                      "1.2 Objectives, Principles and Benefits of Green building design.",
                      "1.3 Green building features and environmental design strategies."
                    ]
                  },
                  {
                    title: "Unit 2.0: Concept of Cost-Effective Construction Materials-",
                    points: [
                      "2.1 Uses of different types of materials and their availability-Stone and Laterite blocks, Burned Bricks, Concrete Blocks, Stabilized Mud Blocks, Lime Pozzolana Cement, Gypsum Board, Light Weight Beams, Fiber Reinforced Cement Components- Fiber",
                      "2.2 Availability of different materials:- Reinforced Polymer Composites, Bamboo, Jute fiber, sisal fiber etc.",
                      "2.3 Recycling of building materials: Brick- Concrete- Steel- Plastics"
                    ]
                  },
                  {
                    title: "Unit-3.0: Overview of Relevant Design Aspects for Green Building",
                    points: [
                      "3.1 Introduction, Reduction in Energy Demand, Onsite Sources and Sinks, Maximize System Efficiency.",
                      "3.2 Steps to Reduce Energy Demand and Use Onsite Sources and Sinks.",
                      "3.3 Use of Renewable Energy Sources. Ecofriendly captive power generation for factories and Buildings."
                    ]
                  },
                  {
                    title: "Unit-4.0: Heating, Ventilation, and Air Conditioning (HVAC) System",
                    points: [
                      "4.1 Design philosophy, Design interventions, Energy modeling, heating, ventilation, and air conditioning (HVAC) System.",
                      "4.2 Components of heating, ventilation, and air conditioning (HVAC) System."
                    ]
                  },
                  {
                    title: "Unit-5: Rating system for Green Buildings.",
                    points: [
                      "5.1 Introduction to rating system, Different rating agencies in India and worldwide.",
                      "5.2 Indian Green Building Council (IGBC).",
                      "5.3 Leadership in energy and environmental design (LEED).",
                      "5.4 Green Rating for integrated habitat assessment (GRIHA)."
                    ]
                  }
                ]
              },
              {
                name: "Elective | Water and Waste Water Management",
                code: "2415603D",
                units: [
                  {
                    title: "Unit-1.0 Introduction to Water and Waste Water",
                    points: [
                      "1.1 Water and its characteristics- Surface water and Ground water.",
                      "1.2 Drinking water quality requirements as per BIS and WHO. Water Quality Index.",
                      "1.3 Sources of Water Pollution, Diseases and control",
                      "1.4 Objective and necessity of treatment of water and waste water."
                    ]
                  },
                  {
                    title: "Unit-2.0 Water Management and Treatment",
                    points: [
                      "2.1 Water cycle and impact of human activity on water cycle.",
                      "2.2 Water Conservation: Introduction, Importance and methods. Purpose of water conservation Drinking, Agriculture, Power generation, Industrial conservation.",
                      "2.3 Treatment of water: Screening, Sedimentation, Coagulation and Flocculation, Disinfection, Softening.",
                      "2.4 Water harvesting: Roof top rain water harvesting, subsurface barrier, Farm ponding.",
                      "2.5 Ground water recharge: Need and Importance Methods and Design criteria."
                    ]
                  },
                  {
                    title: "Unit-3.0 Domestic Waste Water",
                    points: [
                      "3.1 General Conditions-Source of waste water and its characteristics.",
                      "3.2 Flow of waste water: Types of sewerage system, factors affecting selection of sewerage system.",
                      "3.3 Treatment of wastewater: Screening, Grit chamber, Coagulation and Flocculation, Filtration.",
                      "3.4 Disinfection and Softening of treated water.",
                      "3.5 Recycling of treated waste water for various recreational purposes"
                    ]
                  },
                  {
                    title: "Unit-4.0 Industrial Waste Water",
                    points: [
                      "4.1 Source of waste water and its characteristics- Waste Water from Pulp and Paper Industry, Sugar Industry, Rubber Industry.",
                      "4.2 Physical Treatment of Waste Water- Screening, Grit Chamber, Oil and Grease removal, Primary and Secondary Settling Tank, Aeration.",
                      "4.3 Biological Treatment by microorganism in Aerobic and Anaerobic condition.",
                      "4.4 Natural method of waste water disposal -By Land treatment and by Dilution, Indian Standards for disposal of waste water.",
                      "4.5 Self-purification capacity of stream/River -Self-purification zones, Factors affecting self-purification capacity of stream.",
                      "4.6 Management of effluent after treatment within and outside industry - Cooling Tower, Boiler feed water, Irrigation, Landscape watering."
                    ]
                  },
                  {
                    title: "Unit-5.0 Advanced Water and Waste Water Treatment Technique",
                    points: [
                      "5.1 Water Treatment Technique-Reverse Osmosis; Membrane Filtration; Electrodialysis.",
                      "5.2 Waste Water Treatment Technique: Phytorid technology; Enhanced Biological Phosphorous Removal; Air Stripping; Electro flocculation treatment; Activated Carbon Adsorption; SBR technique; Rotating Biological Contactor.",
                      "5.3 Smart Water Supply and monitoring system: Purposes and advantages, IoT based smart water supply monitoring system and water Quality monitoring system."
                    ]
                  }
                ]
              },

              {
                name: "Open Elective | Electric Vehicle (Advanced)",
                code: "2400604G",
                units: [
                  {
                    title: "Unit-1.0 Vehicle Dynamics",
                    points: [
                      "1.1 Vehicle Movement",
                      "1.2 Rolling Resistance: Equation, Coefficient, factor affecting rolling resistance, typical values of rolling resistance",
                      "1.3 Grading resistance",
                      "1.4 Road resistance",
                      "1.5 Acceleration resistance",
                      "1.6 Total driving resistance",
                      "1.7 Aerodynamic drag: Equation, typical values of the drag coefficient.",
                      "1.8 Vehicle dynamics: Hybrid and Electric Vehicles, DC Motor Dynamics and Control, AC Motor Dynamics and Control"
                    ]
                  },
                  {
                    title: "Unit-2.0 Elements of Automobile",
                    points: [
                      "2.1 Suspension and Damping systems",
                      "2.2 Brake system: Half-step braking, Full step Braking",
                      "2.3 Transaxle",
                      "2.4 Elements of Noise Vibration and Harshness Control",
                      "2.5 Body balancing",
                      "2.6 Tyre Technology",
                      "2.7 AC/DC motor",
                      "2.8 Air-conditioning and Heating System",
                      "2.9 Lighting System",
                      "2.10 Automotive wiring system",
                      "2.11 Earthing and Insulation",
                      "2.12 Charging stations – Installation and Commissioning",
                      "2.13 Vehicle control unit"
                    ]
                  },
                  {
                    title: "Unit-3.0 EV Power Transmission System",
                    points: [
                      "3.1 Transmission System: Single and Multi-transmission system",
                      "3.2 EV Power Train",
                      "3.3 EV Power Train Components: Battery Pack, DC-AC Converter, Electric Motor, On-Board Charger.",
                      "3.4 Battery Parameters: Voltage, Current, Charging rate, efficiency, energy density, power density, State of Charge (SoC), Depth of Discharge (DoD), State of Health (SoH), Operating Temperature, specific energy, specific power, life cycle and cost.",
                      "3.5 Battery Assembly and Dismantling.",
                      "3.6 Gear and Differential Assembly",
                      "3.7 Safe disposal of used battery"
                    ]
                  },
                  {
                    title: "Unit- 4.0 Vehicle Control Unit (VCU)",
                    points: [
                      "4.1 Electronic Control Unit: Battery Management System, DC-DC Converter, Thermal Management System and Body Control Module.",
                      "4.2 Predefined functions",
                      "4.3 Connections with EV subsystem",
                      "4.4 Controller Area Network (CAN) communication",
                      "4.5 Interaction of CAN Communication with VCU.",
                      "4.6 Troubleshooting and Assessment",
                      "4.7 Dynamometers: Introduction",
                      "4.8 Environmental Chambers"
                    ]
                  },
                  {
                    title: "Unit- 5.0 EV Charging Technologies",
                    points: [
                      "5.1 Charging Technology: Classification",
                      "5.2 Grid-to-Vehicle (G2V)",
                      "5.3 Vehicle to Grid (V2G) or Vehicle to Buildings (V2B) or Vehicle to Home(V2H).",
                      "5.4 Bi-directional EV Charging Systems.",
                      "5.5 Energy Management Strategies.",
                      "5.6 Wireless Power Transfer (WPT) technique for EV Charging."
                    ]
                  }
                ]
              },
              {
                name: "Employability Skills Development",
                code: "2400408",
                units: [
                  {
                    title: "Unit-1.0 Goal Setting",
                    points: [
                      "1.1 Career planning, SWOT",
                      "1.2 Resume using Internet formats.",
                      "1.3 Showcase portfolios.",
                      "1.4 Personal grooming.",
                      "1.5 Self-Introduction.",
                      "1.6 Website Development."
                    ]
                  },
                  {
                    title: "Unit-2.0 Capacity Development",
                    points: [
                      "2.1 Interview Skills",
                      "2.2 Group Discussion – Do’s & don’ts, leadership, Teamwork, how to interrupt, synthesis, and analysis of topics.",
                      "2.3 Social Media for Personal Enrichment",
                      "2.4 Body language",
                      "2.5 Self-Management.",
                      "2.6 Emotional Intelligence"
                    ]
                  },
                  {
                    title: "Unit-3.0 Utilizing Potential",
                    points: [
                      "3.1 Social Networking",
                      "3.2 Social Engagements, Volunteering",
                      "3.3 Collaboration& Team-work.",
                      "3.4 QC-Tools – Check sheets, Fishbone Diagram, Histogram, Pareto chart, Control-chart, Scatter Diagram, Stratification,",
                      "3.5 Lean Manufacturing, Kanban, Kaizen, Five S, Poka-yoke, Quality Circle"
                    ]
                  }
                ]
              },
              {
                name: "Open Educational Resources (OER)",
                code: "2400009",
                units: [
                  {
                    title: "Unit-1.0 Open Educational Resources",
                    points: [
                      "1.1 OER - definition",
                      "1.2 What is NOT OER.",
                      "1.3 Benefits of using OER – Benefits to Students - Access to Quality Education",
                      "1.4 OER - Benefits to Faculty - Use, Improve and Share, Network and collaborate with peers, Lower Cost, Improve access to information",
                      "1.5 Challenges of Using OER – Subject Availability, Format and Material type availability, Time and Support availability",
                      "1.6 Evaluating OER – a) Clarity, Comprehensibility, and Readability, b) Content and Technical Accuracy, c) Adaptability and Modularity, d) Appropriateness and Fit, e) Accessibility",
                      "1.7 Finding Open Content - OER Search Scenario Filter by Usage Rights in Google, Repositories and Search Tools, Subject-specific Repositories"
                    ]
                  },
                  {
                    title: "Unit-2.0 Copyright and Open Licensing",
                    points: [
                      "2.1 Copyright and what it does protect, benefits of copyright protection for creators, duration of copyright protection last, rights granted to copyright holders.",
                      "2.2 Exceptions and limitations to copyright law, fair use/fair dealing apply to copyright",
                      "2.3 Public domain and its relation to copyright.",
                      "2.4 Penalties for copyright infringement",
                      "2.5 Apply copyright to digital content and the internet",
                      "2.6 Use of copyrighted works in education.",
                      "2.7 Open Licenses – GNU – Free Documentation license, Free Art License",
                      "2.8 Why Free Licenses – Retain, Reuse, Revise, Remix, Redistribute"
                    ]
                  },
                  {
                    title: "Unit-3.0 Creative Common Licenses",
                    points: [
                      "3.1 Alternatives to copyright as Creative Commons licenses.",
                      "3.2 Four components of creative common Licenses – Attribution, Share- Alike, Non – commercial, No Derivatives",
                      "3.3 Choosing a Creative common licenses – Wiley’s 5 Rs and Creative Common Licenses",
                      "3.4 Four Open CC Licenses and Their Strengths and Weaknesses – (a) CC BY (b) CC BY SA (c) CC BY NC (d) CC BY NC SA",
                      "3.5 Attribution Vs Citation - Creative Commons licensed work without giving attribution",
                      "3.6 Apply a CC License - choose the right Creative Commons license for work, apply a Creative Commons license to existing work, Creative Commons licenses be used for commercial purposes, modify a work licensed under Creative Commons, revoke a Creative Commons license, combine works with different Creative Commons licenses"
                    ]
                  }
                ]
              }
            ];

            return semesters;
          })()
        },


        {
          id: "ece",
          title: "Electronics Engineering",
          icon: "fas fa-microchip",
          semesters: (() => {
            const semesters = syllabusEmptySemesters(6);

            // Diploma ece sem 1

            semesters.sem1.theory = [
              {
                name: "Basic Engg. Mathematics",
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
                name: "Applied Physics - B",
                code: "2600102B",
                units: [
                  {
                    title: "Unit-1.0 Unit and Measurements",
                    points: [
                      "1.1 Physical quantities, fundamentals and derived units and system of units",
                      "1.2 Accuracy, precision and errors (systematic and random) in measurements, Method of estimation of errors (absolute and relative) in measurement, propagation of errors, significant figures",
                      "1.3 Dimensions and dimensional formulae of physical quantities, Principle of homogeneity of dimension in an equation",
                      "1.4 Applications of dimensions: conversion from one system of units to other, corrections of equations and derivation of simple equations.",
                      "1.5 Ancient astronomical instruments: Chakra, Dhanuryatra, Yasti and Phalaka yantra. (IKS)"
                    ]
                  },
                  {
                    title: "Unit-2.0 Simple Harmonic and Wave Motion",
                    points: [
                      "2.1 Periodic and Oscillatory Motion",
                      "2.2 Simple Harmonic Motion (SHM): Displacement, velocity, acceleration, time period, frequency and their interrelation",
                      "2.3 Types of waves: Mechanical and Electromagnetic, Transverse and longitudinal waves, wave velocity, frequency and wave length and their relationship, wave equation, amplitude, phase, phase difference, Superposition of waves"
                    ]
                  },
                  {
                    title: "Unit-3.0 Electrostatics, Electromagnetism and Electric Current",
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
                    title: "Unit-4.0 Semiconductor Physics",
                    points: [
                      "4.1 Energy band and band gap, insulator, semi-conductor, conductor",
                      "4.2 Intrinsic and Extrinsic semiconductors, Drift velocity, drift and diffusion current, Mobility, current density, law of mass action.",
                      "4.3 Depletion layer and barrier Potential, p-n junction and V-I characteristics, Half wave and full wave rectifier",
                      "4.4 Photocells, Solar cells; working principle and engineering applications."
                    ]
                  },
                  {
                    title: "Unit-5.0 Modern Physics",
                    points: [
                      "5.1 Photoelectric effect; threshold frequency, work function, Stopping Potential, Einstein's photoelectric equation.",
                      "5.2 Lasers: Energy levels, ionization and excitation potentials; spontaneous and stimulated emission; population inversion, pumping methods, types of lasers): He Ne Laser, p-n junction diode laser, engineering and medical applications of lasers.",
                      "5.3 Optical fibers: Total internal reflection, acceptance angle and numerical aperture, Optical fiber types, applications in telecommunication, medical and sensors.",
                      "5.4 Nanotechnology: Properties (optical, magnetic and dielectric properties) of Nanomaterials and its application, Bhasma (Ancient Ayurveda, IKS)"
                    ]
                  }
                ]
              },
              {
                name: "Applied Chemistry - B",
                code: "2600103B",
                units: [
                  {
                    title: "Unit-1.0 Atomic Structure and Chemical Bonding and Solutions",
                    points: [
                      "1.1 Atoms and its fundamental particles,",
                      "1.2 Rutherford Model of Atom,",
                      "1.3 Bohr's Theory, Hydrogen spectrum explanation based on Bohr's Model of Atom,",
                      "1.4 Wave Mechanical model of atom, de Broglie relationship, Heisenberg Uncertainty Principle,",
                      "1.5 Quantum Numbers, Shapes of Atomic Orbitals,",
                      "1.6 Pauli's Exclusion Principle, Hand's Rule of Maximum Multiplicity, Aufbau Principle, Electronic Configuration (till atomic number 30).",
                      "1.7 Concept of Chemical bonding - Causes of chemical bonding, Types of Bonds: Ionic Bond (NaCl, CaCl2, MgO), Covalent Bond, Polar and Nonpolar Covalent Bonds (H2, F2, HF, HCl) & Co-ordinate Bond (CO, NH4+, O3, H2SO4).",
                      "1.8 Dipole Moment (NH3, NF3), Hydrogen bonding.",
                      "1.9 Solution- (solute, solvent) and their strength- Molarity, Normality, Molality.",
                      "1.10 Indian Chemistry: -Philosophy of atom by Acharya Kanad. (IKS)"
                    ]
                  },
                  {
                    title: "Unit-2.0 Water",
                    points: [
                      "2.1 Introduction, Sources of Water. Hardness of Water-Temporary & Permanent hardness.",
                      "2.2 Degree of Hardness (In terms of CaCO3 equivalent), Unit of Hardness, Quantitative Measurement of Water Hardness by EDTA method.",
                      "2.3 Municipal supply of Water, Treatment of water, Water Softening Technique-Soda Lime Process, Zeolites method and ion exchange method,",
                      "2.4 Water Quality Index - Biological Oxygen Demand, Chemical Oxygen Demand, Determination of Dissolved Oxygen",
                      "2.5 Indian standard specification of drinking water."
                    ]
                  },
                  {
                    title: "Unit-3.0 Engineering Materials",
                    points: [
                      "3.1 Natural Occurrence of Metals- Minerals, ores.",
                      "3.2 Metallurgy - General principles of Metallurgy, Gangue, Flux and Slag, Steps involved in metallurgy.",
                      "3.3 Ancient Indian Metallurgy (IKS)",
                      "3.4 Extraction of Aluminium, Iron and Copper from their important ores along with reactions, Properties and uses.",
                      "3.5 Alloys - Definition, Purpose of alloying, Ferrous and Non-Ferrous Alloy with suitable examples, Composition, Properties, and their applications.",
                      "3.6 Polymers-Homopolymers and Copolymers, Natural polymers and synthetic polymers, Addition and Condensation polymerization, Thermoplastic and Thermosetting plastic.",
                      "3.7 Monomers, applications, and synthesis of Polythene, PVC, Orlon, Terylene, Nylon 66, Nylon 6, Bakelite.",
                      "3.8 Natural Rubber and its vulcanization, advantages of vulcanized rubber."
                    ]
                  },
                  {
                    title: "Unit-4.0 Solid State",
                    points: [
                      "4.1 General characteristics of solid state, crystalline and amorphous solid.",
                      "4.2 Classification of crystalline solid- Molecular, ionic, metallic, covalent solids.",
                      "4.3 Crystal lattice and unit cells- Primitive, BCC, FCC",
                      "4.4 Imperfections of solid, Types of point defects- stoichiometric defects, impurity defects, non-stoichiometric defects.",
                      "4.5 Electrical properties, conduction of electricity in metals and semiconductors- Band theory.",
                      "4.6 Magnetic properties- Ferromagnetism, Paramagnetism, diamagnetism, anti-ferromagnetism and ferrimagnetism.",
                      "4.7 General introduction to X ray diffraction method- Bragg's law.",
                      "4.8 Melting point determination of crystalline solid by Kjeldahl method."
                    ]
                  },
                  {
                    title: "Unit-5.0 Electrochemistry",
                    points: [
                      "5.1 Introduction, Electrolyte and Nonelectrolyte, Electrolytic and Metallic Conduction, Factors affecting Electrolytic Conductance.",
                      "5.2 Molar Conductivity and Equivalent Conductivity. Variation of Molar Conductivity, Kohlrausch's law.",
                      "5.3 Faraday's Laws of Electrolysis.",
                      "5.4 Galvanic Cell, Electrode Potential, Measurement of Electrode Potential SHE (Standard Hydrogen electrode), EMF, Electrochemical Series, Nernst Equation for Electrode Potential.",
                      "5.5 Batteries, Primary Cells-Dry cell, Secondary cell -Lead storage battery, Fuel cells.",
                      "5.6 Corrosion, their types (Dry & Wet corrosion) and prevention."
                    ]
                  }
                ]
              },
              {
                name: "Engineering Mechanics",
                code: "2625104",
                units: [
                  {
                    title: "Unit-1.0 Mechanics and Force System",
                    points: [
                      "1.1 Significance and relevance: Mechanics, applied mechanics, statics and dynamics.",
                      "1.2 Space, time, mass, particle, body, rigid body.",
                      "1.3 Scalar and vector quantity, Units of measurement (SI units) Fundamental units and derived units.",
                      "1.4 Force unit, representation as a vector and by Bow's notation, characteristics and effects of a force, Principle of transmissibility of force. Force system and its classification.",
                      "1.5 Resolution of a force: Orthogonal and Non-Orthogonal components of a force, moment of a force, Varignon's Theorem.",
                      "1.6 Composition of forces Resultant, analytical method of determination of resultant for concurrent, non-concurrent and parallel co-planar force systems - Law of triangle, Law of parallelogram and law of polygon of forces.",
                      "1.7 Graphic statics, graphical representation of force, Space diagram, force diagram, polar diagram and funicular polygon, Graphical method of determination of resultant for concurrent and parallel co-planar force systems."
                    ]
                  },
                  {
                    title: "Unit-2.0 Static Equilibrium",
                    points: [
                      "2.1 Equilibrium and Equilibrant, Free body and Free body diagram, Analytical and graphical conditions of equilibrium.",
                      "2.2 Equilibrium of force systems analytically",
                      "2.3 Lami's Theorem.",
                      "2.4 Types of beam (determinate and indeterminate), supports (simple, hinged, roller and fixed) and loads acting on beam (vertical and inclined point load, distributed load, couple), span of beam.",
                      "2.5 Beam reaction for cantilever, simply supported beam with or without overhang - subjected to combination of Point load and UDL or Vertical Point load and couple.",
                      "2.6 Beam reaction for simply supported beam subjected to vertical loads only."
                    ]
                  },
                  {
                    title: "Unit 3.0 Friction",
                    points: [
                      "3.1 Friction and its relevance in engineering, types and laws of friction, limiting equilibrium, limiting friction, co-efficient of friction, angle of friction, angle of repose, relation between co-efficient of friction and angle of friction.",
                      "3.2 Equilibrium of bodies on level surface subjected to force parallel and inclined to plane.",
                      "3.3 Equilibrium of bodies on inclined plane subjected to force parallel to the plane only.",
                      "3.4 FBD of ladder in friction"
                    ]
                  },
                  {
                    title: "Unit 4.0 Centroid, Centre of Gravity and Moment of Inertia",
                    points: [
                      "4.1 Introduction to Centroid, Centre of Gravity and Areas",
                      "4.2 Centroid of geometrical plane figures (square, rectangle, triangle, circle, semi-circle, quarter circle).",
                      "4.3 Centroid of composite figures composed of not more than three geometrical figures and centroid of perforated section, axis of symmetry",
                      "4.4 Centre of Gravity of simple solids (Cube, cuboid, cone, cylinder, sphere, hemisphere).",
                      "4.5 Centre of Gravity of composite solids composed of not more than two simple solids.",
                      "4.6 Moment of inertia - Introduction, calculation of moment of inertia by integration method, theorem of perpendicular axis, theorem of parallel axis, moment of inertia of a rectangular section, hollow rectangular section, circular section, hollow circular section, triangular section"
                    ]
                  },
                  {
                    title: "Unit-5.0 Simple Lifting Machine",
                    points: [
                      "5.1 Simple lifting machine, load, effort, mechanical advantage, Applications and advantages. Velocity ratio, efficiency of machines, Law of machine.",
                      "5.2 Ideal machine, friction in machine, maximum Mechanical advantage and efficiency, reversible and non-reversible machines, condition for reversibility",
                      "5.3 Velocity ratios of Simple axle and wheel, Differential axle and wheel, Worm and worm wheel, Single purchase and double purchase crab winch, Screw jack, Weston's differential pulley block, geared pulley block.",
                      "5.4 Graphs of Load verses Effort, Load verses ideal Effort, Load verses Effort lost in friction, Load verses MA, Load verses Efficiency."
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
                      "1.4 Dimensioning techniques: types and applications of chain, parallel and coordinate dimensioning as per IS SP-46.",
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
                      "5.3 Green and sustainable building materials - 5R concept",
                      "5.4 Environment protection acts, legislation and Laws",
                      "5.5 Zero carbon foot-print building for sustainable constriction."
                    ]
                  }
                ]
              }
            ];

            // Diploma ece sem 3

            semesters.sem3.theory = [
              {
                name: "Analog Electronics",
                code: "2421301",
                units: [
                  {
                    title: "Unit-1.0 Transistor Biasing",
                    points: [
                      "1.1 Need for Transistor Biasing",
                      "1.2 Transistor parameters Considered for basing",
                      "1.3 Stabilization and Stability Factor",
                      "1.4 Effects of Temperature on ICBO",
                      "1.5 Transistor Biasing Methods: Base Resistor Method, Emitter Bias, Voltage Divider, Collector to base Feedback resistor biasing."
                    ]
                  },
                  {
                    title: "Unit-2.0 Single Stage and Multistage Transistor Amplifier",
                    points: [
                      "2.1 Single Stage Transistor amplifier parameters",
                      "2.2 D.C and A.C Equivalent Circuits of Transistor Amplifier",
                      "2.3 Load Line Analysis",
                      "2.4 Voltage Gain of CE Transistor Amplifier, without CE, Input and Output Impedance of CE Amplifier.",
                      "2.5 Voltage Gain Stability",
                      "2.6 Multistage Amplifier: Effect of Rs, Ri, and Interstage Loading Coupling of transistor amplifiers, Capacitor coupling, Direct coupled amplifier",
                      "2.7 Amplifier Gain in Decibels, frequency response, and bandwidth"
                    ]
                  },
                  {
                    title: "Unit-3.0 Field Effect Transistors (FET), JFET and MOSFET",
                    points: [
                      "3.1 Introduction to JFET: Symbol, Construction, and Working Principles of JFET, Input-output and transfer characteristics of JFET,",
                      "3.2 Introduction to MOSFET: Symbol, Types, D-MOSFET and E-MOSFET, construction, and working principles of MOSFET, Input-output and transfer characteristics of MOSFET, applications of MOSFET",
                      "3.3 Introduction to UJT: Equivalent circuit, operation, and its applications (relaxation oscillator)."
                    ]
                  },
                  {
                    title: "Unit-4.0 Power Electronics Devices",
                    points: [
                      "4.1 SCR: Construction, symbol, working, characteristics, and applications",
                      "4.2 DIAC: Construction, symbol, working, and characteristics, application as a bidirectional switch",
                      "4.3 TRIAC: Construction, symbol, working, and characteristics"
                    ]
                  },
                  {
                    title: "Unit-5.0 Feedback Amplifiers and Oscillators",
                    points: [
                      "5.1 Feedback: Negative and Positive Feedback, Derivation of Gain, Advantages, Disadvantages and Application of Feedback",
                      "5.2 Feedback Topology: Voltage series, current Series, Voltage Shunt, Current shunt",
                      "5.3 Calculate Gain, Input and Output Impedance",
                      "5.4 Comparison of Topology on different Parameters",
                      "5.5 Oscillator: Working principle, Different Types of Oscillators, RC Phase shift Oscillator, Wein Bridge Oscillator, Hartley Oscillator, Colpitt's Oscillator, Crystal Oscillator"
                    ]
                  }
                ]
              },
              {
                name: "Measuring Instruments and Sensors",
                code: "2421302",
                units: [
                  {
                    title: "Unit-1.0 Basics of Measurement and Instrumentation",
                    points: [
                      "1.1 Static and dynamic characteristics of measurement",
                      "1.2 Accuracy, resolution, precision, sensitivity",
                      "1.3 Types of error and its analysis",
                      "1.4 Calibration: Need and procedure of calibration"
                    ]
                  },
                  {
                    title: "Unit-2.0 Analog and Digital Meters",
                    points: [
                      "2.1 Classification of instrument, Indicating and display device: D'Arsonval galvanometer, PMMC, moving iron, electro-dynamometer type, thermal type, rectifier type",
                      "2.2 Analog and Digital meters: Types of analog and digital meters, voltmeter, ammeter, multirange voltmeter and ammeter, ohmmeter"
                    ]
                  },
                  {
                    title: "Unit-3.0 Potentiometer and Bridges",
                    points: [
                      "3.1 Classification and measurement of resistance (Low, Medium, & High)",
                      "3.2 Basic DC slide wire potentiometer",
                      "3.3 DC Bridges: Wheatstone and Kelvin's Double Bridge",
                      "3.4 AC Bridges: Maxwell's Bridge, Hay's Bridge, Anderson Bridge, De-Sauty's Bridge, Wien's Bridge"
                    ]
                  },
                  {
                    title: "Unit-4.0 Oscilloscope and Function Generator",
                    points: [
                      "4.1 CRO: Block diagram of CRO, CRT, Vertical deflection system and Horizontal deflection system, Need of Delay line, Time base generator, amplitude and frequency measurement using CRO, Lissajous pattern for phase and frequency measurement.",
                      "4.2 DSO: Block Diagram, functions, working principles, front panel operations, and applications",
                      "4.3 Function generator: Block diagram of a function generator, working of each block, front panel controls and operations, application of function generator"
                    ]
                  },
                  {
                    title: "Unit-5.0 Transducers and Sensors",
                    points: [
                      "5.1 Basic Definition, difference between Transducer, Sensors, & Actuators",
                      "5.2 Transducer: Need of transducer, types of transducers and their applications: Primary, secondary, Active, Passive, Analog, Digital, Resistive, Capacitive, Inductive (LVDT, RVDT), Piezoelectric transducer, strain gauge",
                      "5.3 Sensors: Thermal, optical, magnetic, Proximity sensor, and IR Sensors.",
                      "5.4 Temperature measurement: Thermistor, RTD, Thermocouple",
                      "5.5 Pressure measurement: Bourdon tube, Diaphragm",
                      "5.6 Humidity measurement: Hygrometer, pH Measurement"
                    ]
                  }
                ]
              },
              {
                name: "Digital Electronics",
                code: "2421303",
                units: [
                  {
                    title: "Unit-1.0 Number Systems and Codes",
                    points: [
                      "1.1 Different number systems: Binary, Octal, Decimal, Hexadecimal; Conversion from one number system to another number systems",
                      "1.2 Arithmetic operation: Binary, Octal, Hexadecimal number",
                      "1.3 Complements: r's and (r-1)'s complement for all number systems",
                      "1.4 Data Representation: Representation of negative number in 1's and 2's complement, Subtraction using 1's and 2's complement",
                      "1.5 Codes: Gray code, BCD codes, Excess-3 Codes, ASCII, and EBCDIC"
                    ]
                  },
                  {
                    title: "Unit-2.0 Boolean Algebra and Logic Gates",
                    points: [
                      "2.1 Boolean Algebra: Rules and laws of Boolean Algebra, Duality theorem, De-Morgan's Theorem, Simplification of logical expressions using Boolean laws.",
                      "2.2 Standard Boolean Representation: Sum of Product (SOP), Product of Sum (POS)",
                      "2.3 Minimization: Karnaugh's Map (K-map), Simplification of Boolean expressions using K-map, Introduction of Tabulation method.",
                      "2.4 Logic Gates and applications: AND, OR, NOT, Buffer, NAND, NOR, XOR, XNOR (Symbol, Truth table, Logic expression and its applications)",
                      "2.5 Implementation: Implementation of Boolean expressions and logic functions using basic gates and universal gates, TTL Logic Family"
                    ]
                  },
                  {
                    title: "Unit-3.0 Combinational Logic Circuits",
                    points: [
                      "3.1 Arithmetic Circuits: Half and Full Adder, Half and Full Subtractor, Parallel and Series Adders",
                      "3.2 Multiplexer: 2 to 1 MUX, 4 to 1 MUX, 8 to 1 MUX, Applications, Introduction to design of Multiplexer using K-map and tabulation method",
                      "3.3 De-multiplexer: 1 to 2 DEMUX, 1 to 4 DEMUX, 1 to 8 DEMUX, Applications",
                      "3.4 Code Converter: Binary to BCD, BCD to Excess-3, BCD to gray code",
                      "3.5 Comparator: 1-bit comparator",
                      "3.6 Encoder: Octal, Hexadecimal and BCD to Binary",
                      "3.7 Decoder: Binary to Octal, Hexadecimal and BCD"
                    ]
                  },
                  {
                    title: "Unit-4.0 Sequential Logic Circuits",
                    points: [
                      "4.1 Basic Memory Cell: SR latch using NAND/NOR",
                      "4.2 Triggering Method: Edge trigger and level trigger",
                      "4.3 Flip-Flops: SR, JK, T, D, and JK-Master Slave",
                      "4.4 Counters: Modulus of counter; Asynchronous Counter: Ripple up/down counter and Decade Counter; Synchronous Counter: Ring Counter and Johnson Counter.",
                      "4.5 Shift Registers: Serial in Serial Out, Serial in Parallel Out, Parallel in Serial Out, Parallel in Parallel Out, Universal"
                    ]
                  },
                  {
                    title: "Unit-5.0 Data Converters & Memory Devices",
                    points: [
                      "5.1 Data Converters: DAC - Weighted resistor type and R-2R ladder type; ADC - Ramp type, SAR type, Flash Type, Dual Slope type",
                      "5.2 Random Access Memory: Organization, Address Lines, Memory Size, Static RAM, Bipolar RAM Cell, Dynamic RAM, DRAM, DDR RAM",
                      "5.3 Read Only Memory: Organization, Expanding memory, PROM, EPROM, EEPROM, Flash memory"
                    ]
                  }
                ]
              },
              {
                name: "Principles of Electronic Communication",
                code: "2421304",
                units: [
                  {
                    title: "Unit-1.0 Introduction to Communication System",
                    points: [
                      "1.1 Basic building blocks of communication system: Transmitter, receiver, channel, antenna, multiplexer, encoder, decoder",
                      "1.2 Electromagnetic spectrum, different frequency bands, and their applications, Concept of bandwidth",
                      "1.3 Modes of communication: Simplex, Half duplex, and full duplex",
                      "1.4 Examples of wired and wireless channels (basic idea only): telephone channel, coaxial cable, optical fiber cable, wireless broadcast channel",
                      "1.5 Difference between Analog and Digital communication"
                    ]
                  },
                  {
                    title: "Unit-2.0 Introduction to Signals",
                    points: [
                      "2.1 Represent test signals like pulse, sine, cosine, gate pulses, sawtooth, triangular, and other periodic and non-periodic signals",
                      "2.2 Classification of Signals: Continuous and Discrete signals, Deterministic and Random signals, Periodic and non-Periodic signals, Energy and Power signals, causal and non-causal signals, and Even and Odd signals (For both Continuous and Discrete signals)",
                      "2.3 Basic Operations on Signals: Time shifting, Time scaling, Time reversal",
                      "2.4 Fourier series and Fourier transform to analyze the basic signals"
                    ]
                  },
                  {
                    title: "Unit-3.0 Noise",
                    points: [
                      "3.1 Introduction: Noise, sources of noise, difference between noise and error",
                      "3.2 Classification of noise: shot noise, partition noise, Flicker noise, High-frequency noise, Thermal Noise, Additive White Gaussian noise",
                      "3.3 Relation between noise power and bandwidth, Noise bandwidth, signal-to-noise ratio, Figure of merit, Noise factor, Noise figure, Noise temperature, and equivalent noise temperature of amplifiers connected in cascade"
                    ]
                  },
                  {
                    title: "Unit-4.0 Analog Modulation",
                    points: [
                      "4.1 Concept and need for modulation",
                      "4.2 Amplitude modulation: Simple mathematical representation of AM, DSB, SSB, efficiency and percentage of modulation, bandwidth, and power requirement in AM, DSB, SSB, generation and detection of AM (Basic idea only)",
                      "4.3 Angle Modulation: Representation of FM signal and PM signal, Bandwidth and Power requirement in FM & PM, Principles of operation of frequency modulation using varactor diode and Voltage controlled oscillator (VCO)"
                    ]
                  },
                  {
                    title: "Unit-5.0 Transmitters and Receivers",
                    points: [
                      "5.1 Block diagram and functions of different blocks of AM and FM Transmitter",
                      "5.2 Block diagram and function of different blocks of AM and FM Receiver",
                      "5.3 Transmitter and receiver antenna, antenna parameters, and specifications",
                      "5.4 Tuned Radio frequency (TRF) receiver, Super heterodyne Analog AM/FM receivers: Block diagram and the principle of operation of a superheterodyne receiver",
                      "5.5 Receiver Characteristics & Testing: sensitivity, selectivity, and fidelity, Pre-emphasis, and de-emphasis circuits",
                      "5.6 Generation of FM using the Direct method (Voltage Controlled Oscillator) and Indirect method (Armstrong Method)",
                      "5.7 Demodulation of FM using Phase Locked Loop (PLL)"
                    ]
                  }
                ]
              },
              {
                name: "Electronic Simulation Software Practice",
                code: "2421305",
                units: [
                  {
                    title: "Unit1.0 -Introduction to EDA/Simulation Tool",
                    points: [
                      "1.1 Installation of appropriate EDA/simulation tool",
                      "1.2 Main features of EDA tools",
                      "1.3 Different editing windows",
                      "1.4 Draw the schematic diagram of circuits using proper connection",
                      "1.5 Procedure of file handling"
                    ]
                  },
                  {
                    title: "Unit-2.0 Analog Circuits Simulation",
                    points: [
                      "2.1 Clipper & Clamper circuits",
                      "2.2 Rectifiers: Half-wave Rectifiers, Centre Tapped full wave Rectifier, Full wave Bridge Rectifier",
                      "2.3 BJT Amplifiers: CE Amplifier, CB Amplifier, CC Amplifier",
                      "2.4 Passive Filters: Low Pass Filter, High Pass Filter, Band stop Filter, Band pass Filter",
                      "2.5 SCR, DIAC, TRIAC"
                    ]
                  },
                  {
                    title: "Unit-3.0 Digital Circuits Simulation",
                    points: [
                      "3.1 Logic Gates",
                      "3.2 Half Adder/Subtractor",
                      "3.3 Full Adder/Subtractor",
                      "3.4 Multiplexer and Demultiplexer",
                      "3.5 Flipflops: R-S Flip Flop, J-K Flip Flop, D and T Flip flop",
                      "3.6 ADC, DAC",
                      "3.7 Data acquisition system"
                    ]
                  },
                  {
                    title: "Unit-4.0 Electrical Circuits Simulation",
                    points: [
                      "4.1 Concepts of Mesh and Nodal analysis",
                      "4.2 Fundamentals of Network Theorems: Thevenin's Theorem, Norton's Theorem, Superposition Theorem",
                      "4.3 Basics of Series AC Circuits: R-L Circuit, R-C Circuit, R-L-C Circuit"
                    ]
                  },
                  {
                    title: "Unit-5.0 PCB Design using Simulation Tool",
                    points: [
                      "5.1 Introduction to PCB Design",
                      "5.2 PCB design Software: Interface and Tools",
                      "5.3 Schematic Capture: Symbols and Components for creating circuit",
                      "5.4 PCB Layout",
                      "5.5 PCB file formats"
                    ]
                  }
                ]
              },
              {
                name: "Essence of Indian Knowledge System and Tradition",
                code: "2400308",
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

            // Diploma ece sem 5

            semesters.sem5.theory = [
              {
                name: "Industrial Engineering & Management",
                code: "2421501",
                units: [
                  {
                    title: "Unit-1.0 Industrial Engineering",
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
                      "5.1 Material Management: Purpose. Functions of material Management, Cost Accounting- Introduction & necessity, elements of cost - direct and indirect, variable and fixed, prime cost, overhead cost, total cost, marginal costing, break-even analysis.",
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
                name: "Antennas and Microwave Engineering",
                code: "2421502",
                units: [
                  {
                    title: "Unit1.0 -Wave Propagation",
                    points: [
                      "1.1 Elementary concepts of propagation of Electromagnetic (EM) waves, properties of EM waves, Classification of EM waves bands, guided and unguided wave propagation",
                      "1.2 Propagation of ground wave, space wave and sky wave",
                      "1.3 Ionospheric layers: D, E and F layer, Skip distance, Critical frequency, Maximum Usable Frequency (MUF), Actual and Virtual height of the ionospheric layer, Multi hops and Duct propagation"
                    ]
                  },
                  {
                    title: "Unit-2.0 Antenna Fundamentals",
                    points: [
                      "2.1 Basic definition of antenna and working principle, point source, dipole antenna, Isotropic radiator",
                      "2.2 Antenna parameters: impedance, radiation resistance, radiation pattern, beam width and beam efficiency, gain, directivity, radiation intensity, half power BW (HPBW), antenna efficiency",
                      "2.3 Effects of antenna height on the signal reception",
                      "2.4 Working principle, radiation pattern, and application of the following antennas: Half wave dipole, Horn, Yagi Uda, Parabolic Reflector",
                      "2.5 Introduction and uses of Loop and Helical Antenna, Folded Dipole Antenna",
                      "2.6 Introduction, radiation pattern, and applications of Antenna arrays: Broadside array antenna, End fire array antenna"
                    ]
                  },
                  {
                    title: "Unit-3.0 Transmission Line and Waveguides",
                    points: [
                      "3.1 Transmission Line: Basics, Equivalent circuit of transmission line, Voltage and Current relationship, Propagation Constant, Attenuation constant, Characteristic impedance, Reflection coefficient, Standing wave and VSWR, Short circuit and open circuit line, Half wave, quarter wave",
                      "3.2 Wave guide: Working principle, Types of waveguides: Rectangular, Circular Wave Guide, Modes of propagation (basic idea only) functions, characteristics and applications",
                      "3.3 Microwave components: E-plane, H-plane, Magic Tee, Directional Coupler, Attenuator, Isolator and Circulator"
                    ]
                  },
                  {
                    title: "Unit-4.0 Microwave Amplifiers and Measurement",
                    points: [
                      "4.1 Limitations of microwave tube at microwave frequency",
                      "4.2 Microwave linear beam tube (O Type), Construction, working and applications of following microwave tubes amplifiers: Klystron - Two cavity and multi cavity, Travelling Wave Tube (TWT)",
                      "4.3 Construction, working and applications of following microwave tubes oscillators: Reflex klystron, Magnetron, Backward Wave Oscillator",
                      "4.4 Microwave cross field tube (M Type): Magnetron oscillator construction, working and applications",
                      "4.5 Measurement: Voltage Standing Wave Ration (VSWR) measurement, microwave power, frequency and attenuation measurement"
                    ]
                  },
                  {
                    title: "Unit-5.0 Microwave Solid State Devices",
                    points: [
                      "5.1 Limitation of transistors at microwave frequencies",
                      "5.2 Tunnel diode: working and applications",
                      "5.3 Transferred electron device: Gunn diode (working and construction only)",
                      "5.4 Avalanche Transit time device: IMPATT & TRAPATT (basic idea only)",
                      "5.5 PIN diode construction, working and their applications"
                    ]
                  }
                ]
              },
              {
                name: "Automated Control System and PLC",
                code: "2421503",
                units: [
                  {
                    title: "Unit1.0 -Basics of Control Systems",
                    points: [
                      "1.1 Control system - Open and closed loop, linear and nonlinear, time variant and time invariant",
                      "1.2 Feedback and its types- Degenerative and Regenerative, effect of feedback on stability and sensitivity",
                      "1.3 Transfer function (definition) and Transfer function of simple R-C, L-C, and R-L-C circuits",
                      "1.4 Poles and Zeros of a Transfer function, Pole zero plot in S-plane",
                      "1.5 Need and significance of block diagram: Represent simple physical system in terms of block diagram having various inputs and outputs.",
                      "1.6 Control system components: Servomotors - AC and DC, Stepper motor, Error Detector- Potentiometer and Synchro, Optical encoder (Construction, working and applications) - Incremental and absolute"
                    ]
                  },
                  {
                    title: "Unit -2.0 Time Response Analysis",
                    points: [
                      "2.1 Transient and steady state response",
                      "2.2 Standard Test Inputs: Step, Ramp, Parabolic, Impulse inputs, their Laplace Transform and graphical representation",
                      "2.3 Order and type of system with standard equations and examples",
                      "2.4 First order control system: Analysis for unit step input, concept of time constant (derivation not required)",
                      "2.5 Second order control system: Analysis for unit step input (derivation not required), concept, effect of damping",
                      "2.6 Time Response Specifications: Rise time, Delay time, Peak time, Settling time, Peak overshoot, steady state errors (no derivations) and simple numerical",
                      "2.7 Stability: Concept of stability, Absolute and relative stability, root locations in S-plane, and analysis- stable, unstable, critically stable, conditionally stable system."
                    ]
                  },
                  {
                    title: "Unit-3.0 Process Control",
                    points: [
                      "3.1 Process control System: Block diagram, functions of each block",
                      "3.2 Control actions: I. Discontinuous controller mode- Two position (ON-OFF) controllers- equation (derivation not required), neutral zone; II. Continuous controller mode- Proportional Controller- offset, Proportional band, Proportional, Integral, and Derivative controller- O/P equation, response, characteristics; III. Composite controllers' modes: PI, PD, PID, controllers- O/P equation (derivation not required), response"
                    ]
                  },
                  {
                    title: "Unit-4.0 Fundamentals of PLC",
                    points: [
                      "4.1 Industrial automation: Definition, need and significance",
                      "4.2 PLC- Definition, Block diagram, functions of various blocks, principle of operation",
                      "4.3 Classification (fixed and modular PLCs)",
                      "4.4 Input and output modules: analog & digital, I/O Specifications, Examples, Sinking and sourcing concept in DC input modules",
                      "4.5 PLC Scan cycle and speed of execution",
                      "4.6 Advantages and applications of PLC",
                      "4.7 PLC installation steps"
                    ]
                  },
                  {
                    title: "Unit-5.0 PLC Programming and SCADA",
                    points: [
                      "5.1 PLC programming language: Functional Block Diagram (FBD), Instruction list, Sequential Functional Chart (SFC), Ladder programming language",
                      "5.2 Simple Programming examples using ladder logic: Based on relay, timer- on delay, Off delay, retentive timer, counter- Up and Down, logical, comparison, arithmetic and data handling instructions, PID, Sequence instructions",
                      "5.3 Introduction to DCS and SCADA, Typical SCADA architecture (Only block diagram representation) - Remote Terminal Units (RTUs), Master Terminal Units (MTUs), Communication system, Benefits of SCADA",
                      "5.4 Steps in creating SCADA screen for simple object, steps for linking SCADA object (defining Tags and items)",
                      "5.5 Application of SCADA: Traffic light control, water distribution, pipeline control",
                      "5.6 Interfacing SCADA with PLC: Typical connection diagram, object linking, and embedding for process control (OPC) architecture"
                    ]
                  }
                ]
              },

              {
                name: "Electric Vehicles (Basic)",
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
                    title: "After completion of the course, the students will be able to",
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

            // Diploma ece sem 6

            semesters.sem6.theory = [
              {
                name: "Data Communication and Computer Networking",
                code: "2421601",
                units: [
                  {
                    title: "Unit-1.0 Fundamentals of Data Communication and Network Topology",
                    points: [
                      "1.1 Data communication and its characteristics, Basic block diagram of data communication system, Components of data communication: Transmitter, Receiver, Medium, Message, error, noise, Protocol. Standards, Standard organizations",
                      "1.2 Data Transmission: Serial, Parallel, Synchronous, Asynchronous, Isochronous transmission",
                      "1.3 Transmission characteristics: Signaling rate, data rate, bit rate, baud rate",
                      "1.4 Need of computer networks, Network criteria, advantages of networking, Schematic diagram, working",
                      "1.5 Network topologies: Mesh, Star, Bus, Tree, Ring and Hybrid topologies: working, disadvantages and applications.",
                      "1.6 Network Classification: Based on Transmission Technologies: Point to-point, Multipoint; Physical size (scale): PAN, BAN, LAN, MAN, WAN, VPN; Based on Architecture: Peer to Peer, Client Server, advantages of Client Sever over Peer-to-Peer Model"
                    ]
                  },
                  {
                    title: "Unit-2.0 Network Models",
                    points: [
                      "2.1 TCP/IP protocol suite with define protocols in respective Layers: Physical layer, Data Link Layer, Network Layer, Transport Layer, and Application Layer",
                      "2.2 Addressing in TCP/IP: Physical, logical, Port and specific",
                      "2.3 The ISO-OSI model: Physical layer, Data Link Layer, Network Layer, Transport Layer, Session Layer, Presentation Layer, Application Layer"
                    ]
                  },
                  {
                    title: "Unit-3.0 Physical Layer",
                    points: [
                      "3.1 Multiplexing: Basic concept, Frequency Division Multiplexing, Wavelength Division Multiplexing, Synchronous Time-Division Multiplexing",
                      "3.2 Transmission medium: classification based on electromagnetic wave spectrum",
                      "3.3 Guided Media- Performance and applications: Twisted pair (UTP, STP) cable-connector, Coaxial cable-connector, Fiber-optic cable-connector",
                      "3.4 Introduction of Unguided Media- Radio waves, microwaves, Infrared and their applications",
                      "3.5 Modems classification: Broadband modem, DSL-ADSL, HDSL, VDSL",
                      "3.6 Switching: Circuit-switched networks, Packet switched networks- Datagram approach, virtual circuit approach"
                    ]
                  },
                  {
                    title: "Unit-4.0 Data Link Layer",
                    points: [
                      "4.1 Framing",
                      "4.2 Flow control",
                      "4.3 Error control: Types of errors: Single bit and Burst errors, Error detection and correction",
                      "4.4 Protocol: Sliding window protocol: One bit sliding window protocol",
                      "4.5 Point to Point Protocol: service provided by PPP, Frame format PPP and Transition phases of PPP",
                      "4.6 Ethernet and IEEE 802.3",
                      "4.7 MAC Addresses and Switching"
                    ]
                  },
                  {
                    title: "Unit-5.0 Network, Transport and Application Layer",
                    points: [
                      "5.1 Network devices: Repeater, Hub, Bridge, Switches, Router, Gateway",
                      "5.2 Network layer Logical addressing: IPv4 Addresses: address space notations, class-full addressing, and class-less addressing",
                      "5.3 Network Address Translation (NAT), IPv6 addresses, Need for IPv6, Structure and address space",
                      "5.4 Network layer-Multicast Routing Protocols: Unicast, Multicast and Broadcast routing and applications of Transport Layer",
                      "5.5 Internet Control Message Protocol (ICMP), Address Resolution Protocol(ARP), Reverse Address Resolution Protocol (RARP)",
                      "5.6 Process to process delivery: UDP, TCP, RTP, SCTP, ports format and uses.",
                      "5.7 Application Layer services: Concept of DNS, FTP, HTTP/HTTPS, FTP and SMTP, DNS and DHCP.",
                      "5.8 Network Security Protocols (SSL/TLS)",
                      "5.9 Security services: concepts of message and entity security service, Firewall"
                    ]
                  }
                ]
              },
              {
                name: "Embedded Systems",
                code: "2421602",
                units: [
                  {
                    title: "Unit-1.0 Introduction to Embedded System",
                    points: [
                      "1.1 Block diagram of embedded system",
                      "1.2 Embedded system vs. General Computing system",
                      "1.3 Harvard and Von-Neumann Architecture, RISC and CISC Processors",
                      "1.4 Main components of an Embedded system",
                      "1.5 Important characteristics of an embedded system: processor power, Memory, operating system, reliability, performance, power consumption, flexibility.",
                      "1.6 Advantages & Disadvantages of an Embedded system,",
                      "1.7 Application areas of an Embedded system"
                    ]
                  },
                  {
                    title: "Unit-2.0 Atmel & PIC Microcontroller IC",
                    points: [
                      "2.1 Atmel Microcontroller: Basics of ATMEL Microcontroller: Pin Diagram and its functions, Atmel Microcontroller family",
                      "2.2 Arduino Microcontroller board: IDE (Integrated development Environment), Types of Arduino Board and its specifications",
                      "2.3 PIC Microcontroller: Introduction, Pin Configuration, Architecture, Instruction Set, Application"
                    ]
                  },
                  {
                    title: "Unit-3.0 Programming using Embedded C",
                    points: [
                      "3.1 Introduction to Embedded C",
                      "3.2 Embedded C & C Language",
                      "3.3 Embedded C basic operators",
                      "3.4 Instruction set of Embedded C: Arithmetic operations, Logical operations, Data transfer operation, Decision control and Looping",
                      "3.5 Timer/Counter Programming",
                      "3.6 Serial communication programming"
                    ]
                  },
                  {
                    title: "Unit-4.0 Communication Standards and Protocol",
                    points: [
                      "4.1 Modes of data communication: Serial, Parallel, Synchronous and Asynchronous Communication",
                      "4.2 Serial communication standards RS 232",
                      "4.3 Communication protocols: UART, SPI, I2C",
                      "4.4 RTOS (Real time operating system): Basics of RTOS, Types of RTOS and Characteristics of RTOS"
                    ]
                  },
                  {
                    title: "Unit-5.0 Interfacing I/O Devices",
                    points: [
                      "5.1 I/O Interfacing with: Switch(s), Keypad, 7-segment LED display, LCD",
                      "5.2 Interfacing with: ADC and DAC, Stepper motor, DC Motor"
                    ]
                  }
                ]
              },
              {
                name: "Elective | Artificial Intelligence & Machine Learning",
                code: "2421603A",
                units: [
                  {
                    title: "Unit 1.0 Introduction to Artificial Intelligence",
                    points: [
                      "1.1 AI: Definition & Characteristics, History, Scope;",
                      "1.2 Approaches to AI, Turing Test; Foundations of Artificial Intelligence; Goal of AI;",
                      "1.3 Agent & Environment: Definition, Characteristics & Classification of Agents; Rational Agent & Intelligent Agent; Environment and its Properties;",
                      "1.4 AI Ethics: Transparency, Fairness, Accountability, Privacy, Security;",
                      "1.5 AI: Symbolic vs Sub-Symbolic AI, Importance, Limitations, Recent Advancements & Future of AI",
                      "1.6 Importance of data analysis in AI: measurement of central tendency and deviations of a dataset, Mean, mode, median, standard deviation, variance"
                    ]
                  },
                  {
                    title: "Unit 2.0 Problem Solving",
                    points: [
                      "2.1 Problem: Definition & Characteristics; Problem Formulation;",
                      "2.2 Search Algorithm: Definition, Types, Properties, Problem Solving Performance of a Search Algorithm",
                      "2.3 Uninformed Search Strategies: Breadth First Search; Uniform Cost Search; Depth First Search;",
                      "2.4 Informed (Heuristic) Search Strategies: Greedy best-first search; A* Search;",
                      "2.5 Local Search: Local Search Algorithms and Optimisation Problems; Hill Climbing Search; Local Search in Continuous Space"
                    ]
                  },
                  {
                    title: "Unit 3.0 Knowledge, Reasoning & Planning",
                    points: [
                      "3.1 Knowledge: Definition & Types of Knowledge;",
                      "3.2 Knowledge Representation; Knowledge Representation Techniques; Types of Knowledge;",
                      "3.3 Knowledge based Agent in AI: Introduction; Architecture; Rules of Inference; First Order Logic; Forward Chaining & Backward Chaining;",
                      "3.4 Reasoning: Definition & its types; Forward Reasoning & Backward Reasoning; Probabilistic Reasoning: Need, Cause of Uncertainty, Bayesian Reasoning;",
                      "3.5 Planning: Definition; Planning Graphs"
                    ]
                  },
                  {
                    title: "Unit 4.0 Machine Learning",
                    points: [
                      "4.1 Machine Learning & Artificial Intelligence;",
                      "4.2 Types of Machine Learning: Unsupervised, Supervised & Reinforcement Learning; Unsupervised Learning: k-means algorithm, Clustering Algorithm;",
                      "4.3 Supervised Learning: k-nearest neighbour algorithm, Linear Regression Algorithm; Support Vector Machine Algorithm;",
                      "4.4 Reinforcement Learning: Active Reinforcement Learning & Passive Reinforcement Learning;",
                      "4.5 Deep Learning: Artificial Neural Network;"
                    ]
                  },
                  {
                    title: "Unit 5.0 Communication & Perception of AI",
                    points: [
                      "5.1 NLP: Language Model; Text Classification; Information Retrieval;",
                      "5.2 Speech Recognition; Machine Translation;",
                      "5.3 Perception: Image Formation; Object Recognition by Appearance;",
                      "5.4 Weak AI: Artificial Narrow Intelligence;",
                      "5.5 Strong AI: Artificial General Intelligence;"
                    ]
                  }
                ]
              },
              {
                name: "Elective | Industrial Electronics",
                code: "2421603B",
                units: [
                  {
                    title: "Unit-1.0: Power Electronics Devices",
                    points: [
                      "1.1 SCR-Construction, Working principle, types of SCR and V-I Characteristics",
                      "1.2 Rating and Protection: over voltage, over current, snubber circuit.",
                      "1.3 Series and parallel operation of SCRs: String efficiency.",
                      "1.4 DIAC, TRIAC: Construction, Operation, characteristics and applications.",
                      "1.5 Power BJT, MOSFET, IGBT: Construction, Operation, characteristic curves and applications.",
                      "1.6 SCR Turn-on methods: High Voltage triggering, thermal triggering, illumination triggering, dv/dt triggering, Gate triggering",
                      "1.7 Gate trigger circuits: Resistance and Resistance capacitance circuits,",
                      "1.8 SCR triggering using UJT Relaxation Oscillator and Synchronized UJT circuits.",
                      "1.9 SCR Turn-Off methods: Natural and forced commutation,",
                      "1.10 Class A, Class B, Class C, Class D commutation."
                    ]
                  },
                  {
                    title: "Unit-2.0 Phase controlled rectifier",
                    points: [
                      "2.1 Phase control: Firing angle, Conduction angle",
                      "2.2 Single phase half controlled and full controlled rectifier with R, RL load: Circuit diagram, Working principle, Input-output waveform, Equation for DC output",
                      "2.3 Single phase midpoint-controlled rectifier with R, RL load: Circuit diagram, Working principle, Input-output waveform, Equation for DC output",
                      "2.4 Three-phase half wave converter with R load: Circuit diagram, working, input-output waveform."
                    ]
                  },
                  {
                    title: "Unit-3.0 Choppers",
                    points: [
                      "3.1 Chopper: Working Principle, applications",
                      "3.2 Control Techniques: Constant Frequency and Variable Frequency System",
                      "3.3 Classification of Choppers: Step Up and Step-down choppers",
                      "3.4 Class A, Class B, Class C, Class D and Class E chopper",
                      "3.5 Buck, Boost and Buck-boost converter",
                      "3.6 Commutation methods of chopper: Load commutation and Auxiliary commutation"
                    ]
                  },
                  {
                    title: "Unit-4.0 Inverters Cycloconverter and AC Voltage Controller",
                    points: [
                      "4.1 Single Phase Bridge Inverter - Half and full bridge inverter with R and RL load.",
                      "4.2 Basic series and parallel Inverter - Operation and its application.",
                      "4.3 Voltage and Current Source Inverter",
                      "4.4 Three phase bridge inverters: Three phase 180 Degree mode VSI Circuit diagram, working, input-output wave forms.",
                      "4.5 Single phase Cyclo-converter: working principle of Midpoint and bridge Configuration with R load.",
                      "4.6 Step up and step-down single phase Cyclo-converter and its applications.",
                      "4.7 Working principle and applications of a single-phase AC voltage controller."
                    ]
                  },
                  {
                    title: "Unit 5.0-Industrial Application of Power Electronic Devices",
                    points: [
                      "5.1 Light dimmer circuit using DIAC-TRIAC",
                      "5.2 Battery charger using SCR",
                      "5.3 Emergency lighting system",
                      "5.4 Temperature controller using SCR",
                      "5.5 Uninterrupted Power Supply (UPS-online and offline)",
                      "5.6 Switched Mode Power Supply (SMPS)",
                      "5.7 Fan speed control using triac",
                      "5.8 SCR based AC and DC circuits breaker"
                    ]
                  }
                ]
              },
              {
                name: "Elective | Biomedical Electronics",
                code: "2421603C",
                units: [
                  {
                    title: "Unit-1.0: Overview of Human Physiology & Anatomy",
                    points: [
                      "1.1 Structure and function of cell",
                      "1.2 Basic tissues and their functions",
                      "1.3 Cardiovascular system (Only basics)",
                      "1.4 Respiratory system (Only basics)"
                    ]
                  },
                  {
                    title: "Unit-2.0: Nerve & Muscle Physiology",
                    points: [
                      "2.1 Nerve Physiology",
                      "2.2 Membrane Potential - Action potential & resting potential",
                      "2.3 Propagation of Action potential",
                      "2.4 Function of nerve junctions",
                      "2.5 Types of muscles: Skeleton, smooth & cardiac muscle - Structure and functions",
                      "2.6 Cardiac rhythmic contraction",
                      "2.7 Blood flow and arterial pressure"
                    ]
                  },
                  {
                    title: "Unit-3.0: Biomedical Recorders",
                    points: [
                      "3.1 Sources of bioelectric signals",
                      "3.2 Electrodes: Micro, Skin-surface & Needle",
                      "3.3 Electrocardiograph (ECG): ECG waveform, block diagram and working principle of ECG amplifier",
                      "3.4 Electroencephalograph (EEG): EEG waveforms, block diagram and working principle of EEG amplifier",
                      "3.5 Electromyograph (EMG) - EMG waveform, block diagram, and working principle of EMG amplifier"
                    ]
                  },
                  {
                    title: "Unit-4.0: Overview of Medical Equipment and Patient Monitoring System",
                    points: [
                      "4.1 Classification, application, and specifications of diagnostic, therapeutic, and clinical laboratory equipment",
                      "4.2 Modern medical equipment: CT scan, MRI, pacemaker, defibrillator, ultrasound, dialyzer, incubator, and ventilator (only function)",
                      "4.3 Working principle of pulse oximeter",
                      "4.4 Working principle of blood oxygenation (SpO2) sensor",
                      "4.5 Blood pressure measurement"
                    ]
                  },
                  {
                    title: "Unit-5.0: Safety Aspects of Medical Instruments",
                    points: [
                      "5.1 Physiological Effects and Electrical Current",
                      "5.2 Shock Hazards from Electrical Equipment",
                      "5.3 Methods of Accident Prevention",
                      "5.4 Medical equipment regulations (Only listing)"
                    ]
                  }
                ]
              },
              {
                name: "Elective | Advance Communication Systems",
                code: "2421603D",
                units: [
                  {
                    title: "Unit-1.0 Cellular Communication",
                    points: [
                      "1.1 Evolution of Mobile Radio Communication, Definition of basic terms used in mobile communication: forward channel, handoff, Mobile Station (MS), Mobile Switching Centre (MSC), reverse channel, subscriber and transceiver, mobile communication frequency bands and channel bandwidth",
                      "1.2 Generations of mobile communication: First Generation (1G), Second Generation (2G), 2.5 G, Third Generation (3G), Fourth Generation (4G) and Fifth Generation (5G) networks",
                      "1.3 Cell structure and its types, cluster, reuse factor, minimum reuse distance, basic cellular system: mobile station, base station, frequency reuse, channel assignment strategies",
                      "1.4 Handoff strategies: Concept of handoff, Types of Handoffs: Hard and Soft, adaptive",
                      "1.5 Interference: Co-Channel interference and Adjacent Channel interference"
                    ]
                  },
                  {
                    title: "Unit-2.0 Cellular Network Standards",
                    points: [
                      "2.1 Global System for Mobile (GSM): System architecture and interfaces, services and features, Handover, GSM channels, establishment of a GSM call, Channel uses during GSM call, User Validation",
                      "2.2 CDMA Technology for Mobile: System architecture, System blocks and functions, CDMA channels, establishment of a CDMA call, User Validation"
                    ]
                  },
                  {
                    title: "Unit-3.0 Optical Fiber Communication System",
                    points: [
                      "3.1 Evolution of Fiber Optic communication, frequency bands of optical Fiber communication and their applications",
                      "3.2 Elements of an Optical Fiber Transmission link",
                      "3.3 Ray theory of propagation of light, refractive index, Numerical Aperture(NA), Fiber cable structure: core and cladding, modes of light transmission through fiber; step index Fiber and graded index Fiber",
                      "3.4 Types of losses and attenuation in optical Fibers: attenuation due to absorption and scattering"
                    ]
                  },
                  {
                    title: "Unit-4.0 Satellite Communication",
                    points: [
                      "4.1 Block diagram of satellite communication link, Types of satellite: active and passive, synchronous and non-synchronous, Low Earth Orbit (LEO), Medium Earth Orbit (MEO) and Geostationary Earth Orbit (GEO) satellites",
                      "4.2 Kepler's law of satellite motion, first, second and third law, Orbital parameters: apogee and perigee heights, satellite time period, focus of a parabola",
                      "4.3 Transponders, Earth segment subsystem: earth station transmitter and earth station receiver block diagram, function and working"
                    ]
                  },
                  {
                    title: "Unit-5.0 RADAR and its Applications",
                    points: [
                      "5.1 Introduction: Basic principle of RADAR, basic types of RADAR, working of RADAR, applications",
                      "5.2 RADAR range equation and examples, factors affecting maximum range",
                      "5.3 Pulse RADAR: block diagram, RADAR antenna, scanning and tracking methods, display methods",
                      "5.4 Continuous Wave (CW), Doppler RADAR: Moving target indicator radar, blind speed, frequency modulated CW RADAR"
                    ]
                  }
                ]
              },

              {
                name: "Open Elective | Electric Vehicle (Advanced)",
                code: "2400604G",
                units: [
                  {
                    title: "Unit-1.0 Vehicle Dynamics",
                    points: [
                      "1.1 Vehicle Movement",
                      "1.2 Rolling Resistance: Equation, Coefficient, factor affecting rolling resistance, typical values of rolling resistance",
                      "1.3 Grading resistance",
                      "1.4 Road resistance",
                      "1.5 Acceleration resistance",
                      "1.6 Total driving resistance",
                      "1.7 Aerodynamic drag: Equation, typical values of the drag coefficient.",
                      "1.8 Vehicle dynamics: Hybrid and Electric Vehicles, DC Motor Dynamics and Control, AC Motor Dynamics and Control"
                    ]
                  },
                  {
                    title: "Unit-2.0 Elements of Automobile",
                    points: [
                      "2.1 Suspension and Damping systems",
                      "2.2 Brake system: Half-step braking, Full step Braking",
                      "2.3 Transaxle",
                      "2.4 Elements of Noise Vibration and Harshness Control",
                      "2.5 Body balancing",
                      "2.6 Tyre Technology",
                      "2.7 AC/DC motor",
                      "2.8 Air-conditioning and Heating System",
                      "2.9 Lighting System",
                      "2.10 Automotive wiring system",
                      "2.11 Earthing and Insulation",
                      "2.12 Charging stations – Installation and Commissioning",
                      "2.13 Vehicle control unit"
                    ]
                  },
                  {
                    title: "Unit-3.0 EV Power Transmission System",
                    points: [
                      "3.1 Transmission System: Single and Multi-transmission system",
                      "3.2 EV Power Train",
                      "3.3 EV Power Train Components: Battery Pack, DC-AC Converter, Electric Motor, On-Board Charger.",
                      "3.4 Battery Parameters: Voltage, Current, Charging rate, efficiency, energy density, power density, State of Charge (SoC), Depth of Discharge (DoD), State of Health (SoH), Operating Temperature, specific energy, specific power, life cycle and cost.",
                      "3.5 Battery Assembly and Dismantling.",
                      "3.6 Gear and Differential Assembly",
                      "3.7 Safe disposal of used battery"
                    ]
                  },
                  {
                    title: "Unit- 4.0 Vehicle Control Unit (VCU)",
                    points: [
                      "4.1 Electronic Control Unit: Battery Management System, DC-DC Converter, Thermal Management System and Body Control Module.",
                      "4.2 Predefined functions",
                      "4.3 Connections with EV subsystem",
                      "4.4 Controller Area Network (CAN) communication",
                      "4.5 Interaction of CAN Communication with VCU.",
                      "4.6 Troubleshooting and Assessment",
                      "4.7 Dynamometers: Introduction",
                      "4.8 Environmental Chambers"
                    ]
                  },
                  {
                    title: "Unit- 5.0 EV Charging Technologies",
                    points: [
                      "5.1 Charging Technology: Classification",
                      "5.2 Grid-to-Vehicle (G2V)",
                      "5.3 Vehicle to Grid (V2G) or Vehicle to Buildings (V2B) or Vehicle to Home(V2H).",
                      "5.4 Bi-directional EV Charging Systems.",
                      "5.5 Energy Management Strategies.",
                      "5.6 Wireless Power Transfer (WPT) technique for EV Charging."
                    ]
                  }
                ]
              },
            ];

            return semesters;
          })()
        },


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
