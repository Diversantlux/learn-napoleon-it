let table = document.getElementById('table');



let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus officia asperiores. Culpa illo necessitatibus perferendis labore, impedit non quis, nam voluptates deserunt illum veritatis nobis molestiae at error eveniet dolorum vel optio, saepe iste. Obcaecati odio officia voluptatum commodi tempora quo doloribus magnam minus quas fugit temporibus, veniam nam reiciendis at pariatur perferendis voluptate nemo quam tenetur! Nobis provident vitae nemo aliquid distinctio accusamus necessitatibus quos tempore iure ipsum. Quisquam eveniet commodi quaerat quasi labore reiciendis quibusdam id debitis nam sed quos harum, atque suscipit velit? Possimus debitis cumque recusandae explicabo minima, quam veniam ab ad! Maxime, quae excepturi!';

let textArray = text.split(' ');

textArray.forEach((element,index) => {
    let tr = document.createElement('tr');
    let tdNum = document.createElement('td');
    let td = document.createElement('td');
    td.innerText = element;
    tdNum.innerText = index+1;
    tr.appendChild(tdNum);
    tr.appendChild(td);
    table.appendChild(tr);

})

