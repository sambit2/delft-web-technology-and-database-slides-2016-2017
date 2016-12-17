	//reads a number from the element; tries first value and then innerHTML
	//increments the number
	//writes it back to the element (possible with some additional text)
	function incrementSB( elementIDString, addonText ) {
	
		var thisElement = document.getElementById(elementIDString);
		var num;
		if( thisElement.value!=undefined && thisElement.value.length > 0 ) {
			num = parseInt(thisElement.value,10);
		}
		else if( thisElement.innerHTML!=undefined && thisElement.innerHTML.length > 0 ) {
			num = parseInt(thisElement.innerHTML,10);
		}
		else {
			console.log("Error at incrementSB - expected value/innerHTML property");
			return;
		}

		if(num==null) {
			console.log("Error at incrementSB - expected numerical value to parse");
			return;
		}

		num++;

		if( thisElement.value!=undefined && thisElement.value.length > 0) {
			thisElement.value = num+addonText;
		}
		else if(thisElement.innerHTML!=undefined) {
			thisElement.innerHTML = num+addonText;
		}
	};

var js1Lecture = {
	S_A_counter : 0, 
	S_B_1 : 0,
	S_B_2 : 0,
	S_B_3 : 0,
	S_D_currentPos : 0,
	S_D_numSeconds : 0,
	S_B_interval : [],

	helloWorld : function()
	{
		alert("Hello World!");
	},
	browserAlert : function()
	{
		alert("Browser name: "+navigator.appName+"\nCode name: "+navigator.appCodeName+"\nVersion: "+navigator.appVersion);
	},
	cookieAlert : function()
	{
		alert("Are cookies enabled: "+navigator.cookieEnabled);
	},
	languageAlert : function ()
	{
		alert("Browser language: "+navigator.language);
	},
	multiplyAlert : function(x, y)
	{
		var myX = Number(x.value);
		var myY = Number(y.value);
		var myRes = myX * myY;
		alert("Result of "+myX+" x "+myY+" = "+myRes);
	},

	current_object_buttons : function(times,id) {
		var input = parseInt(document.getElementById(id).value);
		var t = parseInt(times);
		if(isNaN(input) || isNaN(t)){alert('Not a number!');}
		else{alert(input*t);}
	},

	S_B_mouseover : function(elementID, timeout, addonText) {
		this.S_B_interval[elementID]=setInterval(incrementSB, timeout,elementID, addonText);
	},

	S_B_mouseout : function(elementID, addonText)
	{
		clearInterval(this.S_B_interval[elementID]);
		var thisElement = document.getElementById(elementID);
		if( thisElement.value.length > 0) {
			thisElement.value = "0"+addonText;
		}
		else {
			thisElement.innerHTML = "0"+addonText;
		}
	},

	checkTextAtKeyPress : function(e) {
		var givenText = "S_D_1";
		var typedText = "S_D_2";
		var timerLog = "S_D_3";

		var textToType = document.getElementById(givenText).value;

		//we reached the end, do nothing
		if(this.S_D_currentPos>=textToType.length) {return;}

		var nextChar = textToType.charAt(this.S_D_currentPos);

		var keyPressed = String.fromCharCode(e.which);
		console.log("Key pressed: "+keyPressed+", charCode: "+e.which);

		//correct key was pressed
		if(nextChar==keyPressed) {
			document.getElementById(typedText).style.backgroundColor="rgb(255,255,255)";
			document.getElementById(typedText).value = textToType.substring(0,this.S_D_currentPos+1);
			this.S_D_currentPos++;

			//first time key was pressed, start counter
			if(this.S_D_currentPos==1) {
				this.S_B_interval[timerLog]=setInterval(function(){ incrementSB(timerLog, " seconds");}, 1000);

			}

			//we reached the end
			if(this.S_D_currentPos==textToType.length) {
				clearInterval(this.S_B_interval[timerLog]);
				document.getElementById(timerLog).style.color="orange";
			}
		}
		//incorrect key
		else {
			document.getElementById(typedText).style.backgroundColor="rgb(255,100,100)";
		}
	},

	movingTheMouseWithin : function(e) {

		var box = document.getElementById("S_C_6");
		box.style.top = (e.clientY)+"px";
		box.style.left = (e.clientX)+"px";
		box.innerHTML="X="+e.clientX+", Y="+e.clientY;
		box.style.visibility = "visible";
	},

	movingTheMouseOutside : function(e) {
		var box = document.getElementById("S_C_6");
		box.style.visibility = "hidden";
	},

	updateNuggets : function() {
		var n1 = document.getElementById('S_C_2').value;
		var n2 = document.getElementById('S_C_3').value;
		var n3 = document.getElementById('S_C_4').value;

		var selected = null;
		var myTextArea = document.getElementById('S_C_1');
		if (myTextArea.selectionStart != undefined)
		{
			var p1 = myTextArea.selectionStart;
			var p2 = myTextArea.selectionEnd;
			selected = myTextArea.value.substring(p1, p2);
			console.log("selected: "+ selected);
		}

		if(selected==n1) {document.getElementById('S_C_2').value = "";}
		else if(selected==n2){document.getElementById('S_C_3').value = "";}
		else if(selected==n3){document.getElementById('S_C_4').value = "";}
		else if(n1.length==0){document.getElementById('S_C_2').value = selected;}
		else if(n2.length==0){document.getElementById('S_C_3').value = selected;}
		else if(n3.length==0)
		{
			document.getElementById('S_C_4').value = selected;
			document.getElementById('S_C_5').classList.add("pure-button");
			document.getElementById('S_C_5').classList.add("pure-button-secondary");			delete document.getElementById('S_C_5').hidden;
		}
		else {
			alert('You have selected three information nuggets. Either unselect one or manually empty text box.');
		}
	}
};
