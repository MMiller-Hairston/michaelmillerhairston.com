import React from 'react';
import BasicMeta from './BasicMeta';
import OpenGraphMeta from './OpenGraphMeta';
import TwitterCardMeta from './TwitterCardMeta';

type Props = {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  url: string;
};

const Meta = ({ title, description, keywords, author, url }: Props) => (
  <>
    <BasicMeta
      title={title}
      description={description}
      keywords={keywords}
      author={author}
      url={url}
    />
    <OpenGraphMeta title={title} description={description} url={url} />
    <TwitterCardMeta title={title} description={description} url={url} />
  </>
);

export default Meta;
