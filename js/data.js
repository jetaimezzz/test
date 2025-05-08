// 模拟数据
const productionPlanData = {
    labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
    values: [45, 50, 48, 65, 75, 80, 70, 60]
};

const equipmentOperationData = {
    labels: ['设备A', '设备B', '设备C', '设备D', '设备E'],
    values: [75, 85, 65, 90, 80]
};

const loadChartData = {
    labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
    values: [3200, 3100, 3300, 3500, 3625, 3500, 3400, 3300]
};

const mainWebDefectData = {
    labels: ['本体发热', '油气压力', '外部设备'],
    values: [42, 38, 20]
};

const customerServiceData = [
    { label: '业务申请', value: 120 },
    { label: '故障报修', value: 37 },
    { label: '意见待办', value: 21 },
    { label: '投诉', value: 53 },
    { label: '12398投诉', value: 12 }
];