import { Spin, Alert } from 'antd';

const Spinner = () => (
  <Spin tip='Loading...' data-testid='test-spinner'>
    <Alert
      message='Loading...'
      description='Data is coming in a moment'
      type='info'
    />
  </Spin>
);
export default Spinner;
