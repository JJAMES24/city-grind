import React from 'react'
import Image from "next/image"
import { HERO } from '@/content'


const Hero = () => {
  return (
<div className="hero">
    <div>
    <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
    {HERO.map((hero)=>(
            <HeroContent
            key={hero.title}
            title={hero.title}
            description={hero.description} />
        ))}      
    </ul> 
    </div>

    {/* <div className=".hero_image-container">
<div className="hero_image">
<Image src ="/citygrihndlogo.png" alt='hero-image' fill className="object-contain"/>
</div>
</div> */}


</div>
  )
}

type HeroContent={
title:string;
description:string;

}
const HeroContent =({title, description}:HeroContent) => {
    return(
       <div className="flex-1 pt-36 padding-x">
        <ul className="flex w-full flex-1 flex-col">
        <h1 className="hero_title">
            {title}
        </h1>
        <p className="hero_subtitle">
            {description}
        </p>
       </ul>
       </div>
    )
}

export default Hero

