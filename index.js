const Question=document.querySelectorAll(".question");
//console.log(Question)

Question.forEach(function(ques){

const Btn=ques.querySelector(".ques-btn");
//console.log(Btn);

Btn.addEventListener("click",function(e){
    const Ans=e.currentTarget.parentElement.parentElement.parentElement;
    console.log(Ans);
ques.classList.toggle("show-text");
  Ans.classList.toggle("show-text");
})
})

