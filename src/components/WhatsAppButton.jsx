import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const styles = {
    button: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      width: "60px",
      height: "60px",
      backgroundColor: "#25D366",
      color: "#fff",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      zIndex: 9999,
      cursor: "pointer",
    },
  };

  return (
    <a
      href="https://wa.me/9779863443359"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.button}
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;