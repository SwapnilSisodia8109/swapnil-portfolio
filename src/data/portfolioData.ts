import {
  PersonalDetails,
  ProjectItem,
  ExperienceItem,
  SkillCategory,
  EducationItem,
  CertificationItem,
} from "@/types/portfolio";

export const personalDetails: PersonalDetails = {
  name: "Swapnil Sisodia",
  role: "React Native Specialist & Mobile App Developer",
  tagline: "Architecting High-Performance React Native Mobile Applications",
  bio: "Application & React Native Developer with 3+ years of hands-on experience engineering, scaling, and deploying iOS and Android apps. Lead developer behind live production apps like Suhavi Audiobooks (30k+ active listeners), AutoSpa, and Wellie, specialized in Redux/Redux-Saga state architectures, REST APIs, in-app purchases, and complete store release management.",
  email: "swapnilsisodiya3@gmail.com",
  phone: "+918109335519",
  phoneFormatted: "+91-8109335519",
  linkedinUrl: "https://linkedin.com/in/swapnil-sisodia-547213150",
  location: "Indore, India",
  relocationNote: "Open to relocate to Pan India",
  metrics: {
    listeners: "30k+",
    experienceYears: "3+",
    shippedApps: "5+",
    appStores: "2",
  },
};

export const projectsData: ProjectItem[] = [
  {
    id: "suhavi",
    title: "Suhavi - Punjabi Audiobooks",
    company: "WebiWork Technologies",
    period: "2025 – Present",
    category: "mobile",
    role: "Lead React Native Developer",
    highlight: "Serving 30k+ Active Listeners",
    logo: "/images/suhavi.png",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.suhaviaudiobooksapp.app&hl=en_IN",
    appStoreUrl:
      "https://apps.apple.com/in/app/suhavi-punjabi-audiobooks/id1587321865",
    summary:
      "Lead end-to-end development of Suhavi, a premier audiobook streaming mobile application for Android and iOS serving 30k+ active listeners. Built with modular component architecture, low-latency audio buffering, and complete store release automation.",
    bulletPoints: [
      "Lead end-to-end development of audiobook application for Android and iOS serving 30k+ active listeners using reusable functional components and custom React Hooks.",
      "Integrated In-App Purchases (IAP), Google/Apple social sign-in, and Firebase Cloud Messaging (FCM) for personalized push notifications.",
      "Architected smooth React Navigation audio player transitions and background audio playback synchronization.",
      "Documented application processes and managed the complete app lifecycle through Google Play Store and Apple App Store releases.",
    ],
    tags: [
      "React Native",
      "React Hooks",
      "Firebase",
      "In-App Purchases (IAP)",
      "Social Auth",
      "REST API",
      "Google Play Store",
      "Apple App Store",
    ],
    featured: true,
    color: "from-sky-500/20 to-blue-600/10",
    accent: "text-sky-400",
    border: "border-sky-500/30",
    iconName: "Radio",
  },
  {
    id: "autospa",
    title: "AutoSpa Mobile App",
    company: "WebiWork Technologies",
    period: "2025 – Present",
    category: "mobile",
    role: "React Native Developer",
    highlight: "Enterprise Operations & Store Releases",
    logo: "/images/autospa.png",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.autospamobile&hl=en",
    appStoreUrl: "https://apps.apple.com/us/app/autospa-app/id6745329601",
    summary:
      "Enterprise vehicle detailing operations and task tracking mobile application built for AutoSpa teams across Android and iOS. Streamlines job card dispatching, vehicle inspection logging, technician workflow tracking, and real-time operational status updates.",
    bulletPoints: [
      "Engineered mobile task management, live vehicle service tracking, and work order assignment workflows for AutoSpa field staff.",
      "Integrated asynchronous RESTful backend services with optimistic UI updates and local data caching for uninterrupted field performance.",
      "Managed dual platform release cycles, provisioning profiles, and production store deployments across Google Play Store and Apple App Store.",
      "Tested device performance and handled platform-specific nuances across diverse Android device tiers and iOS form factors.",
    ],
    tags: [
      "React Native",
      "Enterprise Mobility",
      "Task Tracking",
      "Google Play Store",
      "Apple App Store",
      "RESTful APIs",
      "Android & iOS",
    ],
    featured: true,
    color: "from-blue-500/20 to-cyan-600/10",
    accent: "text-blue-400",
    border: "border-blue-500/30",
    iconName: "Wrench",
  },
  {
    id: "wellie",
    title: "Wellie - Gratitude & Wellbeing Journal",
    company: "Averybit Solutions",
    period: "2024 – 2025",
    category: "mobile",
    role: "React Native Developer",
    highlight: "Guided 6-Min Journaling & Mood Analytics",
    logo: "/images/wellie.png",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.averybit.wellbeingjournal&hl=en_IN",
    summary:
      "Guided daily gratitude journaling and mental wellbeing mobile app. Takes just 6 minutes a day to build gratitude, track emotional trends, and foster personal development with structured self-reflection prompts and habit tracking.",
    bulletPoints: [
      "Developed guided 6-minute daily journaling flows with structured mindfulness prompts to promote positive thinking and self-reflection.",
      "Engineered emotional trend and mood-tracking analytics with intuitive visual feedback to help users recognize daily patterns.",
      "Built habit building streak trackers, self-care reading modules, and secure encrypted local storage for private journal entries.",
      "Optimized cross-platform rendering for smooth gesture interactions, journal card flips, and responsive layout scaling.",
    ],
    tags: [
      "React Native",
      "Mental Wellbeing",
      "Mood Analytics",
      "Habit Tracker",
      "Local Storage",
      "Google Play Store",
    ],
    featured: true,
    color: "from-teal-500/20 to-emerald-600/10",
    accent: "text-teal-400",
    border: "border-teal-500/30",
    iconName: "Heart",
  },
  {
    id: "sofri",
    title: "Sofri Trust (Fintech Mobile Banking)",
    company: "Averybit Solutions",
    period: "2024",
    category: "fintech",
    role: "React Native Developer",
    highlight: "Bank-Grade KYC & Transfer Workflows",
    logo: "/images/sofri.png",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.sofrimobileapp&hl=en_IN",
    appStoreUrl: "https://apps.apple.com/us/app/sofri-trust/id6736859493",
    summary:
      "Comprehensive mobile banking application for LINKS Microfinance Bank (member of DLM Capital Group). Powers seamless account opening, BVN/NIN digital KYC verification, inter-bank fund transfers, utility payments, and privacy balance toggles.",
    bulletPoints: [
      "Engineered reliable state management with Redux-Saga to prevent race conditions and guarantee transaction safety in financial fund transfers.",
      "Integrated BVN/NIN identity verification SDKs, biometric authentication (fingerprint/face recognition), and encrypted RESTful banking APIs.",
      "Implemented high-security session management, beneficiary management, and encrypted local storage for sensitive banking credentials.",
      "Delivered production deployments and updates across Google Play Store and Apple App Store.",
    ],
    tags: [
      "React Native",
      "Fintech",
      "Redux-Saga",
      "BVN/NIN Verification",
      "REST APIs",
      "Security",
      "Google Play Store",
      "Apple App Store",
    ],
    featured: true,
    color: "from-emerald-500/20 to-teal-600/10",
    accent: "text-emerald-400",
    border: "border-emerald-500/30",
    iconName: "ShieldCheck",
  },
  {
    id: "meet-summariser",
    title: "Meet Summariser AI",
    company: "Averybit Solutions",
    period: "2024 – 2025",
    category: "ai",
    role: "AI & Cloud Integration Developer",
    highlight: "Gemini AI & AWS S3 Audio Pipeline",
    logo: null,
    summary:
      "Enterprise-grade intelligent meeting transcription and executive summarization tool that extracts structured decisions, follow-up items, and key takeaways from audio recordings.",
    bulletPoints: [
      "Integrated Google Gemini AI for multi-speaker audio transcription and intelligent contextual summarization.",
      "Automated audio ingestion pipelines using AWS S3 cloud storage for secure and scalable processing.",
      "Built Python-based preprocessing routines to optimize API throughput and token utilization.",
    ],
    tags: ["Gemini AI", "AWS S3", "Python", "REST APIs", "Cloud Services"],
    featured: true,
    color: "from-purple-500/20 to-indigo-600/10",
    accent: "text-purple-400",
    border: "border-purple-500/30",
    iconName: "Bot",
  },
];

