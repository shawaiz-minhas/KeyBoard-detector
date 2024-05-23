let mainDiv = document.getElementById('setup');

window.addEventListener('keydown',((e)=>{
mainDiv.innerHTML = `
<table class="container">
  <thead>
    <tr>
      <th><h1>Key</h1></th>
      <th><h1>KeyCode</h1></th>
      <th><h1>Code</h1></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${e.key === ' ' ? 'Space' :e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
      
    </tr>
    
  </tbody>
</table>

`
}))