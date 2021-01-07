setInterval(() => {

    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

  const secondHand = document.querySelector('#second');
  const minsHand = document.querySelector('#minute');
  const hourHand = document.querySelector('#hour');

  const secondsDegrees = ((second / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  const minutesDegrees = ((minute / 60) * 360) + ((second/60)*6) + 90;
  minsHand.style.transform = `rotate(${minutesDegrees}deg)`

  const hourDegrees = ((hour / 12) * 360) + ((minute/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`
 

}, 1000);