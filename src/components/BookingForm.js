import React from 'react';
import './BookingForm.css'

const BookingForm = () => {

    return (
      <div className='booking'>
        <h2>Booking Form</h2>
        <div className='bookingInfo'>
          <p>Thank you for choosing our holiday rental. To ensure that your stay is as comfortable and hassle-free as possible, please review the following information:</p>
          <h4>Booking and Check-In:</h4>
          <ul>
          <li>Weekly bookings run from 2 p.m. Saturday to 10 a.m. the following Saturday during peak times.</li>
          <li>During off-peak times, there is a minimum stay of 2 consecutive nights.  Long weekend or Midweek breaks. </li>
          <li>A £50 deposit is required to secure your chosen dates with the remainder of your payment to be made in full 4 weeks prior to the start of your holiday. 
            <br></br> If there is less than 4 weeks before your planned stay full payment is required upon confirmation of booking . 
          </li>
          <li>The property has a Good Housekeeping bond of £50 payable at the same time as the balance of your holiday. 
            The bond (damage deposit) will be returned to your bank account within 7 days after departure, provided that the property is left in a clean and tidy condition with no breakages to be deducted. </li>
          <li>Please note that the minimum age for check-in is 18 years old, and no party groups are permitted.</li>
          </ul>
          <h4>Property:</h4>
          <ul>
          <li>Pets are not allowed on the property.</li>
          <li>The property is non-smoking or vaping.</li>
          <li>No BBQs are allowed on site due to chalet management rules.</li>
          </ul>
          <h4>Electricity and Utilities:</h4>
          <ul>
          <li>Electricity is supplied via a &pound;1 coin meter, which is set at the national business rate.</li>
          <li>There will always be &pound;5 in credit when you arrive, but it is your responsibility to ensure that you have enough for the duration of your stay.</li>
          <li>Please make sure there is at least &pound;5 remaining when you leave.</li>
          </ul>
          <h4>Disclaimer:</h4>
          <ul>
          <li>Please note that the information on this page is intended as a guide only. We cannot accept responsibility for any inaccurate, misleading or incomplete information about any property and its facilities or services.</li>
          </ul>
          <p>Thank you for choosing our holiday rental, and we hope that you have a wonderful stay.</p>
        </div>
      
        <p>For bookings please call or email us at:</p>
        <p className='phone'>01692 598704</p>
        <a href='mailto: bookings@chaletbythebroads.co.uk' className='link'>bookings@chaletbythebroads.co.uk</a>
      </div>
    );
  };
  

export default BookingForm;
