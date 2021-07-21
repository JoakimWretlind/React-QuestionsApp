import styled from 'styled-components';

export const Main = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#8D0722, #D06651);
`;

export const Container = styled.section`
  width: 90vw;
  margin: 5rem auto;
  background: linear-gradient(#f1f1f1, #ffffff);
  border-radius: .4rem;
  padding: 4rem 3.2rem;
  max-width: 920px;
  display: grid;
  gap: 1.6rem 3.2rem;
  box-shadow: 0 .7rem 1.4rem rgba(99, 7, 25,.4);

  @media screen and (min-width: 992px) {
      display: grid;
      grid-template-columns: 25rem 1fr;
  }
`;

export const Info = styled.div`
  
`;

export const QuestionP = styled.p`
    color: #999;
    margin-bottom: 0;
    font-size: 2rem;
    margin-top: 0.5rem;
`;

export const ContainerH3 = styled.h3`
  text-transform: capitalize;
  letter-spacing: .1rem;
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
`;

export const QuestionH4 = styled.h4`
  text-transform: none;
  font-size: clamp(1.4, 2vw, 1.6rem);
  line-height: 1.5;
`;

export const QuestionHeaderH4 = styled.h4`
  text-transform: none;
  font-size: clamp(1.4rem, 3vw, 1.6rem);
  line-height: 1.5;
  margin-top: 1rem;
`;

export const Questions = styled.div`
  opacity: 0;
  padding: 1rem 1.5rem;
  background: #ECECEC;
  margin-bottom: 1rem;
  border-radius: .3rem;
  box-shadow: 0 .3rem .5rem rgba(0, 0, 0, 0.1); 
  transition: .3s ease-out;
  &:hover{
      box-shadow: 0 .1rem .2rem rgba(0, 0, 0, 0.1);
      background: #F1F1F1;
      transform: scale(1.01)
  } 
`;

export const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Btn = styled.button`
  background: #AB3137;
  border-color: transparent;
  width: 2rem;
  height: 2rem;  
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #FFFFFF;
  cursor: pointer;
  margin-left: 1rem;
  align-self: center;
  min-width: 2rem;
  box-shadow: 0 .2rem .3rem rgba(0,0,0,.4);
  transition: .3s ease-out;
  &:hover {
        background: #CE6450;
        box-shadow: none;
  }
`;