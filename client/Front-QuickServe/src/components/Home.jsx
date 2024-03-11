import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";
import ShoppingCart from "./ShoppingCart";

const Home = () => {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center md:justify-start">
            <Card />
          </div>
          <div className="hidden md:block">
            <div className="max-w-xs md:max-w-md lg:max-w-lg mx-auto">
              <ShoppingCart />
            </div>
          </div>
        </div>
      </div>
      {/* Mostrar el carrito en dispositivos móviles */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50">
        <div className="bg-white rounded-lg shadow-md p-4 mx-auto max-w-xs">
          <ShoppingCart />
        </div>
      </div>
      <Footer />
    </main>
  );
};


export default Home;
