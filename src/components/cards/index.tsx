import './cards.css';
import { Card, Avatar, Tooltip, Button } from 'antd';
import { Link } from 'react-router-dom';
import { ReactElement, ReactFragment } from 'react';

type CardsProps = {
  name: string;
  index: number;
  mainImage: string;
  avatarImage: string;
};

const { Meta } = Card;

const Cards: ReactFragment = ({
  name,
  index,
  mainImage,
  avatarImage,
}: CardsProps) => {
  return (
    <div className='cards-spacing' data-testid='test-cards'>
      <Tooltip placement='topLeft' title={name} data-testid='test-tip'>
        <Card
          cover={<img alt='example' src={mainImage} />}
          data-testid='test-card'
        >
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
