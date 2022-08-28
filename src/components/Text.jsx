import React, { useState } from 'react';
import pharses from '../pharses.json'

const colors = ['#845EC2', '#D65D81', '#FF6F91', '#FF9671', '#FFC75F', '#F9F871']

const Text = () => {
  const colorTitle = document.getElementById("h3");
  const colorsTitles = document.getElementById("h4");
  const colorButton = document.getElementById('button')

  const pharseRandom = Math.floor(Math.random() * pharses.length);
  const [index, setIndex] = useState(pharseRandom, colorTitle, colorsTitles);

  const changePharse = () => {
    const pharseRandom = Math.floor(Math.random() * pharses.length);
    setIndex(pharseRandom, colorTitle, colorsTitles)

    const randomColor = Math.floor(Math.random() * colors.length)
    document.body.style = `background: ${colors[randomColor]}`
    colorTitle.style = `color: ${colors[randomColor]}`
    colorsTitles.style = `color: ${colors[randomColor]}`
    colorButton.style = `background: ${colors[randomColor]}`
  };

  return (
    <div className='text'>
      <i class="fa-solid fa-quote-right"></i>
      <h3 id='h3'>{pharses[index].quote}</h3>
      <h4 id='h4'>{pharses[index].author}</h4>
      <button id='button' onClick={changePharse}><i class="fa-solid fa-shuffle"></i></button>
    </div>
  );
};

export default Text;