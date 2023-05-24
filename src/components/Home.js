import Pic1 from '../assets/chalet.jpg'
import Pic2 from '../assets/chalet1.jpg'
import Outside from '../assets/outside.jpg'
import entrance from '../assets/Entrance.jpg'
import Carousel from './ImageCarousel'
import ImageWithText from './ImageWithText';
import InfoSection from './InfoSection'



function Home () {
  //images for carousel
    const images = [
        Pic1, Pic2, entrance, Outside
      ];

    const infoItems = [
      { url: "fa-solid fa-bed", description: 'Sleeps 4 \n with one double room and one twin room' },
      { url: 'fa-solid fa-people-roof', description: "Situated in a family-friendly site with plenty for the little ones to do" },
      { url: 'fa-solid fa-shop', description: "The Chalet is on a well maintained site with its own clubhouse and pool." },
    ];
    

    return(
        <div className='mainBody'>
          <p className='textBox'>
          This chalet is the perfect getaway in the heart of North Norfolk's picturesque countryside. 
          The Broadside Chalet Park offers a seasonal outdoor swimming pool with a bar and restaurant, 
          making it the ideal destination for your next holiday.
          </p>
          <Carousel images={images} interval={4000} />
          <InfoSection items={infoItems} />
          <ImageWithText imageUrl={Pic1} altText="Sample Image">
            <p>
             The apartment consists of 2 bedrooms, a living room, a fully equipped kitchen and a bathroom with shower.
             Towels and bed linen are provided. </p>
             <p>This modern chalet offers an ideal base for families to explore the region's picturesque countryside, 
              visit its quaint villages, or enjoy its stunning coastline. Within walking distance of the chalet park 
              are the Norfolk Broads and Stalham Marina where day boats can be hired, and is just 4 miles from the coast with 
              it's beautiful sandy beaches.
            </p>
          </ImageWithText>
          
        </div>
    )
}

export default Home