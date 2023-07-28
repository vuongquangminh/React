import { useEffect, useState } from "react";
import  Card  from "../../Card/Card";

function ContentRight() {

    
    const [data, setData] = useState([])
    useEffect (() => {
        const listItem = async() => {
            const responsive = await fetch('http://wlp.howizbiz.com/api/loaicongbo?paginate=true&page=1&perpage=18')
            const data = await responsive.json()
            setData(data.list)
        }
        listItem()

    },[])
    console.log(data)
    return ( 
        <>
        <div className="col p-0 right">
              <div className="listCard row">
                {data.map((item, index) => {

                    return <Card key={index} data={item} />;



                })}
              </div>
            </div>
        </>
     );
}

export default ContentRight;