import './App.css';
import { customers } from './data.json'
import React from 'react';

const CalcAmount = () =>{
  return(
    customers.map((item,index)=>{
      return item.price.map((prices)=>{

        // Calc total amount for each month;
        var totalAmountMonth1 = prices.Month_1.reduce((x,y)=>x+y) + '     ';
        var totalAmountMonth2 = prices.Month_2.reduce((x,y)=>x+y) + '     ';
        var totalAmountMonth3 = prices.Month_3.reduce((x,y)=>x+y) + '     ';

        var totalRewardMonth1 = 0;
        var totalRewardMonth2 = 0;
        var totalRewardMonth3 = 0;

        // Calc total transaction Amount per month for each customer. 
        var totalTransactionPerMonth = parseInt(totalAmountMonth3) + parseInt(totalAmountMonth2) + parseInt(totalAmountMonth1);

        // Calc total Reward Point for 1st Month
        prices.Month_1.map((reward)=>{
          if(reward<50){totalRewardMonth1+=0;}
          else if(reward===50){totalRewardMonth1+=1*50;}
          else if(reward>50 && reward<100){totalRewardMonth1+=1*(reward-50);}
          else if(reward===100){totalRewardMonth1+=1*50;}
          else if(reward>100){totalRewardMonth1+=2*(reward-100)+1*50;}
          return totalRewardMonth1;
        });

        // Calc total Reward Point for 2nd Month
        prices.Month_2.map((reward)=>{
          if(reward<50){totalRewardMonth2=0;}
          else if(reward===50){totalRewardMonth2+=1*50;}
          else if(reward>50 && reward<100){totalRewardMonth2+=1*(reward-50);}
          else if(reward===100){totalRewardMonth2+=1*50;}
          else if(reward>100){totalRewardMonth2+=2*(reward-100);}
          return totalRewardMonth2;
        });

        // Calc total Reward Point for 3rd Month
        prices.Month_3.map((reward)=>{
          if(reward<50){totalRewardMonth3=0;}
          else if(reward===50){totalRewardMonth3+=1*50;}
          else if(reward>50 && reward<100){totalRewardMonth3+=1*(reward-50);}
          else if(reward===100){totalRewardMonth3+=1*50;}
          else if(reward>100){totalRewardMonth3+=2*(reward-100);}
          return totalRewardMonth3;
        });

        // Total Reward Points for a customer per month.
        var totalRewardPointsPerMonth = totalRewardMonth3 + totalRewardMonth2 + totalRewardMonth1;

        return <li key={index}><strong>{item.name}</strong>
                  <div style={{marginLeft:'30px;', marginTop:'20px;'}}>
                      {"First Month Transaction: " + "$"+totalAmountMonth1} 
                  </div>
                  <div style={{marginLeft:'30px;'}}>
                      {"First Month RewardPoint: " + "$"+totalRewardMonth1}
                  </div>
                  <div style={{marginLeft:'30px;'}}>
                      {"Second Month Transaction: " + "$"+totalAmountMonth2}
                  </div>
                  <div style={{marginLeft:'30px;'}}>
                      {"Second Month RewardPoint: " + "$"+totalRewardMonth2} 
                  </div>
                  <div style={{marginLeft:'30px;'}}>
                      {"Third Month Transaction: " + "$"+totalAmountMonth3}
                  </div>
                  <div style={{marginLeft:'30px;'}}>
                      {"Third Month RewardPoint: " + "$"+totalRewardMonth3}
                  </div>
                  <div style={{marginLeft:'30px;'}}>
                      {"Total Transaction Per Month: " + "$"+totalTransactionPerMonth}
                  </div>
                  <div style={{marginLeft:'30px;',marginBottom:'20px'}}>
                      {"Total Reward Point Per Month: " + "$"+totalRewardPointsPerMonth}
                  </div>
            </li>
          })
      })
  );
}

const App = () =>{
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Retail Customer Scheme with Reward Points</h1>
      <ul>
        {CalcAmount()}
      </ul>
    </div>
  );
}

export default App;
