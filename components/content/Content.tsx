// content 받아와서 넣은 예정

'use client';

import React from 'react';
import parse from 'html-react-parser';
import styled from 'styled-components';

const Content = () => {
  const htmlString = `<h1>안녕하세요</h1><h2>이것은 이시연에게 전달하는 내용입니다.</h2><p><em>하하하하하하하하</em> <strong>메롱</strong> 메에에에롱 <s>얍얍!!!!!!!!</s></p><p><em>하이이이이이이이이이잉</em></p><p>호로로로로로로로로로<strong>롤</strong>롤😊</p><h3>하하</h3><h4>히히히히히히히히히히히히히히히ㅛ</h4><p>
  <a target="_blank" rel="noopener noreferrer" class="my-custom-class my-custom-class" href="https://www.google.com/search?rlz=1C5CHFA_enKR1048KR1048&amp;sxsrf=AB5stBh8jcuMMGP9X3yhGg19wCm5BNMAdg:1688467939731&amp;q=%EB%A9%94%EB%A1%B1&amp;tbm=isch&amp;sa=X&amp;sqi=2&amp;ved=2ahUKEwj_5Yue8fT_AhUWMd4KHfiIAqMQ0pQJegQIDBAB&amp;biw=1440&amp;bih=789&amp;dpr=2">메롱</a></p><p></p><p></p><p></p><p></p>`;

  return <ContentContainer>{parse(htmlString)}</ContentContainer>;
};

export default Content;

const ContentContainer = styled.section`
  margin: 8.4rem 0 8rem;
  margin-bottom: 8rem;
  width: 100%;
`;
