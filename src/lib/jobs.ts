import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import yaml from 'js-yaml';
import renderToString from 'next-mdx-remote/render-to-string';

const jobsDirectory = path.join(process.cwd(), 'content/jobs');

export type JobContent = {
  readonly title: string;
  readonly start: string;
  readonly end: string;
  readonly location: string;
  readonly fullpath: string;
  readonly content: string;
  readonly source: string;
  readonly position: string;
};

let jobCache: JobContent[];

export async function fetchJobContent(): Promise<JobContent[]> {
  if (jobCache) {
    return jobCache;
  }

  const fileNames = fs.readdirSync(jobsDirectory);
  const allJobsData = await Promise.all(
    fileNames
      .filter((it) => it.endsWith('mdx'))
      .map(async (fileName) => {
        const fullPath = path.join(jobsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const { content, data } = matter(fileContents, {
          engines: {
            yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
          },
        });

        const { renderedOutput } = await renderToString(content, {
          scope: data,
        });

        const matterData = data;
        matterData.content = content;
        matterData.fullpath = fullPath;
        matterData.source = renderedOutput;

        return matterData as JobContent;
      })
  );

  jobCache = allJobsData.sort((a, b) => {
    if (a.start < b.start) {
      return 1;
    } else {
      return -1;
    }
  });
  return jobCache;
}
