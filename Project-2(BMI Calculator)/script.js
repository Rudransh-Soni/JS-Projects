const form = document.querySelector('form')     // Here we choose to where we have to perform our event. here we have to perform our event on Submit Button.

form.addEventListener('submit', function(e){     // here we just create one 'submit'.
    e.preventDefault()

    const height= parseInt(document.querySelector('#Height').value)         // here we use parseInt to convet the values into Integer.
    const weight= parseInt(document.querySelector('#Weight').value)         // here we use parseInt to convet the values into Integer.
    const result = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){               // here we just paas the condition of 'height' 
        result.innerHTML = `Please give a valid height ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)){        // here we just paas the condition of 'weight'
        result.innerHTML = `Please give a valid weight ${weight}`
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);        // here we give the gormula of BMI
        result.innerHTML = `<span>${bmi}</span>`
    }

    // if('bmi < 18.6' ){                           // Try cases.
    //     result.innerHTML = 'You are UnderWeight'
    // } else if ('bmi < 18.6' || 'bmi > 24.9'){
    //     result.innerHTML = "You are normal Range"
    // } else('bmi > 24.9'){
    //     result.innerHTML = "You are OverWeight"
    // }
    
})