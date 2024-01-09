// export interface ProductServerData {
//   name: string; // 상품 이름
//   originalPrice: number; // 상품 할인 전 가격
//   discountRate: number; // 상품 할인율
//   discountPrice: number; // 상품 할인 후 가격
//   image: string; // 이미지 url
//   likeTF: boolean; //상품 좋아요 여부
// }

export interface Response<T> {
  message: string;
  code: number;
  data: T;
}
