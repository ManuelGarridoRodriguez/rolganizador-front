const avatarImages = [
  "https://avatars.dicebear.com/v2/avataaars/1de81d9efc46a59c1076725a39acca47.svg",
  "https://avatars.dicebear.com/v2/avataaars/648750f5eb543bc0a401e51685dd8831.svg",
  "https://avatars.dicebear.com/v2/avataaars/12a36704d20718fc8c7283d54e04d9b6.svg",
  "https://avatars.dicebear.com/v2/avataaars/9bd173770e25c70479bba9810bb3cf29.svg",
  "https://avatars.dicebear.com/v2/avataaars/3e47124c6cea7b36821d26530549c7c5.svg",
  "https://avatars.dicebear.com/v2/avataaars/ae60b39e850772e672ec94ab0de8c0f4.svg",
  "https://avatars.dicebear.com/v2/avataaars/30ebe81dd600fb9f11f0185635e55350.svg",
  "https://avatars.dicebear.com/v2/avataaars/705fe41ea2757901683187e8d00f3496.svg",
  "https://avatars.dicebear.com/v2/avataaars/62151f5ae092fdba52988a04ec7f1581.svg",
  "https://avatars.dicebear.com/v2/avataaars/da29a503eb4658e2f4211999df1cb921.svg",
];

export const getRandomImage = (option) => {
  if (option === 'avatar') {
    return avatarImages[Math.floor(Math.random() * avatarImages.length)];
  }
};

export const checkIfLoggedIn = () => {
  console.log('local', localStorage.getItem('user'))
  return localStorage.getItem('user');
}
