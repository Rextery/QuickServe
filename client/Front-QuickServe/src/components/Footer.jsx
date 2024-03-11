const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow mr-3 ml-2 mt-8">
      <div className="w-full max-w-screen-xl mx-auto p-4">
        <div className="sm:flex sm:items-center sm:justify-center">
          <div className="flex justify-center items-center">
            <img src="/Logo.webp" className="h-12" alt="UvaLula" />
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-center text-gray-500 sm:text-center">
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
