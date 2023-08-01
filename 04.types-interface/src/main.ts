interface Animal {
    name :string
}

interface Bear extends Animal {
    honey : boolean;

}

const bear1 : Bear= {
    name:'honey bear',
    honey : true
}

type Animals ={
    name : string 
}

type Bears = Animals & {
    honey : boolean
}

const bear2  : Bears ={
    name : "honey",
    honey : true
}

interface Type {
    name  :string
}

interface Type {
    honey :boolean
}

const feature : Type ={
    name : "dffg",
    honey : true
}

