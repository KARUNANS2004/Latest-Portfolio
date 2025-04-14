import React from 'react';
import ConnectBackground from '../components/ConnectBackground';

const Connect = () => {
  return (
    <div className="relative bg-[#040417] mt-32 backdrop-blur-sm px-4 sm:px-2">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <ConnectBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white w-full flex flex-col items-center justify-between">
        <div className="relative w-full max-w-[90%] md:max-w-[800px] flex items-center justify-center connect-page backdrop-blur-sm rounded-[1.5rem] inset-0 z-10">
          <div className="w-full h-full p-6 sm:p-4 bg-[#040417] rounded-[1.5rem]">
            <h2 className="text-[32px] sm:text-[24px] font-semibold flex flex-col items-center gap-0">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-1">
                <p>Let’s make your online</p>
                <span className="text-[#954FFE]">presence</span>
              </div>
              <p>unforgettable</p>
            </h2>
            <p className="w-full text-center text-gray-300 text-lg sm:text-base mt-6 sm:mt-4">
              Tell me about your project <i className="ri-test-tube-fill"></i> I'll take care of the rest
            </p>
          </div>
        </div>

        <div
          className="rounded-[0.6rem] flex items-center justify-center bg-gradient-to-r from-[#0a0a23] via-[#14143b] to-[#57579a] bg-[length:200%_200%] animate-gradient mt-12 border border-[#15154f] w-[260px] sm:w-[90%] h-[60px] hover:scale-105 transition-transform duration-300 max-w-[300px]"
          onClick={() => {
            window.location.href = 'mailto:s.karuna0074@gmail.com';
          }}
        >
          <p className="bg-[#040417] font-semibold text-xl sm:text-lg text-white w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-[0.5rem] flex items-center justify-center cursor-pointer max-w-[300px]">
            Get in touch →
          </p>
        </div>

        <div
          id="lower-section-of-icons"
          className="w-full p-5 mt-20 flex md:flex-col sm:flex-col items-center justify-between gap-6 text-center"
        >
          <h2 className="text-lg sm:text-base z-[101]">Made With ❤️ By Karuna Nidhan Singh</h2>
          <div
            id="connection-icons"
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              {
                id: 'github',
                icon: <i className="ri-github-fill text-3xl sm:text-2xl" />,
                url: 'https://github.com/KARUNANS2004',
              },
              {
                id: 'linkedin',
                icon: <i className="ri-linkedin-box-line text-3xl sm:text-2xl" />,
                url: 'https://www.linkedin.com/in/karuna-nidhan-singh07/',
              },
              {
                id: 'leetcode',
                icon: (
                  <img
                    src="/src/assets/leetcode.svg"
                    className="h-[28px] w-[28px] sm:h-[24px] sm:w-[24px]"
                    alt="leetcode"
                  />
                ),
                url: 'https://leetcode.com/u/user7202mP/',
              },
              {
                id: 'discord',
                icon: <i className="ri-discord-line text-3xl sm:text-2xl" />,
                url: 'https://discord.com/channels/@me',
              },
              {
                id: 'instagram',
                icon: <i className="ri-instagram-line text-3xl sm:text-2xl" />,
                url: 'https://www.instagram.com/karuna.nidhan_singh/',
              },
            ].map(({ id, icon, url }) => (
              <div
                key={id}
                id={id}
                className="h-[48px] w-[48px] sm:h-[42px] sm:w-[42px] border border-white/20 rounded-xl flex items-center justify-center backdrop-blur-md bg-white/10 hover:scale-110 transition ease-linear cursor-pointer shadow-[0_0_20px_4px_rgba(255,255,255,0.2)]"
                onClick={() => window.open(url, '_blank')}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
