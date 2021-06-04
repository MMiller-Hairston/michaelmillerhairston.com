import BasicMeta from '../components/meta/BasicMeta';
import OpenGraphMeta from '../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../components/meta/TwitterCardMeta';
import { Layout, Meta, SocialList } from '../components';

const Index = () => (
  <Layout>
    <Meta url="/" />
    <BasicMeta url={'/'} />
    <OpenGraphMeta url={'/'} />
    <TwitterCardMeta url={'/'} />
    <div className="container">
      <div>
        <h1>
          Michael Miller-Hairston<span className="fancy">.</span>
        </h1>
        <p>Father / Software Engineer / Gamer / Amateur Chef</p>
        <h4>
          Arizona (looking to move) based Software Engineer currently with
          Deloitte.
        </h4>
        <SocialList />
      </div>
    </div>
    <style jsx>{`
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1 1 auto;
        padding: 0 1.5rem;
      }
      h1 {
        font-size: 2.5rem;
        margin: 0;
        font-weight: 500;
      }
      h2 {
        font-size: 1.75rem;
        font-weight: 400;
        line-height: 1.25;
      }
      .fancy {
        color: #15847d;
      }
      .handle {
        display: inline-block;
        margin-top: 0.275em;
        color: #9b9b9b;
        letter-spacing: 0.05em;
      }

      @media (min-width: 769px) {
        h1 {
          font-size: 3rem;
        }
        h2 {
          font-size: 2.25rem;
        }
      }
    `}</style>
  </Layout>
);

export default Index;
