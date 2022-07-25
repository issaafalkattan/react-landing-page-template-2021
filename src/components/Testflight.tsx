import React from 'react';

import config from '../config';
import Divider from './Divider';

const Testflight = () => {
  const { testflight } = config;

  return (
    <section className={`bg-background py-8`} id="testflight">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          <span className="text-primary">Testflight</span>
        </h1>
        <Divider />
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {testflight?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{testflight?.description}</p>
              <div className="rounded-md shadow">
                <a
                  target={'_blank'}
                  href={testflight.primaryAction.href}
                  className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
                  rel="noreferrer"
                >
                  {testflight.primaryAction.text}
                </a>
              </div>
            </div>
          </div>
          <div className={`w-full sm:w-2/5 p-6`}>
            {/* <img src={testflight?.img} alt={testflight?.title} /> */}
            <img src={testflight?.imgQr} alt={testflight?.title} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testflight;
