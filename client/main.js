$(document).ready(function() {
  // get a quote from the server when the page loads and add it to the dom

  // let url = 'http://localhost:${port}'

  getQuote();


  // when the user enters data and clicks submit, post the quote to the server


  $('#submit').click((e) => { e.preventDefault(); let quote = $('input').val(); addQuote(quote); });


  function getQuote(){
   //YOUR CODE HERE, Add a GET request
     $.ajax({
       url: 'http://localhost:3000',
       type: 'GET',
       success: function(quotes) {
         $('.quote').text(quotes)
         console.log('RECEIVED!')
       },
       error: function () {
         console.error('failed to get messages');
        }
      });
    }


  function addQuote(quote){
    // console.log({quote})

    $.ajax({
       url: 'http://localhost:3000/quote',
       type: 'POST',
       data: JSON.stringify(quote),
       contentType: 'application/json',
       success: function() {
          console.log('message sent');
       },
       error: function() {
          console.error('failed to post messages');
          }
        });
 }});

