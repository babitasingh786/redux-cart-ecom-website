import React, { useEffect, useState } from 'react';
// import productsData from '../data/productsData';
import ProductsCard from '../components/ProductsCard';

const Home = () => {
    const [productsData, setProductData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/');
                const data = await response.json();
                setProductData(data);
                console.log(productsData);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])
    return (
        <>
            {/* <section id="home">
                <div className="container">
                    <div className="home_content">
                        {
                            productsData.map((item) => (
                                <ProductsCard key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </section> */}
            <section id="home">
                {/* <div className='container'>
                    <div className='home_content'>
                        {
                            productsData.map((item) => (
                                <ProductsCard key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div> */}
                {/* {productsData.map((item)=>(
                    <div>
                    <h1>{item.title}</h1>
                    <img src={item.image}/>
                    </div>
                    
                ))
            } */}
                <div className="container">
                    <div className='home_content'>
                        {
                            productsData.map((item)=>(
                                <ProductsCard key={item.id} {...item} />
                            ))
                        }
                    </div>
                    </div>
       
            </section>
        </>
    );
};

export default Home;