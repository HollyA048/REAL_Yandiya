import { useState,useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { styles } from '../stylesheets/inspection_css';
import TopHeader from '../components/Header';
import Check from '../components/InspectCheckBox';

export function InspectionScreen({ navigation: { navigate } }) {
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
            <Text>Visually checked all spurs are 13 amps</Text>
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
            <Text>Signed off report and 10-year warranty</Text> {/*This will need to on final screen*/}
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