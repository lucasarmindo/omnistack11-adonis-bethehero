import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 64px;
  }
  span {
    font-size: 20px;
    margin-left: 24px;
  }
  a.button {
    width: 260px;
    margin-left: auto;
    margin-top: 0;
  }
  button {
    height: 60px;
    width: 60px;
    border-radius: 8px;
    border: 1px solid ${Colors.light_grey};
    background-color: transparent;
    transition: border-color 0.2s;
    margin-left: 16px;
    &:hover {
      border-color: ${Colors.grey};
    }
  }
`;
