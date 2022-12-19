const Question=document.querySelectorAll(".question");
//console.log(Question)
const Answer=document.querySelectorAll(".first");
//console.log(Answer);
Question.forEach(function(ques){

const Btn=ques.querySelector(".ques-btn");
//console.log(Btn);

Btn.addEventListener("click",function(e){
    const Ans=e.currentTarget.parentElement.parentElement.parentElement;
   // console.log(Ans);
   Answer.forEach(function(item){
    if(item !== Ans )
    {
      item.classList.remove("show-text");
    }
   })
  Ans.classList.toggle("show-text");
  ques.classList.toggle("show-text");
})
})

