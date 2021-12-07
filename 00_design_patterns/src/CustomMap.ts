
export interface Position{
    location:{
        lng:number;
        lat:number;
    }
    markContent():string,
    
}
export class CustomMap 
{
     private googleMap: google.maps.Map;
   
    
    constructor (elementName:string){
        this.googleMap=  new google.maps.Map(document.getElementById(elementName),{
            center:{
                lat:0,
                lng:0
            },
            zoom:1,
            
         })  
    }
    
    addMarker({location,markContent}:Position):void{
     
        
       const marker= new google.maps.Marker({
            map:this.googleMap,
            position:location,
            // title:name
        })
       marker.addListener('click', ()=>{
            new  google.maps.InfoWindow({content:`<p>${markContent()}</p>`}).open(
                {
                    anchor:marker,
                      map:this.googleMap
                }    
            )
        })
    }

  
}