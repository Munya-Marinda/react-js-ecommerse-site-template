//  REACT.JS
import { useEffect, useState, Fragment } from "react";

// REACT REDUX
import { Provider } from "react-redux";
import store from "./app/store";

// COMPONENTS
import Opener from "./components/Opener/Opener.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

// STYLES
import styles from "./Home.module.css";

// IMPORT DATA
import { business } from "./data/business.js";

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

export default function App() {
  // STATES

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

  // GET DATA FOR THIS PAGE
  const title = business.title;
  const content = business.content;
  const logoSqrURL = business.logoSqrURL;
  const logoFullURL = business.logoFullURL;

  // RUN AN ANIMATION ONLOAD
  useEffect(() => {
    console.log("WE HAVE LOADED!!!");
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

  return (
    <Provider store={store}>
      <header className={styles.container}> 
        <meta name={title} content={content} />
        <link rel="icon" href={logoSqrURL} />
      </header>

      <Navbar />

      <main className={styles.main}>
        <Opener />
      </main>

      <footer className={styles.footer}></footer>
    </Provider>
  );
}
;

// <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
