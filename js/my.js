$(function(){
	var i=$(".one").text();
	$(".plus").click(function(){
		i++;
		$(".one").text(i);
	})
	$(".minus").click(function(){
		// i=$(".one").text;'
		i--;
		if(i<=1){
			i=1;
		}
		$(".one").text(i);
	})
	$(".purchaseList li a").hover(function(){
		$(this).next().addClass("purchase_se").parent().siblings().children("span").removeClass("purchase_se");
	})
 	
	$(".tr1 label").click(function(){
		$(this).toggleClass("check");
		var num=$("[name=car1]").size();
		// $("[name=all_car]").prop("checked",$("[name=car1]:checked").size()==num));
		$("[name=all_car]").prop("checked",$("[name=car1]:checked").size()==num);})
	// $("[name=all]").prop("checked",$("[name=fruit]:checked").size()==num))

		// if($("[name=car1]:checked").size()==2){
		// 	alert(0);
			// $("[name=all_tr]").prop("checked");
			//  $(".all_tr label").addClass("check");
		// }
		// else{
		// 	$(".all_tr label").removeClass("check");
		// }
	$(".all_tr label").click(function(){
		
		$(".all_tr label,.tr1 label").toggleClass("check");

	})
})

