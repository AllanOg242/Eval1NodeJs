server.on('connection', (socket) => {
    console.log('connexion');
});
server.listen(5000);
console.log('serveur ecoute sur le port 5000');