function add() {
			var firstnum = parseFloat($('#firstnum').val());
			var secondnum=parseFloat($('#secondnum').val());
			if (firstnum && secondnum) {
				var answer=firstnum+secondnum;
				$('#display_answer').html('The sum is: '+answer);
			}
}
function subtract() {
			var firstnum = parseFloat($('#firstnum').val());
			var secondnum=parseFloat($('#secondnum').val());
			if (firstnum && secondnum) {
				var answer=firstnum-secondnum;
				$('#display_answer').html('The difference is: '+answer);
			}
}
function divide() {
			var firstnum = parseFloat($('#firstnum').val());
			var secondnum=parseFloat($('#secondnum').val());
			if (firstnum && secondnum) {
				var answer=firstnum/secondnum;
				$('#display_answer').html('The quotient is: '+answer);
			}
}
function multiply() {
			var firstnum = parseFloat($('#firstnum').val());
			var secondnum=parseFloat($('#secondnum').val());
			if (firstnum && secondnum) {
				var answer=firstnum*secondnum;
				$('#display_answer').html('The product is: '+answer);
			}
}

	