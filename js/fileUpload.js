const upload = document.querySelector(".upload");
const cancel = document.querySelector(".cancel");
const uploadContainer = document.querySelector(".uploadImage");

upload.addEventListener("click",function(){
    uploadContainer.style = "visibility:visible;";
});

cancel.addEventListener("click",function(){
    uploadContainer.style = "visibility:hidden;";
});

