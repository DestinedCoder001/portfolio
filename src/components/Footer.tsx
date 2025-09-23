const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="text-slate-200 text-[0.8rem] text-center">
      &copy; {date} Olowokere Destiny
    </div>
  );
};

export default Footer;
