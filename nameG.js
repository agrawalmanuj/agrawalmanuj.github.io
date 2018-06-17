document.querySelector('#generate-names').addEventListener('submit',loadNames);

function loadNames(e){
     e.preventDefault();
     
     const origin = document.getElementById('country').value;
     const genre = document.getElementById('genre').value;
     const amount = document.getElementById('quantity').value;


     var url = 'http://uinames.com/api/?';

     if(origin !== ''){
          url += `region=${origin}&`;
     }
     // Read the genre and append to the url
     if(genre !== ''){
          url += `gender=${genre}&`;
     }    
      // Read the amount and append to the url
     if(amount !== ''){
          url += `amount=${amount}&`;
     }

     var xhr = new XMLHttpRequest();

     xhr.open('GET',url,true);

     xhr.onload=function(){
          if(this.status === 200)
          {
               var names=JSON.parse( this.responseText );
               var html='<h2>Generate Names</h2>';
               html=html+'<ul>';
               names.forEach( function(name) {
                    html=html+`<li>${name.name} ${name.surname}</li>`;
               });

          }
          html=html+'</ul>';
          document.querySelector('#result').innerHTML = html;
     }
     xhr.send();


}





