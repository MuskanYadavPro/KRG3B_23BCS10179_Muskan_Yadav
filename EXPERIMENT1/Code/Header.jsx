const Header = ({ title }) => {
  return (
    <header
      style={{
        padding: "0.5rem",
        backgroundColor: "#07db4e",
        textAlign: "center",
      }}
    >
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
