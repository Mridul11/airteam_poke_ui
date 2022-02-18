import './cards.css';
import { Card, Avatar } from 'antd';

const CARDIMAGE = `https://images.unsplash.com/photo-1613771404721-1f92d799e49f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80`;
const AVATARIMAGE = `https://images.unsplash.com/photo-1542779283-429940ce8336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`;

type CardsProps = {
  name: string;
  url: string;
};

const { Meta } = Card;

const Cards = ({ name, url }: CardsProps) => {
  return (
    <div className='cards-spacing'>
      <Card cover={<img alt='example' src={CARDIMAGE} />}>
        <Meta
          avatar={<Avatar src={AVATARIMAGE} />}
          title={name}
          description={url}
        />
      </Card>
    </div>
  );
};

export default Cards;
