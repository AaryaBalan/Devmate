// show post option
const showPostOption = () => {
    const postOption = document.getElementById('postOption')
    postOption.classList.toggle('absolute')
    postOption.classList.toggle('hidden')
}
const showPopup = () => {
    // Code to show the popup
    const popup = document.getElementById('popup');
    popup.classList.toggle('fixed')
    popup.classList.toggle('hidden')
}

const openFilter = () => {
    if (window.screen.width < 1024) {
        const filterElement = document.getElementById('filterElement');
        const openFilterParent = document.getElementById('openFilterParent');
        filterElement.classList.toggle('fixed')
        filterElement.classList.add('flex')
        filterElement.classList.remove('hidden')
        openFilterParent.classList.remove('hidden')
    }
}

const closeFilter = () => {
    const filterElement = document.getElementById('filterElement');
    const openFilterParent = document.getElementById('openFilterParent');
    filterElement.classList.remove('fixed')
    filterElement.classList.add('hidden')
    openFilterParent.classList.add('hidden')
}


// for handling reply btn action

const handleReply = (name) => {
    const textArea = document.getElementById('commentTextArea')
    textArea.placeholder = `Relpy to ${name}`
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    console.log(anchor)
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
            target.focus();
        }
    });
});

const goTo = (url) => {
    window.open('/' + url, '_blank');
}


const showMenu = () => {
    // Code to show the popup
    const threeDotMenu = document.getElementById('threeDotMenu');
    threeDotMenu.classList.toggle('flex')
    threeDotMenu.classList.toggle('hidden')
}

const viewProfile = () => {
    const entireSection = document.getElementById('entireSection')
    const zoomProfile = document.getElementById('zoomProfile')
    entireSection.classList.toggle('blur')
    zoomProfile.classList.toggle('flex')
    zoomProfile.classList.toggle('hidden')
}

const closeProfile = () => {
    const entireSection = document.getElementById('entireSection')
    const zoomProfile = document.getElementById('zoomProfile')
    entireSection.classList.remove('blur')
    zoomProfile.classList.add('hidden')
    zoomProfile.classList.remove('flex')
}


const uploadDoc = () => {
    document.getElementById('uploadFile').innerHTML = "Doc Uploaded"
}

const uploadVideo = () => {
    document.getElementById('uploadVideo').innerHTML = "Video Uploaded"
}


const skills = [];
const addSkills = (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        const skillsContainer = document.getElementById('skillsContainer')
        skillsContainer.classList.add('flex')
        skillsContainer.classList.remove('hidden')
        const skill = e.target.value.toUpperCase();

        if (!skills.includes(skill)) {
            skillsContainer.innerHTML +=
                `<div class="bg-black text-white px-3 py-1 rounded-full">${skill}</div>`;

            skills.push(skill);
        }
        e.target.value = "";
    }
};


function getExplore() {
    const allExplore = document.getElementById('allExplore')
    console.log(this)
    if (this.innerHTML) {

        document.getElementById('exploreTitle').innerHTML = this.innerHTML
    }
    allExplore.classList.toggle('flex')
    allExplore.classList.toggle('hidden')
}
;

// Handle option selection
function selectOption(text) {
    if (!selectedPills.has(text)) {
        selectedPills.add(text);
        createPill(text);
    }
    input.value = "";
    suggestionsContainer.classList.add("hidden");
}

// Create pill element
function createPill(text) {
    const pill = document.createElement("div");
    pill.className = "flex items-center bg-blue-500 text-white px-3 py-1 rounded-full";

    const pillText = document.createElement("span");
    pillText.textContent = text;

    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "&times;";
    closeBtn.className = "ml-2 text-white font-bold focus:outline-none";
    closeBtn.onclick = () => {
        pill.remove();
        selectedPills.delete(text);
    };

    pill.appendChild(pillText);
    pill.appendChild(closeBtn);
    pillbox.appendChild(pill);
}

// Allow selection with Enter key
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById('pillbox').classList.remove('hidden')
        const firstSuggestion = suggestionsContainer.querySelector("div");
        if (firstSuggestion) selectOption(firstSuggestion.textContent);
    }
});

// Hide suggestions when clicking outside
document.addEventListener("click", function (event) {
    if (!event.target.closest("#suggestions") && event.target !== input) {
        suggestionsContainer.classList.add("hidden");
    }
});
























// resize post
const postImgContainer = document.getElementById('postImgContainer')
const resizePost = (size) => {
    const postImg = document.getElementById('postImg')
    postImg.classList.add('object-cover')
    postImg.classList.remove('object-contain')
    if (size) {
        postImgContainer.classList.add('aspect-video')
        postImgContainer.classList.remove('aspect-square')
    }
    else {
        postImgContainer.classList.add('aspect-square')
        postImgContainer.classList.remove('aspect-video')
    }
}

// set original post image
const setImgOriginal = () => {
    const postImg = document.getElementById('postImg')
    postImg.classList.add('object-contain')
    postImg.classList.remove('object-cover')
    postImgContainer.classList.remove('aspect-square')
    postImgContainer.classList.add('aspect-video')
}


// upload post
const uploadPost = document.getElementById('uploadPost')
const uploadPostContainer = document.getElementById('uploadPostContainer')
const uploadPostLabel = document.getElementById('uploadPostLabel')

uploadPost.addEventListener('change', (event) => {
    const postImg = document.getElementById('postImg')
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = () => {
            postImg.classList.remove('hidden')
            postImg.classList.add('block')
            postImg.src = reader.result
            uploadPostContainer.classList.add('hidden')
            uploadPostLabel.classList.remove('hidden')
        }
        reader.readAsDataURL(file)
    }
})

// opening create post div function
function openPost() {
    const postOption = document.getElementById('postOption')
    postOption.classList.add('hidden')
    postOption.classList.toggle('absolute')
    const entireSection = document.getElementById('entireSection')
    const createPost = document.getElementById('createPost')
    entireSection.classList.add('blur-md')
    createPost.classList.remove('hidden')
    createPost.classList.add('flex')
}

// closing create post div function
function closePost() {
    const entireSection = document.getElementById('entireSection')
    const createPost = document.getElementById('createPost')
    entireSection.classList.remove('blur-md')
    createPost.classList.add('hidden')
}


$('#mySelect').select2({
    placeholder: "Select multiple options",
    allowClear: true
});

//get agenda in calender.html
function getAgenda() {
    const allAgenda = document.getElementById('allAgenda')
    console.log(this)
    allAgenda.classList.toggle('flex')
    allAgenda.classList.toggle('hidden')
}