
document.getElementById("dateToday").innerText = dayjs().format("DD MMM YYYY");
document.getElementById("dateNew").innerText = dayjs().format("DD MMM YYYY");


document.addEventListener("input", function(){
    let daysToAdd = document.getElementById("addDays").value;
    document.getElementById("dateNew").innerText = dayjs().add(daysToAdd, 'day').format("DD MMM YYYY");
});
