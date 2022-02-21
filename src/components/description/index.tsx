import { Descriptions, Image } from 'antd';
import { useEffect, useState } from 'react';

type DescriptionProps = {
  data: any;
  key: number;
};

const Description = ({ data }: DescriptionProps) => {
  const [descriptionImage, setDescriptionImage] = useState<string>('');
  const IMAGE_PATH = data?.sprites.other['official-artwork'].front_default;
  useEffect(() => {
    function loadImage() {
      if (!localStorage.getItem(`description-img-${IMAGE_PATH}`)) {
        setDescriptionImage(IMAGE_PATH + '');
        localStorage.setItem(
          `description-img-${IMAGE_PATH}`,
          IMAGE_PATH + ''
        );
      } else {
        setDescriptionImage(
          localStorage.getItem(`description-img-${IMAGE_PATH}`) +
            ''
        );
      }
    }
    loadImage();
  }, []);

  console.log(data);
  return (
    <Descriptions title='Pokemon Info'>
      <Descriptions.Item label='IMAGE'>
        <Image
          src={descriptionImage}
          width={200}
          alt='I am image alternative...'
        />
      </Descriptions.Item>
      <Descriptions.Item label='NAME'>{data.name}</Descriptions.Item>
      {data &&
        data.stats.map((val: any, index: number) => (
          <Descriptions.Item label={val.stat.name.toUpperCase()} key={index}>
            {val.base_stat}
          </Descriptions.Item>
        ))}
    </Descriptions>
  );
};

export default Description;
