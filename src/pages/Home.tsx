import React from 'react';
import Header from '@/components/Header';
import Select from '@/components/Select';
import NavButton from '@/components/NavButton';

function Home() {
  return (
    <>
      <Header />
      <Select items={['음주운전', '음주측정거부', '음주삼진아웃', '기타(무면허운전 등)']} />
      <NavButton />
    </>
  );
}

export default Home;
