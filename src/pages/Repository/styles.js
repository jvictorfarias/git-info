import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.div`
  border-top: 1px solid #eee;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #ff79c6;
    text-decoration: none;
    font-size: 16px;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 10px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      border-radius: 50%;
      width: 50px;
      height: 50px;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #44475a;

          &:hover {
            color: #ff79c6;
          }
        }
      }

      p {
        font-size: 12px;
        margin-top: 5px;
        color: #ff79c6;
      }
    }
  }
`;

export const Label = styled.span`
  background: ${(props) => props.labelColor};
  border-radius: 2px;
  font-size: 12px;
  font-weight: 600;
  height: 20px;
  padding: 3px 4px;
  margin-left: 10px;
  color: #000;
`;
