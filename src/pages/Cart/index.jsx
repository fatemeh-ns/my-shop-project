import trash from "../../assets/icons/trash.png";
import plus from "../../assets/icons/plus.png";
import minus from "../../assets/icons/minus.png";
import { useState } from "react";
const Cart = () => {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const itemPriceHandler = (price, count) => {
    return price * count;
  };

  const actionHandler = (e, id) => {
    const action = e.currentTarget.dataset.action;
    setCart((prevCart) => {
      if (action === "delete") {
        const updatedCart = prevCart.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }
      const updatedCart = prevCart.map((item) => {
        if (item.id === id) {
          if (action === "plus") {
            return { ...item, count: item.count + 1 };
          }
          if (action === "minus" && item.count > 1) {
            return { ...item, count: item.count - 1 };
          }
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const totalPriceHandler = () => {
    return cart.reduce((acc, item) => acc + item.price * (item.count || 0), 0);
  };

  return (
    <>
      <table className="flex justify-center items-center flex-col min-h-screen">
        <thead>
          <tr className="bg-neutral-900 text-[#fff]">
            <th className="w-[40rem] p-2">Product Name</th>
            <th className="w-[8rem] p-2">Unit Price</th>
            <th className="w-[8rem] p-2">Total Price</th>
            <th className="w-[8rem] p-2">Quantity</th>
            <th className="w-[9rem] p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart ? (
            cart.map((item) => (
              <tr key={item.id}>
                <td className="w-[40rem] text-center">{item.title}</td>
                <td className="w-[8rem] text-center">{item.price}</td>
                <td className="w-[8rem] text-center">
                  {itemPriceHandler(item.price, item.count || 0).toFixed(2)}
                </td>
                <td className="w-[8rem] text-center">
                  <p>{item.count ? item.count : 0}</p>
                </td>
                <td>
                  <div className="w-[9rem] flex justify-around items-center">
                    <button
                      onClick={(e) => actionHandler(e, item.id)}
                      data-action="plus"
                      className="text-center w-[1.2rem] h-[1.5rem] my-1 rounded-md"
                    >
                      <img src={plus} alt="plus" />
                    </button>
                    <button
                      onClick={(e) => actionHandler(e, item.id)}
                      data-action="minus"
                      className="text-center w-[1.2rem] h-[1.5rem] my-1 rounded-md"
                    >
                      <img src={minus} alt="minus" />
                    </button>
                    <button
                      onClick={(e) => actionHandler(e, item.id)}
                      data-action="delete"
                      className="text-center w-[1.2rem] h-[1.2rem] my-1 rounded-md"
                    >
                      <img src={trash} alt="trash" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <p>Cart is Empty</p>
          )}
        </tbody>
        {cart.length > 0 && (
          <tfoot>
            <tr className="text-[#fff] bg-neutral-900 font-bold">
              <td className="p-2 text-center" colSpan="2">
                Total Price
              </td>
              <td className="text-center">
                {totalPriceHandler().toFixed(2)}
              </td>
              <td className="pr-2" colSpan="2">$</td>
            </tr>
          </tfoot>
        )}
      </table>
    </>
  );
};

export default Cart;
