jQuery(document).ready(function($){
  //open popup
  $('#btn-sortear').on('click', function(event){
    event.preventDefault();
    $('.popup').addClass('is-visible');
  });
  
  //close popup
  $('.popup').on('click', function(event){
    if( $(event.target).is('.popup-close') || $(event.target).is('.popup') ) {
      event.preventDefault();
      $(this).removeClass('is-visible');
      const popup = document.getElementById("times-sorteados");
      popup.innerHTML = ""
    }
  });
  //close popup when clicking the esc keyboard button
  $(document).keyup(function(event){
      if(event.which=='27'){
        $('.popup').removeClass('is-visible');
        const popup = document.getElementById("times-sorteados");
        popup.innerHTML = ""
      }
    });
});

function sortear() {
  let jogadores = document.getElementById("nomes").value.trim().split("\n");
  jogadores = jogadores.sort(() => Math.random() - 0.5)
  const quantidadeDeTimes = document.getElementById("ntimes").value;
  console.log("Jogadores: " + jogadores)
  console.log("Quantidade de times: " + quantidadeDeTimes)
  const jogadoresPorTime = Math.floor(jogadores.length/quantidadeDeTimes);
  console.log("Quantidade de jogadores por times: " + jogadoresPorTime)
  let j = 1;
  let times = []
  for(i = 1; i <= quantidadeDeTimes; i++) {
    console.log("Quantidade de jogadores " + jogadores.length)
    let count = 0;
    let time = []
    while(j <= jogadoresPorTime * i){
      time[count] = jogadores[j - 1]
      j++;
      count++;
    }
    times[i - 1] = time;
    if(i == quantidadeDeTimes && j <= jogadores.length) {
      console.log("i = " + i + " ; j = " + j)
      let a = 0;
      while(j <= jogadores.length){
        if(a < quantidadeDeTimes){
          times[a].push(jogadores[j - 1])
          a++;
          j++;
        } else {
          a = 0;
        }
      }
    }
  }
  const popup = document.getElementById("times-sorteados");
  for(i = 0; i < times.length; i++){
    const codigo = `<div class='time-formado'><h2>Time` + (i+1) + `: </h2>` + times[i].join("<br>") + `</div>`
    popup.innerHTML += codigo
  }
    
}