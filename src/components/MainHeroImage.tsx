import React from 'react';

import config from '../config';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div
      className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        className="w-full object-cover lg:w-full lg:h-full"
        style={{ maxWidth: '40rem' }}
        src={mainHero.img}
        alt="Digital twin"
      />
    </div>
  );
};

export default MainHeroImage;
