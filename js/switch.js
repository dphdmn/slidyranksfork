let tierlist = [
  "ascended",
  "grandmaster-iii",
  "grandmaster-ii",
  "grandmaster-i",
  "master-iii",
  "master-ii",
  "master-i",
  "diamond-iii",
  "diamond-ii",
  "diamond-i",
  "platinum-iii",
  "platinum-ii",
  "platinum-i",
  "gold-iii",
  "gold-ii",
  "gold-i",
  "silver-iii",
  "silver-ii",
  "silver-i",
  "bronze-iii",
  "bronze-ii",
  "bronze-i",
  "beginner",
  "unranked"
];
let switchBtn = $("#switch");

switchBtn.on("change", function(){
    tierlist.forEach((tier) => {
        changeTable(tier);
    });
});

function changeTable(tier_table){
    let elements = $(`#${tier_table}-table`).children(".player-row").children();

    $(elements).each((i) => {
        let element = $(elements[i]);
        let tier = element.attr("tier");

        if(tier) {
            if(tierlist.indexOf(tier) <= tierlist.indexOf(tier_table)){
                if(tierlist.indexOf(tier) < tierlist.indexOf(tier_table)){
                    if(switchBtn.is(":checked")){
                        $(element).css("font-weight", 800);
                    }
                    else{
                        $(element).css("font-weight", "");
                    }
                }
            }
            else{
                if(switchBtn.is(":checked")){
                    $(element).css("background-color", "grey");
                }
                else{
                    $(element).css("background-color", "");
                }
            }
        }
    });
}
