import React from 'react';
import ReactCountryFlag from 'react-country-flag';

import { SocialIconButton } from '../common';
import { RECIPE_DATA } from '../../type';

const PopUpHeader = ({ data }: { data: RECIPE_DATA }) => {
  return (
    <div className="justify-between flex">
      <div className="flex space-x-2.5 items-center flex">
        <ReactCountryFlag
          countryCode={data.countryCode}
          svg
          style={{
            width: '2em',
            height: '2em',
          }}
          className="rounded-lg"
        />
        <span className="text-sm text-white">{data.title}</span>
      </div>
      <div className="flex space-x-1 items-center flex">
        {data.socials.map((platform) => (
          <SocialIconButton info={platform} key={platform.name} />
        ))}
      </div>
    </div>
  );
};

export default PopUpHeader;
