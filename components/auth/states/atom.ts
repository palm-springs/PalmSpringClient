// 임시로 코드 유지
// import axios from 'axios';
// import { atom } from 'recoil';

// import client from '@/api';

// export const accessTokenState = atom<string | null>({
//   key: 'accessTokenState',
//   default: null,
//   effects_UNSTABLE: [
//     ({ onSet }) => {
//       onSet((newAccessToken) => {
//         axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
//         client.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
//       });
//     },
//   ],
// });
