import React from 'react';
import { Brain, GitBranch, MessageCircle, Users, Workflow } from 'lucide-react';

type IconProps = { className?: string };

export const LaravelLogo: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#FF2D20"
      d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.331l-4.323 2.49v4.934a.396.396 0 01-.191.329L8.91 23.951a.349.349 0 01-.071.025c-.016.005-.033.001-.049.011a.489.489 0 01-.166.017c-.042 0-.086-.009-.128-.017-.015-.01-.032-.006-.048-.011a.497.497 0 01-.071-.025L.187 18.763a.392.392 0 01-.188-.329V3.309a.377.377 0 01.189-.331L4.552.488A.376.376 0 014.742.32h.007c.015-.008.031-.004.047-.011.042-.009.086-.017.128-.017s.086.008.128.017c.015.007.032.003.048.011h.007c.066.029.126.072.177.126L11.91 6.51 19.641.456c.172-.1.384-.1.553.001l3.448 1.986c.173.101.28.277.28.468zM4.933 2.081 1.47 4.095v12.973l6.498 3.747v-4.13L4.933 14.9V2.081zm7.327 5.566L8.46 5.239 4.997 7.254v4.13l3.463 1.996 3.8-2.188V7.647zm.192 6.135-3.8 2.188v4.13l7.326-4.225V8.134l-3.526 2.033v3.615zm7.9-3.615-3.8 2.188v4.13l3.8-2.189V10.167zm-3.8-2.648 3.8-2.188-3.463-1.996-3.8 2.188 3.463 1.996z"
    />
  </svg>
);

export const ReactLogo: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} aria-hidden="true">
    <circle r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const FlutterLogo: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <polygon fill="#0553B1" points="25.4,2 4,24 11.2,31.3 39.9,2" />
    <polygon fill="#027DFD" points="25.4,18.6 18.2,25.8 25.4,33.1 39.9,18.6" />
    <polygon fill="#027DFD" points="18.2,32.9 25.4,40.2 18.2,47.5 11,40.2" />
    <polygon fill="#39CEFD" points="25.4,33.1 32.6,40.3 25.4,47.5 18.2,40.2" />
  </svg>
);

export const TypeScriptLogo: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <path fill="#fff" d="M7.2 17.2V8.8h2.1v6.6H14v1.8H7.2zm8.2.2c-1.7 0-2.8-.8-3.3-1.9l1.6-.9c.3.6.8 1 1.7 1 .8 0 1.3-.4 1.3-1 0-.6-.4-.9-1.5-1.3l-.6-.2c-1.7-.6-2.6-1.5-2.6-3.1 0-1.7 1.4-2.9 3.4-2.9 1.5 0 2.6.6 3.2 1.8l-1.5.9c-.3-.5-.8-.9-1.6-.9-.7 0-1.2.4-1.2.9 0 .6.4.8 1.5 1.2l.6.2c1.8.7 2.8 1.6 2.8 3.3 0 1.8-1.4 3-3.8 3z" />
  </svg>
);

export const JavaScriptLogo: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <rect width="24" height="24" rx="4" fill="#F7DF1E" />
    <path d="M11 17.6c0 1.5-.9 2.2-2.3 2.2-1.1 0-1.8-.6-2.2-1.3l1.3-.8c.2.4.5.7.9.7.4 0 .7-.2.7-.8v-5.3H11v4.5zm5.6 2.2c-1.4 0-2.3-.7-2.8-1.7l1.3-.8c.3.6.8 1.1 1.6 1.1.7 0 1.1-.3 1.1-.8s-.4-.7-1.5-1.1l-.5-.2c-1.5-.5-2.5-1.4-2.5-3 0-1.5 1.1-2.6 2.9-2.6 1.2 0 2.1.4 2.8 1.6l-1.3.8c-.3-.5-.6-.8-1.3-.8s-.9.3-.9.7c0 .5.3.7 1.3 1.1l.5.2c1.8.6 2.7 1.5 2.7 3.1 0 1.7-1.3 2.7-3.1 2.7z" />
  </svg>
);

export const TailwindLogo: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#38BDF8"
      d="M12 6C8.8 6 6.8 7.6 6 10.8c1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.7C13.7 12 15.1 13.5 18 13.5c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.7C16.3 7.5 14.9 6 12 6zM6 13.5C2.8 13.5.8 15.1 0 18.3c1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.7 1.2 1.3 2.6 2.8 5.5 2.8 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.7-1.2-1.3-2.6-2.8-5.5-2.8z"
    />
  </svg>
);

export const MySqlLogo: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#00758F"
      d="M16.4 4.2c-1.4 0-2.6.5-3.4 1.5-.8-1-2-1.5-3.4-1.5C6.4 4.2 4.2 6.5 4.2 9.5S6.4 14.8 9.6 14.8c1.3 0 2.5-.4 3.3-1.2.2.7.6 1.3 1.1 1.8.8.7 1.9 1.1 3.2 1.1 3.2 0 5.4-2.3 5.4-5.3S19.6 4.2 16.4 4.2zM9.6 13c-1.8 0-3.2-1.6-3.2-3.5S7.8 6 9.6 6s3.2 1.6 3.2 3.5S11.4 13 9.6 13zm6.8 2c-1.8 0-3.2-1.6-3.2-3.5S14.6 8 16.4 8s3.2 1.6 3.2 3.5-1.4 3.5-3.2 3.5z"
    />
  </svg>
);

