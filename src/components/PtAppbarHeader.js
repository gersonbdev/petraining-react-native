import * as React from 'react';
import { Appbar } from 'react-native-paper';

const PtAppbarHeader = () => {
  const _goBack = () => console.log('Went back');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      <Appbar.Content title="PeTraining" />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

export default PtAppbarHeader;