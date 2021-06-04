import React from 'react';
import { AuthorContent } from '../lib/authors';

type Props = {
  author: AuthorContent;
};

const Author = ({ author }: Props) => (
  <>
    <span>{author.name}</span>
    <style jsx>
      {`
        span {
          color: #9b9b9b;
        }
      `}
    </style>
  </>
);

export default Author;
