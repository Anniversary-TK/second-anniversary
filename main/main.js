let splash = document.querySelector(".splash");
let heart = document.querySelectorAll(".heart");
let couple = document.querySelector(".couple");
let messagex = document.querySelector(".message");
let letter = document.querySelector("#letter");
let slider = document.querySelectorAll(".slider-btn");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let count = 0;
let message = [];

message[0] = "Ohh, hindi ko akalain na 2 years na pala tayo";
message[1] = "Kahit nag-aaway man tayo, lab na lab natin sa isa't-isa";
message[2] = "Kahit seloso ako :)";
message[3] = "Kahit palaaway ako :)";
message[4] = "Kahit napaka maldito ako :)";
message[5] = "Kahit na napaka badboy ako :}";
message[6] = "Kahit...";
message[7] = "Hindi ka";
message[8] = "Nangsusuyo :(";
message[9] = "Na kahit ako'y nagagalit sa iyo :(";
message[10] = "Pero okay lang yun sa akin ;)";
message[11] = "Basta...";
message[12] = "Importante";
message[13] = "ay";
message[14] = "mahalaga";
message[15] = "Hahaha, joke ang mahalaga...";
message[16] = "Mahal na mahal kita. :<3";
message[17] = "Good girl ka diba? :<3";
message[18] = "Ako badboy? X)";
message[19] = "(Oo daw sabi mo)";
message[20] = "(Napatawa ka nga)";
message[21] = "(Tapos panay kilig at tawa mo)";
message[22] = "Hahaha ako pa ba! X)";
message[23] = "Huhuhu, bakit kasi napakaseloso ko? :(";
message[24] = "Tanungin mo ako kung bakit?";
message[25] = "Ahh bakit daw X)";
message[26] = "Uyog ka kasi X)";
message[27] = "Hahaha, basta nagseselos lang ako";
message[28] = "Tapos madali pa ako nagtatampo X)";
message[29] = "Kasi...Kasi...";
message[30] = "Kapag nakita na...";
message[31] = "nag-react";
message[32] = "nag-send friend request";
message[33] = "may nag message sa iyo";
message[34] = "at nag pa pic";
message[35] = "sa mga unggoy na yun";
message[36] = "HMMMMM!...";
message[37] = "Nagagalit na ako kaagad, hehehe";
message[38] = "Auto 4-way strike na!";
message[39] = "Auto-block";
message[40] = "Auto-delete";
message[41] = "Auto-unfriend";
message[42] = "Auto-report/remove";
message[43] = "Yan ang ginawa ko, HAHAHA";
message[44] = "Auto Terminate pero level 1 palang yan whahaahah";
message[45] = "Ako pa ba";
message[46] = "Sorry na :(...";
message[47] = "Kung ganyan ako palagi :(";
message[48] = "Kasi...";
message[49] = "Kasi...";
message[50] = "Pinoprotektahan...";
message[51] = "Ipinagdamot...";
message[52] = "At";
message[53] = "Natatakot :(...";
message[54] = "Na";
message[55] = "mapunta ang atensyon mo sa iba :(";
message[56] = "At saka...";
message[57] = "meron pa...HAHAHA";
message[58] = "di";
message[59] = "Nag-aalala ako :(";
message[60] = "na baka maraming";
message[61] = "lalapit na unggoy";
message[62] = "sa buhay mo";
message[63] = "kaya";
message[64] = "akin";
message[65] = "ka lang.";
message[66] = "Kaya...";
message[67] = "wala nang";
message[68] = "iba";
message[69] = "makakahawak";
message[70] = "at";
message[71] = "makakalapit";
message[72] = "sa iyo ;)";
message[73] = "maliban sa...";
message[74] = "pamilya,";
message[75] = "na";
message[76] = "sa";
message[77] = "akin";
message[78] = "HAHAHA";
message[79] = "kaya";
message[80] = "ganyan ako";
message[81] = "ka-tindi";
message[82] = "mag-mahal";
message[83] = "sa iyo. ;)";
message[84] = "Kaya...";
message[85] = "ang";
message[86] = "pangako ko";
message[87] = "sa iyo...";
message[88] = "na hinding-hindi";
message[89] = "kita";
message[90] = "iiwan,";
message[91] = "lolokohin,";
message[92] = "sasaktan,";
message[93] = "at";
message[94] = "pangako ko";
message[95] = "sa iyo";
message[96] = "na";
message[97] = "iingatan";
message[98] = "at";
message[99] = "aalgaan kita";
message[100] = "na parang";
message[101] = "prinsesa";
message[102] = "tulad ng pag aalaga";
message[103] = "ng mga";
message[104] = "kaibigan";
message[105] = "at";
message[106] = "magulang mo";
message[107] = "Kaya";
message[108] = "HAPPY";
message[109] = "2nd";
message[110] = "ANNIVERSARY!!!";
message[111] = "I LOVE YOU <3 XOXO";
message[112] = "Stay";
message[113] = "strong";
message[114] = "sa atin dalawa";
message[115] = "and";
message[116] = "I MISS YOU <3";
message[117] = "SO MUCH";
message[118] = "MWUAAAAAHHHHH!";
message[119] = "XOXO";
message[120] = "MMMMMPAHHHHH";
message[121] = "THE END.";

setTimeout(() => {
    splash.style.opacity = 0;
    splash.style.transition = "opacity 0.5s";
    for (r = 0; r < heart.length; r++) {
        heart[r].style.scale = 1;
        heart[r].style.transition = `scale ${r + 0.3}s`;
    }

    couple.style.scale = 1;
    couple.style.transition = "scale 0.5s";

    messagex.style.scale = 1;
    messagex.style.transition = "scale 0.2s";

    left.style.marginRight = 0;
    right.style.marginLeft = 0;

    left.style.transition = "margin-right 0.7s";
    right.style.transition = "margin-left 0.7s";

    setTimeout(() => (splash.style.display = "none"), 1000);
}, 3000);

function OnPrevious() {
    letter.style.opacity = 0;
    letter.style.transition = "opacity 0.5s";
    slider[0].style.backgroundColor = "#80808048";
    slider[0].style.transition = "background-color 0.5s";

    setTimeout(() => {
        slider[0].style.backgroundColor = "#00000000";
        slider[0].style.transition = "background-color 0.5s";
    }, 300);

    setTimeout(() => {
        letter.style.opacity = 1;
        letter.style.transition = "opacity 1s";
    }, 700);

    setTimeout(() => {
        if (count == -1) {
            count = message.length - 1;
            letter.textContent = message[count--];
        } else {
            letter.textContent = message[count--];
        }
    }, 600);

    return count;
}

function OnNext() {
    letter.style.opacity = 0;
    letter.style.transition = "opacity 0.5s";
    slider[1].style.backgroundColor = "#80808048";
    slider[1].style.transition = "background-color 0.5s";

    setTimeout(() => {
        slider[1].style.backgroundColor = "#00000000";
        slider[1].style.transition = "background-color 0.5s";
    }, 300);

    setTimeout(() => {
        letter.style.opacity = 1;
        letter.style.transition = "opacity 1s";
    }, 700);

    setTimeout(() => {
        if (count == message.length) {
            count = 0;
            letter.textContent = message[count++];
        } else {
            letter.textContent = message[count++];
        }
    }, 600);

    return count;
}
