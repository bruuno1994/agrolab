import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', // cor de fundo para a tela inteira
    },

    containerLogo: {
        width: '100%', // largura total da tela horizontalmente
        backgroundColor: '#D7D9D7', 
        padding: 4,
    },
    logo: {
        width: 50, // largura
        height: 50, // altura
    },

    titleAmostra: {
        backgroundColor: 'white', // cor de fundo para o título
        paddingVertical: 5, // espaçamento vertical
        alignItems: 'center',
        marginBottom: 20, // margem inferior
    },
    textAmostra: {
        fontSize: 20, // tamanho do texto aumentado
        fontWeight: 'bold', // texto em negrito
        color: '#022601',
        marginBottom: 10,
    },

    perfilContainer1: {
        flex: 2,
        paddingHorizontal: 15, // espaçamento horizontal
        marginVertical: -40,
        marginBottom: 70,
        backgroundColor: 'white',
        alignItems: 'center', // Alinhar itens ao centro
        flexDirection: 'row', // Disposição horizontal
        justifyContent: 'space-between', // Espaçar igualmente os itens
        flexWrap: 'wrap' // Permitir que os itens se movam para a próxima linha, se necessário
    },
    perfil: {
        width: 100, // Largura do perfil
        height: 180, // Altura do perfil ajustada
        marginHorizontal: 10,
        marginVertical: 25, // Espaçamento vertical para evitar sobreposição
        borderWidth: 1, // Largura da borda
        borderColor: '#ccc', // Cor da borda
        borderRadius: 5, // Bordas arredondadas
        alignItems: 'center', // Alinhar itens ao centro
    },

    perfilImage: {
        width: '70%', // Largura da imagem do perfil
        height: 80, // Altura da imagem do perfil ajustada
        borderRadius: 10, // Imagem do perfil arredondada
        marginBottom: 5, // Espaçamento inferior
    },
    perfilText: {
        textAlign: 'center', // Centralizar o texto
    },

    perfilRedesContainer: {
        flexDirection: 'row', // Disposição horizontal
        alignItems: 'center', // Alinhar itens ao centro
        justifyContent: 'center', // Centralizar o conteúdo
    },

    perfilRedes: {
        width: 24, // Largura das imagens das redes sociais
        height: 24, // Altura das imagens das redes sociais
        marginHorizontal: 5, // Espaçamento horizontal entre as imagens   
    },
});
