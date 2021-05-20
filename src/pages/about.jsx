import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Education from '../components/about/Education';
import Experience from '../components/about/Experience';
import Skill from '../components/about/Skill';

const educationData = [
  {
    id: 1,
    schoolName: 'College of Art, Media and Technology in Chiang Mai University',
    period: 'August 7, 2017 - April 5, 2021',
    major: 'Modern Management and Information Technology',
    gpa: '3.37',
  },
  {
    id: 2,
    schoolName: 'Horpra School',
    period: '2013 - 2016',
    major: 'Sci-Math',
    gpa: '3.65',
  },
];

const experienceData = [
  {
    id: 1,
    orgName: 'Med CMU operation and data management center',
    period: 'May 21, 2019 - July 30, 2019',
    jop_position: 'Data Administrator',
  },
  {
    id: 2,
    orgName: 'Aritisan Digital',
    period: 'July 8, 2020 - March 19, 2021',
    jop_position: 'Front-End Developer',
  },
];

const skillData = [
  {
    id: 1,
    name: 'PHP',
  },
  {
    id: 2,
    name: 'JavaScript',
  },
  {
    id: 3,
    name: 'C',
  },
  {
    id: 4,
    name: 'CSS',
  },
  {
    id: 5,
    name: 'HTML',
  },
  {
    id: 6,
    name: 'MySQL',
  },
  {
    id: 7,
    name: 'Vue.js',
  },
  {
    id: 8,
    name: 'React.js',
  },
];

const About = () => {
  return (
    <Layout>
      <Sidebar />
      <div className="withsidebar space-y-5">
        <Education educationData={educationData} />
        <Experience experienceData={experienceData} />
        <Skill skillData={skillData} />
        <div className="mt-5 opacity-0">...</div>
      </div>
    </Layout>
  );
};

export default About;
