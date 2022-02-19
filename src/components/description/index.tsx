import { Descriptions, Image } from 'antd';

type DescriptionProps = {
  data: any;
};

const Description = ({ data }: DescriptionProps) => {
  const IMAGE_PATH = data?.sprites.other['official-artwork'].front_default;
  return (
    <Descriptions title='Pokemon Info'>
      <Descriptions.Item label='IMAGE'>
        <Image src={IMAGE_PATH} width={200} alt='Image is somewehere else...' />
      </Descriptions.Item>
      <Descriptions.Item label='NAME'>{data.name}</Descriptions.Item>
      {data &&
        data.stats.map((val: any, index: number) => (
          <>
            <Descriptions.Item label={val.stat.name.toUpperCase()} key={index}>
              {val.base_stat}
            </Descriptions.Item>
          </>
        ))}

      <Descriptions.Item label='Defence'>empty</Descriptions.Item>
      <Descriptions.Item label='Speed'>empty</Descriptions.Item>
    </Descriptions>
  );
};

export default Description;
