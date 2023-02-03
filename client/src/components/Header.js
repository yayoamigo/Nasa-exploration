import React from "react";
import { Link } from "react-router-dom";
import Centered from "./Centered";

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    lineHeight: "80px",
  },
  logo: {
    display: "inherit",
    marginTop: "15px",
  },
  nav: {
    display: "inherit",
  },
  banner: {
    display: "inherit",
    fontWeight: "bold",
    marginLeft: "10px",
    marginRight: "15px",
    fontSize: 28,
  },
  clickable: {
    fontSize: 21,
    "& i": {
      marginRight: "0.75rem",
      fontSize: 24,
    },
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
  },
  button: {
    padding: [0, "0.75rem"],
  },
  "@media (max-width: 800px)": {
    logo: {
      display: "none",
    },
    img: {
      display: "none",
    },
    banner: {
      display: "none",
    },
    button: {
      padding: [0, 8],
    },
    clickable: {
      fontSize: 16,
    }
  },
};

const Header = (props) => {
  const { onNav } = props;
  return (
    <header style={{ background: "#363636", height: "80px" }}>
      <Centered style={styles.root}>
        <img src="/favicon.png" alt="" style={{
          margin: "15px 10px 15px 0",
          height: "50px",
          width: "auto",
        }} />
        <div style={styles.logo} />
        <div style={styles.banner}>
          NASA Mission Control
        </div>
        <nav style={styles.nav}>
          <div style={styles.clickable} onClick={onNav}>
            <div style={styles.button}>
              <Link style={styles.link} to="/launch">
                <i className="material-icons">check_circle_outline</i>Launch
              </Link>
            </div>
          </div>
          <div style={styles.clickable} onClick={onNav}>
            <div style={styles.button}>
              <Link style={styles.link} to="/upcoming">
              <i className="material-icons">update</i>Upcoming</Link>
            </div>
          </div>
          <div style={styles.clickable} onClick={onNav}>
            <div style={styles.button}>
              <Link style={styles.link} to="/history">
              <i className="material-icons">history</i>History</Link>
            </div>
          </div>
        </nav>
      </Centered>
    </header>
  );
};

export default Header;
