const image = document.getElementById('image')
const croppingImg = document.getElementById('croppingImg')
const imgInput = document.getElementById('imgInput')
const cropImgContainer = document.getElementById('cropImgContainer')
const cropBtn = document.getElementById('cropBtn')
const originalProfile = document.getElementById('originalProfile')

// for croppingImg

let cropper
imgInput.addEventListener('change', (event) => {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = () => {
            croppingImg.src = reader.result
            cropImgContainer.classList.remove('hidden')
            cropImgContainer.classList.add('flex')

            if (cropper) {
                cropper.destroy()
            }
            cropper = new Cropper(croppingImg, {
                aspectRatio: 1,
                autoCropArea: 1
            })
            cropBtn.classList.remove('hidden')
        }
        reader.readAsDataURL(file)
    }

})

const crop = () => {
    const canvas = cropper.getCroppedCanvas();
    originalProfile.src = canvas.toDataURL()
    image.src = canvas.toDataURL()
    cropImgContainer.classList.add('hidden')
    cropBtn.classList.add('hidden')
}

// to open edit div

const openEdit = () => {
    const editContainer = document.getElementById('editContainer')
    const entireSection = document.getElementById('entireSection')
    editContainer.classList.remove('hidden')
    editContainer.classList.add('flex')
    entireSection.classList.add('blur-md')
}

// to close edit div

const closeEdit = () => {
    const editContainer = document.getElementById('editContainer')
    const entireSection = document.getElementById('entireSection')
    editContainer.classList.add('hidden')
    editContainer.classList.remove('flex')
    entireSection.classList.remove('blur-md')
}

// for toggling the comments
const commentBtn = document.querySelectorAll('.commentBtn')
const commentsSection = document.querySelectorAll('.commentsSection')
commentBtn.forEach((element, i) => {
    element.addEventListener('click', () => {
        if (commentsSection[i].classList.contains("hidden")) {
            commentsSection[i].classList.remove('hidden')
        }
        else {
            commentsSection[i].classList.add('hidden')
        }
    })
});