(() => {
    const Projects_list_container = document.getElementById("projects_list_inner_container");

    var CreateProjectItemUI = (project_object) => {
        var product_item = document.createElement("a");
        product_item.classList.add("project_item");
        product_item.href = project_object.project_page_url;
        product_item.target = "_blank";
        product_item.innerHTML = `<img src="${project_object.project_image_url}" alt="${project_object.project_name}">
                                <div class="project_description_container">
                                    <p class="project_name">${project_object.project_name}</p>
                                    <p class="project_description">${project_object.project_description}</p>
                                </div>`;
        
        Projects_list_container.appendChild(product_item);
    }

    //show all projects in the website
    projects.forEach(project => {
        CreateProjectItemUI(project);
    });

    //activating the scrolling back to the top functionality
    var page_body = document.body;

    var back2top_btn = document.getElementById("back2top_btn");
    back2top_btn.style.visibility = "hidden";//make this invisible from start
    back2top_btn.onclick = function(){
        window.scrollTo(0,0);
    }

    let scroll_level = 0;//0 - 1
    let trigger_level = 0.1;//trigger at 10% of the page scroll
    let back2top_btn_active = false;

    document.addEventListener("scroll", (event) => {
        scroll_level = window.scrollY/page_body.scrollHeight;
        // console.log(scroll_level.toFixed(2));

        if(scroll_level >= trigger_level && !back2top_btn_active){
            //activate the "back to top" button
            back2top_btn.style.visibility = "visible";//make the button visible
            back2top_btn_active = true;
        }
        else if(scroll_level < trigger_level && back2top_btn_active){
            //deactivate the "back to top" button
            back2top_btn.style.visibility = "hidden";//make the button invisible
            back2top_btn_active = false;
        }
    });
})();