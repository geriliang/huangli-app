// 定义一个函数，用于根据日期返回黄历数据
export function getAlmanacData(date) {
    const data = {
        '2025-03-23': {
            good: '结婚, 开业, 搬家',
            bad: '签合同, 出行',
        },
        '2025-03-24': {
            good: '祭祀, 祈福, 装修',
            bad: '动土, 开工',
        },
        '2025-03-25': {
            good: '学习, 旅行, 运动',
            bad: '赌博, 投资',
        },
        '2025-03-26': {
            good: '开会, 写作, 读书',
            bad: '争吵, 决策',
        },
    };

    // 如果日期存在于数据中，返回对应的内容
    if (data[date]) {
        return data[date];
    }

    // 动态生成默认数据
    const randomGood = ['运动', '学习', '聚会', '祈福', '购物', '旅行', '写作'];
    const randomBad = ['争吵', '冒险', '投资', '赌博', '重大决策', '拖延', '熬夜'];

    return {
        good: randomGood[Math.floor(Math.random() * randomGood.length)],
        bad: randomBad[Math.floor(Math.random() * randomBad.length)],
    };
}