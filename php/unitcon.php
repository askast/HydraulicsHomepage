<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Frequently used hydraulics resources">

  <title>Hydraulics Homepage&mdash;Unit Converter</title>

  <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/pure-min.css">
  <link rel="stylesheet" href="../css/layouts/side-menu.css">
  <link rel="stylesheet" href="../css/user.css">


</head>
<body>
  <div id="layout">
    <div id="menu">
      <div class="pure-menu pure-menu-open">
        <a class="pure-menu-heading" href="#"><img src="http://www.taco-hvac.com/images/logo.png" alt="Taco Inc."></a>

        <ul>
          <li><a href="../index.html">Home</a></li>
          <li><a href="lobanoff.php">Lobanoff</a></li>
          <li class="menu-item-divided pure-menu-selected"><a href="unitcon.php">Unit Convertion</a></li>

          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>

    <div id="main">
      <div class="header">
        <h1>Unit Converter</h1>
        <h2>Our best work is done under pressure</h2>
      </div>

      <div class="content">
        <h2 class="content-subhead">Inputs</h2>
        <p>
          <form class="pure-form pure-form-stacked" action="lobanoff.php" method="POST">
            <fieldset class="pure-group">
              <div class="pure-g">
                <div class="pure-u-1-5 pure-u-md-1-3">
                  <label for="rpm">Rotational Speed</label>
                  <input class="pure-u-4-5" id="rpm" type="text" required>
                </div>
                <div class="pure-u-1-5 pure-u-md-1-3">
                  <label for="rpm-unit">Units</label>
                  <select id="rpm-unit" class="pure-u-4-5 pure-input-1-5">
                      <option>RPM</option>
                      <option>RPS</option>
                  </select>
                </div>
              </div>
              <div class="pure-g">
                <div class="pure-u-1-5 pure-u-md-1-3">
                  <label for="gpm">Volume Flow Rate</label>
                  <input class="pure-u-4-5" id="gpm" type="text" required>
                </div>
                <div class="pure-u-1-5 pure-u-md-1-3">
                  <label for="gpm-unit">Units</label>
                  <select id="gpm-unit" class="pure-u-4-5 pure-input-1-5" onChange="getCat(this.value)">
                      <option value="1">GPM</option>
                      <option value="2">GPS</option>
                      <option value="3">M3/S</option>
                      <option value="4">M3/M</option>
                      <option value="5">M3/H</option>
                      <option value="6">Liters/S</option>
                      <option value="7">Liters/M</option>
                      <option value="9">Kg/H</option>
                      <option value="10">Kg/M</option>
                      <option value="11">Kg/S</option>
                      <option value="12">Lbs/H</option>
                      <option value="13">Lbs/M</option>
                      <option value="14">Lbs/S</option>
                  </select>
                </div>
                <div class="pure-u-2-5 pure-u-md-1-3" id="ajaxresult"></div>
              </div>
              <div class="pure-g">
                <div class="pure-u-1-5 pure-u-md-1-3">
                  <label for="z">Number of vanes</label>
                  <input class="pure-u-4-5" id="z" type="text" required>
                </div>
              </div>
              <div class="pure-g">
                <div class="pure-u-1-5 pure-u-md-1-3">
                  <label for="shaftd">Shaft Diameter</label>
                  <input class="pure-u-4-5" id="shaftd" type="text">
                </div>
                <div class="pure-u-1-5 pure-u-md-1-3">
                  <label for="gpm-unit">Units</label>
                  <select id="gpm-unit" class="pure-u-4-5 pure-input-1-5">
                      <option value="1">Inches</option>
                      <option value="2">Meters</option>
                      <option value="3">Millimeters</option>
                  </select>
                </div>

              </div>

                  <button type="submit" class="pure-button pure-button-primary">Submit</button>
              </fieldset>
          </form>
        </p>


  <script src="../js/ui.js"></script>
  <script type="text/javascript" src="../js/jquery.js"></script>
  <script src="../js/formpop.js"></script>
</body>
</html>