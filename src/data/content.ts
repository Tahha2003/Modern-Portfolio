/**
 * Portfolio content and copy — ATS-friendly, professional wording
 */

export const hero = {
  name: 'Rizwan Aleem Tahha',
  title: 'Software Engineer | Full-Stack Developer | AI-Driven Solutions Builder',
  tagline: 'Designing and building scalable web applications and intelligent systems with a focus on performance and real-world impact.',
}

export const about = {
  brief: `Software Engineering Student specializing in Full-Stack Development and AI-Driven Solutions. Proven track record building scalable web applications with modern frameworks, RESTful APIs, and cloud technologies. Strong expertise in Machine Learning, Data Processing, and Agile Methodologies with a focus on delivering business value through clean, maintainable code.`,
  summary: `Software Engineering Student with demonstrated expertise in Full-Stack Web Development, AI/ML integration, and scalable system design. I build production-ready applications using modern frameworks, implement robust RESTful APIs, and leverage cloud technologies for optimal performance.

My technical foundation spans the complete development lifecycle—from UI/UX design and responsive frontend development to backend architecture, database optimization, and deployment automation. I have hands-on experience with machine learning models, computer vision using OpenCV, and data pipeline development for business intelligence.

Beyond technical skills, I bring strong project management capabilities, having successfully applied agile methodologies and quality engineering practices in team environments. I excel at translating complex business requirements into efficient technical solutions, ensuring alignment between stakeholder needs and development outcomes.`,
}

/** Tech stack by category — display name + Simple Icons slug (cdn.simpleicons.org) */
export const skillCategories = [
  {
    emoji: '🌐',
    title: 'Web & Application Development',
    items: [
      { name: 'HTML5', slug: 'html5' },
      { name: 'CSS3', slug: 'css3' },
      { name: 'JavaScript', slug: 'javascript' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'PHP', slug: 'php' },
      { name: 'React', slug: 'react' },
      { name: 'React Native', slug: 'react' },
      { name: 'Node.js', slug: 'nodedotjs' },
      { name: 'Bootstrap', slug: 'bootstrap' },
      { name: 'Tailwind CSS', slug: 'tailwindcss' },
      { name: 'jQuery', slug: 'jquery' },
    ],
  },
  {
    emoji: '🧠',
    title: 'AI/ML & Data Science',
    items: [
      { name: 'Python', slug: 'python' },
      { name: 'NumPy', slug: 'numpy' },
      { name: 'Pandas', slug: 'pandas' },
      { name: 'Matplotlib', slug: 'matplotlib' },
      { name: 'Plotly', slug: 'plotly' },
      { name: 'Scikit Learn', slug: 'scikitlearn' },
      { name: 'TensorFlow', slug: 'tensorflow' },
      { name: 'PyTorch', slug: 'pytorch' },
      { name: 'Keras', slug: 'keras' },
      { name: 'SciPy', slug: 'scipy' },
      { name: 'OpenCV', slug: 'opencv' },
      { name: 'Streamlit', slug: 'streamlit' },
    ],
  },
  {
    emoji: '🗄️',
    title: 'Databases & Data Warehousing',
    items: [
      { name: 'MySQL', slug: 'mysql' },
      { name: 'PostgreSQL', slug: 'postgresql' },
      { name: 'MongoDB', slug: 'mongodb' },
      { name: 'Microsoft SQL Server', slug: 'microsoftsqlserver' },
      { name: 'Oracle', slug: 'oracle' },
    ],
  },
  {
    emoji: '☁️',
    title: 'Cloud, DevOps & Deployment',
    items: [
      { name: 'AWS', slug: 'amazonaws' },
      { name: 'Azure', slug: 'microsoftazure' },
      { name: 'Google Cloud', slug: 'googlecloud' },
      { name: 'Firebase', slug: 'firebase' },
      { name: 'Vercel', slug: 'vercel' },
      { name: 'Docker', slug: 'docker' },
      { name: 'GitHub Actions', slug: 'githubactions' },
    ],
  },
  {
    emoji: '🛠️',
    title: 'Tools, IDEs & Design',
    items: [
      { name: 'VS Code', slug: 'visualstudiocode' },
      { name: 'Visual Studio', slug: 'visualstudio' },
      { name: 'Git', slug: 'git' },
      { name: 'GitHub', slug: 'github' },
      { name: 'Figma', slug: 'figma' },
      { name: 'Adobe Photoshop', slug: 'adobephotoshop' },
      { name: 'Adobe Illustrator', slug: 'adobeillustrator' },
      { name: 'Canva', slug: 'canva' },
      { name: 'WordPress', slug: 'wordpress' },
      { name: 'Microsoft Office', slug: 'microsoftoffice' },
      { name: 'Power BI', slug: 'powerbi' },
      { name: 'Selenium', slug: 'selenium' },
      { name: 'Apache NetBeans', slug: 'apachenetbeanside' },
      { name: 'Bash', slug: 'gnubash' },
      { name: 'Cisco Packet Tracer', slug: 'cisco' },
      { name: 'MATLAB', slug: 'matlab' },
    ],
  },
]

