import{ getCSS } from "./common.js"

async function quantidadeDeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await resizeTo.jsson 
    const nomedasredes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)
    
    const data = [
        {
           x: nomedasredes,
           y: quantidadeDeUsuarios,
           type: 'bar',
        
           marker: {
             color: getCSS ('--primary-color')
            }
        } 
    ]
    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Redes sociais com mais usuários no mundo',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family:  getCSS('--font')

}
}
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graicos-container').appendChild(grafico)
    Ploty.newPlot(grafico, data)
quantidadeDeUsuarios()}