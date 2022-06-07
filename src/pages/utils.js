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

const gamesImages = [
  "https://randomwordgenerator.com/img/picture-generator/55e7d1474e50ac14f1dc8460962e33791c3ad6e04e507440772872dc914bc0_640.jpg",
  "https://randomwordgenerator.com/img/picture-generator/53e3d5424f57ab14f1dc8460962e33791c3ad6e04e507440762e7adc9049c3_640.jpg",
  "https://randomwordgenerator.com/img/picture-generator/54e4dd424354a514f1dc8460962e33791c3ad6e04e5074417d2e72d19e4fcc_640.jpg",
  "https://randomwordgenerator.com/img/picture-generator/53e0d0454c56aa14f1dc8460962e33791c3ad6e04e507441722978d6944fc3_640.jpg",
  "https://randomwordgenerator.com/img/picture-generator/57e4d5464f51a814f1dc8460962e33791c3ad6e04e5074417c2d78d1924fcd_640.jpg",
  "https://randomwordgenerator.com/img/picture-generator/54e5d74b4d51b10ff3d8992cc12c30771037dbf852547941742679d59349_640.jpg",
  "https://randomwordgenerator.com/img/picture-generator/54e1d1444e52ac14f1dc8460962e33791c3ad6e04e50744172277ed0974ac3_640.jpg",
  "https://randomwordgenerator.com/img/picture-generator/55e3d3464a57b10ff3d8992cc12c30771037dbf85254794e7d2b7ed79545_640.jpg",
  "https://randomwordgenerator.com/img/picture-generator/54e7d74b4b5aa814f1dc8460962e33791c3ad6e04e50744172297ed2924cc0_640.png",
  "https://randomwordgenerator.com/img/picture-generator/train-1728537_640.jpg"
]

export const getRandomImage = (option) => {
  if (option === 'avatar') {
    return avatarImages[Math.floor(Math.random() * avatarImages.length)];
  }

  if (option === 'game') {
    return gamesImages[Math.floor(Math.random() * gamesImages.length)]
  }
};

export const checkIfLoggedIn = () => {
  return localStorage.getItem('user');
}
