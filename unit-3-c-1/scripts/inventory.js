function append(){
    let data = JSON.parse(localStorage.getItem("products")) || [];
    let container= document.getElementById("all_products");
    container.innerHTML=null;


    data.forEach(function(el,index){
        let div = document.createElement('div');
        let img= document.createElement('img');
        img.src=el.image;
        let p=document.createElement('p');
        p.innerText=el.type;
        let btn = document.createElement('button');
        btn.innerText="Remove";
        btn.addEventListener("click",function(){
            remove(index);
        })
        
        div.append(img,p,btn);
        container.append(div);
    });

    
}

append();

function remove(index){
    let data= JSON.parse(localStorage.getItem("products")) || [];
    //console.log(index);

    let newData= data.filter(function(el,i){
        if(i===index){
            let remove_product= JSON.parse(localStorage.getItem("remove_product")) || [];
            remove_product.push(el);
            localStorage.setItem("remove_product",JSON.stringify(remove_product));

        }else{
            return i !== index; 
        }
    
    });

    localStorage.setItem("products",JSON.stringify(newData));
    append();

    
}