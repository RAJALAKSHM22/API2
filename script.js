let division = document.createElement ('div')
division.innerHTML=`<lable for='txt'> USER ID </lable>
<span>
<input type ="text" ClassName="txt" placeholder='ENTER HERE'> 
<button type="button" onClick="show()">LOG IN</button>
</span>`
document.body.append(division)

show=()=>{ 
    let type = document.getElementsByClassName("txt").value
    console.log(type);

let prom = new Promise( (resolve,reject)=>{
    var request = new XMLHttpRequest();
    request.open(`GET`,`https://urlhaus-api.abuse.ch/v1/urls/recent/`);

    request.send();
zx
    request.onload = function() { 
        
        if(request.status == 200) {
            var data=JSON.parse(request.response)
         resolve(data)   
        }
        else{
            reject("Errors are occured!!")
        }    
    }       
 } )
        prom.then((data)=>(console.log(data))).catch((err)=>(console.log(err)))

       let para= document.getElementsByClassName("res").innerTex="User profile is here!!..."
       console.log(para);
}        
        

