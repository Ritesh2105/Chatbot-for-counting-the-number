
module.exports = class Game{
    constructor(){
        this.nCurrent = 0;
    }
    makeAMove(sInput){
        let aReturn =[];
        if(this.nCurrent==0){
            aReturn.push("Welcome to Game21.");
            aReturn.push("The Object is to get the computer to count 21.");
            aReturn.push("Start by entering 1 to 3 digits from 1 onwards");
            this.nCurrent = 1;
            return aReturn;   
        }     
        let aInput =sInput.split(',');
        this.nCurrent =Number(aInput[aInput.length - 1]);
        this.nCurrent += 1;
        aReturn.push(this.nCurrent);
        return aReturn;
    }
}