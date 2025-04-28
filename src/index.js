let controller = [
    "Brimstone",
    "Omen",
    "Viper",
    "Astra",
    "Harbor",
    "Clove"
]

let duelist = [
    "Reyna",
    "Jett",
    "Phoenix",
    "Raze",
    "Yoru",
    "Neon",
    "Iso",
    "Waylay",
]

let initiator = [
    "Sova",
    "Skye",
    "Breach",
    "KAY/O",
    "Gekko",
    "Tejo",
    "Fade",
]

let sentinel = [
    "Sage",
    "Cypher",
    "Killjoy",
    "Deadlock",
    "Vyse",
]

document.getElementById("spin-button").addEventListener("click", () => {
    const role = document.getElementById("role-select").value;
    let agents;

    // Selecciona el arreglo según el rol
    if (role === "controller") agents = controller;
    else if (role === "duelist") agents = duelist;
    else if (role === "initiator") agents = initiator;
    else if (role === "sentinel") agents = sentinel;

    // Genera la ruleta
    const roulette = document.getElementById("roulette");
    roulette.innerHTML = ""; // Limpia la ruleta
    const angleStep = 360 / agents.length;

    agents.forEach((agent, index) => {
        const agentDiv = document.createElement("div");
        agentDiv.classList.add("agent");
        agentDiv.style.backgroundImage = `url(img/${agent}.png)`;
        agentDiv.style.transform = `rotate(${index * angleStep}deg) translate(150px) rotate(-${index * angleStep}deg)`;
        roulette.appendChild(agentDiv);
    });

    // Gira la ruleta
    const randomSpin = Math.floor(Math.random() * 360) + 360 * 5; // Gira al menos 5 vueltas
    roulette.style.transition = "transform 3s ease-out";
    roulette.style.transform = `rotate(${randomSpin}deg)`;

    // Selecciona el agente al detenerse
    setTimeout(() => {
        const selectedIndex = Math.floor((randomSpin % 360) / angleStep);
        const selectedAgent = agents[selectedIndex];
        document.getElementById("selected-agent").textContent = selectedAgent;

        // Actualiza la imagen del agente seleccionado
        const agentImage = document.getElementById("agent-image");
        agentImage.src = `img/${selectedAgent}.png`;
        agentImage.alt = selectedAgent;
        agentImage.style.display = "block";
    }, 3000); // Espera a que termine la animación
});