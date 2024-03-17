'use client'
import Link from "next/link";
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

  const mockHospitalRepo=[{hid:'001',name:'Chulalongkorn Hospital',image:'/img/chula.jpg'},
  {hid:'002',name:'Rajavithi Hospital',image:'/img/rajavithi.jpg'},
  {hid:'003',name:'Thammasat University Hospital',image:'/img/thammasat.jpg'}]

  return(
    <div>
        <div style={{margin:"20px" , display:"flex" , flexDirection:"row" , flexWrap:"wrap" , alignContent:"space-around" , justifyContent:"space-around"}}>
            {
                mockHospitalRepo.map((hospitalItem)=>(
                    <Link href={`/hospital/${hospitalItem.hid}`} className="w-1/5">
                    <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.image}
                    onCompare={ (hospital:string, rating:number )=> dispatchCompare({type:'add', hospitalName:hospital,rating:rating})}/>
                    </Link>
                ))
            }
            {/* <Card hospitalName="Chulalongkorn Hospital" imgSrc="/img/chula.jpg"
            onCompare={ (hospital:string, rating:number )=> dispatchCompare({type:'add', hospitalName:hospital,rating:rating})}
            />
            <Card hospitalName="Rajavithi Hospital" imgSrc="/img/rajavithi.jpg"
            onCompare={ (hospital:string, rating:number) => dispatchCompare({type:'add', hospitalName:hospital,rating:rating})}
            />
            <Card hospitalName="Thammasat University Hospital" imgSrc="/img/thammasat.jpg"
            onCompare={ (hospital:string, rating:number)=> dispatchCompare({type:'add', hospitalName:hospital,rating:rating})}
            /> */}
        </div>
        <div className='w-full text-center p-[20px]'>
        {Array.from(compareList).map(([hospital, rating]) => <div data-testid={hospital} key={hospital} onClick={ ()=>dispatchCompare( {type:'remove' , hospitalName:hospital , rating:rating} ) }>
        {rating !== null ? `${hospital} : ${rating}` : null} </div> )}
        </div>
      </div>
     )
}