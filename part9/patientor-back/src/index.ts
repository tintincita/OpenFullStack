import express from 'express';
import cors from 'cors';
import patientRouter from './routes/patients';
import diagnosisRouter from './routes/diagnosis';

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
    console.log('a ping, there has been');
    res.send('pong')
});

app.use('/api/patients', patientRouter);
app.use('/api/diagnoses', diagnosisRouter);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})