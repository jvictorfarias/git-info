import styled from 'styled-components';

const Container = styled.div`
  max-width: 650px;
  background: #f8f8f2;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 15px;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  svg {
    width: 80px;
    height: 80px;
  }
`;

export default Container;
