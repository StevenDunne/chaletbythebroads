import React from 'react';
import ImageWithText from './ImageWithText';
import LivingArea from '../assets/chalet.jpg'
import LivingKitchen from '../assets/chalet1.jpg'
import Bathroom from '../assets/chalet2.jpg'
import TwinBed from '../assets/chalet3.jpg'
import DoubleBed from '../assets/chalet4.jpg'
import Kitchen from '../assets/chalet5.jpg'
import twinroom from '../assets/twin-room.jpg'
import entrance from '../assets/Entrance.jpg'
import Master from '../assets/master.jpg'
import LivingKitchen2 from '../assets/living-kitchen.jpg'

const Chalet = () => {
  return (
    <div className='mainBody'>
      <ImageWithText imageUrl={LivingKitchen2} altText="Entrance" applyHoverEffect={true}>
        <p>
        As you step through the front door of our delightful chalet, you'll be greeted by a bright and inviting 
        open-plan space that seamlessly blends together a cozy lounge, a well-equipped kitchen, and a comfortable dining area. 
        </p>
      </ImageWithText>
      <ImageWithText imageUrl={Kitchen} altText="Sample Image" reverse={true}>
        <p>
        The kitchen in this chalet is equipped with modern amenities that include an electric hob and oven, a microwave, 
        a fridge with a convenient freezer compartment, and a toaster.
        </p>
      </ImageWithText>
      <ImageWithText imageUrl={Master} altText="Master Bedroom">
        <p>You'll find a comfortable double room awaiting your arrival, complete with freshly made beds that are ready for you to sink into 
          and enjoy a peaceful night's rest. </p>
        <p>We take great pride in ensuring that our guests feel relaxed and at home from the moment they arrive, 
          and our attention to detail is reflected in the immaculate presentation of our rooms.</p>
      </ImageWithText>
      <ImageWithText imageUrl={twinroom} altText="Twin Bedroom" reverse={true}>
        <p>Our chalet features a cozy twin bedroom, complete with two 2ft 6ins beds that are perfect for children or anyone seeking a 
          snug and welcoming sleeping arrangement. Ideal for families with young ones, after a fun-filled day exploring all the 
          family-friendly activities Norfolk has to offer.</p>
      </ImageWithText>
      <ImageWithText imageUrl={Bathroom} altText='Bathroom'>
        <p>Our chalet features a comfortable and well-appointed bathroom, complete with a bath that has an overhead shower,
           a heated towel rail, a wash basin, and a WC.</p>
        <p>Bathroom towels are provided.</p>
        <p>We kindly ask guests to bring their own beach and pool towels.</p>
      </ImageWithText>
    </div>
  );
};

export default Chalet;
