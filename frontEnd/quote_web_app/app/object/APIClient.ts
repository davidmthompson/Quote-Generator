import { error } from "console";
import { promises } from "dns";
import { Item } from "./quote";

export function getQuoteFromSever(){

    return new Promise<Item>((resolve, reject) => {
        fetch(`${process.env.NEXT_PUBLIC_HOST}/getDailyJoke`)
        .then((res)=> res.json())
        .then((result: Item) =>{
            return resolve(result);
        })
        .catch((error)=>{
            alert("Womp Womp Sever is down sory 👉👈")
            reject()
        })
    })

}