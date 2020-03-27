import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const Container = styled.li`
  background: ${Colors.white};
  padding: 24px;
  border-radius: 8px;
  position: relative;
  button {
    position: absolute;
    top: 24px;
    right: 24px;
    border: 0;
    background: transparent;
    &:hover {
      opacity: 0.8;
    }
  }
  strong {
    display: block;
    margin-bottom: 16px;
    color: ${Colors.dark_grey};
  }

  p {
    color: ${Colors.grey};
    + strong {
      margin-top: 16px;
    }
  }
`;
