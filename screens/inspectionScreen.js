import { useState,useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import TopHeader from './components/Header';
import Check from './components/InspectCheckBox';

export function inspectionScreen({ navigation: { navigate } }) {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [checkboxes, setCheckboxes] = useState([false, false, false, false, false, false, false]);

  useEffect(() => {
    const allSelected = checkboxes.every((checkbox) => checkbox === true);
    setIsButtonVisible(allSelected);
  }, [checkboxes]);

  const handleCheckboxPress = (index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <ScrollView>
      <View style={styles.appContainer}>
        <TopHeader />
        <View style={styles.boxContainer}>
          <View style={styles.checkboxContainer}>
            <Check onPress={ () => handleCheckboxPress(0)} checked={checkboxes[0]}/>
          </View>
          <View style={styles.checkBoxDescContainer}>
            <Text style={{ bottom: '10%' }}>
              Visually checked wiring resistance and sizing of cables
            </Text>
          </View>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.checkboxContainer}>
            <Check onPress={ () => handleCheckboxPress(1)} checked={checkboxes[1]}/>
          </View>
          <View style={styles.checkBoxDescContainer}>
            <Text>Visually checked all spurs</Text>
          </View>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.checkboxContainer}>
            <Check onPress={ () => handleCheckboxPress(2)} checked={checkboxes[2]}/>
          </View>
          <View style={styles.checkBoxDescContainer}>
            <Text style={{ bottom: '10%' }}>
              Visual inspection of consumer unit(s) and breakers used
            </Text>
          </View>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.checkboxContainer}>
            <Check onPress={ () => handleCheckboxPress(3)} checked={checkboxes[3]}/>
          </View>
          <View style={styles.checkBoxDescContainer}>
            <Text>Visually checked panel placement</Text>
          </View>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.checkboxContainer}>
            <Check onPress={ () => handleCheckboxPress(4)} checked={checkboxes[4]}/>
          </View>
          <View style={styles.checkBoxDescContainer}>
            <Text>Setup of control units (Thermostats etc)</Text>
          </View>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.checkboxContainer}>
            <Check onPress={ () => handleCheckboxPress(5)} checked={checkboxes[5]}/>
          </View>
          <View style={styles.checkBoxDescContainer}>
            <Text style={{ bottom: '10%' }}>
              Thermal check of all panels, coming up to temperature
            </Text>
          </View>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.checkboxContainer}>
            <Check onPress={ () => handleCheckboxPress(6)} checked={checkboxes[6]}/>
          </View>
          <View style={styles.checkBoxDescContainer}>
            <Text>Signed off report and 10-year warranty</Text>
          </View>
        </View>
          {isButtonVisible ? (
            <TouchableOpacity style={styles.continueButton}>
              <Text style={styles.buttonTextStyle}>Continue</Text>
            </TouchableOpacity>
          ) : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  checkboxContainer: {
    left: '5%',
    bottom: '2%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
  },
  boxContainer: {
    top: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  checkBoxDescContainer: {
    right: '30%',
    width: '80%',
  },
  continueButton: {
    width: '25%',
    height: 50,
    alignSelf: 'center',
    marginTop: '10%',
    bottom: '5%',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#e42c22',
  },
  buttonTextStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    top: '25%',
  },
});
