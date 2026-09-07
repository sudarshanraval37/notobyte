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
                code: "2600101", //[cite: 1]
                units: [
                  {
                    title: "Unit-1.0 : Algebra", //[cite: 1]
                    points: [
                      "1.1 Concept and properties of determinant.", //[cite: 1]
                      "1.2 Solutions of simultaneous equations in three Unknowns by Cramer's rule.", //[cite: 1]
                      "1.3 Algebra of matrices (Addition, Subtraction, Multiplication by Scalar, and Multiplication of Two matrices).", //[cite: 1]
                      "1.4 Transpose, Adjoint and Inverse of Matrix.", //[cite: 1]
                      "1.5 Solutions of simultaneous equations of a Matrix of order 3 x 3 by Inversion method.", //[cite: 1]
                      "1.6 Position vector.", //[cite: 1]
                      "1.7 Algebra of Vectors (Addition, Subtraction, Scalar Multiplication with vector).", //[cite: 1]
                      "1.8 Scalar product.", //[cite: 1]
                      "1.9 Vector product.", //[cite: 1]
                      "1.10 Algebra in Indian Knowledge System: Solution of simultaneous equations (Indian Mathematics). (IKS)" //[cite: 1]
                    ]
                  },
                  {
                    title: "Unit-2.0 : Differential Calculus", //[cite: 1]
                    points: [
                      "2.1 Concept of function.", //[cite: 1]
                      "2.2 Different type of functions.", //[cite: 1]
                      "2.3 Domain and Range of Function.", //[cite: 1]
                      "2.4 Concept of Limits and its evaluation.", //[cite: 1]
                      "2.5 Concept of continuity with simple problems.", //[cite: 1]
                      "2.6 Differentiation by First Principle.", //[cite: 1]
                      "2.7 Differentiation of Algebraic, trigonometric, Exponential, and Logarithmic functions.", //[cite: 1]
                      "2.8 Differentiation of sum, product, and quotient of two functions.", //[cite: 1]
                      "2.9 Differentiation of composite functions by Chain Rule.", //[cite: 1]
                      "2.10 Logarithmic differentiation.", //[cite: 1]
                      "2.11 Implicit differentiation.", //[cite: 1]
                      "2.12 Differentiation of Parametric Functions.", //[cite: 1]
                      "2.13 Calculus in Indian Knowledge System: The Discovery of Calculus by Indian Astronomers. (Indian Mathematics). (IKS)" //[cite: 1]
                    ]
                  },
                  {
                    title: "Unit-3.0 : Application of Differential Calculus", //[cite: 1]
                    points: [
                      "3.1 Successive differentiation up to second order.", //[cite: 1]
                      "3.2 Rolle's Theorem and Mean Value Theorem (without proof) with examples.", //[cite: 1]
                      "3.3 Rate of change of quantities.", //[cite: 1]
                      "3.4 Equation of Tangent and Normal.", //[cite: 1]
                      "3.5 Maxima and Minima.", //[cite: 1]
                      "3.6 Radius of curvature." //[cite: 1]
                    ]
                  },
                  {
                    title: "Unit-4.0 : Co-ordinate Geometry", //[cite: 1]
                    points: [
                      "4.1 Introduction of Co-ordinate Systems.", //[cite: 1]
                      "4.2 Slope of a line, the angle between two lines.", //[cite: 1]
                      "4.3 Various forms of Straight Lines: Point-slope form, Two-point form, Slope intercept form, Intercept form, Normal form, General form.", //[cite: 1]
                      "4.4 Perpendicular distance of a line from a point, perpendicular distance between two parallel lines.", //[cite: 1]
                      "4.5 Geometry in Sulabasutras in Indian Knowledge System (construction of the square, circling the square). (Indian Mathematics).", //[cite: 1]
                      "4.6 Introduction of Conic-Section.", //[cite: 1]
                      "4.7 Equation of Circle in standard form.", //[cite: 1]
                      "4.8 Standard equation of parabola, ellipse, and hyperbola." //[cite: 1]
                    ]
                  },
                  {
                    title: "Unit-5.0 : Probability and Statistics", //[cite: 1]
                    points: [
                      "5.1 Concept of Probability.", //[cite: 1]
                      "5.2 Addition and multiplication theorems of Probability.", //[cite: 1]
                      "5.3 Mean, Median, Mode (The measure of Central Tendency).", //[cite: 1]
                      "5.4 Range, Variance, Standard Deviation (Measure of Dispersion).", //[cite: 1]
                      "5.5 Coefficient of Variation." //[cite: 1]
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
      id: "competitive",
      title: "Competitive Exams",
      icon: "fas fa-trophy",
      branches: []
    }
  ]
};
