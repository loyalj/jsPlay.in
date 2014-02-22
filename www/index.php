<?php

  $basePath = "";
?>
<html>
  <head>
    <title>Cosmic Frontier</title>
    <link rel="stylesheet" type="text/css" href="<?= $basePath;?>/css/main.css"/>
    <script data-main="<?= $basePath; ?>/js/bootstrap" src="<?= $basePath; ?>/js/require-jquery.js"></script>
    <!--script src="http://space.jsplay.in:8201/socket.io/socket.io.js"></script-->
  </head>

  <body>
    <center>
      <canvas id="gameCanvas" width="1024" height="768"></canvas>
      <div id="footer"></div>
    </center>
  </body>
</html>
