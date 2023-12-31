import React,{createContext,useEffect,useState} from "react";

export const ListContext = React.createContext();

export const ListProvider = (props) =>{

    const [Users,setUsers] = useState([]);
    const [desc,setDesc] = useState([]);

    return(
        <>
            <ListContext.Provider value={[Users,setUsers,desc,setDesc]}>
                {props.children}
            </ListContext.Provider>
        </>
    )
}