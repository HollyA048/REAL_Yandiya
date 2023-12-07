import * as React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';
import Header from '../components/Header';
import { styles } from '../stylesheets/ProjectHub_css';

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
