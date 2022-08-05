class FetchProdutos{
    static async buscandoProdutos(){
        let array = []
        let response = await fetch('https://kenzie-food-api.herokuapp.com/products/')
        let dados = await response.json()
        .then(dados =>{
            dados.forEach(element =>{
                array.push(element)
            })
        })
        return array
    }
}

export {FetchProdutos}
