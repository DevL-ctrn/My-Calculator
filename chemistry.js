function updateChemistryInputs() {
    const container = document.getElementById('chemInputsContainer');
    const type = document.getElementById('chemCalcType').value;
    container.innerHTML = '';

    switch(type) {
    case 'molarMass':
            container.innerHTML = `
                <label>Massa (g):</label><input type="number" id="mass"><br>
                <label>Número de mols (n):</label><input type="number" id="n"><br>
                <label>Massa molar (M g/mol):</label><input type="number" id="M"><br>
            `;
            break;


        case 'moles':
            container.innerHTML = `
                <label>Massa (m):</label><input type="number" id="m"><br>
                <label>Massa molar (M):</label><input type="number" id="M"><br>
                <label>Número de mols (n):</label><input type="number" id="n"><br>
            `;
            break;

        case 'concentration':
            container.innerHTML = `
                <label>Concentração (C em mol/L):</label><input type="number" id="C"><br>
                <label>Número de mols (n):</label><input type="number" id="n"><br>
                <label>Volume (V em L):</label><input type="number" id="V"><br>
            `;
            break;

        case 'idealGas':
            container.innerHTML = `
                <label>Pressão (P em atm):</label><input type="number" id="P"><br>
                <label>Volume (V em L):</label><input type="number" id="V"><br>
                <label>Número de mols (n):</label><input type="number" id="n"><br>
                <label>Constante R (0.082 atm·L/mol·K):</label><input type="number" id="R" value="0.082"><br>
                <label>Temperatura (T em K):</label><input type="number" id="T"><br>
            `;
            break;

        case 'percentComposition':
            container.innerHTML = `
                <label>Massa do elemento (g):</label><input type="number" id="massElement"><br>
                <label>Massa total da substância (g):</label><input type="number" id="massTotal"><br>
            `;
            break;

        default:
            break;
    }
}

// Função auxiliar para pegar valores
function getChemValues(ids) {
    let values = {};
    let emptyCount = 0;
    let emptyVar = '';
    ids.forEach(id => {
        const val = document.getElementById(id).value;
        if(val === '') {
            emptyCount++;
            emptyVar = id;
        } else {
            values[id] = parseFloat(val);
        }
    });
    return { values, emptyCount, emptyVar };
}

// Função principal de cálculo
function calculateChemistry() {
    const type = document.getElementById('chemCalcType').value;
    let result = '';

    switch(type) {

        
           case 'molarMass':
            var { values, emptyCount, emptyVar } = getChemValues(['mass','n','M']);
            if(emptyCount!==1){result='Preencha exatamente duas variáveis para calcular a terceira.'; break;}
            if(emptyVar==='M') result='Massa molar (M)='+(values.mass/values.n).toFixed(4)+' g/mol';
            if(emptyVar==='n') result='Número de mols (n)='+(values.mass/values.M).toFixed(4)+' mol';
            if(emptyVar==='mass') result='Massa (m)='+(values.n*values.M).toFixed(4)+' g';
            break;


        case 'moles':
            var { values, emptyCount, emptyVar } = getChemValues(['m','M','n']);
            if(emptyCount!==1){result='Preencha exatamente uma variável.'; break;}
            if(emptyVar==='n') result='Número de mols (n)='+(values.m/values.M).toFixed(2);
            if(emptyVar==='m') result='Massa (m)='+(values.n*values.M).toFixed(2);
            if(emptyVar==='M') result='Massa molar (M)='+(values.m/values.n).toFixed(2);
            break;

        case 'concentration':
            var { values, emptyCount, emptyVar } = getChemValues(['C','n','V']);
            if(emptyCount!==1){result='Preencha exatamente uma variável.'; break;}
            if(emptyVar==='C') result='Concentração (C)='+(values.n/values.V).toFixed(4)+' mol/L';
            if(emptyVar==='n') result='Número de mols (n)='+(values.C*values.V).toFixed(4);
            if(emptyVar==='V') result='Volume (V)='+(values.n/values.C).toFixed(4)+' L';
            break;

        case 'idealGas':
            var { values, emptyCount, emptyVar } = getChemValues(['P','V','n','R','T']);
            if(emptyCount!==1){result='Preencha exatamente uma variável.'; break;}
            if(emptyVar==='P') result='Pressão (P)='+(values.n*values.R*values.T/values.V).toFixed(4)+' atm';
            if(emptyVar==='V') result='Volume (V)='+(values.n*values.R*values.T/values.P).toFixed(4)+' L';
            if(emptyVar==='n') result='Número de mols (n)='+(values.P*values.V/(values.R*values.T)).toFixed(4);
            if(emptyVar==='T') result='Temperatura (T)='+(values.P*values.V/(values.n*values.R)).toFixed(2)+' K';
            break;

        case 'percentComposition':
            var { values, emptyCount, emptyVar } = getChemValues(['massElement','massTotal']);
            if(emptyCount!==0){result='Preencha todos os campos.'; break;}
            result='Porcentagem do elemento='+(values.massElement/values.massTotal*100).toFixed(2)+'%';
            break;

        default:
            result='Escolha um cálculo válido!';
    }

    document.getElementById('chemResult').textContent = 'Resultado: ' + result;
}