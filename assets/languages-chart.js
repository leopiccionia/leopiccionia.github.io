window.onload = function(){
	var chart = new CanvasJS.Chart('languages-chart',{
		animationEnabled: true,
		axisX: {
			title: 'How much I know',
			minimum: 0,
			maximum: 1,
			interval: 1
		},
		axisY: {
			title: 'How much I like',
			minimum: 0,
			maximum: 1,
			interval: 1
		},
		data: [{
			type: 'scatter',
			toolTipContent: '<b>{name}</b><br/>{note}',
			dataPoints: [
				{x: 0.4, y: 0.3, name: 'C'},
				{x: 0.95, y: 0.95, name: 'HTML5 + CSS3', note:'including Bootstrap'},		
				{x: 0.9, y: 0.5, name: 'Java'},
				{x: 0.8, y: 0.8, name: 'JavaScript', note:'mostly Node and Vue2, but also jQuery, Angular 1.x'},
				{x: 0.9, y: 0.95, name:'Lua', note: 'including MoonScript'},
				{x: 0.7, y: 0.6, name: 'PHP'},
				{x: 0.4, y: 0.8, name: 'Python'},
				{x: 0.3, y: 0.75, name: 'Ruby'}
			]
		}]
	});
	
	chart.render();
};