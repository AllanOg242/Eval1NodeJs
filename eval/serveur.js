server.on('connection', (socket) => {
    console.log('connexion');
});
server.listen(3006);
console.log('serveur ecoute sur le port 3006');