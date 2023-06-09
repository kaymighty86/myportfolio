(()=>{
    //attach the stylesheet
    var styleSheet = document.createElement("link");
    styleSheet.href = `./style.css?ver=${(new Date()).getTime()}`;//the extra parameter is for specifying the version (a custom parameter which gets ignored by the server but will make the browser exeute it everytime since it will think its a new file).
    styleSheet.rel = "stylesheet";
    styleSheet.type = "text/css";
    document.head.appendChild(styleSheet);

    //attach the projects script
    var projectsListScript = document.createElement("script");
    projectsListScript.src = `./projects.js?ver=${(new Date()).getTime()}`;
    projectsListScript.type = "text/javascript";
    document.head.appendChild(projectsListScript);

    //attach the app script
    var appScript = document.createElement("script");
    appScript.defer = true;
    appScript.src = `./app.js?ver=${(new Date()).getTime()}`;
    appScript.type = "text/javascript";
    document.head.appendChild(appScript);
})();