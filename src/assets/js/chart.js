import Chart from "chart.js/auto";

(function () {
    const chartCanvas = document.getElementById("example-chart");
    const chart = new Chart(chartCanvas, {
        type: "line",
        data: {
            labels: [
                "يناير",
                "فبراير",
                "مارس",
                "ابريل",
                "مايو",
                "يونيو",
                "يوليو",
                "اغسطس",
                "سبتمبر",
                "اكتوبر",
                "نوفمبر",
                "ديسمبر",
            ],
            datasets: [
                {
                    label: "مبيعات الشهر",
                    borderColor: "#2541b2",
                    backgroundColor: "transparent",
                    data: [3, 2, 3, 6, 5, 6, 7, 8, 9, 10, 7, 8],
                    lineTension: 0.2,
                },
            ],
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                y: {
                    display: false,
                },
                x: {
                    position: "top",
                },
            },
        },
    });

    const navigation = document.querySelector('.c-table__navigation');
    const randomArray = (myLength, max) => Array.from({length: myLength}, () => Math.round(Math.random() * max));

    navigation.addEventListener('click', () => {
        chart.data.datasets[0].data = randomArray(12, 1200);
        chart.update();
    });
})();
