
import { createContext, useCallback, useState } from "react";


export const loginContext = createContext();
  
const ContextProvider = ({children}) => {

    const [user, setUser] = useState()

    const [reloadUser, setReloadUser] = useState(1)
    const [count,setCount] = useState(1);

    const [authentication,setAuthentication] = useState(false)
    const [data, setData] = useState({pagination: {
        "count": 10,
        "hasMoreItems": true,
        "page": 1,
        "total": 22,
        "itemsPerPage": 10}
    })
    const roles = [
        { title: "developer", role_id: 12 },
        { title: "IT", role_id: 11 },
        { title: "Quản lý người dùng", role_id: 10 },
        { title: "Biên tập", role_id: 9 },
        { title: "Người lái xe", role_id: 5 },
        { title: "Lãnh Đạo", role_id: 4 },
        { title: "Trợ lý (phân tích)", role_id: 3 },
        { title: "Trợ lý (biên tập)", role_id: 2 },
        { title: "Quản Trị Hệ Thống", role_id: 1 },
      ];
    const [open, setOpen] = useState(false);

    const handleAuth = useCallback(() => {
        setAuthentication(true)
    },[])
    
    function getTokenFromLocalStorage() {
        return localStorage.getItem("accessToken");
      }
    function saveTokenToLocalStorage(title, token) {
        localStorage.setItem(title, token);
      }

      function findAncestor(element, className) {
        while ((element = element.parentElement) && !element.classList.contains(className));
        return element;
    }

    
const value = {
    count,setCount,authentication,handleAuth, saveTokenToLocalStorage, getTokenFromLocalStorage,setAuthentication,
    data, setData,  open, setOpen, setUser, user, setReloadUser, reloadUser, findAncestor, roles
}
    return <loginContext.Provider value={value}>
        {children}
    </loginContext.Provider>
}

export default ContextProvider;



