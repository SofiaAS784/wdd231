const url = 'https://sofiaas784.github.io/wdd231/chamber/data/members.json';
const display = document.querySelector('.adds');

async function getCompaniesData() {
    const response = await fetch(url);
    const data = await response.json();
    displayAdds(data.companies);
}

getCompaniesData();

const displayAdds = (companies) => {
    display.innerHTML = "";
    companies.forEach((company) => {
        let card = document.createElement('section');
        let level = document.createElement('h3');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('a');

        logo.setAttribute('src', company.small-logo)
        level.textContent = `${GetMembershipLevel(company.membershiplevel)} Membership`
        address.textContent = company.address;
        phone.textContent = company.phonenumber;
        url.setAttribute('href', company.url);
        url.setAttribute('target', "_blank");
        url.textContent = company.url;
    });
}

function GetMembershipLevel(data) {
    if (data == 1) {
        return 'Member';
    }
    else if (data == 2) {
        return 'Silver';
    }
    else if (data == 3) {
        return 'Gold';
    }
}