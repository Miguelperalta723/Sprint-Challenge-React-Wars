import React from 'react';

import styled from 'styled-components';

const Card = styled.div`
border: 1px solid gold;
background-color: black;
opacity: .7;
color: white;
width: 300px;
margin: 20px;
`;

export default function CharCard(props){

    return(
        <Card>
            <h3>{props.nameProp}</h3>
            <p>eye color: {props.eyeProp}</p>
            <p>skin color: {props.skinProp}</p>
        </Card>
    )
}