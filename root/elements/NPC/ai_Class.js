//classes for the ai not the NPC creation class but just for the creation of ai types

//AI's needed
//-Tiger / Big cat AI - Should be fast and agile as well as smart
//-Boss level AI - Smart - but relatively Slow - With big attacks
//-Peasants - Small Brain - Slow - Small low ranged attacks
//-Gladiators - Medium Brain - medium Speed - Medium Range
//all needing a different class for each

class MakeAI{
    constructor(type,rootName){
        this.type = type;
        this.root = rootName;
        this.difficulty = this.getInstructions(type);
        this.instruct = this.getInstructions(type);
    }
    getInstructions(type){
        if (type == "Gladiator") {
            this.difficulty = "adept";
        }
        if (type == "Tiger") {
            this.difficulty = "advanced";
        }
        if (type == "Peasant") {
            this.difficulty = "Low";
        }
        if (type == "Boss") {
            this.difficulty = "Extreme";
        }
    }
    
    
}