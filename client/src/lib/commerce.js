import Commerce from '@chec/commerce.js';

let commerceKey;
if (process.env.NODE_ENV !== 'production') {
  commerceKey = process.env.REACT_APP_CHEC_PUBLIC_KEY;
} else {
  commerceKey = process.env.CHEC_PUBLIC_KEY;
}
export const commerce = new Commerce(commerceKey);
