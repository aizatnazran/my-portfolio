import { inject } from '@vercel/analytics';

export default () => {
  
  if (process.env.VERCEL) {
    inject({
      debug: false,
    });
  }
};
