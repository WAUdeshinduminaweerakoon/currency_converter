const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

//middle wares
app.use(express.json());
app.use(cors());

//all currences
app.get("/getAllCurrencies",async (req, res)=>{
    const nameURL =`https://openexchangerates.org/api/currencies.json?
    app_id=9db4ee8133ce45a691c87ff9c26cf3b8`;
 
   
    try {
        const namesResponce = await axios.get(nameURL);
        const nameData = namesResponce.data;
    
        return res.json(nameData);
        
    } catch (error) {
        console.log(error)
        
    }
});

app.get("/convert", async (req, res)=>{
    const { date, sourceCurrency, targetCurrency, amountInSourceCurrency} = 
    req.query;

    try {
        const dataUrl =`https://openexchangerates.org/api/historical/${date}.json?app_id=9db4ee8133ce45a691c87ff9c26cf3b8`;
        const dataResponce =await axios.get(dataUrl);
        const rates = dataResponce.data.rates;

        //rates
        const sourceRate = rates[sourceCurrency];
        const targetRate = rates[targetCurrency];

        // final target val

        const targetAmount = (targetRate/sourceRate)*amountInSourceCurrency;
        return res.json(targetAmount);

        
    } catch (err) {
        console.error(err);
    }
});

//listen to a port
app.listen(5000, ()=>{
    console.log("SERVER STARTED");
})