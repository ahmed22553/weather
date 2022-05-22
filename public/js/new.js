console.log('HELLO')

let form = document.getElementById('myForm')
form.addEventListener('submit',(e)=>{
e.preventDefault()
countryFunction()
})
// async --> function return promise
// await --> wait until promoise finsih
let countryFunction = async() =>{
    try{

        const country = document.getElementById('country').value
        const res = await fetch('http://localhost:3000/weather?address=' + country)
        const data = await res.json()
        console.log(data)
        if(data.error){
            document.getElementById('error').innerText = data.error
            document.getElementById('location').innerText = ''
            document.getElementById('forecast').innerText =''
        }
        else {
            document.getElementById('location').innerText = data.location
            document.getElementById('forecast').innerText = data.forecast
            document.getElementById('error').innerText = ''
        }
    }
    catch(e){
        console.log(e)
    }
}

console.log('test')