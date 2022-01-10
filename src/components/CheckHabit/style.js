import styled from "styled-components";
const Container = styled.div`
width: 100%;
height: 94px;

padding: 13px 15px 13px 15px;

background-color: #FFFFFF;

border-radius: 5px;

font-size: 20px;
color: #666666;

line-height: 25px;

position:relative;
`;

const Info = styled.div`
margin-top: 7px;

font-size: 13px;

line-height: 16px;

p:nth-child(1){
  span{
    color:${props => (props.done) ? "#8FC549" : "#666666"} ;
  }
}
p:nth-child(2){
  span{
    color:${props => (props.highestSequence === props.currentSequence) ? "#8FC549" : "#666666"} ;
  }
}
`;

const BoxCheck = styled.div`
width: 69px;
height: 69px;

border-radius: 5px;

background-color: ${props => props.done ? "#8FC549":"#EBEBEB"};

position: absolute;
top: 13px;
right: 13px;

display: flex;
justify-content: center;
align-items: center;

&:hover{
  cursor:pointer;
}
`;
export {Container, Info, BoxCheck};