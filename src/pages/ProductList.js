import react, {useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function ProductList() { 
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search,setSearch] = useState("");
    const navigate = useNavigate();
    
    /* Atraves do useState se cria variaveis do estado componente
    Componente em React é como um bloco de construção reutilizável da interface de usuário (UI).
    O que e uma variavel do estado componente? é uma forma de armazenar e gerenciar informações 
    dentro de um componente React, que podem mudar ao longo do tempo sem precisar recarregar a página.*/
    
    function handleDelete(id){
        axios.delete('https://node-api-beige-gamma.vercel.app/api/products/' + id)
        .then((data) =>{
            getProducts()
            alert("Produto removido com sucesso!")
        })
        .catch((err) => setError(err.message))

    }
    function getProducts (){
        const url = search?'https://node-api-beige-gamma.vercel.app/api/products?name='+search:'https://node-api-beige-gamma.vercel.app/api/products'
        axios.get(url)
        .then((data) => {
            setProducts(data.data)
        })
        .catch((err) => setError(err.message))
        
    }   
    /*paginas para cadastrar usuario
    editar usuario
    useState react
    ciclo de vida react usando o userEffect*/

           
    useEffect( () => {
        getProducts()
    }, [search]) /* Vai ficar ouvindo a lista de variaveis que e passado dentro dos conlchetes*/
    
    
    /* useEffect e usado para gerenciar o ciclo de vida do componente
    O que e o ciclo de vida do componente? conjunto de fases que um componente React passa 
    desde sua criação (montagem) até sua remoção (desmontagem) da tela.
    1 fase: montagem
    2 fase: atualizacao
    3 fase: desmontagem */
  
  
    if(loading) <p>Carregando usuario...</p>
    if(error) <p>Erro: {error}</p>

    return( /* Vai exibir na tela UI*/
        <div style ={{ padding: '1rem' }}>
            <h2 style = {{ fontWeight: 'bold', marginBottom: '1rem' }}> Lista de Produtos</h2>
            <label>Search: </label>
            <input placeholder='Search' type="text" value={search} onChange={ (e) => setSearch(e.target.value)}/>
            <table style = {{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style = {{ backgroundColor: '#f0f0f0' }}>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>ID</th>
                        <th>Edit</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key = {product._id}>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td>{product._id}</td>
                            <td><button onClick ={() => navigate("/update-product/"+ product._id)}>Edit</button></td>
                            <td><button onClick={() => handleDelete(product._id)}>Delete</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const cellStyle = {
    border: '1px solid #ccc',
    padding: '8px',
    textAlign: 'left',
};

// Tema: update product