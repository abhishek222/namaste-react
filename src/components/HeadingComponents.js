// const Title = () => <h1>Namaste React 🚀</h1>;
import { useSelector } from "react-redux";
export const HeadingComponent = () => {

  // Subscribings tothe store using a selector
  const cartItem = useSelector((store) => store.cart.items);

  return (
    <div id="container" className="flex bg-pink-300 shadow-sm">
      {/* <Title /> */}
      <div className="logo-container">
        <img className="w-56" src="https://logowik.com/content/uploads/images/414_restaurant.jpg"></img>
      </div>
      <div className="items-center">
        <h1 id="heading" className="head">
          Namaste React using React Functional Components 🚀
        </h1>
      </div>
    </div>
  );
};

export default HeadingComponent;
