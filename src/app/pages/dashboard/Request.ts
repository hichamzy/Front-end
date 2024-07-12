import axios from "axios";

export function GetUser(email : string){
    try{
        var s = fetch(`http://localhost:32688/Professors?email=${email}`).then((resp)=>{
            console.log(resp);
        })

        return s
    }catch(ex){
        console.log(ex);
    }
}