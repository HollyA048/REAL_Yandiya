import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { styles } from '../stylesheets/PDF';

const generatePDFSlide = (pageNumber, title) => (
  <View style={styles.slide} key={pageNumber}>
    <View style={styles.pageNumberTop}>
      <Text style={{ fontWeight: 'bold' }}>Page {pageNumber} of 8</Text>
    </View>

    <View style={styles.middleBox}>
      <Text style={styles.pdfTitle}>{title}</Text>
      <View style={styles.miniSeparator}/>
      <View style={{ marginTop: '20%' }}>
        <TouchableOpacity style={styles.Button}>
          <Text style={{ fontWeight: 'bold' }}>Download PDF</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.Button}>
          <Text style={{ fontWeight: 'bold' }}>View PDF</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export function ProjectHub() {
  const pdfData = [
    { pageNumber: 1, title: 'Customer Plans' },
    { pageNumber: 2, title: 'Pre-Visit Site Survey' },
    { pageNumber: 3, title: 'Temperature Policy' },
    { pageNumber: 4, title: 'Technical Specification' },
    { pageNumber: 5, title: 'Heating Layout Plan' },
    { pageNumber: 6, title: 'Installation Guide' },
    { pageNumber: 7, title: 'Comission Form / Sign Off' },
    { pageNumber: 8, title: 'Warranty Certificate' },
  ];

  return (
    <Swiper showsButtons={true} showsPagination={false}>
      {pdfData.map(({ pageNumber, title }) =>
        generatePDFSlide(pageNumber, title)
      )}
    </Swiper>
  );
}

const App = () => {
  return (
    <View style={styles.container}>
      <MySwiper />
    </View>
  );
};

export default App;
