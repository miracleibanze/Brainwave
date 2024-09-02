import { yourlogo } from "../../assets"

const CompanyLogo = ({className}) => {
  return (
    <div className={className}>
        <h5 className="tagline mb-6 text-center text-1/50">Helping people create beautiful content at </h5>
        <ul className="flex">
            <li className="flex items-center justify-center flex-1 h-[8.5rem]">
                <img src={yourlogo} width={134} height={28}/>
            </li>
            <li className="flex items-center justify-center flex-1 h-[8.5rem]">
                <img src={yourlogo} width={134} height={28}/>
            </li>
            <li className="flex items-center justify-center flex-1 h-[8.5rem]">
                <img src={yourlogo} width={134} height={28}/>
            </li>
            <li className="flex items-center justify-center flex-1 h-[8.5rem]">
                <img src={yourlogo} width={134} height={28}/>
            </li>
        </ul>
    </div>
  )
}

export default CompanyLogo