//bring all imge
import FirstImage from '../../assests/image/first.jpg';

const DummyData = () => {
  const data = [
    {
      id: 1,
      title: 'dummy rent flat',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: FirstImage,
      like: 5,
      rating: 4.5,
      totalComments: 5,
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
  return data;
};

export default DummyData;
