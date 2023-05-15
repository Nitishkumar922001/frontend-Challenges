import './Sucess.css'
import thankYou from '../../assets/images/icon-thank-you.svg'
function Sucess()
{
return(<div className='sucess'>
<div><img className='thankyou' alt='thankyou' src={thankYou}></img>
<h1>Thank you!</h1>
<p> Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.</p>
</div>
</div>)
}
export default Sucess;