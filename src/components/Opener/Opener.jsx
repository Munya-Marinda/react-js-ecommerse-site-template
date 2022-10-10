// REACT
import { useEffect, useState, Fragment } from "react";

// BREAKPOINT
import { useBreakPoint } from "../../hooks/useBreakPoint";

// DATA
import { business } from "../../data/business";

// REACT REDUX
import { addItem, removeItem } from "../../features/cart/cartSlice";
import { modify, clear } from "../../features/query/querySlice";
import { useDispatch, useSelector } from "react-redux";

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
  // STATES
  const [results, setResults] = useState([]);

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

  // GET PRODUCT DATA
  const products = business.products;

  // BREAKPOINT
  const breakpoint = useBreakPoint();

  // REACT REDUX
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query);

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

  useEffect(() => {
    if (query.response.length === 0) {
      setResults(products);
    }
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

  const ItemCount = (id) => {
    return 0;
  };

  const QuerySearch = (e) => {
    dispatch(modify(["search", e.target.value]));
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
  const Filter = () => {
    return (
      <Fragment>
        <div className={styles.sideBarContainer}>
          {/* ============== SEARCH ============== */}
          <i className="fas fa-search" />
          <i className="fa fa-camera-retro fa-lg"></i>
          <input
            className={styles.shopSearchInput}
            placeholder={"SEARCH PRODUCTS"}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                QuerySearch(e);
              }
            }}
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
                <input type={"range"} id={"priceRange"} />
                <table className={styles.priceRangesToFilterBy}>
                  <tbody>
                    <tr>
                      <td>R100 - R200</td>
                      <td>R200 - R600</td>
                    </tr>
                    <tr>
                      <td>R600 - R1000</td>
                      <td>R1000 - R2000</td>
                    </tr>
                    <tr>
                      <td>R2000 - R5000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* ============== FILTER BY TAGS ============== */}
          <div className={styles.filterContainer}>
            <h4>Tags</h4>
            <br />
            {/* ------ POPULATED OPTIONS ------ */}
            <div className={styles.tagsPopulated}>
              <div className={styles.tagPopulated}>
                caps
                <div className={styles.crossIcon}>
                  <div className={styles.crossIconLeft} />
                  <div className={styles.crossIconRight} />
                </div>
              </div>
              <div className={styles.tagPopulated}>
                hats
                <div className={styles.crossIcon}>
                  <div className={styles.crossIconLeft} />
                  <div className={styles.crossIconRight} />
                </div>
              </div>
              <div className={styles.tagPopulated}>
                shoes
                <div className={styles.crossIcon}>
                  <div className={styles.crossIconLeft} />
                  <div className={styles.crossIconRight} />
                </div>
              </div>
              <div className={styles.tagPopulated}>
                pants
                <div className={styles.crossIcon}>
                  <div className={styles.crossIconLeft} />
                  <div className={styles.crossIconRight} />
                </div>
              </div>
              <div className={styles.tagPopulated}>
                jeans
                <div className={styles.crossIcon}>
                  <div className={styles.crossIconLeft} />
                  <div className={styles.crossIconRight} />
                </div>
              </div>
              <div className={styles.tagPopulated}>
                tshirts
                <div className={styles.crossIcon}>
                  <div className={styles.crossIconLeft} />
                  <div className={styles.crossIconRight} />
                </div>
              </div>
              <div className={styles.tagPopulated}>
                dress
                <div className={styles.crossIcon}>
                  <div className={styles.crossIconLeft} />
                  <div className={styles.crossIconRight} />
                </div>
              </div>
              <div className={styles.tagPopulated}>
                highheels
                <div className={styles.crossIcon}>
                  <div className={styles.crossIconLeft} />
                  <div className={styles.crossIconRight} />
                </div>
              </div>
            </div>

            {/* ------ OPTIONS TO SELECT ------ */}
            <div className={styles.tagsOptions}>
              <div className={styles.tagOption}>caps</div>
              <div className={styles.tagOption}>hats</div>
              <div className={styles.tagOption}>shoes</div>
              <div className={styles.tagOption}>pants</div>
              <div className={styles.tagOption}>jeans</div>
              <div className={styles.tagOption}>tshirts</div>
              <div className={styles.tagOption}>dress</div>
              <div className={styles.tagOption}>highheels</div>
            </div>
          </div>
        </div>
      </Fragment>
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

  const SmallCard = ({ productName, price, imageURL, id: id, tags }) => {
    return (
      <Fragment>
        <div className={styles.smallCard}>
          <img src={imageURL} alt={productName} />
          <div className={styles.smallCardRowOne}>
            <span className={styles.smallCardName}>{productName}</span>
            <span className={styles.smallCardPrice}>R{price}</span>
          </div>
          {/* ============== ADD TO CART MODAL ============== */}
          {/* <ProductsSpecs id={id} /> */}
        </div>
      </Fragment>
    );
  };

  //
  //
  //

  const ProductsSpecs = ({ id }) => {
    return (
      <div className={styles.modalContentParent}>
        <div className={styles.cartCountContainer}>
          <span className={styles.cartCountText}>{ItemCount(id)}</span>
          {/* <img src={"/icons/pagination/cart/cart_black.svg"} style= {{ width: "22px", height: "22px" , opacity: 1}} /> */}
        </div>
        <div className={styles.cartButtonContainer}>
          <span
            className={styles.smallCardRemoveFromCart}
            onClick={() => {
              dispatch(removeItem(id));
            }}
          >
            {"-"}
          </span>
          <span
            style={{ margin: "0px 0px 0px 5px" }}
            className={styles.smallCardAddToCart}
            onClick={() => {
              dispatch(addItem({ id: id, quantity: ItemCount(id) + 1 }));
            }}
          >
            {"+"}
          </span>
        </div>
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
          {breakpoint === "sm" && (
            <div className={styles.moblieFilterContainer}>
              {/* ========== PRODUCT FILTERING MOBILE ========== */}
              <Filter />
              <div className={styles.moblieFilterSubmitContainer}>
                <button className={styles.moblieFilterResetBtn}>RESET</button>
                <button className={styles.moblieFilterSubmitBtn}>APPLY</button>
              </div>
            </div>
          )}
          {/* ========== PRODUCT FILTERING DESKTOP ========== */}
          {breakpoint !== "sm" && <Filter />}
          {/* ========== PRODUCT VIEW ========== */}
          <div className={styles.cardContainerParent}>
            <div className={styles.cardContainerTopFilter}>
              <span>{results.length + " results"}</span>
              <select className={styles.cardContainerViewOptions}>
                <option value={"grid"}>{"GRID VIEW"}</option>
                <option value={"list"}>{"LIST VIEW"}</option>
              </select>
            </div>
            <Pagination />
            <div className={styles.cardContainer}>
              {results.map((product, index) => (
                <Fragment key={index}>
                  <SmallCard
                    productName={product.productName}
                    price={product.price}
                    imageURL={product.imageURL}
                    id={product.id}
                    tags={products.tags}
                  />
                </Fragment>
              ))}
            </div>
            <Pagination />
          </div>
        </div>
        {/* ========== FILTER BUTTON ========== */}
        {breakpoint === "sm" && (
          <button className={styles.filterBtn}>
            <img src="/icons/filter/filter_white.svg" />
          </button>
        )}
      </div>
    </Fragment>
  );
};
export default Opener;
