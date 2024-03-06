import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
  return (
    <main>
      <Navbar />
      {/* <div className="container mx-auto my-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card />
        </div>
      </div> */}
      <div className="container my-8 grid">
        <Card />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
