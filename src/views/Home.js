import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import image from '../assets/scissors.png'
import Logo from '../components/Logo';
import { SocialMediaIconsReact } from 'social-media-icons-react';

class Home extends React.Component {
  render() {
    return (
      <Parallax style={{
        height: 'calc(100% - 32px)'
      }}
      ref={ref => (this.parallax = ref)} pages={1}>
        {/* <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} /> */}

        {/* <ParallaxLayer offset={0.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={image} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer> */}

        {/* <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer> */}

        {/* <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
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
          speed={-0.75}
          factor={1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <div>
            <Logo />
          </div>

        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={-1.1}
          factor={1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20%' }}
        >
          <div>
            <div className="social-networks">
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
            </div>
          </div>

        </ParallaxLayer>
      </Parallax>
    )
  }
}

export default Home;
