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
        { name: "OverTheWire: Bandit (hands-on Linux)", url: "https://overthewire.org/wargames/bandit/" },
        { name: "💎 Explain Shell — paste any command, get it explained visually", url: "https://explainshell.com/" }
      ]},
      { title: "Git Fundamentals: init, add, commit, log, diff", resources: [
        { name: "GitHub: Git Handbook", url: "https://guides.github.com/introduction/git-handbook/" },
        { name: "Learn Git Branching (Interactive)", url: "https://learngitbranching.js.org/" },
        { name: "Pro Git Book (Free)", url: "https://git-scm.com/book/en/v2" }
      ]},
      { title: "Problem Solving Mindset: Pseudocode & Decomposition", resources: [
        { name: "How to Think Like a Programmer", url: "https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/" },
        { name: "Polya's Problem Solving Techniques", url: "https://math.berkeley.edu/~gmelvin/polya.pdf" },
        { name: "💎 MIT: The Missing Semester of CS Education (CLI, Git, scripting — gold)", url: "https://missing.csail.mit.edu/" },
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
        { name: "Uncle Bob: Clean Code (book)", url: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882" },
        { name: "💎 Kevlin Henney: Seven Ineffective Coding Habits — eye-opening talk (video)", url: "https://www.youtube.com/watch?v=ZsHMHukIlJY" }
      ]},
      { title: "Design Patterns: Singleton, Factory, Observer, Strategy", resources: [
        { name: "Refactoring Guru: Design Patterns (Free)", url: "https://refactoring.guru/design-patterns" },
        { name: "JavaScript Design Patterns", url: "https://www.patterns.dev/vanilla" }
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
        { name: "HackerRank: Strings Domain", url: "https://www.hackerrank.com/domains/algorithms/strings" },
        { name: "Regex101 — Test Regular Expressions", url: "https://regex101.com/" },
        { name: "LeetCode: Top String Problems", url: "https://leetcode.com/tag/string/" }
      ]},
      { title: "Linked Lists: Singly & Doubly (traversal, insertion, deletion)", resources: [
        { name: "VisuAlgo: Linked List", url: "https://visualgo.net/en/list" },
        { name: "LeetCode: Linked List Card", url: "https://leetcode.com/explore/learn/card/linked-list/" },
        { name: "GeeksforGeeks: Linked List", url: "https://www.geeksforgeeks.org/linked-list-data-structure/" }
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
        { name: "MIT 6.006: Complexity Lecture", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/video_galleries/lecture-videos/" },
        { name: "💎 Algorithms by Jeff Erickson — free textbook used at UIUC (chapter 0 for complexity)", url: "https://jeffe.cs.illinois.edu/teaching/algorithms/" }
      ]},
      { title: "Amortized Analysis & when to use which data structure", resources: [
        { name: "MIT: Amortized Analysis", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/pages/lecture-notes/" },
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
        { name: "LeetCode: Recursion I Card", url: "https://leetcode.com/explore/learn/card/recursion-i/" },
        { name: "💎 Computerphile: Programming with Functions + Recursion (4-part series, crystal clear)", url: "https://www.youtube.com/watch?v=IjD3NI_mDY8" }
      ]},
      { title: "Sorting Algorithms: Bubble, Selection, Insertion, Merge, Quick, Heap", resources: [
        { name: "VisuAlgo: Sorting Visualizer", url: "https://visualgo.net/en/sorting" },
        { name: "Sorting Algorithms Animations", url: "https://www.toptal.com/developers/sorting-algorithms" },
        { name: "CS50: Shorts on Sorting", url: "https://cs50.harvard.edu/x/2024/weeks/3/" }
      ]},
      { title: "Searching: Linear Search, Binary Search & its variants", resources: [
        { name: "TopCoder: Binary Search Tutorial", url: "https://www.topcoder.com/thrive/articles/Binary+Search" },
        { name: "LeetCode: Binary Search Card", url: "https://leetcode.com/explore/learn/card/binary-search/" },
        { name: "CP-Algorithms: Binary Search", url: "https://cp-algorithms.com/sequences/binary-search.html" }
      ]},
      { title: "Two Pointers: opposite ends, same direction, fast/slow", resources: [
        { name: "LeetCode: Two Pointers Technique", url: "https://leetcode.com/explore/learn/card/array-and-string/205/array-two-pointer-technique/" },
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
        { name: "Algorithm Design Canvas (ThinkLikeAProgrammer)", url: "https://www.slideshare.net/slideshow/think-like-a-programmer/23783982" }
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
        { name: "CP-Algorithms: BST", url: "https://cp-algorithms.com/data_structures/segment_tree.html" }
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
        { name: "CP-Algorithms: Graph Representation", url: "https://cp-algorithms.com/graph/descriptor.html" }
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
        { name: "Cloudflare: What is the Internet?", url: "https://www.cloudflare.com/learning/network-layer/how-does-the-internet-work/" },
        { name: "💎 Julia Evans: Networking! Ack! (free zine — best networking intro ever made)", url: "https://wizardzines.com/zines/networking/" }
      ]},
      { title: "HTTP/HTTPS: methods, status codes, headers, cookies", resources: [
        { name: "MDN: HTTP Overview", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" },
        { name: "HTTP Status Codes Explained", url: "https://httpstatusdogs.com/" },
        { name: "Postman: HTTP Tutorial", url: "https://learning.postman.com/docs/getting-started/introduction/" }
      ]},
      { title: "Browser Rendering: DOM, CSSOM, Reflow, Repaint, Critical Path", resources: [
        { name: "web.dev: How Browsers Work", url: "https://developer.chrome.com/blog/inside-browser-part1/" },
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
        { name: "MDN: Using Fetch", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" },
        { name: "💎 javascript.info: Async/Await — the single best written tutorial on async JS", url: "https://javascript.info/async-await" }
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
        { name: "Mode: Intermediate SQL", url: "https://mode.com/sql-tutorial/sql-aggregate-functions/" },
        { name: "HackerRank: SQL Aggregation", url: "https://www.hackerrank.com/domains/sql" }
      ]},
      { title: "SQL Joins: INNER, LEFT, RIGHT, FULL OUTER, CROSS, SELF", resources: [
        { name: "Visual SQL Joins (Interactive)", url: "https://joins.spathon.com/" },
        { name: "SQL Joins Explained (Atlassian)", url: "https://www.atlassian.com/data/sql/sql-join-types-explained-visually" }
      ]},
      { title: "Subqueries, CTEs (WITH clause) & Window Functions", resources: [
        { name: "Mode: Advanced SQL — Window Functions", url: "https://mode.com/sql-tutorial/sql-window-functions/" },
        { name: "PostgreSQL: Window Functions Tutorial", url: "https://www.postgresql.org/docs/current/tutorial-window.html" },
        { name: "💎 Benn Stancil: The Most Useful (and Underused) SQL Functions — practical window function use cases", url: "https://mode.com/sql-tutorial/sql-window-functions/" }
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
        { name: "DataLemur: SQL Interview Questions", url: "https://datalemur.com/questions?category=SQL" }
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
        { name: "Microsoft: REST API Design Best Practices", url: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design" }
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
        { name: "Passport.js: Node Authentication", url: "https://www.passportjs.org/docs/" },
        { name: "💎 The Copenhagen Book — free, concise guide to web app auth by the Lucia author", url: "https://thecopenhagenbook.com/" }
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
        { name: "Joyent: Error Handling in Node.js", url: "https://www.tritondatacenter.com/node-js/production/design/errors" }
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
        { name: "ByteByteGo: System Design Interview (Newsletter)", url: "https://blog.bytebytego.com/" },
        { name: "💎 High Scalability Blog — real architecture of YouTube, Twitter, Amazon (case studies)", url: "http://highscalability.com/all-time-favorites/" },
        { name: "💎 Designing Data-Intensive Applications (DDIA) — the system design bible (free chapter 1)", url: "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/" }
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
        { name: "Redis: Introduction", url: "https://redis.io/docs/latest/get-started/" },
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
        { name: "SST.dev: What is Serverless?", url: "https://guide.sst.dev/chapters/what-is-serverless.html" },
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
        { name: "Pramp: Free Mock Interviews", url: "https://www.tryexponent.com/pramp" },
        { name: "Exponent: System Design Course", url: "https://www.tryexponent.com/courses/system-design-interview" }
      ]},
      { title: "DSA Practice: NeetCode 150 + Blind 75", resources: [
        { name: "NeetCode.io Roadmap", url: "https://neetcode.io/roadmap" },
        { name: "Blind 75 List", url: "https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions" },
        { name: "LeetCode Patterns (Sean Prashad)", url: "https://seanprashad.com/leetcode-patterns/" },
        { name: "💎 Striver's SDE Sheet — 191 curated problems, used by 100k+ Indian engineers", url: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/" }
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
        { name: "Codeforces: Getting Started Blog", url: "https://codeforces.com/blog/entry/65133" }
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
        { name: "🔧 Bitwise Visualizer — watch bits flip in real time", url: "https://visualize-it.github.io/bitwise/simulation.html" }
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
        { name: "📖 LearnCPP Ch.17.1-17.6 — Arrays (read sections 17.1 to 17.6 only)", url: "https://www.learncpp.com/cpp-tutorial/arrays-part-i/" },
        { name: "📝 Tip: Prefer std::vector over raw arrays in modern C++. Use arrays only when size is fixed.", url: "https://www.learncpp.com/cpp-tutorial/an-introduction-to-stdvector/" },
        { name: "📖 GeeksforGeeks: C++ Arrays with examples", url: "https://www.geeksforgeeks.org/arrays-in-c-cpp/" }
      ]},
      { title: "Practice: HackerRank C++ Basics + First 20 LeetCode Easy (Brute Force OK)", resources: [
        { name: "HackerRank: C++ Domain", url: "https://www.hackerrank.com/domains/cpp" },
        { name: "LeetCode: Easy Problems", url: "https://leetcode.com/problemset/?difficulty=EASY" },
        { name: "CSES: Introductory Problems", url: "https://cses.fi/problemset/list/" },
        { name: "💎 Exercism: C++ Track — mentored practice with real feedback from experienced devs", url: "https://exercism.org/tracks/cpp" }
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
        { name: "📖 LearnCPP Ch.16.1-16.8 — std::vector (the complete vector chapter)", url: "https://www.learncpp.com/cpp-tutorial/an-introduction-to-stdvector/" },
        { name: "📝 Tip: Use emplace_back() not push_back() — constructs in place, slightly faster. Reserve capacity with reserve().", url: "https://en.cppreference.com/w/cpp/container/vector" },
        { name: "📖 CPP Reference: std::vector method reference", url: "https://en.cppreference.com/w/cpp/container/vector" }
      ]},
      { title: "STL Map & Unordered_map: insertion, lookup, iteration — O(log n) vs O(1)", resources: [
        { name: "CPP Reference: std::map", url: "https://en.cppreference.com/w/cpp/container/map" },
        { name: "GeeksforGeeks: Map vs Unordered_map", url: "https://www.geeksforgeeks.org/map-vs-unordered_map-c/" },
        { name: "💎 HackingCPP — visual cheat sheets for every STL container with complexity tables", url: "https://hackingcpp.com/cpp/std/containers.html" }
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
        { name: "CP-Algorithms: Bit Manipulation", url: "https://cp-algorithms.com/algebra/binary-exp.html" },
        { name: "💎 Sean Anderson's Bit Twiddling Hacks — legendary collection of O(1) bit tricks used in real compilers", url: "https://graphics.stanford.edu/~seander/bithacks.html" }
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
        { name: "CP-Algorithms: Graph Basics & Representations", url: "https://cp-algorithms.com/graph/descriptor.html" },
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
        { name: "Codeforces: Graphs Tag", url: "https://codeforces.com/problemset?tags=graphs" },
        { name: "💎 William Fiset: Graph Theory Algorithms (full playlist, 36 videos, extremely clear)", url: "https://www.youtube.com/playlist?list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P" }
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
        { name: "FreeCodeCamp: DP Explained", url: "https://www.freecodecamp.org/news/demystifying-dynamic-programming-3efafb8d4296/" },
        { name: "💎 Errichto: Dynamic Programming — 3-part tutorial series (best DP intro for CP, by a Codeforces Grandmaster)", url: "https://www.youtube.com/watch?v=YBSt1jYwVfU" },
        { name: "💎 Atcoder DP Contest — 26 classic DP problems in perfect difficulty order (A→Z)", url: "https://atcoder.jp/contests/dp/tasks" }
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
        { name: "CP-Algorithms: DP on Trees", url: "https://cp-algorithms.com/dynamic_programming/tree-dp.html" },
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
        { name: "Pramp: Free Peer Interviews", url: "https://www.tryexponent.com/pramp" },
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
        { name: "USACO Guide", url: "https://usaco.guide/" },
        { name: "💎 KACTL — KTH Algorithm Competition Template Library (battle-tested contest code)", url: "https://github.com/kth-competitive-programming/kactl" },
        { name: "💎 Codeforces EDU Section — structured algorithm courses with visualizations, totally free", url: "https://codeforces.com/edu/courses" }
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
//  TOPIC META — Focused learning tips & difficulty for every topic
//  Looked up by title in renderQuests(). Keeps roadmap data clean.
// ═══════════════════════════════════════════════════════════════════════
const TOPIC_META = {
  // ── SDE Month 1: Programming Foundations ──
  "How Computers Work: CPU, RAM, Storage & Binary": { difficulty:"beginner", tip:"🎯 Watch Crash Course ep.1-4 only (20 min total). Key insight: everything — text, images, your code — is just 0s and 1s stored in memory cells." },
  "Variables, Data Types & Type Systems": { difficulty:"beginner", tip:"🎯 Use Python Tutor on every code example you write this week. Watching memory allocate/deallocate visually is worth 10× reading about it." },
  "Operators: Arithmetic, Comparison, Logical & Bitwise": { difficulty:"beginner", tip:"🎯 Master ==, !=, &&, ||, ! first. Skip bitwise operators (&, |, ^, <<, >>) for now — revisit them in the DSA track where they're truly needed." },
  "Control Flow: if/else, switch, and Ternary": { difficulty:"beginner", tip:"🎯 Practice: code FizzBuzz and a letter-grade calculator. If you can write nested if/else confidently, you're ready for the next topic." },
  "Loops: for, while, do-while, and Iteration Patterns": { difficulty:"beginner", tip:"🎯 The for loop is your workhorse. Practice: print a multiplication table, sum an array, find the max value. These 3 patterns cover 80% of loop problems." },
  "Functions, Parameters, Return Values & Pure Functions": { difficulty:"beginner", tip:"🎯 A pure function = same input always gives same output, no side effects. This mental model is the foundation of clean, testable code." },
  "Scope, Closures & the Execution Context": { difficulty:"intermediate", tip:"🎯 Read Lydia Hallie's scope article — the animated GIFs explain it better than any text. Closures will click naturally once scope makes sense." },
  "Terminal & CLI Essentials (bash, zsh, file navigation)": { difficulty:"beginner", tip:"🎯 Learn just 10 commands first: ls, cd, mkdir, touch, cp, mv, rm, cat, grep, pwd. Master these before anything else — everything else you can look up." },
  "Git Fundamentals: init, add, commit, log, diff": { difficulty:"beginner", tip:"🎯 Use Learn Git Branching (interactive site) — it's the single best git resource. Focus: init, add, commit, status, log. Branch operations come in Month 2." },
  "Problem Solving Mindset: Pseudocode & Decomposition": { difficulty:"beginner", tip:"🎯 Before writing ANY code, spend 3-5 min writing pseudocode. This single habit separates good programmers from great ones. Practice on 3 Advent of Code Day 1 puzzles." },

  // ── SDE Month 2: OOP & Version Control ──
  "Classes, Objects & Constructors": { difficulty:"beginner", tip:"🎯 Read Refactoring Guru OOP intro (5 min), then immediately code a BankAccount class with deposit/withdraw/balance methods. Reading without coding doesn't stick." },
  "Encapsulation & Data Hiding (getters/setters, private fields)": { difficulty:"beginner", tip:"🎯 The golden rule: never directly access raw properties from outside a class. Always use methods. Prevents invalid state — e.g., age should never be negative." },
  "Inheritance, Method Overriding & super()": { difficulty:"intermediate", tip:"🎯 Key test: if you can say 'A IS-A B', inheritance is valid. Car IS-A Vehicle ✓. Car IS-A Engine ✗ (that's composition). Focus on method overriding examples." },
  "Polymorphism: compile-time vs runtime": { difficulty:"intermediate", tip:"🎯 One-liner: one interface, many implementations. A Shape has area() — but Circle and Rectangle calculate it differently. That IS polymorphism. Focus on runtime (method overriding)." },
  "Abstraction, Interfaces & Abstract Classes": { difficulty:"intermediate", tip:"🎯 Read the Stack Overflow answer — it's concise and authoritative. Core rule: interfaces define WHAT to do, abstract classes define WHAT + partial HOW." },
  "SOLID Principles with Real Examples": { difficulty:"intermediate", tip:"🎯 Start with just S (Single Responsibility) and O (Open/Closed). These two cover 80% of real code quality issues. Read the FreeCodeCamp article end-to-end with examples." },
  "Design Patterns: Singleton, Factory, Observer, Strategy": { difficulty:"intermediate", tip:"🎯 Learn only 3 patterns now: Singleton (one instance), Factory (create objects), Observer (notify listeners). Read Refactoring Guru for each. Skip the rest until Month 8+." },
  "Git Branching Strategies (Gitflow, trunk-based)": { difficulty:"beginner", tip:"🎯 Gitflow model: main (production), develop (staging), feature/* (your work). This is the industry standard. Use Learn Git Branching interactive to practice branching." },
  "Pull Requests, Code Reviews & Collaboration Best Practices": { difficulty:"beginner", tip:"🎯 Read Google's code review guide — it's the gold standard. Key rule: one PR = one logical change. Review your own code before submitting. Think about the reviewer's time." },
  "Resolving Merge Conflicts & Git Rebase vs Merge": { difficulty:"intermediate", tip:"🎯 Practice: create a feature branch, make conflicting changes on main, then resolve it. Doing this once is worth reading about it 10 times. For beginners: always merge, learn rebase later." },

  // ── SDE Month 3: Basic Data Structures ──
  "Arrays & Dynamic Arrays (ArrayList/Vector)": { difficulty:"beginner", tip:"🎯 Do LeetCode Arrays 101 first 5 exercises. Master: index access O(1), iteration, in-place modification. Two-pointer concept starts here." },
  "Strings, String Manipulation & Common Algorithms": { difficulty:"beginner", tip:"🎯 Learn these 5 ops cold: reverse, find substring, split by delimiter, replace, count occurrences. These appear in 30% of easy interview problems." },
  "Linked Lists: Singly & Doubly (traversal, insertion, deletion)": { difficulty:"intermediate", tip:"🎯 Draw every pointer operation on paper first — always. Use VisuAlgo. Key operations: insert at head O(1), delete a node, reverse the list. These 3 are interview favorites." },
  "Stacks: LIFO principle, implementations, applications": { difficulty:"beginner", tip:"🎯 Implement a stack yourself using an array before using a built-in. Key insight: the call stack in your debugger IS a stack — function calls push, returns pop." },
  "Queues: FIFO, Deque, Circular Queue": { difficulty:"beginner", tip:"🎯 Think: a line at a store. First person in, first out. Implement array-based queue first. Key ops: enqueue (add to back), dequeue (remove from front)." },
  "Hash Tables: Hashing, Collision Resolution (chaining, open addressing)": { difficulty:"intermediate", tip:"🎯 Watch CS50 hash tables video (10 min) — it's the clearest explanation. This is the most important DS for interviews. O(1) lookup changes how you solve problems." },
  "HashMaps & HashSets in Practice (frequency counting, deduplication)": { difficulty:"intermediate", tip:"🎯 The two must-know patterns: (1) frequency count — count char occurrences in a string. (2) seen-set — check if element exists in O(1). These appear in ~30% of easy LeetCode problems." },
  "Big-O Notation: Time & Space Complexity Analysis": { difficulty:"beginner", tip:"🎯 Memorize this order: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ). Focus on analyzing loops: single loop = O(n), nested loops = O(n²), halving loop = O(log n)." },
  "Amortized Analysis & when to use which data structure": { difficulty:"advanced", tip:"🎯 Key insight: dynamic array doubling is O(n) occasionally but O(1) amortized. Don't overthink — just know it exists and what it means for ArrayList performance." },
  "LeetCode Practice: Easy Array/String/HashMap Problems (target 30)": { difficulty:"intermediate", tip:"🎯 Do in this order: Two Sum → Contains Duplicate → Valid Anagram → Best Time to Buy Stock → Product of Array Except Self → Group Anagrams. These build on each other." },

  // ── SDE Month 4: Algorithmic Thinking ──
  "Algorithm Design Strategies Overview": { difficulty:"beginner", tip:"🎯 Read Khan Academy's algorithm intro (15 min). Key: every algorithm must be correct, terminate, and be efficient. That's the triple constraint." },
  "Recursion Deep Dive: call stack, tree recursion, memoization intro": { difficulty:"intermediate", tip:"🎯 Use Python Tutor to visualize the call stack. Master these 3 before anything: factorial, fibonacci, power(x,n). Every recursion = base case + recursive case. Never skip drawing the tree." },
  "Sorting Algorithms: Bubble, Selection, Insertion, Merge, Quick, Heap": { difficulty:"intermediate", tip:"🎯 Watch VisuAlgo animations for all algorithms. You MUST implement QuickSort and MergeSort from scratch — these are interview essentials. Focus 80% time on these two." },
  "Searching: Linear Search, Binary Search & its variants": { difficulty:"intermediate", tip:"🎯 Binary search is trickier than it looks. Use this template always: lo=0, hi=n-1, while(lo<=hi), mid=lo+(hi-lo)/2. Memorize it. Practice: write it 10 times from scratch." },
  "Two Pointers: opposite ends, same direction, fast/slow": { difficulty:"intermediate", tip:"🎯 Two patterns: (1) opposite ends — palindrome check, two sum in sorted array. (2) same direction — remove duplicates, fast/slow (cycle detection). Practice both patterns separately." },
  "Sliding Window: fixed size, variable size, multi-window": { difficulty:"intermediate", tip:"🎯 Fixed window first: max sum of k elements. Variable window next: longest substring without repeating characters. These two patterns cover 90% of sliding window problems." },
  "Greedy Algorithms: activity selection, interval scheduling": { difficulty:"intermediate", tip:"🎯 Greedy only works when 'take the locally best option' provably leads to global optimum. Activity Selection is the textbook example. Always ask: 'is greedy correct here, or do I need DP?'" },
  "Divide and Conquer: paradigm, merge sort analysis, master theorem": { difficulty:"intermediate", tip:"🎯 MergeSort IS divide and conquer. Split → solve recursively → merge. This exact pattern appears in: merge K sorted lists, closest pair of points, count inversions." },
  "Backtracking: N-Queens, Sudoku Solver, Subsets, Permutations": { difficulty:"intermediate", tip:"🎯 Template: for each choice → make choice → recurse → UNDO choice. The 4 must-know problems: subsets, permutations, combination sum, N-Queens. NeetCode playlist explains all 4 perfectly." },
  "Dynamic Programming Intro: Fibonacci, Climbing Stairs, Memoization vs Tabulation": { difficulty:"intermediate", tip:"🎯 Watch NeetCode DP intro first (23 min). Golden rule: if problem asks 'how many ways' or 'min/max amount', think DP. Start: Climbing Stairs → House Robber → Coin Change." },

  // ── SDE Month 5: Advanced Data Structures ──
  "Binary Trees: properties, terminology, full/complete/perfect": { difficulty:"intermediate", tip:"🎯 Know these terms cold: root, leaf, parent, child, height, depth. Perfect tree of height h has 2^(h+1)-1 nodes. The LeetCode Binary Tree Card covers all properties clearly." },
  "BST: Insert, Delete, Search, Predecessor/Successor": { difficulty:"intermediate", tip:"🎯 BST invariant: left < node < right at every node. Practice BST Visualizer to see animations. Deletion is the hardest op — study the 3 cases carefully (leaf, one child, two children)." },
  "Tree Traversals: Inorder, Preorder, Postorder, Level-Order (BFS)": { difficulty:"intermediate", tip:"🎯 Know all 4 traversals by heart: inorder=sorted BST output, preorder=serialize/copy tree, postorder=delete tree, level-order=BFS. Know when each is useful." },
  "Self-Balancing Trees: AVL Trees & Red-Black Trees (concepts)": { difficulty:"advanced", tip:"🎯 Understand conceptually how rotations maintain balance. Implementing from scratch is rarely asked in interviews. Focus on: why balance matters, height guarantee O(log n)." },
  "Heaps & Priority Queues: max-heap, min-heap, heapify": { difficulty:"intermediate", tip:"🎯 Heap invariant: parent ≥ children (max-heap). Key ops: insert O(log n), extract-max O(log n), peek O(1). Use priority_queue in C++, heapq in Python." },
  "Tries (Prefix Trees): insert, search, startsWith, word dictionary": { difficulty:"intermediate", tip:"🎯 Implement Trie from scratch on LeetCode #208 — every node is a char, every root-to-leaf path is a word. The go-to structure for prefix/autocomplete problems." },
  "Graphs: Adjacency Matrix, Adjacency List, Edge List representations": { difficulty:"intermediate", tip:"🎯 Adjacency list = default choice. Space: O(V+E) vs O(V²) for matrix. Use matrix only when graph is dense (many edges) or you need O(1) edge existence check." },
  "BFS: level-order traversal, shortest path in unweighted graph": { difficulty:"intermediate", tip:"🎯 BFS always finds shortest path in unweighted graphs. Template: queue + visited set + level counter. Must-know problems: Number of Islands, Word Ladder, Rotting Oranges." },
  "DFS: connected components, cycle detection, topological sort": { difficulty:"intermediate", tip:"🎯 DFS key applications: cycle detection, topological sort, connected components, path finding. Master recursive first, then iterative with explicit stack." },
  "Shortest Path Algorithms: Dijkstra, Bellman-Ford, Floyd-Warshall": { difficulty:"advanced", tip:"🎯 Dijkstra: no negative edges, min-heap, O((V+E)log V). Bellman-Ford: allows negatives, O(VE), detects negative cycles. Floyd-Warshall: all pairs O(V³). Know when to pick each." },

  // ── SDE Month 6: Web & Networking ──
  "How the Internet Works: TCP/IP, DNS, HTTP Lifecycle": { difficulty:"beginner", tip:"🎯 Read MDN's How the Web Works (10 min). Focus on the DNS resolution + TCP handshake + HTTP request/response lifecycle. This is what happens on every single page load." },
  "HTTP/HTTPS: methods, status codes, headers, cookies": { difficulty:"beginner", tip:"🎯 Memorize: 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Error. You'll use these codes every day as a backend engineer." },
  "Browser Rendering: DOM, CSSOM, Reflow, Repaint, Critical Path": { difficulty:"intermediate", tip:"🎯 Critical Rendering Path sequence: HTML→DOM, CSS→CSSOM, DOM+CSSOM→Render Tree, Layout, Paint. This knowledge drives performance optimization decisions." },
  "HTML5 Semantic Structuring & Accessibility (ARIA)": { difficulty:"beginner", tip:"🎯 Use semantic elements (header, nav, main, article, section, footer) instead of generic divs. Better SEO, better accessibility, better readability. Read MDN ARIA basics page." },
  "CSS3: Box Model, Flexbox, Grid, Animations & Custom Properties": { difficulty:"beginner", tip:"🎯 Master Flexbox first (1D layouts). Then CSS Grid (2D layouts). Play Flexbox Froggy and Grid Garden — these games teach both faster than any article or tutorial." },
  "JavaScript: DOM Manipulation, Events & the Event Delegation Pattern": { difficulty:"intermediate", tip:"🎯 Event delegation is key: attach ONE listener to a parent element instead of many to children. Prevents memory leaks and handles dynamically added elements automatically." },
  "Async JavaScript: Promises, async/await, Fetch API": { difficulty:"intermediate", tip:"🎯 async/await is syntactic sugar over Promises. Always wrap in try/catch. Practice: fetch data from JSONPlaceholder API (jsonplaceholder.typicode.com) — free, no API key needed." },
  "The Event Loop, Microtask Queue & Macrotask Queue": { difficulty:"advanced", tip:"🎯 Watch Jake Archibald's JSConf video (35 min) — the clearest event loop explanation ever made. Key insight: microtasks (Promises) run before macrotasks (setTimeout) in the same tick." },
  "Web Storage: localStorage, sessionStorage, cookies vs IndexedDB": { difficulty:"beginner", tip:"🎯 localStorage: persists forever. sessionStorage: cleared on tab close. Cookies: sent with every HTTP request (use for auth tokens). IndexedDB: large structured data." },
  "Build & Deploy: Webpack/Vite basics, npm scripts, Netlify/Vercel": { difficulty:"intermediate", tip:"🎯 Vite is the modern standard — much faster than Webpack. Run: npm create vite@latest. Deploy to Netlify by dragging your dist/ folder. That's a real deployed app in 5 minutes." },

  // ── SDE Month 7: Databases & SQL ──
  "Relational Model: Tables, Rows, Columns, Keys, Relationships": { difficulty:"beginner", tip:"🎯 Do ALL of SQLBolt (18 interactive lessons, ~2 hours). It is the best SQL learning resource bar none — better than any video or article. Do not skip exercises." },
  "SQL CRUD: SELECT, INSERT, UPDATE, DELETE": { difficulty:"beginner", tip:"🎯 ALWAYS use WHERE with UPDATE and DELETE. 'UPDATE users SET role=admin' (without WHERE) updates EVERY user. This mistake has caused real production disasters." },
  "Filtering, Sorting, Grouping: WHERE, ORDER BY, GROUP BY, HAVING": { difficulty:"beginner", tip:"🎯 GROUP BY changes the unit of analysis. HAVING filters groups (like WHERE but for aggregates). Practice: find customers with more than 3 orders using GROUP BY + HAVING." },
  "Aggregate Functions: COUNT, SUM, AVG, MAX, MIN, DISTINCT": { difficulty:"beginner", tip:"🎯 Do Mode Analytics Intermediate SQL. These functions are in virtually every data analytics interview. Practice computing average order value, top customers, revenue by month." },
  "SQL Joins: INNER, LEFT, RIGHT, FULL OUTER, CROSS, SELF": { difficulty:"intermediate", tip:"🎯 Practice on Visual SQL Joins tool. 90% of real-world queries use INNER JOIN and LEFT JOIN. Master these two first. CROSS JOIN is rare — mostly used for generating combinations." },
  "Subqueries, CTEs (WITH clause) & Window Functions": { difficulty:"advanced", tip:"🎯 Window functions (ROW_NUMBER, RANK, LAG, LEAD) are the biggest differentiator in SQL interviews. Mode Analytics window functions tutorial is the clearest explanation — read it fully." },
  "Database Design & Normalization: 1NF, 2NF, 3NF, BCNF": { difficulty:"intermediate", tip:"🎯 3NF is the standard for OLTP databases. Simple test: every non-key column must depend ONLY on the primary key (not on other non-key columns). Read FreeCodeCamp normalization article." },
  "ACID Properties & Transactions (BEGIN, COMMIT, ROLLBACK)": { difficulty:"intermediate", tip:"🎯 ACID = Atomicity (all-or-nothing), Consistency, Isolation, Durability. Classic example: bank transfer. If any step fails, the entire transaction rolls back. Money never disappears." },
  "Indexing: B-Tree index, composite index, index on expressions, EXPLAIN": { difficulty:"advanced", tip:"🎯 Use The Index, Luke is the best indexing resource (free book). Rule of thumb: add an index on any column frequently in WHERE, JOIN ON, or ORDER BY. Check with EXPLAIN." },
  "SQL Practice: LeetCode SQL 50 + HackerRank SQL (Advanced)": { difficulty:"intermediate", tip:"🎯 Do all 50 problems in LeetCode SQL 50. Then StrataScratch for real company questions (Airbnb, Netflix, Uber). DataLemur is the best for interview-focused SQL practice." },

  // ── SDE Month 8: Backend Engineering ──
  "Backend Frameworks: Node/Express, Spring Boot, Django/FastAPI overview": { difficulty:"intermediate", tip:"🎯 Pick ONE framework and go deep. Express.js if you know JS. FastAPI if you know Python. Spring Boot for Java. Don't try to learn multiple — depth beats breadth here." },
  "RESTful API Design: Resources, HTTP Verbs, Statelessness, Versioning": { difficulty:"intermediate", tip:"🎯 Key constraints: stateless (no session on server), resources identified by URLs (/users/123), HTTP verbs have specific meaning (GET=read, POST=create, PUT=replace, PATCH=partial update)." },
  "Request/Response Lifecycle, Routing & Controllers": { difficulty:"intermediate", tip:"🎯 The pattern: Router receives request → Controller handles logic → Service does work → Repository accesses DB. This separation of concerns is universal across all frameworks." },
  "Middleware Pattern: logging, validation, rate limiting, CORS": { difficulty:"intermediate", tip:"🎯 Middleware order matters: logger → auth check → rate limiter → validator → handler. Helmet.js adds 11 security headers with one line of code — always use it in production." },
  "Authentication: Sessions, JWT, OAuth 2.0, Refresh Tokens": { difficulty:"intermediate", tip:"🎯 JWT = encoded payload (NOT encrypted) + signature. Never store sensitive data in JWT. Access tokens in memory, refresh tokens in HttpOnly cookies. Read JWT.io introduction fully." },
  "Password Security: Hashing (bcrypt), Salting, OWASP guidelines": { difficulty:"intermediate", tip:"🎯 Never store plain passwords. Use bcrypt with at least 10 salt rounds. Read OWASP Password Storage Cheat Sheet — it's the definitive reference and covers all edge cases." },
  "ORM & Query Builders: Prisma, Sequelize, SQLAlchemy": { difficulty:"intermediate", tip:"🎯 Prisma is the best modern ORM — schema-first, type-safe, catches a whole class of bugs at compile time. Read the Prisma Getting Started guide fully (it's well written)." },
  "Input Validation, Sanitization & Error Handling Strategies": { difficulty:"intermediate", tip:"🎯 Validate EVERY input — never trust client data. Always return consistent error format: {status, message, errors[]}. Joi or Zod for validation. Never expose stack traces in production." },
  "API Testing: Postman, cURL, and writing Integration Tests": { difficulty:"intermediate", tip:"🎯 Learn these 5 Postman operations: GET/POST/PUT/DELETE requests, setting headers, request body (JSON), environment variables, saving collections. Then write at least 3 integration tests." },
  "API Documentation: Swagger/OpenAPI, Markdown READMEs": { difficulty:"beginner", tip:"🎯 Your API README must include: what it does, how to set up locally, all endpoints with examples. Swagger/OpenAPI generates interactive docs from your code — use it in production projects." },

  // ── SDE Month 9: System Design ──
  "Client-Server Architecture": { difficulty:"intermediate", tip:"🎯 Read the System Design Primer README — it's the best free SD resource. Start with 'How to approach a system design interview question' section. Then study each concept it links to." },
  "Vertical vs Horizontal Scaling": { difficulty:"intermediate", tip:"🎯 Vertical = bigger machine (limited, single point of failure). Horizontal = more machines (unlimited, needs load balancer). Most modern systems scale horizontally." },
  "Load Balancing and API Gateways": { difficulty:"intermediate", tip:"🎯 Load balancer algorithms: Round Robin (default), Least Connections (smarter), IP Hash (sticky sessions). Nginx is the most common open-source option. API Gateway adds auth, rate limiting, routing." },
  "Caching Strategies": { difficulty:"intermediate", tip:"🎯 Cache invalidation is the hard problem. Three strategies: write-through (sync), write-back (async), cache-aside (app manages). Redis is the standard cache. Know TTL and eviction policies." },
  "Content Delivery Networks (CDN)": { difficulty:"beginner", tip:"🎯 CDN = copies of your static assets (images, JS, CSS) on servers worldwide. Users get files from the nearest server. Cloudflare and AWS CloudFront are the main providers." },
  "Monolithic vs Microservices Architectures": { difficulty:"intermediate", tip:"🎯 Read Martin Fowler's microservices article (it's the definitive reference). Key tradeoff: microservices give scalability + independent deployment, but add operational complexity. Start monolith, split when needed." },
  "Database Sharding and Replication": { difficulty:"advanced", tip:"🎯 Replication = copies for read scale + failover. Sharding = split data across DBs for write scale. They solve different problems. Master-slave is the most common replication pattern." },
  "Message Queues and Event-Driven Arch.": { difficulty:"advanced", tip:"🎯 Message queues decouple systems — producer sends, consumer processes later. Kafka for high throughput, RabbitMQ for complex routing. Key benefits: async, durable, retryable, decoupled." },

  // ── SDE Month 10: Cloud & DevOps ──
  "Cloud Providers Overview": { difficulty:"beginner", tip:"🎯 AWS leads (31%). Focus on 5 core services first: EC2 (virtual machines), S3 (object storage), RDS (managed databases), Lambda (serverless), IAM (identity and access management)." },
  "Virtual Machines vs Containers": { difficulty:"beginner", tip:"🎯 Container = isolated process with its own filesystem (lightweight, starts in ms). VM = full OS on hypervisor (heavy, starts in minutes). Docker = containers. Most modern apps use containers." },
  "Docker Fundamentals": { difficulty:"intermediate", tip:"🎯 Do Docker 101 Tutorial end-to-end (1-2 hours). Key concepts: image (blueprint), container (running instance), Dockerfile (recipe), registry (Docker Hub). Run the tutorial — don't just read it." },
  "Docker Compose for multi-container apps": { difficulty:"intermediate", tip:"🎯 docker-compose.yml runs your app + database + cache with one command (docker compose up). Learn: up, down, logs, ps, exec. This is how every modern dev environment is set up." },
  "Continuous Integration & Deployment": { difficulty:"intermediate", tip:"🎯 CI = auto-test every code push. CD = auto-deploy if tests pass. This pipeline catches bugs before users see them. The ROI is enormous. Every team uses this." },
  "GitHub Actions / GitLab CI Basics": { difficulty:"intermediate", tip:"🎯 Create .github/workflows/ci.yml. Simple pipeline: on push → install deps → run tests → build. This is industry standard. Start with the GitHub Actions quickstart guide." },
  "Linux Basics and Bash Scripting": { difficulty:"intermediate", tip:"🎯 Bash essentials: variables, if statements, for loops, chmod +x, pipe (|), redirect (>), grep. These 8 concepts cover 90% of scripts you'll ever need to write." },
  "Observability: Logging, Metrics (Prometheus), Tracing, Dashboards (Grafana)": { difficulty:"advanced", tip:"🎯 The 4 golden signals: latency, traffic, errors, saturation. Prometheus scrapes metrics, Grafana visualizes them. Set up a simple dashboard for your capstone project." },
  "Infrastructure as Code: Terraform basics, concepts, AWS example": { difficulty:"advanced", tip:"🎯 IaC means your infrastructure is version-controlled like code. Terraform is the standard tool. Even knowing the basics differentiates you significantly in interviews." },

  // ── SDE Month 11: Specialized Topics & Security ──
  "NoSQL Databases: Document (MongoDB), Key-Value (Redis), Column (Cassandra)": { difficulty:"intermediate", tip:"🎯 Use cases: MongoDB for flexible schema (user profiles), Redis for caching/sessions (sub-millisecond), Cassandra for time-series at scale. Knowing WHEN to use each is the key skill." },
  "When to use SQL vs NoSQL: data model & access patterns": { difficulty:"intermediate", tip:"🎯 SQL: ACID, strict schema, complex queries (analytics, finance). NoSQL: flexible schema, horizontal scale, simple patterns (social feeds, IoT). Neither is universally better." },
  "WebSockets & Server-Sent Events: real-time architecture": { difficulty:"intermediate", tip:"🎯 WebSocket = persistent bidirectional connection. Socket.io handles reconnection + fallbacks automatically. Use Server-Sent Events if you only need server→client push (simpler)." },
  "GraphQL vs REST: schemas, resolvers, queries, mutations, subscriptions": { difficulty:"intermediate", tip:"🎯 GraphQL strength: clients request exactly what they need (no over/under-fetching). Weakness: caching harder than REST. Read How to GraphQL tutorial fully — it's the best free resource." },
  "gRPC & Protocol Buffers: when to use gRPC vs REST": { difficulty:"advanced", tip:"🎯 gRPC uses HTTP/2 + Protocol Buffers → 5-10x faster than JSON REST for internal services. Use REST for public APIs, gRPC for internal microservice-to-microservice communication." },
  "Web Security: OWASP Top 10, SQL Injection, XSS, CSRF": { difficulty:"intermediate", tip:"🎯 Read OWASP Top 10 list fully (30 min). Then do PortSwigger SQL Injection and XSS labs — hands-on practice is essential. Security knowledge is a major differentiator." },
  "Auth Security: CORS, HTTPS, CSP, Secure Cookies, HSTS": { difficulty:"intermediate", tip:"🎯 CORS: server must explicitly allow cross-origin requests. HSTS: forces HTTPS. CSP: whitelist approved content sources. All three are essential for any production app." },
  "Rate Limiting, DDoS Mitigation & API Throttling": { difficulty:"intermediate", tip:"🎯 Implement rate limiting on ALL public APIs from day one: 100 req/min per IP is a safe default. Cloudflare handles DDoS at network level — use it for any public-facing project." },
  "Serverless Computing: AWS Lambda, Vercel Functions, Edge Functions": { difficulty:"intermediate", tip:"🎯 Serverless = no server management, charged per invocation (not per hour). Perfect for event-driven workloads. Not suitable for long-running processes or low-latency requirements." },
  "Search Systems: Elasticsearch & Full-Text Search Concepts": { difficulty:"advanced", tip:"🎯 Full-text search needs an inverted index (Elasticsearch). For small datasets, PostgreSQL full-text search is sufficient — don't over-engineer. Know when each is appropriate." },

  // ── SDE Month 12: Capstone & Interview Prep ──
  "Build a Full-Stack Capstone Project (with CI/CD + cloud deployment)": { difficulty:"intermediate", tip:"🎯 Your capstone must show: full-stack (frontend + backend + DB), authentication, cloud deployment, CI/CD pipeline, and a polished README. These 5 = production-ready portfolio project." },
  "System Design Mock Interviews (Timed Practice)": { difficulty:"advanced", tip:"🎯 Practice saying your thought process OUT LOUD. Interviewers evaluate HOW you think, not just the answer. Use Pramp for free peer practice — aim for 5 mock sessions minimum." },
  "DSA Practice: NeetCode 150 + Blind 75": { difficulty:"intermediate", tip:"🎯 Do NeetCode 150 in order: Arrays → Two Pointers → Sliding Window → Stack → Binary Search → Linked List → Trees → Heap → Graphs → DP. This sequence builds skills progressively." },
  "Behavioral Interviews: STAR Method, Leadership Principles, Storytelling": { difficulty:"beginner", tip:"🎯 STAR format: Situation (brief) → Task (your role) → Action (what YOU specifically did) → Result (quantified impact). Prep 5-7 stories covering different leadership principles." },
  "Competitive Programming for Interview Edge: Codeforces, CSES": { difficulty:"advanced", tip:"🎯 Codeforces Div 2 A-B = LeetCode Easy/Medium. Solve 50+ CSES problems. This experience differentiates you from candidates who only did LeetCode." },
  "Resume, LinkedIn & Portfolio: ATS optimization, project showcase": { difficulty:"beginner", tip:"🎯 ATS tip: use keywords from the job description verbatim. Quantify every achievement. One page for <3 years experience. Harvard OCS guide is the gold standard — follow it exactly." },
  "Contributing to Open Source: Find good first issues, fork, PR": { difficulty:"beginner", tip:"🎯 Filter GitHub issues by 'good-first-issue' label. Your first PR just needs to be helpful — fix a typo, improve docs, add a test. Start small. The contribution history matters." },
  "Writing Great READMEs & Technical Documentation": { difficulty:"beginner", tip:"🎯 README structure: description → demo GIF/screenshot → tech stack → local setup → API docs → contributing. A great README is your storefront — spend time on it." },
  "Job Search Strategy: outreach, referrals, company research, timing": { difficulty:"beginner", tip:"🎯 Referrals get 5-10x higher callback rate. Spend 20% time applying online, 80% networking. LinkedIn connections, alumni network, local meetups — these are your highest-ROI activities." },
  "Salary Negotiation & Offer Evaluation (RSUs, vesting, total comp)": { difficulty:"beginner", tip:"🎯 Never give a number first. 'What are you making?' → 'I'm focused on finding the right role. What's the budgeted range?' Read Haseeb's negotiation guide — it's the best on the internet." },

  // ── DSA Month 3: Mathematical Foundations ──
  "Big-O, Big-Ω, Big-Θ: formal definitions, deriving complexity from code": { difficulty:"intermediate", tip:"🎯 Know the Big-O Cheat Sheet cold. Practice deriving complexity by counting loop iterations. The most common mistakes: forgetting log n for tree operations, missing O(n) for string concatenation." },
  "Modular Arithmetic: mod operator, properties, overflow prevention": { difficulty:"intermediate", tip:"🎯 Key property: (a+b)%M = ((a%M)+(b%M))%M. Always use long long and take mod after every operation in CP. This prevents overflow in problems with large numbers." },
  "Number Theory: GCD (Euclidean algorithm), LCM, Coprime numbers": { difficulty:"intermediate", tip:"🎯 Implement Euclidean GCD from memory: gcd(a,b) = gcd(b, a%b), base: gcd(a,0)=a. LCM(a,b) = a*b/gcd(a,b). These appear in 20%+ of CP problems." },
  "Prime Numbers: Sieve of Eratosthenes, Primality Testing, Factorization": { difficulty:"intermediate", tip:"🎯 Implement Sieve once and memorize it — you'll use it in dozens of CP problems. The sieve finds ALL primes up to N in O(n log log n). Faster than trial division for large N." },
  "Bit Manipulation: AND, OR, XOR, NOT, shifts — common tricks": { difficulty:"intermediate", tip:"🎯 Must-know tricks: n&(n-1) removes lowest set bit, n&(-n) isolates lowest set bit, x^x=0, x^0=x. These tricks solve problems in O(1) that loops solve in O(n)." },
  "Combinatorics: nCr, nPr, Pascal's Triangle, Inclusion-Exclusion": { difficulty:"intermediate", tip:"🎯 Compute nCr with Pascal's Triangle to avoid overflow. Inclusion-Exclusion: |A∪B| = |A|+|B|-|A∩B|. Focus on these two — they appear most often in CP contests." },
  "Recursion Mastery: tree of recursive calls, memoization, when NOT to recurse": { difficulty:"intermediate", tip:"🎯 Do LeetCode Recursion I Card fully. Always draw the recursion tree. When you see exponential recursion (fibonacci without memo), add memoization immediately." },
  "Backtracking: State Space Trees, Pruning — Subsets, Permutations, N-Queens": { difficulty:"intermediate", tip:"🎯 NeetCode backtracking video is essential viewing. The template: choose → explore → unchoose. Pruning (early termination) is what makes backtracking practical." },
  "Prefix Sums & Difference Arrays: range query, 2D prefix sum": { difficulty:"intermediate", tip:"🎯 Prefix sum enables O(1) range sum queries after O(n) preprocessing. Difference array enables O(1) range updates. Both are essential competitive programming tools." },
  "Practice: 30 Problems — Bit Manipulation, Math, Recursion on LeetCode/CSES": { difficulty:"intermediate", tip:"🎯 CSES Mathematics section is the best for this. LeetCode Math tag has 500+ problems — filter by Easy first. Target: 30 problems solved before moving to Month 4." },

  // ── DSA Month 4: Arrays, Hashing & Two Pointers ──
  "Sliding Window — Fixed Size: Max sum subarray of size k": { difficulty:"intermediate", tip:"🎯 Template: maintain a window of exactly k elements. Add new element, remove oldest. Compute answer. Practice until you can code this from scratch in 5 minutes." },
  "Sliding Window — Variable Size: Longest Substring Without Repeating": { difficulty:"intermediate", tip:"🎯 Template: expand window (move right), when invalid → shrink (move left). The HashSet/HashMap tracks window contents. This problem is a perfect template for all variable-window problems." },
  "Two Pointers — Opposite Ends: Two Sum II, Container with Most Water": { difficulty:"intermediate", tip:"🎯 Works only when array is sorted or you can reason about moving each pointer. Container with Most Water is the quintessential example — understand why greedy pointer movement works." },
  "Two Pointers — Same Direction: Remove Duplicates, Move Zeros": { difficulty:"beginner", tip:"🎯 One pointer tracks the 'write position', the other scans forward. Remove Duplicates from Sorted Array (LeetCode #26) is the canonical example — code it from scratch." },
  "Hash Maps in Practice: Two Sum, Group Anagrams, Top K Frequent": { difficulty:"intermediate", tip:"🎯 These 3 problems cover the 3 main hashmap patterns. Two Sum: value→index lookup. Group Anagrams: sorted-key grouping. Top K Frequent: frequency counting + heap." },
  "Hash Sets: Contains Duplicate, Happy Number, Intersection of Arrays": { difficulty:"beginner", tip:"🎯 HashSet = O(1) membership check. Contains Duplicate is the simplest use. Happy Number shows cycle detection with a set. Master these before moving to harder problems." },
  "Sorting Algorithms Deep Dive: QuickSort, MergeSort — implement from scratch": { difficulty:"intermediate", tip:"🎯 Implement both from memory. QuickSort: partition around pivot, recurse on halves. MergeSort: split in half, sort each, merge. Understand why MergeSort is O(n log n) always but QuickSort is O(n²) worst case." },
  "Binary Search Patterns: Classic, Search in Rotated Array, Find Minimum": { difficulty:"intermediate", tip:"🎯 The template: lo=0, hi=n-1, while(lo<=hi), mid=lo+(hi-lo)/2. For rotated array: determine which half is sorted, then decide where target could be. Draw this on paper first." },
  "Binary Search on Answer: Capacity to Ship, Koko Eating Bananas": { difficulty:"advanced", tip:"🎯 Key insight: binary search isn't just for arrays — binary search on the ANSWER. Ask: 'is it possible with value X?' If this is monotonic (no→yes→yes), binary search works." },
  "Boss Battle: Complete NeetCode 150 — Arrays & Hashing Section (9 problems)": { difficulty:"intermediate", tip:"🎯 These 9 problems are: Contains Duplicate, Valid Anagram, Two Sum, Group Anagrams, Top K Frequent, Encode/Decode Strings, Product Except Self, Valid Sudoku, Longest Consecutive. Do ALL of them." },

  // ── DSA Month 5: Linked Lists, Stacks & Queues ──
  "Singly Linked List: Node struct, insert at head/tail/position, delete, reverse": { difficulty:"intermediate", tip:"🎯 Draw every pointer operation on paper — always. VisuAlgo is essential for visualization. Reverse linked list is the most-asked linked list problem — master it recursively AND iteratively." },
  "Doubly Linked List & Circular Linked List: implementation, LRU Cache concept": { difficulty:"intermediate", tip:"🎯 LRU Cache (LeetCode #146) combines a doubly linked list + hashmap. This is a hard problem but worth understanding deeply — it appears in real interviews at top companies." },
  "Fast & Slow Pointers (Floyd's Cycle Detection): detect cycle, find middle": { difficulty:"intermediate", tip:"🎯 Fast pointer moves 2, slow moves 1. If cycle exists, they meet. This elegant technique also finds the middle of a list in one pass — no length calculation needed." },
  "Classic Linked List Problems: Merge Two Sorted, Reorder, Remove Nth from End": { difficulty:"intermediate", tip:"🎯 These 3 problems teach key techniques: dummy head node, two-pass vs one-pass, and pointer manipulation patterns. Solve each 3 times until effortless." },
  "Stack: Array-based and Node-based implementation in C++": { difficulty:"beginner", tip:"🎯 Implement both versions from scratch. Array-based is simpler. Node-based uses dynamic memory. Understand tradeoffs: array = cache-friendly, node = dynamic size." },
  "Classic Stack Problems: Valid Parentheses, Min Stack, Evaluate RPN": { difficulty:"intermediate", tip:"🎯 Valid Parentheses teaches the core stack pattern. Min Stack teaches the 'dual-stack' trick. Evaluate RPN teaches how stacks model expression evaluation. All 3 are interview classics." },
  "Monotonic Stack: Next Greater Element, Daily Temperatures, Largest Rectangle": { difficulty:"advanced", tip:"🎯 Monotonic stack maintains elements in increasing or decreasing order. When you push, pop all elements that violate the monotonicity. Daily Temperatures is the perfect intro problem." },
  "Queue: BFS applications, circular queue, deque (double-ended queue)": { difficulty:"intermediate", tip:"🎯 deque (double-ended queue) supports O(1) push/pop from both ends. It's the foundation of the sliding window maximum algorithm. std::deque in C++ is your tool." },
  "Monotonic Deque: Sliding Window Maximum — O(n) solution": { difficulty:"advanced", tip:"🎯 Sliding Window Maximum (LeetCode #239) is a hard problem but the solution is elegant. The deque stores indices of potentially useful elements. Study NeetCode's explanation carefully." },
  "Boss Battle: NeetCode 150 — Stack & Linked List sections (complete both)": { difficulty:"intermediate", tip:"🎯 Stack section: 7 problems. Linked List section: 11 problems. Total: 18 problems. Complete all before moving on. These patterns appear in 25%+ of real coding interviews." },

  // ── DSA Month 6: Trees, Heaps & Tries ──
  "Binary Tree: Struct in C++, construction, height, diameter, level count": { difficulty:"intermediate", tip:"🎯 LeetCode Binary Tree Card is the best structured resource. Implement TreeNode struct yourself. Height, diameter, and level count are the 3 foundational tree recursion problems." },
  "DFS Traversals: Recursive & Iterative (Inorder, Preorder, Postorder)": { difficulty:"intermediate", tip:"🎯 Recursive = simple and clean. Iterative uses an explicit stack. Know BOTH — some interviews specifically ask for iterative. Inorder of BST gives sorted output (critical insight)." },
  "BFS / Level Order: queue-based traversal, zigzag, right side view": { difficulty:"intermediate", tip:"🎯 BFS template: while queue not empty → dequeue → process → enqueue children. Level separator technique: process all nodes at current level before adding next level." },
  "BST Operations: Search, Insert, Delete — and BST validation": { difficulty:"intermediate", tip:"🎯 Validate BST (LeetCode #98) is a classic trap — you can't just check left < node < right for each node alone. You need to pass min/max bounds down through the recursion." },
  "Classic Tree Problems: Lowest Common Ancestor, Diameter, Max Path Sum": { difficulty:"advanced", tip:"🎯 These 3 problems teach: post-order thinking (process children before parent), passing values up the tree, and using a global variable for the answer. Essential patterns for any tree problem." },
  "Segment Trees: Build, Point Update, Range Query — O(log n) operations": { difficulty:"advanced", tip:"🎯 Segment tree enables O(log n) range queries with O(log n) point updates. Competitive programming essential. CP-Algorithms has the clearest explanation. Implement from scratch once." },
  "Binary Indexed Tree (Fenwick Tree): prefix sums with updates in O(log n)": { difficulty:"advanced", tip:"🎯 BIT is simpler to code than a segment tree for prefix sum problems. Key operation: i += i & (-i) to move to parent, i -= i & (-i) to move to next responsibility. Implement once to understand." },
  "Heaps: Max-heap/Min-heap, heapify, heap sort — priority_queue in C++": { difficulty:"intermediate", tip:"🎯 priority_queue<int> = max-heap by default in C++. priority_queue<int,vector<int>,greater<int>> = min-heap. Know how to use both. Heap sort is O(n log n) in-place — good to know." },
  "Heap Problems: K Largest Elements, Merge K Sorted Lists, Task Scheduler": { difficulty:"advanced", tip:"🎯 K Largest = min-heap of size K (counterintuitive but correct — the min-heap tracks the K largest seen so far). Merge K Sorted = min-heap on (value, list_index, element_index)." },
  "Trie: Implement from scratch, word search, prefix matching, autocomplete": { difficulty:"intermediate", tip:"🎯 Every Trie node has children[26] and isEndOfWord flag. Implement all 3 operations: insert, search, startsWith. LeetCode #208 is the canonical implementation problem — solve it cold." },

  // ── DSA Month 7: Graphs ──
  "Graph Theory Basics: Vertices, Edges, Directed/Undirected, Weighted, Cycles": { difficulty:"intermediate", tip:"🎯 Know graph types: directed/undirected, weighted/unweighted, cyclic/acyclic. DAG (Directed Acyclic Graph) = topological sort candidate. These distinctions determine which algorithm to use." },
  "Graph Representation in Code: Adjacency List with unordered_map/vector": { difficulty:"intermediate", tip:"🎯 Default: vector<vector<int>> adj(n). For weighted: vector<vector<pair<int,int>>> adj(n). Adjacency list is preferred over matrix unless the graph is dense." },
  "BFS on Graphs: Shortest Path, Level-Order, Connected Components": { difficulty:"intermediate", tip:"🎯 BFS template: queue + visited array + optional distance array. Always mark visited when ENQUEUING (not when processing) to avoid duplicates. Number of Islands is the essential practice problem." },
  "DFS on Graphs: Traversal, Connected Components, Path Finding": { difficulty:"intermediate", tip:"🎯 DFS template: mark visited → process → recurse on unvisited neighbors. Recursive or iterative (explicit stack). Key: use a visited array to prevent infinite loops in cyclic graphs." },
  "Cycle Detection: in directed graphs (DFS colors), in undirected (Union-Find)": { difficulty:"advanced", tip:"🎯 Directed graphs: DFS with 3 colors (white/gray/black). Gray = currently in DFS stack. If you reach a gray node, cycle exists. Undirected: Union-Find is cleaner." },
  "Topological Sort: Kahn's Algorithm (BFS) and DFS-based approach": { difficulty:"advanced", tip:"🎯 Topological sort only works on DAGs. Kahn's: use in-degree counts, BFS from 0-in-degree nodes. DFS: push to stack after all neighbors processed. Course Schedule II is the standard practice problem." },
  "Union-Find (Disjoint Set Union): path compression, union by rank": { difficulty:"intermediate", tip:"🎯 With path compression + union by rank, operations are near O(1) (O(α(n)) inverse Ackermann). DSU solves: connected components, cycle detection, Kruskal's MST. Implement from scratch." },
  "Dijkstra's Algorithm: min-heap implementation, time complexity": { difficulty:"advanced", tip:"🎯 Template: min-heap of (distance, node), dist array initialized to INF. At each step: pop min, skip if already processed, update neighbors. Network Delay Time (LeetCode #743) is the best practice problem." },
  "Minimum Spanning Tree: Prim's and Kruskal's algorithms": { difficulty:"advanced", tip:"🎯 Kruskal's: sort edges by weight + DSU to avoid cycles. Prim's: min-heap on vertices. Both give the same result. Kruskal's is usually simpler to implement. Min Cost to Connect All Points is good practice." },
  "Boss Battle: NeetCode 150 — Graphs section + CSES Graph Problems (15 problems)": { difficulty:"advanced", tip:"🎯 NeetCode 150 graph section has 13 problems covering all key patterns. After completing, do CSES Graph Algorithms section. These 25+ problems will make you confident with any graph problem." },

  // ── DSA Month 8: Dynamic Programming ──
  "DP Fundamentals: Optimal Substructure, Overlapping Subproblems, State Design": { difficulty:"intermediate", tip:"🎯 Two tests for DP: (1) optimal substructure — optimal solution built from optimal sub-solutions, (2) overlapping subproblems — same subproblem solved multiple times. Both must be true." },
  "1D DP: Climbing Stairs, House Robber, Decode Ways, Word Break": { difficulty:"intermediate", tip:"🎯 Start with Climbing Stairs → Fibonacci → House Robber → Decode Ways. Each problem builds on the previous. The state definition is the key insight — define dp[i] clearly before coding." },
  "Kadane's Algorithm: Maximum Subarray — the foundation of 1D DP": { difficulty:"intermediate", tip:"🎯 Kadane's is O(n) DP: dp[i] = max(nums[i], dp[i-1]+nums[i]). It's the most elegant DP algorithm. Understand it deeply — it's asked directly and as a subroutine in harder problems." },
  "2D DP: Unique Paths, Minimum Path Sum, LCS, Edit Distance": { difficulty:"intermediate", tip:"🎯 2D DP: dp[i][j] usually depends on dp[i-1][j], dp[i][j-1], or dp[i-1][j-1]. Draw the DP table on paper first. Edit Distance and LCS are THE classic interview 2D DP problems." },
  "Knapsack Variations: 0/1 Knapsack, Unbounded Knapsack, Subset Sum": { difficulty:"advanced", tip:"🎯 0/1 Knapsack: each item used 0 or 1 times. Unbounded: each item used any number of times (Coin Change). Subset Sum: can we reach target T? Recognize which variant you have." },
  "DP on Strings: Longest Palindromic Substring, Palindrome Partitioning": { difficulty:"advanced", tip:"🎯 Longest Palindromic Substring: expand from center in O(n²). Or use Manacher's algorithm in O(n). Understand expand-from-center first — it's the interview-expected approach." },
  "Interval DP: Matrix Chain Multiplication, Burst Balloons, Stone Merge": { difficulty:"advanced", tip:"🎯 Interval DP: dp[i][j] = best answer for subarray [i...j]. Enumerate all split points k and combine dp[i][k] + dp[k+1][j]. Burst Balloons is the canonical example." },
  "DP with States: State Machine DP — Buy and Sell Stock series": { difficulty:"advanced", tip:"🎯 Stock problems use state machines: state = (day, transactions_left, holding_or_not). Define transitions between states. Solve stocks 1→2→3→4 in order — each adds complexity." },
  "DP Optimization: Space optimization (rolling array), printing the solution": { difficulty:"advanced", tip:"🎯 2D DP can often be compressed to 1D (O(n) space) by observing that dp[i][j] only depends on previous row. Always mention this optimization in interviews after getting the correct O(n²) solution." },
  "Boss Battle: Complete NeetCode 150 — 1D DP + 2D DP sections (23 problems)": { difficulty:"advanced", tip:"🎯 These 23 problems cover every DP pattern you'll encounter in interviews. Complete all before moving to Month 9. For each problem: define state, write recurrence, then code." },

  // ── DSA Month 9: Advanced Algorithms ──
  "Greedy Algorithm Design: Exchange Arguments, proving optimality": { difficulty:"advanced", tip:"🎯 Greedy proof technique: assume optimal solution differs from greedy solution at some point, then show swapping doesn't make it worse. This 'exchange argument' is the standard proof method." },
  "Greedy Classics: Activity Selection, Jump Game, Gas Station, Job Scheduling": { difficulty:"intermediate", tip:"🎯 Jump Game (LeetCode #55) is the quintessential greedy problem. Track max reachable index. Gas Station shows circular array greedy. Solve these before harder greedy problems." },
  "Bitmask DP: Travelling Salesman Problem, Counting Paths through all nodes": { difficulty:"advanced", tip:"🎯 Bitmask DP: use an integer's bits to represent a subset. dp[mask][i] = best answer visiting nodes in 'mask', ending at node i. TSP is O(n² × 2ⁿ) — feasible for n≤20." },
  "DP on Trees: Rerooting technique, diameter, max independent set on tree": { difficulty:"advanced", tip:"🎯 Tree DP: define dp[node] = answer for subtree rooted at node. Process children first (post-order). Rerooting: run DP twice — once from any root, once to reroot for each node." },
  "String Algorithms: KMP Pattern Matching — O(n+m) search": { difficulty:"advanced", tip:"🎯 KMP is O(n+m) vs O(nm) for brute force. Key: build the failure function (prefix function) first. CP-Algorithms KMP article is the definitive explanation — read it fully." },
  "Z-Algorithm & Rabin-Karp: alternative string matching approaches": { difficulty:"advanced", tip:"🎯 Z-array: z[i] = length of longest substring starting at i that is also a prefix of the string. Rabin-Karp uses rolling hash for O(n+m) average. Z-algorithm is simpler to implement than KMP." },
  "Trie Advanced: Aho-Corasick, Suffix Array, Suffix Automaton (concepts)": { difficulty:"advanced", tip:"🎯 These are advanced CP topics. Aho-Corasick: multi-pattern matching in O(n+m+matches). Suffix Array: all suffixes sorted — essential for string problems. Read CP-Algorithms explanations." },
  "Segment Tree with Lazy Propagation: range updates, range queries": { difficulty:"advanced", tip:"🎯 Lazy propagation delays updates to save time. Instead of updating all nodes in a range, mark the parent as 'lazy' and propagate when needed. Reduces range update from O(n) to O(log n)." },
  "Sparse Table: Range Minimum Query (RMQ) in O(1) query, O(n log n) build": { difficulty:"advanced", tip:"🎯 Sparse Table gives O(1) RMQ queries after O(n log n) preprocessing. Works only for idempotent operations (min, max, gcd). Faster than segment tree when only queries, no updates." },
  "Divide and Conquer Optimization: DP with Divide & Conquer optimization trick": { difficulty:"advanced", tip:"🎯 D&C optimization reduces O(n²) DP to O(n log n) when the opt function (argmin) is monotone. Advanced CP topic. Read the CP-Algorithms article and study the examples carefully." },

  // ── DSA Month 10: Interview Mastery ──
  "Interview Framework: how to approach any problem — 5-step method": { difficulty:"intermediate", tip:"🎯 The 5 steps: (1) Clarify constraints, (2) State examples, (3) Brute force first, (4) Optimize, (5) Code + test. Always state your time/space complexity after coding. Never jump straight to code." },
  "Hard Graph Problems: Alien Dictionary, Critical Connections, Swim in Water": { difficulty:"advanced", tip:"🎯 Alien Dictionary requires building a graph from word ordering then topological sort. Critical Connections uses Tarjan's bridge-finding algorithm. These test deep graph mastery." },
  "Hard DP Problems: Regular Expression Matching, Wildcard Matching, Best Time to Buy & Sell IV": { difficulty:"advanced", tip:"🎯 Regex Matching is a famous DP hard problem. The key: handle '.' and '*' as special cases in the recurrence. Trace through small examples before coding." },
  "Competitive Programming Contests: Codeforces Div 2 A-D, AtCoder Beginner Contests": { difficulty:"advanced", tip:"🎯 Codeforces Div 2 A-B = LeetCode Easy/Medium. C = Medium/Hard. Participating in even 5 contests significantly improves your speed and pattern recognition under pressure." },
  "Mock Interview Practice: untimed then timed — Pramp, Interviewing.io": { difficulty:"intermediate", tip:"🎯 Phase 1: solve problems untimed, talk through your thinking. Phase 2: 45-min timed. Phase 3: Interviewing.io for real engineer feedback. The jump from coding to interviewing is real — practice it." },
  "Complete NeetCode 150: finish all remaining sections": { difficulty:"intermediate", tip:"🎯 If you've completed previous boss battles, you should have 80+ problems done. Focus on remaining: Tries, Math & Geometry, Advanced Graphs, Greedy. Complete all 150 before any FAANG application." },
  "System Design for SDEs: URL Shortener, Parking Lot, Rate Limiter": { difficulty:"advanced", tip:"🎯 For each design: start with requirements → capacity estimation → high-level design → deep dive into 2-3 components → discuss tradeoffs. ByteByteGo YouTube is the best free resource for this." },
  "Advanced C++ for Interviews: move semantics, smart pointers, templates basics": { difficulty:"advanced", tip:"🎯 Interviewers at systems companies (Google, Meta, Citadel) DO ask C++ specifics. Understand: unique_ptr vs shared_ptr, move vs copy, template basics. CppCon talks are the best resource." },
  "Competitive Programming Resources: CLRS, CP Handbook, Competitive Programmer's Handbook": { difficulty:"advanced", tip:"🎯 CP Handbook (free PDF) covers 90% of what you need for Div 2. CLRS is the theoretical bible — read selectively (chapters on sorting, DP, graph algorithms). USACO Guide has a great learning path." },
  "Final Boss: 5 Mock Interviews + Review All Weak Areas + DSA Portfolio": { difficulty:"advanced", tip:"🎯 Create a GitHub repo of clean, well-commented solutions to 150+ problems. Organize by topic. This portfolio shows employers you can write readable, maintainable code under pressure." }
};
// ═══════════════════════════════════════════════════════════════════════
//  ACHIEVEMENTS SYSTEM
// ═══════════════════════════════════════════════════════════════════════
const ACHIEVEMENTS = [
  // ── Quest Count Milestones ──
  { id: "first_blood",  icon: "🩸", name: "First Blood",      desc: "Complete your very first quest.", condition: s => Object.keys(s.completedQuests).length >= 1 },
  { id: "quests_5",     icon: "✋", name: "Getting Started",   desc: "Complete 5 quests.", condition: s => Object.keys(s.completedQuests).length >= 5 },
  { id: "bookworm",     icon: "📚", name: "Bookworm",          desc: "Complete 10 quests.", condition: s => Object.keys(s.completedQuests).length >= 10 },
  { id: "quests_20",    icon: "📖", name: "In the Zone",       desc: "Complete 20 quests.", condition: s => Object.keys(s.completedQuests).length >= 20 },
  { id: "grinder",      icon: "⚙️", name: "The Grinder",      desc: "Complete 30 quests.", condition: s => Object.keys(s.completedQuests).length >= 30 },
  { id: "quests_50",    icon: "💪", name: "Halfway Hustler",   desc: "Complete 50 quests.", condition: s => Object.keys(s.completedQuests).length >= 50 },
  { id: "century",      icon: "💯", name: "Centurion",         desc: "Complete 75 quests.", condition: s => Object.keys(s.completedQuests).length >= 75 },
  { id: "dedicated",    icon: "🎖️", name: "Dedicated",        desc: "Complete 100 quests.", condition: s => Object.keys(s.completedQuests).length >= 100 },
  { id: "quests_150",   icon: "🏅", name: "Quest Conqueror",   desc: "Complete 150 quests.", condition: s => Object.keys(s.completedQuests).length >= 150 },
  { id: "quests_all",   icon: "🌌", name: "Everything",        desc: "Complete every single quest on both tracks.", condition: s => Object.keys(s.completedQuests).length >= 220 },

  // ── SDE Track Milestones ──
  { id: "sde_month1",   icon: "🌱", name: "Root Node",         desc: "Complete SDE Month 1: Programming Foundations.", condition: s => isMonthComplete(s, 1, roadmapData) },
  { id: "sde_month2",   icon: "🧱", name: "Object Builder",    desc: "Complete SDE Month 2: OOP & Version Control.", condition: s => isMonthComplete(s, 2, roadmapData) },
  { id: "sde_month3",   icon: "🗃️", name: "Data Sculptor",    desc: "Complete SDE Month 3: Basic Data Structures.", condition: s => isMonthComplete(s, 3, roadmapData) },
  { id: "sde_month4",   icon: "🧠", name: "Algorithm Thinker", desc: "Complete SDE Month 4: Algorithmic Thinking.", condition: s => isMonthComplete(s, 4, roadmapData) },
  { id: "sde_month5",   icon: "🌳", name: "Tree Whisperer",    desc: "Complete SDE Month 5: Advanced Data Structures.", condition: s => isMonthComplete(s, 5, roadmapData) },
  { id: "sde_month6",   icon: "🌐", name: "Web Weaver",        desc: "Complete SDE Month 6: Web & Networking.", condition: s => isMonthComplete(s, 6, roadmapData) },
  { id: "sde_month7",   icon: "🗄️", name: "Data Wrangler",    desc: "Complete SDE Month 7: Databases & SQL.", condition: s => isMonthComplete(s, 7, roadmapData) },
  { id: "sde_month8",   icon: "⚙️", name: "API Architect",    desc: "Complete SDE Month 8: Backend Engineering.", condition: s => isMonthComplete(s, 8, roadmapData) },
  { id: "sde_month9",   icon: "🏗️", name: "System Thinker",   desc: "Complete SDE Month 9: System Design.", condition: s => isMonthComplete(s, 9, roadmapData) },
  { id: "sde_month10",  icon: "☁️", name: "Cloud Rider",       desc: "Complete SDE Month 10: Cloud & DevOps.", condition: s => isMonthComplete(s, 10, roadmapData) },
  { id: "sde_month11",  icon: "🔐", name: "Security Guardian", desc: "Complete SDE Month 11: Specialized & Security.", condition: s => isMonthComplete(s, 11, roadmapData) },
  { id: "month_champ",  icon: "🏆", name: "Month Champion",    desc: "Complete any full month on either track.", condition: s => completedAnyMonth(s) },
  { id: "half_sde",     icon: "🛤️", name: "Halfway There",    desc: "Complete 6 SDE months.", condition: s => countCompletedMonths(s, roadmapData) >= 6 },
  { id: "sde_nine",     icon: "🔝", name: "Almost There",      desc: "Complete 9 SDE months.", condition: s => countCompletedMonths(s, roadmapData) >= 9 },
  { id: "sde_complete", icon: "🚀", name: "SDE Graduate",      desc: "Complete all 12 SDE months.", condition: s => countCompletedMonths(s, roadmapData) >= 12 },
  { id: "fullstack_trio",icon:"🔗", name: "Full Stack Trifecta",desc: "Complete SDE Months 6 (Web), 7 (SQL), and 8 (Backend).", condition: s => isMonthComplete(s,6,roadmapData) && isMonthComplete(s,7,roadmapData) && isMonthComplete(s,8,roadmapData) },

  // ── DSA Track Milestones ──
  { id: "dsa_initiate",  icon: "⚡", name: "DSA Initiate",     desc: "Complete DSA Month 1: C++ Foundations.", condition: s => isMonthComplete(s, "dsa-1", dsaRoadmapData) },
  { id: "cpp_master",    icon: "🔧", name: "C++ Craftsman",    desc: "Complete both C++ months (DSA 1 & 2).", condition: s => isMonthComplete(s,"dsa-1",dsaRoadmapData) && isMonthComplete(s,"dsa-2",dsaRoadmapData) },
  { id: "math_wizard",   icon: "🧮", name: "Math Wizard",      desc: "Complete DSA Month 3: Math & Recursion.", condition: s => isMonthComplete(s, "dsa-3", dsaRoadmapData) },
  { id: "pattern_master",icon: "🎯", name: "Pattern Master",   desc: "Complete DSA Month 4: Arrays, Hashing & Two Pointers.", condition: s => isMonthComplete(s, "dsa-4", dsaRoadmapData) },
  { id: "pointer_pro",   icon: "🔗", name: "Pointer Pro",      desc: "Complete DSA Month 5: Linked Lists, Stacks & Queues.", condition: s => isMonthComplete(s, "dsa-5", dsaRoadmapData) },
  { id: "tree_lord",     icon: "🌲", name: "Tree Lord",        desc: "Complete DSA Month 6: Trees, Heaps & Tries.", condition: s => isMonthComplete(s, "dsa-6", dsaRoadmapData) },
  { id: "graph_god",     icon: "🕸️", name: "Graph God",        desc: "Complete DSA Month 7: Graphs.", condition: s => isMonthComplete(s, "dsa-7", dsaRoadmapData) },
  { id: "dp_wizard",     icon: "💎", name: "DP Wizard",        desc: "Complete DSA Month 8: Dynamic Programming.", condition: s => isMonthComplete(s, "dsa-8", dsaRoadmapData) },
  { id: "algo_adept",    icon: "🧮", name: "Algorithm Adept",  desc: "Complete 5 DSA months.", condition: s => countCompletedMonths(s, dsaRoadmapData) >= 5 },
  { id: "dsa_seven",     icon: "🎖️", name: "Seven Strong",    desc: "Complete 7 DSA months.", condition: s => countCompletedMonths(s, dsaRoadmapData) >= 7 },
  { id: "dsa_complete",  icon: "👑", name: "DSA Master",       desc: "Complete all 10 DSA months.", condition: s => countCompletedMonths(s, dsaRoadmapData) >= 10 },
  { id: "legend",        icon: "🌟", name: "Legend",           desc: "Complete ALL months on both tracks.", condition: s => countCompletedMonths(s, roadmapData) >= 12 && countCompletedMonths(s, dsaRoadmapData) >= 10 },

  // ── Streak Achievements ──
  { id: "streak_3",   icon: "🔥", name: "Spark",         desc: "Maintain a 3-day learning streak.", condition: s => (s.streak||0) >= 3 },
  { id: "streak_7",   icon: "🔥", name: "On Fire",       desc: "Maintain a 7-day streak.", condition: s => (s.streak||0) >= 7 },
  { id: "streak_14",  icon: "💥", name: "Blazing",       desc: "Maintain a 14-day streak.", condition: s => (s.streak||0) >= 14 },
  { id: "streak_30",  icon: "🌋", name: "Unstoppable",   desc: "Maintain a 30-day streak.", condition: s => (s.streak||0) >= 30 },
  { id: "streak_60",  icon: "☄️", name: "Force of Nature",desc: "Maintain a 60-day streak.", condition: s => (s.streak||0) >= 60 },

  // ── Level Achievements ──
  { id: "level_3",  icon: "⭐",  name: "First Stars",      desc: "Reach Level 3.", condition: s => s.level >= 3 },
  { id: "level_5",  icon: "⭐",  name: "Rising Star",      desc: "Reach Level 5.", condition: s => s.level >= 5 },
  { id: "level_7",  icon: "💫",  name: "Shooting Star",    desc: "Reach Level 7.", condition: s => s.level >= 7 },
  { id: "level_10", icon: "🌠",  name: "Senior Engineer",  desc: "Reach Level 10.", condition: s => s.level >= 10 },
  { id: "level_12", icon: "🌌",  name: "Principal",        desc: "Reach Level 12.", condition: s => s.level >= 12 },

  // ── Special Achievements ──
  { id: "both_started", icon: "🎭", name: "Double Threat",   desc: "Start both the SDE and DSA tracks.", condition: s => Object.keys(s.completedQuests).some(k=>k.startsWith('dsa')) && Object.keys(s.completedQuests).some(k=>!k.startsWith('dsa')) },
  { id: "note_taker",   icon: "📝", name: "Note Taker",      desc: "Write notes on 10 different topics.", condition: s => Object.keys(s.notes||{}).length >= 10 },
  { id: "bookmarker",   icon: "🔖", name: "Bookmarker",      desc: "Bookmark 5 topics to revisit.", condition: s => Object.keys(s.bookmarkedQuests||{}).length >= 5 },
  { id: "deep_diver",   icon: "🤿", name: "Deep Diver",      desc: "Write notes on 25 different topics.", condition: s => Object.keys(s.notes||{}).length >= 25 },
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
  authDomain: "sde-levelling.web.app",        // must match the domain you're hosted on
  projectId: "sde-levelling",
  storageBucket: "sde-levelling.firebasestorage.app",
  messagingSenderId: "30870143922",
  appId: "1:30870143922:web:96940f660b446b471fdaab"
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db   = firebase.firestore();

// Set session persistence once at startup — sessions survive tab closes & page reloads.
// Using the string literal 'local' is more reliable than firebase.auth.Auth.Persistence.LOCAL
// in bundled/deployed environments where the class reference may not resolve correctly.
auth.setPersistence('local').catch(e => console.warn('[Auth] setPersistence:', e.message));

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
    lastActivityDate: null,
    notes: {},            // key = "monthId-questIndex", value = note string
    bookmarkedQuests: {}  // key = "monthId-questIndex", value = true
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
const authErrorMsg     = document.getElementById('auth-error-msg'); // lives inside authErrorBox

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
let _authResolved = false; // true once Firebase confirms session status

function init() {
  // 0. Handle Google redirect result FIRST — if user just came back from Google sign-in
  //    getRedirectResult resolves once and is null if no redirect happened.
  auth.getRedirectResult().then(result => {
    if (result && result.user) {
      // Redirect sign-in succeeded — onAuthStateChanged will fire and handle the rest
      authModal.classList.remove('show');
      resetAuthModal();
    }
  }).catch(err => {
    console.error('[Redirect Result Error]', err.code, err.message);
    if (err.code && err.code !== 'auth/no-auth-event') {
      // Show auth modal with error if redirect failed
      resetAuthModal();
      authModal.classList.add('show');
      showAuthError(AUTH_ERRORS[err.code] || `Google sign-in failed. (${err.code})`);
    }
  });

  // 1. Load from localStorage IMMEDIATELY for instant first paint
  loadLocalProgress();
  updateStreakUI();
  renderBothRoadmaps();
  updatePlayerStatsUI();
  updateTrackStats();
  renderAchievements();

  // 2. Firebase auth state — resolves asynchronously
  auth.onAuthStateChanged(async user => {
    const saveInd = document.getElementById('save-indicator');
    if (user) {
      // ── LOGGED IN ──
      currentUser = user;
      userInfo.style.display  = 'flex';
      userEmailSpan.innerText = user.email.split('@')[0];
      authBtn.style.display   = 'none';
      logoutBtn.style.display = 'inline-block';
      if (saveInd) saveInd.style.display = 'none'; // cloud icon replaces it
      // Pre-save email for next-time pre-fill
      try { localStorage.setItem('sdeQuestLastEmail', user.email); } catch(e) {}
      await fetchCloudProgress(); // merge cloud state (may be ahead of local)
    } else {
      // ── LOGGED OUT ──
      currentUser = null;
      userInfo.style.display  = 'none';
      authBtn.style.display   = 'inline-block';
      logoutBtn.style.display = 'none';
      if (saveInd) saveInd.style.display = 'flex'; // show local save icon

      if (_authResolved) {
        // Real logout — keep local progress visible, cloud sync disabled
        renderBothRoadmaps();
        updatePlayerStatsUI();
        updateTrackStats();
        updateStreakUI();
        renderAchievements();
      }
      // else: first-paint null — localStorage already loaded above
    }
    _authResolved = true;
  });

  // Tab switching
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Modals
  closeModalBtn.addEventListener('click', closeModal);
  closeAchBtn.addEventListener('click', () => achievementsModal.classList.remove('show'));
  closeAuthBtn.addEventListener('click', () => { authModal.classList.remove('show'); resetAuthModal(); });

  window.addEventListener('click', e => {
    if (e.target === modal) closeModal();
    if (e.target === achievementsModal) achievementsModal.classList.remove('show');
    if (e.target === authModal) { authModal.classList.remove('show'); resetAuthModal(); }
  });

  resetBtn.addEventListener('click', resetProgress);
  achievementsBtn.addEventListener('click', () => { achievementsModal.classList.add('show'); newAchDot.style.display = 'none'; });
  authBtn.addEventListener('click', () => { resetAuthModal(); authModal.classList.add('show'); });
  // Logout — sign out + keep showing local progress (state stays in localStorage)
  logoutBtn.addEventListener('click', () => auth.signOut());

  // Google Sign-In button
  const googleSignInBtn = document.getElementById('google-signin-btn');
  if (googleSignInBtn) googleSignInBtn.addEventListener('click', handleGoogleSignIn);

  authToggleBtn.addEventListener('click', toggleAuthMode);
  authSubmitBtn.addEventListener('click', handleAuthSubmit);

  // Enter key submits auth form
  [authEmailInput, authPasswordInput].forEach(input => {
    input.addEventListener('keydown', e => { if (e.key === 'Enter') handleAuthSubmit(); });
  });

  // Clear error box when user starts typing
  [authEmailInput, authPasswordInput].forEach(input => {
    input.addEventListener('input', () => {
      authErrorBox.style.display = 'none';
    });
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
const LS_KEY = 'sdeQuestProgress_v2';

function flashSaveIndicator() {
  const ind = document.getElementById('save-indicator');
  if (!ind) return;
  ind.classList.add('saved-flash');
  setTimeout(() => ind.classList.remove('saved-flash'), 1200);
}

function saveProgress() {
  // Always save to localStorage so progress survives session expiry / PC restarts
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(playerState));
    flashSaveIndicator();
  } catch(e) { console.warn('localStorage save failed:', e); }

  // If logged in, also sync to Firestore (cloud backup)
  if (currentUser) {
    db.collection('userProgress').doc(currentUser.uid)
      .set({ ...playerState, _lastSaved: Date.now() })
      .catch(err => console.error("Cloud save failed:", err));
  }
}

// Load from localStorage immediately — used on first paint before cloud sync
function loadLocalProgress() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      playerState = { ...defaultState(), ...saved };
      ensureDefaults();
      checkUnlocks();
    }
  } catch(e) { console.warn('localStorage load failed:', e); }
}

function ensureDefaults() {
  if (!playerState.unlockedMonths)    playerState.unlockedMonths    = [1];
  if (!playerState.unlockedDsaMonths) playerState.unlockedDsaMonths = ["dsa-1"];
  if (!playerState.achievements)      playerState.achievements      = [];
  // Use explicit null/undefined check — 0 is a valid streak value, must not overwrite it
  if (playerState.streak == null)     playerState.streak            = 0;
  if (!playerState.notes)             playerState.notes             = {};
  if (!playerState.bookmarkedQuests)  playerState.bookmarkedQuests  = {};
}

function resetProgress() {
  if (!confirm("Reset ALL progress? This cannot be undone.")) return;
  playerState = defaultState();
  try { localStorage.removeItem(LS_KEY); } catch(e) {}
  saveProgress();
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
      const cloudData = doc.data();
      // Merge strategy: use whichever state has more completed quests (most progress)
      const localKeys  = Object.keys(playerState.completedQuests || {}).length;
      const cloudKeys  = Object.keys(cloudData.completedQuests  || {}).length;
      const cloudTs    = cloudData._lastSaved || 0;
      const localTs    = playerState._lastSaved || 0;

      // Prefer cloud if it has MORE quests, OR same quests but is newer
      if (cloudKeys > localKeys || (cloudKeys === localKeys && cloudTs >= localTs)) {
        playerState = { ...defaultState(), ...cloudData };
      }
      // else keep local (it's ahead)
    } else {
      // Brand new user in Firestore — local state (if any) is the truth
      // Just write local state to cloud
      saveProgress();
    }
    ensureDefaults();
    updateStreak();
    checkUnlocks();
    checkLevelUp();
    // Sync whatever we decided is canonical back to both stores
    saveProgress();
    renderBothRoadmaps();
    updatePlayerStatsUI();
    updateTrackStats();
    updateStreakUI();
    renderAchievements();
  } catch(e) {
    console.error("Failed to fetch cloud progress:", e);
    // Fall through — localStorage data is already displayed, no data loss
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
  // Collect all level-ups first, then animate them one by one
  let levelsGained = 0;
  while (playerState.xp >= getRequiredXP(playerState.level)) {
    playerState.level++;
    levelsGained++;
  }
  if (levelsGained > 0) {
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
    newlyUnlocked.forEach(ach => showAchievementNotification(ach));
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
    const bookmarked = !!(playerState.bookmarkedQuests && playerState.bookmarkedQuests[key]);
    const savedNote = (playerState.notes && playerState.notes[key]) || '';
    if (done) doneCount++;

    // Look up metadata (tip + difficulty) from TOPIC_META
    const meta = TOPIC_META[topicObj.title] || {};
    const diff = meta.difficulty || null;
    const tip  = meta.tip || null;

    // Difficulty badge
    const diffLabels = { beginner: '🟢 Beginner', intermediate: '🟡 Intermediate', advanced: '🔴 Advanced' };
    const diffHtml = diff ? `<span class="difficulty-badge diff-${diff}">${diffLabels[diff]}</span>` : '';

    // Tip banner
    const tipHtml = tip ? `<div class="quest-tip"><i class="fa-solid fa-lightbulb"></i> ${tip}</div>` : '';

    // Resources with type detection
    let resourcesHtml = '';
    if (topicObj.resources && topicObj.resources.length > 0) {
      const links = topicObj.resources.map(r => {
        const n = r.name;
        let typeIcon = '🔗', typeCls = 'res-generic';
        if (n.startsWith('🎬') || /video|watch|youtube|playlist/i.test(n)) { typeIcon='🎬'; typeCls='res-video'; }
        else if (n.startsWith('📖') || /book|guide|docs|tutorial|read|chapter|reference|learncpp/i.test(n)) { typeIcon='📖'; typeCls='res-read'; }
        else if (n.startsWith('🔧') || /interactive|visuali|game|froggy|garden|playground/i.test(n)) { typeIcon='🔧'; typeCls='res-interactive'; }
        else if (n.startsWith('🏋️') || n.startsWith('📝') || /leetcode|hackerrank|cses|codeforces|practice|problem|exercise/i.test(n)) { typeIcon='🏋️'; typeCls='res-practice'; }
        else if (/tip:/i.test(n)) { typeIcon='💡'; typeCls='res-tip'; }
        return `<a href="${r.url}" target="_blank" rel="noopener" class="resource-link ${typeCls}" onclick="event.stopPropagation()">
          <span class="res-type-icon">${typeIcon}</span><span class="res-name">${r.name}</span>
        </a>`;
      }).join('');

      // Notes section inside resources panel
      const notesSection = `
        <div class="quest-notes-section">
          <div class="notes-label"><i class="fa-solid fa-pencil"></i> My Notes <span class="notes-hint">(saves automatically)</span></div>
          <textarea class="quest-notes-input" placeholder="Key takeaways, code snippets, questions to revisit..." rows="3" data-key="${key}">${savedNote}</textarea>
        </div>`;

      resourcesHtml = `<div class="quest-resources">
        <div class="resources-title"><i class="fa-solid fa-book-open"></i> Learning Resources</div>
        ${links}
        ${notesSection}
      </div>`;
    }

    const item = document.createElement('div');
    item.className = `quest-item ${done ? 'completed' : ''} ${bookmarked ? 'is-bookmarked' : ''} ${track === 'dsa' ? 'dsa-quest' : ''}`;

    item.innerHTML = `
      <div class="quest-header">
        <div class="quest-checkbox tooltip" title="Mark complete"><i class="fa-solid fa-check"></i></div>
        <div class="quest-content">
          <div class="quest-title-row">
            <div class="quest-title">${topicObj.title}</div>
            ${diffHtml}
          </div>
          ${tipHtml}
        </div>
        <div class="quest-meta">
          <span class="quest-xp">+${xpPerQ} XP</span>
          <button class="bookmark-btn${bookmarked ? ' active' : ''}" title="${bookmarked ? 'Remove bookmark' : 'Bookmark to revisit'}" onclick="event.stopPropagation()">
            <i class="fa-${bookmarked ? 'solid' : 'regular'} fa-bookmark"></i>
          </button>
          ${resourcesHtml ? '<i class="fa-solid fa-chevron-down expand-icon"></i>' : ''}
        </div>
      </div>
      ${resourcesHtml}
    `;

    item.querySelector('.quest-checkbox').addEventListener('click', e => {
      e.stopPropagation();
      toggleQuest(month.id, index, item, track);
    });

    item.querySelector('.bookmark-btn').addEventListener('click', e => {
      e.stopPropagation();
      toggleBookmark(month.id, index, item);
    });

    if (resourcesHtml) {
      item.querySelector('.quest-header').addEventListener('click', () => {
        item.classList.toggle('expanded');
      });
      // Auto-save notes
      const notesInput = item.querySelector('.quest-notes-input');
      if (notesInput) {
        notesInput.addEventListener('click', e => e.stopPropagation());
        notesInput.addEventListener('input', () => {
          if (!playerState.notes) playerState.notes = {};
          if (notesInput.value.trim()) {
            playerState.notes[key] = notesInput.value;
          } else {
            delete playerState.notes[key];
          }
          checkAchievements(); // check note-taking achievements
          saveProgress();
        });
      }
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
  // Only re-render the single card that changed, not all 22 cards
  updateSingleCard(monthId, track);
}

// Lightweight card updater — avoids full re-render on every quest click
function updateSingleCard(monthId, track) {
  const container = track === 'dsa' ? dsaContainer : sdeContainer;
  const data      = track === 'dsa' ? dsaRoadmapData : roadmapData;
  const unlockedList = track === 'sde' ? playerState.unlockedMonths : playerState.unlockedDsaMonths;
  const month     = data.find(m => String(m.id) === String(monthId));
  if (!month) return;

  const xpPerQ = track === 'dsa' ? DSA_XP_PER_QUEST : SDE_XP_PER_QUEST;
  const totalQ = month.topics.length;
  let doneQ = 0;
  month.topics.forEach((_, q) => { if (playerState.completedQuests[`${month.id}-${q}`]) doneQ++; });
  const isComplete = doneQ === totalQ;
  const pct = (doneQ / totalQ) * 100;

  // Find the card in the DOM by index in the container
  const idx = data.findIndex(m => String(m.id) === String(monthId));
  const cards = container.querySelectorAll('.month-card');
  const card = cards[idx];
  if (!card) return;

  // Update classes
  card.classList.toggle('completed', isComplete);

  // Update progress bar and quest count
  const bar = card.querySelector('.mini-bar-fill');
  if (bar) bar.style.width = `${pct}%`;
  const footer = card.querySelector('.card-footer span');
  if (footer) footer.innerText = `${doneQ}/${totalQ} Quests`;

  // Update status icon (lock/unlock/check)
  const isUnlocked = unlockedList.some(u => String(u) === String(month.id));
  const statusArea = card.querySelector('.status-icon');
  if (statusArea && !month.badge) {
    statusArea.innerHTML = isComplete
      ? '<i class="fa-solid fa-circle-check"></i>'
      : (isUnlocked ? '<i class="fa-solid fa-lock-open"></i>' : '<i class="fa-solid fa-lock"></i>');
  }

  // If a new month just unlocked, do a full re-render (rare, worth the cost)
  const prevUnlocked = unlockedList.length;
  checkUnlocks();
  if (unlockedList.length !== prevUnlocked) {
    renderBothRoadmaps();
  }
}

function updateModalProgress(done, total) {
  modalProgressText.innerText = `${done}/${total} Quests Completed`;
  modalProgressFill.style.width = `${(done / total) * 100}%`;
}

function toggleBookmark(monthId, questIndex, el) {
  const key = `${monthId}-${questIndex}`;
  if (!playerState.bookmarkedQuests) playerState.bookmarkedQuests = {};
  const wasBookmarked = !!playerState.bookmarkedQuests[key];
  if (wasBookmarked) {
    delete playerState.bookmarkedQuests[key];
    el.classList.remove('is-bookmarked');
  } else {
    playerState.bookmarkedQuests[key] = true;
    el.classList.add('is-bookmarked');
    // small animation
    el.style.transform = 'translateX(4px)';
    setTimeout(() => el.style.transform = '', 200);
  }
  const btn = el.querySelector('.bookmark-btn');
  if (btn) {
    btn.classList.toggle('active', !wasBookmarked);
    const icon = btn.querySelector('i');
    if (icon) icon.className = wasBookmarked ? 'fa-regular fa-bookmark' : 'fa-solid fa-bookmark';
  }
  checkAchievements();
  saveProgress();
}

// ═══════════════════════════════════════════════════════════════════════
//  AUTH
// ═══════════════════════════════════════════════════════════════════════

// ── DOM refs specific to auth (not grabbed globally above) ──
const authSubmitTextEl  = document.getElementById('auth-submit-text');
const authSubmitSpinner = document.getElementById('auth-submit-spinner');
const authErrorBox      = document.getElementById('auth-error-box');
const authResetInlineBtn= document.getElementById('auth-reset-inline-btn');
const togglePwBtn       = document.getElementById('toggle-password');
const togglePwIcon      = document.getElementById('toggle-password-icon');

// ── Toggle password visibility ──
togglePwBtn.addEventListener('click', () => {
  const isHidden = authPasswordInput.type === 'password';
  authPasswordInput.type = isHidden ? 'text' : 'password';
  togglePwIcon.className = isHidden ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
  togglePwBtn.style.color = isHidden ? 'var(--primary)' : 'var(--text-muted)';
  authPasswordInput.focus();
});

// ── Inline reset button ──
authResetInlineBtn.addEventListener('click', async () => {
  const email = authEmailInput.value.trim();
  if (!email) { showAuthError("Enter your email above first."); return; }
  authResetInlineBtn.disabled = true;
  authResetInlineBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
  try {
    await auth.sendPasswordResetEmail(email);
    authErrorBox.style.display = 'block';
    authErrorMsg.style.display = 'none';
    authResetInlineBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Reset email sent! Check your inbox.';
    authResetInlineBtn.style.background = 'rgba(16,185,129,0.15)';
    authResetInlineBtn.style.borderColor = 'rgba(16,185,129,0.4)';
    authResetInlineBtn.style.color = 'var(--success)';
  } catch(err) {
    authResetInlineBtn.disabled = false;
    authResetInlineBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send password reset email';
    showAuthError(AUTH_ERRORS[err.code] || `Reset failed. (${err.code})`);
  }
});

// ── Google Sign-In — uses redirect (more reliable than popup on deployed sites) ──
function handleGoogleSignIn() {
  const googleBtn = document.getElementById('google-signin-btn');
  if (googleBtn) {
    googleBtn.disabled = true;
    googleBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin" style="font-size:1rem;"></i> Redirecting to Google...';
  }
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    // Redirect — page will leave and come back. onAuthStateChanged handles the result.
    auth.signInWithRedirect(provider);
  } catch(err) {
    console.error('[Google Auth Error]', err.code, err.message);
    showAuthError(AUTH_ERRORS[err.code] || `Google sign-in failed. (${err.code})`);
    if (googleBtn) {
      googleBtn.disabled = false;
      googleBtn.innerHTML = `<span class="g-logo"><img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="G"></span> Continue with Google`;
    }
  }
}

// Google button is wired inside init() — see event listener setup below

function resetAuthModal() {
  isLoginMode = true;
  authModalTitle.innerText = "Cloud Save";
  authSubmitTextEl.innerText = "Log In";
  authSubmitBtn.disabled = false;
  authSubmitSpinner.style.display = 'none';
  authSubmitTextEl.style.display = '';
  authToggleTextEl.innerText = "Don't have an account?";
  authToggleBtn.innerText = "Sign Up";
  // Clear error box fully
  authErrorBox.style.display = 'none';
  authErrorMsg.style.display = 'none';
  authErrorMsg.innerText = '';
  authResetInlineBtn.style.display = 'none';
  authResetInlineBtn.disabled = false;
  authResetInlineBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send password reset email';
  authResetInlineBtn.style.background = '';
  authResetInlineBtn.style.borderColor = '';
  authResetInlineBtn.style.color = '';
  // Pre-fill email if we remember it
  try {
    const lastEmail = localStorage.getItem('sdeQuestLastEmail');
    if (lastEmail) authEmailInput.value = lastEmail;
    else authEmailInput.value = '';
  } catch(e) { authEmailInput.value = ''; }
  authPasswordInput.value = '';
  authPasswordInput.type = 'password';
  authPasswordInput.setAttribute('autocomplete', 'current-password');
  togglePwIcon.className = 'fa-solid fa-eye';
  togglePwBtn.style.color = 'var(--text-muted)';
  // Forgot password row
  const fp = document.getElementById('forgot-password-row');
  if (fp) fp.style.display = '';
}

function toggleAuthMode() {
  isLoginMode = !isLoginMode;
  authModalTitle.innerText = isLoginMode ? "Cloud Save" : "Create Account";
  authSubmitTextEl.innerText = isLoginMode ? "Log In" : "Sign Up";
  authToggleTextEl.innerText = isLoginMode ? "Don't have an account?" : "Already have an account?";
  authToggleBtn.innerText = isLoginMode ? "Sign Up" : "Log In";
  // Update autocomplete so browser autofill behaves correctly for each mode
  authPasswordInput.setAttribute('autocomplete', isLoginMode ? 'current-password' : 'new-password');
  // Hide error box and forgot-password in signup mode
  authErrorBox.style.display = 'none';
  authErrorMsg.style.display = 'none';
  authResetInlineBtn.style.display = 'none';
  const fp = document.getElementById('forgot-password-row');
  if (fp) fp.style.display = isLoginMode ? '' : 'none';
}

// Maps Firebase error codes → human-readable messages
const AUTH_ERRORS = {
  'auth/invalid-credential':     'Incorrect email or password. Forgotten your password? Use the reset button below — it only takes 10 seconds.',
  'auth/user-not-found':         'No account found with this email. Try signing up instead.',
  'auth/wrong-password':         'Incorrect password. Use the reset button below to set a new one.',
  'auth/email-already-in-use':   'An account with this email already exists. Try logging in.',
  'auth/weak-password':          'Password must be at least 6 characters.',
  'auth/invalid-email':          'Please enter a valid email address.',
  'auth/too-many-requests':      'Too many failed attempts. Wait a few minutes, or use the reset button below.',
  'auth/network-request-failed': 'Network error. Check your internet connection and try again.',
  'auth/user-disabled':          'This account has been disabled. Contact support.',
  'auth/operation-not-allowed':  'Email/password sign-in is not enabled. Try Google sign-in instead.',
  'auth/popup-closed-by-user':   'Sign-in window was closed. Please try again.',
  'auth/popup-blocked':          'Pop-up was blocked by your browser. Allow pop-ups for this site.',
  'auth/account-exists-with-different-credential': 'An account already exists with this email but with a different sign-in method. Try email/password or Google.',
};

// ALWAYS show reset button for password failures (not just on 2nd try)
const SHOW_RESET_FOR = new Set([
  'auth/invalid-credential',
  'auth/wrong-password',
  'auth/too-many-requests',
  'auth/user-not-found',
]);

function setAuthLoading(loading) {
  authSubmitBtn.disabled = loading;
  authSubmitSpinner.style.display = loading ? 'inline' : 'none';
  authSubmitTextEl.style.display  = loading ? 'none'   : 'inline';
}

async function handleAuthSubmit() {
  const email    = authEmailInput.value.trim();
  const password = authPasswordInput.value;
  if (!email || !password) { showAuthError("Please fill in both fields."); return; }

  // Capture mode BEFORE any async work so the finally block is always correct
  const wasLoginMode = isLoginMode;

  setAuthLoading(true);
  authErrorBox.style.display = 'none';
  authResetInlineBtn.style.display = 'none';

  try {
    if (wasLoginMode) {
      await auth.signInWithEmailAndPassword(email, password);
    } else {
      await auth.createUserWithEmailAndPassword(email, password);
    }
    // ── Success ──
    authModal.classList.remove('show');
    resetAuthModal();
  } catch(err) {
    console.error('[Auth Error]', err.code, err.message);
    const msg = AUTH_ERRORS[err.code] || `Authentication failed. (Code: ${err.code})`;
    showAuthError(msg);
    // Show the one-click reset button for password-related failures in login mode
    if (wasLoginMode && SHOW_RESET_FOR.has(err.code)) {
      authResetInlineBtn.style.display = 'block';
    }
  } finally {
    setAuthLoading(false);
    authSubmitTextEl.innerText = wasLoginMode ? "Log In" : "Sign Up";
  }
}

async function handleForgotPassword() {
  const email = authEmailInput.value.trim();
  if (!email) { showAuthError("Enter your email address above first, then click Forgot Password."); return; }
  const forgotBtn = document.getElementById('forgot-password-btn');
  if (forgotBtn) { forgotBtn.style.opacity = '0.5'; forgotBtn.style.pointerEvents = 'none'; }
  try {
    await auth.sendPasswordResetEmail(email);
    showAuthSuccess("✓ Password reset email sent! Check your inbox (and spam folder).");
  } catch(err) {
    showAuthError(AUTH_ERRORS[err.code] || err.message);
  } finally {
    if (forgotBtn) { forgotBtn.style.opacity = ''; forgotBtn.style.pointerEvents = ''; }
  }
}

function showAuthError(msg) {
  authErrorMsg.innerText = msg;
  authErrorMsg.style.color = '';
  authErrorMsg.style.display = 'block';
  authErrorBox.style.display = 'block';
}

function showAuthSuccess(msg) {
  authErrorMsg.innerText = msg;
  authErrorMsg.style.color = 'var(--success)';
  authErrorMsg.style.display = 'block';
  authErrorBox.style.display = 'block';
  authResetInlineBtn.style.display = 'none';
}

// ═══════════════════════════════════════════════════════════════════════
//  BOOT
// ═══════════════════════════════════════════════════════════════════════
init();


