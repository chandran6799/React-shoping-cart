import { useState } from "react";
import "./App.css";
import NavBar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Proudcts";
import Footer from "./Components/Footer/Footer";

function App() {
  const products = [
    {
      name: "Tomato (Nattu Thakkali) 1 kg",
      image:
        "https://t3.ftcdn.net/jpg/01/77/78/46/360_F_177784681_V5aIQ1TVxHLl9qszqHfy80fk7k2R8WFU.jpg",

      price: "$32.00",
      rating: true,
      sale: true,
      original: true,
      originalPrice: "$40.00",
    },
    {
      name: "Mushroom Button (Kalaan) 250g",

      image:
        "https://5.imimg.com/data5/FD/WG/ID/SELLER-69103088/button-mushroom.png",
      price: "$64.00",
      rating: true,
      sale: true,
      original: true,
      originalPrice: "$80.00",
    },
    {
      name: "Broccoli 2pcs (500g-700g)",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQAoZzXgZLPaklErfEoOMkxC6HxVWJcv9bVVvqMQTTA&s",
      price: "$120.00",
      rating: true,
      sale: true,
      original: true,
      originalPrice: "$150.00",
    },
    {
      name: "Banana Flower (Vazhai Poo) 1pc 350g-500g",
      image:
        "https://enine.lk/wp-content/uploads/2015/03/Banana-flower_759.jpg",
      price: "$40.00",
      rating: true,
      sale: false,
      original: false,
      originalPrice: "",
    },
    {
      name: "Mango Banganapalli 2pcs (600g-700g)",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJbl4E3xh4z3nq4Dvp_s7-cQmM4srHkmAF1A&s",
      price: "$160.00",
      rating: true,
      sale: true,
      original: true,
      originalPrice: "$200.00",
    },
    {
      name: "Watermelon Kiran (Dharboosani) 1pc 3kg",
      image:
        "https://www.resetagri.in/cdn/shop/products/41vQ8Z8C-ZL_c36f1a02-14c7-476f-aa8b-5118a9d1f28b.jpg?v=1700181461",
      price: "$120.00",
      rating: true,
      sale: false,
      original: false,
    },
    {
      name: "Apple Red Delicious (4pcs)",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Qbaf8fLd0hdRA2cwJXIQf2MbbaZTVeSORg&s",
      price: "$200.00",
      rating: true,
      sale: true,
      original: true,
      originalPrice: "$250.00",
    },
    {
      name: "Dragon Fruit 1pc(300g-400g)",
      image:
        "https://i.pinimg.com/736x/cd/9f/67/cd9f6700ab4f479258e02767741ad7e1.jpg",
      price: "$80.00",
      rating: true,
      sale: false,
      original: false,
      originalPrice: "",
    },
  ];

  // state for cart
  const [cartNo, setCartNo] = useState(0);

  return (
    <>
      <NavBar cartNo={cartNo} />
      <Header />
      <Products products={products} setCartNo={setCartNo} />
      <Footer />
    </>
  );
}

export default App;
