const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center bg-gradient-to-r from-rose-100 to-teal-100">
      {children}
    </div>
  );
};

export default Layout;
