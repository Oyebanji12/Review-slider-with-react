import React from 'react'
import { useState } from 'react'
import people from "./data.js"
import {BsChevronLeft, BsChevronRight} from "react-icons/bs"


const Review = () => {
    const [index, setIndex]= useState(0)
    // destructure and assign the value of index into people as array
    const { name, job, image,text}= people[index]
    console.log(people)
    
    
    const checkNumber=(number)=>{
        if(number > people.length-1){
            return 0
        }
        if(number < 0){
            return people.length-1
        }
        return number;
    }


    const nextPerson=()=>{
        setIndex(()=>{
            let newIndex= index + 1;
            return checkNumber(newIndex)

        })
    }
    const prevPerson=()=>{
        setIndex(()=>{
            let newIndex= index - 1;
            return checkNumber(newIndex)
        })
    }
    const randomPerson=()=>{
        let randomNumber= (Math.floor(Math.random() * people.length))
        console.log(randomNumber)
        // if randomnumber is equal to current index add 1
        if(randomNumber === index){
             randomNumber = index + 1;
            
        } 
        // incase the value is bigger than index
         setIndex(checkNumber(randomNumber))
    }
    
  return (
    <div className='container'>
        <article className='review'>
            <div className="img-container">
                <img src={image} alt={image} className="person-img" />
                <span className='quote-icon'>
                    
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className="button-container">
                <button className='prev-btn' onClick={prevPerson} >
               < BsChevronLeft />
                </button>
                <button className='next-btn' onClick={nextPerson} >
               < BsChevronRight />
                </button>
            </div>
            <button className='random-btn' onClick={randomPerson}>
                 suprise me
            </button>
        </article>


    </div>
  )
}

export default Review