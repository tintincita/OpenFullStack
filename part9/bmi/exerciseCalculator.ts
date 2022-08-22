interface Result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    average: number
}

type Rating = 1 | 2 | 3

interface EntryData {
    target: number,
    exercise: number[]
}

const parseArgs = (args: Array<string>): EntryData => {
    let result: EntryData

    if (args.length < 3) throw new Error('Not enough arguments');
    let data = args.slice(2)
    let numberData = data.map((x) => parseFloat(x))

    if (isNaN(numberData.reduce((acc, x) => acc * x, 1))) {
        throw new Error('Provided values were not numbers!')
    }
    
    result = {
        target: numberData[0],
        exercise: numberData.slice(1)
    }

    return result
}

const calculateExercises = (entry: EntryData): Result => {
    let result: Result
    console.log(entry)

    result = {
        periodLength: entry.exercise.length,
        trainingDays: entry.exercise.filter((x) => x != 0).length,
        average: entry.exercise.reduce((a,b)=> a+b, 0) / entry.exercise.length,
        success: entry.exercise.reduce((a,b)=> a+b, 0) / entry.exercise.length >= entry.target
    }
    console.log(result);
    
    return result
}

try {
    const input = parseArgs(process.argv);
    calculateExercises(input);
} catch (error: unknown) {
    let errorMessage = 'Something bad happened.'
    if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
}