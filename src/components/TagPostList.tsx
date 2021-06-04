import React from 'react';
import { PostContent } from '../lib/posts';
import { TagContent } from '../lib/tags';
import { PostItem, Pagination } from '.';

type Props = {
  posts: PostContent[];
  tag: TagContent;
  pagination: {
    current: number;
    pages: number;
  };
};

const TagPostList = ({ posts, tag, pagination }: Props) => (
  <div className={'container'}>
    <h1>
      All recipes / <span>{tag.name}</span>
    </h1>
    <ul>
      {posts.map((it, i) => (
        <li key={i}>
          <PostItem post={it} />
        </li>
      ))}
    </ul>
    <Pagination
      current={pagination.current}
      pages={pagination.pages}
      link={{
        href: () => '/recipes/tags/[[...slug]]',
        as: (page) =>
          page === 1
            ? '/recipes/tags/' + tag.slug
            : `/recipes/tags/${tag.slug}/${page}`,
      }}
    />
    <style jsx>
      {`
        .container {
          margin: 0 auto;
          max-width: 1200px;
          width: 100%;
          padding: 0 1.5rem;
          display: flex;
          flex-direction: column;
        }
        h1 {
          margin: 0 0 2rem;
          padding: 0;
          font-weight: 100;
          font-size: 1.75rem;
          color: #9b9b9b;
        }
        h1 span {
          font-weight: bold;
          color: #222;
        }
        ul {
          margin: 0;
          padding: 0;
          flex: 1 0 auto;
        }
        li {
          list-style: none;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 2rem;
          }
        }
      `}
    </style>
  </div>
);

export default TagPostList;