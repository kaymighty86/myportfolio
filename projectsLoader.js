var projectsHasLoaded;//this is a function that can be used to know when the projects have been loaded. It passes the project as a parameter

(()=>{
    var projects = undefined;
    
    (async function loadProjects(){

        projects = await getProjects();

        projectsHasLoaded!= undefined && projectsHasLoaded(projects);//execute this for anyone that needs to know
    })();

    function getProjects(){
        return new Promise((resolve, reject)=>{
            const projectsRequest = new XMLHttpRequest();

            projectsRequest.onreadystatechange = function(){
                if(this.readyState === 4){
                    if(this.status === 200){//if it was successfully fetched
                        console.log(this.responseText);
                        const fetchedProjects = JSON.parse(this.responseText);
                        resolve(fetchedProjects);
                    }
                    else{
                        reject(new Error('Encountered error while trying to fetch projects. Please try reloading this page. :-('));
                    }
                }
            }

            projectsRequest.open('GET', './data/projects.json', true);
            projectsRequest.send();
        });
    }
})();
