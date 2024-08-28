import React from "react";
import LinkPreview from './LinkPreview';
import 'react-tooltip/dist/react-tooltip.css';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <LinkPreview href="https://www.wikipedia.org">
        <a href="https://www.wikipedia.org">Wikipedia (with preview)</a>
      </LinkPreview>
      
      <br /><br />
      
      <LinkPreview href="https://www.github.com">
        <button onClick={() => window.location='https://www.github.com'}>
          GitHub (with preview)
        </button>
      </LinkPreview>
    </div>
  );
};

export default Home;