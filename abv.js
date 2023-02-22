// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
const first = document.querySelector('.from');

document.addEventListener('listen', function (e) {
    console.log(first.value)
    e.preventDefault
    if (first===first) {
        console.log(first)
    } else {
        console.log(first)
    }
})








// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.
const nums = document.querySelector('messageBtn');
    messageBtn.addEventListener('click',()=>(
        messageBtn.classList.add('animate_animated','nimate_fadeInLeftBig')

));
















// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убeрать.
const erorEl= form.document.querySelector('.error');
const text=document.querySelector('.body');
const InputEl =document.querySelector('.check')

text.addEventListener('click',function (e)
{
    const target =e.target;
    console.log(target.checked); 

});
text.addEventListener('submit', function (e) {
   if (InputEl.checked) {
    console.log("e")
   } else {
    console.log("erro")
   }
e.preventDefault


});
