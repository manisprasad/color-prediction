import React from "react";
import "../../index.css";
import "./product.css"

const Product = ({  productName, productPrice, productImage, discountPrice }) => {
  return (
    <>
     
      <main className="main bd-grid">
        <article className="card ">
          <div className="card__img ">
            <img className="absolute top-0 scale-75 left-0" src="https://i.postimg.cc/8PkwdTYd/image.png" alt="" />
          </div>
          <div className="card__name text-center">
            <p className="">{"Buy"}</p>
          </div>
          <div className="card__precis ">
            <a href="" className="card__icon">
              <ion-icon name="heart-outline"></ion-icon>
            </a>

            <div>
              <span className="card__preci card__preci--before">{productPrice}</span>
              <span className="card__preci card__preci--now">{discountPrice}</span>
            </div>
            <a href="" className="card__icon">
              <ion-icon name="cart-outline"></ion-icon>
            </a>
          </div>
        </article>
      </main>
    </>
  );
};

export default Product;
