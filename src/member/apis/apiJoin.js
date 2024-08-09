import apiRequest from '../../commons/libs/apiRequest';

export const apiJoin = (
  form, //회원가입쪽 검증하는 부분
) =>
  new Promise((resolve, reject) => {
    //프로미스 형태로 가공!
    apiRequest('/account', 'POST', form) //account 주소로
      .then((res) => {
        if (res.status !== 201) {
          // 검증 실패
          reject(res.data);
          return;
        }
        resolve(res.data); //성공
      })
      .catch((err) => reject(err));
  });
