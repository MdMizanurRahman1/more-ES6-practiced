const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street: {
            firstLane: '35/A Nilkhet, Dhaka',
            secondLane: '3rd floor',
            third: 'right side'
        },
        postOffice: 40005,
        city: 'Dhaka'
    }
};

console.log(user.address.city);