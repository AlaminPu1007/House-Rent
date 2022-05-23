/**
 * create an dummy json file to get image, description
 * for specific post,
 * later it will come through data base
 */
//bring image
import FirstImage from '../../assests/image/first.jpg';
import FourthImage from '../../assests/image/fourth.jpg';
import SecondImage from '../../assests/image/second.jpg';
import ThirdImage from '../../assests/image/third.jpg';
const DummyData = [
  {
    id: 1,
    title: 'dummy rent flat',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: FirstImage,
    like: 5,
    rating: 4.5,
    comments: [
      {
        id: 1,
        comment: 'How much is is?',
      },
      {
        id: 2,
        comment: 'dummy comment 1',
      },
      {
        id: 3,
        comment: 'dummy comment 2',
      },
    ],
  },
];

export default DummyData;
