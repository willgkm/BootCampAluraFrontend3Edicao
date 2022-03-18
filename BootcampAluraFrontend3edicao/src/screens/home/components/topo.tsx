import * as React from 'react';
import styled from 'styled-components' 


const Container = styled.div`
  /* Interno */
/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;

position: static;
width: 1440px;
height: 115px;
left: 0px;
top: 0px;

/* Preto/branco */
background: #FFFFFF;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 0px 0px;
`

function Header() {
  return ( 
    <>
      <Container>
        <h1>
1 
        </h1>
        <h5>
          2
        </h5>
      </Container>
    </> 
  );
}

export default Header;