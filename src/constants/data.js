import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
    img: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b1c01b50-7ab3-4366-8791-209e8a624b03_425x425.jpg'
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
    img: 'https://www.legalhomedelivery.com/wp-content/uploads/2021/06/28334W.png'
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
    img: "https://www.legalhomedelivery.com/wp-content/uploads/2021/06/28334W.png"
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
    img: "https://www.legalhomedelivery.com/wp-content/uploads/2021/06/28334W.png"
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
    img: "https://www.legalhomedelivery.com/wp-content/uploads/2021/06/28334W.png"
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

const products = [
  {
    imgUrl: "https://static.toiimg.com/thumb/84667091.cms?imgsize=446034&width=800&height=800",
    title: 'Mutton Kasa (2 pics)',
    price: "160",
    key: "recomemded",
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  }, {
    imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/jlfomoibcb8vv9s5e9yd",
    title: "Chicken Chap",
    price: "100",
    key: "recomemded",
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  }, {
    imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/dxcx4fgymrljnsquei7w",
    title: "Mutton Chap",
    price: "150",
    key: "recomemded",
    subtitle: "Lorem ipsum dolor sit amet, consectetur."
  }, {
    imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kj1tk7rgedu1e5dbsjca",
    title: "Phirni",
    price: "60",
    key: "recomemded",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  }, {
    imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/uere2faxxirynufidslr",
    title: "Veg Momo",
    price: "110",
    key: "momo",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  }, {
    imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rel47bzym0vxp22ajlfq",
    title: "Veg Fried Momo",
    price: "130",
    key: "momo",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  }, {
    imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/wejogxlqn7ktq8hs8jt3",
    title: "Chicken Steamed Momo",
    price: "150",
    key: "momo",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",

  }, {
    imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/jpkppxxykivhk5fyuthm",
    title: "Chicken Fried Momo",
    price: "180",
    key: "momo",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",

  }
]

const resturents = [
  {
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    name: "Mughal Empire",
    rating: "4.5",
    time: "34min",
    available: "Yes",
  }, {
    img: "https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    rating: "4.7",
    name: "Taj Restro",
    time: "40min",
    available: "Yes",
  }, {
    img: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    rating: "4.1",
    time: "23min",
    name: "Hotel Parkstreet",
    available: "Yes",
  }, {
    img: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc3RhdXJhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    rating: "4.4",
    time: "23min",
    name: "Tandoor House",
    available: "Yes",
  }, {
    img: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc3RhdXJhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    rating: "4.4",
    time: "23min",
    name: "Spoffy",
    available: "Yes",
  }, {
    img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    rating: "4.6",
    time: "28min",
    name: "Flavourish",
    available: "Yes",
  }, {
    img: "https://images.unsplash.com/photo-1570560258879-af7f8e1447ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    rating: "4.9",
    time: "58min",
    name: "Myth Restro",
    available: "Yes",
  }, {
    img: "https://images.unsplash.com/photo-1502998070258-dc1338445ac2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc3RhdXJhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    rating: "4.9",
    time: "58min",
    name: "Western Hill",
    available: "Yes",
  }, {
    img: "https://images.unsplash.com/photo-1540224769541-7e6e20a42330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHJlc3RhdXJhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    rating: "3.9",
    time: "58min",
    name: "Chiness Kit",
    available: "Yes",
  }, {
    img: "https://images.unsplash.com/photo-1567159644489-23dad666da5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHJlc3RhdXJhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    rating: "4.9",
    time: "58min",
    name: "Posto",
    available: "Yes",
  },
]


export default { wines, cocktails, awards, products, resturents };
