import * as React from 'react';
import { Checkbox } from 'react-native-paper';

function Check({ checked, onPress }) {
  const handlePress = () => {
    onPress && onPress(!checked);
  };

  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={handlePress}
      color={'red'}
      uncheckColor={'black'}
    />
  );
}

export default Check;
