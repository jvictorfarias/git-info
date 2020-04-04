import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #f8f8f2;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  div.logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    svg {
      width: 80px;
      height: 80px;
    }
  }

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 15px;
  }
`;

export default Container;
