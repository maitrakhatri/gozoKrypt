import {
  Navbar,
  Welcome,
  Transactions,
  Services,
  Loader,
  Footer,
} from "./components";

function App() {
  return (
    <div className="min-h-screen">
      <div className="">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
