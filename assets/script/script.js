
let dataBlog = [];



function addBlog(event) {
    event.preventDefault();
    
    let title = document.getElementById("inputProjectName").value;
    let startDate = document.getElementById("inputStartDate").value;
    let endDate = document.getElementById("inputEndDate").value;
    let description = document.getElementById("inputDescription").value;
    let image = document.getElementById("inputImage").files;
    
  
    image = URL.createObjectURL(image[0]);


    let blog = {
        title,
        startDate,
        endDate,
        description,
        image
    };

    dataBlog.push(blog)

    console.log(dataBlog);

    renderBlog();

}

function renderBlog() {

    document.getElementById("contents").innerHTML = "";

    for(let i=0; i<dataBlog.length; i++) {
        document.getElementById("contents").innerHTML += `
        <div class="card">
            <img src=${dataBlog[i].image} alt="gambar">
            <a href="./detailpage.html">${dataBlog[i].title}</a>
            <p id="time">${dataBlog[i].startDate} - ${dataBlog[i].endDate}</p>
            <p id="description">${dataBlog[i].description}</p>  
            <button>Edit</button>
            <button>Delete</button>
      </div>
    `;

    }
}