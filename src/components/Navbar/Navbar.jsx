//  REACT.JS
import { useEffect, useState, Fragment } from "react";

// STYLES
import styles from "./Navbar.module.css";

// REACT REDUX
import { cartSlice } from "../../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";

// IMPORT DATA
import { business } from "../../data/business.js";

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const Navbar = () => {
  // GET DATA FOR THIS PAGE
  const logoFullURL = business.logoFullURL;

  // CART
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    //
  }, []);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  return (
    <Fragment>
      <nav className={styles.nav_main}>
        <ul className={styles.nav_ul}>
          <li>
            <a href={"/"}>
              <img
                height={"40px"}
                width={"200px"}
                src={logoFullURL}
                className={styles.nav_logo}
              />
            </a>
          </li>
          <li>
            <ul className={styles.nav_ul_inner}>
              <li>
                <a href={"/store"}>store</a>
              </li>
              <li>
                <a href={"/special-offers"}>special offers</a>
              </li>
              <li>
                <a href={"/new-arrivals"}>new arrivals</a>
              </li>
              <li>
                <a href={"/contact-us"}>contact us</a>
              </li>
              <li>
                <a href={"/cart"}>cart ({cart.cnt})</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};
export default Navbar;
