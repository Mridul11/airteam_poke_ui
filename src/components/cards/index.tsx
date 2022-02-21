import './cards.css';
import { Card, Avatar, Tooltip, Button } from 'antd';
import { Link } from 'react-router-dom';

type CardsProps = {
  name: string;
  url: string;
  index: number;
  mainImage: string;
  avatarImage: string;
};

const { Meta } = Card;

const Cards = ({ name, url, index, mainImage, avatarImage }: CardsProps) => {

  return (
    <div className='cards-spacing' data-testid='test-cards'>
      <Tooltip placement='topLeft' title={name}>
        <Card cover={<img alt='example' src={mainImage} />} className='test-card'>
          <Meta
            avatar={<Avatar src={avatarImage} />}
            title={name.toUpperCase()}
            description={
              <Button data-testid='test-knowmorebtn'>
                <Link to={`/about/${index}`}>Know More</Link>
              </Button>
            }
          />
        </Card>
      </Tooltip>
    </div>
  );
};

export default Cards;
