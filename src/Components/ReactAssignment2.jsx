import React, { Component } from 'react';
import '../Style/ReactAssignment2.css';
export default class ReactAssignment2 extends Component {
  render() {
    function handleScroll() {
      document.getElementById('ref').scrollIntoView();
    }
    return (
      <div className='container'>
        <div className='bgColor'></div>
        <div className='topSection'>
          <div className='circle'></div>
          <div className='line'></div>
        </div>
        <div className='text'>
          <div className='text-1'>Lorem ipsum elsdolor sit amet,</div>

          <div className='text-2'>adipiscing elit. Donec interdum pharetra</div>
        </div>
        <div className='img-1'></div>
        <div className='imgPath'></div>
        <div className='paraText'>
          Lorem ipsum dolor sit amet, adipiscing elit.
        </div>
        <div className='paraBody'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          interdum pharetra erat at efficitur. Etiam a quam urna. Aenean
          pulvinar nunc in mattis tincidunt
        </div>
        <div className='dashedLine-1'></div>
        <div className='scrollCircle' onClick={handleScroll}>
          <div class='circle-txt'>Scroll Down</div>
        </div>
        <div className='buildingImage-1'></div>
        <div className='buildingImage-2'></div>
        <div className='paraText-1'>
          Lorem ipsum dolor sit amet, adipiscing elit.
        </div>
        <div className='paraBody-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          interdum pharetra erat at efficitur. Etiam a quam urna. Aenean
          pulvinar nunc in mattis tincidunt
        </div>
        <div className='dashedLine-2'></div>
        <div className='bottomContainer'>
          <div className='bottomBg'></div>
          <div className='bottomHeading'>
            Lorem ipsum dolor sit amet, adipiscing elit.
          </div>
          <div className='bottamPara'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            interdum pharetra erat at efficitur. Etiam a quam urna. Aenean
            pulvinar nunc in mattis tincidunt
          </div>
          <div className='dashedLine-3'></div>
          <div className='bottamPara-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            interdum pharetra erat at efficitur. Etiam a quam urna. Aenean
            pulvinar nunc in mattis tincidunt
          </div>
        </div>
        <div className='bottomImg-1' id='ref'>
          <div class='overlay'></div>
        </div>
        <div className='bottomImg-2'></div>
      </div>
    );
  }
}
