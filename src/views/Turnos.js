import React, { useRef, useEffect } from 'react';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    window.Calendly.initInlineWidget({
      url: 'https://calendly.com/olirena', //?hide_landing_page_details=1&hide_event_type_details=1',
      parentElement: containerRef.current,
      prefill: {},
      utm: {}
     });
  }, [containerRef.current]);


  return (
    <div className="section">
      {/* <h2>Turnos</h2> */}
      <div className="content">
        <div className="calendly-container" ref={containerRef} />
      </div>
    </div>
    // {/* <iframe
    //   className="calendly"
    //   src="https://calendly.com/olirena"
    // /> */}
  );
}

export default Home;
