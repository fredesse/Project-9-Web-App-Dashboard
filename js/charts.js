// Line chart
	// Hourly chart
	var trafficHour = document.getElementById("traffic-h").getContext("2d");
	var lineChartHour = new Chart(trafficHour, {
		type: 'line',
		data: {
	        labels: ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"],
	        datasets: [{
	            label: '# of Votes',
	            data: [10, 7, 10, 50, 65, 75, 60, 30],
	            backgroundColor: [
	                'rgba(140,125,237,.3)',
	            ],
	            borderColor: [
	                'rgb(140,125,237)'
	            ],
	            borderWidth: 1,
	            lineTension: 0,
	            pointBackgroundColor: '#fff'
	        }]
	    },
	    options: {
	        legend: {
	            display: false
	        }
	    }
	});
	var hideDisplayHour = document.getElementById("traffic-h");
	hideDisplayHour.style.display = "none";

	// Daily chart
	var trafficDay = document.getElementById("traffic-d").getContext("2d");
	var lineChartDay = new Chart(trafficDay, {
		type: 'line',
		data: {
	        labels: ["S", "M", "T", "W", "T", "F", "S"],
	        datasets: [{
	            label: '# of Votes',
	            data: [50, 75, 150, 100, 200, 175, 75],
	            backgroundColor: [
	                'rgba(140,125,237,.3)',
	            ],
	            borderColor: [
	                'rgb(140,125,237)'
	            ],
	            borderWidth: 1,
	            lineTension: 0,
	            pointBackgroundColor: '#fff'
	        }]
	    },
	    options: {
	        legend: {
	            display: false
	        }
	    }
	});
	var hideDisplayDay = document.getElementById("traffic-d");
	hideDisplayDay.style.display = "none";

	//Weekly chart
	var trafficWeek = document.getElementById("traffic-w").getContext("2d");
	var lineChartWeek = new Chart(trafficWeek, {
		type: 'line',
		data: {
	        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
	        datasets: [{
	            label: '# of Votes',
	            data: [500, 1000, 750, 1250, 1200, 1750, 775, 1000, 1800, 1900, 2100],
	            backgroundColor: [
	                'rgba(140,125,237,.3)',
	            ],
	            borderColor: [
	                'rgb(140,125,237)'
	            ],
	            borderWidth: 1,
	            lineTension: 0,
	            pointBackgroundColor: '#fff'
	        }]
	    },
	    options: {
	        legend: {
	            display: false
	        }
	    }
	});
	var hideDisplayWeek = document.getElementById("traffic-w");
	hideDisplayWeek.style.display = "none";

	// Monthly chart
	var trafficMonth = document.getElementById("traffic-m").getContext("2d");
	var lineChartMonth = new Chart(trafficMonth, {
		type: 'line',
		data: {
	        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	        datasets: [{
	            label: '# of Votes',
	            data: [5000, 10000, 7500, 12500, 12000, 17500, 7750, 10000, 18000, 19000, 21000, 15000],
	            backgroundColor: [
	                'rgba(140,125,237,.3)',
	            ],
	            borderColor: [
	                'rgb(140,125,237)'
	            ],
	            borderWidth: 1,
	            lineTension: 0,
	            pointBackgroundColor: '#fff'
	        }]
	    },
	    options: {
	        legend: {
	            display: false
	        }
	    }
	});
	var hideDisplayMonth = document.getElementById("traffic-m");
	hideDisplayMonth.style.display = "none";

// Bar chart
var dailyTraffic = document.getElementById("daily-traffic").getContext("2d");
var barChart = new Chart(dailyTraffic, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            data: [50, 75, 150, 100, 200, 175, 75],
            backgroundColor: [
                '#8c7ded',
                '#8c7ded',
                '#8c7ded',
                '#8c7ded',
                '#8c7ded',
                '#8c7ded',
                '#8c7ded'
            ],
            cornerRadius: 10,
        }]
    },
    options: {
        legend: {
            display: false
        }
    }
});

// Doughnut (mmmmmmmm...) chart
var mobileUsers = document.getElementById("mobile-users").getContext("2d");
var doughnutChart = new Chart(mobileUsers, {
	type: 'doughnut',
	data: {
        labels: ["Desktop", "Tablets", "Phones"],
        datasets: [{
            label: '# of Votes',
            data: [65, 18, 17],
            backgroundColor: [
                '#8c7ded',
                '#8ad199',
                '#8abbd1'
            ],
            borderWidth: 0
        }]
    },
    options: {
        legend: {
            display: true,
            position: 'right'
        }
    }
});



























