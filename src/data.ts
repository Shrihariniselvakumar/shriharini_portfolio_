/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, SkillCategory, Experience, Award, Certification } from './types';

export const projectsData: Project[] = [
  {
    id: 'crop-prediction',
    title: 'AI Crop Prediction System',
    category: 'Machine Learning',
    year: '2023',
    description: 'Developed a model to assist farmers in choosing the best crops based on soil and weather parameters using Random Forest algorithms.',
    tags: ['Python', 'Scikit-Learn', 'Flask'],
    github: 'https://github.com/Shrihariniselvakumar/Ai-crop-prediction-'
  },
  {
    id: 'hr-attrition',
    title: 'HR Employee Attrition Analysis',
    category: 'Data Science',
    year: '2023',
    description: 'Analyzed workplace factors leading to staff turnover. Implemented predictive modeling to identify high-risk employees.',
    tags: ['Pandas', 'Seaborn', 'Logistic Regression'],
    github: 'https://github.com/Shrihariniselvakumar/HR-Employee-Attrition-Analysis-Prediction'
  },
  {
    id: 'traffic-risk',
    title: 'AI-Powered Traffic Risk Dashboard',
    category: 'Spotlight',
    year: 'Kalam Awards Finalist',
    description: 'A real-time analytics platform for urban planners to visualize accident hotspots and mitigate traffic risks using predictive spatial modeling.',
    tags: ['Real-time Data', 'XGBoost'],
    github: 'https://github.com/Shrihariniselvakumar/Ai--Traffic-Risk-Dashboard',
    isSpotlight: true
  },
  {
    id: 'amazon-recommendation',
    title: 'Amazon Product Recommendation',
    category: 'Project Spotlight Award',
    year: '2024',
    description: 'Built a collaborative filtering engine to provide personalized product suggestions based on user behavior and reviews.',
    tags: ['Recommender Systems', 'NLP'],
    github: 'https://github.com/Shrihariniselvakumar/amazon_recommendation'
  },
  {
    id: 'student-performance',
    title: 'Student Performance Data Analysis',
    category: 'Education Tech',
    year: '2022',
    description: 'A deep dive into academic datasets to discover correlations between socio-economic factors and grade performance.',
    tags: ['Matplotlib', 'Statistics'],
    github: 'https://github.com/Shrihariniselvakumar/student-_performance-_analysis'
  },
  {
    id: 'cloud-storage',
    title: 'Cloud-Based File Storage System',
    category: 'Cloud Computing',
    year: '2023',
    description: 'A secure, distributed file management system featuring user authentication and encrypted data transfers.',
    tags: ['AWS S3', 'Django', 'Cryptography'],
    github: 'https://github.com/Shrihariniselvakumar/cloud--storage'
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    name: 'Languages',
    iconName: 'Terminal',
    skills: ['Python', 'SQL', 'HTML', 'CSS', 'JavaScript']
  },
  {
    name: 'Frameworks & Libraries',
    iconName: 'Layers',
    skills: ['FastAPI', 'Flask', 'Streamlit', 'Scikit-learn', 'Pandas', 'NumPy', 'XGBoost', 'TensorFlow', 'Keras', 'Plotly']
  },
  {
    name: 'Databases',
    iconName: 'Database',
    skills: ['MongoDB', 'MySQL']
  },
  {
    name: 'AI & ML',
    iconName: 'BrainCircuit',
    skills: ['Machine Learning', 'NLP', 'TF-IDF', 'LLM', 'Groq API', 'OpenAI API', 'Hugging Face', 'LangChain']
  },
  {
    name: 'Tools & Platforms',
    iconName: 'Wrench',
    skills: ['Git', 'GitHub', 'Power BI', 'Tableau', 'Jupyter Notebook']
  }
];

export const experiencesData: Experience[] = [
  {
    id: 'techvolt',
    company: 'Techvolt',
    role: 'Data Science Intern',
    period: '2025-2026',
    description: 'Focusing on predictive analysis and data visualization for internal operational efficiency projects.'
  },
  {
    id: 'interlace',
    company: 'Interlace India',
    role: 'ML Engineer Trainee',
    period: '2025',
    description: 'Assisted in the development of classification models for large-scale enterprise data processing.'
  },
  {
    id: 'corizo',
    company: 'Corizo',
    role: 'AI Research Intern',
    period: '2024',
    description: 'Researched neural network optimization techniques and applied them to image recognition tasks.'
  },
  {
    id: 'tm-innovation',
    company: 'TM Innovation',
    role: 'Python Developer Intern',
    period: '2024',
    description: 'Automated routine backend tasks using Python scripts, improving data extraction speed by 40%.'
  },
  {
    id: 'rounds-edge',
    company: 'Rounds Edge',
    role: 'Web Development Intern',
    period: '2023',
    description: 'Collaborated on building responsive web applications with a focus on seamless user experience.'
  }
];

export const awardsData: Award[] = [
  {
    id: 'spotlight-award',
    title: 'Project Spotlight',
    description: 'Awarded for the Amazon Recommendation System project for innovation in AI.',
    iconName: 'Award'
  },
  {
    id: 'kalam-award',
    title: 'Kalam Awards',
    description: 'National Finalist for the AI-Powered Traffic Risk Dashboard solution.',
    iconName: 'Trophy'
  },
  {
    id: 'hackathon-award',
    title: '36 hrs Hackathon',
    description: 'Secured 2nd place in the University-level "Tech-Innovate" Hackathon.',
    iconName: 'CodeXml'
  },
  {
    id: 'gpa-milestone',
    title: '8.06 GPA',
    description: 'Consistently maintained high academic standing throughout graduation.',
    iconName: 'GraduationCap'
  }
];

export const certificationsData: Certification[] = [
  { id: '1', title: 'Python for Beginners', provider: 'Simplilearn (58 days)' },
  { id: '2', title: 'Basic of Python', provider: 'Infosys Springboard (1 hr)' },
  { id: '3', title: 'Html CSS Bootcamp', provider: 'LetsUpgrade (2024)' },
  { id: '4', title: 'Data Visualization using Tableau & Power BI', provider: 'Great Learning' },
  { id: '5', title: 'Object Oriented Programming using Python', provider: 'Infosys Springboard' },
  { id: '6', title: 'Learning Micro Power BI', provider: 'Infosys Springboard' },
  { id: '7', title: 'Data Analysis with Python', provider: 'freeCodeCamp' },
  { id: '8', title: 'Data Visualisation', provider: 'Tata Forage' },
  { id: '9', title: 'Data Analytics and Visualization', provider: 'Accenture Forage' },
  { id: '10', title: 'Deloitte Australia — Data Analytics Job Simulation', provider: 'Deloitte Forage' }
];

export const statsData = {
  projects: '7',
  internships: '3+',
  gpa: '8.06'
};
