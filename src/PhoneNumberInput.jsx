import React, { useEffect, useRef, useState } from 'react'

export const PhoneNumberInput = (props) => {
    const [input,setInput] = useState("")
    const inputRef = useRef(null)
    const currPositionRef = useRef(0)

    const inputChange =(e)=>{
        const target = e.target
        const currValue = target.value
        const selectionStart = target.selectionStart
        const number = currValue.replace(/[^0-9]/g,"")
        const size = number.length

        if(size > props.maxlength) return

        const formatedValue =[]
        for(let i=0;i<size;i++){
            if(size>3 && i===0){
                formatedValue.push("(")
            }

            formatedValue.push(number[i])

            if(size>6 && i===5){
                formatedValue.push("-")
            }


            if(size>3 && i===2){
                formatedValue.push(")")
            }
        }
        
        const diff = formatedValue.length-currValue.length
        if(selectionStart){
            currPositionRef.current = selectionStart+diff
        }

        setInput(formatedValue.join(""))
    }

    useEffect(()=>{
        if(inputRef.current){
            inputRef.current.setSelectionRange(
                currPositionRef.current,
                currPositionRef.current
            )
        }
    },[input])

  return (
    <div>
        <input 
            value={input}
            onChange={inputChange}
            ref={inputRef}

        />
    </div>
  )
}
