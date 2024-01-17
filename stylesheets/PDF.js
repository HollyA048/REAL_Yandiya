import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
  },
  pageNumberTop: {
    marginTop: '10%',
    fontWeight: 'bold',
  },
  pdfTitle: {
    textAlign: 'center',
    paddingTop: '10%',
    fontSize: 18,
  },
  middleBox: {
    top: '20%',
    height: '45%',
    width: '70%',
    borderRadius: 5,
    backgroundColor: '#f8f7f7',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  Button: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    height: 40,
    width: 140,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  miniSeparator: {
    height: 1,
    backgroundColor: '#d9d9d9',
    width: '70%',
    marginTop: 1,
    alignSelf: 'center',
  }
});
