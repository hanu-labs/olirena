import React, { useRef, useEffect } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import WhatsappLink from '../components/WhatsappLink';

const Home = () => {
  const containerRef = useRef(null);

  // useEffect(() => {
  //   if (!containerRef.current) return;
  //   window.Calendly.initInlineWidget({
  //     url: 'https://calendly.com/olirena', //?hide_landing_page_details=1&hide_event_type_details=1',
  //     parentElement: containerRef.current,
  //     prefill: {},
  //     utm: {}
  //    });
  // }, [containerRef.current]);


  return (
    <Parallax style={{
        height: 'calc(100% - 32px)'
      }}
      pages={1}>
      <ParallaxLayer
          offset={0}
          speed={-0.75}
          factor={1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <div>
            <div>
          ¡Reservá tu turno por Whatsapp!
            </div> 
            <div>
              <WhatsappLink
                number="1136779097"
                countryCode="54"
                text="Quiero reservar un turno en Olirena."
              ></WhatsappLink>
            
            </div> 
          </div>
        </ParallaxLayer>
    </Parallax>

      // <div className="section">
    //   <div className="content">
    //     <div className="calendly-container" ref={containerRef} />
    //   </div>
    // </div>
  );
}

export default Home;
