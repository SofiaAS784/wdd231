document.addEventListener('DOMContentLoaded', function () {
    const today = new Date();
    const timestamp = document.getElementById('timestamp');
    timestamp.value = today.toLocaleString();
})

const registration = new URLSearchParams(window.location.search);
console.log(registration);

document.querySelector('#results').innerHTML = `
<h2>Thank you for sharing with us!</h2>
<p>This is the information that you have entered:</p>
<p><strong>Title: </strong>${registration.get('title')}</p>
<p><strong>Topic: </strong>${registration.get('theme')}</p>
<p><strong>Brief description: </strong>${registration.get('desc')}</p>
<p>---------------------------------------------------------------------</p>
<h3>Contact Information</h3>
<p>The suggestion was made by <strong>${registration.get('first')} ${registration.get('last')}</strong></p>
<p><strong>Phone number: </strong>${registration.get('phone')}</p>
<p><strong>Email: </strong>${registration.get('email')}</p>
<p><i>— Form submitted at ${registration.get('timestamp')} —</i></p>
`;
