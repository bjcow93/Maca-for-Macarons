// export const fetchMacarons = () => (
//   $.ajax({
//     method: 'GET',
//     url: 'api/macarons',
//   })
// );

// export const fetchMacarons = () =>

// This is the point at which I would have grabbed the data from the backend with Rails, but instead of dive into that
// and overcomplicate this challenge, I decided to seed some data below.

export const fetchMacarons = () =>
  Promise.resolve({
    1: {
      id: 1,
      name: "Custom Gift Box",
      type: "Assorted Flavors",
      description:
        "This 16 piece gift box is perfect for birthdays, anniversaries or just for yourself! Customize your flavors or pick from our three gift boxes!...We offer pre-packed Citrus, Floral or Classic themed boxes. We offer next day delivery for free with all custom gift boxes!",
      price: "55",
      image_url: "assets/images/custom_gift_box.png"
    },
    2: {
      id: 2,
      name: "Vanilla Earl Grey Macaron",
      type: "1 piece",
      description:
        "Our most popular flavor! Each macaron is filled with earl grey ganache....(more)",
      price: "3.75",
      image_url: "assets/images/vanilla.png"
    },
    3: {
      id: 3,
      name: "Rose Macarons",
      type: "1 piece",
      description:
        "Our most romantic flavor! Filled with the lightest, sweetest rose ganache, this macaron will definitely be a pleasant surprise....(more)",
      price: "3.75",
      image_url: "assets/images/rose.png"
    }
  });
