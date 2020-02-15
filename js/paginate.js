const portfolioContainer = document.querySelector(".portfolio-container").childElementCount;

for(let x=1;x<=portfolioContainer;x++){
    const page = document.querySelector(".page:nth-child(" + x + ")" );
    page.style = "display:none;"
}

const firstPage = document.querySelector(".page:nth-child(1)" );
firstPage.style = "display:flex;"

const list = document.querySelector(".pageList:nth-child(1)" );
list.style = "color:#F05F40;";

const pageContainer = document.querySelector(".page-container").childElementCount;

for(let x=1;x<=pageContainer;x++){
    const list = document.querySelector(".pageList:nth-child(" + x + ")" );
    list.addEventListener("click",function(){
        pageReset();
        list.style="color:#F05F40;"
        const page = document.querySelector(".page:nth-child(" + x + ")" );
        page.style = "display:flex;"
    });
}

function pageReset(){
    const portfolioContainer = document.querySelector(".portfolio-container").childElementCount;

    for(let x=1;x<=portfolioContainer;x++){
        const page = document.querySelector(".page:nth-child(" + x + ")" );
        page.style = "display:none;"
    }


    const pageContainer = document.querySelector(".page-container").childElementCount;

    for(let x=1;x<=pageContainer;x++){
        const list = document.querySelector(".pageList:nth-child(" + x + ")" );
        list.style="color:#FFFFFF;"
    }

};