export const experienceData: ExperienceItem[] = [
  {
    role: "Software Engineer (React Native Developer)",
    company: "WebiWork Technologies Pvt Ltd",
    location: "Indore, India",
    period: "Nov 2025 – Present",
    type: "Full-Time",
    description:
      "Leading mobile development across flagship consumer and enterprise applications, including Suhavi Audiobooks (30k+ active listeners) and AutoSpa enterprise operations app.",
    apps: [
      {
        name: "Suhavi Audiobooks",
        playStore:
          "https://play.google.com/store/apps/details?id=com.suhaviaudiobooksapp.app&hl=en_IN",
        appStore:
          "https://apps.apple.com/in/app/suhavi-punjabi-audiobooks/id1587321865",
      },
      {
        name: "AutoSpa App",
        playStore:
          "https://play.google.com/store/apps/details?id=com.autospamobile&hl=en",
        appStore: "https://apps.apple.com/us/app/autospa-app/id6745329601",
      },
    ],
    achievements: [
      "Lead end-to-end development of Suhavi, a React Native audiobook application for Android and iOS serving 30k+ active listeners, using reusable functional components and custom React Hooks.",
      "Spearheaded engineering of AutoSpa mobile app for employee task tracking, service operations, and fleet workflow optimization with live status synchronization.",
      "Integrate RESTful APIs with backend services, In-App Purchases (IAP), Google/Apple authentication, and Firebase Cloud Messaging for push notifications.",
      "Implement predictable React Navigation flows and robust state management to deliver smooth, user-friendly application performance.",
      "Test and troubleshoot application, device, and platform issues using Android Studio and Xcode to improve stability across Android and iOS.",
      "Manage the complete app lifecycle through Google Play Store and Apple App Store releases, compliance, and version updates.",
    ],
  },
  {
    role: "Junior Software Engineer (React Native Developer)",
    company: "Averybit Solutions Pvt Ltd",
    location: "Indore, India",
    period: "Jan 2024 – Oct 2025",
    type: "Full-Time",
    description:
      "Designed and maintained consumer and enterprise mobile applications across mobile banking (Sofri Trust), mental wellbeing (Wellie), and AI-enabled productivity (Meet Summariser).",
    apps: [
      {
        name: "Sofri Trust (Mobile Banking)",
        playStore:
          "https://play.google.com/store/apps/details?id=com.sofrimobileapp&hl=en_IN",
        appStore: "https://apps.apple.com/us/app/sofri-trust/id6736859493",
      },
      {
        name: "Wellie - Gratitude Journal",
        playStore:
          "https://play.google.com/store/apps/details?id=com.averybit.wellbeingjournal&hl=en_IN",
      },
    ],
    achievements: [
      "Designed, built, and maintained React Native features for Android and iOS using reusable functional components, React Hooks, and modular architecture based on business specifications.",
      "Developed Sofri Trust, a high-security mobile banking app with BVN/NIN identity verification, inter-bank transfers, and biometric security using Redux-Saga.",
      "Developed Wellie, a guided gratitude journal & mood tracking app helping users build positive habits with 6-minute reflection exercises.",
      "Built Meet Summariser, integrating Google Gemini AI and AWS S3 for automated audio meeting transcription and executive summarization.",
      "Integrated RESTful APIs and third-party SDKs handling JSON responses, cryptographic security tokens, and asynchronous cloud operations.",
    ],
  },
  {
    role: "Frontend Intern",
    company: "Shoppeal Tech",
    location: "Remote",
    period: "Jan 2023 – Jul 2023",
    type: "Internship",
    description:
      "Developed web interfaces and interactive frontend components with clean React code.",
    achievements: [
      "Built responsive web pages and reusable UI components using React.js, JavaScript, Bootstrap, HTML, and CSS.",
      "Integrated frontend components with backend RESTful services and worked within Agile-based application workflows using Git.",
    ],
  },
];

