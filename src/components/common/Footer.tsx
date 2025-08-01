const Footer = () => {
  return (
    <footer className="bg-card/50 border-t mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} CyberLearn. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
