import Vue from 'vue';

export default Vue.observable({
    navbarVoicesPlusIDS: [
        {
            title: 'Home',
            id:'info',
        },
        {
            title: 'Culinary History',
            id:'food',
        },
        {
            title: 'Our Team',
            id:'reviews',
        },
        {
            title: 'Our Menu',
            id:'prices',
        },
        {
            title: 'Takeout',
            id:'takeout',
        },
        {
            title: 'Bulletin',
            id:'reviews',
        },
        {
            title: 'Reservations',
            id:'bannerbottom',
        },
    ],
    plates: [
        {
            title: "Ahi Salmon Nigiri",
            price: 48
        },
        {
            title: "Umi Masu Salad",
            price: 21
        },
        {
            title: "Temaki With Crab",
            price: 32
        },
        {
            title: "California Rolls",
            price: 22
        }
    ],
    mainPlates: [
        {
            title: "Braised Abalone",
            price: 52
        },
        {
            title: "Twice cooked pork",
            price: 21
        },
        {
            title: "Kung pao Chicken",
            price: 32
        },
        {
            title: "Char siu & sushis",
            price: 48
        }
    ],
    desserts: [
        {
            title: "Chocolate ball cake",
            price: 13
        },
        {
            title: "Lime pie with crust",
            price: 14
        },
        {
            title: "Raspberry pear cake",
            price: 18
        },
        {
            title: "Cafè au lait",
            price: 6
        }
    ]
});