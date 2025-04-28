import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function StickyHeader() {
  return (
    <motion.div
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        className="shadow-sm"
        style={{
          backgroundColor: "#212121", // Dark background color
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Added shadow for better visual impact
        }}
      >
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className="fw-bold text-light"
            style={{
              fontSize: "1.8rem",
              textShadow: "1px 1px 5px rgba(0,0,0,0.4)", // Added text shadow for a glowing effect
            }}
          >
            FEEDBACK FORM 📝
          </Navbar.Brand>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default StickyHeader;
