
  document.addEventListener('DOMContentLoaded', () => {
  
  document.getElementById("logo").innerHTML = "JavaScript"
    document.getElementById("logo").style.color="red";
    // document.getElementById("logo").style.display="none";

    document.getElementById("logo").classList.add("new_class");

    // document.getElementsByClassName("banner").style.color = "red";

    var example = 'example value';
    console.log(example)

function greet(name){
    console.log('Hello', name)
}
greet('Eugene');

}
);