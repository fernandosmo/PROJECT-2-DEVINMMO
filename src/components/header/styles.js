import styled from 'styled-components'
require('typeface-montserrat')

export const Container = styled.div`
width: 100%;
position: relative;
display: flex;

.header{
  display: flex;
  background: #A30000;
  width: 100%;
  height: 5vh;
  color: #fff;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  font-family: 'Montserrat', sans-serif;
  position: sticky;
}

.button {
  font-family: 'Montserrat', sans-serif;
  background: #F4F4F6;
  color: #110B11;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 5px 5px 5px #ccc;
  text-shadow:none;
  margin: 5px;
  }
  
.button:hover {
  background: gray;
  color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 5px 5px 5px #ccc;
  text-shadow:none;
  }
`