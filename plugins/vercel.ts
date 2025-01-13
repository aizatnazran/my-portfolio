import { inject } from '@vercel/analytics';

export default () => {
  inject({
    debug: false, 
  });
};
