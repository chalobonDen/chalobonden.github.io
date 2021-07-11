import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Education from '../components/about/Education';
import Experience from '../components/about/Experience';
import Skill from '../components/about/Skill';
import useApiRequest from '../lib/useApiRequest';

const getMonthToString = (m) => {
  if (m === 1) {
    return <>Jan</>;
  } else if (m === 2) {
    return <>Fed</>;
  } else if (m === 3) {
    return <>Mar</>;
  } else if (m === 4) {
    return <>Apr</>;
  } else if (m === 5) {
    return <>May</>;
  } else if (m === 6) {
    return <>June</>;
  } else if (m === 7) {
    return <>July</>;
  } else if (m === 8) {
    return <>Aug</>;
  } else if (m === 9) {
    return <>Sep</>;
  } else if (m === 10) {
    return <>Oct</>;
  } else if (m === 11) {
    return <>Nov</>;
  } else if (m === 12) {
    return <>Dec</>;
  }
};

const About = () => {
  const { data, error, isLoaded } = useApiRequest(
    'https://gitconnected.com/v1/portfolio/chalobonden'
  );
  console.log('get data from useApiRequest :', data);

  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div className="text-center pt-96">Loading...</div>;
  }

  return (
    <Layout>
      <Sidebar />
      <div className="withsidebar space-y-5">
        <Education
          educationData={data.education}
          getMonthToString={getMonthToString}
        />
        <Experience
          experienceData={data.work}
          getMonthToString={getMonthToString}
        />
        <Skill skillData={data.skills} />
        <div className="mt-5 opacity-0">...</div>
      </div>
    </Layout>
  );
};

export default About;
