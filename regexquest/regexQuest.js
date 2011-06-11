// define our namespace
var rq = {};

rq.MatchResult = function(desiredText, matchedText) {
    this.matchedText = matchedText;
    this.fullMatch = function() {
        return desiredText === matchedText;
    };
    this.partialMatch = function() {
        return matchedText.indexOf(desiredText) != -1;
    };
};

rq.Zombie = function(zombieText, infection) {
    this.zombieText = zombieText;
    this.infection = infection;
    this.checkMatch = function(regex) {
        var match = zombieText.match(regex);
        var matchedText = "";
        if (match) {
            matchedText = match.join("");
        }
        return new rq.MatchResult(infection, matchedText);
    }
};
