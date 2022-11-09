window.onload = function() {
    
    let button = document.getElementById('open');
    let close = document.getElementById('close');
    let modal = document.getElementById('modal');

    // Opens the modal when the user clicks the Sign up button
    button.addEventListener('click', function(e){
        e.preventDefault();
        modal.style.display = 'block';
    });

    // Closes the modal when the user clicks the Close button
    close.addEventListener('click', function(e){
        
        e.preventDefault();
        modal.style.display = 'none';

    });



}
