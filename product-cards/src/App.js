import React from "react";
import ProductCard from "./ProductCard";

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Products List</h1>
      <div style={styles.cardContainer}>
        <ProductCard name="Wireless Mouse" price="$25.99" status="In Stock" />
        <ProductCard name="Keyboard" price="$45.5" status="Out of Stock" />
        <ProductCard name="Monitor" price="$199.99" status="In Stock" />
      </div>
    </div>
  );
};

const styles = {
  container: {
    border: "2px solid black",
    padding: "20px",
    textAlign: "center",
    margin: "20px",
  },
  title: {
    fontFamily: "Georgia, serif",
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
  },
};

export default App;
