$(document).ready(function(){  
    console.log("hello");
    $('#search').click(function searchWiki(){
       var searchInput = $('#searchInput').val();
       //get wiki api data
       $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchInput+'&format=json',function(data){
         console.log(data);
         //output each result as li
         var html='';
         for(var i=0;i<10;i++){
           html += '<li class="result"><a href="'+data[3][i]+'" target="_blank"><span class="result-title">'+data[1][i]+'</span><br/><span class="result-summary">'+data[2][i]+'</span></a></li><br/>';
           $('#output').html(html);
         }
       });
     });
     //random quote button
     $('#random').click(function(){
       window.open("https://en.wikipedia.org/wiki/Special:Random");
     });
     //run function by pressing enter
     $('#searchInput').keyup(function(event){
       if(event.keyCode == 13){
         $('#search').click();
       }
     }); 
   });