export const skillsData: SkillCategory[] = [
  {
    category: "Mobile App Development",
    iconName: "Smartphone",
    color: "text-sky-400",
    skills: [
      "React Native",
      "Android (Native/Config)",
      "iOS (Native/Config)",
      "Expo & EAS",
      "React Navigation",
      "Mobile UI / Responsive",
      "Platform-Specific Code",
      "In-App Purchases (IAP)",
      "Deep Linking",
    ],
  },
  {
    category: "Languages & Frameworks",
    iconName: "Code2",
    color: "text-indigo-400",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Python",
      "React.js",
      "HTML5",
      "CSS3 / Tailwind",
    ],
  },
  {
    category: "State Management & Architecture",
    iconName: "Layers",
    color: "text-purple-400",
    skills: [
      "Redux",
      "Redux Toolkit",
      "Redux-Saga",
      "Context API",
      "Custom React Hooks",
      "Modular Component Architecture",
    ],
  },
  {
    category: "Cloud, APIs & AI",
    iconName: "Cloud",
    color: "text-teal-400",
    skills: [
      "RESTful APIs",
      "Firebase Authentication",
      "Firebase Cloud Messaging (FCM)",
      "Firebase Storage",
      "AWS S3 Cloud",
      "Google Gemini AI",
      "Google Maps API",
    ],
  },
  {
    category: "Testing & Native Tooling",
    iconName: "Briefcase",
    color: "text-amber-400",
    skills: [
      "Jest",
      "React Native Testing Library",
      "Android Studio",
      "Xcode",
      "Device Log Debugging",
      "Unit Testing",
    ],
  },
  {
    category: "DevOps, Release & Databases",
    iconName: "Database",
    color: "text-rose-400",
    skills: [
      "Google Play Console",
      "Apple App Store Connect",
      "Git & GitHub",
      "CI / CD Pipelines",
      "Postman",
      "Jira / Agile",
      "MongoDB",
      "MySQL",
      "Firestore",
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech) Honours in Computer Science",
    institution: "Shri Dadaji Institute of Technology and Science",
    location: "Khandwa, India",
    period: "Jul 2018 – Jun 2022",
  },
  {
    degree: "Post Graduate Diploma",
    institution: "Center for Development and Research Centre (CDRC)",
    location: "Hyderabad, India",
    period: "Mar 2023 – Aug 2023",
  },
  {
    degree: "Higher Secondary (10+2)",
    institution: "Sophia Convent Sr. Sec. School",
    location: "Khandwa, India",
    period: "Apr 2016 – May 2017",
  },
];

export const certificationsData: CertificationItem[] = [
  {
    name: "Full Stack Web Development",
    issuer: "TAP Academy, Bangalore",
    location: "Bangalore, India",
    period: "Jul 2022 – Nov 2022",
  },
  {
    name: "Web Application Development",
    issuer: "Internshala",
    location: "Online / Remote",
    period: "Aug 2022 – Oct 2022",
  },
];
