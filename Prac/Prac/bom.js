const text = document.getElementById('favchap').value
const button=document.addEventListener('click', function(){
    if(text!=null)
    {
      const li = document.createElement('li')
      const delbtn = document.createElement('button')
      li.innerHTML = text
      delbtn.innerHTML = "X"
      document.getElementById('list').appendChild(li)
      li.appendChild(delbtn)

      delbtn.addEventListener('click', function(){
        this.closest('li').remove();
        // delbtn.parentElement.remove(li);
        // li.parentNode.removeChild(li)
        // document.getElementById('list').removeChild(li)
        // document.getElementById('list').innerHTML=""
        return
     })

     document.getElementById('favchap').focus()
     document.getElementById('favchap').value = ""
    }
})
