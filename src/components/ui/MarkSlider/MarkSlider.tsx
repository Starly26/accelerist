import React from "react";
import styled from "styled-components";

type MarkSliderProps = {
  name: string;
};

const grades = Array.from(Array(11).keys());

const MarkSlider: React.FC<MarkSliderProps> = ({ name }) => {
  return (
    <Content>
      <Name>{name}</Name>
      <Wrapper>
        <Line />
        <Form>
          {grades.map((grade) => {
            return (
              <Container key={name.replace(/\s+/g, "") + grade}>
                <Label>{grade}</Label>
                <Radio type="radio" value={grade} name="name" />
              </Container>
            );
          })}
        </Form>
      </Wrapper>
    </Content>
  );
};

export default MarkSlider;

const Content = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  position: relative;
  width: 771px;
`;

const Line = styled.hr`
  position: absolute;
  bottom: 7px;
  width: 100%;
  z-index: -1;
  color: #e8e8e8;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Radio = styled.input`
  background: #2baee0;
  width: 16px;
  height: 16px;
  color: #e8e8e8;
`;

const Name = styled.p`
  font-size: 12px;
  line-height: 150%;
`;

const Label = styled.label`
  font-size: 12px;
  line-height: 150%;
`;
