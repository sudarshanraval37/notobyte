/* ================================================================
   questions.js — NotoByte Quiz Section
   Purpose : Holds every quiz question used by the Quiz Section.
             quiz.js only READS this file — no quiz logic lives here.
   ================================================================
   DATA SHAPE
   ----------
   quizData = {
     subjects: [
       {
         id, name, icon, desc, color,      // shown on dashboard card
         semesters: [                       // omit for "flat" subjects
           {
             id, name,
             quizzes: [
               {
                 id, title, icon,
                 comingSoon: true|false,    // true => card shown as locked
                 questions: [
                   {
                     q: "question text",
                     o: ["opt A","opt B","opt C","opt D"],
                     a: 0,                  // index (0-3) of correct option
                     e: "explanation text"  // optional, shown after answering
                   }, ...
                 ]
               }, ...
             ]
           }, ...
         ]
       }, ...
     ]
   }

   HOW TO ADD A NEW SUBJECT
   -------------------------
   1. Copy one of the subject objects below and paste it before the
      closing `]` of quizData.subjects.
   2. Give it a unique id, a name, a Font Awesome icon class, and a
      short description.
   3. Add a `semesters` array (or skip it for a flat subject like
      "Common Subjects") following the shape above.
   No changes to quiz.js are ever required — the UI is fully data-driven.

   HOW TO ADD A NEW QUIZ / SEMESTER
   ----------------------------------
   Add a new entry to the relevant `semesters` or `quizzes` array.
   Leave `questions: []` and set `comingSoon: true` if you don't have
   the 20 questions ready yet — the dashboard will show it as locked
   instead of breaking.

   HOW TO ADD A NEW QUESTION
   ---------------------------
   Push a new { q, o, a, e } object into a quiz's `questions` array.
================================================================ */


/* ----------------------------------------------------------------
   SHARED FIRST-SEMESTER SUBJECTS
   Engineering Mathematics & Engineering Physics are common to every
   branch in semester 1, so we define them once and re-use the same
   array by reference inside each branch below (avoids duplication).
---------------------------------------------------------------- */

const mathematicsSem1Questions = [
  { q: "What is the value of sin(90°)?", o: ["0", "1", "-1", "0.5"], a: 1, e: "sin(90°) = 1, the maximum value of the sine function." },
  { q: "The derivative of xⁿ with respect to x is:", o: ["n·xⁿ", "xⁿ⁻¹", "n·xⁿ⁻¹", "n·xⁿ⁺¹"], a: 2, e: "Power rule: d/dx(xⁿ) = n·xⁿ⁻¹." },
  { q: "∫(1/x) dx equals:", o: ["x²/2 + C", "ln|x| + C", "1/x² + C", "eˣ + C"], a: 1, e: "The integral of 1/x is the natural logarithm ln|x| + C." },
  { q: "The value of log(1) (any base) is:", o: ["0", "1", "10", "Undefined"], a: 0, e: "log of 1 is always 0 in any base since base⁰ = 1." },
  { q: "A matrix with an equal number of rows and columns is called:", o: ["Rectangular matrix", "Diagonal matrix", "Square matrix", "Null matrix"], a: 2, e: "A square matrix has rows = columns (e.g. 3×3)." },
  { q: "sin²θ + cos²θ equals:", o: ["0", "1", "2", "tanθ"], a: 1, e: "This is the fundamental Pythagorean trigonometric identity." },
  { q: "The derivative of a constant is:", o: ["1", "The constant itself", "0", "Infinity"], a: 2, e: "Constants don't change, so their rate of change (derivative) is 0." },
  { q: "The value of e⁰ is:", o: ["0", "1", "e", "Undefined"], a: 1, e: "Any non-zero number raised to the power 0 equals 1." },
  { q: "The determinant of matrix [[a,b],[c,d]] is:", o: ["ac − bd", "ad − bc", "ab − cd", "ad + bc"], a: 1, e: "For a 2×2 matrix, determinant = ad − bc." },
  { q: "d/dx(sin x) equals:", o: ["cos x", "−cos x", "−sin x", "sec²x"], a: 0, e: "The derivative of sin x is cos x." },
  { q: "∫cos x dx equals:", o: ["−sin x + C", "sin x + C", "−cos x + C", "tan x + C"], a: 1, e: "The integral of cos x is sin x + C." },
  { q: "The approximate value of π is:", o: ["3.00", "3.14", "2.71", "1.41"], a: 1, e: "π ≈ 3.14159..., commonly rounded to 3.14." },
  { q: "Roots of ax² + bx + c = 0 are given by:", o: ["(−b ± √(b²−4ac)) / 2a", "(−b ± √(b²+4ac)) / 2a", "(b ± √(b²−4ac)) / a", "(−b ± √(4ac−b²)) / 2a"], a: 0, e: "This is the standard quadratic formula." },
  { q: "A function f(x) is called even if:", o: ["f(−x) = −f(x)", "f(−x) = f(x)", "f(x) = 0", "f(x) = x"], a: 1, e: "Even functions are symmetric about the y-axis: f(−x) = f(x)." },
  { q: "The limit of (sin x)/x as x → 0 is:", o: ["0", "1", "∞", "Undefined"], a: 1, e: "This is a standard and very frequently used limit in calculus." },
  { q: "The value of tan(45°) is:", o: ["0", "1", "√3", "Undefined"], a: 1, e: "tan(45°) = sin(45°)/cos(45°) = 1." },
  { q: "The derivative of eˣ is:", o: ["eˣ", "x·eˣ⁻¹", "ln x", "1/eˣ"], a: 0, e: "eˣ is unique in that its derivative equals itself." },
  { q: "The formula for permutations of choosing r out of n is:", o: ["n!/r!", "n!/(n−r)!", "n!/(r!(n−r)!)", "r!/n!"], a: 1, e: "nPr = n! / (n−r)! gives arrangements where order matters." },
  { q: "The value of logₑ(e) is:", o: ["0", "1", "e", "10"], a: 1, e: "The natural log of e (its own base) is always 1." },
  { q: "The nCr (combination) formula is:", o: ["n!/(r!(n−r)!)", "n!/(n−r)!", "n!·r!", "n!/r!"], a: 0, e: "nCr = n! / (r!(n−r)!) counts selections where order doesn't matter." }
];

