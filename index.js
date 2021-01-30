
//Anil Acahrya sir

let cl = $(".card1");
cl.mouseover(function() {
  $(".card1").addClass("change");
  $(this).text("Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typespecimen book. It has survived not onl");
});
cl.mouseout(function() {

  $(".card1").html("Anil Acharya <br/><br/> rinly z<br /> learn at xyz</p>");

  $(this).removeClass("change");
});


//Pournima Kawalkar mam
let area = $(".card2");

area.mouseover(function() {
  $(".card2").addClass("change");
  $(".card2").text("Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typespecimen book. It has survived not onl");

});
area.mouseout(function() {

  $(".card2").html("Pournima Kawalkar <br/><br/> rinly z<br /> learn at xyz</p>");
    $(this).removeClass("change");
});
