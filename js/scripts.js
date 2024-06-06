function mailTo(address) {
  return '<a href="mailto:' + address + '">' + address + '</a>';
}


function setEmail() {
  // try to prevent spam without annoying users...
  var user = '\u0068\u0061\u006F\u0063\u006f\u006e\u0067\u0030\u0030\u0031';  // haocong001
  var domain = '\u0040\u006E\u0074\u0075\u002E\u0065\u0064\u0075\u002E\u0073\u0067';  // @ntu.edu.sg
  $('.my-email').html(mailTo(user + domain));
}

function toggleAbstract(key) {
  $('.pub-abstract.'+key).slideToggle();
}
