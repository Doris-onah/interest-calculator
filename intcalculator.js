function convert() 
{
  p = document.getElementById("principal").value;
  r = document.getElementById("rate").value;
  t = document.getElementById("time").value;
  result =  (p*(1 + (r*t/100)));
  document.getElementById("result").value = result;
  
}
