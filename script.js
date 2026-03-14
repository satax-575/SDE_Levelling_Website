// ═══════════════════════════════════════════════════════════════════════
//  SDE ROADMAP DATA — 12 months with enhanced resources
// ═══════════════════════════════════════════════════════════════════════
const roadmapData = [
  {
    id: 1, title: "Programming Foundations",
    description: "Master the core building blocks of programming. Learn to think computationally.",
    estimatedWeeks: 3,
    topics: [
      { title: "How Computers Work: CPU, RAM, Storage & Binary", resources: [
        { name: "Crash Course Computer Science (Full Series)", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo" },
        { name: "How Computers Work — Khan Academy", url: "https://www.khanacademy.org/computing/code-org/computers-and-the-internet" },
        { name: "CS50 Week 0: Scratch & Binary", url: "https://cs50.harvard.edu/x/2024/weeks/0/" }
      ]},
      { title: "Variables, Data Types & Type Systems", resources: [
        { name: "MDN: JavaScript Data Structures", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures" },
        { name: "Python Tutor — Visualize Code Execution", url: "https://pythontutor.com/" },
        { name: "CS50 Week 1: C Basics", url: "https://cs50.harvard.edu/x/2024/weeks/1/" }
      ]},
      { title: "Operators: Arithmetic, Comparison, Logical & Bitwise", resources: [
        { name: "MDN: Expressions and Operators", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators" },
        { name: "Bitwise Operations Visualizer", url: "https://visualize-it.github.io/bitwise/simulation.html" }
      ]},
      { title: "Control Flow: if/else, switch, and Ternary", resources: [
        { name: "MDN: Control Flow and Error Handling", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling" },
        { name: "FreeCodeCamp: JavaScript Fundamentals", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" }
      ]},
      { title: "Loops: for, while, do-while, and Iteration Patterns", resources: [
        { name: "MDN: Loops and Iteration", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration" },
        { name: "Codecademy: Learn JavaScript (Free)", url: "https://www.codecademy.com/learn/introduction-to-javascript" }
      ]},
      { title: "Functions, Parameters, Return Values & Pure Functions", resources: [
        { name: "MDN: Functions Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions" },
        { name: "CS50 Week 3: Algorithms", url: "https://cs50.harvard.edu/x/2024/weeks/3/" }
      ]},
      { title: "Scope, Closures & the Execution Context", resources: [
        { name: "JavaScript Visualized: Scope (Lydia Hallie)", url: "https://dev.to/lydiahallie/javascript-visualized-scope-chain-13pd" },
        { name: "MDN: Closures", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" },
        { name: "JavaScript.info: Variable Scope", url: "https://javascript.info/closure" }
      ]},
      { title: "Terminal & CLI Essentials (bash, zsh, file navigation)", resources: [
        { name: "Ubuntu Terminal for Beginners", url: "https://ubuntu.com/tutorials/command-line-for-beginners" },
        { name: "The Linux Command Line (Free Book)", url: "https://linuxcommand.org/tlcl.php" },
        { name: "OverTheWire: Bandit (hands-on Linux)", url: "https://overthewire.org/wargames/bandit/" }
      ]},
      { title: "Git Fundamentals: init, add, commit, log, diff", resources: [
        { name: "GitHub: Git Handbook", url: "https://guides.github.com/introduction/git-handbook/" },
        { name: "Learn Git Branching (Interactive)", url: "https://learngitbranching.js.org/" },
        { name: "Pro Git Book (Free)", url: "https://git-scm.com/book/en/v2" }
      ]},
      { title: "Problem Solving Mindset: Pseudocode & Decomposition", resources: [
        { name: "How to Think Like a Programmer", url: "https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/" },
        { name: "Polya's Problem Solving Techniques", url: "https://math.berkeley.edu/~gmelvin/polya.pdf" },
        { name: "Advent of Code (Beginner Puzzles)", url: "https://adventofcode.com/" }
      ]}
    ]
  },
  {
    id: 2, title: "Object-Oriented Design & Version Control",
    description: "Structure code professionally, model the real world in objects, and collaborate at scale.",
    estimatedWeeks: 3,
    topics: [
      { title: "Classes, Objects & Constructors", resources: [
        { name: "Refactoring Guru: What is OOP?", url: "https://refactoring.guru/design-patterns/what-is-oop" },
        { name: "MDN: OOP in JavaScript", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming" }
      ]},
      { title: "Encapsulation & Data Hiding (getters/setters, private fields)", resources: [
        { name: "GeeksforGeeks: Encapsulation in Java", url: "https://www.geeksforgeeks.org/encapsulation-in-java/" },
        { name: "MDN: Private class features", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields" }
      ]},
      { title: "Inheritance, Method Overriding & super()", resources: [
        { name: "MDN: Inheritance and the prototype chain", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain" },
        { name: "Java Inheritance — Programiz", url: "https://www.programiz.com/java-programming/inheritance" }
      ]},
      { title: "Polymorphism: compile-time vs runtime", resources: [
        { name: "GeeksforGeeks: Polymorphism in OOP", url: "https://www.geeksforgeeks.org/polymorphism-in-java/" },
        { name: "Refactoring Guru: Polymorphism", url: "https://refactoring.guru/design-patterns/what-is-oop#polymorphism" }
      ]},
      { title: "Abstraction, Interfaces & Abstract Classes", resources: [
        { name: "Stack Overflow: Interface vs Abstract Class", url: "https://stackoverflow.com/questions/1913098/what-is-the-difference-between-an-interface-and-abstract-class" },
        { name: "Baeldung: Abstract Class vs Interface (Java)", url: "https://www.baeldung.com/java-abstract-class" }
      ]},
      { title: "SOLID Principles with Real Examples", resources: [
        { name: "FreeCodeCamp: SOLID in Plain English", url: "https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/" },
        { name: "SOLID Design Principles (DigitalOcean)", url: "https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design" },
        { name: "Uncle Bob: Clean Code (book)", url: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882" }
      ]},
      { title: "Design Patterns: Singleton, Factory, Observer, Strategy", resources: [
        { name: "Refactoring Guru: Design Patterns (Free)", url: "https://refactoring.guru/design-patterns" },
        { name: "JavaScript Design Patterns", url: "https://www.patterns.dev/posts/classic-design-patterns/" }
      ]},
      { title: "Git Branching Strategies (Gitflow, trunk-based)", resources: [
        { name: "Atlassian: Git Branching Workflows", url: "https://www.atlassian.com/git/tutorials/using-branches" },
        { name: "Atlassian: Gitflow Workflow", url: "https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow" }
      ]},
      { title: "Pull Requests, Code Reviews & Collaboration Best Practices", resources: [
        { name: "GitHub: About Pull Requests", url: "https://docs.github.com/en/pull-requests" },
        { name: "Google Engineering Practices: Code Review", url: "https://google.github.io/eng-practices/review/" }
      ]},
      { title: "Resolving Merge Conflicts & Git Rebase vs Merge", resources: [
        { name: "Atlassian: Merge Conflicts", url: "https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts" },
        { name: "Atlassian: Merging vs Rebasing", url: "https://www.atlassian.com/git/tutorials/merging-vs-rebasing" }
      ]}
    ]
  },
  {
    id: 3, title: "Basic Data Structures",
    description: "Master the building blocks of all efficient programs. These structures are your daily toolkit.",
    estimatedWeeks: 3,
    topics: [
      { title: "Arrays & Dynamic Arrays (ArrayList/Vector)", resources: [
        { name: "LeetCode: Arrays 101", url: "https://leetcode.com/explore/learn/card/fun-with-arrays/" },
        { name: "VisuAlgo: Array Visualization", url: "https://visualgo.net/en/array" },
        { name: "GeeksforGeeks: Array Data Structure", url: "https://www.geeksforgeeks.org/array-data-structure/" }
      ]},
      { title: "Strings, String Manipulation & Common Algorithms", resources: [
        { name: "HackerRank: Strings Domain", url: "https://www.hackerrank.com/domains/algorithms?filters%5Bsubdomains%5D%5B%5D=strings" },
        { name: "Regex101 — Test Regular Expressions", url: "https://regex101.com/" },
        { name: "LeetCode: Top String Problems", url: "https://leetcode.com/tag/string/" }
      ]},
      { title: "Linked Lists: Singly & Doubly (traversal, insertion, deletion)", resources: [
        { name: "VisuAlgo: Linked List", url: "https://visualgo.net/en/list" },
        { name: "LeetCode: Linked List Card", url: "https://leetcode.com/explore/learn/card/linked-list/" },
        { name: "GeeksforGeeks: Linked List", url: "https://www.geeksforgeeks.org/data-structures/linked-list/" }
      ]},
      { title: "Stacks: LIFO principle, implementations, applications", resources: [
        { name: "GeeksforGeeks: Stack Data Structure", url: "https://www.geeksforgeeks.org/stack-data-structure/" },
        { name: "LeetCode: Stack Problems", url: "https://leetcode.com/tag/stack/" },
        { name: "CS50: Stacks & Queues", url: "https://cs50.harvard.edu/x/2024/weeks/5/" }
      ]},
      { title: "Queues: FIFO, Deque, Circular Queue", resources: [
        { name: "GeeksforGeeks: Queue Data Structure", url: "https://www.geeksforgeeks.org/queue-data-structure/" },
        { name: "LeetCode: Queue & Stack Card", url: "https://leetcode.com/explore/learn/card/queue-stack/" }
      ]},
      { title: "Hash Tables: Hashing, Collision Resolution (chaining, open addressing)", resources: [
        { name: "CS50: Hash Tables (Video)", url: "https://www.youtube.com/watch?v=nvzVHwrrub0" },
        { name: "VisuAlgo: Hash Table", url: "https://visualgo.net/en/hashtable" },
        { name: "LeetCode: Hash Table Card", url: "https://leetcode.com/explore/learn/card/hash-table/" }
      ]},
      { title: "HashMaps & HashSets in Practice (frequency counting, deduplication)", resources: [
        { name: "GeeksforGeeks: HashMap in Java", url: "https://www.geeksforgeeks.org/java-util-hashmap-in-java-with-examples/" },
        { name: "Neetcode: Arrays & Hashing Problems", url: "https://neetcode.io/roadmap" }
      ]},
      { title: "Big-O Notation: Time & Space Complexity Analysis", resources: [
        { name: "Big-O Cheat Sheet", url: "https://www.bigocheatsheet.com/" },
        { name: "FreeCodeCamp: Big O Notation Explained", url: "https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/" },
        { name: "MIT 6.006: Complexity Lecture", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/video_galleries/lecture-videos/" }
      ]},
      { title: "Amortized Analysis & when to use which data structure", resources: [
        { name: "MIT: Amortized Analysis", url: "https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/pages/lecture-notes/" },
        { name: "GeeksforGeeks: Amortized Analysis", url: "https://www.geeksforgeeks.org/analysis-algorithm-set-5-amortized-analysis-introduction/" }
      ]},
      { title: "LeetCode Practice: Easy Array/String/HashMap Problems (target 30)", resources: [
        { name: "NeetCode 150 Roadmap", url: "https://neetcode.io/roadmap" },
        { name: "LeetCode: Top Interview 150", url: "https://leetcode.com/studyplan/top-interview-150/" },
        { name: "Grind 75", url: "https://www.techinterviewhandbook.org/grind75" }
      ]}
    ]
  },
  {
    id: 4, title: "Algorithmic Thinking",
    description: "Learn to dissect problems and apply the right strategy. This is where programming becomes art.",
    estimatedWeeks: 4,
    topics: [
      { title: "Algorithm Design Strategies Overview", resources: [
        { name: "Khan Academy: Algorithms Course", url: "https://www.khanacademy.org/computing/computer-science/algorithms" },
        { name: "Introduction to Algorithms (CLRS) — Chapter 1", url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/" }
      ]},
      { title: "Recursion Deep Dive: call stack, tree recursion, memoization intro", resources: [
        { name: "FreeCodeCamp: Recursion Explained", url: "https://www.freecodecamp.org/news/understanding-recursion-in-programming/" },
        { name: "Python Tutor: Visualize Recursion", url: "https://pythontutor.com/" },
        { name: "LeetCode: Recursion I Card", url: "https://leetcode.com/explore/learn/card/recursion-i/" }
      ]},
      { title: "Sorting Algorithms: Bubble, Selection, Insertion, Merge, Quick, Heap", resources: [
        { name: "VisuAlgo: Sorting Visualizer", url: "https://visualgo.net/en/sorting" },
        { name: "Sorting Algorithms Animations", url: "https://www.toptal.com/developers/sorting-algorithms" },
        { name: "CS50: Shorts on Sorting", url: "https://cs50.harvard.edu/x/2024/weeks/3/" }
      ]},
      { title: "Searching: Linear Search, Binary Search & its variants", resources: [
        { name: "TopCoder: Binary Search Tutorial", url: "https://www.topcoder.com/thrive/articles/Binary%20Search" },
        { name: "LeetCode: Binary Search Card", url: "https://leetcode.com/explore/learn/card/binary-search/" },
        { name: "CP-Algorithms: Binary Search", url: "https://cp-algorithms.com/num_methods/binary_search.html" }
      ]},
      { title: "Two Pointers: opposite ends, same direction, fast/slow", resources: [
        { name: "LeetCode: Two Pointers Technique", url: "https://leetcode.com/articles/two-pointer-technique/" },
        { name: "NeetCode: Two Pointers Video", url: "https://www.youtube.com/watch?v=VEPCm3BCtik" }
      ]},
      { title: "Sliding Window: fixed size, variable size, multi-window", resources: [
        { name: "GeeksforGeeks: Sliding Window Technique", url: "https://www.geeksforgeeks.org/window-sliding-technique/" },
        { name: "LeetCode: Sliding Window Problems", url: "https://leetcode.com/tag/sliding-window/" }
      ]},
      { title: "Greedy Algorithms: activity selection, interval scheduling", resources: [
        { name: "Brilliant: Greedy Algorithms", url: "https://brilliant.org/wiki/greedy-algorithm/" },
        { name: "MIT 6.006: Greedy Algorithms", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/" },
        { name: "LeetCode: Greedy Problems", url: "https://leetcode.com/tag/greedy/" }
      ]},
      { title: "Divide and Conquer: paradigm, merge sort analysis, master theorem", resources: [
        { name: "Programiz: Divide and Conquer", url: "https://www.programiz.com/dsa/divide-and-conquer" },
        { name: "KhanAcademy: Divide and Conquer", url: "https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms" }
      ]},
      { title: "Backtracking: N-Queens, Sudoku Solver, Subsets, Permutations", resources: [
        { name: "LeetCode: Backtracking Card", url: "https://leetcode.com/tag/backtracking/" },
        { name: "NeetCode: Backtracking Playlist", url: "https://www.youtube.com/playlist?list=PLot-Xpze53ldBT_7QA8NVot219jFNr_GI" },
        { name: "CP-Algorithms: Backtracking", url: "https://cp-algorithms.com/" }
      ]},
      { title: "Dynamic Programming Intro: Fibonacci, Climbing Stairs, Memoization vs Tabulation", resources: [
        { name: "NeetCode: DP for Beginners", url: "https://www.youtube.com/watch?v=73r3KWiEvyk" },
        { name: "FreeCodeCamp: DP Explained", url: "https://www.freecodecamp.org/news/demystifying-dynamic-programming-3efafb8d4296/" },
        { name: "LeetCode: DP Problems Easy", url: "https://leetcode.com/tag/dynamic-programming/" }
      ]}
    ]
  },
  {
    id: 5, title: "Advanced Data Structures",
    description: "Conquer non-linear structures. Trees and graphs power almost every large-scale system.",
    estimatedWeeks: 4,
    topics: [
      { title: "Binary Trees: properties, terminology, full/complete/perfect", resources: [
        { name: "VisuAlgo: Binary Search Tree", url: "https://visualgo.net/en/bst" },
        { name: "LeetCode: Binary Tree Card", url: "https://leetcode.com/explore/learn/card/data-structure-tree/" }
      ]},
      { title: "BST: Insert, Delete, Search, Predecessor/Successor", resources: [
        { name: "BST Visualizer (usfca.edu)", url: "https://www.cs.usfca.edu/~galles/visualization/BST.html" },
        { name: "CP-Algorithms: BST", url: "https://cp-algorithms.com/data_structures/treap.html" }
      ]},
      { title: "Tree Traversals: Inorder, Preorder, Postorder, Level-Order (BFS)", resources: [
        { name: "GeeksforGeeks: Tree Traversals", url: "https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/" },
        { name: "LeetCode: Tree BFS/DFS Patterns", url: "https://leetcode.com/discuss/general-discussion/937307/iterative-recursive-dfs-bfs-solutions" }
      ]},
      { title: "Self-Balancing Trees: AVL Trees & Red-Black Trees (concepts)", resources: [
        { name: "VisuAlgo: AVL Tree", url: "https://visualgo.net/en/bst" },
        { name: "MIT 6.006: Balanced BSTs", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/video_galleries/lecture-videos/" }
      ]},
      { title: "Heaps & Priority Queues: max-heap, min-heap, heapify", resources: [
        { name: "VisuAlgo: Binary Heap", url: "https://visualgo.net/en/heap" },
        { name: "GeeksforGeeks: Heap Data Structure", url: "https://www.geeksforgeeks.org/heap-data-structure/" },
        { name: "LeetCode: Heap / Priority Queue Problems", url: "https://leetcode.com/tag/heap-priority-queue/" }
      ]},
      { title: "Tries (Prefix Trees): insert, search, startsWith, word dictionary", resources: [
        { name: "NeetCode: Trie Explained", url: "https://www.youtube.com/watch?v=oobqoCJlHA0" },
        { name: "LeetCode: Implement Trie (Problem)", url: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
        { name: "HackerEarth: Trie Tutorial", url: "https://www.hackerearth.com/practice/data-structures/advanced-data-structures/trie-keyword-tree/tutorial/" }
      ]},
      { title: "Graphs: Adjacency Matrix, Adjacency List, Edge List representations", resources: [
        { name: "Khan Academy: Representing Graphs", url: "https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs" },
        { name: "CP-Algorithms: Graph Representation", url: "https://cp-algorithms.com/graph/breadth-first-search.html" }
      ]},
      { title: "BFS: level-order traversal, shortest path in unweighted graph", resources: [
        { name: "VisuAlgo: Graph BFS/DFS", url: "https://visualgo.net/en/dfsbfs" },
        { name: "LeetCode: Graph BFS Problems", url: "https://leetcode.com/tag/breadth-first-search/" }
      ]},
      { title: "DFS: connected components, cycle detection, topological sort", resources: [
        { name: "CP-Algorithms: DFS", url: "https://cp-algorithms.com/graph/depth-first-search.html" },
        { name: "LeetCode: Graph DFS Problems", url: "https://leetcode.com/tag/depth-first-search/" }
      ]},
      { title: "Shortest Path Algorithms: Dijkstra, Bellman-Ford, Floyd-Warshall", resources: [
        { name: "Computerphile: Dijkstra's Algorithm", url: "https://www.youtube.com/watch?v=GazC3A4OQTE" },
        { name: "CP-Algorithms: Dijkstra's", url: "https://cp-algorithms.com/graph/dijkstra.html" },
        { name: "LeetCode: Network Delay Time", url: "https://leetcode.com/problems/network-delay-time/" }
      ]}
    ]
  },
  {
    id: 6, title: "Web & Networking Foundations",
    description: "Everything between the user's click and the server response. The backbone of all web apps.",
    estimatedWeeks: 3,
    topics: [
      { title: "How the Internet Works: TCP/IP, DNS, HTTP Lifecycle", resources: [
        { name: "MDN: How the Web Works", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works" },
        { name: "How DNS Works (Comic)", url: "https://howdns.works/" },
        { name: "Cloudflare: What is the Internet?", url: "https://www.cloudflare.com/learning/network-layer/how-does-the-internet-work/" }
      ]},
      { title: "HTTP/HTTPS: methods, status codes, headers, cookies", resources: [
        { name: "MDN: HTTP Overview", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" },
        { name: "HTTP Status Codes Explained", url: "https://httpstatusdogs.com/" },
        { name: "Postman: HTTP Tutorial", url: "https://learning.postman.com/docs/getting-started/introduction/" }
      ]},
      { title: "Browser Rendering: DOM, CSSOM, Reflow, Repaint, Critical Path", resources: [
        { name: "web.dev: How Browsers Work", url: "https://web.dev/howbrowserswork/" },
        { name: "MDN: Critical Rendering Path", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path" }
      ]},
      { title: "HTML5 Semantic Structuring & Accessibility (ARIA)", resources: [
        { name: "W3Schools: HTML5 Semantic Elements", url: "https://www.w3schools.com/html/html5_semantic_elements.asp" },
        { name: "MDN: ARIA Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics" },
        { name: "HTML5 Boilerplate", url: "https://html5boilerplate.com/" }
      ]},
      { title: "CSS3: Box Model, Flexbox, Grid, Animations & Custom Properties", resources: [
        { name: "CSS Tricks: Complete Flexbox Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
        { name: "CSS Tricks: Complete Grid Guide", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
        { name: "Flexbox Froggy (Game)", url: "https://flexboxfroggy.com/" },
        { name: "Grid Garden (Game)", url: "https://cssgridgarden.com/" }
      ]},
      { title: "JavaScript: DOM Manipulation, Events & the Event Delegation Pattern", resources: [
        { name: "MDN: Manipulating the DOM", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents" },
        { name: "JavaScript.info: Events", url: "https://javascript.info/events" }
      ]},
      { title: "Async JavaScript: Promises, async/await, Fetch API", resources: [
        { name: "JavaScript.info: Promises", url: "https://javascript.info/promise-basics" },
        { name: "MDN: Using Fetch", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" }
      ]},
      { title: "The Event Loop, Microtask Queue & Macrotask Queue", resources: [
        { name: "Jake Archibald: In The Loop (JSConf)", url: "https://www.youtube.com/watch?v=cCOL7MC4Pl0" },
        { name: "JavaScript Visualized: Event Loop (Lydia Hallie)", url: "https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif" }
      ]},
      { title: "Web Storage: localStorage, sessionStorage, cookies vs IndexedDB", resources: [
        { name: "MDN: Web Storage API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API" },
        { name: "JavaScript.info: LocalStorage, sessionStorage", url: "https://javascript.info/localstorage" }
      ]},
      { title: "Build & Deploy: Webpack/Vite basics, npm scripts, Netlify/Vercel", resources: [
        { name: "Vite: Getting Started", url: "https://vitejs.dev/guide/" },
        { name: "Netlify: Deploy Your First Site", url: "https://docs.netlify.com/get-started/" }
      ]}
    ]
  },
  {
    id: 7, title: "Relational Databases & SQL",
    description: "The foundation of almost every application. Store, query, and safeguard your data.",
    estimatedWeeks: 3,
    topics: [
      { title: "Relational Model: Tables, Rows, Columns, Keys, Relationships", resources: [
        { name: "IBM: What is a Relational Database?", url: "https://www.ibm.com/topics/relational-database" },
        { name: "SQLBolt: Interactive SQL Tutorial", url: "https://sqlbolt.com/" }
      ]},
      { title: "SQL CRUD: SELECT, INSERT, UPDATE, DELETE", resources: [
        { name: "W3Schools: SQL Tutorial", url: "https://www.w3schools.com/sql/" },
        { name: "Mode Analytics: SQL Tutorial", url: "https://mode.com/sql-tutorial/" }
      ]},
      { title: "Filtering, Sorting, Grouping: WHERE, ORDER BY, GROUP BY, HAVING", resources: [
        { name: "SQLZoo: Interactive SQL Exercises", url: "https://sqlzoo.net/" },
        { name: "Leetcode: SQL 50 Study Plan", url: "https://leetcode.com/studyplan/top-sql-50/" }
      ]},
      { title: "Aggregate Functions: COUNT, SUM, AVG, MAX, MIN, DISTINCT", resources: [
        { name: "Mode: Intermediate SQL", url: "https://mode.com/sql-tutorial/intro-to-aggregations/" },
        { name: "HackerRank: SQL Aggregation", url: "https://www.hackerrank.com/domains/sql" }
      ]},
      { title: "SQL Joins: INNER, LEFT, RIGHT, FULL OUTER, CROSS, SELF", resources: [
        { name: "Visual SQL Joins (Interactive)", url: "https://joins.spathon.com/" },
        { name: "SQL Joins Explained (Atlassian)", url: "https://www.atlassian.com/data/sql/sql-join-types-explained-visually" }
      ]},
      { title: "Subqueries, CTEs (WITH clause) & Window Functions", resources: [
        { name: "Mode: Advanced SQL — Window Functions", url: "https://mode.com/sql-tutorial/sql-window-functions/" },
        { name: "PostgreSQL: Window Functions Tutorial", url: "https://www.postgresql.org/docs/current/tutorial-window.html" }
      ]},
      { title: "Database Design & Normalization: 1NF, 2NF, 3NF, BCNF", resources: [
        { name: "FreeCodeCamp: DB Normalization", url: "https://www.freecodecamp.org/news/database-normalization-1nf-2nf-3nf-table-examples/" },
        { name: "Guru99: Database Normalization", url: "https://www.guru99.com/database-normalization.html" }
      ]},
      { title: "ACID Properties & Transactions (BEGIN, COMMIT, ROLLBACK)", resources: [
        { name: "BMC: ACID Properties Explained", url: "https://www.bmc.com/blogs/acid-properties-database-management/" },
        { name: "PostgreSQL: Transactions", url: "https://www.postgresql.org/docs/current/tutorial-transactions.html" }
      ]},
      { title: "Indexing: B-Tree index, composite index, index on expressions, EXPLAIN", resources: [
        { name: "Use The Index, Luke (Free Book)", url: "https://use-the-index-luke.com/" },
        { name: "PostgreSQL: Indexes", url: "https://www.postgresql.org/docs/current/indexes.html" }
      ]},
      { title: "SQL Practice: LeetCode SQL 50 + HackerRank SQL (Advanced)", resources: [
        { name: "LeetCode: Top SQL 50", url: "https://leetcode.com/studyplan/top-sql-50/" },
        { name: "StrataScratch: Real SQL Interview Questions", url: "https://www.stratascratch.com/" },
        { name: "DataLemur: SQL Interview Questions", url: "https://datalemur.com/sql-tutorial" }
      ]}
    ]
  },
  {
    id: 8, title: "Backend Engineering & APIs",
    description: "Build the engine behind the UI. RESTful services, auth, middleware, and everything in between.",
    estimatedWeeks: 4,
    topics: [
      { title: "Backend Frameworks: Node/Express, Spring Boot, Django/FastAPI overview", resources: [
        { name: "MDN: Express/Node.js Intro", url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction" },
        { name: "FastAPI: Tutorial (Python)", url: "https://fastapi.tiangolo.com/tutorial/" },
        { name: "Spring Boot: Getting Started", url: "https://spring.io/guides/gs/spring-boot" }
      ]},
      { title: "RESTful API Design: Resources, HTTP Verbs, Statelessness, Versioning", resources: [
        { name: "REST API Tutorial", url: "https://restfulapi.net/" },
        { name: "Microsoft: REST API Design Best Practices", url: "https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design" }
      ]},
      { title: "Request/Response Lifecycle, Routing & Controllers", resources: [
        { name: "Express: Routing Guide", url: "https://expressjs.com/en/guide/routing.html" },
        { name: "Node.js Design Patterns Book", url: "https://www.nodejsdesignpatterns.com/" }
      ]},
      { title: "Middleware Pattern: logging, validation, rate limiting, CORS", resources: [
        { name: "Express: Using Middleware", url: "https://expressjs.com/en/guide/using-middleware.html" },
        { name: "Helmet.js: Security Middleware", url: "https://helmetjs.github.io/" }
      ]},
      { title: "Authentication: Sessions, JWT, OAuth 2.0, Refresh Tokens", resources: [
        { name: "JWT.io: Introduction", url: "https://jwt.io/introduction" },
        { name: "Auth0: OAuth 2.0 Explained", url: "https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow" },
        { name: "Passport.js: Node Authentication", url: "https://www.passportjs.org/docs/" }
      ]},
      { title: "Password Security: Hashing (bcrypt), Salting, OWASP guidelines", resources: [
        { name: "OWASP: Password Storage Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html" },
        { name: "Auth0: Hashing vs Encryption", url: "https://auth0.com/blog/hashing-vs-encryption/" }
      ]},
      { title: "ORM & Query Builders: Prisma, Sequelize, SQLAlchemy", resources: [
        { name: "Prisma Documentation", url: "https://www.prisma.io/docs/" },
        { name: "Sequelize: Getting Started", url: "https://sequelize.org/docs/v6/getting-started/" }
      ]},
      { title: "Input Validation, Sanitization & Error Handling Strategies", resources: [
        { name: "Joi: Input Validation Library", url: "https://joi.dev/api/" },
        { name: "Joyent: Error Handling in Node.js", url: "https://www.joyent.com/node-js/production/design/errors" }
      ]},
      { title: "API Testing: Postman, cURL, and writing Integration Tests", resources: [
        { name: "Postman Learning Center", url: "https://learning.postman.com/" },
        { name: "Supertest: Node.js API Testing", url: "https://github.com/ladjs/supertest" }
      ]},
      { title: "API Documentation: Swagger/OpenAPI, Markdown READMEs", resources: [
        { name: "Swagger: OpenAPI Specification", url: "https://swagger.io/docs/specification/about/" },
        { name: "Make a README", url: "https://www.makeareadme.com/" }
      ]}
    ]
  },
  {
    id: 9, title: "System Design Fundamentals",
    description: "Design systems that handle millions of users. The skill that separates senior from junior engineers.",
    estimatedWeeks: 4,
    topics: [
      { title: "System Design Basics & Interview Framework (RESHADED)", resources: [
        { name: "System Design Primer (GitHub)", url: "https://github.com/donnemartin/system-design-primer" },
        { name: "ByteByteGo: System Design Interview (Newsletter)", url: "https://blog.bytebytego.com/" }
      ]},
      { title: "Vertical vs Horizontal Scaling: when to choose what", resources: [
        { name: "GeeksforGeeks: Horizontal vs Vertical Scaling", url: "https://www.geeksforgeeks.org/horizontal-and-vertical-scaling-in-databases/" },
        { name: "AWS: Scaling Strategies", url: "https://aws.amazon.com/blogs/architecture/scale-your-web-application-one-step-at-a-time/" }
      ]},
      { title: "Load Balancing: Round Robin, Least Connections, L4 vs L7", resources: [
        { name: "Nginx: Load Balancing Guide", url: "https://www.nginx.com/resources/glossary/load-balancing/" },
        { name: "ByteByteGo: Load Balancing", url: "https://blog.bytebytego.com/p/load-balancing-and-types-of-load" }
      ]},
      { title: "Caching: In-memory (Redis/Memcached), Cache-aside, Write-through, TTL", resources: [
        { name: "AWS: Caching Best Practices", url: "https://aws.amazon.com/caching/best-practices/" },
        { name: "Redis: Introduction", url: "https://redis.io/docs/getting-started/" },
        { name: "ByteByteGo: Top Caching Strategies", url: "https://blog.bytebytego.com/p/top-caching-strategies" }
      ]},
      { title: "CDN: How CDNs work, edge servers, cache invalidation", resources: [
        { name: "Cloudflare: What is a CDN?", url: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/" },
        { name: "AWS CloudFront: Getting Started", url: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.html" }
      ]},
      { title: "SQL vs NoSQL: Relational, Document, Graph, Time-Series — choosing right DB", resources: [
        { name: "ByteByteGo: SQL vs NoSQL", url: "https://blog.bytebytego.com/p/understanding-database-types" },
        { name: "Martin Fowler: NoSQL Distilled", url: "https://martinfowler.com/books/nosql.html" }
      ]},
      { title: "Monolithic vs Microservices: coupling, trade-offs, when to migrate", resources: [
        { name: "Martin Fowler: Microservices Article", url: "https://martinfowler.com/articles/microservices.html" },
        { name: "Sam Newman: Building Microservices", url: "https://samnewman.io/books/building_microservices_2nd_edition/" }
      ]},
      { title: "Database Sharding, Replication & Consistency Models (CAP Theorem)", resources: [
        { name: "DigitalOcean: Database Sharding", url: "https://www.digitalocean.com/community/tutorials/understanding-database-sharding" },
        { name: "ByteByteGo: CAP Theorem", url: "https://blog.bytebytego.com/p/cap-theorem-101" }
      ]},
      { title: "Message Queues & Event-Driven Architecture: Kafka, RabbitMQ, SQS", resources: [
        { name: "IBM: Message Queues", url: "https://www.ibm.com/topics/message-queues" },
        { name: "Confluent: Kafka Introduction", url: "https://developer.confluent.io/learn-kafka/" }
      ]},
      { title: "Designing real systems: URL Shortener, Twitter Feed, WhatsApp", resources: [
        { name: "Grokking System Design (Free Alternative)", url: "https://github.com/karanpratapsingh/system-design" },
        { name: "Exponent: System Design Practice", url: "https://www.tryexponent.com/courses/system-design-interview" },
        { name: "ByteByteGo: System Design YouTube", url: "https://www.youtube.com/@ByteByteGo" }
      ]}
    ]
  },
  {
    id: 10, title: "Cloud Computing & DevOps",
    description: "Deploy, automate, monitor, and maintain software at scale in the cloud.",
    estimatedWeeks: 4,
    topics: [
      { title: "Cloud Providers: AWS, GCP, Azure — Core Services Comparison", resources: [
        { name: "AWS Cloud Practitioner Essentials (Free)", url: "https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials" },
        { name: "Google Cloud Fundamentals", url: "https://cloud.google.com/training/courses/cloud-fundamentals" }
      ]},
      { title: "VMs vs Containers vs Serverless: when to use which", resources: [
        { name: "Docker vs VM vs Serverless", url: "https://www.docker.com/resources/what-container/" },
        { name: "RedHat: Containers vs VMs", url: "https://www.redhat.com/en/topics/containers/containers-vs-vms" }
      ]},
      { title: "Docker: Build images, Dockerfile, layers, multi-stage builds", resources: [
        { name: "Docker Official Tutorial", url: "https://docs.docker.com/get-started/" },
        { name: "Play with Docker (Browser Playground)", url: "https://labs.play-with-docker.com/" }
      ]},
      { title: "Docker Compose: multi-container apps, networking, volumes", resources: [
        { name: "Docker Docs: Compose Overview", url: "https://docs.docker.com/compose/" },
        { name: "Compose Tutorial (DigitalOcean)", url: "https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04" }
      ]},
      { title: "Kubernetes Fundamentals: Pods, Deployments, Services, Ingress", resources: [
        { name: "Kubernetes: Learn K8s (Interactive)", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/" },
        { name: "KodeKloud: Kubernetes for Beginners (Free)", url: "https://kodekloud.com/courses/kubernetes-for-the-absolute-beginners-hands-on/" }
      ]},
      { title: "CI/CD Pipelines: concept, tools, pipeline stages", resources: [
        { name: "RedHat: What is CI/CD?", url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd" },
        { name: "GitHub Actions: Getting Started", url: "https://docs.github.com/en/actions/quickstart" }
      ]},
      { title: "GitHub Actions: workflows, triggers, matrix builds, secrets", resources: [
        { name: "GitHub Actions Documentation", url: "https://docs.github.com/en/actions" },
        { name: "GitHub Actions: Node.js CI Example", url: "https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs" }
      ]},
      { title: "Linux & Bash Scripting: process management, cron, scripting patterns", resources: [
        { name: "Linux Journey (Interactive)", url: "https://linuxjourney.com/" },
        { name: "Bash Scripting Tutorial", url: "https://linuxconfig.org/bash-scripting-tutorial-for-beginners" }
      ]},
      { title: "Observability: Logging, Metrics (Prometheus), Tracing, Dashboards (Grafana)", resources: [
        { name: "Prometheus: Getting Started", url: "https://prometheus.io/docs/tutorials/getting_started/" },
        { name: "Grafana: Getting Started", url: "https://grafana.com/docs/grafana/latest/getting-started/" }
      ]},
      { title: "Infrastructure as Code: Terraform basics, concepts, AWS example", resources: [
        { name: "HashiCorp: Terraform Tutorial", url: "https://developer.hashicorp.com/terraform/tutorials/aws-get-started" },
        { name: "DigitalOcean: Terraform Introduction", url: "https://www.digitalocean.com/community/tutorials/how-to-use-terraform-with-digitalocean" }
      ]}
    ]
  },
  {
    id: 11, title: "Specialized Topics & Security",
    description: "Round out your skills with real-time tech, modern APIs, NoSQL, and security essentials.",
    estimatedWeeks: 3,
    topics: [
      { title: "NoSQL Databases: Document (MongoDB), Key-Value (Redis), Column (Cassandra)", resources: [
        { name: "MongoDB University (Free Courses)", url: "https://learn.mongodb.com/" },
        { name: "Redis University", url: "https://university.redis.com/" }
      ]},
      { title: "When to use SQL vs NoSQL: data model & access patterns", resources: [
        { name: "Couchbase: SQL vs NoSQL", url: "https://www.couchbase.com/resources/why-nosql" },
        { name: "MongoDB: When to Use NoSQL", url: "https://www.mongodb.com/nosql-explained/when-to-use-nosql" }
      ]},
      { title: "WebSockets & Server-Sent Events: real-time architecture", resources: [
        { name: "MDN: WebSockets API", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" },
        { name: "Socket.io: Getting Started", url: "https://socket.io/docs/v4/tutorial/introduction" }
      ]},
      { title: "GraphQL vs REST: schemas, resolvers, queries, mutations, subscriptions", resources: [
        { name: "How to GraphQL (Full Tutorial)", url: "https://www.howtographql.com/" },
        { name: "Apollo GraphQL Docs", url: "https://www.apollographql.com/docs/" }
      ]},
      { title: "gRPC & Protocol Buffers: when to use gRPC vs REST", resources: [
        { name: "gRPC: Quick Start", url: "https://grpc.io/docs/languages/go/quickstart/" },
        { name: "ByteByteGo: gRPC vs REST", url: "https://blog.bytebytego.com/p/why-is-grpc-fast" }
      ]},
      { title: "Web Security: OWASP Top 10, SQL Injection, XSS, CSRF", resources: [
        { name: "OWASP Top Ten", url: "https://owasp.org/www-project-top-ten/" },
        { name: "PortSwigger Web Security Academy (Free!)", url: "https://portswigger.net/web-security" }
      ]},
      { title: "Auth Security: CORS, HTTPS, CSP, Secure Cookies, HSTS", resources: [
        { name: "MDN: CORS", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" },
        { name: "OWASP: Secure Cookies Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html" }
      ]},
      { title: "Rate Limiting, DDoS Mitigation & API Throttling", resources: [
        { name: "Cloudflare: DDoS Protection", url: "https://www.cloudflare.com/ddos/" },
        { name: "AWS: API Gateway Throttling", url: "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html" }
      ]},
      { title: "Serverless Computing: AWS Lambda, Vercel Functions, Edge Functions", resources: [
        { name: "SST.dev: What is Serverless?", url: "https://sst.dev/chapters/what-is-serverless.html" },
        { name: "AWS Lambda: Getting Started", url: "https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html" }
      ]},
      { title: "Search Systems: Elasticsearch & Full-Text Search Concepts", resources: [
        { name: "Elasticsearch: Getting Started", url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html" },
        { name: "Algolia: How Search Works", url: "https://www.algolia.com/doc/guides/getting-started/how-algolia-works/" }
      ]}
    ]
  },
  {
    id: 12, title: "Capstone, Interview Prep & Open Source",
    description: "The final boss. Polish your skills, build something real, and land the job of your dreams.",
    estimatedWeeks: 4,
    topics: [
      { title: "Build a Full-Stack Capstone Project (with CI/CD + cloud deployment)", resources: [
        { name: "FreeCodeCamp: 15 Project Ideas", url: "https://www.youtube.com/watch?v=3PHXvlpOkf4" },
        { name: "Build a Portfolio: Scrimba Guide", url: "https://scrimba.com/articles/react-projects-for-beginners/" }
      ]},
      { title: "System Design Mock Interviews (Timed Practice)", resources: [
        { name: "Pramp: Free Mock Interviews", url: "https://www.pramp.com/" },
        { name: "Exponent: System Design Course", url: "https://www.tryexponent.com/courses/system-design-interview" }
      ]},
      { title: "DSA Practice: NeetCode 150 + Blind 75", resources: [
        { name: "NeetCode.io Roadmap", url: "https://neetcode.io/roadmap" },
        { name: "Blind 75 List", url: "https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions" },
        { name: "LeetCode Patterns (Sean Prashad)", url: "https://seanprashad.com/leetcode-patterns/" }
      ]},
      { title: "Behavioral Interviews: STAR Method, Leadership Principles, Storytelling", resources: [
        { name: "Amazon: Leadership Principles", url: "https://www.amazon.jobs/content/en/our-workplace/leadership-principles" },
        { name: "TechInterview Handbook: Behavioral", url: "https://www.techinterviewhandbook.org/behavioral-interview/" }
      ]},
      { title: "Competitive Programming for Interview Edge: Codeforces, CSES", resources: [
        { name: "Codeforces: Get Started", url: "https://codeforces.com/" },
        { name: "CSES Problem Set (Golden Standard)", url: "https://cses.fi/problemset/" }
      ]},
      { title: "Resume, LinkedIn & Portfolio: ATS optimization, project showcase", resources: [
        { name: "Tech Interview Handbook: Resume Guide", url: "https://www.techinterviewhandbook.org/resume/" },
        { name: "Harvard Resume Tips", url: "https://ocs.fas.harvard.edu/guide-to-resumes-and-cover-letters" }
      ]},
      { title: "Contributing to Open Source: Find good first issues, fork, PR", resources: [
        { name: "First Timers Only", url: "https://www.firsttimersonly.com/" },
        { name: "GitHub: How to Contribute to Open Source", url: "https://opensource.guide/how-to-contribute/" },
        { name: "Good First Issues", url: "https://goodfirstissue.dev/" }
      ]},
      { title: "Writing Great READMEs & Technical Documentation", resources: [
        { name: "Make a README", url: "https://www.makeareadme.com/" },
        { name: "Divio: Documentation System", url: "https://documentation.divio.com/" }
      ]},
      { title: "Job Search Strategy: outreach, referrals, company research, timing", resources: [
        { name: "Levels.fyi: Compensation Research", url: "https://www.levels.fyi/" },
        { name: "TechInterviewHandbook: Job Hunting", url: "https://www.techinterviewhandbook.org/job-hunting/" }
      ]},
      { title: "Salary Negotiation & Offer Evaluation (RSUs, vesting, total comp)", resources: [
        { name: "Haseeb Qureshi: Ten Rules for Negotiating", url: "https://haseebq.com/my-ten-rules-for-negotiating-a-job-offer/" },
        { name: "Patrick McKenzie: Salary Negotiation", url: "https://www.kalzumeus.com/2012/01/23/salary-negotiation/" }
      ]}
    ]
  }
];

// ═══════════════════════════════════════════════════════════════════════
//  DSA MASTER PATH — 10 months from C++ zero to DSA hero
// ═══════════════════════════════════════════════════════════════════════
const dsaRoadmapData = [
  {
    id: "dsa-1", title: "C++ From Zero — Foundations",
    description: "Set up your environment and master C++ fundamentals: syntax, I/O, types, control flow, and functions.",
    estimatedWeeks: 2, badge: "⚡",
    topics: [
      { title: "Dev Environment: GCC/G++, VS Code, Competitive Companion Extension", resources: [
        { name: "VS Code: C++ Setup Guide", url: "https://code.visualstudio.com/docs/languages/cpp" },
        { name: "OnlineGDB (Browser C++ IDE)", url: "https://www.onlinegdb.com/online_c++_compiler" },
        { name: "Codeforces: Getting Started Blog", url: "https://codeforces.com/blog/entry/47824" }
      ]},
      { title: "Your First Program: Hello World, Compilation Steps, Execution", resources: [
        { name: "📖 LearnCPP Ch.1.1-1.9 — Statements, structure, compilation (read in order)", url: "https://www.learncpp.com/cpp-tutorial/statements-and-the-structure-of-a-program/" },
        { name: "🎬 C++ Full Course — Bro Code (watch chapters 1-3)", url: "https://www.youtube.com/watch?v=-TkoO8Z07hI" },
        { name: "📖 CPP Reference: Hello World breakdown", url: "https://en.cppreference.com/w/cpp/language/hello_world" }
      ]},
      { title: "I/O: cin, cout, scanf, printf — and Fast I/O for Competitive Programming", resources: [
        { name: "📖 LearnCPP Ch.1.5 — Introduction to iostream (cout, cin, endl)", url: "https://www.learncpp.com/cpp-tutorial/introduction-to-iostream-cout-cin-and-endl/" },
        { name: "📖 GeeksforGeeks: Fast I/O in C++ for Competitive Programming", url: "https://www.geeksforgeeks.org/fast-io-for-competitive-programming/" },
        { name: "📝 Tip: Always add at start of main(): ios::sync_with_stdio(false); cin.tie(NULL); — makes I/O 10x faster.", url: "https://www.geeksforgeeks.org/fast-io-for-competitive-programming/" }
      ]},
      { title: "Data Types: int, long long, double, char, bool — sizes, overflow, casting", resources: [
        { name: "📖 LearnCPP Ch.4.1-4.6 — Fundamental data types (skip 4.7+)", url: "https://www.learncpp.com/cpp-tutorial/introduction-to-fundamental-data-types/" },
        { name: "📖 LearnCPP Ch.4.11 — Chars specifically", url: "https://www.learncpp.com/cpp-tutorial/chars/" },
        { name: "📝 Tip: Always use long long in CP to avoid overflow. int max = 2.1 billion, long long = 9.2 quintillion.", url: "https://www.geeksforgeeks.org/c-data-types/" },
        { name: "📖 CPP Reference: Fundamental Types reference", url: "https://en.cppreference.com/w/cpp/language/types" }
      ]},
      { title: "Operators: Arithmetic, Relational, Logical, Bitwise, Assignment, Ternary", resources: [
        { name: "📖 LearnCPP Ch.6.1-6.7 — Operators (focus: precedence table)", url: "https://www.learncpp.com/cpp-tutorial/operator-precedence-and-associativity/" },
        { name: "📖 LearnCPP Ch.6.21 — Bitwise operators specifically", url: "https://www.learncpp.com/cpp-tutorial/bitwise-operators/" },
        { name: "🔧 Bitwise Visualizer — watch bits flip in real time", url: "https://bitwisecmd.com/" }
      ]},
      { title: "Control Flow: if/else, switch, ternary — nested conditions", resources: [
        { name: "📖 LearnCPP Ch.8.1-8.8 — Control flow introduction (read all 8 sections)", url: "https://www.learncpp.com/cpp-tutorial/control-flow-introduction/" },
        { name: "📖 Programiz: C++ if...else with examples", url: "https://www.programiz.com/cpp-programming/if-else" },
        { name: "🏋️ HackerRank: C++ conditionals (first 5 problems)", url: "https://www.hackerrank.com/domains/cpp" }
      ]},
      { title: "Loops: for, while, do-while, range-based for, break/continue", resources: [
        { name: "📖 LearnCPP Ch.8.7-8.15 — Loop chapters (while, do-while, for, range-based)", url: "https://www.learncpp.com/cpp-tutorial/introduction-to-loops-and-while-statements/" },
        { name: "🔧 Python Tutor (C++ mode) — paste loop code and watch it execute step by step", url: "https://pythontutor.com/cpp.html" },
        { name: "📖 Programiz: C++ for loop with examples", url: "https://www.programiz.com/cpp-programming/for-loop" }
      ]},
      { title: "Functions: declaration, definition, pass by value vs reference, default args, overloading", resources: [
        { name: "📖 LearnCPP Ch.2 — Functions (read ALL of chapter 2, it is short and essential)", url: "https://www.learncpp.com/cpp-tutorial/introduction-to-functions/" },
        { name: "📖 LearnCPP Ch.12.1 — Pass by reference (critical for performance)", url: "https://www.learncpp.com/cpp-tutorial/lvalue-references/" },
        { name: "🎬 The Cherno: C++ Functions (14 min)", url: "https://www.youtube.com/watch?v=V9zuox47zr0" }
      ]},
      { title: "Arrays and 2D Arrays: declaration, traversal, common patterns", resources: [
        { name: "📖 LearnCPP Ch.17.1-17.6 — Arrays (read sections 17.1 to 17.6 only)", url: "https://www.learncpp.com/cpp-tutorial/introduction-to-arrays-part-i/" },
        { name: "📝 Tip: Prefer std::vector over raw arrays in modern C++. Use arrays only when size is fixed.", url: "https://www.learncpp.com/cpp-tutorial/an-introduction-to-stdvector/" },
        { name: "📖 GeeksforGeeks: C++ Arrays with examples", url: "https://www.geeksforgeeks.org/arrays-in-c-cpp/" }
      ]},
      { title: "Practice: HackerRank C++ Basics + First 20 LeetCode Easy (Brute Force OK)", resources: [
        { name: "HackerRank: C++ Domain", url: "https://www.hackerrank.com/domains/cpp" },
        { name: "LeetCode: Easy Problems", url: "https://leetcode.com/problemset/?difficulty=EASY" },
        { name: "CSES: Introductory Problems", url: "https://cses.fi/problemset/list/" }
      ]}
    ]
  },
  {
    id: "dsa-2", title: "C++ Advanced — Pointers, Strings & STL",
    description: "Master C++'s most powerful features: pointers, references, string operations, and the full STL toolkit.",
    estimatedWeeks: 2, badge: "🔧",
    topics: [
      { title: "Pointers: address-of (&), dereference (*), pointer arithmetic, nullptr", resources: [
        { name: "📖 LearnCPP Ch.9.6-9.12 — Introduction to Pointers (read in order)", url: "https://www.learncpp.com/cpp-tutorial/introduction-to-pointers/" },
        { name: "🎬 The Cherno: Pointers in C++ (18 min, excellent visual)", url: "https://www.youtube.com/watch?v=DTxHyVn0ODg" },
        { name: "🔧 Python Tutor (C++ mode): Paste pointer code and watch memory layout", url: "https://pythontutor.com/cpp.html" }
      ]},
      { title: "References vs Pointers: when to use each, const references", resources: [
        { name: "📖 LearnCPP Ch.12.1-12.5 — L-value References (the reference chapters)", url: "https://www.learncpp.com/cpp-tutorial/lvalue-references/" },
        { name: "📖 LearnCPP Ch.12.3 — L-value references to const", url: "https://www.learncpp.com/cpp-tutorial/lvalue-references-to-const/" },
        { name: "📝 Tip: Prefer references over pointers in modern C++. Use pointers only when you need null or reassignment.", url: "https://stackoverflow.com/questions/57483/what-are-the-differences-between-a-pointer-variable-and-a-reference-variable" }
      ]},
      { title: "Dynamic Memory: new/delete, heap vs stack, memory leaks", resources: [
        { name: "📖 LearnCPP Ch.19.1-19.4 — Dynamic Memory Allocation with new and delete", url: "https://www.learncpp.com/cpp-tutorial/dynamic-memory-allocation-with-new-and-delete/" },
        { name: "📖 LearnCPP Ch.22 — Smart Pointers (use these instead of raw new/delete)", url: "https://www.learncpp.com/cpp-tutorial/introduction-to-smart-pointers-move-semantics/" },
        { name: "🎬 The Cherno: Stack vs Heap Memory in C++ (16 min)", url: "https://www.youtube.com/watch?v=wJ1L2nSIV1s" }
      ]},
      { title: "Strings: std::string, string methods (find, substr, stoi, to_string), stringstream", resources: [
        { name: "📖 LearnCPP Ch.5.2 — std::string (the essential string chapter)", url: "https://www.learncpp.com/cpp-tutorial/introduction-to-stdstring/" },
        { name: "📖 LearnCPP Ch.5.3 — std::string_view (fast read-only string, modern C++)", url: "https://www.learncpp.com/cpp-tutorial/introduction-to-stdstring_view/" },
        { name: "📝 Tip: Use stoi() to convert string to int, to_string() for int to string. Use stringstream for parsing.", url: "https://en.cppreference.com/w/cpp/string/basic_string" }
      ]},
      { title: "STL Vector: dynamic array, push_back, emplace_back, iterators, sort", resources: [
        { name: "📖 LearnCPP Ch.16.1-16.8 — std::vector (the complete vector chapter)", url: "https://www.learncpp.com/cpp-tutorial/introduction-to-stdvector-and-list-constructors/" },
        { name: "📝 Tip: Use emplace_back() not push_back() — constructs in place, slightly faster. Reserve capacity with reserve().", url: "https://en.cppreference.com/w/cpp/container/vector" },
        { name: "📖 CPP Reference: std::vector method reference", url: "https://en.cppreference.com/w/cpp/container/vector" }
      ]},
      { title: "STL Map & Unordered_map: insertion, lookup, iteration — O(log n) vs O(1)", resources: [
        { name: "CPP Reference: std::map", url: "https://en.cppreference.com/w/cpp/container/map" },
        { name: "GeeksforGeeks: Map vs Unordered_map", url: "https://www.geeksforgeeks.org/map-vs-unordered_map-c/" }
      ]},
      { title: "STL Set & Unordered_set, Stack, Queue, Deque, Priority_queue", resources: [
        { name: "CPP Reference: Containers Overview", url: "https://en.cppreference.com/w/cpp/container" },
        { name: "GeeksforGeeks: STL Containers", url: "https://www.geeksforgeeks.org/the-c-standard-template-library-stl/" }
      ]},
      { title: "STL Algorithms: sort, reverse, find, lower_bound, upper_bound, min/max", resources: [
        { name: "📖 LearnCPP Ch.18.1-18.4 — Iterators and Algorithms", url: "https://www.learncpp.com/cpp-tutorial/introduction-to-iterators/" },
        { name: "📝 Tip: lower_bound = first element >= target. upper_bound = first element > target. Critical for binary search.", url: "https://en.cppreference.com/w/cpp/algorithm/lower_bound" },
        { name: "📖 CPP Reference: <algorithm> — full reference (bookmark this)", url: "https://en.cppreference.com/w/cpp/algorithm" }
      ]},
      { title: "Pairs, Tuples, auto, lambda functions & range-based algorithms", resources: [
        { name: "📖 LearnCPP Ch.20.5 — Lambda Expressions (modern C++, essential for STL)", url: "https://www.learncpp.com/cpp-tutorial/introduction-to-lambdas-anonymous-functions/" },
        { name: "📝 Tip: Sort vector of pairs by 2nd element: sort(v.begin(),v.end(),[](auto&a,auto&b){return a.second<b.second;})", url: "https://www.geeksforgeeks.org/sorting-vector-of-pairs-in-c-set-1-sort-by-first-and-second/" },
        { name: "📖 CPP Reference: std::pair", url: "https://en.cppreference.com/w/cpp/utility/pair" }
      ]},
      { title: "Practice: 30 LeetCode Easy/Medium with STL — Arrays, HashMap, Sorting", resources: [
        { name: "NeetCode: Arrays & Hashing Problems", url: "https://neetcode.io/roadmap" },
        { name: "CSES: Sorting and Searching", url: "https://cses.fi/problemset/list/" },
        { name: "Codeforces: Div 2 A-B Problems", url: "https://codeforces.com/problemset?tags=implementation" }
      ]}
    ]
  },
  {
    id: "dsa-3", title: "Mathematical Foundations & Recursion",
    description: "The math that every competitive programmer needs. Number theory, combinatorics, and recursion mastery.",
    estimatedWeeks: 2, badge: "🧮",
    topics: [
      { title: "Big-O, Big-Ω, Big-Θ: formal definitions, deriving complexity from code", resources: [
        { name: "Big-O Cheat Sheet", url: "https://www.bigocheatsheet.com/" },
        { name: "MIT 6.006: Lecture 1 — Algorithmic Thinking", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/video_galleries/lecture-videos/" }
      ]},
      { title: "Modular Arithmetic: mod operator, properties, overflow prevention", resources: [
        { name: "CP-Algorithms: Modular Arithmetic", url: "https://cp-algorithms.com/algebra/module-inverse.html" },
        { name: "Codeforces Blog: Modular Arithmetic Tutorial", url: "https://codeforces.com/blog/entry/72527" }
      ]},
      { title: "Number Theory: GCD (Euclidean algorithm), LCM, Coprime numbers", resources: [
        { name: "CP-Algorithms: GCD & LCM", url: "https://cp-algorithms.com/algebra/euclid-algorithm.html" },
        { name: "GeeksforGeeks: Euclidean Algorithm", url: "https://www.geeksforgeeks.org/euclidean-algorithms-basic-and-extended/" }
      ]},
      { title: "Prime Numbers: Sieve of Eratosthenes, Primality Testing, Factorization", resources: [
        { name: "CP-Algorithms: Sieve of Eratosthenes", url: "https://cp-algorithms.com/algebra/sieve-of-eratosthenes.html" },
        { name: "GeeksforGeeks: Sieve of Eratosthenes", url: "https://www.geeksforgeeks.org/sieve-of-eratosthenes/" }
      ]},
      { title: "Bit Manipulation: AND, OR, XOR, NOT, shifts — common tricks", resources: [
        { name: "GeeksforGeeks: Bit Manipulation Tricks", url: "https://www.geeksforgeeks.org/bit-tricks-competitive-programming/" },
        { name: "LeetCode: Bit Manipulation Problems", url: "https://leetcode.com/tag/bit-manipulation/" },
        { name: "CP-Algorithms: Bit Manipulation", url: "https://cp-algorithms.com/algebra/bit-manipulation.html" }
      ]},
      { title: "Combinatorics: nCr, nPr, Pascal's Triangle, Inclusion-Exclusion", resources: [
        { name: "CP-Algorithms: Combinatorics", url: "https://cp-algorithms.com/combinatorics/binomial-coefficients.html" },
        { name: "Khan Academy: Combinations", url: "https://www.khanacademy.org/math/statistics-probability/counting-permutations-and-combinations" }
      ]},
      { title: "Recursion Mastery: tree of recursive calls, memoization, when NOT to recurse", resources: [
        { name: "LeetCode: Recursion I Card", url: "https://leetcode.com/explore/learn/card/recursion-i/" },
        { name: "LeetCode: Recursion II Card", url: "https://leetcode.com/explore/learn/card/recursion-ii/" },
        { name: "Python Tutor: Recursion Visualizer", url: "https://pythontutor.com/cpp.html" }
      ]},
      { title: "Backtracking: State Space Trees, Pruning — Subsets, Permutations, N-Queens", resources: [
        { name: "NeetCode: Backtracking Explained", url: "https://www.youtube.com/watch?v=REOH22Xwdkk" },
        { name: "LeetCode: Backtracking Tag", url: "https://leetcode.com/tag/backtracking/" }
      ]},
      { title: "Prefix Sums & Difference Arrays: range query, 2D prefix sum", resources: [
        { name: "CP-Algorithms: Prefix Sums", url: "https://cp-algorithms.com/sequences/prefix-sums.html" },
        { name: "GeeksforGeeks: Prefix Sum Array", url: "https://www.geeksforgeeks.org/prefix-sum-array-implementation-applications-competitive-programming/" }
      ]},
      { title: "Practice: 30 Problems — Bit Manipulation, Math, Recursion on LeetCode/CSES", resources: [
        { name: "CSES: Mathematics Problems", url: "https://cses.fi/problemset/list/" },
        { name: "LeetCode: Math Tag", url: "https://leetcode.com/tag/math/" },
        { name: "Codeforces: Math Tag", url: "https://codeforces.com/problemset?tags=math" }
      ]}
    ]
  },
  {
    id: "dsa-4", title: "Arrays, Hashing & Two Pointers",
    description: "The patterns you'll use in 50% of all coding interviews. Master them completely.",
    estimatedWeeks: 3, badge: "🎯",
    topics: [
      { title: "Sliding Window — Fixed Size: Max sum subarray of size k", resources: [
        { name: "NeetCode: Sliding Window Explained", url: "https://www.youtube.com/watch?v=1pkOgXD63yU" },
        { name: "GeeksforGeeks: Sliding Window", url: "https://www.geeksforgeeks.org/window-sliding-technique/" }
      ]},
      { title: "Sliding Window — Variable Size: Longest Substring Without Repeating", resources: [
        { name: "LeetCode: Longest Substring (Problem)", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
        { name: "LeetCode: Minimum Window Substring", url: "https://leetcode.com/problems/minimum-window-substring/" }
      ]},
      { title: "Two Pointers — Opposite Ends: Two Sum II, Container with Most Water", resources: [
        { name: "NeetCode: Two Pointers Video", url: "https://www.youtube.com/watch?v=VEPCm3BCtik" },
        { name: "LeetCode: Two Pointers Tag", url: "https://leetcode.com/tag/two-pointers/" }
      ]},
      { title: "Two Pointers — Same Direction: Remove Duplicates, Move Zeros", resources: [
        { name: "LeetCode: Remove Duplicates (Problem)", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
        { name: "GeeksforGeeks: Two Pointer Technique", url: "https://www.geeksforgeeks.org/two-pointers-technique/" }
      ]},
      { title: "Hash Maps in Practice: Two Sum, Group Anagrams, Top K Frequent", resources: [
        { name: "NeetCode: Arrays & Hashing Playlist", url: "https://www.youtube.com/playlist?list=PLot-Xpze53letfIu9dMzIIO7na_sqfbi0" },
        { name: "LeetCode: Group Anagrams", url: "https://leetcode.com/problems/group-anagrams/" }
      ]},
      { title: "Hash Sets: Contains Duplicate, Happy Number, Intersection of Arrays", resources: [
        { name: "LeetCode: Contains Duplicate", url: "https://leetcode.com/problems/contains-duplicate/" },
        { name: "LeetCode: Happy Number", url: "https://leetcode.com/problems/happy-number/" }
      ]},
      { title: "Sorting Algorithms Deep Dive: QuickSort, MergeSort — implement from scratch", resources: [
        { name: "VisuAlgo: Sorting", url: "https://visualgo.net/en/sorting" },
        { name: "GFG: QuickSort in C++", url: "https://www.geeksforgeeks.org/quick-sort/" },
        { name: "GFG: MergeSort in C++", url: "https://www.geeksforgeeks.org/merge-sort/" }
      ]},
      { title: "Binary Search Patterns: Classic, Search in Rotated Array, Find Minimum", resources: [
        { name: "LeetCode: Binary Search Card", url: "https://leetcode.com/explore/learn/card/binary-search/" },
        { name: "NeetCode: Binary Search Playlist", url: "https://www.youtube.com/playlist?list=PLot-Xpze53leU0Ec0VkBhnf4npMRFiNcB" }
      ]},
      { title: "Binary Search on Answer: Capacity to Ship, Koko Eating Bananas", resources: [
        { name: "LeetCode: Koko Eating Bananas", url: "https://leetcode.com/problems/koko-eating-bananas/" },
        { name: "Codeforces Blog: Binary Search on Answer", url: "https://codeforces.com/blog/entry/20528" }
      ]},
      { title: "Boss Battle: Complete NeetCode 150 — Arrays & Hashing Section (9 problems)", resources: [
        { name: "NeetCode 150: Arrays & Hashing", url: "https://neetcode.io/practice" },
        { name: "CSES: Sorting & Searching", url: "https://cses.fi/problemset/list/" },
        { name: "Codeforces: EDU CF Round Problems", url: "https://codeforces.com/edu/courses" }
      ]}
    ]
  },
  {
    id: "dsa-5", title: "Linked Lists, Stacks & Queues",
    description: "Pointer manipulation, monotonic structures, and the hardest easy problems in existence.",
    estimatedWeeks: 2, badge: "🔗",
    topics: [
      { title: "Singly Linked List: Node struct, insert at head/tail/position, delete, reverse", resources: [
        { name: "LeetCode: Linked List Card", url: "https://leetcode.com/explore/learn/card/linked-list/" },
        { name: "VisuAlgo: Linked List", url: "https://visualgo.net/en/list" }
      ]},
      { title: "Doubly Linked List & Circular Linked List: implementation, LRU Cache concept", resources: [
        { name: "GFG: Doubly Linked List", url: "https://www.geeksforgeeks.org/doubly-linked-list/" },
        { name: "LeetCode: LRU Cache (Hard Problem)", url: "https://leetcode.com/problems/lru-cache/" }
      ]},
      { title: "Fast & Slow Pointers (Floyd's Cycle Detection): detect cycle, find middle", resources: [
        { name: "NeetCode: Fast and Slow Pointers", url: "https://www.youtube.com/watch?v=gBTe7lFR3vc" },
        { name: "LeetCode: Linked List Cycle", url: "https://leetcode.com/problems/linked-list-cycle/" }
      ]},
      { title: "Classic Linked List Problems: Merge Two Sorted, Reorder, Remove Nth from End", resources: [
        { name: "NeetCode: Linked List Playlist", url: "https://www.youtube.com/playlist?list=PLot-Xpze53lfjMs56JIfDf5dVJMNxT1h3" },
        { name: "LeetCode: Linked List Tag", url: "https://leetcode.com/tag/linked-list/" }
      ]},
      { title: "Stack: Array-based and Node-based implementation in C++", resources: [
        { name: "GFG: Stack Data Structure", url: "https://www.geeksforgeeks.org/stack-data-structure/" },
        { name: "LeetCode: Queue & Stack Card", url: "https://leetcode.com/explore/learn/card/queue-stack/" }
      ]},
      { title: "Classic Stack Problems: Valid Parentheses, Min Stack, Evaluate RPN", resources: [
        { name: "LeetCode: Valid Parentheses", url: "https://leetcode.com/problems/valid-parentheses/" },
        { name: "LeetCode: Min Stack", url: "https://leetcode.com/problems/min-stack/" }
      ]},
      { title: "Monotonic Stack: Next Greater Element, Daily Temperatures, Largest Rectangle", resources: [
        { name: "NeetCode: Monotonic Stack Video", url: "https://www.youtube.com/watch?v=Dq_ObZwTY_Q" },
        { name: "LeetCode: Daily Temperatures", url: "https://leetcode.com/problems/daily-temperatures/" },
        { name: "LeetCode: Largest Rectangle in Histogram", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/" }
      ]},
      { title: "Queue: BFS applications, circular queue, deque (double-ended queue)", resources: [
        { name: "CPP Reference: std::deque", url: "https://en.cppreference.com/w/cpp/container/deque" },
        { name: "GFG: Circular Queue", url: "https://www.geeksforgeeks.org/circular-queue-set-1-introduction-array-implementation/" }
      ]},
      { title: "Monotonic Deque: Sliding Window Maximum — O(n) solution", resources: [
        { name: "LeetCode: Sliding Window Maximum", url: "https://leetcode.com/problems/sliding-window-maximum/" },
        { name: "NeetCode: Sliding Window Maximum Explained", url: "https://www.youtube.com/watch?v=DfljaUwZsOk" }
      ]},
      { title: "Boss Battle: NeetCode 150 — Stack & Linked List sections (complete both)", resources: [
        { name: "NeetCode 150: Linked List", url: "https://neetcode.io/practice" },
        { name: "NeetCode 150: Stack", url: "https://neetcode.io/practice" },
        { name: "CSES: List of Problems", url: "https://cses.fi/problemset/list/" }
      ]}
    ]
  },
  {
    id: "dsa-6", title: "Trees, Heaps & Tries",
    description: "Non-linear structures that power file systems, databases, and autocomplete engines.",
    estimatedWeeks: 3, badge: "🌲",
    topics: [
      { title: "Binary Tree: Struct in C++, construction, height, diameter, level count", resources: [
        { name: "LeetCode: Binary Tree Card", url: "https://leetcode.com/explore/learn/card/data-structure-tree/" },
        { name: "VisuAlgo: Binary Search Tree", url: "https://visualgo.net/en/bst" }
      ]},
      { title: "DFS Traversals: Recursive & Iterative (Inorder, Preorder, Postorder)", resources: [
        { name: "GFG: Tree Traversals", url: "https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/" },
        { name: "LeetCode: Binary Tree Inorder Traversal", url: "https://leetcode.com/problems/binary-tree-inorder-traversal/" }
      ]},
      { title: "BFS / Level Order: queue-based traversal, zigzag, right side view", resources: [
        { name: "NeetCode: Level Order Traversal", url: "https://www.youtube.com/watch?v=6ZnyEApgFYg" },
        { name: "LeetCode: Binary Tree Level Order Traversal", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" }
      ]},
      { title: "BST Operations: Search, Insert, Delete — and BST validation", resources: [
        { name: "LeetCode: Validate BST", url: "https://leetcode.com/problems/validate-binary-search-tree/" },
        { name: "VisuAlgo: BST", url: "https://visualgo.net/en/bst" }
      ]},
      { title: "Classic Tree Problems: Lowest Common Ancestor, Diameter, Max Path Sum", resources: [
        { name: "NeetCode: Trees Playlist", url: "https://www.youtube.com/playlist?list=PLot-Xpze53ldg4pN6PfzoJY57_iiFqcc" },
        { name: "LeetCode: Tree Tag", url: "https://leetcode.com/tag/tree/" }
      ]},
      { title: "Segment Trees: Build, Point Update, Range Query — O(log n) operations", resources: [
        { name: "CP-Algorithms: Segment Tree", url: "https://cp-algorithms.com/data_structures/segment_tree.html" },
        { name: "Codeforces Blog: Segment Tree Tutorial", url: "https://codeforces.com/blog/entry/18051" }
      ]},
      { title: "Binary Indexed Tree (Fenwick Tree): prefix sums with updates in O(log n)", resources: [
        { name: "CP-Algorithms: Fenwick Tree", url: "https://cp-algorithms.com/data_structures/fenwick.html" },
        { name: "GeeksforGeeks: BIT", url: "https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/" }
      ]},
      { title: "Heaps: Max-heap/Min-heap, heapify, heap sort — priority_queue in C++", resources: [
        { name: "VisuAlgo: Binary Heap", url: "https://visualgo.net/en/heap" },
        { name: "LeetCode: Heap Problems", url: "https://leetcode.com/tag/heap-priority-queue/" }
      ]},
      { title: "Heap Problems: K Largest Elements, Merge K Sorted Lists, Task Scheduler", resources: [
        { name: "NeetCode: Heap / Priority Queue Playlist", url: "https://www.youtube.com/playlist?list=PLot-Xpze53lc7rxhZ1ICIjkM6I9XlRFhR" },
        { name: "LeetCode: Top K Frequent Elements", url: "https://leetcode.com/problems/top-k-frequent-elements/" }
      ]},
      { title: "Tries: Implement from scratch, Word Search, Auto-complete, Word Dictionary", resources: [
        { name: "NeetCode: Trie Explained", url: "https://www.youtube.com/watch?v=oobqoCJlHA0" },
        { name: "LeetCode: Implement Trie", url: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
        { name: "LeetCode: Word Search II", url: "https://leetcode.com/problems/word-search-ii/" }
      ]}
    ]
  },
  {
    id: "dsa-7", title: "Graphs — BFS, DFS, Union-Find & Shortest Paths",
    description: "The hardest topic for most. Master it and you unlock every elite interview problem.",
    estimatedWeeks: 3, badge: "🕸️",
    topics: [
      { title: "Graph Representations: Adjacency List, Matrix, Edge List — build in C++", resources: [
        { name: "CP-Algorithms: Graph Representations", url: "https://cp-algorithms.com/graph/breadth-first-search.html" },
        { name: "Khan Academy: Graph Representation", url: "https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs" }
      ]},
      { title: "BFS: Level traversal, Shortest Path (unweighted), Multi-source BFS", resources: [
        { name: "VisuAlgo: Graph BFS", url: "https://visualgo.net/en/dfsbfs" },
        { name: "CP-Algorithms: BFS", url: "https://cp-algorithms.com/graph/breadth-first-search.html" },
        { name: "LeetCode: Rotting Oranges", url: "https://leetcode.com/problems/rotting-oranges/" }
      ]},
      { title: "DFS: Connected Components, Cycle Detection (directed & undirected), Islands", resources: [
        { name: "NeetCode: Number of Islands", url: "https://www.youtube.com/watch?v=pV2kpPD66nE" },
        { name: "LeetCode: Number of Islands", url: "https://leetcode.com/problems/number-of-islands/" },
        { name: "CP-Algorithms: DFS", url: "https://cp-algorithms.com/graph/depth-first-search.html" }
      ]},
      { title: "Topological Sort: Kahn's Algorithm (BFS) & DFS-based — Course Schedule", resources: [
        { name: "NeetCode: Course Schedule (Topological Sort)", url: "https://www.youtube.com/watch?v=EgI5nU9etnU" },
        { name: "LeetCode: Course Schedule II", url: "https://leetcode.com/problems/course-schedule-ii/" },
        { name: "CP-Algorithms: Topological Sort", url: "https://cp-algorithms.com/graph/topological-sort.html" }
      ]},
      { title: "Union-Find (DSU): union by rank, path compression — Redundant Connection", resources: [
        { name: "CP-Algorithms: DSU", url: "https://cp-algorithms.com/data_structures/disjoint_set_union.html" },
        { name: "NeetCode: Union Find Explained", url: "https://www.youtube.com/watch?v=ayW5B2W9hfo" },
        { name: "LeetCode: Redundant Connection", url: "https://leetcode.com/problems/redundant-connection/" }
      ]},
      { title: "Minimum Spanning Tree: Kruskal's (with DSU) & Prim's Algorithm", resources: [
        { name: "CP-Algorithms: MST - Kruskal's", url: "https://cp-algorithms.com/graph/mst_kruskal.html" },
        { name: "VisuAlgo: Minimum Spanning Tree", url: "https://visualgo.net/en/mst" },
        { name: "CSES: Building Roads", url: "https://cses.fi/problemset/task/1666" }
      ]},
      { title: "Dijkstra's Algorithm: single-source shortest path, priority queue implementation", resources: [
        { name: "CP-Algorithms: Dijkstra's", url: "https://cp-algorithms.com/graph/dijkstra.html" },
        { name: "Computerphile: Dijkstra's (Video)", url: "https://www.youtube.com/watch?v=GazC3A4OQTE" },
        { name: "LeetCode: Network Delay Time", url: "https://leetcode.com/problems/network-delay-time/" }
      ]},
      { title: "Bellman-Ford & SPFA: negative weights, negative cycle detection", resources: [
        { name: "CP-Algorithms: Bellman-Ford", url: "https://cp-algorithms.com/graph/bellman_ford.html" },
        { name: "GeeksforGeeks: Bellman-Ford", url: "https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/" }
      ]},
      { title: "Floyd-Warshall: all-pairs shortest paths, transitive closure", resources: [
        { name: "CP-Algorithms: Floyd-Warshall", url: "https://cp-algorithms.com/graph/all-pair-shortest-path-floyd-warshall.html" },
        { name: "LeetCode: Find the City (Floyd-Warshall)", url: "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/" }
      ]},
      { title: "Boss Battle: Complete NeetCode 150 Graphs + 20 CSES Graph Problems", resources: [
        { name: "NeetCode 150: Graphs", url: "https://neetcode.io/practice" },
        { name: "CSES: Graph Algorithms", url: "https://cses.fi/problemset/list/" },
        { name: "Codeforces: Graphs Tag", url: "https://codeforces.com/problemset?tags=graphs" }
      ]}
    ]
  },
  {
    id: "dsa-8", title: "Dynamic Programming I — The Art of DP",
    description: "The make-or-break skill for FAANG interviews. Go from zero to confident on DP systematically.",
    estimatedWeeks: 3, badge: "💎",
    topics: [
      { title: "DP Philosophy: Optimal Substructure + Overlapping Subproblems, Top-Down vs Bottom-Up", resources: [
        { name: "NeetCode: DP for Beginners", url: "https://www.youtube.com/watch?v=73r3KWiEvyk" },
        { name: "FreeCodeCamp: DP Explained", url: "https://www.freecodecamp.org/news/demystifying-dynamic-programming-3efafb8d4296/" }
      ]},
      { title: "1D DP: Fibonacci, Climbing Stairs, House Robber, Min Cost Climbing Stairs", resources: [
        { name: "LeetCode: Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/" },
        { name: "LeetCode: House Robber", url: "https://leetcode.com/problems/house-robber/" },
        { name: "NeetCode: 1D DP Playlist", url: "https://www.youtube.com/playlist?list=PLot-Xpze53leavjnIai9le35esHs0XBIZ" }
      ]},
      { title: "1D DP Hard: House Robber II (circular), Decode Ways, Longest Palindromic Substring", resources: [
        { name: "LeetCode: House Robber II", url: "https://leetcode.com/problems/house-robber-ii/" },
        { name: "LeetCode: Decode Ways", url: "https://leetcode.com/problems/decode-ways/" }
      ]},
      { title: "2D DP: Unique Paths, Min Path Sum — grid DP pattern", resources: [
        { name: "LeetCode: Unique Paths", url: "https://leetcode.com/problems/unique-paths/" },
        { name: "LeetCode: Minimum Path Sum", url: "https://leetcode.com/problems/minimum-path-sum/" }
      ]},
      { title: "0/1 Knapsack: classic formulation, subset sum, partition equal subset", resources: [
        { name: "GFG: 0/1 Knapsack Problem", url: "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/" },
        { name: "LeetCode: Partition Equal Subset Sum", url: "https://leetcode.com/problems/partition-equal-subset-sum/" },
        { name: "NeetCode: Knapsack Video", url: "https://www.youtube.com/watch?v=nLmhmB6NzcM" }
      ]},
      { title: "Unbounded Knapsack: Coin Change, Coin Change II, Rod Cutting", resources: [
        { name: "LeetCode: Coin Change", url: "https://leetcode.com/problems/coin-change/" },
        { name: "LeetCode: Coin Change II", url: "https://leetcode.com/problems/coin-change-ii/" }
      ]},
      { title: "Longest Common Subsequence & Edit Distance: 2D DP on strings", resources: [
        { name: "LeetCode: LCS", url: "https://leetcode.com/problems/longest-common-subsequence/" },
        { name: "LeetCode: Edit Distance", url: "https://leetcode.com/problems/edit-distance/" },
        { name: "NeetCode: Edit Distance Explained", url: "https://www.youtube.com/watch?v=XYi2-LPrwm4" }
      ]},
      { title: "Longest Increasing Subsequence (LIS): O(n²) DP and O(n log n) binary search", resources: [
        { name: "LeetCode: LIS Problem", url: "https://leetcode.com/problems/longest-increasing-subsequence/" },
        { name: "CP-Algorithms: LIS", url: "https://cp-algorithms.com/sequences/longest_increasing_subsequence.html" }
      ]},
      { title: "DP on Intervals: Burst Balloons, Palindromic Substrings, MCM", resources: [
        { name: "LeetCode: Burst Balloons", url: "https://leetcode.com/problems/burst-balloons/" },
        { name: "GFG: Matrix Chain Multiplication", url: "https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/" }
      ]},
      { title: "Boss Battle: Complete NeetCode 150 — 1D DP + 2D DP sections (23 problems)", resources: [
        { name: "NeetCode 150: 1D DP", url: "https://neetcode.io/practice" },
        { name: "NeetCode 150: 2D DP", url: "https://neetcode.io/practice" },
        { name: "CSES: Dynamic Programming", url: "https://cses.fi/problemset/list/" }
      ]}
    ]
  },
  {
    id: "dsa-9", title: "Advanced Algorithms — Greedy, Advanced DP & Strings",
    description: "Greedy proofs, bitmask DP, advanced string algorithms. This is where experts are made.",
    estimatedWeeks: 3, badge: "🏹",
    topics: [
      { title: "Greedy Algorithm Design: Exchange Arguments, proving optimality", resources: [
        { name: "MIT 6.006: Greedy Algorithms Lecture", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/" },
        { name: "Brilliant: Greedy Algorithms", url: "https://brilliant.org/wiki/greedy-algorithm/" }
      ]},
      { title: "Greedy Classics: Activity Selection, Jump Game, Gas Station, Job Scheduling", resources: [
        { name: "LeetCode: Jump Game", url: "https://leetcode.com/problems/jump-game/" },
        { name: "LeetCode: Gas Station", url: "https://leetcode.com/problems/gas-station/" },
        { name: "NeetCode: Greedy Playlist", url: "https://www.youtube.com/playlist?list=PLot-Xpze53le2An1NL35MYdRJFfvuM7cO" }
      ]},
      { title: "Bitmask DP: Travelling Salesman Problem, Counting Paths through all nodes", resources: [
        { name: "CP-Algorithms: Bitmask DP", url: "https://cp-algorithms.com/dynamic_programming/profile-dynamics.html" },
        { name: "Codeforces Blog: Bitmask DP", url: "https://codeforces.com/blog/entry/47094" }
      ]},
      { title: "DP on Trees: Rerooting technique, diameter, max independent set on tree", resources: [
        { name: "CP-Algorithms: DP on Trees", url: "https://cp-algorithms.com/graph/tree_painting.html" },
        { name: "Codeforces Blog: DP on Trees", url: "https://codeforces.com/blog/entry/20935" }
      ]},
      { title: "String Algorithms: KMP Pattern Matching — O(n+m) search", resources: [
        { name: "CP-Algorithms: KMP", url: "https://cp-algorithms.com/string/kmp.html" },
        { name: "GFG: KMP Algorithm", url: "https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/" }
      ]},
      { title: "Z-Algorithm & Rabin-Karp: alternative string matching approaches", resources: [
        { name: "CP-Algorithms: Z-Algorithm", url: "https://cp-algorithms.com/string/z-function.html" },
        { name: "CP-Algorithms: Rabin-Karp", url: "https://cp-algorithms.com/string/rabin-karp.html" }
      ]},
      { title: "Trie Advanced: Aho-Corasick, Suffix Array, Suffix Automaton (concepts)", resources: [
        { name: "CP-Algorithms: Aho-Corasick", url: "https://cp-algorithms.com/string/aho_corasick.html" },
        { name: "CP-Algorithms: Suffix Array", url: "https://cp-algorithms.com/string/suffix-array.html" }
      ]},
      { title: "Segment Tree with Lazy Propagation: range updates, range queries", resources: [
        { name: "CP-Algorithms: Segment Tree Lazy", url: "https://cp-algorithms.com/data_structures/segment_tree.html" },
        { name: "Codeforces Blog: Lazy Propagation", url: "https://codeforces.com/blog/entry/18051" }
      ]},
      { title: "Sparse Table: Range Minimum Query (RMQ) in O(1) query, O(n log n) build", resources: [
        { name: "CP-Algorithms: Sparse Table", url: "https://cp-algorithms.com/data_structures/sparse-table.html" },
        { name: "CSES: Range Minimum Queries Problem", url: "https://cses.fi/problemset/task/1647" }
      ]},
      { title: "Divide and Conquer Optimization: DP with Divide & Conquer optimization trick", resources: [
        { name: "CP-Algorithms: D&C Optimization", url: "https://cp-algorithms.com/dynamic_programming/divide-and-conquer-dp.html" },
        { name: "Codeforces Blog: Optimization Techniques", url: "https://codeforces.com/blog/entry/8219" }
      ]}
    ]
  },
  {
    id: "dsa-10", title: "Interview Mastery & Competitive Programming",
    description: "The final boss. Simulate real interviews, conquer hard problems, and walk into any FAANG confident.",
    estimatedWeeks: 4, badge: "👑",
    topics: [
      { title: "Interview Framework: how to approach any problem — 5-step method", resources: [
        { name: "Tech Interview Handbook: Interview Strategy", url: "https://www.techinterviewhandbook.org/coding-interview-techniques/" },
        { name: "NeetCode: How to Solve Any Problem", url: "https://www.youtube.com/watch?v=aClxtDcdpsQ" }
      ]},
      { title: "Hard Graph Problems: Alien Dictionary, Critical Connections, Swim in Water", resources: [
        { name: "LeetCode: Alien Dictionary", url: "https://leetcode.com/problems/alien-dictionary/" },
        { name: "LeetCode: Critical Connections", url: "https://leetcode.com/problems/critical-connections-in-a-network/" }
      ]},
      { title: "Hard DP Problems: Regular Expression Matching, Wildcard Matching, Best Time to Buy & Sell IV", resources: [
        { name: "LeetCode: Regular Expression Matching", url: "https://leetcode.com/problems/regular-expression-matching/" },
        { name: "LeetCode: Best Time to Buy IV", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/" }
      ]},
      { title: "Competitive Programming Contests: Codeforces Div 2 A-D, AtCoder Beginner Contests", resources: [
        { name: "Codeforces: Contests", url: "https://codeforces.com/contests" },
        { name: "AtCoder: Beginner Contests", url: "https://atcoder.jp/contests/" },
        { name: "CSES: Full Problem Set", url: "https://cses.fi/problemset/" }
      ]},
      { title: "Mock Interview Practice: untimed then timed — Pramp, Interviewing.io", resources: [
        { name: "Pramp: Free Peer Interviews", url: "https://www.pramp.com/" },
        { name: "Interviewing.io: Anonymous Mock Interviews", url: "https://interviewing.io/" }
      ]},
      { title: "Complete NeetCode 150: finish all remaining sections", resources: [
        { name: "NeetCode 150 Full List", url: "https://neetcode.io/practice" },
        { name: "Grind 75 (75 essential problems)", url: "https://www.techinterviewhandbook.org/grind75" }
      ]},
      { title: "System Design for SDEs: URL Shortener, Parking Lot, Rate Limiter", resources: [
        { name: "ByteByteGo: System Design", url: "https://www.youtube.com/@ByteByteGo" },
        { name: "GitHub: System Design Primer", url: "https://github.com/donnemartin/system-design-primer" }
      ]},
      { title: "Advanced C++ for Interviews: move semantics, smart pointers, templates basics", resources: [
        { name: "CPP Reference: Move Semantics", url: "https://en.cppreference.com/w/cpp/language/move_constructor" },
        { name: "Back to Basics: Smart Pointers (CppCon)", url: "https://www.youtube.com/watch?v=YokY6HzLkXs" }
      ]},
      { title: "Competitive Programming Resources: CLRS, CP Handbook, Competitive Programmer's Handbook", resources: [
        { name: "Competitive Programmer's Handbook (Free PDF)", url: "https://cses.fi/book/book.pdf" },
        { name: "CP-Algorithms Encyclopedia", url: "https://cp-algorithms.com/" },
        { name: "USACO Guide", url: "https://usaco.guide/" }
      ]},
      { title: "Final Boss: 5 Mock Interviews + Review All Weak Areas + DSA Portfolio", resources: [
        { name: "LeetCode: Company-Tagged Problems", url: "https://leetcode.com/problemset/" },
        { name: "NeetCode: Full Roadmap Review", url: "https://neetcode.io/roadmap" },
        { name: "Build your DSA Notes Repository on GitHub", url: "https://github.com/" }
      ]}
    ]
  }
];

// ═══════════════════════════════════════════════════════════════════════
//  ACHIEVEMENTS SYSTEM
// ═══════════════════════════════════════════════════════════════════════
const ACHIEVEMENTS = [
  { id: "first_blood", icon: "🩸", name: "First Blood", desc: "Complete your very first quest.", condition: s => Object.keys(s.completedQuests).length >= 1 },
  { id: "bookworm", icon: "📚", name: "Bookworm", desc: "Complete 10 quests.", condition: s => Object.keys(s.completedQuests).length >= 10 },
  { id: "grinder", icon: "⚙️", name: "The Grinder", desc: "Complete 25 quests.", condition: s => Object.keys(s.completedQuests).length >= 25 },
  { id: "century", icon: "💯", name: "Centurion", desc: "Complete 50 quests.", condition: s => Object.keys(s.completedQuests).length >= 50 },
  { id: "dedicated", icon: "🎖️", name: "Dedicated", desc: "Complete 100 quests.", condition: s => Object.keys(s.completedQuests).length >= 100 },
  { id: "month_champ", icon: "🏆", name: "Month Champion", desc: "Complete any full month.", condition: s => completedAnyMonth(s) },
  { id: "half_sde", icon: "🛤️", name: "Halfway There", desc: "Complete 6 SDE months.", condition: s => countCompletedMonths(s, roadmapData) >= 6 },
  { id: "sde_complete", icon: "🚀", name: "SDE Graduate", desc: "Complete all 12 SDE months.", condition: s => countCompletedMonths(s, roadmapData) >= 12 },
  { id: "dsa_initiate", icon: "⚡", name: "DSA Initiate", desc: "Complete DSA Month 1 (C++ Foundations).", condition: s => isMonthComplete(s, "dsa-1", dsaRoadmapData) },
  { id: "cpp_master", icon: "🔧", name: "C++ Craftsman", desc: "Complete both C++ months.", condition: s => isMonthComplete(s, "dsa-1", dsaRoadmapData) && isMonthComplete(s, "dsa-2", dsaRoadmapData) },
  { id: "algo_adept", icon: "🧮", name: "Algorithm Adept", desc: "Complete 5 DSA months.", condition: s => countCompletedMonths(s, dsaRoadmapData) >= 5 },
  { id: "graph_god", icon: "🕸️", name: "Graph God", desc: "Complete the Graphs DSA month.", condition: s => isMonthComplete(s, "dsa-7", dsaRoadmapData) },
  { id: "dp_wizard", icon: "💎", name: "DP Wizard", desc: "Complete the Dynamic Programming month.", condition: s => isMonthComplete(s, "dsa-8", dsaRoadmapData) },
  { id: "dsa_complete", icon: "👑", name: "DSA Master", desc: "Complete all 10 DSA months.", condition: s => countCompletedMonths(s, dsaRoadmapData) >= 10 },
  { id: "legend", icon: "🌟", name: "Legend", desc: "Complete ALL months on both tracks.", condition: s => countCompletedMonths(s, roadmapData) >= 12 && countCompletedMonths(s, dsaRoadmapData) >= 10 },
  { id: "streak_7", icon: "🔥", name: "On Fire", desc: "Maintain a 7-day streak.", condition: s => (s.streak || 0) >= 7 },
  { id: "streak_30", icon: "🌋", name: "Unstoppable", desc: "Maintain a 30-day streak.", condition: s => (s.streak || 0) >= 30 },
  { id: "level_5", icon: "⭐", name: "Rising Star", desc: "Reach Level 5.", condition: s => s.level >= 5 },
  { id: "level_10", icon: "🌠", name: "Senior Engineer", desc: "Reach Level 10.", condition: s => s.level >= 10 },
];

function completedAnyMonth(s) {
  return [...roadmapData, ...dsaRoadmapData].some(month => isMonthComplete(s, month.id, [...roadmapData, ...dsaRoadmapData]));
}

function isMonthComplete(s, monthId, data) {
  const month = data.find(m => String(m.id) === String(monthId));
  if (!month) return false;
  return month.topics.every((_, q) => s.completedQuests[`${monthId}-${q}`]);
}

function countCompletedMonths(s, data) {
  return data.filter(m => isMonthComplete(s, m.id, data)).length;
}

// ═══════════════════════════════════════════════════════════════════════
//  FIREBASE CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════
const firebaseConfig = {
  apiKey: "AIzaSyCPOVNgif3smdzyX5I_Du2Q0bXknssrEto",
  authDomain: "sde-levelling.firebaseapp.com",
  projectId: "sde-levelling",
  storageBucket: "sde-levelling.firebasestorage.app",
  messagingSenderId: "30870143922",
  appId: "1:30870143922:web:96940f660b446b471fdaab"
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// ═══════════════════════════════════════════════════════════════════════
//  CONSTANTS
// ═══════════════════════════════════════════════════════════════════════
const SDE_XP_PER_QUEST = 50;
const DSA_XP_PER_QUEST = 65;
const BASE_XP_REQUIREMENT = 500;
const LEVEL_TITLES = [
  "Novice Coder", "Script Kiddie", "Array Warrior", "Recursion Knight",
  "Linked List Slayer", "Tree Climber", "Graph Traverser", "DP Acolyte",
  "System Architect", "Cloud Voyager", "Senior SDE", "Principal Engineer",
  "Software Grandmaster"
];

// ═══════════════════════════════════════════════════════════════════════
//  STATE — factory function so we always get a clean copy
// ═══════════════════════════════════════════════════════════════════════
function defaultState() {
  return {
    xp: 0, level: 1,
    completedQuests: {},
    unlockedMonths: [1],
    unlockedDsaMonths: ["dsa-1"],
    achievements: [],
    streak: 0,
    lastActivityDate: null
  };
}

let playerState = defaultState();

let currentUser = null;
let isLoginMode = true;
let currentTab = 'sde';
let currentOpenMonthId = null;
let currentOpenTrack = 'sde';

// ═══════════════════════════════════════════════════════════════════════
//  DOM REFS
// ═══════════════════════════════════════════════════════════════════════
const sdeContainer     = document.getElementById('sde-roadmap-container');
const dsaContainer     = document.getElementById('dsa-roadmap-container');
const levelEl          = document.getElementById('player-level');
const titleEl          = document.getElementById('player-title');
const currentXpEl      = document.getElementById('current-xp');
const nextXpEl         = document.getElementById('next-level-xp');
const xpBarFillEl      = document.getElementById('xp-bar-fill');
const streakCountEl    = document.getElementById('streak-count');
const streakBadge      = document.getElementById('streak-badge');

const modal            = document.getElementById('quest-modal');
const closeModalBtn    = document.querySelector('.close-modal');
const modalTitle       = document.getElementById('modal-title');
const modalDesc        = document.getElementById('modal-desc');
const questList        = document.getElementById('quest-list');
const modalProgressText= document.getElementById('modal-progress-text');
const modalProgressFill= document.getElementById('modal-progress-fill');
const modalTrackBadge  = document.getElementById('modal-track-badge');
const modalTimeEstimate= document.getElementById('modal-time-estimate');
const modalXpTotal     = document.getElementById('modal-xp-total');
const resetBtn         = document.getElementById('reset-btn');

const achievementsBtn  = document.getElementById('achievements-btn');
const achievementsModal= document.getElementById('achievements-modal');
const achievementsGrid = document.getElementById('achievements-grid');
const closeAchBtn      = document.querySelector('.close-achievements');
const newAchDot        = document.getElementById('new-achievement-dot');

const authBtn          = document.getElementById('auth-btn');
const logoutBtn        = document.getElementById('logout-btn');
const userInfo         = document.getElementById('user-info');
const userEmailSpan    = document.getElementById('user-email');
const authModal        = document.getElementById('auth-modal');
const closeAuthBtn     = document.querySelector('.close-auth');
const authSubmitBtn    = document.getElementById('auth-submit');
const authToggleBtn    = document.getElementById('auth-toggle-btn');
const authToggleTextEl = document.getElementById('auth-toggle-text');
const authEmailInput   = document.getElementById('auth-email');
const authPasswordInput= document.getElementById('auth-password');
const authModalTitle   = document.getElementById('auth-modal-title');
const authErrorMsg     = document.getElementById('auth-error-msg');

const levelUpNotif     = document.getElementById('level-up-notification');
const notifyLevel      = document.getElementById('notify-level');
const notifyTitle      = document.getElementById('notify-title');
const achievementNotif = document.getElementById('achievement-notification');
const notifAchIcon     = document.getElementById('notif-achievement-icon');
const notifAchName     = document.getElementById('notif-achievement-name');

// Tab elements
const tabBtns          = document.querySelectorAll('.tab-btn');
const tabContents      = document.querySelectorAll('.tab-content');

// ═══════════════════════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════════════════════
function init() {
  // Start with zeroed state — populated only when user logs in
  updateStreakUI();
  renderBothRoadmaps();
  updatePlayerStatsUI();
  updateTrackStats();
  renderAchievements();

  auth.onAuthStateChanged(async user => {
    if (user) {
      // ── LOGGED IN ──
      currentUser = user;
      userInfo.style.display  = 'flex';
      userEmailSpan.innerText = user.email.split('@')[0];
      authBtn.style.display   = 'none';
      logoutBtn.style.display = 'inline-block';
      await fetchCloudProgress(); // restore their progress from cloud
    } else {
      // ── LOGGED OUT — ALWAYS reset to zero ──
      currentUser = null;
      userInfo.style.display  = 'none';
      authBtn.style.display   = 'inline-block';
      logoutBtn.style.display = 'none';
      playerState = defaultState(); // wipe everything to zero
      renderBothRoadmaps();
      updatePlayerStatsUI();
      updateTrackStats();
      updateStreakUI();
      renderAchievements();
    }
  });

  // Tab switching
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Modals
  closeModalBtn.addEventListener('click', closeModal);
  closeAchBtn.addEventListener('click', () => achievementsModal.classList.remove('show'));
  closeAuthBtn.addEventListener('click', () => authModal.classList.remove('show'));

  window.addEventListener('click', e => {
    if (e.target === modal) closeModal();
    if (e.target === achievementsModal) achievementsModal.classList.remove('show');
    if (e.target === authModal) authModal.classList.remove('show');
  });

  resetBtn.addEventListener('click', resetProgress);
  achievementsBtn.addEventListener('click', () => { achievementsModal.classList.add('show'); newAchDot.style.display = 'none'; });
  authBtn.addEventListener('click', () => { authErrorMsg.style.display = 'none'; authModal.classList.add('show'); });
  // Logout — just sign out. onAuthStateChanged handles the state reset automatically.
  logoutBtn.addEventListener('click', () => auth.signOut());

  authToggleBtn.addEventListener('click', toggleAuthMode);
  authSubmitBtn.addEventListener('click', handleAuthSubmit);

  // Enter key submits auth form
  [authEmailInput, authPasswordInput].forEach(input => {
    input.addEventListener('keydown', e => { if (e.key === 'Enter') handleAuthSubmit(); });
  });

  // Clear error when user starts typing
  [authEmailInput, authPasswordInput].forEach(input => {
    input.addEventListener('input', () => { authErrorMsg.style.display = 'none'; });
  });

  // Forgot password link
  const forgotBtn = document.getElementById('forgot-password-btn');
  if (forgotBtn) forgotBtn.addEventListener('click', handleForgotPassword);
}

function switchTab(tab) {
  currentTab = tab;
  tabBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  tabContents.forEach(c => c.classList.toggle('active', c.id === `tab-${tab}`));
}

// ═══════════════════════════════════════════════════════════════════════
//  STORAGE
// ═══════════════════════════════════════════════════════════════════════
function saveProgress() {
  // Cloud-only saving. No localStorage = logout truly means zero.
  if (currentUser) {
    db.collection('userProgress').doc(currentUser.uid).set(playerState)
      .catch(err => console.error("Cloud save failed:", err));
  }
}

// loadProgress removed — fetchCloudProgress() handles all state loading.
// State starts at defaultState() and is only populated on login.

function ensureDefaults() {
  if (!playerState.unlockedMonths) playerState.unlockedMonths = [1];
  if (!playerState.unlockedDsaMonths) playerState.unlockedDsaMonths = ["dsa-1"];
  if (!playerState.achievements) playerState.achievements = [];
  if (!playerState.streak) playerState.streak = 0;
}

function resetProgress() {
  if (!confirm("Reset ALL progress? This cannot be undone.")) return;
  playerState = defaultState();
  saveProgress(); // clears cloud doc too
  renderBothRoadmaps();
  updatePlayerStatsUI();
  updateTrackStats();
  renderAchievements();
  updateStreakUI();
}

async function fetchCloudProgress() {
  try {
    const doc = await db.collection('userProgress').doc(currentUser.uid).get();
    if (doc.exists) {
      playerState = { ...defaultState(), ...doc.data() }; // always merge into fresh defaults
    } else {
      playerState = defaultState(); // brand new user
      saveProgress(); // save initial state to Firestore
    }
    ensureDefaults();
    updateStreak(); // check if streak broke while they were away
    checkUnlocks();
    renderBothRoadmaps();
    updatePlayerStatsUI();
    updateTrackStats();
    updateStreakUI();
    renderAchievements();
  } catch(e) {
    console.error("Failed to fetch cloud progress:", e);
  }
}

// ═══════════════════════════════════════════════════════════════════════
//  STREAK SYSTEM
// ═══════════════════════════════════════════════════════════════════════
function updateStreak() {
  const today = new Date().toDateString();
  const last = playerState.lastActivityDate;
  if (!last) return;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (last === today) return; // already counted today
  if (last === yesterday) {
    // Keep streak alive (will increment on next quest complete)
    return;
  }
  // Streak broken
  if (last !== today && last !== yesterday) {
    playerState.streak = 0;
  }
}

function recordActivity() {
  const today = new Date().toDateString();
  const last = playerState.lastActivityDate;
  if (last === today) return; // already active today
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (!last || last === yesterday) {
    playerState.streak = (playerState.streak || 0) + 1;
  } else if (last !== today) {
    playerState.streak = 1;
  }
  playerState.lastActivityDate = today;
  updateStreakUI();
}

function updateStreakUI() {
  const streak = playerState.streak || 0;
  streakCountEl.innerText = streak;
  if (streak === 0) streakBadge.classList.add('streak-zero');
  else streakBadge.classList.remove('streak-zero');
}

// ═══════════════════════════════════════════════════════════════════════
//  LEVEL & XP LOGIC
// ═══════════════════════════════════════════════════════════════════════
function getRequiredXP(level) { return Math.floor(BASE_XP_REQUIREMENT * Math.pow(1.6, level - 1)); }
function getTitle(level) { return LEVEL_TITLES[Math.min(level - 1, LEVEL_TITLES.length - 1)]; }

function checkLevelUp() {
  while (playerState.xp >= getRequiredXP(playerState.level)) {
    playerState.level++;
    showLevelUpNotification();
  }
}

function showLevelUpNotification() {
  notifyLevel.innerText = playerState.level;
  notifyTitle.innerText = getTitle(playerState.level);
  levelUpNotif.classList.add('show');
  setTimeout(() => levelUpNotif.classList.remove('show'), 3000);
}

// ═══════════════════════════════════════════════════════════════════════
//  UNLOCK LOGIC
// ═══════════════════════════════════════════════════════════════════════
function checkUnlocks() {
  // SDE months
  playerState.unlockedMonths = [1];
  for (let i = 0; i < roadmapData.length; i++) {
    const month = roadmapData[i];
    if (isMonthComplete(playerState, month.id, roadmapData) && month.id < roadmapData.length) {
      if (!playerState.unlockedMonths.includes(month.id + 1))
        playerState.unlockedMonths.push(month.id + 1);
    } else break;
  }

  // DSA months — first one always unlocked, each unlocks next
  playerState.unlockedDsaMonths = ["dsa-1"];
  for (let i = 0; i < dsaRoadmapData.length; i++) {
    const month = dsaRoadmapData[i];
    if (isMonthComplete(playerState, month.id, dsaRoadmapData) && i < dsaRoadmapData.length - 1) {
      const nextId = dsaRoadmapData[i + 1].id;
      if (!playerState.unlockedDsaMonths.includes(nextId))
        playerState.unlockedDsaMonths.push(nextId);
    } else break;
  }
}

// ═══════════════════════════════════════════════════════════════════════
//  ACHIEVEMENTS
// ═══════════════════════════════════════════════════════════════════════
function checkAchievements() {
  let newlyUnlocked = [];
  ACHIEVEMENTS.forEach(ach => {
    if (!playerState.achievements.includes(ach.id) && ach.condition(playerState)) {
      playerState.achievements.push(ach.id);
      newlyUnlocked.push(ach);
    }
  });
  if (newlyUnlocked.length > 0) {
    showAchievementNotification(newlyUnlocked[0]);
    newAchDot.style.display = 'block';
  }
  renderAchievements();
}

let achNotifQueue = [];
let achNotifShowing = false;
function showAchievementNotification(ach) {
  achNotifQueue.push(ach);
  if (!achNotifShowing) processAchNotifQueue();
}
function processAchNotifQueue() {
  if (achNotifQueue.length === 0) { achNotifShowing = false; return; }
  achNotifShowing = true;
  const ach = achNotifQueue.shift();
  notifAchIcon.innerText = ach.icon;
  notifAchName.innerText = ach.name;
  achievementNotif.classList.add('show');
  setTimeout(() => {
    achievementNotif.classList.remove('show');
    setTimeout(() => processAchNotifQueue(), 400);
  }, 3000);
}

function renderAchievements() {
  achievementsGrid.innerHTML = '';
  ACHIEVEMENTS.forEach(ach => {
    const unlocked = playerState.achievements.includes(ach.id);
    const card = document.createElement('div');
    card.className = `achievement-card ${unlocked ? 'unlocked' : 'locked'}`;
    card.innerHTML = `
      <span class="ach-icon">${ach.icon}</span>
      <div class="ach-name">${ach.name}</div>
      <div class="ach-desc">${ach.desc}</div>
      ${unlocked ? `<div class="ach-unlocked-date">✓ UNLOCKED</div>` : '<div class="ach-unlocked-date" style="color:var(--text-muted)">LOCKED</div>'}
    `;
    achievementsGrid.appendChild(card);
  });
}

// ═══════════════════════════════════════════════════════════════════════
//  UI RENDERING
// ═══════════════════════════════════════════════════════════════════════
function updatePlayerStatsUI() {
  levelEl.innerText = playerState.level;
  titleEl.innerText = getTitle(playerState.level);
  const totalRequired = getRequiredXP(playerState.level);
  const prevRequired = playerState.level === 1 ? 0 : getRequiredXP(playerState.level - 1);
  currentXpEl.innerText = playerState.xp;
  nextXpEl.innerText = totalRequired;
  const range = totalRequired - prevRequired;
  const progress = playerState.xp - prevRequired;
  const pct = Math.min(100, Math.max(0, (progress / range) * 100));
  xpBarFillEl.style.width = `${pct}%`;
}

function updateTrackStats() {
  // SDE stats
  let sdeDone = 0, sdeMonths = 0;
  roadmapData.forEach(m => {
    m.topics.forEach((_, q) => { if (playerState.completedQuests[`${m.id}-${q}`]) sdeDone++; });
    if (isMonthComplete(playerState, m.id, roadmapData)) sdeMonths++;
  });
  const sdeTotal = roadmapData.reduce((a, m) => a + m.topics.length, 0);
  document.getElementById('sde-total-done').innerText = sdeDone;
  document.getElementById('sde-total-quests').innerText = sdeTotal;
  document.getElementById('sde-months-done').innerText = sdeMonths;
  document.getElementById('sde-percent').innerText = Math.round((sdeDone / sdeTotal) * 100) + '%';

  // DSA stats
  let dsaDone = 0, dsaMonths = 0;
  dsaRoadmapData.forEach(m => {
    m.topics.forEach((_, q) => { if (playerState.completedQuests[`${m.id}-${q}`]) dsaDone++; });
    if (isMonthComplete(playerState, m.id, dsaRoadmapData)) dsaMonths++;
  });
  const dsaTotal = dsaRoadmapData.reduce((a, m) => a + m.topics.length, 0);
  document.getElementById('dsa-total-done').innerText = dsaDone;
  document.getElementById('dsa-total-quests').innerText = dsaTotal;
  document.getElementById('dsa-months-done').innerText = dsaMonths;
  document.getElementById('dsa-percent').innerText = Math.round((dsaDone / dsaTotal) * 100) + '%';
}

function renderBothRoadmaps() {
  renderRoadmap(roadmapData, sdeContainer, 'sde');
  renderRoadmap(dsaRoadmapData, dsaContainer, 'dsa');
}

function renderRoadmap(data, container, track) {
  container.innerHTML = '';
  const unlockedList = track === 'sde' ? playerState.unlockedMonths : playerState.unlockedDsaMonths;
  const maxUnlocked = unlockedList.reduce((max, id) => {
    const idx = data.findIndex(m => String(m.id) === String(id));
    return Math.max(max, idx);
  }, 0);

  data.forEach((month, idx) => {
    const isUnlocked = unlockedList.some(u => String(u) === String(month.id));
    const totalQ = month.topics.length;
    let doneQ = 0;
    month.topics.forEach((_, q) => { if (playerState.completedQuests[`${month.id}-${q}`]) doneQ++; });
    const isComplete = doneQ === totalQ;
    const pct = (doneQ / totalQ) * 100;
    const isActive = isUnlocked && !isComplete && idx === maxUnlocked;
    const xpPerQ = track === 'dsa' ? DSA_XP_PER_QUEST : SDE_XP_PER_QUEST;

    const card = document.createElement('div');
    card.className = `month-card ${isUnlocked ? 'unlocked' : 'locked'} ${isComplete ? 'completed' : ''} ${track === 'dsa' ? 'dsa-card' : ''} ${isActive ? 'pulse-glow' : ''}`;
    card.style.animationDelay = `${idx * 0.05}s`;

    const numStr = track === 'sde'
      ? `MONTH ${String(month.id).padStart(2, '0')}`
      : `DSA-${String(idx + 1).padStart(2, '0')}`;

    const iconHtml = isComplete
      ? '<i class="fa-solid fa-circle-check"></i>'
      : (isUnlocked ? '<i class="fa-solid fa-lock-open"></i>' : '<i class="fa-solid fa-lock"></i>');

    card.innerHTML = `
      <div class="card-header">
        <span class="month-number">${numStr}</span>
        ${month.badge ? `<span class="card-badge">${month.badge}</span>` : `<div class="status-icon">${iconHtml}</div>`}
      </div>
      <h3 class="month-title">${month.title}</h3>
      <p class="month-desc">${month.description}</p>
      <div class="card-footer-meta">
        <span class="time-pill"><i class="fa-regular fa-clock"></i> ~${month.estimatedWeeks}w</span>
        <span class="xp-pill"><i class="fa-solid fa-bolt"></i> ${totalQ * xpPerQ} XP</span>
      </div>
      <div class="card-footer">
        <span>${doneQ}/${totalQ} Quests</span>
        <div class="mini-bar-bg"><div class="mini-bar-fill" style="width:${pct}%"></div></div>
      </div>
    `;

    if (isUnlocked) card.addEventListener('click', () => openModal(month.id, track));
    container.appendChild(card);
  });
}

// ═══════════════════════════════════════════════════════════════════════
//  MODAL
// ═══════════════════════════════════════════════════════════════════════
function openModal(monthId, track) {
  currentOpenMonthId = monthId;
  currentOpenTrack = track;
  const data = track === 'dsa' ? dsaRoadmapData : roadmapData;
  const month = data.find(m => String(m.id) === String(monthId));
  const xpPerQ = track === 'dsa' ? DSA_XP_PER_QUEST : SDE_XP_PER_QUEST;

  modalTrackBadge.innerText = track === 'dsa' ? '⚡ DSA TRACK' : '🚀 SDE TRACK';
  modalTrackBadge.className = `modal-track-badge${track === 'dsa' ? ' dsa' : ''}`;
  modalTitle.innerText = month.title;
  modalDesc.innerText = month.description;
  modalTimeEstimate.innerHTML = `<i class="fa-regular fa-clock"></i> ~${month.estimatedWeeks} weeks`;
  modalXpTotal.innerHTML = `<i class="fa-solid fa-bolt"></i> ${month.topics.length * xpPerQ} XP available`;

  renderQuests(month, track);
  modal.classList.add('show');
}

function closeModal() { modal.classList.remove('show'); currentOpenMonthId = null; }

function renderQuests(month, track) {
  questList.innerHTML = '';
  let doneCount = 0;
  const xpPerQ = track === 'dsa' ? DSA_XP_PER_QUEST : SDE_XP_PER_QUEST;

  month.topics.forEach((topicObj, index) => {
    const key = `${month.id}-${index}`;
    const done = !!playerState.completedQuests[key];
    if (done) doneCount++;

    const item = document.createElement('div');
    item.className = `quest-item ${done ? 'completed' : ''} ${track === 'dsa' ? 'dsa-quest' : ''}`;

    let resourcesHtml = '';
    if (topicObj.resources && topicObj.resources.length > 0) {
      const links = topicObj.resources.map(r =>
        `<a href="${r.url}" target="_blank" rel="noopener" class="resource-link" onclick="event.stopPropagation()">
          <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.7rem;"></i> ${r.name}
        </a>`
      ).join('');
      resourcesHtml = `<div class="quest-resources"><div class="resources-title"><i class="fa-solid fa-book-open"></i> Learning Resources</div>${links}</div>`;
    }

    item.innerHTML = `
      <div class="quest-header">
        <div class="quest-checkbox tooltip" title="Mark complete"><i class="fa-solid fa-check"></i></div>
        <div class="quest-content"><div class="quest-title">${topicObj.title}</div></div>
        <div class="quest-meta">
          <span class="quest-xp">+${xpPerQ} XP</span>
          ${resourcesHtml ? '<i class="fa-solid fa-chevron-down expand-icon"></i>' : ''}
        </div>
      </div>
      ${resourcesHtml}
    `;

    item.querySelector('.quest-checkbox').addEventListener('click', e => {
      e.stopPropagation();
      toggleQuest(month.id, index, item, track);
    });
    if (resourcesHtml) {
      item.querySelector('.quest-header').addEventListener('click', () => {
        item.classList.toggle('expanded');
      });
    }

    questList.appendChild(item);
  });

  updateModalProgress(doneCount, month.topics.length);
}

function toggleQuest(monthId, questIndex, el, track) {
  const key = `${monthId}-${questIndex}`;
  const done = !!playerState.completedQuests[key];
  const xpPerQ = track === 'dsa' ? DSA_XP_PER_QUEST : SDE_XP_PER_QUEST;

  if (done) {
    delete playerState.completedQuests[key];
    playerState.xp = Math.max(0, playerState.xp - xpPerQ);
    el.classList.remove('completed');
  } else {
    playerState.completedQuests[key] = true;
    playerState.xp += xpPerQ;
    el.classList.add('completed');
    el.style.transform = 'scale(1.02)';
    setTimeout(() => el.style.transform = '', 200);
    recordActivity();
  }

  checkUnlocks();
  checkLevelUp();
  checkAchievements();
  saveProgress();
  updateStreakUI();

  // Update modal progress bar
  const data = track === 'dsa' ? dsaRoadmapData : roadmapData;
  const month = data.find(m => String(m.id) === String(monthId));
  let cnt = 0;
  month.topics.forEach((_, q) => { if (playerState.completedQuests[`${monthId}-${q}`]) cnt++; });
  updateModalProgress(cnt, month.topics.length);

  updatePlayerStatsUI();
  updateTrackStats();
  renderBothRoadmaps();
}

function updateModalProgress(done, total) {
  modalProgressText.innerText = `${done}/${total} Quests Completed`;
  modalProgressFill.style.width = `${(done / total) * 100}%`;
}

// ═══════════════════════════════════════════════════════════════════════
//  AUTH
// ═══════════════════════════════════════════════════════════════════════
function toggleAuthMode() {
  isLoginMode = !isLoginMode;
  authModalTitle.innerText = isLoginMode ? "Cloud Save" : "Create Account";
  authSubmitBtn.innerText = isLoginMode ? "Log In" : "Sign Up";
  authToggleTextEl.innerText = isLoginMode ? "Don't have an account?" : "Already have an account?";
  authToggleBtn.innerText = isLoginMode ? "Sign Up" : "Log In";
  authErrorMsg.style.display = 'none';
  // Show forgot password only in login mode
  const fp = document.getElementById('forgot-password-row');
  if (fp) fp.style.display = isLoginMode ? '' : 'none';
}

// Maps Firebase error codes → human-readable messages
const AUTH_ERRORS = {
  'auth/invalid-credential':        'Incorrect email or password. Please try again.',
  'auth/user-not-found':            'No account found with this email address.',
  'auth/wrong-password':            'Incorrect password. Please try again.',
  'auth/email-already-in-use':      'An account with this email already exists. Try logging in.',
  'auth/weak-password':             'Password must be at least 6 characters long.',
  'auth/invalid-email':             'Please enter a valid email address.',
  'auth/too-many-requests':         'Too many failed attempts. Please wait a few minutes and try again.',
  'auth/network-request-failed':    'Network error. Please check your internet connection.',
  'auth/user-disabled':             'This account has been disabled. Please contact support.',
  'auth/operation-not-allowed':     'Email/password sign-in is not enabled. Please contact support.',
};

async function handleAuthSubmit() {
  const email = authEmailInput.value.trim();
  const password = authPasswordInput.value;
  if (!email || !password) { showAuthError("Please fill in both fields."); return; }

  authSubmitBtn.innerText = "Processing...";
  authSubmitBtn.disabled = true;
  authErrorMsg.style.display = 'none';

  try {
    if (isLoginMode) {
      await auth.signInWithEmailAndPassword(email, password);
    } else {
      await auth.createUserWithEmailAndPassword(email, password);
    }
    authModal.classList.remove('show');
    authEmailInput.value = '';
    authPasswordInput.value = '';
  } catch(err) {
    const msg = AUTH_ERRORS[err.code] || 'An unexpected error occurred. Please try again.';
    showAuthError(msg);
  } finally {
    authSubmitBtn.innerText = isLoginMode ? "Log In" : "Sign Up";
    authSubmitBtn.disabled = false;
  }
}

async function handleForgotPassword() {
  const email = authEmailInput.value.trim();
  if (!email) { showAuthError("Enter your email address above, then click Forgot Password."); return; }
  try {
    await auth.sendPasswordResetEmail(email);
    showAuthSuccess("Password reset email sent! Check your inbox.");
  } catch(err) {
    const msg = AUTH_ERRORS[err.code] || err.message;
    showAuthError(msg);
  }
}

function showAuthError(msg) {
  authErrorMsg.innerText = msg;
  authErrorMsg.style.color = '';
  authErrorMsg.style.display = 'block';
}

function showAuthSuccess(msg) {
  authErrorMsg.innerText = msg;
  authErrorMsg.style.color = 'var(--success)';
  authErrorMsg.style.display = 'block';
}

// ═══════════════════════════════════════════════════════════════════════
//  BOOT
// ═══════════════════════════════════════════════════════════════════════
init();
