import { Descriptions } from 'antd';

type DescriptionProps = {
  data: 'object';
};

const Description = (props: DescriptionProps) => (
  <Descriptions title='Pokemon Info'>
    <Descriptions.Item label='Name'>{'data.forms[0].name'}</Descriptions.Item>
    <Descriptions.Item label='Image'>1810000000</Descriptions.Item>
    <Descriptions.Item label='HP'>Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label='Attack'>empty</Descriptions.Item>
    <Descriptions.Item label='Defence'>empty</Descriptions.Item>
    <Descriptions.Item label='Speed'>empty</Descriptions.Item>
  </Descriptions>
);

export default Description;
