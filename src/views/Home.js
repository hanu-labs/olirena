import React, { Fragment } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import image from '../assets/scissors.png'
import Logo from '../components/Logo';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import { WhatsappIcon } from 'react-share';
import WhatsappLink from '../components/WhatsappLink';

import iconMarker from '../assets/marker.svg';
import iconShare from '../assets/share.svg';

import img1 from '../assets/instagram/116831045_358385141954905_7762141599743997005_n.jpg';
import img2 from '../assets/instagram/89445330_141609620497358_3908677645883764_n.jpg';
import img3 from '../assets/instagram/75551297_166855888074823_2584164387819846928_n.jpg';
import img4 from '../assets/instagram/79139296_485403485418481_8566277115745279984_n.jpg';
import img5 from '../assets/instagram/75341376_481404966050635_7295530957784646711_n.jpg';
import img6 from '../assets/instagram/117437835_178971443605716_3285905415579470298_n.jpg';
import img7 from '../assets/instagram/117294453_1371415119723806_7814776936962736458_n.jpg';
import img8 from '../assets/instagram/80016548_128318548284207_677030806911321804_n.jpg';
import img9 from '../assets/instagram/82227501_168911511054635_5930167882681973111_n.jpg';
import img10 from '../assets/instagram/116659403_3236670946382293_7576305509918775112_n.jpg';
import img11 from '../assets/instagram/72926683_2372605572992289_6527325753223060200_n.jpg';

import { NavLink } from 'react-router-dom';

const imgs = [
  {
    src: img1,
    text: 'Mechas, corte y alisado'
  },
  {
    src: img2,
    text: 'Trenzas'
  },
  {
    src: img3,
    text: 'Balayage'
  },
  {
    src: img4,
    text: 'Iluminación',
  },
  {
    src: img5,
    text: 'Cortes desgastados'
  },
  {
    src: img6,
    text: 'Decoloración y color',
  },
  {
    src: img7,
    text: 'Mechas color caramelo',
  },
  {
    src: img8,
    text: 'Peinados y maquillaje',
  },
  {
    src: img9,
    text: 'Service de uñas y esmaltado semipermanente',
  },
  {
    src: img10,
    text: 'Corte Bombee, con nuca corta',
  },
  {
    src: img11,
    text: 'Lifting y permanente de pestañas',
  },
];

class Home extends React.Component {
  render() {
    return (
      <Parallax style={{
        height: 'calc(100% - 32px)'
      }}
      ref={ref => (this.parallax = ref)} pages={imgs.length + 1}>
        {/* <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} /> */}

        {imgs.map((img, index) => {
          const speed = index % 2 ? 0 : 0.6;
          const offset = index + 1;

          return (
            <Fragment key={index}>
              <ParallaxLayer
                offset={offset}
                speed={speed}
                style={{ opacity: 1 }}>
                <div className="instagram-photo"
                  style={{
                    backgroundImage: `url(${img.src})`
                  }} />
              </ParallaxLayer>
              <ParallaxLayer
                offset={offset}
                speed={speed + 0.5}
                style={{ opacity: 1 }}>
                <div className="instagram-text">
                  {img.text}
                </div>
              </ParallaxLayer>
            </Fragment> 
          );
        })}

        {/* <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer> */}

        {/*
        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer> */}

        {/* <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true)
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={url('server')} style={{ width: '20%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={url('bash')} style={{ width: '40%' }} />
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <div>
            <Logo />
            <h2>
              <span>
                Reservá tu turno por WhatsApp al
              </span>&nbsp;
              <WhatsappLink
                number="1136779097"
                countryCode="54"
                text="Quiero reservar un turno en Olirena."              
              />
              <div>
                <NavLink to={'/donde'}>
                  <img src={iconMarker} alt="donde"/>Av. Eva Perón 5695, Mataderos
                </NavLink>
              </div>
            </h2> 
            <div className="social-icons">
              <WhatsappLink
                number="1136779097"
                countryCode="54"
                text="Quiero reservar un turno en Olirena."              
              >
                <WhatsappIcon
                  className="social-icon whatsapp" />
              </WhatsappLink>
              {[
                  {
                    icon: 'instagram',
                    url: 'https://www.instagram.com/olirenapel/'
                  },
                  {
                    icon: 'facebook',
                    url: 'https://www.facebook.com/olirena.olirena'
                  } 
                ].map((icon) => (
                  <SocialMediaIconsReact
                    borderColor="rgba(0,0,0,0.25)"
                    borderWidth="2"
                    borderStyle="solid"
                    iconColor="rgba(255,255,255,1)"
                    iconSize="5"
                    roundness="20%"
                    size="40"
                    key={icon.icon}
                    {...icon}
                  />
                ))}
                
                {navigator.share && (
                  <span onClick={() => navigator.share({
                    title: 'Olirena',
                    text: 'Peluquería Unisex',
                    url: 'https://www.olirena.com',
                  })} class="social-icon share"><img src={iconShare} alt="Compartir"/></span>
                )}
            </div>
          </div>

        </ParallaxLayer>
      </Parallax>
    )
  }
}

export default Home;
