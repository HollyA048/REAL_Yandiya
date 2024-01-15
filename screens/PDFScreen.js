import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Header from '../components/Header';
import { styles } from '../stylesheets/PDF';

export function ProjectHub(){
  return (
    
    <Swiper showsButtons={true} showsPagination={false} >

      {/* PDF 1 */}
      <View style={styles.slide}>
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
      </View>

      {/* PDF 2 */}
      <View style={styles.slide}>
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
      </View>

      {/* PDF 3 */}
      <View style={styles.slide}>
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
      </View>

      {/* PDF 4 */}
      <View style={styles.slide}>
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
      </View>

      {/* PDF 5 */}
      <View style={styles.slide}>
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
      </View>

      {/* PDF 6 */}
      <View style={styles.slide}>
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
      </View>

      {/* PDF 7 */}
      <View style={styles.slide}>
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
      </View>

      {/* PDF 8 */}
      <View style={styles.slide}>
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
      </View>

    </Swiper>

  )
};

const App = () => {
  return (
    <View style={styles.container}>
      <MySwiper />

    </View>
  )
}

export default App;
