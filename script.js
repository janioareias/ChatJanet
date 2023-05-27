function enviarPergunta() {
    var perguntas = [
        "Janet.",
                "Janet Janet.",
                "Janet Janet Janet.",
                "Janet? Janet!",
                "Janet, Janet!",
                "Janet, Janet, Janet!",
                "Janet Janet Janet Janet!",
                "Janet Janet, Janet, Janet.",
                "Janet Janet? Janet, Janet!",
                "Janet? Janet, Janet, Janet!",
                "Janet Janet Janet? Janet, Janet, Janet!",
                "Janet Janet, Janet! Janet, Janet.",
                "Janet? Janet, Janet, Janet. Janet, Janet!",
                "Janet, Janet, Janet Janet! Janet, Janet, Janet, Janet.",
                "Janet Janet Janet Janet Janet?",
                "Janet, Janet, Janet, Janet Janet!",
                "Janet Janet, Janet Janet, Janet, Janet!",
                "Janet, Janet, Janet, Janet, Janet, Janet!",
                "Janet Janet Janet Janet Janet Janet Janet!",
                "Janet Janet, Janet Janet, Janet, Janet, Janet, Janet.",
                "Janet Janet Janet Janet Janet Janet, Janet!",
                "Janet Janet Janet Janet Janet, Janet, Janet, Janet!",
        
    ];

    var pergunta = document.getElementById("userInput").value;
    if (pergunta.trim() === "") {
        alert("Janet não pode estar em branco");
        return;
    }

    document.getElementById("chatbox").innerHTML += "<p><strong>Usuário:</strong> " + pergunta + "</p>";
    document.getElementById("userInput").value = "";

    setTimeout(function() {
        var resposta = perguntas[Math.floor(Math.random() * perguntas.length)];
        document.getElementById("chatbox").innerHTML += "<p><strong>ChatJanet:</strong> " + resposta + "</p>";
    }, 1000); // Atraso de 1 segundo (1000 milissegundos).
}