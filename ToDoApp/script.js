function add(){
    const task=document.getElementById("task").value;
    let list=JSON.parse(localStorage.getItem('todolist'));
    if (!list){
          list=[];
    }
    list.push(task);
    localStorage.setItem('todolist',JSON.stringify(list))
    document.getElementById("task").value="";
    load();
}
const load=()=>{
    let list=JSON.parse(localStorage.getItem('todolist'));
    document.querySelector(".container").innerHTML="";
    if (list){
        list.forEach(element => {
            const task=document.createElement('h1');
            task.innerHTML=`${element} &nbsp;&nbsp;&nbsp;&nbsp;<button onclick=del(${list.indexOf(element)})>delete</button>`;
            task.style="list-style: none;background:white;color: black;width:90%;height:60px;border-radius: 10px;padding-top: 30px;font-family:'PT Sans', sans-serif;font-weight: normal;";
            task.className='tasks'
            document.querySelector(".container").appendChild(task);
        });
    }
}
function del(n){
   const list=JSON.parse(localStorage.getItem('todolist'));
   const text=document.getElementsByClassName('tasks')[n].innerText;
   let arr=[];
   for (let i=0;i<list.length;i++) {
       if (!text.includes(list[i])){
           arr.push(list[i])
       }
   }
   localStorage.setItem('todolist',JSON.stringify(arr))
   load();
}