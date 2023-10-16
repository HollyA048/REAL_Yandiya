import * as React from 'react';
import { Checkbox } from 'react-native-paper';

function Check({_status}) {
    const [checked, setChecked] = React.useState(false);
    return (
        <Checkbox
            status={_status ? 'checked' : 'unchecked'}
            onPress={() => {
                setChecked(!checked);
            }}
            color={'red'}
            uncheckColor={'black'}
        />
    );
}

export default Check;