export const GitLogo: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#F05032"
      d="M23.2 10.9 13.1.8a2.4 2.4 0 0 0-3.4 0L7.5 3l2.8 2.8a2 2 0 0 1 2.5 2.5l2.7 2.7a2 2 0 1 1-1.1.6l-2.5-2.5v6.6a2 2 0 1 1-1.6 0V9.7a2 2 0 0 1-1.1-2.6L6.3 4.3.8 9.8a2.4 2.4 0 0 0 0 3.4l10.1 10.1a2.4 2.4 0 0 0 3.4 0l10-10.1a2.4 2.4 0 0 0 0-3.4z"
    />
  </svg>
);

export const DockerLogo: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#2496ED"
      d="M13.1 10.1h2.1v2h-2.1v-2zm-2.5 0h2.1v2H10.6v-2zm-2.5 0H10v2H8.1v-2zm-2.4 0h2.1v2H5.7v-2zM8.1 8h2.1v2H8.1V8zm2.5 0h2.1v2h-2.1V8zM3.7 12.6h16.1c.1.6.1 1.2 0 1.8-.8 3.3-3.8 5.2-8 5.2-2.6 0-4.4-.9-5.3-2.5-.4-.8-.6-1.7-.5-2.6H3.7c-.3 0-.5-.3-.4-.6.3-1.1.9-2.1 1.7-2.9-.1.4-.2.8-.2 1.2 0 .1 0 .3.1.4z"
    />
  </svg>
);

const HtmlCssLogo: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fill="#E44D26" d="M3.5 2.2h17L19 20.2 12 22.2 5 20.2z" />
    <path fill="#F16529" d="M12 20.8 17.7 19.2 19 4.4H12z" />
    <path fill="#EBEBEB" d="M12 7.4H8.4l.2 2.4H12v2.3H8.8l.3 2.7L12 15.6v2.4l-3.6-1 .2-2.6" />
    <path fill="#fff" d="M12 7.4v2.4h3.4l-.3 2.3H12v2.3h3.1l-.4 2.2L12 18v2.4l3.6-1 .5-5.4.1-1.4.3-3.2H12z" />
  </svg>
);

const MongoLogo: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fill="#47A248" d="M12.2 2s.3 2.4-1 4.8C9.6 9.2 12 12.4 12 17.2c0 0 3.8-3.3 3.8-8.2C15.8 4.8 12.2 2 12.2 2z" />
    <path fill="#47A248" d="M12 17.4c-.2 0-.3.6-.3 1.3 0 .8.1 1.4.3 2.3.2-.9.3-1.5.3-2.3 0-.7-.1-1.3-.3-1.3z" />
  </svg>
);

const PostgresLogo: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#336791"
      d="M16.8 3.6c-1.4-.2-3 .3-4.3 1.5-1.2-1.1-2.7-1.6-4.1-1.5C5.4 3.8 3.6 6 3.8 9.3c.2 3.6 2.4 6.6 5.5 7.1.4.1.8 0 1.1-.2v1.4c0 1.3.4 2.1 1.6 2.3.5.1 1.1 0 1.5-.2v-2.8c.3.2.7.3 1.1.2 3.1-.5 5.3-3.5 5.5-7.1.2-3.3-1.6-5.5-4.3-5.6z"
    />
  </svg>
);

const MoodleLogo: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="#F98012" />
    <path fill="#fff" d="M7.2 13.8c.6-2.2 2.2-3.6 4.8-3.6s4.2 1.4 4.8 3.6c.1.4-.2.8-.6.8H7.8c-.4 0-.7-.4-.6-.8zM9.4 9.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4zm5.2 0a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" />
  </svg>
);

const JestLogo: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="#C21325" />
    <path fill="#fff" d="M12 6.4c2.6 0 4.7 2 4.7 4.5 0 2.3-1.6 4.2-3.8 4.6v2.1h-1.8v-2.1c-2.2-.4-3.8-2.3-3.8-4.6 0-2.5 2.1-4.5 4.7-4.5zm0 1.8c-1.6 0-2.8 1.2-2.8 2.7S10.4 13.6 12 13.6s2.8-1.2 2.8-2.7S13.6 8.2 12 8.2z" />
  </svg>
);

const WebpackLogo: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fill="#8DD6F9" d="M12 2.2 21 7.4v9.2L12 21.8 3 16.6V7.4z" />
    <path fill="#1C78C0" d="M12 4.4 19 8.4v7.2l-7 4-7-4V8.4z" />
    <path fill="#fff" d="M12 7.2 16.4 9.6v4.8L12 16.8 7.6 14.4V9.6z" />
  </svg>
);

const skillIcons: Record<string, React.FC<IconProps>> = {
  React: ReactLogo,
  TypeScript: TypeScriptLogo,
  'HTML/CSS': HtmlCssLogo,
  JavaScript: JavaScriptLogo,
  'Tailwind CSS': TailwindLogo,
  Laravel: LaravelLogo,
  'RESTful APIs': Workflow,
  MySQL: MySqlLogo,
  MongoDB: MongoLogo,
  PostgreSQL: PostgresLogo,
  Docker: DockerLogo,
  'CI/CD': GitBranch,
  Moodle: MoodleLogo,
  Git: GitLogo,
  Jest: JestLogo,
  Webpack: WebpackLogo,
  'Problem Solving': Brain,
  Communication: MessageCircle,
  Teamwork: Users,
};

export const getSkillIcon = (name: string): React.FC<IconProps> | undefined => skillIcons[name];
