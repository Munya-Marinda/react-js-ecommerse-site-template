// REACT
import { useEffect, useState, Fragment } from "react";

// BREAKPOINT
import { useBreakPoint } from "../../hooks/useBreakPoint";

// DATA
import { business } from "../../data/business";

// REACT REDUX
import { addItem, removeItem } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

// STYLE
import styles from "./Opener.module.css";

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
const Opener = () => {
  // GET PRODUCT DATA
  const products = business.products;

  // BREAKPOINT
  const breakpoint = useBreakPoint;

  // REACT REDUX
  const dispatch = useDispatch();

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

  const ItemCount = (itemID) => {
    return 1;
  };

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

  const SmallCard = ({ productName, price, imageURL, itemID, tags }) => {
    return (
      <Fragment>
        <div className={styles.smallCard}>
          <img src={imageURL} alt={productName} />
          <div className={styles.smallCardRowOne}>
            <span className={styles.smallCardName}>{productName}</span>
            <span className={styles.smallCardPrice}>R{price}</span>
          </div>
          <div className={styles.smallCardRowTwo}>
            <button
              className={styles.smallCardBuyNow}
              onClick={() => {
                window.location.assign("store?productID=" + itemID);
              }}
            >
              BUY NOW
            </button>
            {/* ============== ADD TO CART MODAL ============== */}
            <ProductsSpecs itemID={itemID} />
          </div>
        </div>
      </Fragment>
    );
  };

  //
  //
  //

  const ProductsSpecs = ({ itemID }) => {
    return (
      <div className={styles.modalContentParent}>
        <span>QUANTITY: </span>
        <span
          // className={styles.smallCardAddToCart}
          onClick={() => {
            dispatch(removeItem(itemID));
          }}
        >
          {" (sub) "}
        </span>
        <span>{ItemCount(itemID)}</span>
        <span
          // className={styles.smallCardAddToCart}
          onClick={() => {
            dispatch(
              addItem({ itemID: itemID, quantity: ItemCount(itemID) + 1 })
            );
          }}
        >
          {" (add) "}
        </span>
      </div>
    );
  };

  //
  //
  //

  const Style_Pagination = {
    paginatorContainer: {
      color: "black",
      alignText: "left",
      display: "flex",
      flexDirection: "row",
      alignItem: "flex-end",
      justifyContent: "center",
      padding: "15px 0px 15px 0px",
      margin: "0px 0px 25px 0px",
      borderBottom: "1px solid black",
      borderTop: "1px solid black",
    },

    paginatorIcon: {
      width: "15px",
      margin: "0px 5px 0px 5px ",
      cursor: "pointer",
    },
    paginatorText: {
      color: "black",
      fontSize: "15x",
      padding: "0px 10px 2px 10px ",
      fontWeight: "bolder",
      transform: "translateY(1px)",
    },
  };

  const Pagination = () => {
    return (
      <div style={Style_Pagination.paginatorContainer}>
        <img
          style={Style_Pagination.paginatorIcon}
          src="/icons/pagination/first_arrow_drk.svg"
        />
        <img
          style={Style_Pagination.paginatorIcon}
          src="/icons/pagination/prev_arrow_drk.svg"
        />
        <div style={Style_Pagination.paginatorText}>
          {"Page " + 1 + " of " + 1}
        </div>
        <img
          style={Style_Pagination.paginatorIcon}
          src="/icons/pagination/next_arrow_drk.svg"
        />
        <img
          style={Style_Pagination.paginatorIcon}
          src="/icons/pagination/last_arrow_drk.svg"
        />
      </div>
    );
  };

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
      <div className={"container"}>
        <div className={styles.pageParentContainer}>
          <div className={styles.sideBarContainer}>
            {/* ============== SEARCH ============== */}
            <i className="fas fa-search" style={{ position: "relative" }} />
            <input
              className={styles.shopSearchInput}
              placeholder={"SEARCH PRODUCTS"}
            />
            {/* ============== FILTER BY ALL ============== */}
            <div className={styles.filterContainer}>
              <h4>Filter</h4>
              <br />

              {/* ============== FILTER BY PRICE ============== */}
              <div className={styles.allFiltersContainer}>
                <div className={styles.allFiltersSubContainer}>
                  <div className={styles.allFiltersSubContainerTitle}>
                    <span>
                      <b>Price:</b>
                    </span>
                    <span>R100 - R200</span>
                  </div>
                  <ul className={styles.priceRangesToFilterBy}>
                    <li>R100 - R200</li>
                    <li>R200 - R600</li>
                    <li>R600 - R1000</li>
                    <li>R1000 - R2000</li>
                    <li>R2000 - R5000</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* ============== FILTER BY TAGS ============== */}
            <div className={styles.filterContainer}>
              <h4>Tags</h4>
              <br />
              <div className={styles.tagsContainer}>
                <div className={styles.tag}>caps</div>
                <div className={styles.tag}>hats</div>
                <div className={styles.tag}>shoes</div>
                <div className={styles.tag}>pants</div>
                <div className={styles.tag}>jeans</div>
                <div className={styles.tag}>t-shirts</div>
                <div className={styles.tag}>dress</div>
                <div className={styles.tag}>high-heels</div>
              </div>
            </div>
          </div>
          <div className={styles.cardContainerParent}>
            <div className={styles.cardContainerTopFilter}>
              <span>{products.length + " results"}</span>
              <select className={styles.cardContainerViewOptions}>
                <option value={"grid"}>{"GRID"}</option>
                <option value={"list"}>{"LIST"}</option>
              </select>
            </div>
            <Pagination />
            <div className={styles.cardContainer}>
              {products.map((product, index) => (
                <div key={index} style={{ width: "fit-content" }}>
                  <SmallCard
                    productName={product.productName}
                    price={product.price}
                    imageURL={product.imageURL}
                    itemID={product.itemID}
                    tags={products.tags}
                  />
                </div>
              ))}
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Opener;