export const services = [
  {
    title: 'Full-Stack Web Development',
    description: 'End-to-end web applications with modern frameworks, responsive design, and clean architecture.',
  },
  {
    title: 'AI-Powered Applications',
    description: 'Intelligent features, ML model integration, and data-driven dashboards.',
  },
  {
    title: 'Automation & Testing Frameworks',
    description: 'Modular test automation, CI/CD pipelines, and quality assurance tooling.',
  },
  {
    title: 'Cloud-Native SaaS Solutions',
    description: 'Scalable, secure cloud deployments with Docker and microservices.',
  },
]

export const projects = [
  {
    id: 'brain-tumor-detector',
    title: 'Brain Tumor Detection',
    description: 'This project implements a comprehensive brain tumor detection system developed in both MATLAB and Python using OpenCV. The system uses watershed segmentation and morphological operations to detect brain tumors in MRI images, with implementations in both environments for maximum flexibility and accessibility.',
    image: 'public/projects/1.png',
    tech: ['Python', 'MATLAB'],
    category: 'ai',
    github: 'https://github.com/Tahha2003/Brain-Tumor-Detection',
  },
  {
    id: 'smart-crm',
    title: 'AI-Driven Customer Relationship Management Platform',
    description: 'A modern, full-stack AI-powered CRM system built with React 18, FastAPI, and PostgreSQL. Transform your sales process with intelligent lead scoring, predictive analytics, and automated insights that drive revenue growth.',
    image: 'public/projects/2.png',
    tech: ['React', 'Tailwind CSS', 'Vite', 'React', 'FastAPI', 'SQLAlchemy', 'Pydantic', 'PostgreSQL', 'Docker'],
    category: 'web',
    github: 'https://github.com/Tahha2003/AI-Driven-SmartCRM',
  },
  {
    id: 'iot-threat-monitoring-dashboard-blackbox-testing',
    title: 'IoT Threat Detection & Security Monitoring Platform - Blackbox Testing',
    description: 'The IoT Threat Detection & Security Monitoring Platform is a comprehensive prototype designed to detect and monitor security threats in IoT networks in real-time. This system combines packet analysis, behavioral anomaly detection, and intelligent threat classification to provide organizations with immediate insights into potential security incidents.',
    image: 'public/projects/3.png',
    tech: ['Java', 'Java-WebSocket', 'Maven', 'HTML', 'JUnit'],
    category: 'automation',
    github: 'https://github.com/Tahha2003/IoT-Threat-Monitoring-Dashboard_Blackbox-Testing',
  },
  {
    id: 'suspicious-login-detector-whitebox-testing',
    title: 'Suspicious Login Detector - Whitebox Testing',
    description: 'A Suspicious Login Detector for SIEM systems that demonstrates whitebox testing through structural testing, branch coverage, and data-flow analysis for cybersecurity threat detection.',
    image: 'public/projects/4.png',
    tech: ['Python', 'unittest Framework'],
    category: 'automation',
    github: 'https://github.com/Tahha2003/Suspicious-Login-Detector_Whitebox-Testing',
  },
  {
    id: 'man-studio-ecommerce',
    title: 'MAN Studio E-Commerce Platform',
    description: 'A modern, responsive e-commerce website for selling shirts, hoodies, upper and other garments with a clean and professional design and layout.',
    image: 'public/projects/5.png',
    tech: ['HTML', 'CSS', 'JS'],
    category: 'web',
    github: 'https://github.com/Tahha2003/MAN-Studio',
  },
  {
    id: 'my-portfolio',
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive personal portfolio website showcasing skills, projects, and professional experience.',
    image: 'public/projects/6.png',
    tech: ['HTML', 'CSS', 'JS', 'Boxicons', 'Typed.js', 'LocalStorage'],
    category: 'web',
    github: 'https://github.com/Tahha2003/My-Portfolio',
  },
  {
    id: 'checkmy-pc',
    title: 'PC Upgrade Recommender',
    description: 'Analyze your PC and get upgrade recommendations to run creative apps and games smoothly.',
    image: 'public/projects/7.png',
    tech: ['Python', 'Flask', 'HTML', 'Tailwind (CDN)', 'Vanilla JS'],
    category: ['web', 'ai'],
    github: 'https://github.com/Tahha2003/CheckMy-PC',
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot Application',
    description: 'A complete AI chatbot application built with Hugging Face Transformers and Gradio, featuring multiple model support, streaming responses, conversation memory, and a beautiful web interface.',
    image: 'public/projects/8.png',
    tech: ['Python', 'Hugging Face', 'Gradio'],
    category: 'ai',
    github: 'https://github.com/Tahha2003/AI-ChatBot',
  },
  {
    id: 'etl-pipeline',
    title: 'ETL Pipeline',
    description: 'This project is an assignment for the Data Warehousing and Data Mining course (CSC-315), focusing on ETL (Extract, Transform, Load) pipeline development using Microsoft SQL Server Integration Services (SSIS) and SQL Server Analysis Services (SSAS).',
    image: 'public/projects/9.png',
    tech: ['MDX'],
    category: 'data',
    github: 'https://github.com/Tahha2003/ETL-Pipeline',
  },
  {
    id: 'airport-network-topology',
    title: 'Airport-Network-Topology',
    description: 'The Airport Network Topology project is a simulated implementation of a fully functional airport communication and surveillance system using Cisco Packet Tracer.',
    image: 'public/projects/10.png',
    tech: ['Cisco Packet Tracer'],
    category: '',
    github: 'https://github.com/Tahha2003/Airport-Network-Topology',
  },
  {
    id: 'ai-currency-dashboard',
    title: 'AI Currency Prediction Dashboard',
    description: 'ML-powered dashboard for currency forecasts and interactive data visualization.',
    image: 'public/projects/11.png',
    tech: ['Python', 'Streamlit', 'Pandas', 'Numpy', 'Scikit-Learn', 'Matplotlib', 'Yahoo Finance API', 'Joblib'],
    category: 'ai',
    github: 'https://github.com/Tahha2003/Currency-Prediction-System',
  },
  {
    id: 'java-pos',
    title: 'Simple POS - Java Point of Sale System',
    description: 'A comprehensive Java-based Point of Sale (POS) system designed for small to medium-sized food businesses. This application provides an intuitive interface for managing sales, generating bills, and handling customer transactions.',
    image: 'public/projects/12.png',
    tech: ['Java', 'Java Swing', 'Apache Ant', 'Netbeans'],
    category: '',
    github: 'https://github.com/Tahha2003/Java-POS',
  },
  {
    id: 'shoes-ecommerce-platform',
    title: 'Shoes E-Commerce Platform',
    description: 'A modern, responsive e-commerce website for selling Nike shoes with a clean and professional design. Built with HTML, CSS, JavaScript, and PHP.',
    image: 'public/projects/13.png',
    tech: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
    category: 'web',
    github: 'https://github.com/Tahha2003/Shoes-E-Commerce',
  },
  {
    id: 'mobile-store',
    title: 'Mobile E-Commerce Platform',
    description: 'A modern, responsive e-commerce website for mobile phones, built with HTML, CSS, and JavaScript.',
    image: 'public/projects/14.png',
    tech: ['HTML', 'CSS', 'JS'],
    category: 'web',
    github: 'https://github.com/Tahha2003/Mobile-Store',
  },
]

export const education = {
  degree: 'Bachelor of Science - BS, Software Engineering',
  expected: 'UIT University (2022-Present)',
  coursework: ['Artificial Intelligence', 'Cloud Computing', 'Databases', 'Security', 'Software Engineering Practices'],
}

export const contact = {
  email: 'mailto:tahhaaleem@gmail.com?subject=Portfolio%20Contact&body=Hi%20RIZWAN!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect.',
  linkedin: 'https://www.linkedin.com/in/rizwan-aleem-tahha/',
  github: 'https://github.com/Tahha2003',
  instagram: 'https://www.instagram.com/tahha_aleem/',
  whatsapp: 'https://wa.me/923248215900?text=Hi%20RIZWAN!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect.',
}

export const footer = {
  quote: '“The best way to predict the future is to build it.”',
  social: contact,
}
