import React from 'react';
import './ProductList.css'; // Import your CSS file for styling

const products = [
    {
        image2:'Rating.png',
        image3:'In Stock.png',
        name: 'EX DISPLAY : MSI Pro 16',
        feauture: 'Flex-036AU 15.6 MULTITOUCH',
        image: 'image 29.png',
        image1:'$499.00 $499.00.png'
        
    },
    {
        image2:'Rating.png',
        image3:'In Stock.png',
        name: 'EX DISPLAY : MSI Pro 16',
        feauture: 'Flex-036AU 15.6 MULTITOUCH',
        image: 'image 30.png',
        image1:'$499.00 $499.00.png'
    },

    {
        image2:'Rating.png',
        image3:'In Stock.png',
        name: 'EX DISPLAY : MSI Pro 16',
        feauture: 'Flex-036AU 15.6 MULTITOUCH',
        image: 'image 31.png',
        image1:'$499.00 $499.00.png'
    },

    {
        image2:'Rating.png',
        image3:'In Stock.png',
        name: 'EX DISPLAY : MSI Pro 16',
        feauture: 'Flex-036AU 15.6 MULTITOUCH',
        image: 'image 32.png',
        image1:'$499.00 $499.00.png'
    },

    {
        image2:'Rating.png',
        image3:'In Stock.png',
        name: 'EX DISPLAY : MSI Pro 16',
        feauture: 'Flex-036AU 15.6 MULTITOUCH',
        image: 'image 33.png',
        image1:'$499.00 $499.00.png'
    },

    {
        image2:'Rating.png',
        image3:'In Stock.png',
        name: 'EX DISPLAY : MSI Pro 16',
        feauture: 'Flex-036AU 15.6 MULTITOUCH',
        image: 'image 33.png',
        image1:'$499.00 $499.00.png'
    },

    {
        image2:'Rating.png',
        image3:'In Stock.png',
        name: 'EX DISPLAY : MSI Pro 16',
        feauture: 'Flex-036AU 15.6 MULTITOUCH',
        image: 'image 34.png',
        image1:'$499.00 $499.00.png'
    },

    {
        image2:'Rating.png',
        image3:'In Stock.png',
        name: 'EX DISPLAY : MSI Pro 16',
        feauture: 'Flex-036AU 15.6 MULTITOUCH',
        image: 'image 35.png',
        image1:'$499.00 $499.00.png'
    },

    {
        image2:'Rating.png',
        image3:'In Stock.png',
        name: 'EX DISPLAY : MSI Pro 16',
        feauture: 'Flex-036AU 15.6 MULTITOUCH',
        image: 'image 35.png',
        image1:'$499.00 $499.00.png'
    },

    {
        image2:'Rating.png',
        image3:'In Stock.png',
        name: 'EX DISPLAY : MSI Pro 16',
        feauture: 'Flex-036AU 15.6 MULTITOUCH',
        image: 'image 36.png',
        image1:'$499.00 $499.00.png'
    },

    {
        image2:'Rating.png',
        image3:'In Stock.png',
        name: 'EX DISPLAY : MSI Pro 16',
        feauture: 'Flex-036AU 15.6 MULTITOUCH',
        image: 'image 29.png',
        image1:'$499.00 $499.00.png'
    },

    {
        image2:'Rating.png',
        image3:'In Stock.png',
        name: 'EX DISPLAY : MSI Pro 16',
        feauture: 'Flex-036AU 15.6 MULTITOUCH',
        image: 'image 37.png',
        image1:'$499.00 $499.00.png'
    },

    {
        image2:'Rating.png',
        image3:'In Stock.png',
        name: 'EX DISPLAY : MSI Pro 16',
        feauture: 'Flex-036AU 15.6 MULTITOUCH',
        image: 'image 38.png',
        image1:'$499.00 $499.00.png'
    },

    {
        image2:'Rating.png',
        image3:'In Stock.png',
        name: 'EX DISPLAY : MSI Pro 16',
        feauture: 'Flex-036AU 15.6 MULTITOUCH',
        image: 'image 39.png',
        image1:'$499.00 $499.00.png'
    },

    {
        image2:'Rating.png',
        image3:'In Stock.png',
        name: 'EX DISPLAY : MSI Pro 16',
        feauture: 'Flex-036AU 15.6 MULTITOUCH',
        image: 'image 40.png',
        image1:'$499.00 $499.00.png'
    },
    {
        image2:'Rating.png',
        image3:'In Stock.png',
        name: 'EX DISPLAY : MSI Pro 16',
        feauture: 'Flex-036AU 15.6 MULTITOUCH',
        image: 'image 29.png',
        image1:'$499.00 $499.00.png'
    },
    {
        image2:'Rating.png',
        image3:'In Stock.png',
        name: 'EX DISPLAY : MSI Pro 16',
        feauture: 'Flex-036AU 15.6 MULTITOUCH',
        image: 'image 39.png',
        image1:'$499.00 $499.00.png'
    },
    {
        image2:'Rating.png',
        image3:'In Stock.png',
        name: 'EX DISPLAY : MSI Pro 16',
        feauture: 'Flex-036AU 15.6 MULTITOUCH',
        image: 'image 40.png',
        image1:'$499.00 $499.00.png'
    },
    {
        image2:'Rating.png',
        image3:'In Stock.png',
        name: 'EX DISPLAY : MSI Pro 16',
        feauture: 'Flex-036AU 15.6 MULTITOUCH',
        image: 'image 32.png',
        image1:'$499.00 $499.00.png'
    },
    {
        image2:'Rating.png',
        image3:'In Stock.png',
        name: 'EX DISPLAY : MSI Pro 16',
        feauture: 'Flex-036AU 15.6 MULTITOUCH',
        image: 'image 33.png',
        image1:'$499.00 $499.00.png'
    },


];

