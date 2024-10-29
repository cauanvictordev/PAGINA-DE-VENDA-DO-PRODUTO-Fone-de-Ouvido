<?php
// Conexão com o banco de dados
$host = 'localhost';
$user = 'seu_usuario';
$password = 'sua_senha';
$db = 'loja_online';

$conn = new mysqli($host, $user, $password, $db);

if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Verificar se os dados do formulário foram enviados
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $conn->real_escape_string($_POST['nome']);
    $email = $conn->real_escape_string($_POST['email']);
    $telefone = $conn->real_escape_string($_POST['telefone']);

    $sql = "INSERT INTO pedidos (nome, email, telefone) VALUES ('$nome', '$email', '$telefone')";

    if ($conn->query($sql) === TRUE) {
        echo "<p>Pedido realizado com sucesso!</p>";
    } else {
        echo "<p>Erro ao processar pedido: " . $conn->error . "</p>";
    }
}

$conn->close();
?>
