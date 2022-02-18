import './pages-header.css';
import { PageHeader } from 'antd';

export default function PagesHeader() {
  return (
    <div className='site-page-header-ghost-wrapper center-header'>
      <PageHeader
        ghost={false}
        title='POKEMONDEK'
        subTitle='App to show pokemon and their power'
      ></PageHeader>
    </div>
  );
}
