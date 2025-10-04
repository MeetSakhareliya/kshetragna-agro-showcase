export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm mb-2">
          © {new Date().getFullYear()} Kshetragna Agri Engitech. All rights reserved.
        </p>
        <p className="text-sm opacity-90">
          Here, There And Everywhere - Serving Farmers with Pride
        </p>
      </div>
    </footer>
  );
};
