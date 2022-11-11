import React from 'react'
import styled from "styled-components";
// import ClosedCaptionOffIcon from '@mui/icons-material/ClosedCaptionOff';

const Details = () => {

    const Container = styled.div`
    flex:1;
    text-align:left;
    display:flex;
    // background-color:white;
    margin-top:60px;
    margin-bottom:50px;
    // border:1px solid black;
    `;
    const Left = styled.div`
    width:33.33%;
    flex:1;
    // display:flex;
    // flex-direction:column;
    // gap:20px;
    padding:20px;
    // border:1px solid blue;
//     margin:0px;
// padding:0px;
    `;

    const Center = styled.div`
    flex:1;
    // border:1px solid red;
    padding:20px;
    
    `;

    const Right = styled.div`
    flex:1;
    // border:1px solid green;
    padding:20px;
    
    `;

const Title = styled.h4`
font-weight:bold;
color:black;
font-size:22px;
// margin-bottom:20px;
margin-top:10px;

`;

const SmallBox = styled.div`
margin-top:15px;
display:flex;
flex-direction:column;
// border:1px solid black;
`;
const SubTitle = styled.p`
font-size:13.5px;
margin:0px;
padding:0px;
color:black;

`;
const Information = styled.p`
font-size:13.5px;
margin:0px;
padding:0px;
color:gray;
`;
const Mini = styled.div`
width:19px;
height:9px;
border:2px solid gray;
text-align:center;
font-size:10px;
align-items:center;
padding-bottom:3px;
border-radius:3px;
color:gray;
`;

return (
    <Container>
      <Left>
        <Title>Information</Title>
        <SmallBox>
            <SubTitle>Genre</SubTitle>
            <Information>Documentary</Information>
        </SmallBox>
        <SmallBox>
            <SubTitle>Released</SubTitle>
            <Information>2022</Information>
        </SmallBox>
        <SmallBox>
            <SubTitle>Run Time</SubTitle>
            <Information>1 hr 35 min</Information>
        </SmallBox>
        <SmallBox>
            <SubTitle>Rated</SubTitle>
            <Information>R for language</Information>
        </SmallBox>
        <SmallBox>
            <SubTitle>Region of Origin</SubTitle>
            <Information>United States</Information>
        </SmallBox>
      </Left>
      <Center>
        <Title>Languages</Title>
        <SmallBox>
            <SubTitle>Original Audio</SubTitle>
            <Information>English</Information>
        </SmallBox>
        <SmallBox>
            <SubTitle>Audio</SubTitle>
            <Information>English(AD,AAC,Dolby 5.1,Dolby Atmos)</Information>
        </SmallBox>
        <SmallBox>
            <SubTitle>Subtitles</SubTitle>
            <Information>English(CC,SDH),and 40 more...</Information>
        </SmallBox>
      </Center>
      <Right>
        <Title>Accessibility</Title>
        <SmallBox>
            <SubTitle><Mini>CC</Mini></SubTitle>
            <Information>Closed captions (CC) refer to subtitles in the available language with the addition of relevent non dialogue information</Information>
        </SmallBox>
        <SmallBox>
            <SubTitle><Mini>AD</Mini></SubTitle>
            <Information>Audio descriptions (AD) refer to a narration track describing what is happening on screen to provide context for those who are blind</Information>
        </SmallBox>
      </Right>
    </Container>
  )
}

export default Details