const physicsSem1Questions = [
  { q: "The SI unit of force is:", o: ["Joule", "Newton", "Watt", "Pascal"], a: 1, e: "Force is measured in Newtons (N), named after Sir Isaac Newton." },
  { q: "The SI unit of work is:", o: ["Newton", "Watt", "Joule", "Ohm"], a: 2, e: "Work is measured in Joules (J) = Force × Distance." },
  { q: "The approximate value of acceleration due to gravity (g) is:", o: ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "11.2 m/s²"], a: 1, e: "g ≈ 9.8 m/s² on the surface of the Earth." },
  { q: "Newton's First Law of Motion is also known as the:", o: ["Law of momentum", "Law of inertia", "Law of gravitation", "Law of energy"], a: 1, e: "It states a body remains at rest or in uniform motion unless acted upon by a force." },
  { q: "The SI unit of power is:", o: ["Joule", "Newton", "Watt", "Volt"], a: 2, e: "Power (rate of doing work) is measured in Watts (W)." },
  { q: "Speed is defined as:", o: ["Distance × Time", "Distance / Time", "Time / Distance", "Mass / Time"], a: 1, e: "Speed = Distance travelled / Time taken." },
  { q: "Ohm's Law is expressed as:", o: ["V = I/R", "V = IR", "V = R/I", "I = VR"], a: 1, e: "Voltage = Current × Resistance (V = IR)." },
  { q: "The SI unit of electric current is:", o: ["Volt", "Ohm", "Ampere", "Coulomb"], a: 2, e: "Electric current is measured in Amperes (A)." },
  { q: "The formula for kinetic energy is:", o: ["mgh", "½mv²", "mv", "m/v²"], a: 1, e: "Kinetic Energy = ½ × mass × velocity²." },
  { q: "The SI unit of frequency is:", o: ["Hertz", "Second", "Watt", "Joule"], a: 0, e: "Frequency (cycles per second) is measured in Hertz (Hz)." },
  { q: "Newton's Third Law states that:", o: ["Force = mass × acceleration", "Every action has an equal and opposite reaction", "Energy is conserved", "Objects in motion stay in motion"], a: 1, e: "Action-reaction force pairs act on two different bodies simultaneously." },
  { q: "The SI unit of pressure is:", o: ["Newton", "Pascal", "Joule", "Watt"], a: 1, e: "Pressure = Force/Area, measured in Pascals (Pa)." },
  { q: "The speed of light in vacuum is approximately:", o: ["3 × 10⁵ m/s", "3 × 10⁶ m/s", "3 × 10⁷ m/s", "3 × 10⁸ m/s"], a: 3, e: "Light travels at ≈ 3 × 10⁸ m/s in a vacuum." },
  { q: "The SI unit of temperature is:", o: ["Celsius", "Fahrenheit", "Kelvin", "Joule"], a: 2, e: "Kelvin is the SI (absolute) unit of temperature." },
  { q: "Density is defined as:", o: ["Mass × Volume", "Mass / Volume", "Volume / Mass", "Weight / Area"], a: 1, e: "Density = Mass / Volume, usually in kg/m³." },
  { q: "The Law of Conservation of Energy states that energy:", o: ["Can be created but not destroyed", "Can be destroyed but not created", "Can neither be created nor destroyed, only transformed", "Always increases over time"], a: 2, e: "Total energy in an isolated system remains constant; it only changes form." },
  { q: "The SI unit of electrical resistance is:", o: ["Ampere", "Volt", "Ohm", "Watt"], a: 2, e: "Resistance is measured in Ohms (Ω)." },
  { q: "1 Joule is equivalent to:", o: ["1 Newton × 1 metre", "1 Newton / 1 metre", "1 Watt × 1 second", "Both A and C"], a: 3, e: "1 J = 1 N·m, and also 1 J = 1 W·s (power over time)." },
  { q: "Momentum is defined as the product of:", o: ["Mass and velocity", "Mass and acceleration", "Force and time", "Force and distance"], a: 0, e: "Momentum (p) = mass (m) × velocity (v)." },
  { q: "The SI unit of electric charge is:", o: ["Ampere", "Volt", "Coulomb", "Ohm"], a: 2, e: "Electric charge is measured in Coulombs (C)." }
];


