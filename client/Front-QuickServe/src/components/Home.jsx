import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";
import ShoppingCart from "./ShoppingCart";

const Home = () => {
  return (
    <main>
      <Navbar />
      {/* <div className="container m-8 grid">
        <Card />
      </div> */}
      <div className="container m-8 mt-16 grid">
        <div className="flex flex-row gap-8">
          <div className="flex md:basis-1/2 lg:basis-1/2">
            <Card />
          </div>
          <div className="md:basis-1/2 lg:basis-1/2">
            <div className="md:max-w-[400px] lg:max-w-[750px]">
              <div className="hidden md:flex">
                <ShoppingCart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
