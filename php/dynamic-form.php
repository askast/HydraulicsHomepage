<?php
$cat=$_REQUEST['cate'];
if($cat==9 || $cat==10 || $cat==11 || $cat==12 || $cat==13 || $cat==14)
{
?>
        		<div class="pure-u-2-5 pure-u-md-1-3">
                  <label for="gpm">Temperature</label>
                  <input class="pure-u-4-5" id="gpm" type="text" required>
                </div>
                <div class="pure-u-2-5 pure-u-md-1-3">
                  <label for="gpm-unit">Units</label>
                  <select id="gpm-unit" class="pure-u-4-5 pure-input-1-5" onChange="getCat(this.value)">
                      <option value="1">DegC</option>
                      <option value="2">DegF</option>
                      <option value="3">K</option>
                      <option value="4">R</option>
                  </select>
                </div>
<?php
}
?>