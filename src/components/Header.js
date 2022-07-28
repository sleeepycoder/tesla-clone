import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// import { useSelector } from 'react-redux';
// import { selectCars } from '../features/car/carSlice';


function Header() {
const [burgerStatus ,setBurgerStatus] =useState(false);
// const cars =useSelector(selectCars)
// console.log(cars);

  return (
    <Container>
      <a href="/">
        <img src="images/logo.svg" alt="notfound"/>
      </a>
      <Menu>
      {/* {cars && cars.map((car,index)=>(
        <a href="/">{cars}</a>
      ))} */}
      <a href="/">Model S</a>

<a href="/">Model 3</a>
<a href="/">Model X</a>
<a href="/">Model Y</a>
      </Menu>

    <RightMenu>
<a href="/">SHOP</a>
<a href="/">TESLS ACCOUNT</a>

<CustomMenu  onClick={()=>setBurgerStatus(true)}>

</CustomMenu>
    </RightMenu> 

    <BurgerNav show={burgerStatus}>

    <CLoseWrapper>
    <CustomClose onClick={()=>setBurgerStatus(false)}/>
    </CLoseWrapper>
    
    <li><a href="/">Existing Inventory</a></li>
    <li><a href="/">Used Inventory</a></li>
    <li><a href="/">Trade-In</a></li>
    <li><a href="/">Roadster</a></li>
    <li><a href="/">Existing</a></li>
    <li><a href="/">Existing</a></li>
    <li><a href="/">Existing</a></li>


    </BurgerNav>

    </Container>
  )
}

export default Header;


const Container =styled.div`
min-height:60px;
position:fixed;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 20px;
top:0;
left:0;
right:0;
z-index:1;
`

const Menu =styled.div`
display:flex;
align-item:center;
flex:1;
justify-content:center;
a{
  font-weight:600;
  text-transform:uppercase;
  padding:0 10px;
  flex-weap:nowrap;
}
@media(max-width:768px){
    display:none;
}
`

const RightMenu=styled.div`
display:flex;
align-items:center;

a{
  font-weight:600;
  text-transform:uppercase;
  margin-right:10px;
}
`

const CustomMenu =styled(MenuIcon)`
cursor:pointer;
`

const BurgerNav =styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16px;
list-style:none;
padding:20px;
padding:flex;
display:column;
text-align:start;
transition:transform 0.2s ;
transform:${props =>props.show ? 'translateX(0)'  : 'translateX(100%)'};
li{
padding:15px 0;
border-bottom:1px solid rgba(0,0,0,.2);
}
a{
  font-width:600px;
}
`

const CustomClose =styled(CloseIcon)`
cursor:pointer;
`
const CLoseWrapper =styled.div`
display:flex;
justify-content:flex-end;
`