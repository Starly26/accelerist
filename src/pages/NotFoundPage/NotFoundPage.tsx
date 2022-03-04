import React from "react";
import styled from "styled-components";

const NotFoundPage = () => {
  return (
    <Container>
      <h1>Error! 404 NOT FOUND</h1>
    </Container>
  );
};

export default NotFoundPage;

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
