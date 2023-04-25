let max_index=0;

let html = document.querySelector('.chart')

let expense=0;
let data=fetch('./data.json')
    .then(res => {
        return res.json()
    })
    .then(data =>{data.forEach((element,index) => {
        if(element.amount>data[max_index].amount)
    {
        max_index=index;
    }
    });   
  c(data,max_index);
} 
 
)
    .catch(E => { console.log(E) })
    


function c(arr,max_index)
{  arr.forEach((element,index)=>{
    if(index===max_index)
{
  html.innerHTML+=`<div class="expense-div" onmouseover=over1(this) onmouseout=out1(this) >
    <div class="expense-amount">${element.amount}</div>
    <div class="expense-col-max" style="height:${(element.amount*150)/arr[max_index].amount}px;"></div>
    <div class="expense-day">${element.day}</
    div>
    </div>`  
}else
    html.innerHTML+=`<div class="expense-div" onmouseover=over1(this) onmouseout=out1(this) >
    <div class="expense-amount">${element.amount}</div>
    <div class="expense-col"  style="height:${(element.amount*150)/arr[max_index].amount}px;"></div>
    <div class="expense-day">${element.day}</
    div>
    </div>`

})


}
function over1(x)
{ let element=x.querySelector('.expense-amount');

   element.classList.add('hover');
   console.log(element.classList)
}
function out1(x)
{ let element=x.querySelector('.expense-amount');

   element.classList.remove('hover');
   console.log(element.classList)
}