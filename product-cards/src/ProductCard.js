import React from "react";

const ProductCard = (props) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{props.name}</h2>
      <p style={styles.detail}>Price: {props.price}</p>
      <p style={styles.detail}>Status: {props.status}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    width: "200px",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  name: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  detail: {
    fontSize: "16px",
    margin: "5px 0",
  },
};

export default ProductCard;
