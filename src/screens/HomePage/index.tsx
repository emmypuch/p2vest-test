import React from 'react'

import HomeHeroSection from './_partials/HomeHeroSection';
import HomeAnimationSection from './_partials/HomeAnimationSection';
// import HomeWalletSection from './_partials/HomeWalletSection';
// import HomeShopSection from './_partials/HomeShopSection';
// import HomeBillsSection from './_partials/HomeBillsSection';
// import HomeFaqSection from './_partials/HomeFaqSection';
// import HomeContactSection from './_partials/HomeContactSection';
// import HomeFooterSection from './_partials/HomeFooterSection';

function HomePage() {
  return (
    <div>
        <HomeHeroSection />
        <HomeAnimationSection />
        {/* <HomeWalletSection />
        <HomeShopSection />
        <HomeBillsSection />
        <HomeFaqSection />
        <HomeContactSection />
        <HomeFooterSection /> */}
    </div>
  )
}

export default HomePage