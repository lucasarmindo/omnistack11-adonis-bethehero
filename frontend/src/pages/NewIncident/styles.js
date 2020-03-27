import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrap = styled.div`
  width: 100%;
  padding: 96px;
  background-color: ${Colors.background};
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;
  h1 {
    margin: 64px 0 32px;
    font-size: 32px;
  }
  p {
    font-size: 18px;
    color: ${Colors.dark_grey};
    opacity: 0.6;
    line-height: 32px;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;
`;
