import { StyleSheet } from 'react-native';
const shadowStyle = StyleSheet.create({
  shadow: {
    // Android
    elevation: 2,

    // IOS
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2
    }
  }
});
export { shadowStyle };
