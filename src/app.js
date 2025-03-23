import { getAlmanacData } from './data/almanac-data.js'; // 导入黄历数据函数

// 获取表单和结果显示区域的 DOM 元素
const form = document.getElementById('date-form');
const resultDiv = document.getElementById('result'); // 确保获取到结果显示的容器

// 为表单绑定提交事件
form.addEventListener('submit', (event) => {
    event.preventDefault(); // 阻止表单默认提交行为

    // 获取用户输入的日期并格式化为 YYYY-MM-DD
    const dateInput = new Date(document.getElementById('date-input').value)
        .toISOString()
        .split('T')[0];

    // 检查用户是否选择了日期
    if (!dateInput || dateInput === 'Invalid Date') {
        resultDiv.innerHTML = '<p>请选择一个有效的日期！</p>';
        return;
    }

    // 调用函数获取黄历数据
    const result = getAlmanacData(dateInput);

    // 将结果显示在页面上
    resultDiv.innerHTML = `
        <h2>${dateInput} 的黄历</h2>
        <p><strong>宜：</strong>${result.good}</p>
        <p><strong>忌：</strong>${result.bad}</p>
    `;
});