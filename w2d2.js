function catBuilder(name, color, toys){
    let cat = {}
    cat.name = name
    cat.color = color
    cat.toys = toys
}

function catBuilder(name, color, toys){
    let cat = {}
    cat["name"] = name
    cat["color"] = color // we can key in objects when they are strings
    cat["toys"] = toys
}

function catBuilder(name, color, toys){
    let cat = {
    name: name,
    color: color,
    toys: toys,
    }
    return cat
}




