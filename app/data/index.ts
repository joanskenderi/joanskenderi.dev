import { CertificationItem, EducationItem, ExperienceItem } from '@/app/types';

export const EXPERIENCES = [
  {
    title: 'CMS Developer',
    company: 'contenance',
    link: 'https://contenance.de/',
    year: 'Dec 2023 - Sep 2024',
    location: 'Tirana, Albania',
    skills: ['React.js', 'Sass', 'Bootstrap', 'JavaScript', 'Neos CMS', 'YAML'],
  },
  {
    title: 'MERN Stack Developer',
    company: 'Selego',
    link: 'https://www.selego.co/',
    year: 'May 2023',
    location: 'Remote',
    skills: [
      'React Native',
      'Tailwind CSS',
      'Express.js',
      'Node.js',
      'JavaScript',
      'MongoDB',
      'Mongoose',
    ],
  },
  {
    title: 'React Developer',
    company: 'Helius Systems',
    link: 'https://helius-software.com/',
    year: 'Jul 2022 - Dec 2023',
    location: 'Tirana, Albania',
    skills: ['React.js', 'React Native', 'Material UI', 'TypeScript', 'Yarn'],
  },
  {
    title: '.NET Developer',
    company: 'Helius Systems',
    link: 'https://helius-software.com/',
    year: 'Jan 2022 - Jun 2022',
    location: 'Tirana, Albania',
    skills: [
      'Bootstrap',
      'jQuery',
      'Microsoft SQL Server',
      'ASP.NET MVC',
      'Kendo UI',
      'CSLA .NET',
    ],
  },
] as ExperienceItem[];

export const EDUCATION = [
  {
    title: 'Bachelor in Applied Informatics',
    institution: 'LOGOS University College',
    link: 'http://www.kulogos.edu.al/en/bachelor_infoeko.html',
    year: '2021 - 2024',
    location: 'Tirana, Albania',
  },
  {
    title: 'Java from Scratch',
    institution: 'Software Development Academy',
    link: 'https://sdacademy.al/kurset/java/',
    year: '2021 - 2022',
    location: 'Tirana, Albania',
  },
] as EducationItem[];

export const CERTIFICATIONS = [
  {
    title: 'Professional Scrum Developer',
    issuer: 'Scrum.org',
    link: 'https://www.scrum.org/assessments/professional-scrum-developer-certification',
    year: 'Dec 2023',
  },
  {
    title: 'Meta React Native Specialization',
    issuer: 'Coursera',
    link: 'https://www.coursera.org/specializations/meta-react-native',
    year: 'Jul 2023',
  },
  {
    title: 'Meta Front-End Developer',
    issuer: 'Coursera',
    link: 'https://www.coursera.org/professional-certificates/meta-front-end-developer',
    year: 'Feb 2023',
  },
] as CertificationItem[];
