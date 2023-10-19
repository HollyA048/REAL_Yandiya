import * as React from 'react';
import { Checkbox } from 'react-native-paper';

function Check({_checked, _onPress}) {
    const [checked, setChecked] = React.useState(_checked);
    return (
        <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
                setChecked(!checked);
                  _onPress(!checked);
            }}
            color={'red'}
            uncheckColor={'black'}
        />
    );
}

export default Check;