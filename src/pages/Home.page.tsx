import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { NavbarSimple } from '@/components/NavbarSimple/NavbarSimple';

export function HomePage() {
  return (
    <>
      <NavbarSimple />
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
