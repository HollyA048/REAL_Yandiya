import * as React from 'react';
import { View, Image,  } from 'react-native';

function TopHeader(){
    return(
    <View style={styles.header}>
      <Image source={require("../assets/yandiyaLogo_Wide.png")} style={styles.iconImage}/>
    </View>
    );
}

export default TopHeader;

const styles={
    header: { 
      height: '15%',
      width: '100%',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#e42c22',
      elevation: 7,
    },
    iconImage: {
      width: "80%",
      height: "70%",
      top: '20%',
      position: 'absolute',
    },
    headerText: {
      fontSize: 40,
      textAlign: 'center',
    },
}