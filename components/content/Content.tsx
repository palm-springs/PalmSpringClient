// content 받아와서 넣은 예정

'use client';

import React from 'react';
import parse from 'html-react-parser';
import styled from 'styled-components';

const Content = () => {
  const htmlString = `<h1>H1입니다</h1><p>그냥 텍스트</p><p><s>스트라이크</s></p><p><em>이텔릭</em></p><p><strong>볼드</strong></p><ul><li><p>리스트</p></li><li><p>리스트</p><ul><li><p>위치바꿈</p></li></ul></li></ul><ol><li><p>오더 리스트</p></li><li><p>오더리스트</p><ol><li><p>오더리스트 위치바꿈</p></li></ol></li></ol><blockquote><p>아ㅓㄹ아너라ㅣㄴ어ㅏㅣㄹㄴ아ㅓㄹㄴ아ㅣㅓ라ㅣㄴ얼</p></blockquote><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/palm-springs/PalmSpringClient">https://github.com/palm-springs/PalmSpringClient</a></p><p>좀 지리는데?</p><h2>와 및니</h2><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/palm-springs/PalmSpringClient">링크 텍스트</a>에 넣기</p><pre><code>let palm = truenfunction(){n}n</code></pre><p></p><p></p>`;

  // return <ContentContainer dangerouslySetInnerHTML={{ __html: htmlString }}></ContentContainer>;
  return <ContentContainer>{parse(htmlString)}</ContentContainer>;
};

export default Content;

const ContentContainer = styled.section`
  margin: 8.4rem 0 8rem;
  margin-bottom: 8rem;
  width: 100%;
`;
