import { useState } from 'react';//ha hook-ot hasznalok
import styled from 'styled-components';

const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 50vw;
background: yellow;
font-size: 1.5em;
`

const Button = styled.button`
width: 36px;
height: 36px;
font-size: 1.1em;
font-weight: bold;
border: none;
border-radius: 6px;
background: linear-gradient(145deg, #cacaca, #f0f0f0);
box-shadow:  9px 9px 18px #c1c1c1,
             -9px -9px 18px #ffffff;
`

function DateHeader() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let dayName = days[currentDate.getDay()];//kiírja a nap nevét

  function decreaseDateByOneDay() {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const increaseDateByOneDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  let content =
    <Header>
      <Button onClick={decreaseDateByOneDay} >{"<"}</Button>
      <div className="date">
        <h5>{currentDate.toLocaleDateString()}</h5>
      </div>
      <div className="day">
        <h5>{dayName}</h5>
      </div>
      <Button onClick={increaseDateByOneDay}>{">"}</Button>
    </Header>;

  return content;

}

export default DateHeader;