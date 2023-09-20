import React from 'react';
import styles from '../styles/Home.module.css';
import CenteredContainer from '../components/CenteredContainer';
import { ExperienceCard } from '../components/ExperienceCard';
import HeadTags from '../components/HeadTags';
import HomeHeader from '../components/HomeHeader';
import { H1,H2 } from '../components/Titles';
import Spacer from '../components/Spacer';
import MSC from '/Users/rachellohan/Rachellohan/rachellohan/public/MSC.png'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <HeadTags
        title="Rachel Lohan"
        description="I'm Rachel Elizabeth Lohan, a software engineer from Long Island,NY. I've been working on some pretty cool projects while at Georgia Tech."
      />

      <div id="home" />

      <div style={{ paddingTop: 50, backgroundColor: '#F1F1F1' }} />

      <HomeHeader />

      <div id="about" />

      <div style={{ padding: '3vw' }} />

      <CenteredContainer>
        <p className={styles.headerContentText}>
          I'm Rachel Lohan, a Georgia Tech student from Long Island, NY.
        </p>
        <p className={styles.headerContentText}>
          I got into programming by chance. In 2019, after moving to Florida and enrolling at{' '}
          <Link href="https://www.martinschools.org/">
            Martin County Schools
          </Link>{' '}
          during Covid, I got the opportunity to start working on my tech projects.
          This paid off and I earned a paid internship working at Martin County Schools.
        </p>
        <p className={styles.headerContentText}>
          The internship gave me a lot of experience and knowledge about project development.
           I worked on deploying updates and maintaining a new database for the school.

        </p>
        <p className={styles.headerContentText}>
          Come {new Date().getFullYear()}, and I'm now in college and a part of the powerlifting team,
            the data science club, and the working part time as a tutor.
            I like to think that the experience of interning at Martin County Schools
            encouraged me to go into computing and helped me get where I am today.
        </p>
        <p className={styles.headerContentText}>
          The last couple years have been a wild ride, and I'm now even more
          excited for the future.
        </p>
      </CenteredContainer>

      <div id="experience" />

      <div style={{ padding: '3vw' }} />

      <H1 centered marginBottom={40}>
        Experience
      </H1>

      <Spacer top={5} />

      <ExperienceCard
        header="Martin County Schools"
        subheader="Technical Assistant Intern"
        codeTags={['Hardware', 'Trouble-Shooting', 'Python', 'SQL']}
        content={[
          'Interned at Martin County Schools.',
          'I helped create and maintain a new database for users to better access laptop data and status.',
        ]}

        imageUrl=""
        imageAlt="MCS logo"
      />

      <ExperienceCard
        header="Data Science Club @ GaTech"
        subheader="Team Member"
        codeTags={[
          'Pandas',
          'Kubernetes',
          'Docker',
          'PostgreSQL',
          'Golang',
        ]}
        content={[
          '',
          "I've revamped  ",
        ]}
        imageUrl=""
        imageAlt="Dsgt logo"
      />

      <ExperienceCard
        header="Diane Fund"
        subheader="Software Engineer, Analytics"
        codeTags={[
          'AWS',
          'React Native',
          'Next.js',
          'RTMP/HLS',
          'FFmpeg',
          'TypeScript',
        ]}
        content={[
          'd f.',
          "I've elped develop our APIs and servers hosted on AWS.",
        ]}
        imageUrl=""
        imageAlt="DF logo"
      />


      <H1 centered marginBottom={40}>
        Education
      </H1>

      <ExperienceCard
        header="Georgia Tech"
        subheader="Computer Science"
        content={[
          'The Georgia Institute of Technology is a public research university in the heart of Atlanta, Georgia.',
          "While at Georgia Tech, I've started getting involved with clubs like Data Science and powerlifting. In the Fall 2022 semester, I'll be managing Community Membership at the Powerlifting club, a new program to foster a community of strength GT.",
        ]}
        imageUrl=""
        imageAlt="Georgia Tech logo"
      />

      <ExperienceCard
        header="Jensen Beach High School"
        subheader="AP Scholar with Distinction"
        content={[
          "Jensen Beach High School is located in south Florida. Known for it's academics, Jensen Beach fostered a rigous academic schedule for willing students.",
          'While at Jensen I served on the student government, helping create new events. ',
        ]}
        imageUrl=""
        imageAlt="Jensen Beach logo"
      />
    </>
  );
}