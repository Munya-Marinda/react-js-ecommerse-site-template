//  REACT.JS
import { useEffect, useState, Fragment } from "react";

// STYLES
import styles from "./Navbar.module.css";

// REACT REDUX
import { cartSlice } from "../../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";

// IMPORT DATA
import { business } from "../../data/business.js";

// BREAKPOINT
import { useBreakPoint } from "../../hooks/useBreakPoint";

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
  // BREAKPOINT
  const breakpoint = useBreakPoint();

  // GET DATA FOR THIS PAGE
  const logoFullURL = business.logoFullURL;
  const logoSqrURL = business.logoSqrURL;

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

  return (
    <Fragment>
      <nav className={styles.nav_main}>
        <ul className={styles.nav_ul}>
          <li>
            {breakpoint !== "sm" ? (
              <a href={"/"}>
                <img
                  height={"40px"}
                  width={"200px"}
                  src={logoFullURL}
                  className={styles.nav_logo}
                />
              </a>
            ) : (
              <img
                height={"40px"}
                width={"40px"}
                src={"icons/navbar/drawer_btn.svg"}
                // className={styles.nav_logo}
              />
            )}
          </li>
          {breakpoint !== "sm" ? (
            <li className={styles.nav_links}>
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
          ) : (
            <img
              height={"30px"}
              width={"30px"}
              src={"icons/navbar/search.svg"}
              className={styles.nav_logo}
            />
          )}
        </ul>
      </nav>
    </Fragment>
  );
};
export default Navbar;
