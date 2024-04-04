import dotenv from 'dotenv';

dotenv.config();

export default {
  stripe: {
    key: process.env.STRIPE_KEY,
  },
};
