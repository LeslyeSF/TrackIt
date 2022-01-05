import styled from "styled-components";
const DivForm = styled.div`
  width: 340px;
  height: 180px;

  padding: 19px 19px 19px 19px;

  background-color: #FFFFFF;

  border-radius: 5px;

  position: relative;

  input{
    width: 100%;
    height: 45px;

    background-color: #FFFFFF;

    padding: 9px 11px 9px 11px;

    border: 1px solid #D4D4D4;
    border-radius: 5px;

    font-size: 20px;
    color: #666666;
  }

  input::placeholder{
    color: #DBDBDB;
  }

  input:focus{
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

const SectionDays = styled.div`
  display: flex;
  gap: 4px;

  margin: 8px 0px 8px 0px;

  div{
    width: 30px;
    height: 30px;

    background-color: #FFFFFF;

    border: 1px solid #D4D4D4;
    border-radius: 5px;

    font-size: 20px;
    color: #DBDBDB;
    text-align: center;
  }
`;

const Options = styled.div`
  display: flex;
  gap: 4px;

  position: absolute;
  bottom: 15px;
  right: 15px;
  
  div{
    width: 84px;
    height: 35px;

    border-radius: 5px;

    font-size: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  div:nth-child(1){
    background-color: #FFFFFF;

    color: #52B6FF;
  }

  div:nth-child(2){
    background-color: #52B6FF;

    color: #FFFFFF;
  }

  div:hover{
    cursor: pointer;
  }
`;

export {DivForm, SectionDays, Options};