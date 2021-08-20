const Name = "Oladepo Tesleem Tayo";
const btn = document.querySelector('button');
const showName = () => {
    console.log(Name);
    let printHere = document.querySelector("#Printhere");
    printHere.textContent = Name;
}
btn.addEventListener('click', showName)
