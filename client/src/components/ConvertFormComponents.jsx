import React, {useEffect, useState} from 'react'
import axios from "axios";

const ConvertFormComponents = () => {

    const [date , setDate] = useState("");
    const [sourceCurrency, setSourceCurrency] = useState("");
    const [targetCurrency, setTargetCurrency] = useState("");
    const [amountInSourceCurrency, setAmountInSourceCurrency] = useState(0);
    const [amountInTargetCurrency, setAmountInTargetCurrency] = useState(0);
    const [currncyNames, setCurrencyNames] = useState([]);

    const handleSubmit= async(e)=>{
        e.preventDefault();
        try {
            const responce = await axios.get("http://localhost:5000/convert",
            {
                params:{
                    date,
                    sourceCurrency,
                    targetCurrency,
                    amountInSourceCurrency
        
                },

            });
            setAmountInTargetCurrency(responce.data);

        } catch (err) {
            console.error(err);
            
        }
        // console.log(
        //     // date,
        //     setSourceCurrency,
        //     // targetCurrency,
        //     // amountInSourceCurrency
        // )
        // console.log(sourceCurrency);
    };

    //get all carrency name
    useEffect(()=>{
        const getCurrencyName = async()=>{
            try {
                const responce = await axios.get("http://localhost:5000/getAllCurrencies");
                setCurrencyNames(responce.data);
                
            } catch (error) {
                console.log(error);
            }
        };
        getCurrencyName();

    },[])

  return (
    <section className=' mt-5 flex items-center justify-center flex-col'>
        <form  onSubmit={handleSubmit} 
          className=' w-full lg:w-1/2'>
            <div class="mb-3">
                <label htmlFor={date}
                 class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                <input 
                onChange={(e)=> setDate(e.target.value)}
                type="Date" id={date} name={date} 
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" 
                placeholder="" 
                required
                 />
            </div>
            <div class="mb-3">
                <label 
                htmlFor={sourceCurrency} 
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Source Currency
                </label>
                <select 
                 onChange={(e)=> setSourceCurrency(e.target.value)}
                 id={sourceCurrency}
                 name={sourceCurrency} 
                 value={sourceCurrency} 
                 class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" 
                // required 
                ><option value="">Select Source Currency</option>
                {Object.keys(currncyNames).map((currncy)=>(
                    <option className='p-1' key={currncy} value={currncy}>
                        {currncyNames[currncy]}
                    </option>
                ))}
                </select>
            </div>
            <div class="mb-3">
                <label htmlFor={targetCurrency} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Target Currency
                </label>
                <select 
                onChange={(e)=> setTargetCurrency(e.target.value)}
                id={targetCurrency}  name={targetCurrency} value={targetCurrency} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" 
                //required 
                ><option value="">Select Target Currency</option>
                {Object.keys(currncyNames).map((currncy)=>(
                    <option className='p-1' key={currncy} value={currncy}>
                        {currncyNames[currncy]}
                    </option>
                ))}
                </select>
            </div>
            <div class="mb-3">
                <label htmlFor={amountInSourceCurrency} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Amount in source currency
                </label>
                <input 
                    onChange={(e)=>setAmountInSourceCurrency(e.target.value)}
                    type="text" 
                    id={amountInSourceCurrency} 
                    name={amountInSourceCurrency} 
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light" 
                    placeholder="Amount in source currency" 
                    required 
                />
            </div>
            <button
            type='' className='bg-green-700 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-xl '

            > 
              Get the target Currency</button>
        </form>
        {amountInTargetCurrency}
    </section>
  )
}

export default ConvertFormComponents