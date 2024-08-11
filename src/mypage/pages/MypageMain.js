import React from 'react';
import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';

const MypageMain = () => {
  return (
    <MemberOnlyContainer>
      <h1>마이페이지 프로필 이미지구간
        예약내역 리뷰[게시판형태] 프로필이미지 수정
      </h1>
    </MemberOnlyContainer>
  );
};

export default React.memo(MypageMain);