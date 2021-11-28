import React from 'react'
import { Container } from './styles';
import { useNavigate } from 'react-router-dom'


const Header = () => {
const navigate = useNavigate();
  return (
    
    <Container>
      <div className="header">
        <div className="logo">
         <h2 onClick={() => navigate(`/`)}>DEVinMMO</h2>
        </div>
        <div className="homeBtn">
          <button className="button" onClick={() => navigate("/")}>Home</button>
          <button className="button" onClick={() => navigate("/news")}>News</button>
          </div>
        </div>        
    </Container>
  );
}

export default Header;