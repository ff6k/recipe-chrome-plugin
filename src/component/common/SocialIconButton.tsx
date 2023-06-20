import React from 'react';

import { SOCIAL_PLATFORM_INFO } from '../../type';

const SocialIconButton = ({ info }: { info: SOCIAL_PLATFORM_INFO }) => {
  return (
    <a href={info.link} target="_blank" rel="noreferrer">
      <button className="rounded-full bg-neutral-80 p-2">
        <img
          src={info.logo}
          alt={info.name}
          style={{ height: info.height, width: info.width }}
        />
      </button>
    </a>
  );
};

export default SocialIconButton;
