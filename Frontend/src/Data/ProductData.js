const products = [
    { 
        id: 1,
        name: "Classic Sneakers",
        brand: "Sneaker Co.",
        category: "Footwear",
        price: 999.99,
        description: "A pair of classic sneakers for everyday wear.",
        image: "https://redtape.com/cdn/shop/files/RSL0564A_1.jpg?v=1741350199",
        reviews: ["Great comfort!",
        "Stylish and affordable."] 
    },{ 
        id: 2,
        name: "Sporty Running Shoes",
        brand: "RunFast",
        category: "Footwear",
        price: 890.99,
        description: "Lightweight running shoes designed for speed and performance.",
        image: "https://bersache.com/cdn/shop/files/WhatsAppImage2023-04-10at13.17.50.jpg?v=1741007651&width=1080",
        reviews: ["Perfect for my morning runs!",
        "Amazing cushioning."] 
    },{ 
        id: 3,
        name: "Elegant High Heels",
        brand: "Fashionista",
        category: "Footwear",
        price: 1200.00,
        description: "Elegant high heels that add sophistication to any outfit.",
        image: "https://images.stockcake.com/public/3/6/6/366d931b-3609-4bd9-984d-85dbecafa1a8_large/elegant-black-heels-stockcake.jpg",
        reviews: ["Beautiful design.",
        "A bit uncomfortable for long wear."] 
    },{ 
        id: 4,
        name: "Casual T-Shirt",
        brand: "Urban Wear",
        category: "Clothing",
        price: 450.00,
        description: "Soft and stylish t-shirt for everyday wear.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ07dbb2qx0JPNK3U6WK3A-10Ao2ebTuwUndg&s",
        reviews: ["Comfortable and breathable.",
        "Fits perfectly!"] },
        { id: 5,
        name: "Formal Suit",
        brand: "Executive Style",
        category: "Clothing",
        price: 3000.00,
        description: "A sleek formal suit for professional attire.",
        image: "https://frenchcrown.in/cdn/shop/files/ST4535-CBG_2.jpg?v=1742564931&width=3500",
        reviews: ["Looks sharp!",
        "Great material."] 
    },{ 
        id: 6,
        name: "Smartwatch X",
        brand: "TechGear",
        category: "Electronics",
        price: 2999.00,
        description: "A feature-packed smartwatch with health tracking.",
        image: "https://img.tatacliq.com/images/i17//437Wx649H/MP000000022124162_437Wx649H_202405102124041.jpeg",
        reviews: ["Battery lasts long.",
        "Love the fitness tracking features."] 
    },{ 
        id: 7,
        name: "Wireless Headphones",
        brand: "SoundMax",
        category: "Electronics",
        price: 250.00,
        description: "Noise-canceling wireless headphones for premium sound.",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1741643688482",
        reviews: ["Crystal clear sound!",
        "Very comfortable to wear."] 
    },{ 
        id: 8,
        name: "Gaming Laptop",
        brand: "GamePro",
        category: "Computers",
        price: 120000.00,
        description: "High-performance gaming laptop with powerful GPU.",
        image: "https://i.pcmag.com/imagery/roundups/01hiB08j7yaJGJmPl2YhRRH-59..v1713199550.jpg",
        reviews: ["Runs all games smoothly!",
        "Great cooling system."] 
    },{ 
        id: 9,
        name: "4K Smart TV",
        brand: "VisionTech",
        category: "Appliances",
        price: 88999.99,
        description: "A stunning 4K smart TV with HDR support.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt1ug53gqWc3U24aN1_juDINqjDIxWqgkFtA&s",
        reviews: ["Amazing picture quality!",
        "User-friendly interface."] 
    },{ 
        id: 10,
        name: "Refrigerator XL",
        brand: "HomeCool",
        category: "Appliances",
        price: 95000.00,
        description: "Spacious and energy-efficient refrigerator.",
        image: "https://aws-obg-image-lb-2.tcl.com/content/dam/brandsite/region/europe/products/refrigerators/rc456cxe0/ksp/rc456cxe0-xl-large-capacity.jpg?t=1718264078344&w=1200&webp=true&dpr=2.625&rendition=1068",
        reviews: ["Keeps food fresh longer.",
        "Stylish design."] 
    },{ 
        id: 11,
        name: "Office Chair",
        brand: "ErgoComfort",
        category: "Furniture",
        price: 2500.00,
        description: "Ergonomic office chair for comfortable seating.",
        image: "https://m.media-amazon.com/images/I/81gKQp8SFZL.jpg",
        reviews: ["Back pain relief!",
        "Very durable."] 
    },{ 
        id: 12,
        name: "King Size Bed",
        brand: "Luxury Sleep",
        category: "Furniture",
        price: 7000.00,
        description: "Comfortable king-size bed with premium mattress.",
        image: "https://images.woodenstreet.de/image/cache/data%2Fbed-without-storage%2Fadolph-bed-without-storage%2Fupdated%2Fhoney%2Fnew-images%2Fnew-logo%2F1-810x702.jpg",
        reviews: ["Best sleep ever!",
        "Sturdy and well-made."] 
    },{ 
        id: 13,
        name: "Men’s Cologne",
        brand: "FragranceWorld",
        category: "Beauty",
        price: 2000.00,
        description: "A refreshing and long-lasting men’s cologne.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFt3H7oCvCyWzlwdZyWpDZSdpp2UvEvkZkQ&s",
        reviews: ["Smells amazing!",
        "Lasts all day."] 
    },{ 
        id: 14,
        name: "Lipstick Set",
        brand: "GlamLook",
        category: "Beauty",
        price: 2900.00,
        description: "A set of vibrant and hydrating lipsticks.",
        image: "https://milabeaute.com/cdn/shop/files/minispoutparty2.jpg?v=1742447985&width=4160",
        reviews: ["Perfect shades!",
        "Moisturizing and long-lasting."] 
    },{ 
        id: 15,
        name: "Trekking Backpack",
        brand: "AdventureGear",
        category: "Outdoor",
        price: 1950.00,
        description: "Spacious trekking backpack for outdoor adventures.",
        image: "https://www.vaude.com/media/.renditions/catalog/category/S23_Kategoriebanner/S22_Trekkingrucksack.jpg",
        reviews: ["Very sturdy.",
        "Lots of compartments."] 
    },{ 
        id: 16,
        name: "Mountain Bike",
        brand: "SpeedRider",
        category: "Outdoor",
        price: 200000.00,
        description: "Durable mountain bike for rugged terrain.",
        image: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-storefront/default/dwead92c71/category-landing/mountain/seo-mtb-light.jpg?sw=1280&sfrm=jpg&q=80",
        reviews: ["Smooth ride!",
        "Great build quality."] 
    },{ 
        id: 17,
        name: "Cooking Pot Set",
        brand: "KitchenPro",
        category: "Home & Kitchen",
        price: 4000.00,
        description: "Non-stick cooking pot set for home chefs.",
        image: "https://cdn.shopify.com/s/files/1/0024/4137/9915/files/Pink_Always_Pan_Perfect_Pot_Mini_Always_Pan_Mini_Perfect_Pot_Cookware_Set_bundle.jpg?v=1732730202&width=767&height=767&crop=center",
        reviews: ["Easy to clean!",
        "Great for daily cooking."] 
    },{ 
        id: 18,
        name: "Coffee Maker",
        brand: "BrewMaster",
        category: "Home & Kitchen",
        price: 4000.00,
        description: "Automatic coffee maker with multiple brew settings.",
        image: "https://assets.epicurious.com/photos/62741684ef40ea9d3866a0be/16:9/w_2560%2Cc_limit/breville-bambino-espresso-maker_HERO_050422_8449_VOG_Badge_final.jpg",
        reviews: ["Best coffee ever!",
        "Easy to use and clean."] 
    },{ 
        id: 19,
        name: "Pet Bed",
        brand: "ComfyPaws",
        category: "Pet Supplies",
        price: 1500.00,
        description: "Soft and cozy pet bed for your furry friend.",
        image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/pet-bed/s/t/f/s-dog-bed-fillaxy-original-imah3g2ymz2ja9ut.jpeg?q=90&crop=false",
        reviews: ["My dog loves it!",
        "Super soft and comfy."] 
    },{ 
        id: 20,
        name: "Dog Food Pack",
        brand: "HealthyPet",
        category: "Pet Supplies",
        price: 580.00,
        description: "Nutritious dog food for a healthy pet.",
        image: "https://www.foodengineeringmag.com/ext/resources/Issues/2020/06-June/fe0620-petfood3_ProAmpac-QUADFLEX.jpg",
        reviews: ["My dog loves the taste!",
        "Great for digestion."] 
    }
];

export default products;