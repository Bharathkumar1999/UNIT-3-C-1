//store the products array in localstorage as "products"
function Products(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}

function storeData(e){
    e.preventDefault();
    let form=document.getElementById("products");
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;

    let p1= new Products(type, desc, price, image);

    let data= JSON.parse(localStorage.getItem("products")) || [];

    data.push(p1);

    localStorage.setItem("products",JSON.stringify(data));

    console.log(p1);
}

function calculate(){
    let data= JSON.parse(localStorage.getItem("products")) || [];

    let obj={};

    for(let i=0;i<data.length;i++){
        if(!obj[data[i].batch]){
            obj[data[i].batch]=0;
        }
    }

    for(let i=0;i<data.length;i++){
        obj[data[i].batch]++;
    }
    console.log(obj);

}
calculate();


