function updateComputingInputs() {
    const container = document.getElementById('computeInputsContainer');
    const type = document.getElementById('computeCalcType').value;
    container.innerHTML = ''; // limpa o container

    switch(type) {
        case 'storage':
            container.innerHTML = `
                <label>Valor:</label><input type="number" id="storageValue"><br>
                <label>De:</label>
                <select id="storageFrom">
                    <option value="B">Bytes (B)</option>
                    <option value="KB">Kilobytes (KB)</option>
                    <option value="MB">Megabytes (MB)</option>
                    <option value="GB">Gigabytes (GB)</option>
                    <option value="TB">Terabytes (TB)</option>
                </select><br>
                <label>Para:</label>
                <select id="storageTo">
                    <option value="B">Bytes (B)</option>
                    <option value="KB">Kilobytes (KB)</option>
                    <option value="MB">Megabytes (MB)</option>
                    <option value="GB">Gigabytes (GB)</option>
                    <option value="TB">Terabytes (TB)</option>
                </select><br>
            `;
            break;

        case 'numberBase':
            container.innerHTML = `
                <label>Valor:</label><input type="text" id="numValue"><br>
                <label>De:</label>
                <select id="numFrom">
                    <option value="bin">Binário</option>
                    <option value="dec">Decimal</option>
                    <option value="hex">Hexadecimal</option>
                </select><br>
                <label>Para:</label>
                <select id="numTo">
                    <option value="bin">Binário</option>
                    <option value="dec">Decimal</option>
                    <option value="hex">Hexadecimal</option>
                </select><br>
            `;
            break;

        case 'logicOp':
            container.innerHTML = `
                <label>Operando A (0 ou 1):</label><input type="number" id="opA"><br>
                <label>Operando B (0 ou 1):</label><input type="number" id="opB"><br>
                <label>Operação:</label>
                <select id="logicType">
                    <option value="AND">AND</option>
                    <option value="OR">OR</option>
                    <option value="XOR">XOR</option>
                    <option value="NOT">NOT (apenas A)</option>
                </select><br>
            `;
            break;

        case 'bandwidth':
            container.innerHTML = `
                <label>Valor:</label><input type="number" id="bandValue"><br>
                <label>De:</label>
                <select id="bandFrom">
                    <option value="Mbps">Mbps</option>
                    <option value="MBps">MB/s</option>
                </select><br>
                <label>Para:</label>
                <select id="bandTo">
                    <option value="Mbps">Mbps</option>
                    <option value="MBps">MB/s</option>
                </select><br>
            `;
            break;

        default:
            break;
    }
}

function calculateComputing() {
    const type = document.getElementById('computeCalcType').value;
    let result = '';

    switch(type) {
        case 'storage':
            const value = parseFloat(document.getElementById('storageValue').value);
            const from = document.getElementById('storageFrom').value;
            const to = document.getElementById('storageTo').value;
            if(isNaN(value)) { result = 'Insira um valor válido!'; break; }

            const unitMap = { B:1, KB:1024, MB:1024*2, GB:10243, TB:1024*4 };
            result = (value * unitMap[from] / unitMap[to]).toFixed(4) + ' ' + to;
            break;

        case 'numberBase':
            let val = document.getElementById('numValue').value.trim();
            const numFrom = document.getElementById('numFrom').value;
            const numTo = document.getElementById('numTo').value;
            if(val === '') { result='Insira um valor!'; break; }

            // converte para decimal primeiro
            let decimal;
            try {
                if(numFrom==='bin') decimal = parseInt(val,2);
                else if(numFrom==='dec') decimal = parseInt(val,10);
                else if(numFrom==='hex') decimal = parseInt(val,16);
                else throw 'Base inválida';
            } catch {
                result = 'Valor inválido para a base selecionada!';
                break;
            }

            // converte para base de destino
            if(numTo==='bin') result = decimal.toString(2);
            else if(numTo==='dec') result = decimal.toString(10);
            else if(numTo==='hex') result = decimal.toString(16).toUpperCase();
            break;

        case 'logicOp':
            const a = parseInt(document.getElementById('opA').value);
            const b = parseInt(document.getElementById('opB').value);
            const op = document.getElementById('logicType').value;
            if(op==='NOT') result = a===0 ? 1 : 0;
            else if([0,1].includes(a) && [0,1].includes(b)) {
                if(op==='AND') result = a & b;
                if(op==='OR') result = a | b;
                if(op==='XOR') result = a ^ b;
            } else result='Insira 0 ou 1 nos operandos!';
            break;

        case 'bandwidth':
            const valBand = parseFloat(document.getElementById('bandValue').value);
            const fromB = document.getElementById('bandFrom').value;
            const toB = document.getElementById('bandTo').value;
            if(isNaN(valBand)) { result='Insira um valor válido!'; break; }
            // 1 Byte = 8 bits
            if(fromB==='Mbps' && toB==='MBps') result = (valBand/8).toFixed(4)+' MB/s';
            else if(fromB==='MBps' && toB==='Mbps') result = (valBand*8).toFixed(4)+' Mbps';
            else result = valBand + ' ' + toB;
            break;

        default:
            result='Escolha um cálculo válido!';
    }

    document.getElementById('computeResult').textContent = 'Resultado: ' + result;
}