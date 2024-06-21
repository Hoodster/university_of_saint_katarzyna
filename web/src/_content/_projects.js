/* eslint-disable no-multi-str */
 export const universityProjects = [
  {
    id: 1,
    title: "Advanced Image Recognition for Healthcare",
    author: "Aleksandra Szymańska",
    description: "Develop an advanced image recognition system for healthcare applications.\n\
    Use deep learning techniques to analyze medical images and assist in diagnosis.\n\
    Implement real-time processing for quick and accurate results.\n\
    Develop a user-friendly interface for medical professionals to input and review images.",
    tags: ["IR", "DL", "HC", "IM", "RTP"],
    skillsImproved: ["DL", "IM", "AI", "RTP", "UI"],
    requiredKnowledge: ["DL", "IM", "RTP", "HC", "AI", "UI"],
    duration: 3,
    level: "MS-PHD"
  },
  {
    id: 2,
    title: "IoT-Based Environmental Monitoring System",
    author: "Janina Kaczmarek",
    description: "Create an IoT-based system for monitoring environmental conditions.\n\
    Use sensors to collect data on air quality, temperature, and humidity.\n\
    Implement data analysis to identify trends and provide insights.\n\
    Develop a web interface for users to access real-time environmental data.",
    tags: ["IoT", "DA", "ES", "WD", "SUS"],
    skillsImproved: ["EM", "IoT", "DA", "WD", "PS"],
    requiredKnowledge: ["ES", "DA", "IoT", "WD", "EM", "PS"],
    duration: 3,
    level: "BS-MS"
  },
  {
    id: 3,
    title: "Smart Grid Energy Management System",
    author: "Ewelina Zielińska",
    description: "Develop a smart grid system for managing energy distribution.\n\
    Use IoT sensors to monitor energy usage and production.\n\
    Implement algorithms to optimize energy distribution and reduce waste.\n\
    Develop a dashboard for utilities to manage the grid and analyze data.",
    tags: ["IoT", "EM", "DA", "EE"],
    skillsImproved: ["SG", "IoT", "EE", "DA"],
    requiredKnowledge: ["EM", "DA", "IoT", "EE", "SG"],
    duration: 4,
    level: "PHD"
  },
  {
    id: 4,
    title: "AI-Driven Customer Service System",
    author: "Łukasz Wróbel",
    description: "Create an AI-driven system to enhance customer service.\n\
    Implement natural language processing to understand customer queries.\n\
    Use machine learning to provide accurate and personalized responses.\n\
    Develop a user-friendly interface for both customers and service representatives.",
    tags: ["AI", "NLP", "CS", "UI", "CUS"],
    skillsImproved: ["AI", "NLP", "CUS", "UI", "AT"],
    requiredKnowledge: ["AI", "NLP", "CUS", "CS", "UI", "AT"],
    duration: 3,
    level: "BS-MS"
  },
  {
    id: 5,
    title: "Blockchain-Based Supply Chain Management",
    author: "Michał Nowak",
    description: "Develop a blockchain-based system to enhance supply chain management.\n\
    Implement smart contracts to automate transactions.\n\
    Ensure transparency and traceability of goods.\n\
    Develop a dashboard for stakeholders to monitor the supply chain.",
    tags: ["BC", "SC", "LG", "SEC"],
    skillsImproved: ["BC", "SCM", "SEC", "LG"],
    requiredKnowledge: ["BC", "SC", "LG", "SEC", "SCM"],
    duration: 4,
    level: "BS"
  },
  {
    id: 6,
    title: "Predictive Analytics for Financial Markets",
    author: "Anna Kowalska",
    description: "Develop a predictive analytics system for financial markets.\n\
    Use machine learning to analyze market trends.\n\
    Develop algorithms for predictive modeling.\n\
    Implement a user interface for financial analysts to interact with the system.",
    tags: ["PA", "ML", "FM", "UI", "CS"],
    skillsImproved: ["PM", "ML", "FM", "UI", "CS"],
    requiredKnowledge: ["ML", "FM", "CS", "PA", "PM", "UI"],
    duration: 3,
    level: "BS-MS"
  }
];

