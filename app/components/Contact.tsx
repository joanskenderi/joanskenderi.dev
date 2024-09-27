import { FaLinkedin, FaMailBulk } from 'react-icons/fa';

const currentYear = new Date().getFullYear();

export default function Contact() {
  return (
    <footer className="pb-10">
      <h2 className="text-center my-8 text-3xl">Get in Touch</h2>

      <div className="flex justify-center items-center text-center space-x-10 tracking-tight">
        <div className="flex items-center space-x-1 transition-colors duration-200 hover:text-purple-300">
          <FaMailBulk className="text-xl" />
          <a
            href="mailto:jo.skenderi@gmail.com"
            target="_blank"
            className="text-md"
          >
            Email
          </a>
        </div>

        <div className="flex items-center space-x-1 transition-colors duration-200 hover:text-purple-300">
          <FaLinkedin className="text-xl" />
          <a
            href="https://www.linkedin.com/in/joanskenderi"
            target="_blank"
            className="text-md"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="text-center mt-10">
        <span className="text-xs">
          &copy; {currentYear} Joan Skënderi. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
