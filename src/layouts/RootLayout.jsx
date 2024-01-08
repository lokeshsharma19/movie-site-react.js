import React from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";
import styles from "./RootLayout.module.css";
import LoadingSpinner from "../assets/LoadingSpinner.svg";

function RootLayout() {
  const navigation = useNavigation();
  return (
    <nav className={` container ${styles.nav}`}>
      <Link to="/">
        <h1>Movie Search</h1>
      </Link>
      {navigation.state === "loading" ? (
        <img src={LoadingSpinner} alt="Loading" className="loadingSpinner" />
      ) : (
        <Outlet />
      )}
    </nav>
  );
}

export default RootLayout;
