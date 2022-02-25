import {Skeleton, Card, Avatar} from 'antd';
import {useState} from 'react';

const {Meta} = Card;

const LoaderCards = () => {
  const [loader] = useState(true);

  return (
    <div data-testid='test-loadercard'>
      <Card style={{width: 300, marginTop: 16}} loading={loader}>
        <Meta
          avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
          title='Card title'
          description='This is the description'
        />
      </Card>

      <Card style={{width: 300, marginTop: 16}}>
        <Skeleton loading={loader} avatar active>
          <Meta
            avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
            title='Card title'
            description='This is the description'
          />
        </Skeleton>
      </Card>
    </div>
  );
};

export default LoaderCards;
