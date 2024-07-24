import React from 'react'

const Calander = () => {
  return (
<div class="tradingview-widget-container">
  <div class="tradingview-widget-container__widget"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-events.js" async></script>
  <script dangerouslySetInnerHTML={{ __html: `
    new TradingView.widget(
      {
        "width": "100%",
        "height": "100%",
        "colorTheme": "light",
        "isTransparent": false,
        "locale": "en",
        "importanceFilter": "-1,0,1",
        "countryFilter": "at,ca,us,nl,no,pl,dk,be,fi,ru,gb,ua,ie,de,za,sa,au,lk,jp,in"
      }
    );
  ` }}></script>
</div>

  )
}

export default Calander
