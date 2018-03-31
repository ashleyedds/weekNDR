$(document).ready(function () {

    var url = window.location.href;
    console.log(url);
    var userId;

    $.get("/api/user_data").then(function (data) {
        $(".member-name").text(data.name);
        $(".dashboard-desktop-profile").attr("src", data.pic);
        $(".dashboard-profile").attr("src", data.pic);
        userId = data.Id;
    });

    $("#logout-button").on("click", function () {
        $.get("/api/logout").then(function () {
            console.log("you are logged out");
        })
    })

    if (url === "http://localhost:8080/dashboard") {
        getInterestList();
        console.log("this worked")
    }

    function getInterestList() {
        $.get("/api/get_interests", function (data) {
            console.log("api worked" + data[0].title);
            // window.location.href = "/dashtest";
            getPieChart(data)
            getBarChart(data);
            getScaleChart(data);
            displayInterestBudget(data);
        });

    }

    function displayInterestBudget(data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            if (data[i].title === "Movies") {
                $(".movie-bucket").html("$" + data[i].estCost);
            } else if (data[i].title === "Concerts") {
                $(".music-bucket").html("$" + data[i].estCost);
            } else if (data[i].title === "Shopping") {
                $(".shopping-bucket").html("$" + data[i].estCost);
            } else if (data[i].title === "Eating Out") {
                $(".food-bucket").html("$" + data[i].estCost);
            } else if (data[i].title === "Drinks") {
                $(".drinks-bucket").html("$" + data[i].estCost);
            } else if (data[i].title === "Outings") {
                $(".outing-bucket").html("$" + data[i].estCost);
            }
        }
    }



    function getPieChart(data) {
        console.log(data);
        console.log("Something Happened")
        var dataPlotly = [{
            values: [],
            labels: [],
            type: 'pie',
            marker: {
                colors: ['rgb(54, 50, 153)', 'rgb(17, 123, 153)', 'rgb(37, 180, 167)', 'rgb(134, 191, 118)', 'rgb(249, 210, 41)', 'rgb(244, 236, 21)']
            },
        }];


        for (let i = 0; i < data.length; i++) {

            var cost = parseInt(data[i].estCost);
            var title = data[i].title;


            dataPlotly[0].values.push(cost);
            dataPlotly[0].labels.push(title);
            if (i === data.length - 1) {
                Plotly.newPlot('myDiv3', dataPlotly);

                console.log(dataPlotly);
            }
        }
    }

    function getScaleChart(data) {
        var percentageToGoal = 175;

        // Trig to calc meter point
        var degrees = 180 - percentageToGoal,
            radius = .5;
        var radians = degrees * Math.PI / 180;
        var x = radius * Math.cos(radians);
        var y = radius * Math.sin(radians);

        // Path: may have to change to create a better triangle
        var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
            pathX = String(x),
            space = ' ',
            pathY = String(y),
            pathEnd = ' Z';
        var path = mainPath.concat(pathX, space, pathY, pathEnd);

        var data = [{
            type: 'scatter',
            x: [0], y: [0],
            marker: { size: 28, color: '#a7ff84' },
            showlegend: false,
            name: 'percentage to goal',
            text: percentageToGoal,
            hoverinfo: 'text+name'
        },
        {
            values: [50/6, 50/6, 50/6, 50/6, 50/6, 50/6, 50],
            rotation: 90,
            text: ['100%!', '81-99%', '61-80%', '41-60%',
                '21-40%', '0-20%', ''],
            textinfo: 'text',
            textposition: 'inside',
            marker: {
                colors: ['rgb(8,24,83)', 'rgb(11, 34, 116)',
                    'rgb(15, 47, 163)', 'rgb(20, 61, 210)',
                    'rgb(45, 86, 235)', 'rgb(92, 124, 240)',
                    'rgba(255, 255, 255, 0)']
            },
            labels: ['151-180', '121-150', '91-120', '61-90', '31-60', '0-30', ''],
            hoverinfo: 'label',
            hole: .5,
            type: 'pie',
            showlegend: false
        }];

        var layout = {
            shapes: [{
                type: 'path',
                path: path,
                fillcolor: '#a7ff84',
                line: {
                    color: '#a7ff84'
                }
            }],
            title: 'Percentage to Goal',
            font: {
                color: "#d9d9d9"
            },
            height: 500,
            width: 500,
            xaxis: {
                zeroline: false, showticklabels: false,
                showgrid: false, range: [-1, 1]
            },
            yaxis: {
                zeroline: false, showticklabels: false,
                showgrid: false, range: [-1, 1]
            }
        };

        Plotly.newPlot('myDiv1', data, layout);
    }

    function getBarChart(res) {
        var trace1 = {
            x: [],
            y: [],
            name: 'Estimated Cost',
            type: 'bar'
        };

        var trace2 = {
            x: [],
            y: [],
            name: 'Actual Cost',
            type: 'bar'
        };

        var data = [trace1, trace2];

        var layout = { barmode: 'group' };

        for (let i = 0; i < res.length; i++) {

            var cost = parseInt(res[i].estCost);
            var title = res[i].title;


            trace1.x.push(title);
            trace2.x.push(title);
            trace1.y.push(cost);
            trace2.y.push(cost - 4)
            if (i === res.length - 1) {
                Plotly.newPlot('myDiv2', data, layout);

            }
        }

    }

})