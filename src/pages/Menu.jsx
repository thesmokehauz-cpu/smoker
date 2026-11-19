import PageBanner from '../components/common/PageBanner.jsx';
import SheeshaCollection from '../components/menu/SheeshaCollection.jsx';
import CafeMenu from '../components/menu/CafeMenu.jsx';
import CoalsFeature from '../components/menu/CoalsFeature.jsx';
import HowToOrder from '../components/menu/HowToOrder.jsx';
import CTABand from '../components/common/CTABand.jsx';
import { images } from '../data/siteData.js';

export default function Menu() {
  return (
    <>
      <PageBanner title="Sheesha & menu" text="Our sheesha collection and cafe menu, all in one place." image={images.hookahDetail} />
      <SheeshaCollection />
      <CafeMenu />
      <CoalsFeature />
      <HowToOrder />
      <CTABand title="Ready to order?" text="Message us your group size and preferred flavour and we will have your table set." />
    </>
  );
}
