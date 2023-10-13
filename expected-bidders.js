const incomingBidders = [
  {
    bidder: "Ruben",
  },
  {
    bidder: "Cardi",
  },
  {
    bidder: "Hollie",
  },
  {
    bidder: "Kimmi",
  },
  {
    bidder: "amos",
  },
];
const expectedBidders = ["Ruben", "Cardi", "Hollie", "Kimmi"];

// const unexpectedBidders = incomingBidders.filter(
//   (bidder) => !expectedBidders.includes(bidder)
// );

// const unexpectedBidders = incomingBidders.filter((obj) => {
//   //   console.log(obj);

//   !expectedBidders.includes(obj.bidder);
// });

const unexpectedBidders = incomingBidders.filter(
    obj => !expectedBidders.includes(obj.bidder)
  );
console.log(unexpectedBidders);
