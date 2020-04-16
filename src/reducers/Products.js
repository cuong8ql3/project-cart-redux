var initialState = [
    {
        id: 1,
        name: 'Iphone 7 plus',
        img: 'https://www.viettablet.com/images/thumbnails/480/516/detailed/27/iphone-7-hinh-dai-dien-vtl.jpg',
        desc: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        raiting: 4
    },
    {
        id: 2,
        name: 'Samsung Galaxy S7',
        img: 'https://www.viettablet.com/images/detailed/26/samsung-galaxy-s7-edge-cu-like-new-99.png',
        desc: 'Sản phẩm do Samsung sản xuất',
        price: 400,
        inventory: 8,
        raiting: 5
    },
    {
        id: 3,
        name: 'Oppo F1s',
        img: 'https://www.viettablet.com/images/thumbnails/480/517/detailed/40/oppo-reno-10x-zoom-chinh-hang-xanh-1.png',
        desc: 'Sản phẩm do Oppo sản xuất',
        price: 450,
        inventory: 5,
        raiting: 3
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
};

export default products;

