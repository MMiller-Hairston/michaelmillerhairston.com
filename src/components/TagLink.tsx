import React from 'react';
import Link from 'next/link';
import { TagContent } from '../lib/tags';

type Props = {
  tag: TagContent;
};

const Tag = ({ tag }: Props) => (
  <Link href={'/recipes/tags/[[...slug]]'} as={`/recipes/tags/${tag.slug}`}>
    <a>{'#' + tag.name}</a>
  </Link>
);

export default Tag;
