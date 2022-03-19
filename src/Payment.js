import { useNavigate } from 'react-router-dom';
import React,{useState} from 'react';

function Payment({bill}) {
  var navigate = useNavigate();
  const [amount, setamount] = useState('');
console.log(amount);
console.log(bill);
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount");
    }else if(amount === String(bill)){
      var options = {
        key: "rzp_test_jdhlTLwp7TzKH3",
        key_secret:"kbF4A5N1RlawXTnWjjcih5t4",
        amount: amount *100,
        currency:"INR",
        name:"PETSITTER_APP",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
          var paymentid = response.razorpay_payment_id;
          if(paymentid){
            navigate('/customer')
          }

        },
        prefill: {
          name:"praveen",
          email:"praveenrajb2w@gmail.com",
          contact:"7449117322"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }else{
      alert('enter correct price');
    }
  }
  return (
    <div className="App">
     <h2>Razorpay Payment</h2>
     <br/>
     <input className='text-center' type="text" placeholder='Enter Amount' value={amount}onChange={(e)=>setamount(e.target.value)} />
     <br/><br/>
     <button className='btn btn-success' onClick={handleSubmit}>{`PAY ${bill}`}</button>
    </div>
  );
}

export default Payment;