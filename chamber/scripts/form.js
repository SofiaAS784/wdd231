document.addEventListener('DOMContentLoaded', function () {
    const today = new Date();
    const timestamp = document.getElementById('timestamp');
    timestamp.value = today.toLocaleString();
    // timestamp isn't working
})

const registration = new URLSearchParams(window.location.search);
console.log(registration);

document.querySelector('#results').innerHTML = `
<h2>Welcome to our Chamber of Commerce!</h2>
<p>This is the information that you have entered:</p>
<p><strong>Business name: </strong>${registration.get('business')}</p>
<p><strong>Brief description: </strong>${registration.get('desc')}</p>
<p><strong>Membership selected: </strong>${registration.get('membership')} membership
(You will receive an email of confirmation with the details for the payment if apply)</p>
<p>— The request was made by <strong>${registration.get('first')} ${registration.get('last')}, ${registration.get('title')}</strong> of <strong>${registration.get('business')} </strong>—</p>
<h3>Contact Information</h3>
<p><strong>Phone number: </strong>${registration.get('phone')}</p>
<p><strong>Email: </strong>${registration.get('email')}</p>
<p><i>— Form submitted at ${registration.get('timestamp')} —</i></p>
`;
