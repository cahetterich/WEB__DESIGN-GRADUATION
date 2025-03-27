import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 16, // Espaçamento externo ao redor do componente
  },
  input: {
    borderWidth: 1, // Borda visível ao redor do TextInput
    borderColor: 'gray', // Cor da borda
    borderRadius: 8, // Bordas arredondadas
    padding: 10, // Espaçamento interno
    marginBottom: 8, // Espaçamento entre o campo de entrada e o botão
  },
  button: {
    backgroundColor: '#6200EE', // Cor de fundo do botão
    borderRadius: 8, // Bordas arredondadas
    padding: 10, // Espaçamento interno
    alignItems: 'center', // Centraliza o texto no botão
  },
  buttonText: {
    color: 'white', // Cor do texto
    fontWeight: 'bold', // Negrito no texto
  },
});

export default styles;