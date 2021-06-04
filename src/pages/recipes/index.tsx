import { GetStaticProps } from 'next';
import { Layout, Meta, PostList } from '../../components';
import config from '../../lib/config';
import { countPosts, listPostContent, PostContent } from '../../lib/posts';
import { listTags, TagContent } from '../../lib/tags';

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};

const url = '/recipes';
const title = 'All recipes';

const Index = ({ posts, tags, pagination }: Props) => (
  <Layout>
    <Meta url={url} title={title} />
    <PostList posts={posts} tags={tags} pagination={pagination} />
  </Layout>
);

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};
