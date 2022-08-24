import type { ReactNode } from 'react';

import { Footer } from '~/components/Footer';
import { Logo } from '~/components/Logo';

const APP_NAME = 'thomblweed';

export const Main = ({ children }: { children: ReactNode }) => (
  <div className='flex flex-col h-screen bg-gradient-to-b from-dark via-dark-secondary to-dark'>
    <main className='h-full mx-auto w-11/12 max-w-screen-xl'>
      <Logo logoText={APP_NAME} />
      {children}
    </main>
    <Footer footerText={APP_NAME} />
  </div>
);