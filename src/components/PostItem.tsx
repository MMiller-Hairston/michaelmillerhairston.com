import React from 'react';
import Link from 'next/link';
import { parseISO } from 'date-fns';
import { PostContent } from '../lib/posts';
import { Date } from '.';

type Props = {
  post: PostContent;
};

const PostItem = ({ post }: Props) => (
  <Link href={'/recipes/' + post.slug}>
    <a>
      <Date date={parseISO(post.date)} />
      <h2>{post.title}</h2>
      <style jsx>
        {`
          a {
            color: #222;
            display: inline-block;
          }
          h2 {
            margin: 0;
            font-weight: 500;
          }
        `}
      </style>
    </a>
  </Link>
);

export default PostItem;
