import { BiCoffeeTogo, BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi';

export default function Header() {
  return (
    <nav className="flex items-center justify-center mb-20 py-6 gap-4 text-2xl">
      <a href="https://buymeacoffee.com/joanskenderi" target="_blank">
        <BiCoffeeTogo className="hover:text-yellow-400" />
      </a>

      <a href="https://www.linkedin.com/in/joanskenderi" target="_blank">
        <BiLogoLinkedin className="hover:text-blue-400" />
      </a>

      <a href="https://github.com/joanskenderi" target="_blank">
        <BiLogoGithub className="hover:text-purple-400" />
      </a>
    </nav>
  );
}
