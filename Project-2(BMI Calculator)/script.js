// const form = document.querySelector('form')             // Here we choose to where we have to perform our event. here we have to perform our event on Submit Button.

// form.addEventListener('submit', function(e){           // here we just create one 'submit
//     e.preventDefault()

//     const height = parseInt(document.querySelector("#Height").value)         // here we use parseInt to convet the values into Integer.
//     const weight = parseInt(document.querySelector("#Weight").value)         
//     const results = document.querySelector("#results")         

//     if (height === '' || height < 0 || isNaN(height)) {
//         results.innerHTML = `Plese give a valid height ${height}`
//     }   else if (weight === '' || weight < 0 || isNaN(weight)) {
//         results.innerHTML = `Plese give a valid weight ${weight}`
//     } else{

//     }
// })



const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height= parseInt(document.querySelector('#Height').value)
    const weight= parseInt(document.querySelector('#Weight').value)
    const result = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`
    }

    // if('bmi < 18.6' ){
    //     result.innerHTML = 'You are UnderWeight'
    // } else if ('bmi < 18.6' || 'bmi > 24.9'){
    //     result.innerHTML = "You are normal Range"
    // } else('bmi > 24.9'){
    //     result.innerHTML = "You are OverWeight"
    // }
    
})