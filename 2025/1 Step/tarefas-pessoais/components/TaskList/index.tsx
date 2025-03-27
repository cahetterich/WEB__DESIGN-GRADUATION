import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, // Expande para preencher o espaço disponível
    padding: 16, // Espaçamento interno ao redor do componente
  },
  task: {
    flexDirection: 'row', // Alinha os itens na horizontal
    justifyContent: 'space-between', // Espaço igual entre os itens
    alignItems: 'center', // Alinha verticalmente no centro
    backgroundColor: '#F9F9F9', // Cor de fundo para destacar a tarefa
    padding: 12, // Espaçamento interno
    marginBottom: 8, // Espaçamento entre as tarefas
    borderRadius: 8, // Bordas arredondadas
    shadowColor: '#000', // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Sombra no Android
  },
  taskText: {
    fontSize: 16, // Tamanho do texto
    color: '#555', // Cor do texto
  },
  button: {
    marginLeft: 8, // Espaçamento entre os botões
  },
});

export default styles;