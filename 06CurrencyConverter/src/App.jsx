// import { useState } from 'react'
// import './App.css'
// import { InputBox } from './components'
// import useCurrencyInfo from '../Hooks/useCurrencyInfo'

// function App() {
  
//   const[Amount,SetAmount]=useState(0)
//   const [From,Setfrom]=useState("usd")
//   const [To,SetTo]=useState("inr")
//   const[ConvertedAmount,SetConvertedAmount]=useState();

//   const CurrencyInfo=useCurrencyInfo(From);

//   const options=Object.keys(CurrencyInfo)

//   const swap=()=>{
//     Setfrom(To)
//     SetTo(From)
//     SetConvertedAmount(Amount)
//     SetAmount(ConvertedAmount)
//   }

//   const convert=()=>{
//     SetConvertedAmount((Amount*CurrencyInfo[To]))
//   }
  

//   return (
//         <div
//             className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//             style={{
//                 backgroundImage: `url('https://images.pexels.com/photos/106152/euro-coins-currency-money-106152.jpeg')`,
//             }}
//         >
//             <div className="w-full">
//                 <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//                     <form
//                         onSubmit={(e) => {
//                             e.preventDefault();
//                             convert()
//                         }}
//                     >
//                         <div className="w-full mb-1">
//                             <InputBox
//                                 label="From"
//                                 amount={Amount}
//                                 CurrencyOptions={options}
//                                 onCurrencyChange={(currency)=>{
//                                   Setfrom(currency)
//                                 }}
//                                 selectCurrency={From}
//                                 onAmountChange={(amount)=>SetAmount(amount)}
//                             />
//                         </div>
//                         <div className="relative w-full h-0.5">
//                             <button
//                                 type="button"
//                                 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                                 onClick={swap}
//                             >
//                                 swap
//                             </button>
//                         </div>
//                         <div className="w-full mt-1 mb-4">
//                             <InputBox
//                                 label="To"
//                                 amount={ConvertedAmount}
//                                 CurrencyOptions={options}
//                                 onCurrencyChange={(currency)=>
//                                   SetTo(currency)
//                                 }
//                                 selectCurrency={From}
//                             />
//                         </div>
//                         <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
//                             Convert {From.toUpperCase()} To {To.toUpperCase()}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default App


import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from '../Hooks/useCurrencyInfo' // Fixed typo

function App() {
  
  const [Amount, SetAmount] = useState(0)
  const [From, SetFrom] = useState("usd")
  const [To, SetTo] = useState("inr")
  const [ConvertedAmount, SetConvertedAmount] = useState(0)

  const CurrencyInfo = useCurrencyInfo(From); // Fixed typo

  const options = Object.keys(CurrencyInfo)

  const swap = () => {
    SetFrom(To)
    SetTo(From)
    SetConvertedAmount(Amount)
    SetAmount(ConvertedAmount)
  }

  const convert = () => {
    SetConvertedAmount(Amount * CurrencyInfo[To])
  }
  
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/106152/euro-coins-currency-money-106152.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full mx-auto border border-gray-300 rounded-lg p-6 backdrop-blur-sm bg-white/90 shadow-lg text-black">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-4">
              <InputBox
                label="From"
                amount={Amount}
                CurrencyOptions={options}
                onCurrencyChange={(currency) => {
                  SetFrom(currency) // Fixed: should update From currency
                }}
                selectCurrency={From}
                onAmountChange={(amount) => SetAmount(amount)}
              />
            </div>
            <div className="relative w-full h-4 mb-4">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-sm font-medium transition-colors"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={ConvertedAmount}
                CurrencyOptions={options}
                onCurrencyChange={(currency) => SetTo(currency)}
                selectCurrency={To} // Fixed: should show 'To' currency
                amountDisable // Add this prop to disable amount input for 'To' field
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors">
              Convert {From.toUpperCase()} To {To.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App