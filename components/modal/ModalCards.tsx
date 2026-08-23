const ProductGroups = [
    {
        title: "RELATED PRODUCT",
        products: [
            {
                image: "images/Image-31.png",
                name: "Bose Sport Earbuds wireless Earphones",
                price: "$1,500",
            },
            {
                image: "images/Image-20.png",
                name: "Simple Mobile 4G LTE Prepaid Smartphone",
                price: "$1,500",
            },
            {
                image: "images/Image-16.png",
                name: "4K UHD LED Smart TV",
                price: "$1,500",
            },
        ],
    },
    {
        title: "PRODUCTION ACCESSORIES",
        products: [
            {
                image: "images/Image-1.png",
                name: "Samsung Galaxy $21 5G",
                price: "$1,500",
            },
            {
                
                image: "images/Image-51.png",
                name: "Simple Mobile Gaming Phone",
                price: "$1,500",
            },
            {
                
                image: "images/Image-19.png",
                name: "Sony DSC Camera",
                price: "$1,500",
            },
        ],
    },
    {
        title: "APPLE PRODUCT",
        products:[
            {
                
                image: "images/Image-6.png",
                name: "Tozo T6 True Wireless",
                price: "$1,500",
            },
            {
                
                image: "images/Image-32.png",
                name: "JBL Portable Bluetooth Speaker",
                price: "$1,500",
            },
            {
                
                image: "images/Image-2.png",
                name: "Wyze Cam Pan",
                price: "$1,500",
            },
        ],
    },
    {
        title: "FEATURED PRODUCTS",
        products: [
            {
                
                image: "images/Image-18.png",
                name: "Portable Washing Machine",
                price: "$1,500",
            },
            {
                
                image: "images/Image-3.png",
                name: "Sony High Zoom Camera",
                price: "$1,500",
            },
            {
                
                image: "images/Image-52.png",
                name: "Dell Monitor",
                price: "$1,500",
            },
        ],
    },
];



export default function ModalCard (){
    return (
        <section className="max-w-7xl mx-auto py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-4 gap-6">
                {ProductGroups.map((group, index) => (
                    <div key={index}>
                        <h2 className="font-semibold text-sm uppercase mb-4">{group.title}</h2>
                        <div className="space-y-3">
                            {group.products.map((product, i) => (
                                <div key={i} className="border border-gray-200 p-3 flex gap-3">
                                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover"/>
                                    <div>
                                        <h3 className="text-sm leading-5">
                                            {product.name}
                                        </h3>
                                        <p className="text-sky-500 font-semibold mt-1">{product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}