const express = require("express");
const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Ok");
})
app.post("/bfhl", (req, res) => {
  if(!req.body || !req.body.data)
  {
    res.send("Data Required");
    return;
  }
  const obj = req.body.data;
  const getData = getObj(obj);
  res.status(200).send(getData);
 
});

function getObj(obj)
{
  const is_success = true;
  const user_id = "Tushar_Harwani_02122001";
  const email = "rocktush20@gmail.com";
  const roll_number = "12014725";
  let arr = [];
  let aplhabets = [];
  for (const key in obj) {
   
    let data = obj[key];
    if(data[0] >= 'a' && data[0] <= 'z')
    {
      aplhabets.push(toUpperCase(data));
    }
    else
    {
      arr.push(parseInt(data));
    }
  }

  const odd_numbers = [];
  const even_numbers = [];
  makeArrays(even_numbers,odd_numbers,arr);
  const objRet = {
    is_success,user_id,email,roll_number,odd_numbers,even_numbers,aplhabets
  };
  return objRet;
}

function makeArrays(even_numbers,odd_numbers,arr)
{

  for(let i = 0 ; i < arr.length; i++)
  {
    if(arr[i] % 2 != 0)
    {
      odd_numbers.push(arr[i]);
    }
    else
    {
      even_numbers.push(arr[i]);
    }
  }
}

const PORT = 4000;
app.listen(PORT,()=>{console.log(`Server is listening on PORT : ${PORT}`)});