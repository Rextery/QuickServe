const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-2">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="mt-4 sm:mt-0"></div>
          <img src="/Logo.webp" className="h-12" alt="UvaLula" />
          <div className="mt-4 sm:mt-0"></div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            UvaLula™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
