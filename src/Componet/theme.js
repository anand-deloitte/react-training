export default function App({ theme }) {
    return (
      <>
        <Header theme={theme} />
        <Main theme={theme} />
        <Sidebar theme={theme} />
        <Footer theme={theme} />
      </>
    );
  }
  
  function Header({ theme }) {
    return (
      <>
        <User theme={theme} />
        <Login theme={theme} />
        <Menu theme={theme} />
      </>
    );
  }