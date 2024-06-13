import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#71A621',
    alignItems: 'center',
    justifyContent: 'center',
    paddingStart: "5%",
    paddingEnd: "5%"    
  },

  title: {
    color: '#022601',
    fontWeight: 'bold',
    fontSize: 28,
    backgroundColor: '#71A621',
    marginVertical: '10%'
  },

  input: {
    color: '#121212',
    width: '100%',
    height: 40,
    backgroundColor: '#D7D9D7',
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },

  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#022601',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  labeError: {
    alignSelf: 'flex-start',
    color: '#ff375b',
    marginBottom: 8,
  }
});