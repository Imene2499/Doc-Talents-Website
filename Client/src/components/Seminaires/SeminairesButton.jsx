import React from "react";

const SeminairesButton = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to left, #19202E, #35468E)",
        width: "350px",
        height: "55px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "flex-start", // align text to the center left
        alignItems: "center",
        color: "#ffffff",
        fontSize: "20px",
        marginTop: '80px', 
        marginLeft: "60px",
        fontWeight: "bold",
        fontFamily: "sans-serif",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // Add box shadow CSS property
        paddingLeft: "30px", // Add left padding to align text with left edge of button
      }}
    >
      Séminaires
    </div>
  );
};

export default SeminairesButton;
