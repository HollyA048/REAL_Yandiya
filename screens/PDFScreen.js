User
import * as React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import Swiper from 'react-native-swiper';
import { styles } from '../stylesheets/PDF';

const generatePDFSlide = (pageNumber, title, file) => (
  <View style={styles.slide} key={pageNumber}>
    <View style={styles.pageNumberTop}>
      <Text style={{ fontWeight: 'bold' }}>Page {pageNumber} of 8</Text>
    </View>

    <View style={styles.middleBox}>
      <Text style={styles.pdfTitle}>{title}</Text>
      <View style={styles.miniSeparator} />
      <View style={{ marginTop: '20%' }}>
        <TouchableOpacity
          onPress={() => downloadPDF(file)}
        >
          <Text style={{ fontWeight: 'bold' }}>Download PDF</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const downloadPDF = (file) => {
  const url = `http://188.39.66.240:9080/pdf/${file}`;
  Linking.openURL(url);
};

export function PDFPage() {
  const pdfData = [
    { pageNumber: 1, title: 'Customer Plans', file: 'bean.pdf' },
    { pageNumber: 2, title: 'Pre-Visit Site Survey', file: 'bean.pdf' },
    { pageNumber: 3, title: 'Temperature Policy', file: 'bean.pdf' },
    { pageNumber: 4, title: 'Technical Specification', file: 'bean.pdf' },
    { pageNumber: 5, title: 'Heating Layout Plan', file: 'bean.pdf' },
    { pageNumber: 6, title: 'Installation Guide', file: 'bean.pdf' },
    { pageNumber: 7, title: 'Comission Form / Sign Off', file: 'bean.pdf' },
    { pageNumber: 8, title: 'Warranty Certificate', file: 'bean.pdf' }, //This code here is only a temporary solution, in the future, this should be moved to the backend for scalability
  ];

  return (
    <Swiper showsButtons={true} showsPagination={false}>
      {pdfData.map(({ pageNumber, title, file }) =>
        generatePDFSlide(pageNumber, title, file)
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
