import { notification1, notification2, notification3, notification4 } from "../../assets"

const Notification = ({className, title}) => {
  return (
    <div className={`${className || ''} flex items-center p-4 pr-6 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}>
        <img src={notification1} className="rounded-xl"
        height={62}
        width={62}
        alt="image"/>
        <div className="flex-1">
            <h6 className="flex mb-1 font-semibold justify-start">
                {title}
            </h6>
            <div className="flex justify-between items-center">
                <ul className="flex -m-0.5">
                <li><img src={notification2} alt="image" /></li>
                <li><img src={notification3} alt="image" /></li>
                <li><img src={notification4 } alt="image" /></li>
                </ul>
                <div className="body-1 text-n-13">1m ago </div>
            </div>
            
        </div>
    </div>
  )
}

export default Notification