 
import * as React from "react";
import { useRenderTimes } from './useRenderTimes';

function getRandomHEX() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function Header() {
  const [color, setColor] = React.useState("#111");
  const count = useRenderTimes();
  const changeColr = () => setColor(getRandomHEX());
  return (
    <header className="font" style={{ backgroundColor: color }}>
      <p>Header component has re-rendered {count} times</p>
      <button onClick={changeColr}>Click</button>
    </header>
  );
}

function Footer() {
  const count = useRenderTimes();
  return (
    <footer className="font">
      <p>Footer component has re-rendered {count} times</p>
    </footer>
  );
}

export default function Vdom() {
  const count = useRenderTimes();
  return (
    <>
      <Header />
      <main className="font main-container">
        <p>Hey, blha blha to see you again 👋🏼</p>
        <p>The App component has re-rendered {count} times</p>
      </main>
      <Footer />
    </>
  );
}
 
