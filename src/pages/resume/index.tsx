import { GetStaticProps } from 'next';
import React from 'react';
import styles from '../../../public/styles/content.module.css';
import { Layout, Meta } from '../../components';
import { fetchJobContent, JobContent } from '../../lib/jobs';

type Props = {
  jobs: JobContent[];
};

const url = '/resume';
const title = 'Resume';

const Resume = ({ jobs }: Props) => (
  <Layout>
    <Meta url={url} title={title} />
    <div className="container">
      <ul className="job-list">
        {jobs.map((it, i) => (
          <li key={i}>
            <div className="title-bar">
              <p>
                {it.title}, {it.position}
              </p>
              <p>
                {it.location} | {it.start} - {it.end}
              </p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: it.source }}></div>
          </li>
        ))}
      </ul>
    </div>
    <style jsx>
      {`
        .container {
          display: block;
          max-width: 38rem;
          width: 100%;
          margin: 0 auto;
          padding: 0 1.5rem;
          box-sizing: border-box;
          z-index: 0;
        }
        .job-list {
          list-style-type: none;
        }
        .title-bar {
          display: flex;
          justify-content: space-between;
        }
      `}
    </style>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const jobs = await fetchJobContent();
  return {
    props: {
      jobs,
    },
  };
};

export default Resume;
