import parseArguments from './parseArguments'

  const calculateBMI = (a: number, b: number, printText: string) => {
    a = a/100
    const bmi = b / ( a * a)
    
    let category = ""

    bmi < 18.5
    ?  category = "underweight"
    : category = "normal"

    bmi > 24.9
    ? category = "overweight"
    : category = category

    console.log(printText,  category);
    return category
  }
  
  try {
    const { value1, value2 } = parseArguments(process.argv);
    calculateBMI(value1, value2, `BMI for height ${value1} and weight ${value2} is:`);
  } catch (error: unknown) {
    let errorMessage = 'Something bad happened.'
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
  }

  export default calculateBMI