const tags = {
  'IoT': 'Internet of Things',
  'DA': 'Data Analysis',
  'PY': 'Python',
  'UP': 'Urban Planning',
  'AI': 'Artificial Intelligence',
  'ML': 'Machine Learning',
  'HC': 'Healthcare',
  'SC': 'Smart Contracts',
  'SCM': 'Supply Chain Management',
  'DR': 'Drones',
  'LG': 'Logistics',
  'PA': 'Predictive Analytics',
  'FN': 'Finance',
  'AGR': 'Agriculture',
  'EM': 'Energy Management',
  'EDU': 'Education',
  'IR': 'Image Recognition',
  'DL': 'Deep Learning',
  'ES': 'Environmental Science',
  'CS': 'Cybersecurity',
  'NLP': 'Natural Language Processing',
  'SUS': 'Sustainability',
  'IM': 'Imaging',
  'UI': 'User Interface/User Experience',
  'RTP': 'Real-Time Processing',
  'WD': 'Web Development',
  'EE': 'Energy Efficiency',
  'CUS': 'Customer Service',
  'SG': 'Smart Grids',
  'PS': 'Problem-Solving',
  'CT': 'Critical Thinking',
  'AT': 'Analytical Thinking'
};

const tagColors = {
  'IoT': 'blue.200',
  'DA': 'teal.200',
  'PY': 'orange.400',
  'UP': 'blue.600',
  'AI': 'yellow.200',
  'ML': 'red.300',
  'HC': 'teal.500',
  'SC': 'green.600',
  'SCM': 'red.600',
  'DR': 'pink.400',
  'LG': 'purple.600',
  'PA': 'purple.300',
  'FN': 'pink.600',
  'AGR': 'green.300',
  'EM': 'teal.800',
  'EDU': 'gray.400',
  'IR': 'cyan.500',
  'DL': 'cyan.300',
  'ES': 'cyan.700',
  'CS': 'red.700',
  'NLP': 'red.900',
  'SUS': 'green.800',
  'IM': 'yellow.600',
  'UI': 'blue.200',
  'RTP': 'purple.100',
  'WD': 'pink.100',
  'EE': 'cyan.100',
  'CUS': 'RGBA(0, 0, 0, 0.24)',
  'SG': 'gray.400',
  'PS': 'gray.500',
  'CT': 'purple.900',
  'AT': 'pink.900'
};

const skillsImproved = {
  'IoT': 'Internet of Things',
  'DA': 'Data Analysis',
  'SUS': 'Sustainability',
  'LG': 'Logistics',
  'PS': 'Problem-Solving',
  'AI': 'Artificial Intelligence',
  'IM': 'Medical Imaging',
  'ML': 'Machine Learning',
  'UI': 'User Interface/User Experience',
  'BC': 'Blockchain Development',
  'SC': 'Smart Contracts',
  'SCM': 'Supply Chain Management',
  'SEC': 'Security',
  'AUT': 'Automation',
  'RO': 'Route Optimization',
  'AS': 'Autonomous Systems',
  'PM': 'Predictive Modeling',
  'FM': 'Financial Markets',
  'AGR': 'Agricultural Technology',
  'EE': 'Energy Efficiency',
  'PL': 'Personalized Learning',
  'EDT': 'Educational Technology',
  'TM': 'Traffic Management',
  'TD': 'Threat Detection',
  'DL': 'Deep Learning',
  'RTP': 'Real-Time Processing',
  'EM': 'Environmental Monitoring',
  'WD': 'Web Development',
  'CUS': 'Customer Service',
  'AT': 'Analytical Thinking',
  'CT': 'Critical Thinking'
};

