const data = 'data/members.json';

const gridbtn = document.querySelector('#grid');
const listbtn = document.querySelector('#list');
const display = document.querySelector('article');

async function getCompaniesData() {
    const response = await fetch(data);
    const data = await response.json();
    console.log(data.companies);
}

gridbtn.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbtn.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('a');
        
        address.textContent = company.address;
        phone.textContent = company.phonenumber;
        url.textContent = company.url;
        if (display.classList.contains('grid')) {
            let card = document.createElement('section');
            let logo = document.createElement('img');

            logo.setAttribute('src', company.logo);
            logo.setAttribute('alt', `${company.name} logo`);
            logo.setAttribute('loading', 'lazy');
            logo.setAttribute('width', '200');
            logo.setAttribute('height', '75');

            card.appendChild(logo);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(url);
            display.appendChild(card);
        }
        else if (display.classList.contains('list')) {
            let row = document.createElement('section');
            let name = document.createElement('p');
            
            name.textContent = company.name;

            row.appendChild(name);
            row.appendChild(address);
            row.appendChild(phone);
            row.appendChild(url);
            display.appendChild(row);
        }
    });
}