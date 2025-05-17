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

  const deleteHandler = (prevCart, id) => {
    const updatedCart = prevCart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    return updatedCart;
  };

 const actionHandler = (e, id) => {
  const action = e.currentTarget.dataset.action;

  setCart((prevCart) => {
    let updatedCart = [];

    if (action === "delete") {
      updatedCart = prevCart.filter((item) => item.id !== id);
    } else {
      updatedCart = prevCart
        .map((item) => {
          if (item.id === id) {
            if (action === "plus") return { ...item, count: item.count + 1 };
            if (action === "minus") {
              if (item.count > 1) return { ...item, count: item.count - 1 };
              return null;
            }
          }
          return item;
        })
        .filter(Boolean);
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    return updatedCart;
  });
};

  const totalPriceHandler = () => {
    return cart.reduce((acc, item) => acc + item.price * (item.count || 0), 0);
  };

  return (
    <div className="w-full px-2 sm:px-6 min-h-screen flex justify-center items-start pt-10">
      <div className="overflow-x-auto w-full max-w-7xl">
        <table className="min-w-[700px] w-full border">
          <thead>
            <tr className="bg-neutral-900 text-white">
              <th className="p-2 text-left">Product Name</th>
              <th className="p-2 text-center">Unit Price</th>
              <th className="p-2 text-center">Total Price</th>
              <th className="p-2 text-center">Quantity</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart && cart.length > 0 ? (
              cart.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-2">{item.title}</td>
                  <td className="text-center">{item.price}</td>
                  <td className="text-center">
                    {itemPriceHandler(item.price, item.count || 0).toFixed(2)}
                  </td>
                  <td className="text-center">{item.count || 0}</td>
                  <td className="flex justify-center gap-2 py-2">
                    <button
                      onClick={(e) => actionHandler(e, item.id)}
                      data-action="plus"
                      className="w-6 h-6"
                    >
                      <img src={plus} alt="plus" />
                    </button>
                    <button
                      onClick={(e) => actionHandler(e, item.id)}
                      data-action="minus"
                      className="w-6 h-6"
                    >
                      <img src={minus} alt="minus" />
                    </button>
                    <button
                      onClick={(e) => actionHandler(e, item.id)}
                      data-action="delete"
                      className="w-6 h-6"
                    >
                      <img src={trash} alt="trash" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-600">
                  Cart is empty
                </td>
              </tr>
            )}
          </tbody>
          {cart.length > 0 && (
            <tfoot>
              <tr className="bg-neutral-900 text-white font-bold">
                <td className="p-2 text-center" colSpan="2">
                  Total Price
                </td>
                <td className="text-center">
                  {totalPriceHandler().toFixed(2)} $
                </td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </div>
  );
};

export default Cart;
