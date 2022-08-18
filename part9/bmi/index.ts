import express from "express";
import calculateBMI from "./bmiCalculator";

const app = express();

app.get('/hello', (_req: any, res: any) => {
    res.send('Hello FullStack');
})

app.get('/bmi', (req: any, res: any) => {
    console.log(req.query);

    let { height, weight } = req.query

    height = parseInt(height);
    weight = parseInt(weight);

    if (isNaN(weight) || isNaN(height)) {
        res.send({
            error: "malformatted parameters"
        });
    }


    let value = calculateBMI(height, weight, 'test')

    let response = {
        height: height,
        weight: weight,
        bmi: value
    }


    res.send(response)
})

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

})