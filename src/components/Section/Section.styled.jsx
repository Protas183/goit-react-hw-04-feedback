import styled from '@emotion/styled';

export const Container = styled.section`
  max-width: 100%;
  padding: 20px;
  text-align: center;
  :nth-of-type(1) {
    border: 0.5px solid black;
    box-shadow: 10px 5px 5px grey;
    border-radius: 50px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 40px;
  color: var(--primary);
  text-shadow: var(--main-shadow);
`;
