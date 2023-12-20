interface ExperienceProps{
  backgroundImage:string;
}

const ExperiencePic = ({backgroundImage}: ExperienceProps) =>{
  return(
    <div className={`h-full w-full min-w-[10px] ${backgroundImage} bg-cover rounded-sm bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      
    </div>
  )
}

const Experience = () => {
  return (
    <section className="border-2 border-cyan-100 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20" >
      <div className='hide-scrollbar flex-h-[340px] w-[1440px] items-start justify-start gap-18 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
          <ExperiencePic
          backgroundImage="bg-bg-img-1"
          />
      </div>

      <div className="bg-zinc-400s p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-blacks">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
          </p>
          
        </div>
  
    </section>
  )
}

export default Experience