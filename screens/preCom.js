import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export function PreCommission({ navigation: { navigate } }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  const boxStyle = {
    height: isExpanded ? 300 : 80,
    backgroundColor: '#ffffff',
    borderColor: 'black',
    transition: 'height 0.5s ease-in-out',
    borderWidth: 2,
    borderRadius: 10,
  };

  const intBoxStyle = {
    display: isExpanded ? 'flex' : 'none',
    height: '40%',
    width: '50%',
    backgroundColor: 'grey',
    position: 'absolute',
    top: '30%',
    left: '25%',
    borderColor: 'black',
    borderWidth: 2,
  };

  const intBoxText = {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 10,
  };

  const intBoxInput = {
    display: isExpanded ? 'flex' : 'none',
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
    top: '65%',
    left: '5%',
    borderRadius: 20,
    width: '90%',
  };

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ height: '100%' }}>
      {/* Top bar */}
      <View
        style={{
          backgroundColor: '#e42c22',
          height: '10%',
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          paddingHorizontal: 20,
        }}>
        {/* Empty view */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '15%',
            marginLeft: '15%',
            width: '100%',
          }}
        ></View>
      </View>

      {/* Main content */}
      <View
        style={{
          backgroundColor: 'white',
          height: '78%',
          width: '90%',
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingHorizontal: 20,
          marginLeft: '5%',
          marginTop: '10%',
          borderWidth: 1,
          borderColor: 'black',
          shadowOpacity: 0.9,
        }}
      >
        <ScrollView
          style={{ flexDirection: 'column', height: '110%' }}
          horizontal={false}
        >
          {/* Expandable box */}
          <View style={[styles.box, boxStyle]}>
            <Text style={intBoxText}>
              All double pole switches connected to relay box
            </Text>
            <View style={{ flex: 1, zIndex: 1 }}>
              <Button
                title="Pick an image from camera roll"
                onPress={pickImage}
              />
              {image && (
                <Image
                  source={{ uri: image }}
                  style={{
                    width: '80%',
                    height: '80%',
                    top: '5%',
                    left: '10%',
                  }}
                />
              )}
            </View>
            <TextInput style={[intBoxInput]}></TextInput>
          </View>

          {/* Button to expand/minimize the box */}
          <Button
            title={isExpanded ? 'Minimize' : 'Expand'}
            onPress={handleButtonClick}
          />

          {/* Expanded box */}
          {isExpanded && (
            <View style={[styles.box, boxStyle]}>
              <Text style={intBoxText}>
                All relay boxes numbered or labelled and corresponding to room
              </Text>
              <View style={intBoxStyle} />
              <TextInput style={[intBoxInput]}></TextInput>
            </View>
          )}

          {/* Button to expand/minimize the box */}
          {isExpanded && (
            <Button
              title={isExpanded ? 'Minimize' : 'Expand'}
              onPress={handleButtonClick}
            />
          )}

          {/* Remaining boxes */}
          <View style={[styles.box, boxStyle]}>
            <Text style={intBoxText}>
              All relay boxes numbered or labelled and corresponding to room
            </Text>
            <View style={intBoxStyle} />
            <TextInput style={[intBoxInput]}></TextInput>
          </View>
          <Button
            title={isExpanded ? 'Minimize' : 'Expand'}
            onPress={handleButtonClick}
          />

          <View style={[styles.box, boxStyle]}>
            <Text style={intBoxText}>
              All electrical power to each spur live in the off position
            </Text>
            <View style={intBoxStyle} />
            <TextInput style={[intBoxInput]}></TextInput>
          </View>
          <Button
            title={isExpanded ? 'Minimize' : 'Expand'}
            onPress={handleButtonClick}
          />

          <View style={[styles.box, boxStyle]}>
            <Text style={intBoxText}>
              All panels fitted and located in their correct positions
            </Text>
            <View style={intBoxStyle} />
            <TextInput style={[intBoxInput]}></TextInput>
          </View>
          <Button
            title={isExpanded ? 'Minimize' : 'Expand'}
            onPress={handleButtonClick}
          />

          <View style={[styles.box, boxStyle]}>
            <Text style={intBoxText}>
              All Thermostats mounted in a central position within each area
            </Text>
            <View style={intBoxStyle} />
            <TextInput style={[intBoxInput]}></TextInput>
          </View>
          <Button
            title={isExpanded ? 'Minimize' : 'Expand'}
            onPress={handleButtonClick}
          />

          <View style={[styles.box, boxStyle]}>
            <Text style={intBoxText}>Keep batteries uninstalled</Text>
            <View style={intBoxStyle} />
            <TextInput style={[intBoxInput]}></TextInput>
          </View>
          <Button
            title={isExpanded ? 'Minimize' : 'Expand'}
            onPress={handleButtonClick}
          />

          {/* Continue button */}
          <View
            style={{
              position: 'absolute',
              top: '100%',
              right: '43%',
              fontWeight: 'bold',
            }}
          >
            <Button
              color="green"
              onPress={() => navigate('main')}
              title="Continue"
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginBottom: 10,
    padding: 10,
  },
});

export default PreCommission;