const requiredKnowledge = {
  'IoT': 'Basics of Internet of Things',
  'PY': 'Python programming',
  'UP': 'Urban Planning',
  'LG': 'Logistics',
  'ML': 'Basics of machine learning',
  'MT': 'Medical terminology',
  'PR': 'Programming',
  'DR': 'Basics of drones',
  'FN': 'Basics of finance',
  'AGR': 'Basics of agriculture',
  'EM': 'Energy Management',
  'EDP': 'Educational Psychology',
  'DA': 'Data Analysis',
  'TM': 'Basics of traffic management',
  'CS': 'Basics of cybersecurity',
  'DL': 'Basics of deep learning',
  'IM': 'Medical Imaging',
  'ES': 'Basics of environmental science',
  'CUS': 'Customer Service'
};

const skillsTooltips = {
  'IoT': 'Integration of IoT devices and technologies',
  'DA': 'Analyzing data for insights and decision-making',
  'SUS': 'Implementing sustainable practices',
  'LG': 'Managing logistics and supply chain',
  'PS': 'Developing solutions to complex problems',
  'AI': 'Artificial Intelligence development and applications',
  'IM': 'Analyzing medical images',
  'ML': 'Building and training machine learning models',
  'UI': 'Designing user interfaces and experiences',
  'BC': 'Developing blockchain applications',
  'SC': 'Creating and managing smart contracts',
  'SCM': 'Managing supply chains effectively',
  'SEC': 'Ensuring security in digital systems',
  'AUT': 'Automating processes and systems',
  'RO': 'Optimizing delivery and travel routes',
  'AS': 'Developing autonomous systems',
  'PM': 'Building predictive models',
  'FM': 'Understanding financial markets and instruments',
  'AGR': 'Applying technology in agriculture',
  'EE': 'Improving energy usage efficiency',
  
  'PL': 'Developing personalized learning experiences',
  'EDT': 'Applying technology in education',
  'TM': 'Managing and optimizing traffic',
  'TD': 'Detecting cybersecurity threats',
  'DL': 'Implementing deep learning models',
  'RTP': 'Processing data in real-time',
  'EM': 'Monitoring environmental conditions',
  'WD': 'Developing web applications',
  'CUS': 'Improving customer service interactions',
  'AT': 'Thinking analytically to solve problems',
  'CT': 'Applying critical thinking skills'
};

const requiredKnowledgeTooltips = {
  'IoT': 'Fundamental knowledge of Internet of Things',
  'PY': 'Programming in Python',
  'UP': 'Knowledge of urban planning principles',
  'LG': 'Understanding logistics and supply chain management',
  'ML': 'Fundamental knowledge of machine learning',
  'MT': 'Understanding medical terminology',
  'PR': 'General programming skills',
  'DR': 'Fundamental knowledge of drone technology',
  'FN': 'Understanding financial principles',
  'AGR': 'Knowledge of agricultural practices',
  'EM': 'Understanding energy management principles',
  'EDP': 'Basics of educational psychology',
  'DA': 'Techniques and tools for data analysis',
  'TM': 'Understanding traffic management principles',
  'CS': 'Fundamental knowledge of cybersecurity',
  'DL': 'Understanding deep learning concepts',
  'IM': 'Knowledge of medical imaging techniques',
  'ES': 'Understanding environmental science principles',
  'CUS': 'Principles of customer service'
};

export const getTagName = (tag) => {
  return tags[tag]
}

export const getTagColor = (tag) => {
  return tagColors[tag]
}

export const getSkillName = (skill) => {
  return skillsImproved[skill]
}

export const getSkillTooltip = (skill) => {
  return skillsTooltips[skill]
}

export const getRequirementsName = (requirement) => {
  return requiredKnowledge[requirement]
}

export const getRequirementsTooltip = (requirement) => {
  return requiredKnowledgeTooltips[requirement]
}
