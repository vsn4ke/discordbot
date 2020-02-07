
exports.process = function(message){
    let fullCommand = message.content.substr(1)
    let splitCommand = fullCommand.split(' ')
    let command = splitCommand[0]
    let args = splitCommand.slice(1)

    //console.log('Command: ' +command)
    //console.log('Args : ' + args)

    if(command == 'help'){
        help(args, message)
    }else if(command == 'multiply'){
        multiply(args, message)
    }else{
        message.channel.send('Commande : "' + command + '" introuvable')
    }

}

function help(args, message){
    if(args.length > 0){
        message.channel.send('Vous avez besoin d\'aide pour : ' + args + '.')
    }else{
        message.channel.send('Spécifiez votre requête.')
    }
}

function multiply(args, message){
    if(args.length < 2){
        message.channel.send('Il faut au moins deux valeur pour une multiplication')
        return
    }

    let product = 1
    args.forEach((v) => {
      product = product * parseFloat(v)  
    })

    message.channel.send('Le produit de ' + args + ' vaut ' + product + '.')
}



