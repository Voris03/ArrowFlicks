import { NavbarSimple } from '@/components/NavbarSimple/NavbarSimple';
import { Header } from '@/components/Header/Header';

export function HomePage() {
  return (
    <>
      <div>
        <NavbarSimple />
          <div>
            <Header />
          </div>
      </div>
    </>
  );
}
