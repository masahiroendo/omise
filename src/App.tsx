import { darkModeBgAndText } from "./tailwindClasses";
import Header from "./Header";
import { Hero } from "./sections/Hero";

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-6xl">
        <Hero />
      </main>
    </>
  );
}

export default App;
