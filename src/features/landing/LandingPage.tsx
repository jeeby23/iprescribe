import { MainLayout } from '../../layouts/MainLayout';
import { Hero } from './Hero';
import { WaitlistSection } from './WaitlistSection';

export const LandingPage = () => {
  return (
    <MainLayout>
      <Hero />
      <WaitlistSection />
    </MainLayout>
  );
};