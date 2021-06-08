import { BsArrowUpShort } from "react-icons/bs";
import styled from "styled-components";

type props = {
  down: boolean;
};
const SunDiv = styled.div`
  width: 40px;
  height: 40px;
  background: rgb(255, 205, 0);
  background: radial-gradient(
    circle,
    rgba(255, 205, 0, 1) 10%,
    rgba(255, 185, 55, 1) 55%,
    rgba(245, 184, 72, 1) 90%,
    rgba(231, 172, 67, 1) 100%,
    rgba(255, 130, 0, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;

const Sunrise = (props: props) => {
  return (
    <SunDiv>
      <BsArrowUpShort
        size={30}
        color={"#fff"}
        style={{
          transform: `rotate(${props.down === true ? "180deg" : "0deg"})`,
        }}
      />
    </SunDiv>
  );
};
export default Sunrise;
