import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import styled from "styled-components";

type RangeSliderProps = {
  step: number;
  min: number;
  max: number;
  onChange: (values: number[]) => void;
  units: string[];
};

const RangeSlider: React.FC<RangeSliderProps> = ({
  step,
  max,
  min,
  onChange,
  units,
}) => {
  const [values, setValues] = useState([min, max]);

  return (
    <Range
      values={values}
      step={step}
      min={min}
      max={max}
      onChange={(values) => {
        onChange(values);
        setValues(values);
      }}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            height: "36px",
            display: "flex",
            width: "100%",
          }}
        >
          <div
            ref={props.ref}
            style={{
              height: "2px",
              width: "100%",
              background: getTrackBackground({
                values,
                colors: ["#E8E8E8", "#2BAEE0", "#E8E8E8"],
                min: min,
                max: max,
              }),
              alignSelf: "center",
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, ...restProps }) => {
        return (
          <Slider {...props}>
            <div>
              {props.key
                ? `${units[0]} ${values[1]} ${units[1]}`
                : `${units[0]} ${values[0]} ${units[1]}`}
            </div>
          </Slider>
        );
      }}
    />
  );
};

export default RangeSlider;

const Slider = styled.div`
  width: 72px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #caf0ff;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
