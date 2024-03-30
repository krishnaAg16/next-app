export default function handler(req, res) {
    res.status(200).json([
        {
            id:1,
            category:"Tshirt",
            name:"Black Hawk",
            desc:"Tshirt: 32inch good thsirt .......",
            price:"599",
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
            imageAlt: "Front of men's Basic Tshirt in black."
        },

        {
            id:2,
            category:"Shirt",
            name:"Blue Hawk",
            desc:"Tshirt: 32inch good hsirt .......",
            price:"1199",
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
            imageAlt: "Front of men's Basic Tshirt in black."
        },

        {
            id:3,
            category:"Tshirt",
            name:"Black jack",
            desc:"Tshirt: 42inch good thsirt .......",
            price:"899",
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
            imageAlt: "Front of men's Basic Tshirt in black."
        },
        
        {
            id:4,
            category:"Jeans",
            name:"Magenta Placid",
            desc:"Tshirt: 31inch good thsirt .......",
            price:"1299",
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tshirt in black."
        },
    ])
  }