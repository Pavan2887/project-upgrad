import Shoes from "../assests/images/shoes-1.jpeg";
import Bag from "../assests/images/bag.jpg";
import Shirt from "../assests/images/casualshirt.jpg";
import Pc from "../assests/images/pc.jpg";



export default function InitialProducts() {
    return [
        {
            key: 1,
            name:'Shoes',
            price:800,
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            photo: Shoes,
            category: 'FOOTWEAR',
            modifiedDate: new Date().toLocaleString(),
            quantity: 60,
            manufacturer: 'TATA'
        },
        {
            key: 2,
            name:'Casual Shirt',
            price:250,
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            photo: Shirt,
            category: 'APPAREL',
            modifiedDate: new Date().toLocaleString(),
            quantity: 150,
            manufacturer: 'TATA'
        },
        {
            key: 3,
            name:'Pc',
            price:60000,
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            photo: Pc,
            category: 'ELECTRONICS',
            modifiedDate: new Date().toLocaleString(),
            quantity: 300,
            manufacturer: 'TATA'
        },
        {
            key: 4,
            name:'Bag',
            price:300,
            description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            photo: Bag,
            category: 'PLASTIC',
            modifiedDate: new Date().toLocaleString(),
            quantity: 150,
            manufacturer: 'TATA'
        }
        
        
        
    

    ];
}