import React from 'react';
import Centered from './Centered';

const Footer = () => {
  return (
    <footer style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100px',
      backgroundColor: '#000'
    }}>
      <Centered>
        <p style={{
          fontSize: 14,
          margin: '10px 0',
          color: '#fff'
        }}>
          This is not an official site and is not affiliated with NASA or SpaceX in any way. For educational purposes only.
        </p>
      </Centered>
    </footer>
  );
};

export default Footer;