const roadmapData = [
    {
      id: 1,
      title: "Programming Foundations",
      description: "Master the basics of programming. Learn to think like a computer.",
      topics: [
        {
          title: "Understanding Memory (RAM, ROM) and CPU",
          resources: [
            { name: "Crash Course Computer Science", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo" },
            { name: "How Computers Work", url: "https://homepage.cs.uri.edu/faculty/wolfe/book/Readings/Reading04.htm" }
          ]
        },
        {
          title: "Variables, Data Types, and Operators",
          resources: [
            { name: "MDN: JavaScript Data Types", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures" }
          ]
        },
        {
          title: "Control Flow (If/Else, Switch)",
          resources: [
            { name: "MDN: Control Flow", url: "https://developer.mozilla.org/en-US/docs/Glossary/Control_flow" }
          ]
        },
        {
          title: "Loops (For, While, Do-While)",
          resources: [
            { name: "MDN: Loops and iteration", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration" }
          ]
        },
        {
          title: "Functions, Parameters, and Return Values",
          resources: [
            { name: "MDN: Functions", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions" }
          ]
        },
        {
          title: "Scope and Closures",
          resources: [
            { name: "JavaScript Visualized: Scope", url: "https://dev.to/lydiahallie/javascript-visualized-scope-chain-13pd" },
            { name: "MDN: Closures", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" }
          ]
        },
        {
          title: "Basic Terminal/CLI commands",
          resources: [
            { name: "Ubuntu Command Line for Beginners", url: "https://ubuntu.com/tutorials/command-line-for-beginners" }
          ]
        },
        {
          title: "Introduction to Git & GitHub basics",
          resources: [
            { name: "Git Handbook", url: "https://guides.github.com/introduction/git-handbook/" }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Object-Oriented Design & Version Control",
      description: "Learn how to structure code professionally and collaborate.",
      topics: [
        { title: "Classes and Objects", resources: [{ name: "Refactoring Guru: OOP Basics", url: "https://refactoring.guru/design-patterns/what-is-oop" }] },
        { title: "Encapsulation and Data Hiding", resources: [{ name: "GeeksforGeeks: Encapsulation", url: "https://www.geeksforgeeks.org/encapsulation-in-java/" }] },
        { title: "Inheritance and Polymorphism", resources: [{ name: "MDN: Object-oriented JavaScript", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming" }] },
        { title: "Abstraction and Interfaces", resources: [{ name: "Abstract Class vs Interface", url: "https://stackoverflow.com/questions/431762/what-is-the-difference-between-an-interface-and-abstract-class" }] },
        { title: "SOLID Principles", resources: [{ name: "FreeCodeCamp: SOLID Principles", url: "https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/" }] },
        { title: "Git Branching and Merging", resources: [{ name: "Atlassian Git Tutorial", url: "https://www.atlassian.com/git/tutorials/using-branches" }] },
        { title: "Pull Requests and Code Reviews", resources: [{ name: "GitHub: About Pull Requests", url: "https://docs.github.com/en/pull-requests" }] },
        { title: "Resolving Merge Conflicts", resources: [{ name: "Atlassian: Merge Conflicts", url: "https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts" }] }
      ]
    },
    {
      id: 3,
      title: "Basic Data Structures",
      description: "The building blocks of efficient algorithms.",
      topics: [
        { title: "Arrays and Dynamic Arrays", resources: [{ name: "LC: Arrays 101", url: "https://leetcode.com/explore/learn/card/fun-with-arrays/" }] },
        { title: "Strings and String Manipulation", resources: [{ name: "HackerRank: Strings", url: "https://www.hackerrank.com/domains/algorithms?filters%5Bsubdomains%5D%5B%5D=strings" }] },
        { title: "Linked Lists (Singly and Doubly)", resources: [{ name: "VisuAlgo: Linked List", url: "https://visualgo.net/en/list" }] },
        { title: "Stacks (LIFO)", resources: [{ name: "GeeksforGeeks: Stack", url: "https://www.geeksforgeeks.org/stack-data-structure/" }] },
        { title: "Queues (FIFO)", resources: [{ name: "GeeksforGeeks: Queue", url: "https://www.geeksforgeeks.org/queue-data-structure/" }] },
        { title: "Hash Tables and Hashing Functions", resources: [{ name: "CS50: Hash Tables", url: "https://www.youtube.com/watch?v=nvzVHwrrub0" }] },
        { title: "Handling Collisions in Hash Maps", resources: [{ name: "TutorialsPoint: Collision Resolution", url: "https://www.tutorialspoint.com/data_structures_algorithms/hash_data_structure.htm" }] },
        { title: "Time & Space Complexity (Big-O Notation)", resources: [{ name: "Big O Cheat Sheet", url: "https://www.bigocheatsheet.com/" }] }
      ]
    },
    {
      id: 4,
      title: "Algorithmic Thinking",
      description: "Solving problems efficiently.",
      topics: [
        { title: "Algorithm Design Strategies", resources: [{ name: "Khan Academy: Algorithms", url: "https://www.khanacademy.org/computing/computer-science/algorithms" }] },
        { title: "Recursion (Base case, Call stack)", resources: [{ name: "FreeCodeCamp: Recursion", url: "https://www.freecodecamp.org/news/understanding-recursion-in-programming/" }] },
        { title: "Sorting Algorithms", resources: [{ name: "VisuAlgo: Sorting", url: "https://visualgo.net/en/sorting" }] },
        { title: "Searching Algorithms", resources: [{ name: "TopCoder: Binary Search", url: "https://www.topcoder.com/thrive/articles/Binary%20Search" }] },
        { title: "Two Pointers Technique", resources: [{ name: "LeetCode: Two Pointers", url: "https://leetcode.com/articles/two-pointer-technique/" }] },
        { title: "Sliding Window Technique", resources: [{ name: "GeeksforGeeks: Sliding Window", url: "https://www.geeksforgeeks.org/window-sliding-technique/" }] },
        { title: "Greedy Algorithms", resources: [{ name: "Brilliant: Greedy Algorithms", url: "https://brilliant.org/wiki/greedy-algorithm/" }] },
        { title: "Divide and Conquer", resources: [{ name: "Programiz: Divide and Conquer", url: "https://www.programiz.com/dsa/divide-and-conquer" }] }
      ]
    },
    {
      id: 5,
      title: "Advanced Data Structures",
      description: "Mastering non-linear data structures like Trees and Graphs.",
      topics: [
        { title: "Binary Trees and Binary Search Trees (BST)", resources: [{ name: "VisuAlgo: BST", url: "https://visualgo.net/en/bst" }] },
        { title: "Tree Traversals (Inorder, Preorder, Postorder, Level Order)", resources: [{ name: "GeeksforGeeks: Tree Traversals", url: "https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/" }] },
        { title: "Heaps and Priority Queues", resources: [{ name: "VisuAlgo: Heap", url: "https://visualgo.net/en/heap" }] },
        { title: "Tries (Prefix Trees)", resources: [{ name: "HackerEarth: Trie", url: "https://www.hackerearth.com/practice/data-structures/advanced-data-structures/trie-keyword-tree/tutorial/" }] },
        { title: "Graphs Representation", resources: [{ name: "Khan Academy: Representing Graphs", url: "https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs" }] },
        { title: "Breadth-First Search (BFS)", resources: [{ name: "VisuAlgo: Graph DFS/BFS", url: "https://visualgo.net/en/dfsbfs" }] },
        { title: "Depth-First Search (DFS)", resources: [{ name: "CP-Algorithms: DFS", url: "https://cp-algorithms.com/graph/depth-first-search.html" }] },
        { title: "Shortest Path Algorithms", resources: [{ name: "Computerphile: Dijkstra's", url: "https://www.youtube.com/watch?v=GazC3A4OQTE" }] }
      ]
    },
    {
      id: 6,
      title: "Web & Networking Foundations",
      description: "Understanding how the internet and web applications work.",
      topics: [
        { title: "How the Internet Works (TCP/IP, DNS, Routing)", resources: [{ name: "MDN: How the Web Works", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started/How_the_Web_works" }] },
        { title: "HTTP/HTTPS Protocols and Methods", resources: [{ name: "MDN: An Overview of HTTP", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" }] },
        { title: "Status Codes and Headers", resources: [{ name: "HTTP Status Dogs", url: "https://httpstatusdogs.com/" }] },
        { title: "DOM and Browser Rendering Engine", resources: [{ name: "Web.dev: How Browsers Work", url: "https://web.dev/howbrowserswork/" }] },
        { title: "HTML5 Semantic Structuring", resources: [{ name: "W3Schools: HTML5 Semantic", url: "https://www.w3schools.com/html/html5_semantic_elements.asp" }] },
        { title: "CSS3 Styling, Flexbox, and Grid", resources: [{ name: "CSS-Tricks: Flexbox Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" }, { name: "CSS-Tricks: Grid Guide", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" }] },
        { title: "JavaScript DOM Manipulation", resources: [{ name: "MDN: Manipulating Documents", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents" }] },
        { title: "Event Loop and Async JavaScript", resources: [{ name: "Jake Archibald: In The Loop (Video)", url: "https://www.youtube.com/watch?v=cCOL7MC4Pl0" }] }
      ]
    },
    {
      id: 7,
      title: "Relational Databases & SQL",
      description: "Storing, querying, and managing structured data safely.",
      topics: [
        { title: "Relational Database Concepts", resources: [{ name: "IBM: Relational Databases", url: "https://www.ibm.com/topics/relational-database" }] },
        { title: "SQL CRUD Operations", resources: [{ name: "SQLBolt: Interactive SQL", url: "https://sqlbolt.com/" }] },
        { title: "Filtering, Sorting, and Grouping Data", resources: [{ name: "Mode: SQL Analytics Training", url: "https://mode.com/sql-tutorial/introduction-to-sql/" }] },
        { title: "Joins (Inner, Left, Right, Outer)", resources: [{ name: "Visual SQL Joins", url: "https://joins.spathon.com/" }] },
        { title: "Database Normalization (1NF, 2NF, 3NF)", resources: [{ name: "FreeCodeCamp: DB Normalization", url: "https://www.freecodecamp.org/news/database-normalization-1nf-2nf-3nf-table-examples/" }] },
        { title: "ACID Properties", resources: [{ name: "BMC: ACID Properties", url: "https://www.bmc.com/blogs/acid-properties-database-management/" }] },
        { title: "Indexing and Query Optimization", resources: [{ name: "Use The Index, Luke", url: "https://use-the-index-luke.com/" }] },
        { title: "Transactions and Concurrency Control", resources: [{ name: "GeeksforGeeks: Concurrency", url: "https://www.geeksforgeeks.org/concurrency-control-in-dbms/" }] }
      ]
    },
    {
      id: 8,
      title: "Backend Engineering & APIs",
      description: "Building the server-side logic and exposing RESTful services.",
      topics: [
        { title: "Backend Frameworks", resources: [{ name: "MDN: Express/Node intro", url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction" }] },
        { title: "RESTful API Design Principles", resources: [{ name: "REST API Tutorial", url: "https://restfulapi.net/" }] },
        { title: "Routing and Controllers", resources: [{ name: "Node.js Design Patterns", url: "https://www.nodejsdesignpatterns.com/" }] },
        { title: "Middleware and Request Handling", resources: [{ name: "Express Docs: Middleware", url: "https://expressjs.com/en/guide/using-middleware.html" }] },
        { title: "Authentication and Authorization", resources: [{ name: "JWT.io", url: "https://jwt.io/introduction" }] },
        { title: "Object-Relational Mapping (ORM)", resources: [{ name: "Prisma Documentation", url: "https://www.prisma.io/docs/" }] },
        { title: "Input Validation and Error Handling", resources: [{ name: "Joyent: Error Handling Node.js", url: "https://www.joyent.com/node-js/production/design/errors" }] },
        { title: "Testing APIs with Postman / cURL", resources: [{ name: "Postman Learning Center", url: "https://learning.postman.com/docs/getting-started/introduction/" }] }
      ]
    },
    {
      id: 9,
      title: "System Design Fundamentals",
      description: "Designing scalable, available, and robust software architectures.",
      topics: [
        { title: "Client-Server Architecture", resources: [{ name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" }] },
        { title: "Vertical vs Horizontal Scaling", resources: [{ name: "GeeksforGeeks: Scaling", url: "https://www.geeksforgeeks.org/horizontal-and-vertical-scaling-in-databases/" }] },
        { title: "Load Balancing and API Gateways", resources: [{ name: "Nginx: Load Balancing", url: "https://www.nginx.com/resources/glossary/load-balancing/" }] },
        { title: "Caching Strategies", resources: [{ name: "AWS: Caching Best Practices", url: "https://aws.amazon.com/caching/best-practices/" }] },
        { title: "Content Delivery Networks (CDN)", resources: [{ name: "Cloudflare: What is a CDN?", url: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/" }] },
        { title: "Monolithic vs Microservices Architectures", resources: [{ name: "Martin Fowler: Microservices", url: "https://martinfowler.com/articles/microservices.html" }] },
        { title: "Database Sharding and Replication", resources: [{ name: "DigitalOcean: Sharding", url: "https://www.digitalocean.com/community/tutorials/understanding-database-sharding" }] },
        { title: "Message Queues and Event-Driven Arch.", resources: [{ name: "IBM: Message Queues", url: "https://www.ibm.com/topics/message-queues" }] }
      ]
    },
    {
      id: 10,
      title: "Cloud Computing & DevOps Basics",
      description: "Deploying, monitoring, and maintaining software in the cloud.",
      topics: [
        { title: "Cloud Providers Overview", resources: [{ name: "AWS Ramp-Up Guide", url: "https://aws.amazon.com/training/ramp-up-guides/" }] },
        { title: "Virtual Machines vs Containers", resources: [{ name: "Docker vs VM", url: "https://www.docker.com/resources/what-container" }] },
        { title: "Docker Fundamentals", resources: [{ name: "Docker 101 Tutorial", url: "https://www.docker.com/101-tutorial" }] },
        { title: "Docker Compose for multi-container apps", resources: [{ name: "Docker Docs: Compose", url: "https://docs.docker.com/compose/" }] },
        { title: "Continuous Integration & Deployment", resources: [{ name: "RedHat: CI/CD Intro", url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd" }] },
        { title: "GitHub Actions / GitLab CI Basics", resources: [{ name: "GitHub Actions Docs", url: "https://docs.github.com/en/actions" }] },
        { title: "Linux Basics and Bash Scripting", resources: [{ name: "Linux Journey", url: "https://linuxjourney.com/" }] },
        { title: "Monitoring and Logging", resources: [{ name: "Prometheus Overview", url: "https://prometheus.io/docs/introduction/overview/" }] }
      ]
    },
    {
      id: 11,
      title: "Specialized Topics & Non-Relational DBs",
      description: "Expanding knowledge into modern and diverse application requirements.",
      topics: [
        { title: "NoSQL Databases", resources: [{ name: "MongoDB University", url: "https://learn.mongodb.com/" }] },
        { title: "When to use SQL vs NoSQL", resources: [{ name: "Couchbase: SQL vs NoSQL", url: "https://www.couchbase.com/resources/why-nosql" }] },
        { title: "WebSockets and Real-time Communication", resources: [{ name: "WebSockets API (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" }] },
        { title: "GraphQL vs REST", resources: [{ name: "How to GraphQL", url: "https://www.howtographql.com/" }] },
        { title: "Web Security Fundamentals", resources: [{ name: "OWASP Top Ten", url: "https://owasp.org/www-project-top-ten/" }] },
        { title: "CORS and Cross-Site Scripting (XSS)", resources: [{ name: "MDN: CORS", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" }] },
        { title: "Cross-Site Request Forgery (CSRF) & SQLi", resources: [{ name: "Web Security Academy", url: "https://portswigger.net/web-security" }] },
        { title: "Serverless Computing (AWS Lambda)", resources: [{ name: "Serverless Stack Tutorial", url: "https://sst.dev/chapters/what-is-serverless.html" }] }
      ]
    },
    {
      id: 12,
      title: "Capstone, Interview Prep & Open Source",
      description: "Polishing skills for the job market and contributing.",
      topics: [
        { title: "Building a Full-Stack Capstone Project", resources: [{ name: "FreeCodeCamp: Build 15 Projects", url: "https://www.youtube.com/watch?v=3PHXvlpOkf4" }] },
        { title: "System Design Mock Interviews", resources: [{ name: "Pramp / Exponent", url: "https://www.pramp.com/ref/exponent" }] },
        { title: "Algorithms & Data Structures Practice", resources: [{ name: "NeetCode", url: "https://neetcode.io/" }, { name: "LeetCode Patterns", url: "https://seanprashad.com/leetcode-patterns/" }] },
        { title: "Behavioral Interviews (STAR Method)", resources: [{ name: "Amazon Interview Prep", url: "https://www.amazon.jobs/en/landing_pages/in-person-interview" }] },
        { title: "Resume and Portfolio Polish", resources: [{ name: "Careercup Resume Guide", url: "https://www.careercup.com/resume" }] },
        { title: "Finding and Contributing to Open Source", resources: [{ name: "First Timers Only", url: "https://www.firsttimersonly.com/" }] },
        { title: "Writing Good Documentation and READMEs", resources: [{ name: "Make a README", url: "https://www.makeareadme.com/" }] },
        { title: "Negotiation and Job Search Strategies", resources: [{ name: "Ten Rules for Negotiating", url: "https://haseebq.com/my-ten-rules-for-negotiating-a-job-offer/" }] }
      ]
    }
];

// --------------------------------------------------------------------------
// FIREBASE CONFIGURATION & INITIALIZATION
// --------------------------------------------------------------------------
// Provided apiKey. Note: You might need the full firebaseConfig object from 
// your Firebase Console (projectId, appId, etc.) for this to work flawlessly.
const firebaseConfig = {
  apiKey: "AIzaSyCb1SBz9gHdE5bXNR2DxY8DKsqWnHeF_-s",
  authDomain: "sde-levelling.firebaseapp.com",
  projectId: "sde-levelling",
  storageBucket: "sde-levelling.firebasestorage.app",
  messagingSenderId: "30870143922",
  appId: "1:30870143922:web:96940f660b446b471fdaab",
  measurementId: "G-MK0GX5WQV5"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const db = firebase.firestore();

// Auth global state
let currentUser = null;
let isLoginMode = true; // true = login, false = sign up

// --------------------------------------------------------------------------
  
// Game Constants
  const XP_PER_QUEST = 50;
  const BASE_XP_REQUIREMENT = 500;
  const LEVEL_TITLES = [
      "Novice Coder", 
      "Apprentice Developer", 
      "Junior Algorithms Enthusiast", 
      "Code Weaver",
      "Full-Stack Apprentice",
      "Mid-level Engineer",
      "System Architect Intro",
      "Cloud Voyager",
      "Senior SDE Candidate",
      "Master of the Code",
      "Principal Engineer",
      "Software Development God"
  ];
  
  // State Storage
  let playerState = {
      xp: 0,
      level: 1,
      completedQuests: {}, // Format: "monthId-questIndex": true
      unlockedMonths: [1] // Month 1 is unlocked initially
  };
  
  // DOM Elements
  const roadmapContainer = document.getElementById('roadmap-container');
  const levelEl = document.getElementById('player-level');
  const titleEl = document.getElementById('player-title');
  const currentXpEl = document.getElementById('current-xp');
  const nextXpEl = document.getElementById('next-level-xp');
  const xpBarFillEl = document.getElementById('xp-bar-fill');
  
  const modal = document.getElementById('quest-modal');
  const closeModalBtn = document.querySelector('.close-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const questList = document.getElementById('quest-list');
  const modalProgressText = document.getElementById('modal-progress-text');
  const modalProgressFill = document.getElementById('modal-progress-fill');
  const resetBtn = document.getElementById('reset-btn');
  
  // Auth DOM Elements
  const authBtn = document.getElementById('auth-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const userInfo = document.getElementById('user-info');
  const userEmailSpan = document.getElementById('user-email');
  const authModal = document.getElementById('auth-modal');
  const closeAuthBtn = document.querySelector('.close-auth');
  const authSubmitBtn = document.getElementById('auth-submit');
  const authToggleBtn = document.getElementById('auth-toggle-btn');
  const authToggleText = document.getElementById('auth-toggle-text');
  const authEmailInput = document.getElementById('auth-email');
  const authPasswordInput = document.getElementById('auth-password');
  const authModalTitle = document.getElementById('auth-modal-title');
  const authErrorMsg = document.getElementById('auth-error-msg');
  
  const levelUpNotification = document.getElementById('level-up-notification');
  const notifyLevel = document.getElementById('notify-level');
  const notifyTitle = document.getElementById('notify-title');
  
  let currentOpenMonthId = null;
  
  // Initialize Application
function init() {
    loadProgress(); // Load local first, to be snappy
    renderRoadmap();
    updatePlayerStatsUI();
    
    // Auth State Listener
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            currentUser = user;
            userInfo.style.display = 'flex';
            userEmailSpan.innerText = user.email.split('@')[0]; // show prefix
            authBtn.style.display = 'none';
            logoutBtn.style.display = 'inline-block';
            
            // Fetch cloud progress
            await fetchCloudProgress();
        } else {
            currentUser = null;
            userInfo.style.display = 'none';
            authBtn.style.display = 'inline-block';
            logoutBtn.style.display = 'none';
        }
    });
    
    // Event Listeners
    closeModalBtn.addEventListener('click', closeModal);
    closeAuthBtn.addEventListener('click', () => {
        authModal.classList.remove('show');
    });
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
        if (e.target === authModal) authModal.classList.remove('show');
    });
    resetBtn.addEventListener('click', resetProgress);
    
    // Auth Event Listeners
    authBtn.addEventListener('click', () => {
        authErrorMsg.style.display = 'none';
        authEmailInput.value = '';
        authPasswordInput.value = '';
        authModal.classList.add('show');
    });
    
    logoutBtn.addEventListener('click', () => {
        auth.signOut().then(() => {
            alert("Logged out successfully.");
            // Optional: reset to local storage state
            loadProgress();
            renderRoadmap();
            updatePlayerStatsUI();
        });
    });
    
    authToggleBtn.addEventListener('click', () => {
        isLoginMode = !isLoginMode;
        if (isLoginMode) {
            authModalTitle.innerText = "Cloud Save Login";
            authSubmitBtn.innerText = "Log In";
            authToggleText.innerText = "Don't have an account?";
            authToggleBtn.innerText = "Sign Up";
        } else {
            authModalTitle.innerText = "Create Account";
            authSubmitBtn.innerText = "Sign Up";
            authToggleText.innerText = "Already have an account?";
            authToggleBtn.innerText = "Log In";
        }
        authErrorMsg.style.display = 'none';
    });
    
    authSubmitBtn.addEventListener('click', handleAuthSubmit);
}
  
  // Storage Utils
  function saveProgress() {
      // 1. Save locally
      localStorage.setItem('sdeRoadmapProgress', JSON.stringify(playerState));
      
      // 2. Try saving to Firestore if logged in
      if (currentUser) {
          db.collection('userProgress').doc(currentUser.uid).set(playerState)
            .then(() => console.log("Progress saved to Cloud!"))
            .catch(err => console.error("Error saving to cloud:", err));
      }
  }
  
  function loadProgress() {
      const saved = localStorage.getItem('sdeRoadmapProgress');
      if (saved) {
          playerState = JSON.parse(saved);
      }
      checkUnlocks(); // Ensure correct months are unlocked based on loaded data
  }
  
  function resetProgress() {
      if(confirm("Are you sure you want to reset all progress? This cannot be undone.")) {
          playerState = {
              xp: 0,
              level: 1,
              completedQuests: {},
              unlockedMonths: [1]
          };
          saveProgress();
          renderRoadmap();
          updatePlayerStatsUI();
      }
  }
  
  // Cloud Sync
  async function fetchCloudProgress() {
      try {
          const doc = await db.collection('userProgress').doc(currentUser.uid).get();
          if (doc.exists) {
              playerState = doc.data();
              checkUnlocks();
              renderRoadmap();
              updatePlayerStatsUI();
          } else {
              // If new user, write initial local state to cloud
              saveProgress();
          }
      } catch (error) {
          console.error("Error fetching cloud progress:", error);
      }
  }

  // Auth Handling
  async function handleAuthSubmit() {
      const email = authEmailInput.value;
      const password = authPasswordInput.value;
      
      if (!email || !password) {
          showAuthError("Please fill in both fields.");
          return;
      }
      
      authSubmitBtn.innerText = "Processing...";
      
      try {
          if (isLoginMode) {
              await auth.signInWithEmailAndPassword(email, password);
          } else {
              await auth.createUserWithEmailAndPassword(email, password);
          }
          // Success
          authModal.classList.remove('show');
          authSubmitBtn.innerText = isLoginMode ? "Log In" : "Sign Up";
      } catch (error) {
          showAuthError(error.message);
          authSubmitBtn.innerText = isLoginMode ? "Log In" : "Sign Up";
      }
  }

  function showAuthError(msg) {
      authErrorMsg.innerText = msg;
      authErrorMsg.style.display = 'block';
  }
  
  // Core Logic
  function getRequiredXP(level) {
      // Exponential curve for leveling
      return BASE_XP_REQUIREMENT * Math.pow(1.5, level - 1);
  }
  
  function getTitle(level) {
      const index = Math.min(level - 1, LEVEL_TITLES.length - 1);
      return LEVEL_TITLES[index];
  }
  
  function checkLevelUp() {
      const requiredXP = getRequiredXP(playerState.level);
      if (playerState.xp >= requiredXP) {
          // Level Up
          playerState.level++;
          // Carry over excess XP? No, maybe just keep accumulating, but change the next milestone
          saveProgress();
          updatePlayerStatsUI();
          showLevelUpNotification();
          checkLevelUp(); // Check if they leveled up twice somehow
      }
  }
  
  function showLevelUpNotification() {
      notifyLevel.innerText = playerState.level;
      notifyTitle.innerText = getTitle(playerState.level);
      levelUpNotification.classList.add('show');
      
      // Basic confetti effect could go here
      
      setTimeout(() => {
          levelUpNotification.classList.remove('show');
      }, 3000);
  }
  
  function checkUnlocks() {
      // Month N+1 is unlocked if Month N is 100% completed
      playerState.unlockedMonths = [1];
      let allUnlocked = true;
      
      for (let i = 0; i < roadmapData.length; i++) {
          const month = roadmapData[i];
          const totalQuests = month.topics.length;
          let completed = 0;
          
          for (let q = 0; q < totalQuests; q++) {
              if (playerState.completedQuests[`${month.id}-${q}`]) {
                  completed++;
              }
          }
          
          if (completed === totalQuests && month.id < roadmapData.length) {
             if(!playerState.unlockedMonths.includes(month.id + 1)){
                  playerState.unlockedMonths.push(month.id + 1);
             }
          } else {
             break; // Stop unlocking if previous is not fully completed
          }
      }
  }
  
  // UI Rendering
  function updatePlayerStatsUI() {
      levelEl.innerText = playerState.level;
      titleEl.innerText = getTitle(playerState.level);
      
      // Calculate XP relative to current level bracket
      let previousThreshold = playerState.level === 1 ? 0 : getRequiredXP(playerState.level - 1);
      // Wait, let's just make it total XP for simplicity, and show total required
      const totalRequired = Math.floor(getRequiredXP(playerState.level));
      
      currentXpEl.innerText = playerState.xp;
      nextXpEl.innerText = totalRequired;
      
      // Percent logic based on total accumulation
      let previousLvlRequired = playerState.level === 1 ? 0 : getRequiredXP(playerState.level - 1);
      let currentLvlTotal = totalRequired - previousLvlRequired;
      let currentLvlProgress = playerState.xp - previousLvlRequired;
      
      let percent = Math.min(100, Math.max(0, (currentLvlProgress / currentLvlTotal) * 100));
      xpBarFillEl.style.width = `${percent}%`;
  }
  
function renderRoadmap() {
    roadmapContainer.innerHTML = '';
    
    roadmapData.forEach((month) => {
        const isUnlocked = playerState.unlockedMonths.includes(month.id);
        const totalQuests = month.topics.length;
        let completedQuests = 0;
        
        for (let q = 0; q < totalQuests; q++) {
            if (playerState.completedQuests[`${month.id}-${q}`]) {
                completedQuests++;
            }
        }
        
        const isCompleted = completedQuests === totalQuests;
        const progressPercent = (completedQuests / totalQuests) * 100;
        
        const card = document.createElement('div');
        card.className = `month-card ${isUnlocked ? 'unlocked' : 'locked'} ${isCompleted ? 'completed' : ''}`;
        
        let iconHtml = isCompleted ? '<i class="fa-solid fa-check-circle"></i>' : 
                       (isUnlocked ? '<i class="fa-solid fa-unlock"></i>' : '<i class="fa-solid fa-lock"></i>');
                       
        if(isUnlocked && !isCompleted) {
             // Add pulse effect to currently active month (highest unlocked)
             if(month.id === Math.max(...playerState.unlockedMonths)) {
                  card.classList.add('pulse-glow');
             }
        }
        
        card.innerHTML = `
            <div class="card-header">
                <span class="month-number">MONTH 0${month.id}</span>
                <div class="status-icon">${iconHtml}</div>
            </div>
            <h3 class="month-title">${month.title}</h3>
            <p class="month-desc">${month.description}</p>
            <div class="card-footer">
                <span>${completedQuests}/${totalQuests} Quests</span>
                <div class="mini-bar-bg">
                    <div class="mini-bar-fill" style="width: ${progressPercent}%"></div>
                </div>
            </div>
        `;
        
        if (isUnlocked) {
            card.addEventListener('click', () => openModal(month.id));
        }
        
        roadmapContainer.appendChild(card);
    });
}
  
  function openModal(monthId) {
      currentOpenMonthId = monthId;
      const month = roadmapData.find(m => m.id === monthId);
      
      modalTitle.innerText = `Month ${month.id}: ${month.title}`;
      modalDesc.innerText = month.description;
      
      renderQuests(month);
      
      modal.classList.add('show');
  }
  
  function closeModal() {
      modal.classList.remove('show');
      currentOpenMonthId = null;
  }
  
  function renderQuests(month) {
      questList.innerHTML = '';
      let completedCount = 0;
      
      month.topics.forEach((topicObj, index) => {
          const questKey = `${month.id}-${index}`;
          const isCompleted = playerState.completedQuests[questKey] || false;
          
          if (isCompleted) completedCount++;
          
          const questItem = document.createElement('div');
          questItem.className = `quest-item ${isCompleted ? 'completed' : ''}`;
          
          let resourcesHtml = '';
          if (topicObj.resources && topicObj.resources.length > 0) {
              resourcesHtml = `<div class="quest-resources">
                  <div class="resources-title"><i class="fa-solid fa-book-open"></i> Learning Resources:</div>
                  ${topicObj.resources.map(r => `<a href="${r.url}" target="_blank" class="resource-link" onclick="event.stopPropagation()"><i class="fa-solid fa-link"></i> ${r.name}</a>`).join('')}
              </div>`;
          }

          questItem.innerHTML = `
              <div class="quest-header">
                  <div class="quest-checkbox tooltip" title="Mark as reading/completed">
                      <i class="fa-solid fa-check"></i>
                  </div>
                  <div class="quest-content">
                      <div class="quest-title">${topicObj.title}</div>
                  </div>
                  <div class="quest-meta">
                      <span class="quest-xp">+${XP_PER_QUEST} XP</span>
                      ${resourcesHtml ? '<i class="fa-solid fa-chevron-down expand-icon"></i>' : ''}
                  </div>
              </div>
              ${resourcesHtml}
          `;
          
          const checkbox = questItem.querySelector('.quest-checkbox');
          checkbox.addEventListener('click', (e) => {
              e.stopPropagation();
              toggleQuest(month.id, index, questItem);
          });
          
          const header = questItem.querySelector('.quest-header');
          header.addEventListener('click', () => {
              if (resourcesHtml) {
                  questItem.classList.toggle('expanded');
                  const icon = questItem.querySelector('.expand-icon');
                  if(icon) {
                      icon.classList.toggle('fa-chevron-up');
                      icon.classList.toggle('fa-chevron-down');
                  }
              }
          });
          
          questList.appendChild(questItem);
      });
      
      updateModalProgress(completedCount, month.topics.length);
  }
  
function toggleQuest(monthId, questIndex, questElement) {
    const questKey = `${monthId}-${questIndex}`;
    const isCompleted = playerState.completedQuests[questKey];
    
    if (isCompleted) {
        // Uncomplete
        delete playerState.completedQuests[questKey];
        playerState.xp -= XP_PER_QUEST;
        questElement.classList.remove('completed');
    } else {
        // Complete
        playerState.completedQuests[questKey] = true;
        playerState.xp += XP_PER_QUEST;
        questElement.classList.add('completed');
        
        // Add small local pop animation
        questElement.style.transform = 'scale(1.02)';
        setTimeout(() => questElement.style.transform = '', 200);
    }
    
    // Update State
    checkUnlocks();
    checkLevelUp();
    saveProgress();
    
    // Update local modal UI
    const month = roadmapData.find(m => m.id === monthId);
    let completedCount = 0;
     for (let q = 0; q < month.topics.length; q++) {
        if (playerState.completedQuests[`${monthId}-${q}`]) completedCount++;
    }
    updateModalProgress(completedCount, month.topics.length);
    
    // Update global UI
    updatePlayerStatsUI();
    renderRoadmap(); // re-render to update progress bars behind modal
}
  
  function updateModalProgress(completed, total) {
      modalProgressText.innerText = `${completed}/${total} Quests Completed`;
      modalProgressFill.style.width = `${(completed / total) * 100}%`;
  }
  
  // Initialize
  init();
