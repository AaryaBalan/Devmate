// $('#mySelect').select2({
//     placeholder: "Select multiple options",
//     allowClear: true
// });

function showOtherOrganizer() {
    const btn = document.getElementById('addOrganizerBtn')
    if(btn.innerHTML == 'Add Another'){
        btn.innerHTML = 'Remove'
    }
    else{
        btn.innerHTML = 'Add Another'
    }
    const otherOrganizer = document.getElementById('anotherOrganizer')
    otherOrganizer.classList.toggle('flex')
    otherOrganizer.classList.toggle('hidden')
}