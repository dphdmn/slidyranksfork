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

let switchBtnReqs = $("#switch-reqs");

switchBtnReqs.on("change", function(){
    toggleTableVisibility()
});

function toggleTableVisibility() {
    // Get all tables on the page
    const tables = document.querySelectorAll('table');

    // Check if the function has been called before
    const isToggled = toggleTableVisibility.toggled;

    if (!isToggled) {
        // First call: Hide all thead elements except for the top table
        tables.forEach((table, index) => {
            const thead = table.querySelector('thead');
            if (thead) {
                if (index === 0) {
                    // For the top table, hide the <tr class="req-row"> element
                    const reqRow = table.querySelector('tr.req-row');
                    if (reqRow) {
                        reqRow.style.display = 'none';
                    }
                } else {
                    // For other tables, hide the entire thead
                    thead.style.display = 'none';
                }
            }
        });

        // Mark the function as toggled
        toggleTableVisibility.toggled = true;
    } else {
        // Second call: Restore the original state
        tables.forEach((table, index) => {
            const thead = table.querySelector('thead');
            if (thead) {
                if (index === 0) {
                    // For the top table, restore the <tr class="req-row"> element
                    const reqRow = table.querySelector('tr.req-row');
                    if (reqRow) {
                        reqRow.style.display = '';
                    }
                } else {
                    // For other tables, restore the entire thead
                    thead.style.display = '';
                }
            }
        });

        // Mark the function as not toggled
        toggleTableVisibility.toggled = false;
    }
}
toggleTableVisibility.toggled = false;
