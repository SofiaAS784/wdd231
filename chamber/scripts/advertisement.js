const dataurl = 'https://sofiaas784.github.io/wdd231/chamber/data/members.json';
const display = document.querySelector('.adds');

async function getCompaniesData() {
    try {
        const response = await fetch(dataurl);
        if (response.ok) {
            const data = await response.json();
            displayAdds(data.companies);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getCompaniesData();

function getFilteredCompanies(data) {
    const topCompanies = data.filter((company) => company.membershiplevel != 1);
    return topCompanies;
}

function getRandomCompanies(data) {
    const selected = [...data].sort(() => 0.5 - Math.random());
    return selected.slice(0, 3);
}

const displayAdds = (companies) => {
    const topCompanies = getFilteredCompanies(companies);
    const randomCompanies = getRandomCompanies(topCompanies);
    randomCompanies.forEach((company) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let level = document.createElement('h3');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('a');

        level.textContent = `${GetMembershipLevel(company.membershiplevel)} Membership`;
        name.textContent = company.name;
        logo.setAttribute('src', company.smalllogo);
        logo.setAttribute('alt', `${company.name} logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '300');
        logo.setAttribute('height', 'auto');
        address.textContent = `Address: ${company.address}`;
        phone.textContent = `Phone Number: ${company.phonenumber}`;
        url.setAttribute('href', company.url);
        url.setAttribute('target', "_blank");
        url.textContent = company.url;

        card.appendChild(name);
        card.appendChild(level);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        display.appendChild(card);
    });
}

function GetMembershipLevel(data) {
    if (data == 2) {
        return 'Silver';
    }
    else if (data == 3) {
        return 'Gold';
    }
}