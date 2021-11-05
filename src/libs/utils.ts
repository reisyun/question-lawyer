/**
 * 첫번째 글자를 대문자로 변경
 *
 * @param str
 */
export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

/**
 * 받아온 수 만큼 배열에 더미 추가
 *
 * @param length
 */
export const range = (length: number) => Array.from({ length }, (_, i) => i);

/**
 * [얕은 비교] 배열 내 값의 중복을 제거
 *
 * @param array
 */
export function unique<T>(array: Array<T>): Array<T> {
  const uniq = new Set<T>();
  array.map((data: T) => uniq.add(data));

  return [...uniq];
}

/**
 * `rAF`를 이용해 스크롤 이벤트 최적화
 *
 * @param callback
 */
export const throttle = (callback: () => void) => {
  let ticking = false;

  if (!ticking) {
    requestAnimationFrame(() => {
      ticking = false;
      callback();
    });

    ticking = true;
  }
};

/**
 * 이메일 유효성 검사
 */
export const isEmail = (value: string) => {
  // eslint-disable-next-line no-useless-escape
  const regExp =
    /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  return regExp.test(value);
};

/**
 * 전화번호 유효성 검사
 */
export const isPhoneNumber = (value: string) => {
  // eslint-disable-next-line no-useless-escape
  const regExp = /^[0-9\b -]{0,13}$/;
  return regExp.test(value);
};

/**
 * 모바일인지 확인하는 정규식
 */
export const isMobile = /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);
