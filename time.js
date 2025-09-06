function calculateDates() {
    const startInput = document.getElementById('startDate').value;
    const endInput = document.getElementById('endDate').value;
    const resultContainer = document.getElementById('dateResult');

    const start = new Date(startInput);
    const end = new Date(endInput);

    if (!startInput || !endInput || isNaN(start.getTime()) || isNaN(end.getTime())) {
        resultContainer.textContent = 'Insira datas válidas!';
        return;
    }
    if (end < start) {
        resultContainer.textContent = 'A data final deve ser depois da data inicial!';
        return;
    }

    const totalDays = Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1;

    let weekdays = 0;
    let weekends = 0;
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        const day = d.getDay();
        if (day === 0 || day === 6) weekends++;
        else weekdays++;
    }

    const weeks = Math.floor(totalDays / 7);
    
    resultContainer.innerHTML = `
        Número total de dias: ${totalDays}<br>
        Dias úteis (segunda a sexta): ${weekdays}<br>
        Fins de semana (sábado e domingo): ${weekends}<br>
        Semanas completas: ${weeks}
    `;
}