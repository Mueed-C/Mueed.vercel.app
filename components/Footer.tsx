import Link from "next/link";

const Footer = ({}) => {
  return (
    <nav className="bg-gray-800 dark:bg-slate-900 rounded-md mb-5 mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center">
            <div className="text-slate-400 dark:text-slate-400 text-xs">
              Find an issue with this page?{" "}
              <Link
                href="https://github.com/Mueed-C/Mueed-C.github.io"
                className="text-sky-600 dark:text-sky-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Fix it on GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
