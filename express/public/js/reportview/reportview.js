var ReportView = function(inParams){
	var _this = this;
	var rowSize = 0;
	var params = 
		{
			columnPositions:[10,20,30,40,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000,1050,1100,1150,1200,1250,1300,1350,1400,1450,1500,1550,1600,1650,1700,1750,1800,1850,1900,1950,2000,2050,2100,2150,2200,2250,2300,2350,2400,2450,2500,2550,2600,2650,2700,2750,2800,2850,2900,2950,3000,3050,3100,3150],
			rowSizes:[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
			//rowPositions:[0,50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000,1050,1100,1150,1200,1250,1300,1350,1400,1450,1500,1550,1600,1650,1700,1750,1800,1850,1900,1950,2000,2050,2100,2150,2200,2250,2300,2350,2400,2450,2500,2550,2600,2650,2700,2750,2800,2850,2900,2950,3000,3050,3100,3150],
			
			fontSize:'10px',
			bold:false,
			font:'Arial',
			fontStyle:'normal',
			elementId:false


		}
	params = $.extend(params, inParams);

	//params.rowPositions[0] = parseInt(params.fontSize);

	var childDivHash = {};
	var lastRow = -1;
	var lastColumn = -1;


	this.add = function(inAddParams){
		var addParams = 
			{
				column:0,
				row:(inAddParams.column && inAddParams.column != 0) ? lastRow : lastRow + 1,
				font:'Arial',
				fontSize:false,
				fontColor:'black',
				text:false,
				bold:false,
				italic:false,
				justify:'left',
			}
		addParams = $.extend(addParams, inAddParams);
		addParams.column = (addParams.column == -1) ? 0:addParams.column;
		addParams.row = (addParams.row == -1) ? 0:addParams.row;
		lastColumn = addParams.column;
		lastRow = addParams.row;

		/*if(addParams.row > params.rowPositions.length){
			//getMinRowSize
		}*/

		//- create new div
		var newId = params.elementId + '_' + addParams.column + '_' + addParams.row;
		//console.log('fontSZ:' + addParams.fontSize);
		//console.log((addParams.fontSize) ? addParams.fontSize : '20px');

		_this.adjustRowSize(addParams.row,((addParams.fontSize) ? addParams.fontSize : params.fontSize));
		console.log('positRow:' +addParams.row + ':' +  _this.getRowPosition([addParams.row]));
		childDivHash[newId] = jQuery('<div/>',
			{
				id: newId,
				text: addParams.text,
				style: 	//'position 	: absolute' 															+ ';' 	+ ' ' + 
						'position 	: absolute' 															+ ';' 	+ ' ' + 
						'left		:' + params.columnPositions[addParams.column] 							+ ';' 	+ ' ' + 
						'top		:' + _this.getRowPosition([addParams.row])								+ 'px;' 	+ ' ' + 
						'font-size	:' + ((addParams.fontSize) ? addParams.fontSize : params.fontSize)		+ ';' 	+ ' ' + 
						'font-family:' + params.font 														+ ';' 	+ ' ' + 
						'vertical-align: middle'															+ ';' 	+ ' ' + 
						'font-style :' + params.fontStyle 													+ ';' 	+ ' '

				,	

			}
		);
		_this.redraw();
	}

	this.adjustRowSize = function(inRow, inTestSize){
		inTestSize = parseInt(inTestSize);
		//var currentRowSize = params.rowSizes[inRow];//params.rowPositions[inRow];
		console.log('adjustRowSize exist/test :' + params.rowSizes[inRow] + '   ' + inTestSize);
		if(inTestSize > params.rowSizes[inRow]){
			//inTestSize = inTestSize-params.rowSizes[inRow];/ll
			params.rowSizes[inRow] = inTestSize;
			console.dir(params.rowSizes);
			
		}
	}

	this.redraw = function(){

		var wrapDiv = jQuery('<div/>',
			{
				style: 	//'position 	: absolute' 															+ ';' 	+ ' ' + 
						'position 	: absolute' 															+ ';' 	+ ' ' 
						/*'left		:' + params.columnPositions[addParams.column] 							+ ';' 	+ ' ' + 
						'top		:' + _this.getRowPosition([addParams.row])								+ 'px;' 	+ ' ' + 
						'font-size	:' + ((addParams.fontSize) ? addParams.fontSize : params.fontSize)		+ ';' 	+ ' ' + 
						'font-family:' + params.font 														+ ';' 	+ ' ' + 
						'vertical-align: middle'															+ ';' 	+ ' ' + 
						'font-style :' + params.fontStyle 													+ ';' 	+ ' '*/

				,
			}
		);

		$('#' + params.elementId).html();
		for(childDivHashIndex in childDivHash){
			wrapDiv.append(childDivHash[childDivHashIndex]);
			$('#' + params.elementId).append(wrapDiv);//childDivHash[childDivHashIndex]);
		}
	}

	this.getMinRowSize = function(){
		return Math.min(params.rowSizes);
	}

	this.getMaxRowSize = function(){}

	this.getRowPosition = function(inRowNumber){
		if(inRowNumber > params.rowSizes.length){
			var needCount = inRowNumber - params.rowSizes.length;
			var minSize = _this.getMinRowSize();
			for(var index = 0; index < needCount; index++){
				params.rowSizes.push(minSize);
			}
		}
		/*if(inRowNumber == 0){
			return 0;
		}*/
		var calcLen = 0;
		for(var i = 0; i < inRowNumber ; i++){
			calcLen = calcLen + params.rowSizes[i];
		}
		return calcLen;
		//params.rowSizes
	}
}
//addParams.fontSize : params.fontSize
//append
//$( ".inner" ).append( "<p>Test</p>" );