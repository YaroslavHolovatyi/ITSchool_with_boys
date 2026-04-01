function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Сontact() {
  // не застосов
  return <h1>contact</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function products() {
  return <h1>Products</h1>;
}

function phone() {
  return <h1>Phone</h1>;
}

function laptop() {
  return <h1>Laptop</h1>;
}
