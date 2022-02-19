import './cards.css';
import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { CARDIMAGE, AVATARIMAGE } from '../../utils';

type CardsProps = {
  name: string;
  url: string;
  index: number;
};

const { Meta } = Card;

const Cards = ({ name, url, index }: CardsProps) => {
  return (
    <div className='cards-spacing' data-testid='test-cards'>
      <Card cover={<img alt='example' src={CARDIMAGE} />}>
        <Meta
          avatar={<Avatar src={AVATARIMAGE} />}
          title={name}
          description={<Link to={`/about/${index}`}>Know More</Link>}
        />
      </Card>
    </div>
  );
};

export default Cards;
