import FilterWrapper from 'components/FilterWrapper/FilterWrapper';
import GroupProduct from 'components/GroupProduct/GroupProduct';
import React from 'react';
import { AppWrapper } from './style';

const App = () => {
  return <AppWrapper >
      <FilterWrapper />
        <GroupProduct />
  </AppWrapper>;
};

export default App;
