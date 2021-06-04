import React from 'react';
import { BlogPosting } from 'schema-dts';
import { jsonLdScriptProps } from 'react-schemaorg';
import { formatISO } from 'date-fns';
import Head from 'next/head';

import config from '../../lib/config';

type Props = {
  url: string;
  title: string;
  keywords?: string[];
  date: Date;
  author?: string;
  image?: string;
  description?: string;
};

const JsonLdMeta = ({
  url,
  title,
  keywords,
  date,
  author,
  image,
  description,
}: Props) => (
  <Head>
    <script
      {...jsonLdScriptProps<BlogPosting>({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        mainEntityOfPage: config.base_url + url,
        headline: title,
        keywords: keywords ? undefined : keywords.join(','),
        datePublished: formatISO(date),
        author: author,
        image: image,
        description: description,
      })}
    />
  </Head>
);

export default JsonLdMeta;
