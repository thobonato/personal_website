import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import Prev_Azalea from '../assets/images/azalea_preview.png';

const mockPreviews = {
  'https://www.wikipedia.org': {
    title: 'Wikipedia',
    description: 'Azalea',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/940/087/datas/medium.png'
  },
  'https://www.github.com': {
    title: 'GitHub: Where the world builds software',
    description: 'GitHub is where over 100 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and features, power your CI/CD and DevOps workflows, and secure code before you commit it.',
    image: Prev_Azalea
  }
};

const LinkPreview = ({ href, children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const getPreviewContent = () => {
    const preview = mockPreviews[href] || { title: 'No title', description: 'No description available' };
    return `
    <div className="max-h-200px max-w-200px p-2 bg-white-500">  
        ${preview.image ? `<img src="${preview.image}" alt="Preview" style="max-width: 100%; height: auto;" />` : ''}
      </div>
    `;
  };

  const handleMouseEnter = () => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 500); // Simulate loading delay
    }
  };

  return (
    <>
      <span
        data-tooltip-id={`tooltip-${href}`}
        data-tooltip-html={isLoading ? "Loading preview..." : getPreviewContent()}
        onMouseEnter={handleMouseEnter}
      >
        {children}
      </span>
      <Tooltip id={`tooltip-${href}`} />
    </>
  );
};

export default LinkPreview;