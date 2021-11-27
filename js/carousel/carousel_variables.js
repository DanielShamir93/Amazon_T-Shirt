let carouselStart = 0;
let carouselCurrPage = 1;
let carouselPageAmount = 1;
const CAROUSEL_AMOUNT = 8;

const stars = {
    0.5:    { style: 'background-position: -278px -120px;' },
    1:      { style: 'background-position: -390px -230px;' },
    1.5:    { style: 'background-position: -293px -206px;' },
    2:      { style: 'background-position: -181px -76px;' },
    2.5:    { style: 'background-position: -99px -68px;' },
    3:      { style: 'background-position: -84px -48px;' },
    3.5:    { style: 'background-position: -181px -56px;' },
    4:      { style: 'background-position: -84px -8px;' },
    4.5:    { style: 'background-position: -84px -28px;' },
    5:      { style: 'background-position: -166px -36px;' },
}

const carouselItems = [
    {
        src: './assets/images/items/31ATAlUkMIL-_AC_SR160-200_.jpg',
        title: 'I\'m thinking - T-Shirt',
        stars: stars[3.5],
        global_rating: 2,
        price: (Math.random() * 100 + 1).toFixed(2),
        shipping_price: (Math.random() * 100 + 1).toFixed(2)
    },
    {
        src: './assets/images/items/31KozAwP69L-_AC_SR160-200_.jpg',
        title: 'sudo apt get install - T-Shirt',
        stars: stars[5],
        global_rating: 1,
        price: (Math.random() * 100 + 1).toFixed(2),
        shipping_price: (Math.random() * 100 + 1).toFixed(2)
    },
    {
        src: './assets/images/items/31KSPlqgNdL-_AC_SR160-200_.jpg',
        title: '/dev/null - T-Shirt',
        stars: stars[5],
        global_rating: 3,
        price: (Math.random() * 100 + 1).toFixed(2),
        shipping_price: (Math.random() * 100 + 1).toFixed(2)
    },
    {
        src: './assets/images/items/31lRIJJAAgL-_AC_SR160-200_.jpg',
        title: 'There is no cloud - T-Shirt',
        stars: stars[3.5],
        global_rating: 1,
        price: (Math.random() * 100 + 1).toFixed(2),
        shipping_price: (Math.random() * 100 + 1).toFixed(2)
    },
    {
        src: './assets/images/items/31s2OPfSNGL-_AC_SR160-200_.jpg',
        title: 'There\'s no place like 127.0.0.1 - T-Shirt',
        stars: stars[2.5],
        global_rating: 1,
        price: (Math.random() * 100 + 1).toFixed(2),
        shipping_price: (Math.random() * 100 + 1).toFixed(2)
    },
    {
        src: './assets/images/items/31w6K06sUeL-_AC_SR160-200_.jpg',
        title: '/dev/null white - T-Shirt',
        stars: 0,
        global_rating: 1,
        price: (Math.random() * 100 + 1).toFixed(2),
        shipping_price: (Math.random() * 100 + 1).toFixed(2)
    },
    {
        src: './assets/images/items/31XWEaFekdS-_AC_SR160-200_.jpg',
        title: 'ascii symbols - T-Shirt',
        stars: stars[1.5],
        global_rating: 1,
        price: (Math.random() * 100 + 1).toFixed(2),
        shipping_price: (Math.random() * 100 + 1).toFixed(2)
    },
    {
        src: './assets/images/items/41-8DC43a4L-_AC_SR160-200_.jpg',
        title: 'Running code is my cardio - T-Shirt',
        stars: 0,
        global_rating: 1,
        price: (Math.random() * 100 + 1).toFixed(2),
        shipping_price: (Math.random() * 100 + 1).toFixed(2)
    },
    {
        src: './assets/images/items/41aBXsQ-tAL-_AC_SR160-200_.jpg',
        title: 'Devops even sysadmins need heros - T-Shirt',
        stars: stars[5],
        global_rating: 3,
        price: (Math.random() * 100 + 1).toFixed(2),
        shipping_price: (Math.random() * 100 + 1).toFixed(2)
    },
    {
        src: './assets/images/items/41bp-u7XlRL-_AC_SR160-200_.jpg',
        title: 'Happy sysadmin - T-Shirt',
        stars: stars[5],
        global_rating: 4,
        price: (Math.random() * 100 + 1).toFixed(2),
        shipping_price: (Math.random() * 100 + 1).toFixed(2)
    },
    {
        src: './assets/images/items/41J-1EFqrkL-_AC_SR160-200_.jpg',
        title: 'Sysadmins because even developers need heros - T-Shirt',
        stars: stars[4.5],
        global_rating: 2,
        price: (Math.random() * 100 + 1).toFixed(2),
        shipping_price: (Math.random() * 100 + 1).toFixed(2)
    },
    {
        src: './assets/images/items/41J6PrPd76L-_AC_SR160-200_.jpg',
        title: 'sudo apt-get install coffee - T-Shirt',
        stars: stars[3],
        global_rating: 2,
        price: (Math.random() * 100 + 1).toFixed(2),
        shipping_price: (Math.random() * 100 + 1).toFixed(2)
    },
    {
        src: './assets/images/items/61bvMLhdamS-_AC_UL160_SR160-160_.jpg',
        title: 'I am hero because you built something - T-Shirt',
        stars: stars[2],
        global_rating: 1,
        price: (Math.random() * 100 + 1).toFixed(2),
        shipping_price: (Math.random() * 100 + 1).toFixed(2)
    },
    {
        src: './assets/images/items/61mUuuMjcES-_AC_UL160_SR160-160_.jpg',
        title: 'code - T-Shirt',
        stars: stars[2],
        global_rating: 1,
        price: (Math.random() * 100 + 1).toFixed(2),
        shipping_price: (Math.random() * 100 + 1).toFixed(2)
    },
    {
        src: './assets/images/items/61u08eELvVS-_AC_UL160_SR160-160_.jpg',
        title: 'You destroyed me - T-Shirt',
        stars: stars[5],
        global_rating: 4,
        price: (Math.random() * 100 + 1).toFixed(2),
        shipping_price: (Math.random() * 100 + 1).toFixed(2)
    },
    {
        src: './assets/images/items/71emPiYYJXL-_AC_UL160_SR160-160_.jpg',
        title: 'There\'s no place like 127.0.0.1 - T-Shirt',
        stars: stars[5],
        global_rating: 1,
        price: (Math.random() * 100 + 1).toFixed(2),
        shipping_price: (Math.random() * 100 + 1).toFixed(2)
    },
    {
        src: './assets/images/items/71JLgApJDrL-_AC_UL160_SR160-160_.jpg',
        title: 'Engineer - T-Shirt',
        stars: stars[3],
        global_rating: 2,
        price: (Math.random() * 100 + 1).toFixed(2),
        shipping_price: (Math.random() * 100 + 1).toFixed(2)
    },
    {
        src: './assets/images/items/71Of9eTD6mL-_AC_UL160_SR160-160_.jpg',
        title: 'LT.Pro - T-Shirt',
        stars: stars[5],
        global_rating: 2,
        price: (Math.random() * 100 + 1).toFixed(2),
        shipping_price: (Math.random() * 100 + 1).toFixed(2)
    },
    {
        src: './assets/images/items/71r7q0fv10L-_AC_UL160_SR160-160_.jpg',
        title: 'Code joke - T-Shirt',
        stars: stars[0.5],
        global_rating: 1,
        price: (Math.random() * 100 + 1).toFixed(2),
        shipping_price: (Math.random() * 100 + 1).toFixed(2)
    },
    {
        src: './assets/images/items/71SuDHMZ5gL._AC_UL480_SR480,480_.jpg',
        title: 'Programmer will ctrl-save the world - T-Shirt',
        stars: 0,
        global_rating: 1,
        price: (Math.random() * 100 + 1).toFixed(2),
        shipping_price: (Math.random() * 100 + 1).toFixed(2)
    },
    {
        src: './assets/images/items/71tcB8XdZ8L-_AC_UL160_SR160-160_.jpg',
        title: 'Hacker - T-Shirt',
        stars: stars[5],
        global_rating: 3,
        price: (Math.random() * 100 + 1).toFixed(2),
        shipping_price: (Math.random() * 100 + 1).toFixed(2)
    },
    {
        src: './assets/images/items/313gwi00WtL-_AC_SR160-200_.jpg',
        title: 'Sudo apt rm -rf - T-Shirt',
        stars: stars[2.5],
        global_rating: 1,
        price: (Math.random() * 100 + 1).toFixed(2),
        shipping_price: (Math.random() * 100 + 1).toFixed(2)
    },
    {
        src: './assets/images/items/713mKTazWmL._AC_UL320_SR320,320_.jpg',
        title: 'Binary counting - T-Shirt',
        stars: stars[5],
        global_rating: 1,
        price: (Math.random() * 100 + 1).toFixed(2),
        shipping_price: (Math.random() * 100 + 1).toFixed(2)
    },
];