function ProductList() {
    return (
        <div style={{marginTop:'100px'}}>
           <div>
                <img src='Component 43.png' alt='Component' style={{display:'flex'}}/>
                <img src='Component 44.png' alt='Component' style={{display:'flex'}}/>
            </div>
            <div className="product-container">
                {products.map((product) => (
                    <div className="product-card">
                        <img src={product.image3} style={{display:'flex'}} className="product-image" />
                        <img src={product.image} alt={product.name}  className="product-image"/>
                        <img src={product.image2} alt={product.name} style={{display:'flex'}} className="product-image" />
                        <h3>{product.name}</h3>
                        <h3>{product.feauture}</h3>
                        <img src={product.image1} alt={product.name} className="product-image"/>
                        <div className="price">{product.price}</div>
                    </div>
                ))}
            </div>
            <div style={{padding:'80px'}}>
                <img src='Group 154.png' alt=''/>
            </div>
           <div style={{fontSize:'15px',padding:'20px'}}>
            <p>MSI has unveiled the Prestige Series line of business-class and gaming notebooks. Tuned for color accuracy, the Prestige Series also leverages True Color Technology, 
                which allows users to adjust the display profile to best fit their computing needs.</p>
            <p>There are six different screen profiles, which are tuned for gaming, reducing eye fatigue, sRGB color accuracy, increasing clarity for words and lines, reducing harmful blue light, and optimizing contrast for watching movies.
Given the various display profiles and discrete graphics chip, the Prestige Series notebooks can be used for various design work as well as for office tasks given that the screen can be adjusted for better clarity, color accuracy, or for eye strain reduction. Users working with video or 3D rendering will appreciate the "movie mode" for which contrast is increased.</p>
            <p>Home users or students can benefit from the "anti-blue" and the "office mode" options, both of which are designed to reduce eye strain. This is helpful when working on the computer for extended periods of time. Additionally, in their down time, students can also use the "gamer mode" to increase the screen brightness.</p>
           </div>
         <div style={{padding:'80px'}}>
            <img src='Frame 34.png' alt=''/>
         </div>

        </div>
    );
}

export default ProductList;
