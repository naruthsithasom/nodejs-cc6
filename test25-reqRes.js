const http = require('http')

http.createServer( (req, res) => {

  //ตัวอย่างการเขียน Header 
  //ex.1 Header 200
  // res.writeHead( 200, {
  //   'content-type':'text/html'
  // })

  //ex.2 Header 200
  res.statusCode = 200
  res.setHeader('content-type','text/html')//เพื่อ html ได้

  //---------- Main -----------
  if(req.url == '/'){
    res.write('<h1 align="center" style="color: #0044ff;" >Welcome to sex shop. You love sex?<h1>')
    res.write('<a href="sex69"> Link here </a> <br>')
    res.write('<a href="jobs"> Jobs </a>')
    return res.end()
  }
  if(req.url == '/sex69') {
    res.write('<body style="background-color: black; color: red; " ></body>')
    res.write('<h1>Yes, you love sex69 </h1>') 
    return res.end('<hr>') //ใช่return เพื่อให้จบการทำงาน ส
  }
  if(req.url == '/jobs'){
    res.write(`
      <!DOCTYPE html>
      <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        </head>
          <body style="background-color: green; color: #cccccc">
            <h1 py-5>Jobs</h1>


            <!-- JS, Popper.js, and jQuery -->
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
            </body>
      </html>
    `)
    return res.end()//จบการทำงาน
  }
  //--- End--------------------

  //ex.1 header 404
  // res.writeHead( 404,'Not found')
  // res.end('<h1 style="color: #ff0000; text-align: center"  >you fucking wrong!! <br> Not found 404</h1> <a href="/">Back</a>')

  //ex.2 Header 404
  res.statusCode = 404
  res.statusMessage = 'Not found'
  res.setHeader('content','text/html')
  res.end(`<div style="color: #ff0000; 
                text-align: center; 
                background-color: orange; 
                width: 100vw;
                height: 100vh ">
              
              <h2>you fucking wrong!!</h2> 
              <h2> Not found 404 </h2> 
              <a href="/">Back</a>
              </div>`)

}).listen(3000, () => console.log('Server is running...'))