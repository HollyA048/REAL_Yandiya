import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  
});
  