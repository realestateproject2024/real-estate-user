import ReactSlider from "react-slider";
import { useState } from "react";

const PriceRange = () => {
  const min = 5;
  const max = 10;

  const [value, setValue] = useState([min, max]);

  return (
    <>
      <div className="price_slider_amount">
        <span className="text-light">Your range:</span>
        <span className="text-light">{value[0] * 1000}</span>
        <span className="text-light">-</span>
        <span className="text-light">{value[1] * 1000} USD</span>
      </div>

      <ReactSlider
        value={value}
        onChange={setValue}
        className="horizontal-slider"
        thumbClassName="cardealer-thumb"
        trackClassName="cardealer-track"
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
    </>
  );
};

export default PriceRange;
