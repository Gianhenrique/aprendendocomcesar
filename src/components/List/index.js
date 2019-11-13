import React, { useEffect, useState } from 'react';

import api from '../../services/api'

// import { Container } from './styles';

export default function List() {

    const [data, setData] = useState([])
    //pegar dados api
    useEffect(() => {
        async function fachData() {
            const response = await api.get('/products');
            //alert(JSON.stringify(response.data.docs))
            setData(response.data.docs)
        }
        fachData();
    }, [])

    return (
        <>
            {
                // Lista produto, pegando id e title
            }
            {data.map(product => (
                <h1 key={product._id}> {product.title} </h1>
            ))}
        </>
    );
}
