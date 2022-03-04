import React from "react";
import styled from "styled-components";
import { MarkSlider } from "../../../../../../components/ui/MarkSlider";

const customFilterNames = [
  "Company CRS Focus",
  "SDG Goal",
  "Total Annual Contributions",
  "Type of Partnership",
  "Geographic Location",
  "Constituent Brand Affinities",
];

const CustomFilters: React.FC = () => {
  return (
    <>
      <Title>Priority</Title>
      <Description>
        Customize how important each of the following indicators are to your
        organization, and generate your own custom lead score. On a scale 1 (
        least important) - 10 (most important), rank each attribute bellow
      </Description>
      <MarkSliderContainer>
        {customFilterNames.map((name) => (
          <MarkSlider name={name} key={name.replace(/\s+/g, "")} />
        ))}
      </MarkSliderContainer>
    </>
  );
};

export default CustomFilters;

const Title = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  margin-top: 34px;
  margin-bottom: 16px;
`;

const MarkSliderContainer = styled.div`
  margin-top: 32px;
`;
const Description = styled.div`
  width: 637px;
`;
