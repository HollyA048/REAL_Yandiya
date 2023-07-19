import * as React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';
import Header from '../components/Header';

export function ProjectHub(){
  return (
    
    <Swiper showsButtons={true} showsPagination={false} >

      {/* PDF 1 */}
      <SafeAreaView style={styles.slide}>
        {/* Red Header*/}
        <Header/>
        {/* Page Number */}
        <View style={styles.pageNumber}>
          <Text style={{fontWeight: 'bold'}}>Page 1 of 8</Text>
        </View>
        {/* Middle Box */}
        <View style={styles.middleBox}>
          {/* PDF title */}
          <Text style={styles.pdfTitle}>Customer Plans</Text>
          {/* Download PDF */}
          <View style={{ marginTop: '20%' }}>
            {/* Button */}
            <TouchableOpacity style={styles.pdfContainer}>
              <Text style={{ fontWeight: 'bold' }}>Download PDF</Text>
            </TouchableOpacity>
          </View>
          {/* View PDF */}
          <View style={{ marginTop: '20%' }}>
            {/* Button */}
            <TouchableOpacity style={styles.pdfContainer}>
              <Text style={{ fontWeight: 'bold' }}>View PDF</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      {/* PDF 2 */}
      <SafeAreaView style={styles.slide}>
        <Header/>
        <View style={styles.pageNumber}>
          <Text style={{fontWeight: 'bold'}}>Page 2 of 8</Text>
        </View>
        <View style={styles.middleBox}>
          <Text style={styles.pdfTitle}>Pre-Visit Site Survey</Text>
          <View style={{ marginTop: '20%' }}>
            <TouchableOpacity style={styles.pdfContainer}>
              <Text style={{ fontWeight: 'bold' }}>Download PDF</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: '20%' }}>
            <TouchableOpacity style={styles.pdfContainer}>
              <Text style={{ fontWeight: 'bold' }}>View PDF</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      {/* PDF 3 */}
      <SafeAreaView style={styles.slide}>
        <Header/>
        <View style={styles.pageNumber}>
          <Text style={{fontWeight: 'bold'}}>Page 3 of 8</Text>
        </View>
        <View style={styles.middleBox}>
          <Text style={styles.pdfTitle}>Temperature Policy</Text>
          <View style={{ marginTop: '20%' }}>
            <TouchableOpacity style={styles.pdfContainer}>
              <Text style={{ fontWeight: 'bold' }}>Download PDF</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: '20%' }}>
            <TouchableOpacity style={styles.pdfContainer}>
              <Text style={{ fontWeight: 'bold' }}>View PDF</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      {/* PDF 4 */}
      <SafeAreaView style={styles.slide}>
        <Header/>
        <View style={styles.pageNumber}>
          <Text style={{fontWeight: 'bold'}}>Page 4 of 8</Text>
        </View>
        <View style={styles.middleBox}>
          <Text style={styles.pdfTitle}>Technical Specification</Text>
          <View style={{ marginTop: '20%' }}>
            <TouchableOpacity style={styles.pdfContainer}>
              <Text style={{ fontWeight: 'bold' }}>Download PDF</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: '20%' }}>
            <TouchableOpacity style={styles.pdfContainer}>
              <Text style={{ fontWeight: 'bold' }}>View PDF</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      {/* PDF 5 */}
      <SafeAreaView style={styles.slide}>
        <Header/>
        <View style={styles.pageNumber}>
          <Text style={{fontWeight: 'bold'}}>Page 5 of 8</Text>
        </View>
        <View style={styles.middleBox}>
          <Text style={styles.pdfTitle}>Heating Layout Plan</Text>
          <View style={{ marginTop: '20%' }}>
            <TouchableOpacity style={styles.pdfContainer}>
              <Text style={{ fontWeight: 'bold' }}>Download PDF</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: '20%' }}>
            <TouchableOpacity style={styles.pdfContainer}>
              <Text style={{ fontWeight: 'bold' }}>View PDF</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      {/* PDF 6 */}
      <SafeAreaView style={styles.slide}>
        <Header/>
        <View style={styles.pageNumber}>
          <Text style={{fontWeight: 'bold'}}>Page 6 of 8</Text>
        </View>
        <View style={styles.middleBox}>
          <Text style={styles.pdfTitle}>Installation Guide</Text>
          <View style={{ marginTop: '20%' }}>
            <TouchableOpacity style={styles.pdfContainer}>
              <Text style={{ fontWeight: 'bold' }}>Download PDF</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: '20%' }}>
            <TouchableOpacity style={styles.pdfContainer}>
              <Text style={{ fontWeight: 'bold' }}>View PDF</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      {/* PDF 7 */}
      <SafeAreaView style={styles.slide}>
        <Header/>
        <View style={styles.pageNumber}>
          <Text style={{fontWeight: 'bold'}}>Page 7 of 8</Text>
        </View>
        <View style={styles.middleBox}>
          <Text style={styles.pdfTitle}>Comission Form / Sign Off</Text>
          <View style={{ marginTop: '20%' }}>
            <TouchableOpacity style={styles.pdfContainer}>
              <Text style={{ fontWeight: 'bold' }}>Download PDF</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: '20%' }}>
            <TouchableOpacity style={styles.pdfContainer}>
              <Text style={{ fontWeight: 'bold' }}>View PDF</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      {/* PDF 8 */}
      <SafeAreaView style={styles.slide}>
        <Header/>
        <View style={styles.pageNumber}>
          <Text style={{fontWeight: 'bold'}}>Page 8 of 8</Text>
        </View>
        <View style={styles.middleBox}>
          <Text style={styles.pdfTitle}>Warranty Certificate</Text>
          <View style={{ marginTop: '20%' }}>
            <TouchableOpacity style={styles.pdfContainer}>
              <Text style={{ fontWeight: 'bold' }}>Download PDF</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: '20%' }}>
            <TouchableOpacity style={styles.pdfContainer}>
              <Text style={{ fontWeight: 'bold' }}>View PDF</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

    </Swiper>

  )
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MySwiper />

    </SafeAreaView>
  )
}

export default App;

const styles = {
  slide: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plsWork: {
    width: '100%',
    height: '20%',
    backgroundColor: '#e42c22',
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1.5,
    borderTopColor: 'black',
    borderTopWidth: 1.5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  headerText: {
    fontSize: 40,
    textAlign: 'center',
  },
  pageNumber: {
    marginTop: '10%',
    fontWeight: 'bold',
  },
  middleBox: {
    top: '5%',
    height: '45%',
    width: '70%',
    borderRadius: 5,
    backgroundColor: '#f8f7f7',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  pdfContainer:{
    alignItems: 'center', 
    alignSelf: 'center', 
    justifyContent: 'center', 
    height: 40, 
    backgroundColor: 'white', 
    top: '20%', 
    borderRadius: 15, 
    width: 140,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  pdfTitle: { 
    textAlign: 'center', 
    paddingTop: '10%', 
    fontSize: 18 
  },
  bold: {
    fontWeight: 'bold',
  }
};