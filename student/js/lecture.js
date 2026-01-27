let lectureL=[
    {
        id: 0,
        title:"Maruza",
        link: "sourses/books/Maruza/Maruza.pdf",
    },
    {
        id: 1,
        title:"Maruza",
        link: "sourses/books/Maruza/2-Ma'ruza.pdf",
    },
    {
        id: 2,
        title:"Maruza",
        link: "sourses/books/Maruza/3-Ma'ruza.pdf",
    },
    {
        id: 3,
        title:"Maruza",
        link: "sourses/books/Maruza/4-Ma'ruza.pdf",
    },
    {
        id: 4,
        title:"Maruza",
        link: "sourses/books/Maruza/5-Ma'ruza.pdf",
    },
    {
        id: 5,
        title:"Maruza",
        link: "sourses/books/Maruza/6-Ma'ruza.pdf",
    },
    {
        id: 6,
        title:"Maruza",
        link: "sourses/books/Maruza/7-Ma'ruza.pdf",
    },
    {
        id: 7,
        title:"Maruza",
        link: "sourses/books/Maruza/8-Ma'ruza.pdf",
    },
    {
        id: 8,
        title:"Maruza",
        link: "sourses/books/Maruza/9-Ma'ruza.pdf",
    },
    {
        id: 9,
        title:"Maruza",
        link: "sourses/books/Maruza/10-Ma'ruza.pdf",
    },
    {
        id: 10,
        title:"Maruza",
        link: "sourses/books/Maruza/11-Ma'ruza.pdf",
    },
    {
        id: 11,
        title:"Maruza",
        link: "sourses/books/Maruza/12-Ma'ruza.pdf",
    },
    {
        id: 12,
        title:"Maruza",
        link: "sourses/books/Maruza/13-Ma'ruza.pdf",
    },
    {
        id: 13,
        title:"Maruza",
        link: "sourses/books/Maruza/14-Ma'ruza.pdf",
    },
    {
        id: 14,
        title:"Maruza",
        link: "sourses/books/Maruza/15-Ma'ruza.pdf",
    }
]

const lectureBtns=document.querySelector("#lectureLink");
const objL=document.querySelector("#objL");
const count=document.querySelector("#lecCount");
$(document).ready(() => {
    count.textContent=`${lectureL.length} ta`
    for(let i=0;i<lectureL.length;i++){
        lectureBtns.innerHTML+=`<button 
                                    type="button" 
                                    class="btn btn-lg btn-primary w-100 text-start mb-2 mt-2" 
                                    style="font-size: 13px; height:50px;"
                                    onclick="setLink(${i})">
                                    ${i+1}-${lectureL[i].title}
                                </button>`;
    }
});

function setLink(i){
    objL.data=lectureL[i].link;
}