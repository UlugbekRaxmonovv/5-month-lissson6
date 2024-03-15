const inputName =document.querySelector('.form__input-name');
const inputAge =document.querySelector('.form__input-age');
const inputimail =document.querySelector('.form__input-http');
const from =document.querySelector('.form');
const tbody =document.querySelector('.table tbody');
const button =document.querySelector('button');
const textarea =document.querySelector('.textarea-ol');


const DATA = [


  ];

from.addEventListener("submit",(event)=>{
    event.preventDefault()
    let newUser ={
        id: `id-${new Date().getTime()}`,
        h2: inputName.value,
       p:inputAge.value,
       h3:inputimail.value,
       h4:textarea.value,

    }
    DATA.push(newUser);  
    console.log(DATA);
    createTable(DATA)
inputName.value =" "
inputAge.value =" "
inputAge.value = " "
textarea.value= ""

})



function createTable(data){
  while(tbody.firstChild){
    tbody.firstChild.remove()
  }
  data.forEach((user,index)=>{
    let tr = document.createElement('tr')
    tr.innerHTML = `
    <section class="logo">
    <div class="book">
    <div class="container">
      <div class="box-login">
        <div class="book-all">
            <div class="book-link">
              <div class="btn">
                <h2>${user.h2}</h2>
                <p>${user.p}</p>
                <h3>${user.h3}</h3>
                <h4>${user.h4}</h4>
                <button  class="btn-danger" onclick="deleteUser(${index})" >delete</button>
              </div>
            </div>
        </div>
      </div>
    </div>
</div>
   </section>
    
    `
    tbody.appendChild(tr)
  })
}
createTable(DATA)


function deleteUser(index){
  DATA.splice(index,1);
  createTable(DATA)

}

