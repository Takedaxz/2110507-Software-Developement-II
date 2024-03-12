function submitForm(event) {

    event.preventDefault(); // Prevent the default form submission

    const companyName = document.getElementById('company_name').value;
    const numChairs = document.getElementById('num_chairs').value;
    const contactName = document.getElementById('contact_name').value;
    const contactPhone = document.getElementById('contact_phone').value;

    if (companyName === '' || contactName === '' || contactPhone === '') {
        alert('Please fill in all required fields.');
        return;
    } 
    else if (numChairs < 1 || numChairs > 10) {
        alert('Number of chairs must be a number between 1 and 10.');
        return;
    } 
    else {
        alert('Form submitted successfully!');
        document.getElementById('form').submit();
    }
}
