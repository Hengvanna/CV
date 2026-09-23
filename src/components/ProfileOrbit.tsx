import React from 'react';
import {
  DockerLogo,
  FlutterLogo,
  GitLogo,
  JavaScriptLogo,
  LaravelLogo,
  MySqlLogo,
  ReactLogo,
  TailwindLogo,
  TypeScriptLogo,
} from './skill-icons';

type OrbitIcon = {
  name: string;
  Logo: React.FC<{ className?: string }>;
};

const innerIcons: OrbitIcon[] = [
  { name: 'Laravel', Logo: LaravelLogo },
  { name: 'React', Logo: ReactLogo },
  { name: 'Flutter', Logo: FlutterLogo },
  { name: 'TypeScript', Logo: TypeScriptLogo },
];

const outerIcons: OrbitIcon[] = [
  { name: 'JavaScript', Logo: JavaScriptLogo },
  { name: 'Tailwind CSS', Logo: TailwindLogo },
  { name: 'MySQL', Logo: MySqlLogo },
  { name: 'Git', Logo: GitLogo },
  { name: 'Docker', Logo: DockerLogo },
];

interface ProfileOrbitProps {
  name: string;
}

const OrbitRing: React.FC<{
  icons: OrbitIcon[];
  radiusVar: string;
  reverse?: boolean;
}> = ({ icons, radiusVar, reverse = false }) => (
  <div className="absolute inset-0">
    {icons.map((icon, index) => {
      const angle = (360 / icons.length) * index;
      return (
        <div
          key={icon.name}
          className={`orbit-item ${reverse ? 'orbit-item-reverse' : ''}`}
          style={{
            ['--start' as string]: `${angle}deg`,
            ['--r' as string]: `var(${radiusVar})`,
          }}
        >
          <div
            className="flex h-14 w-14 sm:h-16 sm:w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-black/5"
            title={icon.name}
          >
            <icon.Logo className="h-8 w-8 sm:h-9 sm:w-9" />
            <span className="sr-only">{icon.name}</span>
          </div>
        </div>
      );
    })}
  </div>
);

const ProfileOrbit: React.FC<ProfileOrbitProps> = ({ name }) => {
  return (
    <div className="profile-orbit relative mx-auto h-[24rem] w-[24rem] sm:h-[32rem] sm:w-[32rem] lg:h-[36rem] lg:w-[36rem]">
      <div className="pointer-events-none absolute inset-[18%] rounded-full border border-[#3db5e6]/25" />
      <div className="pointer-events-none absolute inset-[6%] rounded-full border border-[#FF2D20]/15" />
      <div className="pointer-events-none absolute inset-[28%] rounded-full bg-[#3db5e6]/15 blur-2xl" />

      <OrbitRing icons={innerIcons} radiusVar="--orbit-inner" />
      <OrbitRing icons={outerIcons} radiusVar="--orbit-outer" reverse />

      <img
        src="/profile.jpg"
        alt={name}
        className="absolute left-1/2 top-1/2 z-10 h-[11rem] w-[11rem] sm:h-[14.5rem] sm:w-[14.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full object-cover object-top ring-4 ring-white shadow-xl"
      />
    </div>
  );
};

export { LaravelLogo, ReactLogo, FlutterLogo };
export default ProfileOrbit;
