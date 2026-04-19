export interface Education {
  id: string;
  type: 'school' | 'college';
  year: string;
  degree: string;
  school: string;
  desc: string;
  fullDesc: string;
  image: string;
  location: string;
  gpa: string;
  gpaLabel: string;
}

export interface Project {
  liveUrl: string | undefined;
  githubUrl: string | undefined;
  id: string;
  title: string;
  category: string;
  image: string;
  tags: string[];
  fullDesc: string;
}

export const educationData: Education[] = [
  {
    id: 'school',
    type: 'school',
    year: '2022 - 2023',
    degree: 'TN HSC',
    school: 'Doveton Girls Higher Secondary School',
    desc: 'Completed Higher Secondary Education with a focus on Computer Science and Mathematics.',
    fullDesc: 'During my time at Princess Matriculation, I achieved a 90% in the TN HSC examinations. My curriculum focused heavily on Computer Science and Mathematics, complemented by French as a second language. This rigorous academic environment helped me develop strong logical reasoning and linguistic skills.',
    image: "/Shafiah-School.png",
    location: 'Chennai, Tamil Nadu',
    gpa: '90%',
    gpaLabel: 'Percentage'
  },
  {
    id: 'college',
    type: 'college',
    year: '2024 - 2027',
    degree: 'BSc in Computer Science & Artificial Intelligence',
    school: 'GURU SHREE SHANTIVIJAI JAIN COLLEGE FOR WOMEN',
    desc: 'Affiliated with the University of Madras, focusing on advanced computing and AI.',
    fullDesc: 'Currently pursuing a B.Sc. in Computer Science & Artificial Intelligence at Guru Shree Shantivijai Jain College for Women, affiliated with the University of Madras. The program provides deep insights into machine learning, neural networks, and modern software engineering practices. I currently maintain a CGPA of 9/10.',
    image: "/Shafiah-College.png",
    location: 'Chennai, Tamil Nadu',
    gpa: '9 / 10',
    gpaLabel: 'CGPA'
  }
];

export const projectsData: Project[] = [
  {
    id: 'quizily',
    title: 'Quizily',
    category: 'Web Application • Frontend',
    image: 'https://shafiah-noor.github.io/portfolio/images/img1.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    fullDesc: 'Quizily is an interactive quiz application designed to make learning engaging and fun. It features a robust scoring system, real-time progress tracking, and category-based quizzes. Built entirely with vanilla web technologies, it demonstrates smooth DOM manipulation and state management without heavy frameworks.',
    githubUrl: 'https://github.com/shafiah-noor/quizily', // Use : instead of ?:
    liveUrl: 'https://shafiah-noor.github.io/quizily'
  },
  {
    id: 'microgoal',
    title: 'Microgoal API',
    category: 'Backend • Full Stack',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    fullDesc: 'Microgoal API is a powerful goal-tracking backend built on the MERN stack. It provides a RESTful architecture for users to define, track, and manage their personal and professional goals. It features secure JWT authentication, CRUD operations for goals, and automated progress calculations.',
    githubUrl: 'https://github.com/Shafiah-Noor/MicroGoal-', 
    liveUrl: ''
  }

];
