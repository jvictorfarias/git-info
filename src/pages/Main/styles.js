import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 20px;
  color: ${(props) => (props.error ? 'red' : '#7159c1')};
  font-family: Arial, Helvetica, sans-serif;

  small {
    color: #ee9b43;
    font-size: 14px;
    margin-left: 2px;
  }
`;
