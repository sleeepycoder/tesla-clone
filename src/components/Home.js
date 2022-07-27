import React from 'react'
import styled from "styled-components"
import Section from './Section';


function Home() {
  return (
<Container>
<Section
   title="Model-S"
    description="Order Online for Touchless Delivery"
    backgroundImg="model-s.jpg"
    leftBtnText="Custom order"
    rightBtnText="Existing Inventry"
/>

<Section
   title="Model-3"
    description="Order Online for Touchless Delivery"
    backgroundImg="model-3.jpg"
    leftBtnText="Custom order"
    rightBtnText="Existing Inventry"
/>
<Section
   title="Model-x"
    description="Order Online for Touchless Delivery"
    backgroundImg="model-x.jpg"
    leftBtnText="Custom order"
    rightBtnText="Existing Inventry"
/>

<Section
   title="Model-y"
    description="Order Online for Touchless Delivery"
    backgroundImg="model-y.jpg"
    leftBtnText="Custom order"
    rightBtnText="Existing Inventry"
/>
<Section
   title="Lowest Cost Solar Panel In India"
    description="Money-back Guarante"
    backgroundImg="solar-panel.jpg"
    leftBtnText="order Now"
    rightBtnText="Learn More"
/>
<Section
   title="Solar for Roof"
    description="Money back Guarante"
    backgroundImg="solar-roof.jpg"
    leftBtnText="Custom order"
    rightBtnText="Existing Inventry"
/>
<Section
   title="Accessoried"
    description=""
    backgroundImg="accessories.jpg"
    leftBtnText="Shop now"
   
/>
</Container>

  )
}

export default Home;
const Container =styled.div`
height:100vh;
`