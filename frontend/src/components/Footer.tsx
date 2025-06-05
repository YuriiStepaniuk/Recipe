const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 border-t mt-12">
      <div className="container mx-auto py-6 px-4 text-center text-sm">
        &copy; {new Date().getFullYear()} My Recipe App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
