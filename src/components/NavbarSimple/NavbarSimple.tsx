import { useState } from 'react';
import { Group, Image } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './NavbarSimple.module.css';

const data = [
  { link: '/', label: 'Movies' },
  { link: '/rated', label: 'Rated movies' },
];

export function NavbarSimple() {
  const [active, setActive] = useState('Movies'); // Устанавливаем активный элемент по умолчанию на "Movies"

  const links = data.map((item) => (
    <Link
      className={classes.link}
      to={item.link}
      key={item.label}
      onClick={() => setActive(item.label)} // Обновляем активный элемент при клике
    >
      <span data-active={item.label === active}>{item.label}</span>
    </Link>
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
