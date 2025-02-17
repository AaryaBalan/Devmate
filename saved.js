const postBtn = document.getElementById('postBtn')
const projectsBtn = document.getElementById('projectsBtn')
const eventsBtn = document.getElementById('eventsBtn')

const savedProjectSection = document.getElementById('savedProjectSection')
const savedPostSection = document.getElementById('savedPostSection')
const savedEventSection = document.getElementById('savedEventSection')


// for showing the saved post
postBtn.addEventListener('click', () => {
    savedPostSection.classList.remove('hidden')
    savedProjectSection.classList.add('hidden')
    // savedEventSection.classList.add('hidden')
})

// for showing the saved projects
projectsBtn.addEventListener('click', () => {
    savedPostSection.classList.add('hidden')
    savedProjectSection.classList.remove('hidden')
    // savedEventSection.classList.add('hidden')
})

// for showing the saved events
eventsBtn.addEventListener('click', () => {
    savedPostSection.classList.add('hidden')
    savedProjectSection.classList.add('hidden')
    savedEventSection.classList.add('block')
})

// for toggling the comments
const commentBtn = document.querySelectorAll('.commentBtn')
const commentsSection = document.querySelectorAll('.commentsSection')
commentBtn.forEach((element, i) => {
    element.addEventListener('click', () => {
        if (commentsSection[i].classList.contains("hidden")){
            commentsSection[i].classList.remove('hidden')
        }
        else{
            commentsSection[i].classList.add('hidden')
        }
    })
});

