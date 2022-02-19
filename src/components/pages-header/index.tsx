import './pages-header.css';
import { Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PagesHeader() {
  const [selectedKey, selectedKeySet] = useState('1');
  const navigate = useNavigate();

  return (
    <>
      <Header
        style={{
          position: 'sticky',
          zIndex: 1,
          width: '100%',
          marginBottom: 10,
        }}
      >
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={[selectedKey]}
        >
          <Menu.Item
            key='1'
            onClick={() => {
              selectedKeySet('1');
              navigate('/');
            }}
          >
            POKEDEK
          </Menu.Item>
          <Menu.Item
            key='2'
            onClick={() => {
              selectedKeySet('2');
              navigate('/');
            }}
          >
            Home
          </Menu.Item>
        </Menu>
      </Header>
    </>
  );
}
