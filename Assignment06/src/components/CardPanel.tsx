'use client'
import Card from "./Card"
import { useReducer } from "react"

export default function CarPanel(){
    
    const showRatingReducer = (compareList: Map<string, number>, action: { type: string; hospitalName: string; rating: number }
        ) => {
                switch(action.type){
                    case 'add' :{
                        return new Map( compareList.set(action.hospitalName,action.rating)
                            )
                    }
                    case 'remove' : {
                        compareList.delete(action.hospitalName)
                        return new Map(compareList)
                    }
                    default : return compareList
                }
            }
  const [compareList , dispatchCompare] = useReducer(showRatingReducer , new Map<string,number>([['Chulalongkorn Hospital', 5],['Rajavithi Hospital', 5],['Thammasat University Hospital', 5],]))
  return(
    <div>
        <div style={{margin:"20px" , display:"flex" , flexDirection:"row" , flexWrap:"wrap" , alignContent:"space-around" , justifyContent:"space-around"}}>
            <Card hospitalName="Chulalongkorn Hospital" imgSrc="/img/chula.jpg"
            onCompare={ (hospital:string, rating:number )=> dispatchCompare({type:'add', hospitalName:hospital,rating:rating})}
            />
            <Card hospitalName="Rajavithi Hospital" imgSrc="/img/rajavithi.jpg"
            onCompare={ (hospital:string, rating:number) => dispatchCompare({type:'add', hospitalName:hospital,rating:rating})}
            />
            <Card hospitalName="Thammasat University Hospital" imgSrc="/img/thammasat.jpg"
            onCompare={ (hospital:string, rating:number)=> dispatchCompare({type:'add', hospitalName:hospital,rating:rating})}
            />
        </div>
        <div className='w-full text-center p-[20px]'>
        {Array.from(compareList).map(([hospital, rating]) => <div data-testid={hospital} key={hospital} onClick={ ()=>dispatchCompare( {type:'remove' , hospitalName:hospital , rating:rating} ) }>
        {rating !== null ? `${hospital} : ${rating}` : null} </div> )}
        </div>
      </div>
     )
}