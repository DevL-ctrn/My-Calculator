function updateInputs() {
    const container = document.getElementById('inputsContainer');
    const type = document.getElementById('calcType').value;
    container.innerHTML = '';

    switch(type) {
        case 'areaSquare':
        case 'perimeterSquare':
            container.innerHTML = '<label>Lado:</label><input type="number" id="squareSide">';
            break;
        case 'areaCircle':
        case 'perimeterCircle':
            container.innerHTML = '<label>Raio:</label><input type="number" id="circleRadius">';
            break;
        case 'volumeCube':
            container.innerHTML = '<label>Lado:</label><input type="number" id="cubeSide">';
            break;
        case 'factorial':
            container.innerHTML = '<label>Número inteiro ≥ 0:</label><input type="number" id="factorialNum">';
            break;
        case 'isPrime':
            container.innerHTML = '<label>De:</label><input type="number" id="primeMin" value="2"><label>Até:</label><input type="number" id="primeMax">';
            break;
        case 'randomNumber':
            container.innerHTML = '<label>De:</label><input type="number" id="randMin"><label>Até:</label><input type="number" id="randMax">';
            break;
        case 'permutation':
            container.innerHTML = '<label>n:</label><input type="number" id="permN">';
            break;
        case 'arrangement':
            container.innerHTML = '<label>n:</label><input type="number" id="arrN"><label>r:</label><input type="number" id="arrR">';
            break;
        case 'combination':
            container.innerHTML = '<label>n:</label><input type="number" id="combN"><label>r:</label><input type="number" id="combR">';
            break;
        case 'pa':
            container.innerHTML = `
                <label>Primeiro termo (a1):</label><input type="number" id="pa_a1">
                <label>Razão (r):</label><input type="number" id="pa_r">
                <label>Termo (n):</label><input type="number" id="pa_n">
            `;
            break;
        case 'pg':
            container.innerHTML = `
                <label>Primeiro termo (a1):</label><input type="number" id="pg_a1">
                <label>Razão (q):</label><input type="number" id="pg_q">
                <label>Termo (n):</label><input type="number" id="pg_n">
            `;
            break;
        default:
            break;
    }
}

// --- Funções matemáticas ---
function calculateFactorial(n) {
    if(n === 0 || n === 1) return 1;
    let result = 1;
    for(let i = 2; i <= n; i++) result *= i;
    return result;
}

function primesInRange(min, max) {
    const primes = [];
    for(let n = Math.max(2, min); n <= max; n++) {
        let isPrime = true;
        for(let i = 2; i <= Math.sqrt(n); i++) {
            if(n % i === 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime) primes.push(n);
    }
    return primes;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function permutation(n) {
    return calculateFactorial(n);
}

function arrangement(n, r) {
    return calculateFactorial(n) / calculateFactorial(n - r);
}

function combination(n, r) {
    return calculateFactorial(n) / (calculateFactorial(r) * calculateFactorial(n - r));
}

// --- Área, perímetro e volume ---
function areaSquare(lado) { return lado * lado; }
function perimeterSquare(lado) { return 4 * lado; }
function areaCircle(raio) { return Math.PI * raio * raio; }
function perimeterCircle(raio) { return 2 * Math.PI * raio; }
function volumeCube(lado) { return lado * lado * lado; }

// --- PA e PG ---
function paTerm(a1, r, n) { return a1 + (n - 1) * r; }
function pgTerm(a1, q, n) { return a1 * Math.pow(q, n - 1); }

// --- Função principal ---
function calculate() {
    const type = document.getElementById('calcType').value;
    let result = '';

    switch(type) {
        case 'areaSquare':
            result = areaSquare(parseFloat(document.getElementById('squareSide').value));
            break;
        case 'perimeterSquare':
            result = perimeterSquare(parseFloat(document.getElementById('squareSide').value));
            break;
        case 'areaCircle':
            result = areaCircle(parseFloat(document.getElementById('circleRadius').value));
            break;
        case 'perimeterCircle':
            result = perimeterCircle(parseFloat(document.getElementById('circleRadius').value));
            break;
        case 'volumeCube':
            result = volumeCube(parseFloat(document.getElementById('cubeSide').value));
            break;
        case 'factorial':
            const numF = parseInt(document.getElementById('factorialNum').value);
            if(numF < 0) result = 'Número inválido!';
            else result = calculateFactorial(numF);
            break;
        case 'isPrime':
            const minP = parseInt(document.getElementById('primeMin').value);
            const maxP = parseInt(document.getElementById('primeMax').value);
            if(minP > maxP) result = 'Erro: min > max';
            else result = primesInRange(minP, maxP).join(', ');
            break;
        case 'randomNumber':
            const minR = parseInt(document.getElementById('randMin').value);
            const maxR = parseInt(document.getElementById('randMax').value);
            if(minR > maxR) result = 'Erro: min > max';
            else result = randomNumber(minR, maxR);
            break;
        case 'permutation':
            const nP = parseInt(document.getElementById('permN').value);
            result = permutation(nP);
            break;
        case 'arrangement':
            const nA = parseInt(document.getElementById('arrN').value);
            const rA = parseInt(document.getElementById('arrR').value);
            result = arrangement(nA, rA);
            break;
        case 'combination':
            const nC = parseInt(document.getElementById('combN').value);
            const rC = parseInt(document.getElementById('combR').value);
            result = combination(nC, rC);
            break;
        case 'pa':
            result = paTerm(
                parseFloat(document.getElementById('pa_a1').value),
                parseFloat(document.getElementById('pa_r').value),
                parseInt(document.getElementById('pa_n').value)
            );
            break;
        case 'pg':
            result = pgTerm(
                parseFloat(document.getElementById('pg_a1').value),
                parseFloat(document.getElementById('pg_q').value),
                parseInt(document.getElementById('pg_n').value)
            );
            break;
        default:
            result = 'Escolha um cálculo válido!';
    }

    document.getElementById('result').textContent = 'Resultado: ' + result;
}