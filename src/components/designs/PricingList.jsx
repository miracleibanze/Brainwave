import { check } from "../../assets"
import Button from "./Button"

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
    <div className="pricingCard">
     <h4 className="h4 mb-4">Basic</h4>
     <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">AI chatbot, personalized recommendations</p>
    <div className="flex items-center h-[5.5rem] mb-6">
      <div className="h3">$</div>
      <div className="text-[4rem] leading-none font-bold">0</div>
    </div>

      <Button className='w-full mb-6' href='/pricing' white>Get Started</Button>


     <ul>
       <li className="pricingLi"><img src={check} alt="check"/><p>An AI Chatbot that can understand your querries</p></li>
       <li className="pricingLi"><img src={check} alt="check"/><p>Personalised recommendations based on your preferences</p></li>
       <li className="pricingLi"><img src={check} alt="check"/><p>Ability to explore the app and its features without any cost</p></li>
     </ul>
    </div>
      <div className="pricingCard">
      <h4 className="h4 mb-4">Premium</h4>
      <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">Advanced AI chatbot, priority support, analytics dashboard</p>
      <div className="flex items-center h-[5.5rem] mb-6">
        <div className="h3">$</div>
        <div className="text-[4rem] leading-none font-bold">9.99</div>
      </div>


        <Button className='w-full mb-6' href='/pricing' white>Get Started</Button>  

      <ul>
        <li className="pricingLi"><img src={check} alt="check"/><p>An AI Chatbot that can understand your querries</p></li>
        <li className="pricingLi"><img src={check} alt="check"/><p>An analytic dashboard to track your conversations</p></li>
        <li className="pricingLi"><img src={check} alt="check"/><p>Priority support to solve issues quickly</p></li>
      </ul>
      </div>
      <div className="pricingCard">
      <h4 className="h4 mb-4">Entreprise</h4>
      <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">Custom AI chatbot, advanced analytics, dedicated account</p>
      <div className="flex items-center h-[5.5rem] mb-6"/>

          <Button className='w-full mb-6' href='mailto:miracleibanze@gmail.com'>Contact Us</Button> 

      <ul>
        <li className="pricingLi"><img src={check} alt="check"/><p>An AI Chatbot that can understand your querries</p></li>
        <li className="pricingLi"><img src={check} alt="check"/><p>Personalised recommendations based on your preferences</p></li>
        <li className="pricingLi"><img src={check} alt="check"/><p>An analytic dashboard to track your conversations</p></li>
      </ul>
      </div>
    </div>
  )
}

export default PricingList