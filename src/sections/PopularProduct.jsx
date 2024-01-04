import { products } from "../constants";
import PopularProductCard  from '../Components/PopularProductCard'

const PopularProduct = () => {
  return (
    <section id="product" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          {" "}
          QuantumFlex <span className="text-coral-red"> Elite</span> Running Shoes
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Step into the future of running with our QuantumFlex Elite Running
          Shoes. Engineered with cutting-edge technology and precision
          craftsmanship, these shoes are designed to elevate your running
          experience to new heights. Featuring a lightweight and breathable mesh
          upper, the QuantumFlex Elite provides superior ventilation and
          comfort, keeping your feet cool and dry during intense runs. 
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) =>(
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