/* ----------------------------------------------------------------
   MAIN QUIZ DATA
---------------------------------------------------------------- */
const quizData = {
  subjects: [

    /* ============================ COMPUTER SCIENCE ============================ */
    {
      id: "cs",
      name: "Computer Science",
      icon: "fas fa-laptop-code",
      desc: "Programming, databases, digital logic & core CS fundamentals.",
      color: "var(--accent)",
      semesters: [
        {
          id: "cs-sem1",
          name: "Semester 1",
          quizzes: [
            {
              id: "cs-s1-c", title: "C Programming", icon: "fas fa-code",
              questions: [
                { q: "Which symbol is used for a single-line comment in C?", o: ["/* */", "//", "#", "--"], a: 1, e: "// starts a single-line comment in C (C99 onwards)." },
                { q: "Which header file contains printf() and scanf()?", o: ["conio.h", "stdlib.h", "stdio.h", "string.h"], a: 2, e: "stdio.h stands for Standard Input Output header file." },
                { q: "What is the correct file extension for a C source file?", o: [".cpp", ".c", ".java", ".exe"], a: 1, e: "C source files use the .c extension." },
                { q: "Which operator is used to get the address of a variable?", o: ["*", "&", "%", "#"], a: 1, e: "The & (address-of) operator returns a variable's memory address." },
                { q: "What is the size of the char data type in C (typically)?", o: ["1 byte", "2 bytes", "4 bytes", "8 bytes"], a: 0, e: "A char occupies 1 byte in almost all C compilers." },
                { q: "Which loop is guaranteed to execute at least once?", o: ["for", "while", "do-while", "if-else"], a: 2, e: "A do-while loop checks its condition after executing the body once." },
                { q: "Which keyword immediately exits a loop?", o: ["continue", "break", "return", "exit"], a: 1, e: "break terminates the nearest enclosing loop or switch statement." },
                { q: "Which keyword skips the current loop iteration and moves to the next?", o: ["break", "goto", "continue", "skip"], a: 2, e: "continue jumps to the next iteration, skipping remaining code in the current one." },
                { q: "Which is the correct syntax to declare a pointer to an int?", o: ["int p*;", "int *p;", "ptr int p;", "pointer int p;"], a: 1, e: "A pointer is declared as datatype *name;" },
                { q: "Which function is used to allocate memory dynamically in C?", o: ["alloc()", "malloc()", "new()", "create()"], a: 1, e: "malloc() reserves a block of memory on the heap at runtime." },
                { q: "What does the ++ operator do?", o: ["Decrements by 1", "Multiplies by 2", "Increments by 1", "Squares the value"], a: 2, e: "++ is the increment operator; it adds 1 to the variable's value." },
                { q: "Which of these is NOT a valid basic C data type?", o: ["int", "float", "string", "char"], a: 2, e: "C has no built-in 'string' type — strings are char arrays." },
                { q: "What is the output of: printf(\"%d\", 5/2);", o: ["2.5", "2", "3", "Error"], a: 1, e: "Integer division truncates the decimal part, so 5/2 = 2." },
                { q: "Which symbol is used to terminate a statement in C?", o: [":", ";", ".", ","], a: 1, e: "Every C statement must end with a semicolon (;)." },
                { q: "Recursion refers to:", o: ["A loop inside a loop", "A function calling itself", "Two functions calling each other only once", "A function with no return value"], a: 1, e: "Recursion is when a function calls itself to solve a smaller sub-problem." },
                { q: "Which storage class is local to a function and has a default garbage value?", o: ["static", "extern", "auto", "register"], a: 2, e: "auto is the default storage class for local variables in C." },
                { q: "An array is best described as:", o: ["A single variable holding one value", "A collection of elements of the same type stored contiguously", "A function pointer", "A type of loop"], a: 1, e: "Arrays store multiple elements of the same data type in contiguous memory." },
                { q: "Which function returns the length of a string in C?", o: ["length()", "strlen()", "size()", "strlength()"], a: 1, e: "strlen() from string.h returns the number of characters before the null terminator." },
                { q: "What is the conventional return type of the main() function?", o: ["void", "int", "float", "char"], a: 1, e: "main() conventionally returns an int indicating the program's exit status." },
                { q: "Which of these has the highest precedence in C expressions?", o: ["Addition (+)", "Multiplication (*)", "Parentheses ()", "Assignment (=)"], a: 2, e: "Parentheses always evaluate first, overriding all other operator precedence." }
              ]
            },
            { id: "cs-s1-math", title: "Engineering Mathematics", icon: "fas fa-square-root-variable", questions: mathematicsSem1Questions },
            { id: "cs-s1-phy", title: "Engineering Physics", icon: "fas fa-atom", questions: physicsSem1Questions }
          ]
        },
        {
          id: "cs-sem2",
          name: "Semester 2",
          quizzes: [
            {
              id: "cs-s2-dbms", title: "DBMS", icon: "fas fa-database",
              questions: [
                { q: "DBMS stands for:", o: ["Data Backup Management System", "Database Management System", "Data Block Memory System", "Database Model System"], a: 1, e: "DBMS = software used to create, manage and query databases." },
                { q: "SQL stands for:", o: ["Structured Query Language", "Sequential Query Language", "Simple Question Language", "Structured Question Logic"], a: 0, e: "SQL is the standard language used to interact with relational databases." },
                { q: "A Primary Key is used to:", o: ["Sort a table", "Uniquely identify each record in a table", "Encrypt data", "Delete duplicate tables"], a: 1, e: "Primary keys ensure every row in a table can be uniquely identified." },
                { q: "Which SQL command is used to remove a table entirely?", o: ["DELETE", "REMOVE", "DROP", "TRUNCATE ONLY"], a: 2, e: "DROP TABLE deletes the table structure and all its data permanently." },
                { q: "Which SQL command is used to modify existing records?", o: ["MODIFY", "UPDATE", "ALTER", "CHANGE"], a: 1, e: "UPDATE ... SET ... WHERE ... is used to change existing row values." },
                { q: "Normalization is mainly used to:", o: ["Increase data redundancy", "Reduce data redundancy and improve integrity", "Encrypt the database", "Speed up hardware"], a: 1, e: "Normalization organizes data to minimize redundancy and dependency issues." },
                { q: "A Foreign Key is used to:", o: ["Encrypt a column", "Establish a relationship between two tables", "Delete a table", "Rename a column"], a: 1, e: "A foreign key in one table references the primary key of another table." },
                { q: "Which of these is NOT a category of SQL commands?", o: ["DDL", "DML", "DCL", "HTML"], a: 3, e: "HTML is a markup language, not part of SQL command categories." },
                { q: "Which SQL command is used to retrieve data from a table?", o: ["FETCH", "GET", "SELECT", "SHOW"], a: 2, e: "SELECT is the fundamental command used to query and retrieve data." },
                { q: "A relation in DBMS terminology is also referred to as a:", o: ["Row", "Column", "Table", "Index"], a: 2, e: "In relational database theory, a 'relation' is another name for a table." },
                { q: "ACID properties in a transaction stand for:", o: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Isolation, Data", "Atomicity, Control, Integrity, Data", "Association, Consistency, Index, Data"], a: 0, e: "ACID ensures reliable processing of database transactions." },
                { q: "Which key must contain unique values and can also be a candidate for the primary key?", o: ["Foreign key", "Candidate key", "Composite key", "Super key"], a: 1, e: "Candidate keys are columns (or sets) that could each qualify as the primary key." },
                { q: "Which JOIN returns only the matching rows from both tables?", o: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"], a: 2, e: "INNER JOIN returns rows that have matching values in both joined tables." },
                { q: "DDL stands for:", o: ["Data Definition Language", "Data Deletion Language", "Database Design Language", "Data Duplication Language"], a: 0, e: "DDL commands (CREATE, ALTER, DROP) define the database structure." },
                { q: "Which SQL command is used to add a new record to a table?", o: ["ADD", "INSERT", "CREATE", "NEW"], a: 1, e: "INSERT INTO ... VALUES ... adds a new row to a table." },
                { q: "The First Normal Form (1NF) mainly requires:", o: ["No primary key", "Atomic (indivisible) values in each column", "At least two foreign keys", "No duplicate tables"], a: 1, e: "1NF requires each column to hold a single, atomic value — no repeating groups." },
                { q: "A View in SQL is best described as:", o: ["A physical copy of a table", "A virtual table based on the result of a query", "An index on a column", "A stored procedure"], a: 1, e: "A view doesn't store data itself — it presents data from an underlying query." },
                { q: "Which SQL category is used to control access/permissions to data?", o: ["DML", "DDL", "DCL", "TCL"], a: 2, e: "DCL (GRANT, REVOKE) manages user permissions on database objects." },
                { q: "Which of the following is a NoSQL database?", o: ["MySQL", "Oracle", "MongoDB", "PostgreSQL"], a: 2, e: "MongoDB is a document-oriented NoSQL database, unlike the other relational options." },
                { q: "The process of organizing data to eliminate redundancy is called:", o: ["Indexing", "Normalization", "Replication", "Partitioning"], a: 1, e: "Normalization systematically restructures tables to reduce redundant data." }
              ]
            },
            {
              id: "cs-s2-java", title: "Java Programming", icon: "fab fa-java",
              questions: [
                { q: "Java is best described as a(n):", o: ["Procedural-only language", "Object-Oriented language", "Markup language", "Query language"], a: 1, e: "Java is fundamentally built around Object-Oriented Programming concepts." },
                { q: "Which keyword is used to create a class in Java?", o: ["struct", "class", "object", "define"], a: 1, e: "The 'class' keyword defines a new class blueprint." },
                { q: "Which method is the entry point of a standalone Java program?", o: ["start()", "run()", "main()", "init()"], a: 2, e: "public static void main(String[] args) is where execution begins." },
                { q: "Java source code is compiled into:", o: ["Machine code directly", "Bytecode", "Assembly code", "Python code"], a: 1, e: "javac compiles .java files into platform-independent bytecode (.class files)." },
                { q: "JVM stands for:", o: ["Java Virtual Machine", "Java Variable Method", "Java Verified Module", "Java Visual Manager"], a: 0, e: "The JVM executes Java bytecode, enabling Java's 'write once, run anywhere'." },
                { q: "Which keyword is used for one class to inherit another?", o: ["implements", "extends", "inherits", "super"], a: 1, e: "'extends' is used for class inheritance in Java." },
                { q: "Which keyword prevents a class from being inherited further?", o: ["static", "private", "final", "const"], a: 2, e: "A class declared 'final' cannot be extended by any other class." },
                { q: "The default value of a boolean variable in Java is:", o: ["true", "false", "0", "null"], a: 1, e: "Uninitialized boolean instance variables default to false." },
                { q: "Which of these is NOT a Java primitive data type?", o: ["int", "float", "String", "char"], a: 2, e: "String is a class (reference type) in Java, not a primitive." },
                { q: "Which keyword is used to create a new object?", o: ["make", "new", "create", "object"], a: 1, e: "The 'new' keyword allocates memory and creates a class instance." },
                { q: "Java achieves multiple inheritance of type through:", o: ["Multiple classes", "Interfaces", "Constructors", "Packages"], a: 1, e: "A class can implement multiple interfaces, providing multiple-inheritance-like behavior." },
                { q: "Which statement is used to print output to the console?", o: ["print.out()", "System.out.println()", "console.log()", "echo()"], a: 1, e: "System.out.println() writes text followed by a new line to standard output." },
                { q: "JDK stands for:", o: ["Java Development Kit", "Java Deployment Kit", "Java Design Kit", "Java Data Kit"], a: 0, e: "JDK includes the compiler, JRE, and tools needed to develop Java applications." },
                { q: "Which operator checks if two values are equal in Java?", o: ["=", "==", "===", "eq"], a: 1, e: "== compares values (or references), while = is the assignment operator." },
                { q: "Which construct is used to handle exceptions in Java?", o: ["if-else", "try-catch", "switch-case", "for-each"], a: 1, e: "try-catch blocks let you catch and handle runtime exceptions gracefully." },
                { q: "A constructor's name must match:", o: ["The method it calls", "The class name", "The package name", "The variable name"], a: 1, e: "A constructor always shares the exact name of its enclosing class." },
                { q: "Which keyword declares an abstract class?", o: ["abstract", "interface", "virtual", "static"], a: 0, e: "'abstract class' can have abstract methods without a body." },
                { q: "Encapsulation in Java is typically achieved using:", o: ["Public variables only", "Private variables with public getters/setters", "Static methods only", "Final classes"], a: 1, e: "Encapsulation hides internal state, exposing it only via controlled methods." },
                { q: "Which package contains the Scanner class?", o: ["java.io", "java.util", "java.lang", "java.net"], a: 1, e: "Scanner, used for reading input, resides in java.util." },
                { q: "Which of these is a popular IDE for Java development?", o: ["Eclipse", "Photoshop", "AutoCAD", "MS Excel"], a: 0, e: "Eclipse (along with IntelliJ IDEA and NetBeans) is a widely used Java IDE." }
              ]
            },
            {
              id: "cs-s2-de", title: "Digital Electronics", icon: "fas fa-microchip",
              questions: [
                { q: "The binary number system uses which digits?", o: ["0 and 1", "0 to 9", "1 and 2", "A and B"], a: 0, e: "Binary is a base-2 system using only 0 and 1." },
                { q: "Which are the three basic logic gates?", o: ["AND, OR, NOT", "NAND, NOR, XOR", "IF, ELSE, THEN", "ADD, SUB, MUL"], a: 0, e: "AND, OR and NOT form the fundamental building blocks of digital logic." },
                { q: "The output of an AND gate is HIGH only when:", o: ["Any one input is HIGH", "All inputs are HIGH", "All inputs are LOW", "Exactly one input is HIGH"], a: 1, e: "An AND gate outputs 1 only if every input is 1." },
                { q: "A NAND gate is a combination of:", o: ["OR + NOT", "AND + NOT", "XOR + NOT", "NOR + AND"], a: 1, e: "NAND = NOT-AND; it inverts the output of a standard AND gate." },
                { q: "A flip-flop is primarily used to:", o: ["Amplify a signal", "Store 1 bit of data", "Convert AC to DC", "Measure frequency"], a: 1, e: "Flip-flops are basic memory elements that store a single binary bit." },
                { q: "How many inputs does a full adder circuit have?", o: ["2", "3", "4", "1"], a: 1, e: "A full adder takes two bits plus a carry-in, totaling 3 inputs." },
                { q: "The binary equivalent of decimal 2 is:", o: ["01", "10", "11", "00"], a: 1, e: "Decimal 2 = 1×2¹ + 0×2⁰ = binary 10." },
                { q: "Which logic gate is called a 'universal gate'?", o: ["AND", "OR", "NAND", "NOT"], a: 2, e: "NAND (and also NOR) can be used to construct any other logic gate." },
                { q: "1 byte equals how many bits?", o: ["4 bits", "8 bits", "16 bits", "2 bits"], a: 1, e: "A byte is a standard unit consisting of 8 bits." },
                { q: "An XOR gate's output is HIGH when the inputs are:", o: ["Both the same", "Both different", "Both zero", "Both one"], a: 1, e: "XOR (exclusive OR) outputs 1 only when its inputs differ." },
                { q: "A multiplexer selects one of several inputs based on:", o: ["Clock signal only", "Selection lines", "Output feedback", "Power supply"], a: 1, e: "Select lines determine which single input is routed to the multiplexer's output." },
                { q: "A decoder's main function is to:", o: ["Combine multiple inputs into one", "Convert binary code into a unique output line", "Store data permanently", "Amplify weak signals"], a: 1, e: "A decoder activates one specific output line based on the binary input code." },
                { q: "Which number system has a base of 16?", o: ["Binary", "Octal", "Decimal", "Hexadecimal"], a: 3, e: "Hexadecimal uses digits 0-9 and letters A-F, giving it base 16." },
                { q: "A counter circuit is mainly used to:", o: ["Store audio signals", "Count the number of pulses or events", "Convert digital to analog", "Amplify voltage"], a: 1, e: "Counters increment/decrement their state with each clock pulse or event." },
                { q: "SR flip-flop stands for:", o: ["Store-Read flip-flop", "Set-Reset flip-flop", "Sequence-Register flip-flop", "Signal-Response flip-flop"], a: 1, e: "SR flip-flop has Set and Reset inputs controlling its stored bit." },
                { q: "The output of a NOT gate is always:", o: ["Same as the input", "The inverse (complement) of the input", "Zero", "One"], a: 1, e: "A NOT gate (inverter) flips a 1 to 0 and a 0 to 1." },
                { q: "Boolean algebra, used in digital logic, was developed by:", o: ["Isaac Newton", "George Boole", "Charles Babbage", "Alan Turing"], a: 1, e: "George Boole introduced the algebra of logic that bears his name." },
                { q: "A register in digital electronics is used to:", o: ["Store multiple bits of data", "Convert frequency", "Measure current", "Generate heat"], a: 0, e: "Registers are groups of flip-flops used to hold multi-bit data temporarily." },
                { q: "Which gate outputs 1 only when both inputs are 0?", o: ["OR", "AND", "NOR", "XOR"], a: 2, e: "NOR (NOT-OR) gives HIGH output only when all inputs are LOW." },
                { q: "De Morgan's theorem relates operations between:", o: ["AND, OR and NOT", "ADD, SUB and MUL", "SET and RESET", "HIGH and LOW voltage only"], a: 0, e: "De Morgan's laws show how AND/OR expressions can be rewritten using NOT." }
              ]
            }
          ]
        },
        { id: "cs-sem3", name: "Semester 3", quizzes: [
          { id: "cs-s3-ds", title: "Data Structures", icon: "fas fa-sitemap", comingSoon: true, questions: [] },
          { id: "cs-s3-os", title: "Operating System", icon: "fas fa-desktop", comingSoon: true, questions: [] },
          { id: "cs-s3-cn", title: "Computer Networks", icon: "fas fa-network-wired", comingSoon: true, questions: [] }
        ] }
      ]
    },

    /* ============================ MECHANICAL ENGINEERING ============================ */
    {
      id: "mech",
      name: "Mechanical Engineering",
      icon: "fas fa-gears",
      desc: "Mechanics, thermodynamics, manufacturing & design fundamentals.",
      color: "var(--accent2)",
      semesters: [
        {
          id: "mech-sem1",
          name: "Semester 1",
          quizzes: [
            {
              id: "mech-s1-em", title: "Engineering Mechanics", icon: "fas fa-cogs",
              questions: [
                { q: "The SI unit of force is:", o: ["Joule", "Newton", "Pascal", "Watt"], a: 1, e: "Force is measured in Newtons (N)." },
                { q: "A single force that balances a system of forces is called the:", o: ["Resultant", "Equilibrant", "Moment", "Couple"], a: 1, e: "The equilibrant is equal in magnitude but opposite in direction to the resultant." },
                { q: "The Law of Conservation of Momentum states that total momentum:", o: ["Always increases", "Remains constant if no external force acts", "Always decreases", "Is always zero"], a: 1, e: "In an isolated system, total momentum before and after an event stays the same." },
                { q: "Coplanar forces are forces that lie in the:", o: ["Same line", "Same plane", "Same point only", "3D space only"], a: 1, e: "Coplanar means all the forces act within a single common plane." },
                { q: "The center of gravity of a body is the point where:", o: ["Maximum stress occurs", "The entire weight of the body is assumed to act", "Velocity is zero", "Friction is maximum"], a: 1, e: "It's the single point through which the resultant weight force effectively acts." },
                { q: "Friction acts in a direction that:", o: ["Supports motion", "Opposes relative motion between surfaces", "Has no fixed direction", "Is always vertical"], a: 1, e: "Frictional force always resists the relative sliding motion between contacting surfaces." },
                { q: "The unit of the moment of a force is:", o: ["Newton", "Newton-metre", "Newton per metre", "Joule per second"], a: 1, e: "Moment = Force × perpendicular distance, giving units of N·m." },
                { q: "A couple consists of:", o: ["Two equal, opposite, parallel forces", "Two unequal forces", "A single force", "Three concurrent forces"], a: 0, e: "A couple produces pure rotation with no net translational force." },
                { q: "Static friction refers to friction:", o: ["Between two moving bodies", "When a body is at rest and about to move", "In fluids only", "In vacuum"], a: 1, e: "Static friction resists the initiation of relative motion." },
                { q: "The resultant of two forces acting at an angle can be found using the:", o: ["Pythagoras theorem only", "Parallelogram law", "Ohm's law", "Bernoulli's principle"], a: 1, e: "The parallelogram law of forces gives both magnitude and direction of the resultant." },
                { q: "The SI unit of work done is:", o: ["Newton", "Joule", "Watt", "Pascal"], a: 1, e: "Work = Force × Displacement, measured in Joules." },
                { q: "Kinetic friction compared to static friction (limiting) is generally:", o: ["Greater", "Less", "Exactly equal", "Unrelated"], a: 1, e: "Once motion begins, kinetic friction is usually lower than maximum static friction." },
                { q: "Lami's theorem is applicable to:", o: ["A single force", "Three concurrent, coplanar forces in equilibrium", "Any two random forces", "Only vertical forces"], a: 1, e: "Lami's theorem relates three concurrent coplanar forces that keep a body in equilibrium." },
                { q: "Which point represents where a body's entire weight is assumed to act?", o: ["Centroid of area", "Centre of gravity", "Point of contact", "Metacentre"], a: 1, e: "The centre of gravity is the effective point of action of a body's weight." },
                { q: "The moment of a force is calculated as:", o: ["Force ÷ distance", "Force × perpendicular distance", "Mass × acceleration", "Force × time"], a: 1, e: "Moment (torque) = Force × perpendicular distance from the pivot/axis." },
                { q: "A rigid body is one that:", o: ["Deforms easily under load", "Does not deform under applied loads", "Has no mass", "Is always in motion"], a: 1, e: "Rigid body mechanics assumes no deformation occurs under applied forces." },
                { q: "A free body diagram is used to show:", o: ["Internal molecular structure", "All external forces acting on an isolated body", "Electrical circuit connections", "Chemical reactions"], a: 1, e: "It isolates a body and shows every external force/reaction acting on it." },
                { q: "The angle of friction is directly related to the:", o: ["Coefficient of restitution", "Coefficient of friction", "Angle of repose only in fluids", "Mass of the body"], a: 1, e: "tan(angle of friction) = coefficient of friction (μ)." },
                { q: "The SI unit of angular velocity is:", o: ["m/s", "rad/s", "rad/s²", "N·m"], a: 1, e: "Angular velocity measures rate of rotation in radians per second." },
                { q: "Newton's Second Law relates force to:", o: ["Mass and acceleration", "Mass and velocity only", "Time and distance", "Energy and power"], a: 0, e: "F = m × a — force equals mass times acceleration." }
              ]
            },
            { id: "mech-s1-math", title: "Engineering Mathematics", icon: "fas fa-square-root-variable", questions: mathematicsSem1Questions },
            { id: "mech-s1-phy", title: "Engineering Physics", icon: "fas fa-atom", questions: physicsSem1Questions }
          ]
        },
        { id: "mech-sem2", name: "Semester 2", quizzes: [
          { id: "mech-s2-tod", title: "Thermodynamics", icon: "fas fa-temperature-high", comingSoon: true, questions: [] },
          { id: "mech-s2-mom", title: "Mechanics of Materials", icon: "fas fa-industry", comingSoon: true, questions: [] }
        ] }
      ]
    },

    /* ============================ CIVIL ENGINEERING ============================ */
    {
      id: "civil",
      name: "Civil Engineering",
      icon: "fas fa-drafting-compass",
      desc: "Construction materials, surveying, structures & design basics.",
      color: "var(--accent3)",
      semesters: [
        {
          id: "civil-sem1",
          name: "Semester 1",
          quizzes: [
            {
              id: "civil-s1-bm", title: "Building Materials", icon: "fas fa-trowel-bricks",
              questions: [
                { q: "The initial setting time of Ordinary Portland Cement is approximately:", o: ["10 minutes", "30 minutes", "2 hours", "6 hours"], a: 1, e: "OPC generally has an initial setting time of about 30 minutes." },
                { q: "The main raw material used to manufacture cement is:", o: ["Sand", "Limestone", "Steel scrap", "Bitumen"], a: 1, e: "Limestone (calcium carbonate) is the primary ingredient in cement production." },
                { q: "Which apparatus is used to test the consistency of cement?", o: ["Slump cone", "Vicat apparatus", "Sieve set", "Compression testing machine"], a: 1, e: "The Vicat apparatus determines standard consistency and setting times of cement." },
                { q: "Fine aggregate in concrete typically refers to:", o: ["Gravel", "Sand", "Crushed stone", "Steel bars"], a: 1, e: "Sand (particles smaller than 4.75 mm) is classified as fine aggregate." },
                { q: "The standard size of a common brick in India is approximately:", o: ["190×90×90 mm", "300×150×150 mm", "100×50×50 mm", "500×250×250 mm"], a: 0, e: "The Indian standard modular brick size is 190×90×90 mm." },
                { q: "Which material acts as the primary binding agent in concrete?", o: ["Sand", "Cement", "Water", "Gravel"], a: 1, e: "Cement, when mixed with water, binds aggregates together to form concrete." },
                { q: "In M20 grade concrete, the number 20 indicates:", o: ["Cement content in kg", "Characteristic compressive strength (N/mm²) at 28 days", "Number of aggregates used", "Water content in litres"], a: 1, e: "M20 means the concrete achieves a characteristic strength of 20 N/mm²." },
                { q: "Coarse aggregate generally refers to particles:", o: ["Smaller than 4.75 mm", "Larger than 4.75 mm", "Only powder form", "Only in liquid form"], a: 1, e: "Aggregates retained on a 4.75 mm sieve are classified as coarse aggregate." },
                { q: "Low Heat Cement is typically used for:", o: ["Mass concrete works like dams", "Fast repair works", "Underwater diving gear", "Painting walls"], a: 0, e: "Low Heat Cement reduces heat of hydration, ideal for large mass concrete pours." },
                { q: "Seasoning of timber is done mainly to:", o: ["Increase its weight", "Reduce its moisture content", "Change its colour", "Increase its cost"], a: 1, e: "Seasoning removes excess moisture, improving strength and durability of timber." },
                { q: "A good quality brick should produce, when struck with another:", o: ["A dull thud", "A clear ringing sound", "No sound at all", "A cracking sound"], a: 1, e: "Well-burnt, good quality bricks give a clear metallic ringing sound." },
                { q: "Steel bars used inside concrete to resist tension are called:", o: ["Ballast", "Reinforcement", "Aggregate", "Admixture"], a: 1, e: "Reinforcement (rebar) provides the tensile strength concrete lacks on its own." },
                { q: "The workability of fresh concrete is typically measured using the:", o: ["Slump test", "Vicat test", "Litmus test", "Sieve analysis"], a: 0, e: "The slump test gives a practical measure of fresh concrete's workability." },
                { q: "The process of mixing water with cement to start the chemical reaction is called:", o: ["Curing", "Gauging", "Grading", "Seasoning"], a: 1, e: "Gauging is the act of adding a controlled amount of water to cement/concrete mix." },
                { q: "Plywood is manufactured by:", o: ["Melting wood chips", "Bonding thin layers (veneers) of wood together", "Compressing sawdust with cement", "Burning timber at high heat"], a: 1, e: "Plywood is made from thin wood veneers glued together in alternating grain directions." },
                { q: "An admixture used to speed up the setting of concrete is called a(n):", o: ["Retarder", "Accelerator", "Plasticizer", "Air-entraining agent"], a: 1, e: "Accelerators (e.g., calcium chloride) speed up cement hydration and setting." },
                { q: "Concrete generally requires a minimum curing period of about:", o: ["1 day", "7 days", "6 hours", "1 month always"], a: 1, e: "Standard practice recommends at least 7 days of moist curing for adequate strength gain." },
                { q: "Glass is manufactured mainly from:", o: ["Clay", "Silica (sand)", "Limestone only", "Steel scrap"], a: 1, e: "Silica sand is the primary raw material used in glass manufacturing." },
                { q: "Which of these is NOT typically classified as a building material?", o: ["Cement", "Steel", "Plastic", "Oxygen"], a: 3, e: "Oxygen is a gas essential for life, not a construction/building material." },
                { q: "Curing of concrete is done primarily to:", o: ["Speed up setting only", "Retain moisture and allow proper strength gain", "Change its colour", "Reduce cement content"], a: 1, e: "Curing keeps concrete moist so hydration continues, developing full strength." }
              ]
            },
            { id: "civil-s1-math", title: "Engineering Mathematics", icon: "fas fa-square-root-variable", questions: mathematicsSem1Questions },
            {
              id: "civil-s1-survey", title: "Surveying", icon: "fas fa-map-location-dot",
              questions: [
                { q: "Surveying is the technique of determining:", o: ["Soil composition only", "The relative positions of points on the earth's surface", "Chemical properties of concrete", "Traffic flow patterns"], a: 1, e: "Surveying maps out distances, angles, and elevations between points on land." },
                { q: "A standard surveying chain is commonly:", o: ["5 m long", "20 m or 30 m long", "100 m long", "1 m long"], a: 1, e: "Common chain lengths used in surveying are 20 m (Metric) or 30 m." },
                { q: "Which instrument measures both horizontal and vertical angles?", o: ["Compass", "Level", "Theodolite", "Tape"], a: 2, e: "A theodolite is precision instrument for measuring angles in both planes." },
                { q: "Levelling in surveying is done to determine:", o: ["Horizontal distances only", "Difference in elevation between points", "Soil type", "Wind speed"], a: 1, e: "Levelling establishes relative heights/elevations of points on the ground." },
                { q: "A Bench Mark (BM) is a point of:", o: ["Unknown elevation", "Known and fixed elevation used as reference", "Maximum slope", "Zero gravity"], a: 1, e: "Bench marks provide a stable reference elevation for levelling work." },
                { q: "A magnetic compass in surveying is used to measure:", o: ["Distance", "Bearings/directions", "Elevation", "Area only"], a: 1, e: "A compass measures the bearing (direction) of a survey line relative to magnetic north." },
                { q: "Plane table surveying is best described as a:", o: ["Purely computational method", "Graphical field method of surveying", "Satellite-based method", "Underwater method"], a: 1, e: "In plane table surveying, field observations are plotted directly on paper on-site." },
                { q: "Which instrument/tool is used to measure distance directly on the ground?", o: ["Theodolite", "Chain or tape", "Level", "Compass"], a: 1, e: "Chains and tapes are the traditional tools for direct linear measurement." },
                { q: "Contour lines on a map represent:", o: ["Roads", "Points of equal elevation", "Property boundaries", "Rivers only"], a: 1, e: "A contour line connects all points on the map that share the same elevation." },
                { q: "A Total Station instrument combines the functions of a:", o: ["Compass and chain", "Theodolite and an electronic distance meter (EDM)", "Level and tripod only", "Camera and GPS only"], a: 1, e: "Total Stations merge angle-measuring and distance-measuring capabilities in one device." },
                { q: "In a levelling instrument, the line of sight should be:", o: ["Vertical", "Horizontal", "At 45 degrees", "Random"], a: 1, e: "A properly levelled instrument provides a truly horizontal line of sight." },
                { q: "Reduced Level (RL) of a point refers to its:", o: ["Distance from the surveyor", "Elevation with respect to a chosen datum", "Angle of inclination", "Area coverage"], a: 1, e: "RL expresses a point's height relative to a fixed reference datum (e.g. mean sea level)." },
                { q: "Which type of survey accounts for the curvature of the earth over large areas?", o: ["Plane survey", "Geodetic survey", "Chain survey", "Compass survey"], a: 1, e: "Geodetic surveying is used for large areas where earth's curvature matters." },
                { q: "Chaining refers to the process of:", o: ["Measuring angles", "Measuring distance using a chain or tape", "Drawing contour maps", "Calculating area only"], a: 1, e: "Chaining is the linear measurement of distances using a chain/tape in the field." },
                { q: "A datum in surveying is:", o: ["A random survey point", "A reference level from which elevations are measured", "A type of instrument", "A unit of distance"], a: 1, e: "Datum (e.g. mean sea level) provides the zero-reference for elevation measurements." },
                { q: "An error caused by an improperly levelled instrument is called a(n):", o: ["Personal error", "Instrumental error", "Natural error", "Random error only"], a: 1, e: "Instrumental errors arise from imperfections or misadjustment of the surveying instrument." },
                { q: "GPS is used in modern surveying mainly to:", o: ["Measure temperature", "Determine precise location using satellites", "Test soil strength", "Measure concrete strength"], a: 1, e: "GPS uses satellite signals to accurately fix a point's coordinates on Earth." },
                { q: "The angle measured clockwise from the north direction is called the:", o: ["Elevation angle", "Bearing (azimuth)", "Angle of repose", "Angle of friction"], a: 1, e: "Bearing/azimuth expresses direction as a clockwise angle from true or magnetic north." },
                { q: "Back sight and fore sight readings are taken during:", o: ["Chaining", "Levelling", "Compass surveying", "Photogrammetry only"], a: 1, e: "BS and FS readings are core observations taken with a levelling instrument and staff." },
                { q: "A traverse survey consists of a series of:", o: ["Random unconnected points", "Connected lines whose lengths and directions are measured", "Only curved boundaries", "Underground tunnels"], a: 1, e: "Traversing links straight survey lines end-to-end, recording length and bearing of each." }
              ]
            }
          ]
        },
        { id: "civil-sem2", name: "Semester 2", quizzes: [
          { id: "civil-s2-som", title: "Strength of Materials", icon: "fas fa-ruler-combined", comingSoon: true, questions: [] },
          { id: "civil-s2-fm", title: "Fluid Mechanics", icon: "fas fa-water", comingSoon: true, questions: [] }
        ] }
      ]
    },

    /* ============================ ELECTRICAL ENGINEERING ============================ */
    {
      id: "electrical",
      name: "Electrical Engineering",
      icon: "fas fa-bolt",
      desc: "Circuits, machines, and core electrical engineering concepts.",
      color: "#ffb020",
      semesters: [
        {
          id: "elec-sem1",
          name: "Semester 1",
          quizzes: [
            {
              id: "elec-s1-bee", title: "Basic Electrical Engineering", icon: "fas fa-plug",
              questions: [
                { q: "Ohm's Law is expressed as:", o: ["V = I/R", "V = IR", "I = VR", "R = VI"], a: 1, e: "Voltage equals Current multiplied by Resistance (V = IR)." },
                { q: "The SI unit of electrical resistance is:", o: ["Ampere", "Volt", "Ohm", "Watt"], a: 2, e: "Resistance is measured in Ohms (Ω)." },
                { q: "The SI unit of electrical power is:", o: ["Joule", "Watt", "Volt", "Coulomb"], a: 1, e: "Power (P = VI) is measured in Watts." },
                { q: "In a series circuit, the current through each component is:", o: ["Different for each", "The same throughout", "Always zero", "Doubled at each point"], a: 1, e: "There's only one path for current in a series circuit, so it's identical everywhere." },
                { q: "In a parallel circuit, the voltage across each branch is:", o: ["Different for each branch", "The same across all branches", "Always zero", "Dependent on resistance only"], a: 1, e: "All parallel branches share the same two connection points, so voltage is equal." },
                { q: "1 kWh (kilowatt-hour) is commonly known as:", o: ["1 unit of electrical energy", "1 Ampere", "1 Ohm", "1 Volt"], a: 0, e: "Electricity bills are calculated in kWh, informally called 'units'." },
                { q: "Kirchhoff's Current Law (KCL) states that current entering a node:", o: ["Is always lost as heat", "Equals current leaving that node", "Is always zero", "Doubles at the node"], a: 1, e: "KCL is based on the conservation of electric charge at any junction." },
                { q: "Kirchhoff's Voltage Law (KVL) applies to:", o: ["A single resistor", "The sum of voltages around any closed loop", "Only DC circuits", "Only parallel circuits"], a: 1, e: "KVL states the algebraic sum of voltages around a closed loop equals zero." },
                { q: "The SI unit of electric charge is:", o: ["Ampere", "Volt", "Coulomb", "Ohm"], a: 2, e: "Electric charge is measured in Coulombs (C)." },
                { q: "A device that converts AC to DC is called a:", o: ["Inverter", "Rectifier", "Transformer", "Capacitor"], a: 1, e: "Rectifiers convert alternating current into direct current." },
                { q: "The standard frequency of AC electrical supply in India is:", o: ["60 Hz", "50 Hz", "100 Hz", "25 Hz"], a: 1, e: "India (and most of the world outside the Americas) uses a 50 Hz AC supply." },
                { q: "An insulator is a material with:", o: ["Very low resistance", "Very high resistance", "Zero resistance", "Negative resistance"], a: 1, e: "Insulators strongly oppose the flow of electric current due to very high resistance." },
                { q: "Which of these is an excellent conductor of electricity?", o: ["Rubber", "Wood", "Copper", "Glass"], a: 2, e: "Copper has very low resistance, making it a widely used conductor." },
                { q: "Capacitance is measured in units of:", o: ["Henry", "Farad", "Ohm", "Weber"], a: 1, e: "Capacitance (ability to store charge) is measured in Farads (F)." },
                { q: "Inductance is measured in units of:", o: ["Farad", "Henry", "Tesla", "Volt"], a: 1, e: "Inductance is measured in Henries (H)." },
                { q: "Power factor is defined as the:", o: ["Sum of voltage and current", "Cosine of the phase angle between voltage and current", "Product of resistance and current", "Square of the current"], a: 1, e: "Power factor = cos(φ), where φ is the phase difference between V and I." },
                { q: "A transformer works on the principle of:", o: ["Static friction", "Mutual electromagnetic induction", "Chemical reaction", "Thermal expansion"], a: 1, e: "Transformers transfer energy between coils via a changing magnetic field (mutual induction)." },
                { q: "Which device is primarily used to store electric charge?", o: ["Resistor", "Capacitor", "Diode", "Transformer"], a: 1, e: "Capacitors store energy in the form of an electric field/charge." },
                { q: "The SI unit of magnetic flux is:", o: ["Tesla", "Henry", "Weber", "Ampere-turn"], a: 2, e: "Magnetic flux is measured in Webers (Wb)." },
                { q: "An alternator is a machine that produces:", o: ["Direct Current (DC)", "Alternating Current (AC)", "Magnetic fields only", "Heat energy only"], a: 1, e: "Alternators (AC generators) convert mechanical energy into alternating current." }
              ]
            },
            { id: "elec-s1-math", title: "Engineering Mathematics", icon: "fas fa-square-root-variable", questions: mathematicsSem1Questions },
            { id: "elec-s1-phy", title: "Engineering Physics", icon: "fas fa-atom", questions: physicsSem1Questions }
          ]
        },
        { id: "elec-sem2", name: "Semester 2", quizzes: [
          { id: "elec-s2-cir", title: "Circuit Theory", icon: "fas fa-diagram-project", comingSoon: true, questions: [] },
          { id: "elec-s2-mach", title: "Electrical Machines", icon: "fas fa-fan", comingSoon: true, questions: [] }
        ] }
      ]
    },

    /* ============================ COMMON SUBJECTS (no semester split) ============================ */
    {
      id: "common",
      name: "Common Subjects",
      icon: "fas fa-layer-group",
      desc: "Communication, environment & professional ethics — for all branches.",
      color: "#ff6b9d",
      quizzes: [
        {
          id: "common-comm", title: "Communication Skills", icon: "fas fa-comments",
          questions: [
            { q: "Communication is best defined as the process of:", o: ["Storing data", "Exchanging information between a sender and receiver", "Writing computer code", "Building structures"], a: 1, e: "Communication involves transferring meaning/information from sender to receiver." },
            { q: "Which of these correctly lists major types of communication?", o: ["Verbal only", "Written only", "Verbal, non-verbal, written and visual", "None of these"], a: 2, e: "Effective communication spans verbal, non-verbal, written, and visual forms." },
            { q: "Non-verbal communication includes:", o: ["Emails only", "Body language, gestures and facial expressions", "Reports only", "Phone calls only"], a: 1, e: "Non-verbal cues like posture and expressions convey meaning without words." },
            { q: "The first step in the communication process is:", o: ["Feedback", "The sender having an idea/message to convey", "Noise", "Decoding"], a: 1, e: "Communication begins when the sender forms an idea they want to share." },
            { q: "Feedback in communication refers to:", o: ["The original message", "The receiver's response to the sender's message", "A type of noise", "The communication channel"], a: 1, e: "Feedback lets the sender know how their message was received and understood." },
            { q: "Which of these is a common barrier to effective communication?", o: ["Clarity", "Noise and language differences", "Active listening", "Good feedback"], a: 1, e: "Noise, language gaps, and distractions commonly disrupt clear communication." },
            { q: "Which is an example of written communication?", o: ["A phone call", "A face-to-face conversation", "An email or report", "Sign language"], a: 2, e: "Emails and reports are written forms of conveying information." },
            { q: "Active listening primarily involves:", o: ["Interrupting frequently", "Fully concentrating on and understanding the speaker", "Only nodding", "Waiting to speak next"], a: 1, e: "Active listening means genuinely focusing on and processing what's being said." },
            { q: "Body language is classified as a form of:", o: ["Written communication", "Non-verbal communication", "Formal communication only", "Technical communication only"], a: 1, e: "Body language conveys meaning through gestures and posture, not words." },
            { q: "A formal business letter should ideally be:", o: ["Casual and lengthy", "Professional, concise and to the point", "Full of slang", "Handwritten only"], a: 1, e: "Formal letters follow a professional tone and stay clear and concise." },
            { q: "The main purpose of a resume is to:", o: ["List personal hobbies only", "Present a candidate's qualifications to an employer", "Replace an interview", "Describe a company's history"], a: 1, e: "A resume summarizes skills, education and experience for prospective employers." },
            { q: "Effective communication requires which of these qualities?", o: ["Vagueness", "Clarity, conciseness and correctness", "Excessive jargon", "Long, complex sentences only"], a: 1, e: "Clear, concise, correct messages are understood accurately and efficiently." },
            { q: "A barrier caused by physical distance or a poor connection is called a:", o: ["Semantic barrier", "Physical/channel barrier", "Emotional barrier", "Cultural barrier"], a: 1, e: "Physical barriers involve environmental or channel-related obstacles to communication." },
            { q: "Public speaking is an example of:", o: ["Written communication", "Oral/verbal communication", "Non-verbal communication only", "Visual communication only"], a: 1, e: "Speaking to an audience is a direct form of oral communication." },
            { q: "'Grapevine' communication in an organization refers to:", o: ["Official memos", "Informal communication that spreads through the organization", "Formal training sessions", "Annual reports"], a: 1, e: "Grapevine is informal, often rumor-based communication among employees." },
            { q: "The '7 Cs of communication' emphasize qualities such as:", o: ["Complexity and confusion", "Clarity, conciseness, correctness, and completeness", "Length and repetition", "Formality only"], a: 1, e: "The 7 Cs guide writers/speakers toward clear and effective communication." },
            { q: "A good presentation should ideally include:", o: ["Only a conclusion", "An introduction, body, and conclusion", "Random unordered points", "Only images with no text"], a: 1, e: "A structured presentation guides the audience logically from start to finish." },
            { q: "Email is best classified as a form of:", o: ["Oral communication", "Written communication", "Non-verbal communication", "Physical communication"], a: 1, e: "Email conveys messages through written text." },
            { q: "Which skill is essential for an effective group discussion?", o: ["Speaking over others", "Active listening and clear expression of ideas", "Staying silent throughout", "Ignoring other viewpoints"], a: 1, e: "Good group discussions require listening to others while expressing your own ideas clearly." },
            { q: "Tone and pitch of voice while speaking are part of:", o: ["Written communication", "Paralanguage (vocal non-verbal communication)", "Visual communication", "Formal documentation"], a: 1, e: "Paralanguage refers to vocal elements like tone, pitch and pace that add meaning beyond words." }
          ]
        },
        {
          id: "common-env", title: "Environmental Science", icon: "fas fa-leaf",
          questions: [
            { q: "Which atmospheric layer protects the Earth from harmful UV rays?", o: ["Troposphere", "Ozone layer", "Ionosphere", "Exosphere"], a: 1, e: "The ozone layer absorbs most of the sun's harmful ultraviolet radiation." },
            { q: "The main cause of global warming is:", o: ["Increase in oxygen levels", "Increase in greenhouse gases like CO2", "Decrease in rainfall", "Increase in ocean salinity"], a: 1, e: "Rising greenhouse gas concentrations trap more heat, warming the planet." },
            { q: "Which of these is a renewable source of energy?", o: ["Coal", "Petroleum", "Solar energy", "Natural gas"], a: 2, e: "Solar energy is continuously replenished by the sun and doesn't deplete." },
            { q: "Which of these is a non-renewable source of energy?", o: ["Solar", "Wind", "Coal", "Hydro"], a: 2, e: "Coal takes millions of years to form and is depleted much faster than it's replenished." },
            { q: "BOD in water quality testing stands for:", o: ["Biological Oxygen Demand", "Biochemical Oxygen Demand", "Basic Organic Density", "Bio-Oxidation Data"], a: 1, e: "BOD measures the oxygen required by microorganisms to decompose organic matter in water." },
            { q: "Which gas is primarily responsible for acid rain?", o: ["Oxygen", "Sulphur dioxide", "Nitrogen", "Hydrogen"], a: 1, e: "Sulphur dioxide combines with atmospheric moisture to form acidic precipitation." },
            { q: "The process of converting atmospheric nitrogen into a usable form is called:", o: ["Photosynthesis", "Nitrogen fixation", "Respiration", "Transpiration"], a: 1, e: "Nitrogen fixation converts inert N2 gas into compounds usable by plants." },
            { q: "The '3R' principle in waste management stands for:", o: ["Reduce, Reuse, Recycle", "Remove, Repair, Return", "Restore, Renew, Refill", "Recover, Repeat, Report"], a: 0, e: "3R promotes reducing waste, reusing items, and recycling materials." },
            { q: "Biodiversity refers to:", o: ["A single dominant species", "The variety of life forms found on Earth", "Only plant species", "Man-made structures"], a: 1, e: "Biodiversity encompasses the full variety of species, genes, and ecosystems." },
            { q: "Which greenhouse gas is emitted most by human activity?", o: ["Oxygen", "Carbon dioxide (CO2)", "Nitrogen", "Helium"], a: 1, e: "CO2 from fossil fuel combustion is the largest contributor among human-caused GHGs." },
            { q: "Deforestation commonly leads to:", o: ["Increased biodiversity", "Loss of biodiversity and soil erosion", "Cooler climate locally", "Improved groundwater levels always"], a: 1, e: "Removing forests destroys habitats and exposes soil to erosion." },
            { q: "An ecosystem consists of:", o: ["Only living organisms", "Living organisms and their physical environment", "Only non-living matter", "Only water bodies"], a: 1, e: "Ecosystems include biotic (living) components interacting with abiotic (physical) surroundings." },
            { q: "Which parameter commonly indicates water pollution levels?", o: ["pH only", "BOD/COD", "Colour only", "Taste"], a: 1, e: "Biochemical/Chemical Oxygen Demand values indicate organic pollution load in water." },
            { q: "In solid waste management, the highest priority should be given to:", o: ["Landfilling", "Source reduction (reduce)", "Incineration", "Open dumping"], a: 1, e: "Reducing waste at the source is preferred over disposal methods like landfilling." },
            { q: "World Environment Day is celebrated on:", o: ["22nd April", "5th June", "1st January", "15th August"], a: 1, e: "World Environment Day is observed globally on 5th June every year." },
            { q: "Which of these is considered a primary air pollutant?", o: ["Carbon monoxide (CO)", "Photochemical smog", "Acid rain", "Ground-level ozone"], a: 0, e: "CO is emitted directly from sources like vehicles, making it a primary pollutant." },
            { q: "The main cause of ozone layer depletion is:", o: ["Carbon dioxide", "Chlorofluorocarbons (CFCs)", "Oxygen", "Water vapour"], a: 1, e: "CFCs release chlorine atoms that break down ozone molecules in the stratosphere." },
            { q: "Sustainable development means:", o: ["Using all resources immediately", "Meeting present needs without compromising future generations' ability to meet theirs", "Stopping all industrial growth", "Focusing only on economic growth"], a: 1, e: "Sustainability balances current development with the preservation of resources for the future." },
            { q: "Which of these is NOT a natural ecosystem?", o: ["Forest", "Desert", "Ocean", "Shopping mall"], a: 3, e: "A shopping mall is a man-made structure, not a naturally occurring ecosystem." },
            { q: "Rainwater harvesting primarily helps in:", o: ["Increasing air pollution", "Groundwater recharge and water conservation", "Causing floods", "Reducing crop yield"], a: 1, e: "Collecting and storing rainwater helps replenish groundwater and conserve water resources." }
          ]
        },
        {
          id: "common-ethics", title: "Professional Ethics", icon: "fas fa-scale-balanced",
          questions: [
            { q: "Ethics is best defined as the study of:", o: ["Physical laws of nature", "Moral principles governing behaviour", "Mathematical formulas", "Historical events"], a: 1, e: "Ethics examines what is considered right and wrong conduct." },
            { q: "Professional ethics primarily deals with:", o: ["Personal hobbies", "Conduct and responsibilities within a profession", "Sports rules", "Weather forecasting"], a: 1, e: "It governs how professionals should behave responsibly in their field of work." },
            { q: "Which of these is a core value expected of an engineer?", o: ["Dishonesty", "Honesty and integrity", "Carelessness", "Secrecy from clients"], a: 1, e: "Honesty and integrity are foundational to trustworthy professional conduct." },
            { q: "A 'code of conduct' is best described as a:", o: ["Legal contract only", "Set of rules defining acceptable behaviour in an organization", "Marketing strategy", "Financial statement"], a: 1, e: "Codes of conduct establish clear behavioural expectations within an organization." },
            { q: "Confidentiality in a professional context means:", o: ["Sharing all data publicly", "Keeping sensitive information private and not disclosing it without authorization", "Deleting all records", "Publishing client details online"], a: 1, e: "Confidentiality protects sensitive information from unauthorized disclosure." },
            { q: "A 'conflict of interest' occurs when:", o: ["An employee follows all rules", "Personal interest interferes with professional duty", "Two departments cooperate well", "A project finishes on time"], a: 1, e: "Conflicts of interest arise when personal gain could compromise objective judgment." },
            { q: "'Whistleblowing' refers to:", o: ["Ignoring unethical practices", "Reporting unethical or illegal practices within an organization", "Following orders blindly", "Resigning without reason"], a: 1, e: "Whistleblowers expose wrongdoing, often at personal or professional risk." },
            { q: "Accountability in a professional setting means:", o: ["Avoiding responsibility", "Being responsible for one's actions and decisions", "Blaming others for mistakes", "Working without supervision"], a: 1, e: "Accountable professionals own the outcomes of their decisions and actions." },
            { q: "Which of the following is an example of unethical engineering practice?", o: ["Following safety codes", "Falsifying test data or results", "Reporting defects honestly", "Meeting quality standards"], a: 1, e: "Falsifying data deceives stakeholders and can endanger public safety." },
            { q: "Corporate Social Responsibility (CSR) refers to a business's responsibility towards:", o: ["Only its shareholders' profit", "Society and the environment", "Only its competitors", "Government taxes only"], a: 1, e: "CSR reflects a company's commitment to ethical, social and environmental impact." },
            { q: "Plagiarism refers to:", o: ["Citing sources properly", "Using someone else's work without giving proper credit", "Writing original content", "Peer reviewing a paper"], a: 1, e: "Plagiarism is presenting another's work or ideas as your own without attribution." },
            { q: "Integrity in professional life means:", o: ["Bending rules for personal gain", "Adherence to strong moral and ethical principles", "Avoiding all responsibility", "Following only convenient rules"], a: 1, e: "Integrity means consistently upholding ethical principles, even under pressure." },
            { q: "Professional engineering codes of ethics are typically enforced by:", o: ["Random individuals", "Professional engineering councils/institutions", "Local shopkeepers", "News media only"], a: 1, e: "Engineering bodies and councils set and enforce standards of professional conduct." },
            { q: "In engineering ethics, which consideration is generally given the highest priority?", o: ["Project cost", "Public safety and welfare", "Company profit", "Personal convenience"], a: 1, e: "Codes of ethics consistently place public safety above cost or convenience." },
            { q: "A bribe is best described as:", o: ["A legitimate business fee", "An unethical/illegal payment made to influence a decision", "A performance bonus", "A tax refund"], a: 1, e: "Bribery involves illicitly influencing decisions through improper payments." },
            { q: "Transparency in professional conduct means:", o: ["Hiding key information", "Openness and clear communication of information", "Avoiding all disclosures", "Complex, unclear reporting"], a: 1, e: "Transparency ensures stakeholders have clear, honest access to relevant information." },
            { q: "Effective teamwork in a professional setting emphasizes:", o: ["Working in isolation", "Cooperation and mutual respect among colleagues", "Undermining coworkers", "Avoiding communication"], a: 1, e: "Strong teams rely on cooperative, respectful collaboration to achieve shared goals." },
            { q: "Using patented technology without permission is a violation of:", o: ["Traffic rules", "Intellectual property rights", "Dress code policy", "Attendance policy"], a: 1, e: "Patents legally protect inventions; using them without permission infringes IP rights." },
            { q: "Sustainable engineering practice means designing with:", o: ["No regard for the environment", "Minimal environmental impact", "Maximum resource consumption", "Only short-term goals"], a: 1, e: "Sustainable engineering aims to reduce environmental harm across a product's lifecycle." },
            { q: "Punctuality and discipline at the workplace are examples of:", o: ["Legal requirements only", "Workplace ethics and professionalism", "Optional habits with no importance", "Union rules only"], a: 1, e: "Punctuality and discipline reflect professional responsibility and respect for others' time." }
          ]
        }
      ]
    }

  ]
};
