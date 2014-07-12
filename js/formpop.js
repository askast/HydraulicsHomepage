function getXMLHTTP()
{
  var xmlhttp=null;
  try
  {
    xmlhttp=new XMLHttpRequest();
  }
  catch(e)
  {
    try
    {
      xmlhttp=new ActiveXobject("Microsoft.XMLHTTP");
    }
    catch(e)
    {
      try
      {
        xmlhttp=new ActiveXObject("msxml2.XMLHTTP");
      }
      catch(e1)
      {
        xmlhttp=false;
      }
    }
  }
  return xmlhttp;
}
var strurl="dynamic-form.php?cate="+cat;
var req=getXMLHTTP();
function getCat(cat)
{
  var strurl="dynamic-form.php?cate="+cat;
  //alert(strurl);
  var req=getXMLHTTP();
  if(req==null)
  {
    alert("browser error");
  }
  if(req)
  {
    req.onreadystatechange=function()
    {
      if(req.readyState ==4 || req.readyState=="complete")
      {
        document.getElementById("ajaxresult").innerHTML=req.responseText;
      }
    };
    req.open("GET",strurl,true);
    req.send(null);
  }
}