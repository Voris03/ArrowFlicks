import React, { useState } from 'react';
import { Input, Button } from '@mantine/core';
import { SearchIcon } from '@primer/octicons-react'; // Пример иконки поиска

export function Header() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    console.log('Выполняется поиск для:', searchValue);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px' }}>
      <div>
        Movies
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Input
          value={searchValue}
          onChange={(event) => setSearchValue(event.currentTarget.value)}
          placeholder="Search movie title"
          leftSection={<SearchIcon />}
          style={{ marginRight: '8px' }}
        />
        <Button onClick={handleSearch} variant="outline">
          Search
        </Button>
      </div>
    </div>
  );
}
