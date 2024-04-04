import express from 'express';
import paymentRouter from './routers/payment.router.js';
import cors from 'cors';

const app = express();
app.use(cors());
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/payments', paymentRouter);
const PORT = process.env.PORT || 8080;

app.use('/', (_req, res) => {
  res.send('<h1>Server is working.</h1>');
});

app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
