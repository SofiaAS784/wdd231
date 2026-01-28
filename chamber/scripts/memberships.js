// Membership Cards
const displayCards = document.querySelector('.cards');
const info = document.querySelector('#member-info');

const memberships = [
    {
        title: 'Non-Profit Membership',
        cost: 'Free*',
        desc: 'An special and completely free plan, design exclusively for non-profit organizations that want to be part of us.',
        benefits: [
            'No fees',
            'Powerful connections with other companies',
            'Advertising for charity events',
            'Special section in our directory (new)'
        ]
    },
    {
        title: 'Bronze Membership',
        cost: 109,
        desc: 'The basic membership, ideal for small and local companies that want to strength their relationships and their impact in the labor market.',
        benefits: [
            'More accessible',
            'A place in our directory',
            'Training for emerging companies every six months',
            'Access to all of our general events'
        ]
    },
    {
        title: 'Silver Membership',
        cost: 159,
        desc: 'The most popular plan for national and well-known companies. Includes really useful resources and program that every company wants.',
        benefits: [
            'All the features included in the Bronze plan',
            'Advertising on our home page',
            'Regional business conventions',
            'General lidership trainings for our leaders and managers'
        ]
    },
    {
        title: 'Gold Membership',
        cost: 199,
        desc: 'The best and most complete plan, perfect for anyone that want to reach their biggest potential. It is not only design for managers and other leaders, but also to provide a meaningful experience for the entire company',
        benefits: [
            'All the features included in the Silver plan',
            'Exclusive training for employers provided by professionals in the field',
            'National business conventions',
            'Discounts for international events'
        ]
    }
]

function createCard(memberships) {
    memberships.forEach(membership => {
        const card = document.createElement('section');
        const title = document.createElement('h2');
        const action = document.createElement('a');
        title.textContent = membership.title;
        action.setAttribute = ('href', '#');
        action.textContent = 'LEARN MORE    ';
        if (membership.title == 'Non-Profit Membership') {
            card.style.backgroundImage = 'linear-gradient(to right, #005358, #00a4af)'
        }
        else if (membership.title == 'Bronze Membership') {
            card.style.backgroundImage = 'linear-gradient(to right, #352e02, #625300)'
        }
        else if (membership.title == 'Silver Membership') {
            card.style.backgroundImage = 'linear-gradient(to right, #3d3d3d, #6b6b6b)'
        }
        else if (membership.title == 'Gold Membership') {
            card.style.backgroundImage = 'linear-gradient(to right, #4c4c00, #898900)'
        }

        action.addEventListener('click', () => {
            displayInfo(membership);
        })

        displayCards.appendChild(card);
        card.appendChild(title);
        card.appendChild(action);
    })
}

function displayInfo(membership) {
    info.innerHTML = '';
    if (membership.title == 'Non-Profit Membership') {
        info.innerHTML = `
        <button id="closeModal">✖️</button>
        <h2>${membership.title}</h2>
        <p>${membership.desc}</p>
        <h4><strong>Benefits<strong></h4>
        <ul>${membership.benefits.map(benefit => `<li>• ${benefit}</li>`).join('')}</ul>
        <h3><strong>$${membership.cost}</strong></h3>
        <p><small><i>*It is only available for Non-profit organizations</i></small></p>
        `;
    }
    else {
        info.innerHTML = `
        <button id="closeModal">✖️</button>
        <h2>${membership.title}</h2>
        <p>${membership.desc}</p>
        <h4><strong>Benefits<strong></h4>
        <ul>${membership.benefits.map(benefit => `<li>• ${benefit}</li>`).join('')}</ul>
        <h3><strong>$${membership.cost} per year</strong> <i>($${(membership.cost / 12).toFixed(2)} p/month)</i></h3>
      `;
    }

    info.showModal();

    closeModal.addEventListener("click", () => {
        info.close();
    })
}

createCard(memberships);

