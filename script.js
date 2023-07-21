var data = [
    {
        id: 10,
        name: "PARCEL1",
        sequence: 1,
        group: "Mumbai"
    },
    {
        id: 11,
        name: "PARCEL2",
        sequence: 2,
        group: "Mumbai"
    },
    {
        id: 13,
        name: "PARCEL3",
        sequence: 3,
        group: "Mumbai"
    },
    {
        id: 19,
        name: "PARCEL4",
        sequence: 4,
        group: "Delhi"
    },
    {
        id: 18,
        name: "PARCEL5",
        sequence: 5,
        group: "Delhi"
    },
    {
        id: 21,
        name: "PARCEL6",
        sequence: 6,
        group: "Kolkata"
    },
    {
        id: 12,
        name: "PARCEL7",
        sequence: 7,
        group: "Kolkata"
    },
    {
        id: 22,
        name: "PARCEL8",
        sequence: 8,
        group: "Kolkata"
    },
    {
        id: 23,
        name: "PARCEL9",
        sequence: 9,
        group: "Kolkata"
    },
    {
        id: 24,
        name: "PARCEL10",
        sequence: 10,
        group: "Mumbai"
    },
    {
        id: 25,
        name: "PARCEL11",
        sequence: 11,
        group: "Mumbai"
    },
    {
        id: 31,
        name: "PARCEL12",
        sequence: 12,
        group: "Mumbai"
    },
    {
        id: 34,
        name: "PARCEL13",
        sequence: 13,
        group: "Mumbai"
    },
    {
        id: 35,
        name: "PARCEL14",
        sequence: 14,
        group: "Delhi"
    },
    {
        id: 41,
        name: "PARCEL15",
        sequence: 15,
        group: "Delhi"
    },
    {
        id: 42,
        name: "PARCEL16",
        sequence: 16,
        group: "Delhi"
    },
    {
        id: 43,
        name: "PARCEL17",
        sequence: 17,
        group: "Delhi"
    },
    {
        id: 44,
        name: "PARCEL18",
        sequence: 18,
        group: "Kolkata"
    },
    {
        id: 53,
        name: "PARCEL19",
        sequence: 19,
        group: "Kolkata"
    },
    {
        id: 57,
        name: "PARCEL20",
        sequence: 20,
        group: "Kolkata"
    }
];
const header = document.getElementById("header");
function renderData(){
    header.innerHTML = "";
    let count = 0;
    let city = "Mumbai";
    data.forEach(function(e){
        if(city !== e.group){
            count = 0;
            city = e.group;
            
        }
            if(count === 0){
                c++;
                let hTitle = document.createElement("section");
                hTitle.className = `h`;
                hTitle.id = `h${c}`;
                hTitle.innerHTML = `<div class="gtitle" style="background-color:${colorObj[e.group]}">${e.group}</div>
                <div class="mParcels" id="mparcels${c}">
                </div>`;
                header.appendChild(hTitle);
                count = 1;
            }
            let parcel = document.createElement("div");
            parcel.className = `parcelDiv`;
            parcel.id = e.id;
            parcel.innerHTML = `<div class="pName">${e.name}</div>
            <div class="pSeq" style="background-color:${colorObj[e.group]}">${e.sequence}</div>`;
            document.getElementById(`mparcels${c}`).appendChild(parcel);

            parcel.addEventListener("click",function(){
                document.getElementById("section2").innerHTML = `Selected Parcel : <span class="pname">${e.name}<span>`
                alertMsg = false;
                parcelElement = e;
                parcelClick = e.id;

            })
    })
}

let alertMsg = true;
let parcelClick,parcelElement="";

let c = 0,p = 1;
const colorObj = {Mumbai:"rgba(242, 32, 98, 0.821)",Delhi:"rgba(246, 208, 20, 0.998)",Kolkata:"rgb(108, 108, 239)"}
window.addEventListener("load",function(){

    renderData();
});
window.addEventListener("click",function(){
    if(alertMsg === true){
        this.alert("Please Click on any Parcel!!!");
    }
});
(document.getElementById("btnRefresh")).addEventListener("click",function(){
    location.reload();
});
(document.getElementById("btnFinal")).addEventListener("click",function(){
    console.log(data);
});
(document.getElementById("btnDelete")).addEventListener("click",function(){
    data.forEach(function(e,i){
        if(e.id === parcelClick){
            data.splice(i,1)
            document.getElementById("section2").innerHTML = "Selected Parcel : ";
        }
    })
    let seq = 1;
    data.forEach(function(e,i){
        e.sequence = seq;
        seq++;
    })
    renderData();
});
(document.getElementById("btnReplace")).addEventListener("click",function(){
    
    let flag = 0;
    let id;

    while(flag == 0){
        let f = 0;
        id = Math.floor(Math.random() * 90 + 10);
        data.forEach(function(e){
            if(e.id === id){
                f = 1;
            }
        })
        if(f === 0){
            flag = 1;
        }
    }
    data.forEach(function(e){
        
        if(e.id === parcelClick){
            let n = document.getElementById("name").value;
            e.id = id;
            parcelClick = id;
            e.name = n;
            e.group = document.getElementById("group").value;
            document.getElementById("section2").innerHTML = `Selected Parcel : <span class="pname">${n}<span>`;
        }
    })
    renderData();
});
(document.getElementById("btnAddBefore")).addEventListener("click",function(){
    let flag = 0;
    let id;
    
    while(flag == 0){
        let f = 0;
        id = Math.floor(Math.random() * 90 + 10);
        data.forEach(function(e){
            if(e.id === id){
                f = 1;
            }
        })
        if(f === 0){
            flag = 1;
        }
    }
    let name = document.getElementById("name").value;
    let group = document.getElementById("group").value;
    let sequence;
    let index;
    let c = 0;
    data.forEach(function(e,i){

        if(e.id === parcelClick){
            // console.log(data);
            // return;
            sequence = e.sequence;
            index = i;
            c = 1;
        }
        if(c === 1){
            e.sequence += 1;
        }
    })
    data.splice(index,0,{id:id,name:name,sequence:sequence,group:group});
    console.log(data);
    renderData();
});


(document.getElementById("btnAddAfter")).addEventListener("click",function(){
    let flag = 0;
    let id;
    
    while(flag == 0){
        let f = 0;
        id = Math.floor(Math.random() * 90 + 10);
        data.forEach(function(e){
            if(e.id === id){
                f = 1;
            }
        })
        if(f === 0){
            flag = 1;
        }
    }
    let name = document.getElementById("name").value;
    let group = document.getElementById("group").value;
    let sequence;
    let index;
    let c = 0;
    data.forEach(function(e,i){

        if(e.id === parcelClick){
            sequence = e.sequence;
            index = i;
            data.splice(index+1,0,{id:id,name:name,sequence:sequence,group:group});
            c = 1;
        }
        else if(c === 1){

            e.sequence += 1;
        }
        
    })
    console.log(data);
    renderData();
})