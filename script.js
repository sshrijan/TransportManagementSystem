//content targets
const main_dash = document.getElementById("main-dash");
const vechiel_dash = document.getElementById("vechiel-dash");
const driver_dash = document.getElementById("driver-dash");
const incident_dash = document.getElementById("incident-dash");
const assign_dash = document.getElementById("assign_dash");


//nav targets
const vechiel_nav = document.getElementById("vechiel-nav");
const home = document.getElementById("home");
const driver = document.getElementById("driver");
const incident = document.getElementById("incident");
const assign_pickup = document.getElementById("assign_pickup");


//events
vechiel_nav.addEventListener("click",()=>{
    main_dash.classList.add("d-none");
    driver_dash.classList.add("d-none");
     incident_dash.classList.add("d-none");
    vechiel_dash.classList.remove("d-none");
})

home.addEventListener("click",()=>{
    vechiel_dash.classList.add("d-none");
    driver_dash.classList.add("d-none");
     incident_dash.classList.add("d-none");
       assign_dash.classList.add("d-none");
    main_dash.classList.remove("d-none");
})

driver.addEventListener("click",()=>{
    main_dash.classList.add("d-none");
    vechiel_dash.classList.add("d-none");
     incident_dash.classList.add("d-none");
       assign_dash.classList.add("d-none");
    driver_dash.classList.remove("d-none");
})
incident.addEventListener("click",()=>{
    main_dash.classList.add("d-none");
    vechiel_dash.classList.add("d-none");
    driver_dash.classList.add("d-none");
      assign_dash.classList.add("d-none");
    incident_dash.classList.remove("d-none");
})

assign_pickup.addEventListener("click",()=>{
    main_dash.classList.add("d-none");
    vechiel_dash.classList.add("d-none");
    driver_dash.classList.add("d-none");
    incident_dash.classList.add("d-none");
    assign_dash.classList.remove("d-none");
})

