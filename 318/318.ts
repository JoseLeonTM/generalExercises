
function listWords(sentence) {
    var regex = /\b[\w']+\b/g;
    var words = sentence.match(regex);
    var reps = {};
    for (let i in words) {
        if (reps[words[i]]) {
            reps[words[i]]++;
        }
        else {
            reps[words[i]] = 1;
        }
    }
    console.log(reps);
}

var s = "And who are you, the proud lord said,"+
"that I must bow so low?"+
"Only a cat of a different coat,"+
"that's all the truth I know."+
"In a coat of gold or a coat of red,"+
"a lion still has claws,"+
"And mine are long and sharp, my Lord,"+
"as long and sharp as yours."+
"And so he spoke, and so he spoke,"+
"that lord of Castamere,"+
"But now the rains weep o'er his hall,"+
"with no one there to hear."+
"Yes, now the rains weep o'er his hall,"+
"and not a soul to hear."+
"And who are you, the proud lord said,"+
"that I must bow so low?"+
"Only a cat of a different coat,"+
"that's all the truth I know."+
"In a coat of gold or a coat of red,"+
"a lion still has claws,"+
"And mine are long and sharp, my lord,"+
"as long and sharp as yours."+
"And so he spoke, and so he spoke,"+
"that lord of Castamere,"+
"But now the rains weep o'er his hall,"+
"with no one there to hear."+
"Yes, now the rains weep o'er his hall,"+
"and not a soul to hear."+
listWords(s);