import { useState } from 'react';
import { Group, Image } from '@mantine/core';
import classes from './NavbarSimple.module.css';

const data = [
  { link: '', label: 'Movies' },
  { link: '', label: 'Rated movies' },
];

export function NavbarSimple() {
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Image src="../../../dist/assets/logo.svg" />
        </Group>
        {links}
      </div>
    </nav>
  );
}
