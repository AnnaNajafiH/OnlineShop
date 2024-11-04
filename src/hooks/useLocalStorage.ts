import { useEffect, useState } from "react"

//this is a custom hook that will help us to store data in local storage
export function useLocalStorage <T> (key:string, initialValue:T){
    const [value, setValue]= useState<T>(()=>{
        let localCart = localStorage.getItem(key);

        if (localCart != null)
            return JSON.parse(localCart)
        else{
            return initialValue;
        }
    });

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    },[key,value])

    return [value, setValue] as [typeof value, typeof setValue];
}

