import React from "react";
import ProductList from "./ProductList";
import ImageCarousel from "./ImageCarousel";

const images = [
  "https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-118763.jpg",
  "https://img.freepik.com/free-photo/shopping-fashion-concept-beautiful-asian-senior-woman-looking-dreamy-upper-left-corner-im_1258-147288.jpg",
  "https://img.freepik.com/free-photo/portrait-brunette-girl-showing-her-credit-card-smiling-wearing-summer-clothes-concept-bank-money-shopping-standing-yellow-background_1258-301185.jpg",
  "https://img.freepik.com/premium-photo/surprised-woman-woman-holding-shopping-bags-with-copy-space_23-2148673188.jpg?w=360",
  "https://www.shutterstock.com/image-photo/cheerful-happy-woman-enjoying-shopping-260nw-1417347668.jpg",
  "https://thumbs.dreamstime.com/b/portrait-excited-indian-family-holding-shopping-bags-credit-card-over-yellow-studio-background-portrait-excited-indian-349568018.jpg",
  "https://img.freepik.com/free-photo/excited-girl-open-up-shopping-bags-gasping-amazed-checking-out-gifts-her-with-happy-face-standing-against-pink-background_1258-301182.jpg",
]

const Home = ({ onProductClick }) => {
  return (
    <div>
      <ImageCarousel images={images}/>
      <ProductList onProductClick={onProductClick} />
    </div>
  );
};

export default Home;