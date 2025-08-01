export interface Lesson {
  id: string;
  title: string;
  videoId: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  instructor: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  lessons: Lesson[];
  relatedCourses?: string[];
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Ethical Hacking',
    description: 'Learn the basics of ethical hacking and penetration testing.',
    longDescription: 'This course provides a comprehensive introduction to the world of ethical hacking. You will learn about different types of hackers, common attack vectors, and the five phases of hacking: reconnaissance, scanning, gaining access, maintaining access, and covering tracks. No prior experience is required.',
    thumbnail: 'https://placehold.co/600x400',
    instructor: 'John Doe',
    level: 'Beginner',
    lessons: [
      { id: '1-1', title: 'What is Ethical Hacking?', videoId: '3Kq1Mif4Rvk' },
      { id: '1-2', title: 'Kali Linux Basics', videoId: 'rMYV2xD4j_o' },
      { id: '1-3', title: 'Footprinting and Reconnaissance', videoId: 'j42uI1T4g4I' },
    ],
    relatedCourses: ['2', '3'],
  },
  {
    id: '2',
    title: 'Network Security Fundamentals',
    description: 'Understand the principles of network security and common protocols.',
    longDescription: 'Dive deep into network security concepts. This course covers TCP/IP, network protocols, firewall configuration, intrusion detection systems (IDS), and virtual private networks (VPNs). You will gain hands-on experience in securing a network from common threats.',
    thumbnail: 'https://placehold.co/600x400',
    instructor: 'Jane Smith',
    level: 'Intermediate',
    lessons: [
      { id: '2-1', title: 'OSI Model and TCP/IP Suite', videoId: 'vv4y_uOneC0' },
      { id: '2-2', title: 'Firewalls and VPNs Explained', videoId: '8G3QkY4_2P4' },
      { id: '2-3', title: 'Introduction to Wireshark', videoId: 'Tk1n5d83uYs' },
    ],
    relatedCourses: ['1', '4'],
  },
  {
    id: '3',
    title: 'Web App Penetration Testing',
    description: 'Discover vulnerabilities in web applications like SQLi, XSS, and CSRF.',
    longDescription: 'Learn how to perform penetration testing on web applications. This course covers the OWASP Top 10 vulnerabilities in detail, including SQL Injection, Cross-Site Scripting (XSS), and Cross-Site Request Forgery (CSRF). You will practice your skills in a safe, simulated environment.',
    thumbnail: 'https://placehold.co/600x400',
    instructor: 'Alex Johnson',
    level: 'Advanced',
    lessons: [
      { id: '3-1', title: 'OWASP Top 10 Explained', videoId: 'pSg9yY202lI' },
      { id: '3-2', title: 'SQL Injection Attacks', videoId: 'ciNHn38EyRc' },
      { id: '3-3', title: 'Cross-Site Scripting (XSS)', videoId: 'cbmx9-vYq_o' },
    ],
    relatedCourses: ['1'],
  },
  {
    id: '4',
    title: 'Cybersecurity for Beginners',
    description: 'A foundational course on the principles of cybersecurity.',
    longDescription: 'This course is designed for absolute beginners with no prior cybersecurity knowledge. We will cover fundamental concepts such as malware, phishing, social engineering, password security, and how to protect your personal digital life. It is the perfect starting point for anyone interested in a cybersecurity career.',
    thumbnail: 'https://placehold.co/600x400',
    instructor: 'Emily White',
    level: 'Beginner',
    lessons: [
      { id: '4-1', title: 'What is Cybersecurity?', videoId: 'inWWhr5tnEA' },
      { id: '4-2', title: 'Types of Malware', videoId: 'M3yUK0g0Q0g' },
      { id: '4-3', title: 'Phishing and Social Engineering', videoId: 'Y9AEuGfe6yY' },
    ],
    relatedCourses: ['1', '2'],
  },
];

export const getCourseById = (id: string): Course | undefined => {
  return courses.find(course => course.id === id);
};

export const getCoursesByIds = (ids: string[]): Course[] => {
  return courses.filter(course => ids.includes(course.id));
}
