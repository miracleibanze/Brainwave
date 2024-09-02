const Card = ({className, title }) => {
  return (
        
      
      <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`} style={{backgroundImage: `url(${benefitCard2})`}}>
      <div className="innerBenefitCard ">
      {title && <h5 className="h5 mb-5">{title}</h5>}
        <p className="body-2 mb-6 text-n-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum odio vero rem, illo hic quibusdam?</p>
        <div className="flex items-center mt-auto">
          <img src={benefitIcon2} alt="icon" />
        </div>
      </div>
      <div className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#benefits)" }}>
        <div className="absolute inset-0 opacity-10 transition-opacity hover:opacity-40">
          <img 
          src={benefitImage2}
          height={380}
          width={362}
          alt="ask"
          className="w-full h-full object-cover"
          />
        </div>
      </div>
      <ClipPath />
    </div>
    
  )
}

export default Card