const getImg = () => {
  const images = [
    // "	https://data.typeracer.com/public/images/avatars/basic-darkblue.svg",
    "	https://data.typeracer.com/public/images/avatars/basic-brown.svg    ",
    // "	https://data.typeracer.com/public/images/avatars/basic-beige.svg ",
    // "https://data.typeracer.com/public/images/avatars/basic-lightgreen.svg",
    // "https://data.typeracer.com/public/images/avatars/basic-green.svg",
    // "https://data.typeracer.com/public/images/avatars/basic-white.svg",
    // "https://data.typeracer.com/public/images/avatars/basic-pink.svg",
  ];
  return images[Math.floor(Math.random() * images.length)];
};
export default getImg;
