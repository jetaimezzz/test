// 等待文档加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 今日生产计划柱状图
    const todayPlanCtx = document.getElementById('today-plan-chart').getContext('2d');
    new Chart(todayPlanCtx, {
        type: 'bar',
        data: {
            labels: productionPlanData.labels,
            datasets: [{
                label: '生产计划',
                data: productionPlanData.values,
                backgroundColor: 'rgba(0, 215, 255, 0.6)',
                borderColor: 'rgba(0, 215, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 135, 255, 0.1)'
                    },
                    ticks: {
                        color: '#00d5ff'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0, 135, 255, 0.1)'
                    },
                    ticks: {
                        color: '#00d5ff'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#00d5ff'
                    }
                }
            }
        }
    });

    // 35kV及以上设备运行情况柱状图
    const barChartCtx = document.getElementById('bar-chart').getContext('2d');
    new Chart(barChartCtx, {
        type: 'bar',
        data: {
            labels: equipmentOperationData.labels,
            datasets: [{
                label: '负载率',
                data: equipmentOperationData.values,
                backgroundColor: 'rgba(0, 215, 255, 0.6)',
                borderColor: 'rgba(0, 215, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 135, 255, 0.1)'
                    },
                    ticks: {
                        color: '#00d5ff'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0, 135, 255, 0.1)'
                    },
                    ticks: {
                        color: '#00d5ff'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#00d5ff'
                    }
                }
            }
        }
    });

    // 电网负荷图表
    const loadChartCtx = document.getElementById('load-chart').getContext('2d');
    new Chart(loadChartCtx, {
        type: 'line',
        data: {
            labels: loadChartData.labels,
            datasets: [{
                label: '电网负荷 (MW)',
                data: loadChartData.values,
                fill: false,
                backgroundColor: 'rgba(0, 215, 255, 0.6)',
                borderColor: 'rgba(0, 215, 255, 1)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 135, 255, 0.1)'
                    },
                    ticks: {
                        color: '#00d5ff'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0, 135, 255, 0.1)'
                    },
                    ticks: {
                        color: '#00d5ff'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#00d5ff'
                    }
                }
            }
        }
    });

    // 主网缺陷情况环状图
    const pieChartCtx = document.getElementById('pie-chart').getContext('2d');
    new Chart(pieChartCtx, {
        type: 'doughnut',
        data: {
            labels: mainWebDefectData.labels,
            datasets: [{
                data: mainWebDefectData.values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#00d5ff'
                    }
                }
            }
        }
    });

    // 95598工单仪表盘
    customerServiceData.forEach((item, index) => {
        const gaugeCtx = document.getElementById(`gauge${index + 1}`).getContext('2d');
        new Chart(gaugeCtx, {
            type: 'doughnut',
            data: {
                labels: [item.label, ''],
                datasets: [{
                    data: [item.value, 100 - item.value],
                    backgroundColor: [
                        'rgba(0, 215, 255, 0.6)',
                        'rgba(10, 30, 60, 0.6)'
                    ],
                    borderColor: [
                        'rgba(0, 215, 255, 1)',
                        'rgba(10, 30, 60, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                cutout: '80%',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                }
            }
        });
    });
});