/**
 * Project: KalkieDate
 * Description: Get Current Date and set New Date calculated by adding
 *              days given by user
 * Date Created: 26-Oct-2022
 * Author: srs404 (Github) | https://srs404.com
 */

// Set Current Date to Body -> h1(id) -> dateToday
document.getElementById("dateToday").innerText = dayjs().format("DD MMM YYYY");

// Set Current Date to Body -> h1(id) -> dateNew (Default)
document.getElementById("dateNew").innerText = dayjs().format("DD MMM YYYY");

// Calculate and set dateNew upon any changes in any input which here
// Contains only one input box(addDays).
document.addEventListener("input", function(){
    document.getElementById("dateNew").innerText = dayjs().add(document.getElementById("addDays").value, 'day').format("DD MMM YYYY");
});

function clearTextBox() {
    document.getElementById("addDays").value = "";
}
