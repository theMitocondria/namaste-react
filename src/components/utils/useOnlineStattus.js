import { useEffect , useState } from "react";

//do we need any arguement to check online ? no
export default useOnlineStatus = ()=>{
    //check online status
    const[ onlineStatus , setOnlineStatus] = useState(true);
    useEffect(()=>{
        window.addEventListener("offline" , ()=>{
            setOnlineStatus(false);
        });

        window.addEventListener("online" , ()=>{
            setOnlineStatus(true);
        })
    },[])
    return onlineStatus;
}